# ARABTEC — الموقع الإلكتروني الرسمي | Official Website

موقع مؤسسي متعدد اللغات (عربي/إنجليزي) لشركة **أربتك (ARABTEC)** — شركة حلول تقنية سعودية تأسست عام 1996.

A multilingual (Arabic/English) corporate website for **ARABTEC** — a Saudi technology solutions company founded in 1996.

---

## 📋 المحتويات | Table of Contents

- [نظرة عامة](#-نظرة-عامة--overview)
- [المزايا](#-المزايا--features)
- [التقنيات المستخدمة](#-التقنيات-المستخدمة--tech-stack)
- [هيكل المشروع](#-هيكل-المشروع--project-structure)
- [التثبيت والتشغيل](#-التثبيت-والتشغيل--installation--running)
- [البناء والنشر](#-البناء-والنشر--build--deploy)
- [إدارة المحتوى](#-إدارة-المحتوى--content-management)
- [التخصيص](#-التخصيص--customization)
- [SEO والأداء](#-seo-والأداء--seo--performance)
- [المساهمة](#-المساهمة--contributing)
- [الترخيص](#-الترخيص--license)

---

## 🎯 نظرة عامة | Overview

الموقع مبني بـ **React + TypeScript + Vite**، وبيستخدم **Tailwind CSS** للتصميم. يدعم **العربية (RTL)** و**الإنجليزية (LTR)** بشكل كامل مع تبديل فوري للغة.

The website is built with **React + TypeScript + Vite** and **Tailwind CSS**. It fully supports **Arabic (RTL)** and **English (LTR)** with instant language switching.

### الصفحات الرئيسية | Main Pages

| الصفحة | المسار | الوصف |
|--------|--------|-------|
| الرئيسية | `/` | Hero + 6 خدمات + قطاعات + منهجية + FAQ |
| من نحن | `/about` | رؤية + رسالة + قيم + خبرات |
| الخدمات | `/services` | 6 خدمات بأقسامها التفصيلية |
| الخدمة (تفاصيل) | `/services/:slug` | صفحة مستقلة لكل خدمة |
| القطاعات | `/industries` | 6 قطاعات بأيقونات وتفاصيل |
| الشركاء والعملاء | `/partners-clients` | علاقات + قطاعات + شركاء |
| تواصل معنا | `/contact` | نماذج متعددة + بيانات + FAQ |
| شكرًا | `/thank-you/:type` | صفحة تأكيد بعد إرسال الطلب |
| 404 | `*` | صفحة غير موجودة |

---

## ✨ المزايا | Features

- ✅ **دعم كامل للعربية والإنجليزية** — تبديل فوري بدون إعادة تحميل
- ✅ **RTL / LTR** — تخطيط تلقائي حسب اللغة
- ✅ **تصميم متجاوب** — يعمل على الجوال والتابلت والكمبيوتر
- ✅ **6 صفحات خدمات مفصلة** — كل خدمة بصفحة مستقلة
- ✅ **SEO محسّن** — JSON-LD (Service, FAQ, Organization, Breadcrumb)
- ✅ **Accessibility (a11y)** — Skip links، ARIA، تباين واضح
- ✅ **Scroll to Top button** — دائري بسهم، يظهر عند التمرير
- ✅ **أداء عالي** — WebP، Lazy Loading، Code Splitting
- ✅ **Lazy Loading للصور** — Hero بـ `fetchPriority="high"`، الباقي `loading="lazy"`
- ✅ **نماذج متعددة** — تواصل، اجتماع، شراكة، حكومي
- ✅ **Dark Mode جاهز** — Classes جاهزة في CSS

---

## 🛠 التقنيات المستخدمة | Tech Stack

| التقنية | الإصدار | الاستخدام |
|---------|---------|----------|
| React | 18+ | مكتبة الواجهة |
| TypeScript | 5+ | Type Safety |
| Vite | 5+ | Build tool |
| Tailwind CSS | 3+ | التصميم |
| React Router | 6+ | التوجيه |
| Lucide React | Latest | الأيقونات |

---

## 📁 هيكل المشروع | Project Structure
arabtec-spa/
├── public/
│ ├── logos/ # شعارات العملاء والشركاء
│ └── favicon.ico
├── src/
│ ├── assets/ # الصور (WebP/AVIF)
│ │ ├── hero-enterprise.jpg
│ │ ├── team-meeting.jpg
│ │ ├── service-ai-agents.webp
│ │ ├── service-erp.webp
│ │ ├── service-software-development.webp
│ │ ├── service-cloud-infrastructure.webp
│ │ ├── service-network-connectivity.webp
│ │ ├── service-surveillance.webp
│ │ └── ... (صور كل صفحة)
│ ├── components/
│ │ ├── common/
│ │ │ ├── Layout.tsx # الحاوية الأساسية
│ │ │ ├── Header.tsx # النافبار
│ │ │ ├── Footer.tsx # الفوتر
│ │ │ └── ScrollToTop.tsx # زرار الصعود
│ │ └── ui-blocks.tsx # Section, Card, FAQ, JsonLd، إلخ
│ ├── lib/
│ │ ├── i18n.tsx # نظام اللغات
│ │ ├── router.tsx # React Router + helpers
│ │ └── services-data.ts # بيانات الخدمات والقطاعات
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── About.tsx
│ │ ├── Services.tsx
│ │ ├── ServiceDetail.tsx # Fallback
│ │ ├── Industries.tsx
│ │ ├── PartnersClients.tsx
│ │ ├── Contact.tsx
│ │ ├── ThankYou.tsx
│ │ ├── NotFound.tsx
│ │ └── services/ # صفحات الخدمات المستقلة
│ │ ├── AiAgents.tsx
│ │ ├── ErpBusinessApplications.tsx
│ │ ├── SoftwareDevelopment.tsx
│ │ ├── CloudInfrastructure.tsx
│ │ ├── NetworkConnectivity.tsx
│ │ └── SurveillanceAccessControl.tsx
│ ├── styles/
│ │ └── globals.css # Tailwind + CSS Variables
│ ├── App.tsx # Routes
│ └── main.tsx # Entry point
├── ar.json # نصوص عربية
├── en.json # نصوص إنجليزية
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md

npm install
# أو
pnpm install
# أو
yarn install