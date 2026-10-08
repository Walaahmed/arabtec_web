// import { type ReactNode } from "react";
// import { Outlet } from "react-router-dom";
// import { Link, useHydrated, useRouterState } from "@/lib/router";
// import { I18nProvider, useI18n } from "@/lib/i18n";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useEffect, useState } from "react";
// import { SERVICES } from "@/lib/services-data";
// import { Button } from "@/components/ui/button";

// export default function Layout({ children }: { children?: ReactNode }) {
//   return (
//     <I18nProvider>
//       <div className="min-h-screen flex flex-col bg-background text-foreground">
//         <InitialSplash />
//         <NavigationProgress />
//         <a href="#main-content" className="sr-only z-50 bg-background px-4 py-3 font-semibold focus:not-sr-only focus:fixed focus:start-4 focus:top-4">
//           <SkipText />
//         </a>
//         <Header />
//         <main id="main-content" className="flex-1">{children ?? <Outlet />}</main>
//         <Footer />
//       </div>
//     </I18nProvider>
//   );
// }

// function InitialSplash() {
//   const { t } = useI18n();
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const frame = requestAnimationFrame(() => setVisible(false));
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div className="site-splash" role="status" aria-live="polite" aria-label={t("accessibility.loading")}>
//       <div className="site-splash__mark" aria-hidden="true">{t("brand.mark")}</div>
//       <div className="site-splash__name">{t("brand.name")}</div>
//       <span className="site-splash__pulse" aria-hidden="true" />
//     </div>
//   );
// }

// function NavigationProgress() {
//   const { t } = useI18n();
//   const hydrated = useHydrated();
//   const isLoading = useRouterState({ select: (state) => state.status === "pending" });
//   const showProgress = hydrated && isLoading;

//   return (
//     <div
//       className={`route-progress${showProgress ? " route-progress--active" : ""}`}
//       role="progressbar"
//       aria-label={t("accessibility.loading")}
//       aria-hidden={!showProgress}
//     >
//       <span />
//     </div>
//   );
// }

// function SkipText() {
//   const { t } = useI18n();
//   return <>{t("accessibility.skip")}</>;
// }

// function Header() {
//   const { t, lang, setLang } = useI18n();
//   const [open, setOpen] = useState(false);
//   const [srvOpen, setSrvOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const isHome = useRouterState({ select: (state) => state.location.pathname === "/" });

//   useEffect(() => {
//     const update = () => setScrolled(window.scrollY > 16);
//     update();
//     window.addEventListener("scroll", update, { passive: true });
//     return () => window.removeEventListener("scroll", update);
//   }, []);

//   const transparent = isHome && !scrolled && !open;

//   return (
//     <header className={`sticky top-0 z-40 transition-colors duration-300 ${transparent ? "border-b border-transparent bg-transparent" : "border-b border-border bg-background/95 shadow-sm backdrop-blur"}`}>
//       <div className="container-page flex h-16 items-center justify-between gap-4">
//         <Link to="/" className="flex items-center gap-2 font-extrabold text-lg text-[color:var(--brand-deep)]">
//           <span className="inline-block h-8 w-8 rounded-md bg-brand-deep text-primary-foreground grid place-items-center text-sm">{t("brand.mark")}</span>
//           <span>{t("brand.name")}</span>
//         </Link>

//         <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-primary">
//           <Link to="/" activeProps={{ className: "text-gold" }} className="hover:text-gold">{t("nav.home")}</Link>
//           <Link to="/about" activeProps={{ className: "text-gold" }} className="hover:text-gold">{t("nav.about")}</Link>
//           <div className="relative" onMouseEnter={() => setSrvOpen(true)} onMouseLeave={() => setSrvOpen(false)}>
//             <Link to="/services" activeProps={{ className: "text-gold" }} className="hover:text-gold inline-flex items-center gap-1">
//               {t("nav.services")} <ChevronDown className="h-4 w-4" />
//             </Link>
//             {srvOpen && (
//               <div className="absolute top-full start-0 mt-1 w-72 rounded-lg border border-border bg-popover p-2 shadow-lg">
//                 {SERVICES.map((s) => (
//                   <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="block rounded px-3 py-2 text-sm hover:bg-secondary hover:text-gold">
//                     {lang === "ar" ? s.title.ar : s.title.en}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//           <Link to="/industries" activeProps={{ className: "text-gold" }} className="hover:text-gold">{t("nav.industries")}</Link>
//           <Link to="/partners-clients" activeProps={{ className: "text-gold" }} className="hover:text-gold">{t("nav.partners")}</Link>
//           <Link to="/contact" activeProps={{ className: "text-gold" }} className="hover:text-gold">{t("nav.contact")}</Link>
//         </nav>

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
//           <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t("nav.close") : t("nav.menu")}>
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </Button>
//         </div>
//       </div>

