import { useParams, Navigate } from "react-router-dom";
import { Link } from "@/lib/router";
import { Section } from "@/components/ui-blocks";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2, MailCheck, CalendarClock, Reply } from "lucide-react";


const REQUEST_TYPE_LABELS: Record<string, { ar: string; en: string }> = {
  consult: { ar: "استشارة تقنية", en: "Technical consultation" },
  rfp: { ar: "عرض فني/عرض سعر", en: "Technical proposal" },
  demo: { ar: "عرض توضيحي", en: "Demo request" },
  visit: { ar: "زيارة موقع", en: "Site visit" },
  partner: { ar: "طلب شراكة", en: "Partnership request" },
  support: { ar: "دعم مشروع قائم", en: "Existing project support" },
  contact: { ar: "تواصل عام", en: "General contact" },
  partnership: { ar: "طلب شراكة", en: "Partnership request" },
};

export default function ThankYou() {
  const { type = "contact" } = useParams();
  const { lang, t } = useI18n();
  const base = "pages.thank-you_$type";
  const hasSpecific = t(`${base}.${type}.title`) !== `${base}.${type}.title`;
  const key = hasSpecific ? type : "default";
  const title = t(`${base}.${key}.title`);
  const message = t(`${base}.${key}.message`);
  const typeLabel = REQUEST_TYPE_LABELS[type];

  return (
    <Section>
      <div className="max-w-xl mx-auto text-center py-10">
        <CheckCircle2 className="mx-auto h-16 w-16 text-[color:var(--gold)]" />
        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-[color:var(--brand-deep)]">{title}</h1>
        {typeLabel && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm">
            <span className="text-muted-foreground">{t(`${base}.text4`)}:</span>
            <span className="font-semibold">{lang === "ar" ? typeLabel.ar : typeLabel.en}</span>
          </div>
        )}
        <p className="mt-4 text-muted-foreground leading-relaxed">{message}</p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-start">
          <h2 className="font-bold mb-4">{t(`${base}.text5`)}</h2>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MailCheck className="h-4 w-4 mt-1 shrink-0 text-[color:var(--gold)]" />
              <span>{t(`${base}.text6`)}</span>
            </li>
            <li className="flex items-start gap-3">
              <CalendarClock className="h-4 w-4 mt-1 shrink-0 text-[color:var(--gold)]" />
              <span>{t(`${base}.text7`)}</span>
            </li>
            <li className="flex items-start gap-3">
              <Reply className="h-4 w-4 mt-1 shrink-0 text-[color:var(--gold)]" />
              <span>{t(`${base}.text8`)}</span>
            </li>
          </ol>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary-hover">{t(`${base}.text2`)}</Link>
          <Link to="/services" className="rounded-md border border-gold text-primary px-5 py-2.5 text-sm font-semibold hover:bg-gold hover:text-primary-foreground">{t(`${base}.text3`)}</Link>
        </div>
      </div>
    </Section>
  );
}
