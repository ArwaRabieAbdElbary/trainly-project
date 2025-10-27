/* eslint-disable no-undef */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Stripe = require("stripe");

admin.initializeApp();
const db = admin.firestore();

// مفتاح Stripe السري - يُؤخذ من متغيرات البيئة
// ⚠️ للـ Deploy: أضف STRIPE_SECRET_KEY في Firebase Console > Functions > Configuration
// 📝 راجع SETUP_INSTRUCTIONS.md للحصول على القيمة
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// ⚡ إنشاء جلسة دفع جديدة
exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  // ✅ 1. CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  try {
    // ✅ 2. استخراج Token من headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.error("❌ No authorization header");
      return res.status(401).json({ error: { message: "Unauthorized" } });
    }

    const token = authHeader.split('Bearer ')[1];
    console.log("🔍 Token received:", token.substring(0, 20) + "...");

    // ✅ 3. التحقق من Token مع Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;
    const userEmail = decodedToken.email || null;

    console.log("✅ User authenticated:", userId);

    // ✅ 4. استخراج البيانات
    const data = req.body?.data || req.body;
    const { planId, planName, amount, trainerId } = data;

    // ✅ 5. التحقق من البيانات المطلوبة
    if (!planId || !planName || !amount) {
      return res.status(400).json({
        error: { message: "Missing required fields: planId, planName, or amount" }
      });
    }

    // ✅ 6. جلب بيانات المستخدم من Firestore
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).json({
        error: { message: "User profile not found" }
      });
    }

    const userData = userDoc.data();

    // ✅ 7. إنشاء Session في Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: userEmail || userData.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: planName,
              description: `Training plan for ${userData.firstName || "User"}`
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `https://trainly-4f7a8.web.app/payment-success?session_id={CHECKOUT_SESSION_ID}&trainerId=${trainerId || ''}`,
      cancel_url: `https://trainly-4f7a8.web.app/payment-cancel?trainerId=${trainerId || ''}`,
      metadata: {
        planId,
        userId,
        trainerId,
        userEmail: userEmail || userData.email,
        userName: `${userData.firstName || ""} ${userData.lastName || ""}`.trim()
      },
    });

    // ✅ 8. حفظ معلومات الدفع في Firestore
    await db.collection("payments").add({
      userId,
      planId,
      planName,
      amount,
      sessionId: session.id,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log("✅ Checkout session created:", session.id);

    // ✅ 9. إرجاع النتيجة
    res.status(200).json({
      result: { url: session.url, sessionId: session.id }
    });

  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    res.status(500).json({
      error: { message: error.message || "Internal server error" }
    });
  }
});

// ✅ Webhook للتحقق من نجاح الدفع
exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const webhookSecret = "whsec_YOUR_WEBHOOK_SECRET";

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // التعامل مع حدث نجاح الدفع
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { planId, userId } = session.metadata;

    // تحديث حالة الدفع في Firestore
    const paymentQuery = await db
      .collection("payments")
      .where("sessionId", "==", session.id)
      .limit(1)
      .get();

    if (!paymentQuery.empty) {
      const paymentDoc = paymentQuery.docs[0];
      await paymentDoc.ref.update({
        status: "completed",
        paidAt: admin.firestore.FieldValue.serverTimestamp(),
        stripePaymentIntent: session.payment_intent,
      });
    }

    // إضافة Plan للمستخدم
    await db.collection("users").doc(userId).collection("subscribedPlans").add({
      planId,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
      status: "active",
    });

    console.log("✅ Payment completed for user:", userId);
  }

  res.json({ received: true });
});
