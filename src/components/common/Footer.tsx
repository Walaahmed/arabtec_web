// import { Link } from "@/lib/router";
// import { useI18n } from "@/lib/i18n";
// import { SERVICES } from "@/lib/services-data";

// export default function Footer() {
//   const { t, lang } = useI18n();

//   return (
//     <footer className="site-footer mt-16 bg-footer text-footer-foreground">
//       <div className="container-page grid gap-8 py-14 md:grid-cols-4">
//         {/* About */}
//         <div>
//           <div className="text-lg font-extrabold text-primary-foreground mb-3">
//             {t("brand.name")}
//           </div>
//           <p className="text-sm leading-relaxed">{t("footer.about")}</p>
//         </div>

//         {/* Quick links */}
//         <div>
//           <h4 className="font-semibold mb-3">{t("footer.quicklinks")}</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link to="/about" className="hover:text-[color:var(--gold)]">
//                 {t("nav.about")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className="hover:text-[color:var(--gold)]">
//                 {t("nav.services")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/industries" className="hover:text-[color:var(--gold)]">
//                 {t("nav.industries")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/partners-clients" className="hover:text-[color:var(--gold)]">
//                 {t("nav.partners")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-[color:var(--gold)]">
//                 {t("nav.contact")}
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="font-semibold mb-3">{t("footer.services")}</h4>
//           <ul className="space-y-2 text-sm">
//             {SERVICES.map((s) => (
//               <li key={s.slug}>
//                 <Link
//                   to="/services/$slug"
//                   params={{ slug: s.slug }}
//                   className="hover:text-gold"
//                 >
//                   {lang === "ar" ? s.title.ar : s.title.en}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-semibold mb-3">{t("footer.contact")}</h4>
//           <ul className="space-y-2 text-sm">
//   <li>
//     <a
//       href="https://maps.app.goo.gl/4tnGNj6Zu1NCWxTKA?g_st=iw"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="hover:text-[color:var(--gold)] transition"
//     >
//       Al khobar mall, Al hizam Al thahabi
//     </a>
//   </li>
//   <li>
//     <a
//       href="mailto:contact@arabtec.com"
//       className="hover:text-[color:var(--gold)] transition"
//     >
//       contact@arabtec.com
//     </a>
//   </li>
//   <li>
//     <a
//       href="tel:+966532891000"
//       dir="ltr"
//       className="hover:text-[color:var(--gold)] transition"
//     >
//       +966 53 289 1000
//     </a>
//   </li>
// </ul>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-primary-foreground/10">
//         <div className="container-page py-4 text-xs text-footer-foreground/80 flex justify-between">
//           <span>
//             © {new Date().getFullYear()} {t("brand.name")} · {t("footer.rights")}
//           </span>
//           <span>{t("footer.history", { year: new Date().getFullYear() })}</span>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Link } from "@/lib/router";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

export default function Footer() {
  const { t, lang } = useI18n();
  const isAr = lang === "ar";
  const year = new Date().getFullYear();

  // ============================================
  // الـ 6 خدمات (الحلول)
  // ============================================
  const services = [
    { slug: "ai-agents", ar: "الذكاء الاصطناعي و AI Agents", en: "AI & AI Agents" },
    { slug: "erp-business-applications", ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & Business Apps" },
    { slug: "software-development", ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software Development" },
    { slug: "cloud-infrastructure", ar: "السحابة والبنية التحتية", en: "Cloud & Infrastructure" },
    { slug: "network-connectivity", ar: "الشبكات والاتصال", en: "Networks & Connectivity" },
    { slug: "surveillance-access-control", ar: "المراقبة والحضور والتحكم بالدخول", en: "Surveillance & Access Control" },
  ];

  return (
    <footer className="mt-16 bg-[#0B3D2E] text-white">
      <div className="container-page py-14">
        {/* ============================================
            على الديسكتوب: 4 أعمدة جنب بعض
            أربتك │ الشركة │ الحلول │ لنبدأ معًا
            على الموبايل: يرجع للتصميم القديم
            ============================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* ===== العمود الأول: أربتك (الشعار + الوصف) ===== */}
          <div>
            <div className="text-3xl md:text-4xl font-extrabold leading-none">
              {isAr ? "أربتك" : "ARABTEC"}
            </div>
            <div className="text-xs tracking-[0.3em] text-white/70 font-medium mt-1">
              {isAr ? "ARABTEC" : "أربتك"}
            </div>

            <p className="mt-5 text-base text-white/90 leading-relaxed">
              {isAr
                ? "تقنية متكاملة. لأعمال أكثر ذكاءً."
                : "Integrated technology. Smarter business."}
            </p>

            <div className="text-sm text-white/70 mt-2">
              {isAr ? "منذ 1996" : "Since 1996"}
            </div>
          </div>

          {/* ============================================
              على الموبايل: الشركة + الحلول جنب بعض
              على الديسكتوب: كل واحد في عموده
              ============================================ */}
          <div className="grid grid-cols-2 lg:contents gap-6">
            {/* ===== العمود التاني: الشركة ===== */}
            <div>
              <h4 className="text-base font-bold mb-4 text-white">
                {isAr ? "الشركة" : "Company"}
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <Link to="/about" className="hover:text-[#7DD3A0] transition">
                    {isAr ? "من نحن" : "About"}
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-[#7DD3A0] transition">
                    {isAr ? "القطاعات" : "Industries"}
                  </Link>
                </li>
                <li>
                  <Link to="/partners-clients" className="hover:text-[#7DD3A0] transition">
                    {isAr ? "شركاؤنا" : "Partners"}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#7DD3A0] transition">
                    {isAr ? "تواصل معنا" : "Contact"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* ===== العمود التالت: الحلول ===== */}
            <div>
              <h4 className="text-base font-bold mb-4 text-white">
                {isAr ? "الحلول" : "Solutions"}
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="hover:text-[#7DD3A0] transition"
                    >
                      {isAr ? s.ar : s.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== العمود الرابع: لنبدأ معًا ===== */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white">
              {isAr ? "لنبدأ معًا" : "Let's get started"}
            </h4>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#7DD3A0] hover:text-white transition"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {isAr ? "اطلب استشارة تقنية" : "Request a consultation"}
            </Link>

            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="mailto:contact@arabtec.com"
                  className="hover:text-[#7DD3A0] transition"
                >
                  contact@arabtec.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+966532891000"
                  dir="ltr"
                  className="hover:text-[#7DD3A0] transition"
                >
                  +966 53 289 1000
                </a>
              </li>
              <li className="text-white/70">
                {isAr ? "الخبر، السعودية" : "Al Khobar, Saudi Arabia"}
              </li>
            </ul>
          </div>
        </div>

        {/* فاصل */}
        <div className="mt-14 border-t border-white/15" />
      </div>

      {/* ============================================
          الشريط السفلي
          ============================================ */}
      <div className="container-page py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
          <span>
            © {year} {isAr ? "أربتك" : "ARABTEC"}
          </span>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#7DD3A0] transition">
              {isAr ? "الخصوصية" : "Privacy"}
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/terms" className="hover:text-[#7DD3A0] transition">
              {isAr ? "الشروط" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}