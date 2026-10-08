import { Link } from "@/lib/router";
import { useI18n } from "@/lib/i18n";
import { SERVICES } from "@/lib/services-data";

export default function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="site-footer mt-16 bg-footer text-footer-foreground">
      <div className="container-page grid gap-8 py-14 md:grid-cols-4">
        {/* About */}
        <div>
          <div className="text-lg font-extrabold text-primary-foreground mb-3">
            {t("brand.name")}
          </div>
          <p className="text-sm leading-relaxed">{t("footer.about")}</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.quicklinks")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-[color:var(--gold)]">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[color:var(--gold)]">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-[color:var(--gold)]">
                {t("nav.industries")}
              </Link>
            </li>
            <li>
              <Link to="/partners-clients" className="hover:text-[color:var(--gold)]">
                {t("nav.partners")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[color:var(--gold)]">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-gold"
                >
                  {lang === "ar" ? s.title.ar : s.title.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.contact")}</h4>
          <ul className="space-y-2 text-sm">
            <li>{t("footer.location")}</li>
            <li>{t("footer.email")}</li>
            <li>{t("footer.phone")}</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-4 text-xs text-footer-foreground/80 flex justify-between">
          <span>
            © {new Date().getFullYear()} {t("brand.name")} · {t("footer.rights")}
          </span>
          <span>{t("footer.history", { year: new Date().getFullYear() })}</span>
        </div>
      </div>
    </footer>
  );
}