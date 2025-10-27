# Deploy on Netlify - Trainly Project

## الطريقة الأولى: Deploy عبر GitHub (موصى به)

### 1. ارفع المشروع على GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy على Netlify
1. افتح [Netlify](https://www.netlify.com/)
2. اضغط على "New site from Git"
3. اختر GitHub
4. اختر الـ repository
5. في Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. اضغط Deploy site

---

## الطريقة الثانية: Deploy يدوي عبر Netlify CLI

### 1. Build المشروع محلياً
```bash
npm run build
```

### 2. Install Netlify CLI
```bash
npm install -g netlify-cli
```

### 3. Login على Netlify
```bash
netlify login
```

### 4. Deploy المشروع
```bash
netlify deploy --prod --dir=dist
```

---

## ملاحظات مهمة

### متغيرات البيئة (Environment Variables)
في Netlify Dashboard، أضف هذه المتغيرات:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- إلخ... (جميع Firebase config variables)

### Firebase Functions
Firebase Functions ستبقى تعمل على Firebase، لا تحتاج to deploy على Netlify.

### قاعدة البيانات
تأكد من إعداد Firebase Firestore Rules وكل الإعدادات المطلوبة.

---

## استكشاف الأخطاء

### إذا فشل البناء:
```bash
npm ci
npm run build
```

### إذا ظهرت أخطاء CORS:
تأكد من إضافة المشروع في Firebase Console > Settings > Authorized domains
