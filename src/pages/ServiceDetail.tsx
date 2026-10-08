// import { useParams, Navigate } from "react-router-dom";
// import { Link} from "@/lib/router";
// import { getService, SERVICES, type ServiceDetail } from "@/lib/services-data";
// import { Section, SectionHead, Card, CTAButton, JsonLd, useL, Breadcrumbs, FAQ } from "@/components/ui-blocks";
// import { useI18n } from "@/lib/i18n";
// import datacenter from "@/assets/datacenter.jpg";
// import { ArrowLeft, CheckCircle2 } from "lucide-react";


// export default function ServiceDetailPage() {
//   const { slug = "" } = useParams();
//   const s = getService(slug);
//   if (!s) return <Navigate to="/services" replace />;
//   return <ServiceDetailView s={s} />;
// }

// function ServiceDetailView({ s }: { s: ServiceDetail }) {
//   const { lang, t } = useI18n();
//   const l = useL();
//   const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

//   return (
//     <>
//       <JsonLd data={{
//         "@context": "https://schema.org", "@type": "Service",
//         name: s.title.ar, description: s.seoDesc.ar, provider: { "@type": "Organization", name: "ARABTEC" },
//         url: s.path,
//       }} />
//       <JsonLd data={{
//         "@context": "https://schema.org", "@type": "BreadcrumbList",
//         itemListElement: [
//           { "@type": "ListItem", position: 1, name: "الرئيسية", item: "/" },
//           { "@type": "ListItem", position: 2, name: "الخدمات", item: "/services" },
//           { "@type": "ListItem", position: 3, name: s.title.ar, item: s.path },
//         ],
//       }} />
//       <JsonLd data={{
//         "@context": "https://schema.org", "@type": "FAQPage",
//         mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q.ar, acceptedAnswer: { "@type": "Answer", text: f.a.ar } })),
//       }} />

//       <Section>
//         <Breadcrumbs items={[
//           { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
//           { label: { ar: "الخدمات", en: "Services" }, to: "/services" },
//           { label: s.title },
//         ]} />
//         <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
//           <div>
//             <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">{t("pages.services_$slug.text1")}</div>
//             <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">{l(s.title)}</h1>
//             <p className="mt-5 text-muted-foreground leading-relaxed">{l(s.hero)}</p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <CTAButton to="/contact">{t("pages.services_$slug.text2")}</CTAButton>
//               <CTAButton to="/contact" variant="outline">{t("pages.services_$slug.text3")}</CTAButton>
//             </div>
//           </div>
//           <img src={datacenter} alt={l(s.title)} width={1400} height={900} fetchPriority="high" decoding="async" className="rounded-lg shadow-md" />
//         </div>

//         <div className="mt-8 flex flex-wrap gap-2">
//           {s.subServices.map((ss) => (
//             <span key={ss.title.en} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs">{l(ss.title)}</span>
//           ))}
//         </div>
//       </Section>

//       <Section className="bg-secondary">
//         <SectionHead title={t("pages.services_$slug.text4")} />
//         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {s.subServices.map((ss) => (
//             <Card key={ss.title.en}>
//               <CheckCircle2 className="h-6 w-6 text-[color:var(--gold)] mb-2" />
//               <h3 className="font-bold">{l(ss.title)}</h3>
//               <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l(ss.desc)}</p>
//             </Card>
//           ))}
//         </div>
//       </Section>

//       <Section>
//         <SectionHead title={t("pages.services_$slug.text5")} />
//         <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
//           {s.sectors.map((sec) => (
//             <div key={sec.en} className="rounded-lg border border-border bg-card p-4 text-center text-sm font-semibold">{l(sec)}</div>
//           ))}
//         </div>
//       </Section>

//       <Section className="bg-secondary">
//         <SectionHead title={t("pages.services_$slug.text6")} />
//         <FAQ items={s.faqs} />
//       </Section>

//       <Section>
//         <SectionHead title={t("pages.services_$slug.text7")} />
//         <div className="grid gap-5 md:grid-cols-3">
//           {related.map((r) => (
//             <Card key={r.slug}>
//               <h3 className="font-bold">{l(r.title)}</h3>
//               <p className="mt-2 text-sm text-muted-foreground">{l(r.short)}</p>
//               <Link to="/services/$slug" params={{ slug: r.slug }} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold">
//                 {t("pages.services_$slug.text8")} <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//               </Link>
//             </Card>
//           ))}
//         </div>
//       </Section>

//       <section className="section-dark bg-primary text-primary-foreground">
//         <div className="container-page py-14 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold">{lang === "ar" ? `تحدثوا معنا حول ${s.title.ar}` : `Talk to us about ${s.title.en}`}</h2>
//           <div className="mt-6"><CTAButton to="/contact">{t("pages.services_$slug.text9")}</CTAButton></div>
//         </div>
//       </section>
//     </>
//   );
// }