//       {open && (
//         <div className="lg:hidden border-t border-border bg-background">
//           <div className="container-page py-3 flex flex-col gap-1 text-sm">
//             <Link to="/" onClick={() => setOpen(false)} className="py-2">{t("nav.home")}</Link>
//             <Link to="/about" onClick={() => setOpen(false)} className="py-2">{t("nav.about")}</Link>
//             <Link to="/services" onClick={() => setOpen(false)} className="py-2 font-semibold">{t("nav.services")}</Link>
//             {SERVICES.map((s) => (
//               <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="py-1.5 ps-4 text-muted-foreground">
//                 {lang === "ar" ? s.title.ar : s.title.en}
//               </Link>
//             ))}
//             <Link to="/industries" onClick={() => setOpen(false)} className="py-2">{t("nav.industries")}</Link>
//             <Link to="/partners-clients" onClick={() => setOpen(false)} className="py-2">{t("nav.partners")}</Link>
//             <Link to="/contact" onClick={() => setOpen(false)} className="py-2">{t("nav.contact")}</Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// function Footer() {
//   const { t, lang } = useI18n();
//   return (
//     <footer className="site-footer mt-16 bg-footer text-footer-foreground">
//       <div className="container-page grid gap-8 py-14 md:grid-cols-4">
//         <div>
//           <div className="text-lg font-extrabold text-primary-foreground mb-3">{t("brand.name")}</div>
//           <p className="text-sm leading-relaxed">{t("footer.about")}</p>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3">{t("footer.quicklinks")}</h4>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/about" className="hover:text-[color:var(--gold)]">{t("nav.about")}</Link></li>
//             <li><Link to="/services" className="hover:text-[color:var(--gold)]">{t("nav.services")}</Link></li>
//             <li><Link to="/industries" className="hover:text-[color:var(--gold)]">{t("nav.industries")}</Link></li>
//             <li><Link to="/partners-clients" className="hover:text-[color:var(--gold)]">{t("nav.partners")}</Link></li>
//             <li><Link to="/contact" className="hover:text-[color:var(--gold)]">{t("nav.contact")}</Link></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3">{t("footer.services")}</h4>
//           <ul className="space-y-2 text-sm">
//             {SERVICES.map((s) => (
//               <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold">{lang === "ar" ? s.title.ar : s.title.en}</Link></li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3">{t("footer.contact")}</h4>
//           <ul className="space-y-2 text-sm">
//             <li>{t("footer.location")}</li>
//             <li>{t("footer.email")}</li>
//             <li>{t("footer.phone")}</li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-primary-foreground/10">
//         <div className="container-page py-4 text-xs text-footer-foreground/80 flex justify-between">
//           <span>© {new Date().getFullYear()} {t("brand.name")} · {t("footer.rights")}</span>
//           <span>{t("footer.history", { year: new Date().getFullYear() })}</span>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useHydrated, useRouterState } from "@/lib/router";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <InitialSplash />
        <NavigationProgress />
        <a
          href="#main-content"
          className="sr-only z-50 bg-background px-4 py-3 font-semibold focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          <SkipText />
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children ?? <Outlet />}
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

/* ============================================================
   المكونات الفرعية (لسه جوه Layout مؤقتًا)
   ============================================================ */

function InitialSplash() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(false));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="site-splash"
      role="status"
      aria-live="polite"
      aria-label={t("accessibility.loading")}
    >
      <div className="site-splash__mark" aria-hidden="true">
        {t("brand.mark")}
      </div>
      <div className="site-splash__name">{t("brand.name")}</div>
      <span className="site-splash__pulse" aria-hidden="true" />
    </div>
  );
}

function NavigationProgress() {
  const { t } = useI18n();
  const hydrated = useHydrated();
  const isLoading = useRouterState({ select: (state) => state.status === "pending" });
  const showProgress = hydrated && isLoading;

  return (
    <div
      className={`route-progress${showProgress ? " route-progress--active" : ""}`}
      role="progressbar"
      aria-label={t("accessibility.loading")}
      aria-hidden={!showProgress}
    >
      <span />
    </div>
  );
}

function SkipText() {
  const { t } = useI18n();
  return <>{t("accessibility.skip")}</>;
}