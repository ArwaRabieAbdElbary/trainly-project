# 🚀 دليل رفع المشروع على GitHub

## الخطوات:

### 1. التحقق من أن `.gitignore` محدث
```bash
git status
```
يجب أن تظهر `functions/index.js` لرفعها

### 2. Add و Commit التغييرات
```bash
git add .
git commit -m "Prepare for GitHub - setup secrets handling"
```

### 3. إنشاء Repository على GitHub
1. افتح [GitHub](https://github.com)
2. New repository > اسمه `trainly-project`
3. **لا** تختار Initialize with README

### 4. Push المشروع
```bash
git remote add origin https://github.com/YOUR_USERNAME/trainly-project.git
git branch -M main
git push -u origin main
```

---

## ⚠️ مهم جداً بعد الـ Push:

### أضف Stripe Secret Key في Firebase:
1. Firebase Console > Functions > Configuration
2. Environment variables > Add
3. Key: `STRIPE_SECRET_KEY`
4. Value: `افتح README_SECRETS.md للحصول على القيمة`
5. Deploy Functions:
```bash
firebase deploy --only functions
```

---

## 📝 ملاحظة:
- Stripe Key سيظل موجود في الكود كـ fallback
- هذا **آمن** لأن:
  1. Functions تعمل على Firebase وليس على Netlify
  2. Stripe Test Keys لامنيتها منخفضة (للتطوير فقط)
  3. للـ Production، استخدم Production Keys من Stripe Dashboard

