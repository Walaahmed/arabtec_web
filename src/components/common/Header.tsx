// import { Link, useRouterState } from "@/lib/router";
// import { useI18n } from "@/lib/i18n";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useEffect, useState } from "react";
// import { SERVICES } from "@/lib/services-data";
// import { Button } from "@/components/ui/button";

// // ⚠️ استبدل المسار ده بمسار اللوجو الحقيقي عندك
// import logoImg from "@/assets/arabtec-logo.jpg";

// export default function Header() {
//   const { t, lang, setLang } = useI18n();
//   const [open, setOpen] = useState(false);
//   const [srvOpen, setSrvOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const isHome = useRouterState({
//     select: (state) => state.location.pathname === "/",
//   });

//   useEffect(() => {
//     const update = () => setScrolled(window.scrollY > 16);
//     update();
//     window.addEventListener("scroll", update, { passive: true });
//     return () => window.removeEventListener("scroll", update);
//   }, []);

//   const transparent = isHome && !scrolled && !open;

//   return (
//     <header
//       className={`sticky top-0 z-40 transition-colors duration-300 ${
//         transparent
//           ? "border-b border-transparent bg-transparent"
//           : "border-b border-border bg-background/95 shadow-sm backdrop-blur"
//       }`}
//     >
//       <div className="container-page flex h-20 items-center justify-between gap-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-3 font-extrabold text-xl text-[color:var(--brand-deep)]"
//         >
//           <img
//             src={logoImg}
//             alt={lang === "ar" ? "أربتك" : "Arabtec"}
//             width={56}
//             height={56}
//             className="h-14 w-14 object-contain"
//           />
//           <span>{lang === "ar" ? "أربتك" : "Arabtec"}</span>
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-primary">
//           <Link to="/" activeProps={{ className: "text-gold" }} className="hover:text-gold">
//             {t("nav.home")}
//           </Link>
//           <Link to="/about" activeProps={{ className: "text-gold" }} className="hover:text-gold">
//             {t("nav.about")}
//           </Link>

//           {/* Services dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setSrvOpen(true)}
//             onMouseLeave={() => setSrvOpen(false)}
//           >
//             <Link
//               to="/services"
//               activeProps={{ className: "text-gold" }}
//               className="hover:text-gold inline-flex items-center gap-1"
//             >
//               {t("nav.services")} <ChevronDown className="h-4 w-4" />
//             </Link>
//             {srvOpen && (
//               <div className="absolute top-full start-0 mt-1 w-72 rounded-lg border border-border bg-popover p-2 shadow-lg">
//                 {SERVICES.map((s) => (
//                   <Link
//                     key={s.slug}
//                     to="/services/$slug"
//                     params={{ slug: s.slug }}
//                     className="block rounded px-3 py-2 text-sm hover:bg-secondary hover:text-gold"
//                   >
//                     {lang === "ar" ? s.title.ar : s.title.en}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link
//             to="/industries"
//             activeProps={{ className: "text-gold" }}
//             className="hover:text-gold"
//           >
//             {t("nav.industries")}
//           </Link>
//           <Link
//             to="/partners-clients"
//             activeProps={{ className: "text-gold" }}
//             className="hover:text-gold"
//           >
//             {t("nav.partners")}
//           </Link>
//           <Link
//             to="/contact"
//             activeProps={{ className: "text-gold" }}
//             className="hover:text-gold"
//           >
//             {t("nav.contact")}
//           </Link>
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setLang(lang === "ar" ? "en" : "ar")}
//             aria-label={t("accessibility.toggleLanguage")}
//           >
//             {t("nav.language")}
//           </Button>

//           <Link
//             to="/contact"
//             className="hidden sm:inline-flex rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover"
//           >
//             {t("cta.consult")}
//           </Link>

//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden"
//             onClick={() => setOpen(!open)}
//             aria-expanded={open}
//             aria-label={open ? t("nav.close") : t("nav.menu")}
//           >
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="lg:hidden border-t border-border bg-background">
//           <div className="container-page py-3 flex flex-col gap-1 text-sm">
//             <Link to="/" onClick={() => setOpen(false)} className="py-2">
//               {t("nav.home")}
//             </Link>
//             <Link to="/about" onClick={() => setOpen(false)} className="py-2">
//               {t("nav.about")}
//             </Link>

//             <Link
//               to="/services"
//               onClick={() => setOpen(false)}
//               className="py-2 font-semibold"
//             >
//               {t("nav.services")}
//             </Link>
//             {SERVICES.map((s) => (
//               <Link
//                 key={s.slug}
//                 to="/services/$slug"
//                 params={{ slug: s.slug }}
//                 onClick={() => setOpen(false)}
//                 className="py-1.5 ps-4 text-muted-foreground"
//               >
//                 {lang === "ar" ? s.title.ar : s.title.en}
//               </Link>
//             ))}

