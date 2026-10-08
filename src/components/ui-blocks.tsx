import { Link } from "@/lib/router";
import { useI18n, type Lang } from "@/lib/i18n";
import type { ReactNode } from "react";
import { MotionReveal } from "@/components/MotionReveal";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`section ${className}`}>
      <MotionReveal className="container-page">{children}</MotionReveal>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">{children}</div>;
}

export function SectionHead({ eyebrow, title, intro }: { eyebrow?: ReactNode; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="max-w-3xl mb-10">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-card p-6 shadow-sm hover:border-primary/25 transition-colors ${className}`}>
      {children}
    </div>
  );
}

export function CTAButton({ to, children, variant = "primary" }: { to: string; children: ReactNode; variant?: "primary" | "outline" }) {
  const cls = variant === "primary"
    ? "bg-primary text-primary-foreground hover:bg-primary-hover"
    : "border border-gold text-primary hover:bg-gold hover:text-primary-foreground";
  return (
    <Link to={to} className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${cls}`}>
      {children}
    </Link>
  );
}

export function pickL<T>(lang: Lang, o: { ar: T; en: T }): T {
  return o[lang];
}

export function useL() {
  const { lang } = useI18n();
  return <T,>(o: { ar: T; en: T }) => o[lang];
}

export function Breadcrumbs({ items }: { items: { label: { ar: string; en: string }; to?: string }[] }) {
  const l = useL();
  const { t } = useI18n();
  return (
    <nav aria-label={t("accessibility.breadcrumb")} className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? <Link to={it.to} className="hover:text-primary">{l(it.label)}</Link> : <span>{l(it.label)}</span>}
            {i < items.length - 1 && <span>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQ({ items }: { items: { q: { ar: string; en: string }; a: { ar: string; en: string } }[] }) {
  const l = useL();
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((f, i) => (
        <details key={i} className="group p-5">
          <summary className="cursor-pointer list-none font-semibold flex justify-between items-center">
            <span>{l(f.q)}</span>
            <span className="text-[color:var(--gold)] group-open:rotate-45 transition">+</span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l(f.a)}</p>
        </details>
      ))}
    </div>
  );
}