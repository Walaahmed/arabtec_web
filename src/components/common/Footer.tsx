import { Link } from "@/lib/router";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

// ✅ اللوجو
import arabtecLogo from "@/assets/arabtec-logo.jpg";

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
          {/* ===== العمود الأول: اللوجو + الوصف ===== */}
          <div>
            {/* ✅ اللوجو بدل كلمة أربتك */}
          <Link to="/" className="inline-block">
  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-2 ring-white/20">
    <img
      src={arabtecLogo}
      alt={isAr ? "أربتك" : "ARABTEC"}
      className="h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />
  </div>
</Link>

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