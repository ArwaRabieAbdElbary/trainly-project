# خطوات Deploy على Netlify - سريع 🚀

## ⚡ الطريقة الأسهل (موصى به):

1. **ارفع المشروع على GitHub**
   - إذا مش موجود على GitHub، ارفعه دلوقتي

2. **اذهب لـ Netlify**
   - افتح: https://app.netlify.com
   - اضغط: "Add new site" → "Import an existing project"
   - اختر: GitHub

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - اضغط Deploy

4. **ملاحظة مهمة:**
   - Firebase Functions هاتشتغل من Firebase (مش محتاجة deploy على Netlify)
   - أي Environment Variables موجودة في الـ frontend هاتحتاج تضيفها في Netlify Dashboard

---

## 🔧 Deploy يدوي (بدون GitHub):

```bash
# 1. Login على Netlify
netlify login

# 2. Deploy
netlify deploy --prod --dir=dist
```

---

## 📋 بعد الـ Deploy:

1. **أضف Environment Variables** (إذا كان فيها Firebase config في .env)
2. **أضف Netlify URL** في Firebase Authorized domains
3. **اختبر الموقع**

---

## ✅ الملفات المطلوبة موجودة:
- ✅ `netlify.toml` - للتكوين
- ✅ `dist/` - Build موفق
- ✅ جاهز للـ Deploy!