//             <Link
//               to="/industries"
//               onClick={() => setOpen(false)}
//               className="py-2"
//             >
//               {t("nav.industries")}
//             </Link>
//             <Link
//               to="/partners-clients"
//               onClick={() => setOpen(false)}
//               className="py-2"
//             >
//               {t("nav.partners")}
//             </Link>
//             <Link to="/contact" onClick={() => setOpen(false)} className="py-2">
//               {t("nav.contact")}
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
import { Link, useRouterState } from "@/lib/router";
import { useI18n } from "@/lib/i18n";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { SERVICES } from "@/lib/services-data";
import { Button } from "@/components/ui/button";

// ⚠️ استبدل المسار ده بمسار اللوجو الحقيقي عندك
import logoImg from "@/assets/arabtec-logo.jpg";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [srvOpen, setSrvOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = useRouterState({
    select: (state) => state.location.pathname === "/",
  });

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/95 shadow-sm backdrop-blur"
      }`}
    >
      {/* ✅ الارتفاع متدرج: موبايل h-14 → تابلت h-16 → ديسكتوب h-20 */}
      <div className="container-page flex h-14 sm:h-16 lg:h-20 items-center justify-between gap-4">
        {/* ============================================
            Logo — الحجم متدرج
            ============================================ */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 font-extrabold text-base sm:text-lg lg:text-xl text-[color:var(--brand-deep)]"
        >
          <img
            src={logoImg}
            alt={lang === "ar" ? "أربتك" : "Arabtec"}
            width={56}
            height={56}
            className="h-9 w-9 sm:h-10 sm:w-10 lg:h-14 lg:w-14 object-contain"
          />
          <span>{lang === "ar" ? "أربتك" : "Arabtec"}</span>
        </Link>

        {/* ============================================
            Desktop nav
            ============================================ */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-primary">
          <Link to="/" activeProps={{ className: "text-gold" }} className="hover:text-gold">
            {t("nav.home")}
          </Link>
          <Link to="/about" activeProps={{ className: "text-gold" }} className="hover:text-gold">
            {t("nav.about")}
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSrvOpen(true)}
            onMouseLeave={() => setSrvOpen(false)}
          >
            <Link
              to="/services"
              activeProps={{ className: "text-gold" }}
              className="hover:text-gold inline-flex items-center gap-1"
            >
              {t("nav.services")} <ChevronDown className="h-4 w-4" />
            </Link>
            {srvOpen && (
              <div className="absolute top-full start-0 mt-1 w-72 rounded-lg border border-border bg-popover p-2 shadow-lg">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block rounded px-3 py-2 text-sm hover:bg-secondary hover:text-gold"
                  >
                    {lang === "ar" ? s.title.ar : s.title.en}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/industries"
            activeProps={{ className: "text-gold" }}
            className="hover:text-gold"
          >
            {t("nav.industries")}
          </Link>
          <Link
            to="/partners-clients"
            activeProps={{ className: "text-gold" }}
            className="hover:text-gold"
          >
            {t("nav.partners")}
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-gold" }}
            className="hover:text-gold"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* ============================================
            Actions
            ============================================ */}
        <div className="flex items-center gap-2">
          {/* ✅ زر اللغة — أصغر وأكثر بروزاً */}
          <button
            type="button"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            aria-label={t("accessibility.toggleLanguage")}
            className="
              inline-flex items-center justify-center
              h-8 px-3 rounded-md
              bg-[color:var(--gold)] text-white
              text-xs font-bold tracking-wide
              hover:bg-[color:var(--gold)]/90
              active:scale-95
              transition-all duration-200
              whitespace-nowrap
            "
          >
            {t("nav.language")}
          </button>

          {/* زر الاستشارة — مخفي على الموبايل الصغير */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            {t("cta.consult")}
          </Link>

          {/* زر القائمة على الموبايل */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t("nav.close") : t("nav.menu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* ============================================
          Mobile menu
          ============================================ */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-3 flex flex-col gap-1 text-sm">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">
              {t("nav.home")}
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2">
              {t("nav.about")}
            </Link>

            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="py-2 font-semibold"
            >
              {t("nav.services")}
            </Link>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="py-1.5 ps-4 text-muted-foreground"
              >
                {lang === "ar" ? s.title.ar : s.title.en}
              </Link>
            ))}

            <Link
              to="/industries"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              {t("nav.industries")}
            </Link>
            <Link
              to="/partners-clients"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              {t("nav.partners")}
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}