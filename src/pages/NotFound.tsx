import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
export default function NotFound() {
  const { lang } = useI18n();
  return (
    <section className="section"><div className="container-page text-center py-20">
      <div className="text-6xl font-extrabold text-[color:var(--gold)]">404</div>
      <h1 className="mt-4 text-3xl font-bold">{lang === "ar" ? "الصفحة غير موجودة" : "Page not found"}</h1>
      <Link to="/" className="mt-8 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">{lang === "ar" ? "العودة للرئيسية" : "Back to home"}</Link>
    </div></section>
  );
}
