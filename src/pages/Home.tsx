// import { useParams, Navigate } from "react-router-dom";
// import { Link } from "@/lib/router";
// import heroImg from "@/assets/hero-enterprise.jpg";
// import teamImg from "@/assets/team-meeting.jpg";
// import aiAgentsImg from "@/assets/service-ai-agents.jpg";
// import erpImg from "@/assets/service-erp.webp";
// import softwareImg from "@/assets/service-software-development.jpg";
// import cloudImg from "@/assets/service-cloud-infrastructure.jpg";
// import networkImg from "@/assets/service-network-connectivity.jpg";
// import surveillanceImg from "@/assets/service-surveillance.jpg";

// // شعارات العملاء
// import aramcoLogo from "@/assets/logos/clients/aramco.png";
// import moeLogo from "@/assets/logos/clients/ministry-of-education.png";
// import sabicLogo from "@/assets/logos/clients/sabic.jpg";
// import client4Logo from "@/assets/logos/clients/client-4.png";

// // شعارات الشركاء
// import microsoftLogo from "@/assets/logos/partners/microsoft.webp";
// import hpLogo from "@/assets/logos/partners/hp.webp";
// import dellLogo from "@/assets/logos/partners/dell.png";
// import ciscoLogo from "@/assets/logos/partners/cisco.webp";

// import { Section, SectionHead, Card, CTAButton, JsonLd, useL, FAQ } from "@/components/ui-blocks";
// import { SERVICES, INDUSTRIES } from "@/lib/services-data";
// import { useI18n } from "@/lib/i18n";
// import {
//   ArrowLeft,
//   Cpu,
//   Database,
//   Code2,
//   Cloud,
//   Network,
//   ShieldCheck,
//   CheckCircle2,
//   Users,
//   Layers,
//   Target,
//   BadgeCheck,
//   Landmark,
//   Fuel,
//   GraduationCap,
//   HeartPulse,
//   Banknote,
//   Building2,
// } from "lucide-react";

// const icons = [Cpu, Database, Code2, Cloud, Network, ShieldCheck];

// export default function HomePage() {
//   const { lang, t } = useI18n();
//   const l = useL();

//   const orgLd = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "ARABTEC",
//     alternateName: "أربتك",
//     foundingDate: "1996",
//     url: "/",
//     description: t("pages.index.text1"),
//   };

//   return (
//     <>
//       <JsonLd data={orgLd} />

//       {/* ============================================================
//           1. HERO
//           ============================================================ */}
//       <section className="relative overflow-hidden bg-background">
//         <div className="container-page grid gap-10 py-14 md:py-20 lg:grid-cols-2 items-center">
//           {/* Image — LEFT on desktop */}
//           <div className="relative order-2 lg:order-1">
//             <img
//               src={heroImg}
//               width={1600}
//               height={1000}
//               alt={
//                 lang === "ar"
//                   ? "حلول أربتك التقنية المتكاملة للمؤسسات والجهات الحكومية"
//                   : "ARABTEC integrated technology solutions for enterprises and government"
//               }
//               fetchPriority="high"
//               decoding="async"
//               className="rounded-lg shadow-lg w-full h-auto object-cover"
//             />
//           </div>

//           {/* Text — RIGHT on desktop */}
//           <div className="order-1 lg:order-2">
//             <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
//               {t("pages.index.text2")}
//             </div>
//             <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-[1.15] text-[color:var(--brand-deep)]">
//               {lang === "ar"
//                 ? "حلول تقنية متكاملة تقود تحول مؤسستكم نحو المستقبل"
//                 : "Integrated technology solutions that drive your organization's transformation"}
//             </h1>
//             <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
//               {lang === "ar"
//                 ? "منذ عام 1996، تقدم أربتك السعودية حلولاً تقنية متكاملة تساعد الجهات الحكومية والمؤسسات والشركات على تطوير أعمالها، رفع كفاءتها التشغيلية، وربط أنظمتها وبياناتها ضمن بيئة تقنية أكثر مرونة واستدامة."
//                 : "Since 1996, ARABTEC Saudi has delivered integrated technology solutions that help government entities, institutions and companies grow, raise operational efficiency, and connect their systems and data in a more flexible and sustainable technology environment."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {lang === "ar"
//                 ? "نجمع بين الخبرة في البنية التحتية والشبكات والأنظمة المؤسسية، وبين التقنيات الحديثة في الذكاء الاصطناعي، وكلاء الأعمال الذكيين، الحوسبة السحابية، وتطوير البرمجيات؛ لتقديم حلول مصممة وفق احتياجات كل مؤسسة."
//                 : "We combine deep expertise in infrastructure, networks and enterprise systems with modern capabilities in AI, intelligent business agents, cloud computing and software development — delivering solutions tailored to each organization's needs."}
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <CTAButton to="/services">
//                 {lang === "ar" ? "استكشف حلولنا" : "Explore our solutions"}
//               </CTAButton>
//               <CTAButton to="/contact" variant="outline">
//                 {lang === "ar" ? "ناقش مشروعك معنا" : "Discuss your project"}
//               </CTAButton>
//             </div>
//           </div>
//         </div>

//         {/* Trust bar */}
//         <div className="border-y border-border bg-secondary">
//           <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-center text-sm">
//             {(lang === "ar"
//               ? [
//                   { h: "منذ 1996", s: "خبرة تقنية ممتدة" },
//                   { h: "حلول متكاملة", s: "من التخطيط إلى الدعم والتشغيل" },
//                   { h: "قطاعات حيوية", s: "حكومية ومؤسسية وتجارية" },
//                   { h: "خبرات متعددة", s: "برمجيات، أنظمة، بنية تحتية واتصال" },
//                 ]
//               : [
//                   { h: "Since 1996", s: "Deep technology expertise" },
//                   { h: "Integrated solutions", s: "From planning to support & operations" },
//                   { h: "Vital sectors", s: "Government, enterprise & commercial" },
//                   { h: "Multidisciplinary skills", s: "Software, systems, infrastructure & connectivity" },
//                 ]
//             ).map((item) => (
//               <div key={item.h} className="text-[color:var(--brand-deep)]">
//                 <div className="font-bold">{item.h}</div>
//                 <div className="mt-1 text-muted-foreground text-xs">{item.s}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================================
//           3. ABOUT
//           ============================================================ */}
//       <Section>
//         <div className="grid gap-12 lg:grid-cols-2 items-center">
//           <img
//             src={teamImg}
//             alt={
//               lang === "ar"
//                 ? "فريق أربتك لتخطيط وتنفيذ الحلول التقنية المؤسسية"
//                 : "ARABTEC team planning enterprise technology solutions"
//             }
//             width={1400}
//             height={900}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-md order-2 lg:order-1"
//           />

//           <div className="order-1 lg:order-2">
//             <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
//               {t("pages.index.text8")}
//             </div>
//             <h2 className="mt-2 text-3xl md:text-4xl font-bold">
//               {lang === "ar"
//                 ? "خبرة تقنية راسخة ورؤية تواكب مستقبل الأعمال"
//                 : "Deep technology expertise, aligned with the future of business"}
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {lang === "ar"
//                 ? "أربتك شركة حلول تقنية سعودية تأسست عام 1996، وتعمل على مساعدة المؤسسات في تخطيط بيئاتها التقنية وتصميمها وتنفيذها وإدارتها ودعمها من خلال نقطة مسؤولية موحدة."
//                 : "ARABTEC is a Saudi technology solutions company founded in 1996. We help organizations plan, design, implement, operate and support their technology environments through a single point of accountability."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {lang === "ar"
//                 ? "تطورت خبرات الشركة من الشبكات والاتصال والبنية التحتية وأنظمة المراقبة والحضور، لتشمل تطوير البرمجيات، تطبيقات الأعمال، الأتمتة، الحلول السحابية وحلول الذكاء الاصطناعي الحديثة."
//                 : "Our expertise evolved from networks, connectivity, infrastructure, surveillance and attendance systems, to include software development, business applications, automation, cloud and modern AI solutions."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {lang === "ar"
//                 ? "نركز على فهم احتياجات المؤسسة أولاً، ثم اختيار التقنية المناسبة وربطها بالأنظمة والعمليات القائمة؛ بهدف تحقيق قيمة تشغيلية قابلة للقياس، وليس مجرد تطبيق تقنية جديدة."
//                 : "We focus on understanding the organization's needs first, then selecting the right technology and integrating it with existing systems and processes — to deliver measurable operational value, not just new technology."}
//             </p>
//             <div className="mt-6">
//               <CTAButton to="/about" variant="outline">
//                 {lang === "ar" ? "تعرّف إلى أربتك" : "Learn about ARABTEC"}{" "}
//                 <ArrowLeft className="ms-2 h-4 w-4 rtl:rotate-180" />
//               </CTAButton>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ============================================================
//           4. SERVICES — 6 cards (صورة + أيقونة + H3 + وصف + أمثلة + رابط)
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <SectionHead
//           eyebrow={t("pages.index.text14")}
//           title={
//             lang === "ar"
//               ? "حلول تقنية متكاملة من الاستراتيجية إلى التنفيذ والتشغيل"
//               : "Integrated solutions from strategy to execution and operations"
//           }
//           intro={
//             lang === "ar"
//               ? "نقدم مجموعة مترابطة من الخدمات التقنية التي تساعد المؤسسات على تحديث عملياتها، تطوير أنظمتها، تحسين الاتصال بين إداراتها ومواقعها، والاستفادة من البيانات والذكاء الاصطناعي ضمن بيئة تقنية موثوقة وقابلة للتوسع."
//               : "A connected set of technology services that help organizations modernize operations, evolve their systems, improve connectivity across departments and sites, and leverage data and AI within a trusted, scalable environment."
//           }
//         />

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {SERVICES.map((s, i) => {
//             const Icon = icons[i];

//             // صور البطاقات النهائية
//             const cardImages: Record<string, { src: string; altAr: string; altEn: string }> = {
//               "ai-agents": {
//                 src: aiAgentsImg,
//                 altAr: "حلول الذكاء الاصطناعي و AI Agents للمؤسسات والجهات الحكومية",
//                 altEn: "AI & AI Agents solutions for enterprises and government",
//               },
//               "erp-business-applications": {
//                 src: erpImg,
//                 altAr: "أنظمة ERP وتطبيقات الأعمال لإدارة عمليات المؤسسات",
//                 altEn: "ERP and business applications for enterprise operations",
//               },
//               "software-development": {
//                 src: softwareImg,
//                 altAr: "تطوير البرمجيات وتكامل الأنظمة للمؤسسات",
//                 altEn: "Software development and system integration for enterprises",
//               },
//               "cloud-infrastructure": {
//                 src: cloudImg,
//                 altAr: "حلول السحابة والبنية التحتية التقنية للمؤسسات",
//                 altEn: "Cloud and IT infrastructure solutions for enterprises",
//               },
//               "network-connectivity": {
//                 src: networkImg,
//                 altAr: "حلول الشبكات والاتصال وربط فروع المؤسسات",
//                 altEn: "Networks, connectivity and multi-site linking solutions",
//               },
//               "surveillance-access-control": {
//                 src: surveillanceImg,
//                 altAr: "أنظمة المراقبة والحضور والتحكم بالدخول للمؤسسات",
//                 altEn: "Surveillance, attendance and access control systems for enterprises",
//               },
//             };
//             const img = cardImages[s.slug];

//             // أمثلة مختصرة — AI و ERP فقط
//             const examples: Record<string, { ar: string[]; en: string[] }> = {
//               "ai-agents": {
//                 ar: [
//                   "مساعدون ذكيون للموظفين",
//                   "أتمتة الخدمات والطلبات",
//                   "بحث ذكي في الوثائق",
//                   "تحليل البيانات ودعم القرار",
//                 ],
//                 en: [
//                   "AI copilots for employees",
//                   "Service & request automation",
//                   "Intelligent document search",
//                   "Data analytics & decision support",
//                 ],
//               },
//               "erp-business-applications": {
//                 ar: [
//                   "المالية والمحاسبة",
//                   "الموارد البشرية والرواتب",
//                   "المشتريات والمخزون",
//                   "الأصول والمشاريع",
//                 ],
//                 en: [
//                   "Finance & accounting",
//                   "HR & payroll",
//                   "Procurement & inventory",
//                   "Assets & projects",
//                 ],
//               },
//             };
//             const ex = examples[s.slug];
//             const bullets = ex ? (lang === "ar" ? ex.ar : ex.en) : null;

//             // عناوين H3
//             const titles: Record<string, { ar: string; en: string }> = {
//               "ai-agents": {
//                 ar: "حلول الذكاء الاصطناعي ووكلاء الأعمال الذكيين",
//                 en: "AI Solutions & Intelligent Business Agents",
//               },
//               "erp-business-applications": {
//                 ar: "أنظمة ERP وتطبيقات الأعمال المؤسسية",
//                 en: "ERP & Enterprise Business Applications",
//               },
//               "software-development": {
//                 ar: "تطوير البرمجيات وتكامل الأنظمة",
//                 en: "Software Development & System Integration",
//               },
//               "cloud-infrastructure": {
//                 ar: "السحابة والبنية التحتية التقنية",
//                 en: "Cloud & IT Infrastructure",
//               },
//               "network-connectivity": {
//                 ar: "الشبكات والاتصالات وربط المواقع",
//                 en: "Networks, Communications & Multi-site Linking",
//               },
//               "surveillance-access-control": {
//                 ar: "أنظمة المراقبة والتحكم بالدخول والحضور",
//                 en: "Surveillance, Access Control and Attendance Systems",
//               },
//             };
//             const cardTitle = titles[s.slug] ?? { ar: l(s.title), en: l(s.title) };

//             // أوصاف مخصصة لكل بطاقة
//             const descriptions: Record<string, { ar: string; en: string }> = {
//               "ai-agents": {
//                 ar: "نطور حلول ذكاء اصطناعي تساعد الجهات الحكومية والمؤسسات على أتمتة المهام، تحسين الوصول إلى المعلومات، تحليل البيانات، ودعم الموظفين والمتعاملين من خلال AI Agents متكاملة مع الأنظمة والوثائق المؤسسية.",
//                 en: "We build AI solutions that help government entities and enterprises automate tasks, improve access to information, analyze data, and support employees and customers through AI Agents integrated with enterprise systems and documents.",
//               },
//               "erp-business-applications": {
//                 ar: "نساعد المؤسسات على توحيد عملياتها وبياناتها من خلال أنظمة ERP وتطبيقات أعمال تغطي المالية، الموارد البشرية، المشتريات، المخزون، المبيعات، الأصول والمشاريع، مع إمكانات التخصيص والتكامل مع الأنظمة القائمة.",
//                 en: "We help enterprises unify their processes and data through ERP and business applications covering finance, HR, procurement, inventory, sales, assets and projects — with customization and integration with existing systems.",
//               },
//               "software-development": {
//                 ar: "نصمم ونطور حلولاً برمجية مخصصة تشمل الأنظمة المؤسسية، بوابات الويب، تطبيقات الهاتف وسطح المكتب، وربط الأنظمة عبر واجهات API؛ بما يتوافق مع إجراءات المؤسسة ومتطلباتها التشغيلية.",
//                 en: "We design and build custom software — enterprise systems, web portals, mobile and desktop applications, and API-based system integration — aligned with your organization's processes and operational requirements.",
//               },
//               "cloud-infrastructure": {
//                 ar: "نخطط وننفذ بيئات تقنية مرنة تشمل الخوادم، التخزين، الأنظمة السحابية، النسخ الاحتياطي، تجهيز مواقع العمل، التراخيص، واستمرارية الأعمال، بما يدعم توسع المؤسسة واستقرار عملياتها.",
//                 en: "We plan and implement flexible technology environments including servers, storage, cloud systems, backup, workplace setup, licensing and business continuity — supporting growth and operational stability.",
//               },
//               "network-connectivity": {
//                 ar: "نقدم خدمات تصميم وتنفيذ وإدارة الشبكات المؤسسية، وربط الفروع والمواقع، والألياف الضوئية، والشبكات اللاسلكية، والكابلات الهيكلية، و VoIP وحلول الاتصال متعددة الموردين.",
//                 en: "We deliver enterprise network design, implementation and management, multi-site linking, fiber optics, wireless, structured cabling, VoIP and multi-vendor connectivity solutions.",
//               },
//               "surveillance-access-control": {
//                 ar: "نوفر حلول المراقبة المرئية، أنظمة تسجيل الحضور والانصراف، البصمة والتعرف على الوجه، البطاقات و RFID، والتحكم بالدخول، مع خدمات التركيب والتكامل والتشغيل والصيانة.",
//                 en: "We provide video surveillance, attendance systems, biometrics and face recognition, RFID and access control — with installation, integration, operation and maintenance services.",
//               },
//             };
//             const desc = descriptions[s.slug] ?? { ar: l(s.short), en: l(s.short) };

//             // نص الرابط
//             const ctaLabels: Record<string, { ar: string; en: string }> = {
//               "ai-agents": { ar: "استكشف حلول الذكاء الاصطناعي", en: "Explore AI solutions" },
//               "erp-business-applications": { ar: "استكشف حلول ERP", en: "Explore ERP solutions" },
//               "software-development": { ar: "استكشف خدمات تطوير البرمجيات", en: "Explore software development" },
//               "cloud-infrastructure": { ar: "استكشف حلول السحابة والبنية التحتية", en: "Explore cloud & infrastructure" },
//               "network-connectivity": { ar: "استكشف حلول الشبكات والاتصال", en: "Explore networks & connectivity" },
//               "surveillance-access-control": { ar: "استكشف الأنظمة الذكية", en: "Explore smart systems" },
//             };
//             const cta = ctaLabels[s.slug] ?? { ar: "استكشف الخدمة", en: "Explore service" };

//             return (
//               <Card key={s.slug} className="flex flex-col">
//                 {/* الصورة */}
//                 {img && (
//                   <img
//                     src={img.src}
//                     alt={lang === "ar" ? img.altAr : img.altEn}
//                     width={800}
//                     height={450}
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full h-40 object-cover rounded-md mb-4"
//                   />
//                 )}

//                 {/* الأيقونة + H3 في نفس السطر */}
//                 <div className="flex items-start gap-3">
//                   <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
//                     <Icon className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-lg font-bold leading-snug pt-1.5">
//                     {lang === "ar" ? cardTitle.ar : cardTitle.en}
//                   </h3>
//                 </div>

//                 {/* الوصف */}
//                 <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
//                   {lang === "ar" ? desc.ar : desc.en}
//                 </p>

//                 {/* أمثلة مختصرة — AI و ERP فقط */}
//                 {bullets && (
//                   <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
//                     {bullets.map((b) => (
//                       <li key={b} className="flex items-start gap-2">
//                         <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
//                         <span>{b}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {/* الرابط */}
//                 <Link
//                   to="/services/$slug"
//                   params={{ slug: s.slug }}
//                   className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
//                 >
//                   {lang === "ar" ? cta.ar : cta.en}{" "}
//                   <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//                 </Link>
//               </Card>
//             );
//           })}
//         </div>
//       </Section>

//       {/* ============================================================
//           5. WHY ARABTEC
//           ============================================================ */}
//       <Section>
//         <SectionHead
//           eyebrow={t("pages.index.text18")}
//           title={
//             lang === "ar"
//               ? "لماذا تختار المؤسسات أربتك شريكًا تقنيًا؟"
//               : "Why organizations choose ARABTEC as a technology partner"
//           }
//         />
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               icon: BadgeCheck,
//               t: { ar: "خبرة ممتدة", en: "Extended experience" },
//               d: {
//                 ar: "منذ عام 1996، راكمت أربتك خبرات في البنية التحتية والشبكات والبرمجيات والأنظمة المتكاملة، مع تطور مستمر نحو الحلول السحابية والذكاء الاصطناعي.",
//                 en: "Since 1996, ARABTEC has built expertise across infrastructure, networks, software and integrated systems — continuously evolving toward cloud and AI.",
//               },
//             },
//             {
//               icon: Layers,
//               t: { ar: "حلول متكاملة", en: "Integrated solutions" },
//               d: {
//                 ar: "نتعامل مع المشروع باعتباره منظومة واحدة تشمل التحليل، التصميم، التوريد، التطوير، التكامل، التنفيذ، التدريب والدعم.",
//                 en: "We treat the project as one system: analysis, design, supply, development, integration, delivery, training and support.",
//               },
//             },
//             {
//               icon: Target,
//               t: { ar: "حلول مصممة وفق احتياجاتكم", en: "Solutions tailored to your needs" },
//               d: {
//                 ar: "لا نفرض منتجًا واحدًا على جميع العملاء؛ بل ندرس بيئة المؤسسة وأهدافها وأنظمتها الحالية قبل تصميم الحل.",
//                 en: "We don't push one product on every client — we study your environment, goals and existing systems before designing the solution.",
//               },
//             },
//             {
//               icon: Users,
//               t: { ar: "مسؤولية واضحة", en: "Clear accountability" },
//               d: {
//                 ar: "نوفر نقطة اتصال ومسؤولية موحدة تساعد العميل على إدارة المشروع ومتابعة التنفيذ والدعم بكفاءة.",
//                 en: "A single point of contact and accountability that helps clients manage the project and follow up on delivery and support efficiently.",
//               },
//             },
//           ].map((c) => {
//             const Icon = c.icon;
//             return (
//               <Card key={c.t.en}>
//                 <Icon className="h-6 w-6 text-[color:var(--gold)] mb-3" />
//                 <h3 className="font-bold">{l(c.t)}</h3>
//                 <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l(c.d)}</p>
//               </Card>
//             );
//           })}
//         </div>
//       </Section>

//       {/* ============================================================
//           6. INDUSTRIES — 6 بطاقات بأيقونات
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <SectionHead
//           eyebrow={t("pages.index.text20")}
//           title={
//             lang === "ar"
//               ? "خبرات تقنية تلائم متخصصة لمتطلبات القطاعات الحيوية"
//               : "Specialized technical for the requirements of vital sectors"
//           }
//           intro={
//             lang === "ar"
//               ? "تختلف الأولويات التقنية من قطاع إلى آخر. لذلك تصمم أربتك حلولها وفق طبيعة العمليات، حساسية البيانات، حجم المستخدمين، متطلبات التكامل واستمرارية الخدمة في كل مؤسسة."
//               : "Priorities differ by sector, so ARABTEC tailors solutions to your operations, data sensitivity, user scale, integration needs and continuity requirements."
//           }
//         />

//         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {INDUSTRIES.map((ind) => {
//             // أيقونة مخصصة لكل قطاع حسب مفتاحه
//             const industryIcons: Record<string, typeof Landmark> = {
//               government: Landmark,
//               "oil-gas": Fuel,
//               education: GraduationCap,
//               healthcare: HeartPulse,
//               banking: Banknote,
//               enterprises: Building2,
//             };
//             const IndIcon = industryIcons[ind.key] ?? Landmark;

//             return (
//               <Card key={ind.key}>
//                 {/* الأيقونة */}
//                 <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
//                   <IndIcon className="h-5 w-5" />
//                 </div>

//                 {/* العنوان */}
//                 <h3 className="text-base font-bold">
//                   {lang === "ar" ? ind.ar : ind.en}
//                 </h3>

//                 {/* الوصف */}
//                 <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
//                   {l(ind.desc)}
//                 </p>
//               </Card>
//             );
//           })}
//         </div>

//         <div className="mt-8">
//           <CTAButton to="/industries" variant="outline">
//             {lang === "ar" ? "استكشف القطاعات التي نخدمها" : "Explore all industries"}
//           </CTAButton>
//         </div>
//       </Section>

//       {/* ============================================================
//           7. METHODOLOGY
//           ============================================================ */}
//       {/* <Section>
//         <SectionHead
//           eyebrow={t("pages.index.text24")}
//           title={
//             lang === "ar"
//               ? "منهجية واضحة لتحويل الاحتياج إلى حل قابل للتنفيذ"
//               : "A clear methodology from need to executable solution"
//           }
//         />
//         <ol className="grid gap-4 md:grid-cols-5">
//           {(lang === "ar"
//             ? [
//                 { t: "فهم الاحتياج", d: "نبدأ بدراسة أهداف المؤسسة والتحديات الحالية والمستخدمين والأنظمة والبيانات ذات العلاقة." },
//                 { t: "تصميم الحل", d: "نحدد البنية الفنية، نطاق العمل، مراحل التنفيذ، متطلبات التكامل ومؤشرات النجاح." },
//                 { t: "التطوير والتجهيز", d: "نطور أو نجهز مكونات الحل ونختبرها وفق المتطلبات المعتمدة." },
//                 { t: "التنفيذ والتكامل", d: "نربط الحل بالأنظمة والبيئة التقنية، ثم ننفذ الاختبارات والتدريب والإطلاق." },
//                 { t: "الدعم والتحسين", d: "نقدم الدعم التشغيلي ونتابع الأداء وفرص التحسين والتوسع وفق الاتفاق." },
//               ]
//             : [
//                 { t: "Understand", d: "We study the organization's goals, current challenges, users, systems and related data." },
//                 { t: "Design", d: "We define architecture, scope, delivery phases, integration requirements and success metrics." },
//                 { t: "Develop", d: "We build or prepare solution components and test them against approved requirements." },
//                 { t: "Integrate", d: "We connect the solution to your systems and environment, then run tests, training and go-live." },
//                 { t: "Support", d: "We provide operational support and monitor performance, improvement and expansion opportunities." },
//               ]
//           ).map((step, i) => (
//             <li key={i} className="relative rounded-xl border border-border bg-card p-5">
//               <div className="text-3xl font-extrabold text-[color:var(--gold)]">0{i + 1}</div>
//               <div className="mt-1 font-semibold">{step.t}</div>
//               <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
//             </li>
//           ))}
//         </ol>
//       </Section> */}

//       {/* ============================================================
//           8. PARTNERS & CLIENTS — صفين: عملاء + شركاء
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <SectionHead
//           title={
//             lang === "ar"
//               ? "علاقات تقنية بُنيت على الثقة والتنفيذ"
//               : "Technology relationships built on trust and delivery"
//           }
//           intro={
//             lang === "ar"
//               ? "عملت أربتك على تقديم خدمات وحلول تقنية لمؤسسات في قطاعات حكومية وصناعية وتعليمية وتجارية، واستفادت من علاقاتها مع مزودي تقنيات عالميين لتوفير الأنظمة والأجهزة والخدمات المناسبة لمشروعاتها."
//               : "ARABTEC has delivered technology services and solutions to organizations across government, industrial, educational and commercial sectors — leveraging relationships with global technology vendors to provide the right systems, hardware and services for each project."
//           }
//         />

//         {/* ====================================================
//             الصف الأول: عملاء خدمناهم
//             ==================================================== */}
//         <div className="mt-10">
//           <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">
//             {lang === "ar" ? "عملاء خدمناهم" : "Clients we have served"}
//           </h3>

//           <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               {
//                 src: aramcoLogo,
//                 nameAr: "أرامكو السعودية",
//                 nameEn: "Saudi Aramco",
//               },
//               {
//                 src: moeLogo,
//                 nameAr: "وزارة التعليم",
//                 nameEn: "Ministry of Education",
//               },
//               {
//                 src: sabicLogo,
//                 nameAr: "سابك",
//                 nameEn: "SABIC",
//               },
//               {
//                 src: client4Logo,
//                 nameAr: "عميل",
//                 nameEn: "Client",
//               },
//             ].map((client, i) => (
//               <div
//                 key={i}
//                 className="h-24 rounded-lg border border-border bg-card grid place-items-center p-4 hover:shadow-md transition-shadow"
//               >
//                 <img
//                   src={client.src}
//                   alt={lang === "ar" ? client.nameAr : client.nameEn}
//                   loading="lazy"
//                   decoding="async"
//                   className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ====================================================
//             الصف الثاني: شركاء وتقنيات نعمل معها
//             ==================================================== */}
//         <div className="mt-12">
//           <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">
//             {lang === "ar"
//               ? "شركاء وتقنيات نعمل معها"
//               : "Partners & technologies we work with"}
//           </h3>

//           <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               {
//                 src: microsoftLogo,
//                 nameAr: "مايكروسوفت",
//                 nameEn: "Microsoft",
//               },
//               {
//                 src: hpLogo,
//                 nameAr: "إتش بي",
//                 nameEn: "HP",
//               },
//               {
//                 src: dellLogo,
//                 nameAr: "ديل",
//                 nameEn: "Dell",
//               },
//               {
//                 src: ciscoLogo,
//                 nameAr: "سيسكو",
//                 nameEn: "Cisco",
//               },
//             ].map((partner, i) => (
//               <div
//                 key={i}
//                 className="h-24 rounded-lg border border-border bg-card grid place-items-center p-4 hover:shadow-md transition-shadow"
//               >
//                 <img
//                   src={partner.src}
//                   alt={lang === "ar" ? partner.nameAr : partner.nameEn}
//                   loading="lazy"
//                   decoding="async"
//                   className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* الزر */}
//         <div className="mt-10">
//           <CTAButton to="/partners-clients" variant="outline">
//             {lang === "ar"
//               ? "تعرّف إلى شركائنا وعملائنا"
//               : "Meet our partners & clients"}
//           </CTAButton>
//         </div>
//       </Section>

//       {/* ============================================================
//           9. CTA
//           ============================================================ */}
//       <section className="section-dark bg-primary text-primary-foreground">
//         <div className="container-page py-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             {lang === "ar"
//               ? "هل تخططون لمشروع تقني أو تحول مؤسسي جديد؟"
//               : "Planning a new technology project or transformation?"}
//           </h2>
//           <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
//             {lang === "ar"
//               ? "تحدثوا مع فريق أربتك لمناقشة احتياجات مؤسستكم وتحديد الحلول التقنية المناسبة، سواء كنتم تبحثون عن نظام ERP، حل ذكاء اصطناعي، تطوير برمجيات، بنية تحتية، شبكات أو أنظمة مراقبة وتحكم بالدخول."
//               : "Talk to the ARABTEC team about your needs and the right solutions — whether you're exploring ERP, AI, software development, infrastructure, networks, or surveillance and access control."}
//           </p>
//           <div className="mt-8 flex flex-wrap justify-center gap-3">
//             <Link
//               to="/contact"
//               className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
//             >
//               {lang === "ar" ? "اطلب استشارة تقنية" : "Request a consultation"}
//             </Link>
//             <Link
//               to="/contact"
//               className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
//             >
//               {lang === "ar" ? "تواصل مع فريقنا" : "Contact our team"}
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ============================================================
//           10. FAQ
//           ============================================================ */}
//       <Section>
//         <SectionHead
//           title={
//             lang === "ar"
//               ? "أسئلة شائعة عن حلول أربتك التقنية"
//               : "Frequently asked questions about ARABTEC solutions"
//           }
//         />
//         <FAQ
//           items={[
//             {
//               q: {
//                 ar: "ما الخدمات التقنية التي تقدمها أربتك؟",
//                 en: "What technology services does ARABTEC provide?",
//               },
//               a: {
//                 ar: "تقدم أربتك حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، الحلول السحابية والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
//                 en: "ARABTEC provides AI & AI Agents solutions, ERP and business applications, software development and system integration, cloud and infrastructure, networks and connectivity, and surveillance, attendance and access control.",
//               },
//             },
//             {
//               q: {
//                 ar: "هل تقدم أربتك حلولاً مخصصة للجهات الحكومية؟",
//                 en: "Does ARABTEC offer tailored solutions for government entities?",
//               },
//               a: {
//                 ar: "نعم، يمكن تصميم الحلول وفق إجراءات الجهة الحكومية ومتطلبات المستخدمين والربط مع الأنظمة والبيانات القائمة، بعد دراسة النطاق والمتطلبات الفنية والتنظيمية للمشروع.",
//                 en: "Yes — solutions can be designed around government procedures, user requirements and integration with existing systems and data, after studying the project's scope, technical and regulatory requirements.",
//               },
//             },
//             {
//               q: {
//                 ar: "هل تطور أربتك أنظمة وبرمجيات مخصصة؟",
//                 en: "Does ARABTEC build custom systems and software?",
//               },
//               a: {
//                 ar: "نعم، تشمل خدمات تطوير البرمجيات الأنظمة المؤسسية، تطبيقات الويب والهاتف وسطح المكتب، البوابات الرقمية وتكامل الأنظمة وواجهات API.",
//                 en: "Yes — software development covers enterprise systems, web, mobile and desktop applications, digital portals, system integration and APIs.",
//               },
//             },
//             {
//               q: {
//                 ar: "هل يمكن ربط حلول الذكاء الاصطناعي بأنظمة المؤسسة؟",
//                 en: "Can AI solutions be integrated with enterprise systems?",
//               },
//               a: {
//                 ar: "يمكن تصميم AI Agents وربطها بالوثائق وقواعد المعرفة والأنظمة المؤسسية المصرح بها، وفق نطاق المشروع وضوابط البيانات والصلاحيات.",
//                 en: "AI Agents can be designed and connected to authorized documents, knowledge bases and enterprise systems — according to project scope, data controls and access policies.",
//               },
//             },
//             {
//               q: {
//                 ar: "هل تقدم أربتك أنظمة ERP قابلة للتخصيص؟",
//                 en: "Does ARABTEC offer customizable ERP systems?",
//               },
//               a: {
//                 ar: "تقدم أربتك حلول ERP وتطبيقات أعمال يمكن مواءمتها مع عمليات المؤسسة وربطها بالمالية والموارد البشرية والمشتريات والمخزون وغيرها، وفق احتياجات المشروع.",
//                 en: "ARABTEC offers ERP and business applications that can be aligned with your operations and integrated with finance, HR, procurement, inventory and more — based on project needs.",
//               },
//             },
//             {
//               q: {
//                 ar: "هل تقدم أربتك خدمات التنفيذ والدعم؟",
//                 en: "Does ARABTEC provide implementation and support services?",
//               },
//               a: {
//                 ar: "تغطي خدمات أربتك، بحسب نطاق العقد، مراحل الدراسة والتصميم والتطوير أو التوريد والتنفيذ والتكامل والتدريب والدعم التشغيلي.",
//                 en: "Depending on the contract scope, ARABTEC services cover study, design, development or supply, delivery, integration, training and operational support.",
//               },
//             },
//           ]}
//         />

//         <JsonLd
//           data={{
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             mainEntity: [
//               {
//                 "@type": "Question",
//                 name: "ما الخدمات التقنية التي تقدمها أربتك؟",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، السحابة والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "هل تقدم أربتك حلولاً مخصصة للجهات الحكومية؟",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "نعم، تصمم الحلول وفق إجراءات الجهة الحكومية ومتطلبات المستخدمين والربط مع الأنظمة والبيانات القائمة.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "هل يمكن ربط حلول الذكاء الاصطناعي بأنظمة المؤسسة؟",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "يمكن تصميم AI Agents وربطها بالوثائق وقواعد المعرفة والأنظمة المؤسسية المصرح بها وفق نطاق المشروع وضوابط البيانات والصلاحيات.",
//                 },
//               },
//             ],
//           }}
//         />
//       </Section>
//     </>
//   );
// }
// [البلوك المعلّق القديم في أعلى الملف تم الحفاظ عليه كما هو — لم يتغير]

// [البلوك المعلّق القديم في أعلى الملف تم الحفاظ عليه كما هو — لم يتغير]
import { useParams, Navigate } from "react-router-dom";
import { Link } from "@/lib/router";
import heroImg from "@/assets/hero-enterprise.jpg";
import teamImg from "@/assets/team-meeting.jpg";
import aiAgentsImg from "@/assets/service-ai-agents.jpg";
import erpImg from "@/assets/service-erp.jpg";
import softwareImg from "@/assets/service-software-development.jpg";
import cloudImg from "@/assets/service-cloud-infrastructure.jpg";
import networkImg from "@/assets/service-network-connectivity.jpg";
import surveillanceImg from "@/assets/service-surveillance.jpg";
import Partners3DSlider from "@/components/Partners3DSlider";
import { Section, SectionHead, Card, CTAButton, JsonLd, useL, FAQ } from "@/components/ui-blocks";
import { SERVICES, INDUSTRIES } from "@/lib/services-data";
import { useI18n } from "@/lib/i18n";
import {
  ArrowLeft,
  Cpu,
  Database,
  Code2,
  Cloud,
  Network,
  ShieldCheck,
  CheckCircle2,
  Users,
  Layers,
  Target,
  BadgeCheck,
  Landmark,
  Fuel,
  GraduationCap,
  HeartPulse,
  Banknote,
  Building2,
  Award,
  FileText,
  TrendingUp,
  Boxes,
} from "lucide-react";

const icons = [Cpu, Database, Code2, Cloud, Network, ShieldCheck];

export default function HomePage() {
  const { lang, t } = useI18n();
  const l = useL();

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ARABTEC",
    alternateName: "أربتك",
    foundingDate: "1996",
    url: "/",
    description: t("pages.index.text1"),
  };

  return (
    <>
      <JsonLd data={orgLd} />

      {/* ============================================================
          1. HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-page grid gap-6 lg:gap-10 py-6 md:py-10 lg:grid-cols-2 items-center">
          {/* Image — LEFT on desktop */}
          <div className="relative order-2 lg:order-1">
            <img
              src={heroImg}
              width={1600}
              height={1000}
              alt={
                lang === "ar"
                  ? "حلول أربتك التقنية المتكاملة للمؤسسات والجهات الحكومية"
                  : "ARABTEC integrated technology solutions for enterprises and government"
              }
              fetchPriority="high"
              decoding="async"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text — RIGHT on desktop */}
          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              {t("pages.index.text2")}
            </div>
            <h1 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.25] text-[color:var(--brand-deep)]">
              {lang === "ar"
                ? "حلول تقنية متكاملة تقود تحول مؤسستكم نحو المستقبل"
                : "Integrated technology solutions that drive your organization's transformation"}
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#4B5563] leading-[1.9]">
              {lang === "ar"
                ? "منذ 1996، نقدم حلولًا تقنية متكاملة للجهات الحكومية والشركات، من البنية التحتية والأنظمة المؤسسية إلى الذكاء الاصطناعي والحلول السحابية."
                : "Since 1996, we've delivered integrated technology solutions for government entities and enterprises — from infrastructure and enterprise systems to AI and cloud solutions."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* الزر الأول — أبيض (استكشاف) */}
              <Link
                to="/services"
                className="rounded-md bg-white border border-[#0B3D2E] px-6 py-3 text-sm font-semibold text-[#0B3D2E] hover:bg-gray-50 transition"
              >
                {lang === "ar" ? "استكشف حلولنا" : "Explore our solutions"}
              </Link>

              {/* الزر الثاني — أخضر (تواصل) */}
              <Link
                to="/contact"
                className="rounded-md bg-[#0B3D2E] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                {lang === "ar" ? "ناقش مشروعك معنا" : "Discuss your project"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. ABOUT
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-center">
          <img
            src={teamImg}
            alt={
              lang === "ar"
                ? "فريق أربتك لتخطيط وتنفيذ الحلول التقنية المؤسسية"
                : "ARABTEC team planning enterprise technology solutions"
            }
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-md order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              {t("pages.index.text8")}
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold">
              {lang === "ar"
                ? "خبرة تقنية راسخة ورؤية تواكب مستقبل الأعمال"
                : "Deep technology expertise, aligned with the future of business"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {lang === "ar"
                ? "أربتك شركة حلول تقنية سعودية تأسست عام 1996، وتعمل على مساعدة المؤسسات في تخطيط بيئاتها التقنية وتصميمها وتنفيذها وإدارتها ودعمها عبر نقطة اتصال واحدة تدير المشروع من البداية حتى التنفيذ."
                : "ARABTEC is a Saudi technology solutions company founded in 1996. We help organizations plan, design, implement, operate and support their technology environments through a single point of contact managing the project from start to delivery."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {lang === "ar"
                ? "تطورت خبرات الشركة من الشبكات والاتصال والبنية التحتية وأنظمة المراقبة والحضور، لتشمل تطوير البرمجيات، تطبيقات الأعمال، الأتمتة، الحلول السحابية وحلول الذكاء الاصطناعي الحديثة."
                : "Our expertise evolved from networks, connectivity, infrastructure, surveillance and attendance systems, to include software development, business applications, automation, cloud and modern AI solutions."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {lang === "ar"
                ? "نركز على فهم احتياجات المؤسسة أولاً، ثم اختيار التقنية المناسبة وربطها بالأنظمة والعمليات القائمة؛ بهدف تحقيق قيمة تشغيلية قابلة للقياس، وليس مجرد تطبيق تقنية جديدة."
                : "We focus on understanding the organization's needs first, then selecting the right technology and integrating it with existing systems and processes — to deliver measurable operational value, not just new technology."}
            </p>
            <div className="mt-6">
              <CTAButton to="/about" variant="outline">
                {lang === "ar" ? "تعرّف إلى أربتك" : "Learn about ARABTEC"}{" "}
                <ArrowLeft className="ms-2 h-4 w-4 rtl:rotate-180" />
              </CTAButton>
            </div>
          </div>
        </div>

        {/* ============================================================
            Trust bar — أربتك بالأرقام (مصغر)
            ============================================================ */}
        <div className="py-6 md:py-10 border-b border-border">
          <div className="container-page">
            
            {/* العنوان الرئيسي والوصف */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="h-[1px] w-10 md:w-16 bg-[#D4AF37]/70 hidden sm:block"></span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3D2E]">
                  {lang === "ar" ? "أربتك بالأرقام" : "ARABTEC by the numbers"}
                </h2>
                <span className="h-[1px] w-10 md:w-16 bg-[#D4AF37]/70 hidden sm:block"></span>
              </div>
              <p className="text-[#4B5563] text-sm md:text-base">
                {lang === "ar"
                  ? "نتائج حقيقية تعكس خبرتنا وشراكاتنا طويلة الأمد"
                  : "Real results reflecting our expertise and long-term partnerships"}
              </p>
            </div>

            {/* الكروت الأربعة */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                {
                  icon: Building2,
                  num: "30+",
                  titleAr: "سنة من الخبرة",
                  titleEn: "Years of experience",
                  descAr: "منذ عام 1996",
                  descEn: "Since 1996",
                },
                {
                  icon: FileText,
                  num: "800+",
                  titleAr: "مشروع منفذ",
                  titleEn: "Projects delivered",
                  descAr: "في مختلف القطاعات",
                  descEn: "Across various sectors",
                },
                {
                  icon: Users,
                  num: "16,000+",
                  titleAr: "عميل",
                  titleEn: "Clients",
                  descAr: "حلول موثوقة لعملائنا",
                  descEn: "Reliable solutions for our clients",
                },
                {
                  icon: Network,
                  num: "17",
                  titleAr: "قطاعاً رئيسياً",
                  titleEn: "Key sectors",
                  descAr: "خبرة متنوعة وواسعة",
                  descEn: "Diverse and extensive expertise",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-[14px] border border-[#E5E7EB] bg-white p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* الأيقونة والقوس الذهبي */}
                    <div className="relative mb-3 flex items-center justify-center h-12 w-12">
                      <div className="absolute inset-0 rounded-full bg-[#F3F4F6]"></div>
                      <Icon className="relative z-10 h-5 w-5 text-[#374151]" strokeWidth={1.5} />
                      <svg
                        className="absolute inset-0 h-full w-full rotate-[-45deg]"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="5"
                          strokeDasharray="150 200"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="text-2xl md:text-3xl font-extrabold text-[#0B3D2E] leading-none tracking-tight mb-1">
                      {item.num}
                    </div>

                    <div className="h-2 w-[1px] bg-[#D4AF37] mb-1"></div>

                    <div className="font-bold text-sm text-[#0B3D2E] mb-1">
                      {lang === "ar" ? item.titleAr : item.titleEn}
                    </div>

                    <div className="text-xs md:text-sm text-[#4B5563]">
                      {lang === "ar" ? item.descAr : item.descEn}
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </Section>

      {/* ============================================================
          4. SERVICES — 6 cards
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          eyebrow={t("pages.index.text14")}
          title={
            lang === "ar"
              ? "حلول تقنية متكاملة من الاستراتيجية إلى التنفيذ والتشغيل"
              : "Integrated solutions from strategy to execution and operations"
          }
          intro={
            lang === "ar"
              ? "نقدم مجموعة مترابطة من الخدمات التقنية التي تساعد المؤسسات على تحديث عملياتها، تطوير أنظمتها، تحسين الاتصال بين إداراتها ومواقعها، والاستفادة من البيانات والذكاء الاصطناعي ضمن بيئة تقنية موثوقة وقابلة للتوسع."
              : "A connected set of technology services that help organizations modernize operations, evolve their systems, improve connectivity across departments and sites, and leverage data and AI within a trusted, scalable environment."
          }
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {SERVICES.map((s, i) => {
            const Icon = icons[i];

            const cardImages: Record<string, { src: string; altAr: string; altEn: string }> = {
              "ai-agents": {
                src: aiAgentsImg,
                altAr: "حلول الذكاء الاصطناعي و AI Agents للمؤسسات والجهات الحكومية",
                altEn: "AI & AI Agents solutions for enterprises and government",
              },
              "erp-business-applications": {
                src: erpImg,
                altAr: "أنظمة ERP وتطبيقات الأعمال لإدارة عمليات المؤسسات",
                altEn: "ERP and business applications for enterprise operations",
              },
              "software-development": {
                src: softwareImg,
                altAr: "تطوير البرمجيات وتكامل الأنظمة للمؤسسات",
                altEn: "Software development and system integration for enterprises",
              },
              "cloud-infrastructure": {
                src: cloudImg,
                altAr: "حلول السحابة والبنية التحتية التقنية للمؤسسات",
                altEn: "Cloud and IT infrastructure solutions for enterprises",
              },
              "network-connectivity": {
                src: networkImg,
                altAr: "حلول الشبكات والاتصال وربط فروع المؤسسات",
                altEn: "Networks, connectivity and multi-site linking solutions",
              },
              "surveillance-access-control": {
                src: surveillanceImg,
                altAr: "أنظمة المراقبة والحضور والتحكم بالدخول للمؤسسات",
                altEn: "Surveillance, attendance and access control systems for enterprises",
              },
            };
            const img = cardImages[s.slug];

            const examples: Record<string, { ar: string[]; en: string[] }> = {
              "ai-agents": {
                ar: [
                  "مساعدون ذكيون للموظفين",
                  "أتمتة الخدمات والطلبات",
                  "بحث ذكي في الوثائق",
                  "تحليل البيانات ودعم القرار",
                ],
                en: [
                  "AI copilots for employees",
                  "Service & request automation",
                  "Intelligent document search",
                  "Data analytics & decision support",
                ],
              },
              "erp-business-applications": {
                ar: [
                  "المالية والمحاسبة",
                  "الموارد البشرية والرواتب",
                  "المشتريات والمخزون",
                  "الأصول والمشاريع",
                ],
                en: [
                  "Finance & accounting",
                  "HR & payroll",
                  "Procurement & inventory",
                  "Assets & projects",
                ],
              },
            };
            const ex = examples[s.slug];
            const bullets = ex ? (lang === "ar" ? ex.ar : ex.en) : null;

            const titles: Record<string, { ar: string; en: string }> = {
              "ai-agents": {
                ar: "حلول الذكاء الاصطناعي ووكلاء الأعمال الذكيين",
                en: "AI Solutions & Intelligent Business Agents",
              },
              "erp-business-applications": {
                ar: "أنظمة ERP وتطبيقات الأعمال المؤسسية",
                en: "ERP & Enterprise Business Applications",
              },
              "software-development": {
                ar: "تطوير البرمجيات وتكامل الأنظمة",
                en: "Software Development & System Integration",
              },
              "cloud-infrastructure": {
                ar: "السحابة والبنية التحتية التقنية",
                en: "Cloud & IT Infrastructure",
              },
              "network-connectivity": {
                ar: "الشبكات والاتصالات وربط المواقع",
                en: "Networks, Communications & Multi-site Linking",
              },
              "surveillance-access-control": {
                ar: "أنظمة المراقبة والتحكم بالدخول والحضور",
                en: "Surveillance, Access Control and Attendance Systems",
              },
            };
            const cardTitle = titles[s.slug] ?? { ar: l(s.title), en: l(s.title) };

            const descriptions: Record<string, { ar: string; en: string }> = {
              "ai-agents": {
                ar: "نطور حلول ذكاء اصطناعي تساعد الجهات الحكومية والمؤسسات على أتمتة المهام، تحسين الوصول إلى المعلومات، تحليل البيانات، ودعم الموظفين والمتعاملين من خلال AI Agents متكاملة مع الأنظمة والوثائق المؤسسية.",
                en: "We build AI solutions that help government entities and enterprises automate tasks, improve access to information, analyze data, and support employees and customers through AI Agents integrated with enterprise systems and documents.",
              },
              "erp-business-applications": {
                ar: "نساعد المؤسسات على توحيد عملياتها وبياناتها من خلال أنظمة ERP وتطبيقات أعمال تغطي المالية، الموارد البشرية، المشتريات، المخزون، المبيعات، الأصول والمشاريع، مع إمكانات التخصيص والتكامل مع الأنظمة القائمة.",
                en: "We help enterprises unify their processes and data through ERP and business applications covering finance, HR, procurement, inventory, sales, assets and projects — with customization and integration with existing systems.",
              },
              "software-development": {
                ar: "نصمم ونطور حلولاً برمجية مخصصة تشمل الأنظمة المؤسسية، بوابات الويب، تطبيقات الهاتف وسطح المكتب، وربط الأنظمة عبر واجهات API؛ بما يتوافق مع إجراءات المؤسسة ومتطلباتها التشغيلية.",
                en: "We design and build custom software — enterprise systems, web portals, mobile and desktop applications, and API-based system integration — aligned with your organization's processes and operational requirements.",
              },
              "cloud-infrastructure": {
                ar: "نخطط وننفذ بيئات تقنية مرنة تشمل الخوادم، التخزين، الأنظمة السحابية، النسخ الاحتياطي، تجهيز مواقع العمل، التراخيص، واستمرارية الأعمال، بما يدعم توسع المؤسسة واستقرار عملياتها.",
                en: "We plan and implement flexible technology environments including servers, storage, cloud systems, backup, workplace setup, licensing and business continuity — supporting growth and operational stability.",
              },
              "network-connectivity": {
                ar: "نقدم خدمات تصميم وتنفيذ وإدارة الشبكات المؤسسية، وربط الفروع والمواقع، والألياف الضوئية، والشبكات اللاسلكية، والكابلات الهيكلية، و VoIP وحلول الاتصال متعددة الموردين.",
                en: "We deliver enterprise network design, implementation and management, multi-site linking, fiber optics, wireless, structured cabling, VoIP and multi-vendor connectivity solutions.",
              },
              "surveillance-access-control": {
                ar: "نوفر حلول المراقبة المرئية، أنظمة تسجيل الحضور والانصراف، البصمة والتعرف على الوجه، البطاقات و RFID، والتحكم بالدخول، مع خدمات التركيب والتكامل والتشغيل والصيانة.",
                en: "We provide video surveillance, attendance systems, biometrics and face recognition, RFID and access control — with installation, integration, operation and maintenance services.",
              },
            };
            const desc = descriptions[s.slug] ?? { ar: l(s.short), en: l(s.short) };

            const ctaLabels: Record<string, { ar: string; en: string }> = {
              "ai-agents": { ar: "استكشف حلول الذكاء الاصطناعي", en: "Explore AI solutions" },
              "erp-business-applications": { ar: "استكشف حلول ERP", en: "Explore ERP solutions" },
              "software-development": { ar: "استكشف خدمات تطوير البرمجيات", en: "Explore software development" },
              "cloud-infrastructure": { ar: "استكشف حلول السحابة والبنية التحتية", en: "Explore cloud & infrastructure" },
              "network-connectivity": { ar: "استكشف حلول الشبكات والاتصال", en: "Explore networks & connectivity" },
              "surveillance-access-control": { ar: "استكشف الأنظمة الذكية", en: "Explore smart systems" },
            };
            const cta = ctaLabels[s.slug] ?? { ar: "استكشف الخدمة", en: "Explore service" };

            return (
              <Card key={s.slug} className="flex flex-col p-4 md:p-5">
                {img && (
                  <img
                    src={img.src}
                    alt={lang === "ar" ? img.altAr : img.altEn}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-40 object-contain bg-slate-50 rounded-md mb-3 p-2"
                  />
                )}

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold leading-snug pt-1.5 text-[#0B3D2E]">
                    {lang === "ar" ? cardTitle.ar : cardTitle.en}
                  </h3>
                </div>

                <p className="mt-3 text-sm md:text-base text-[#4B5563] leading-relaxed">
                  {lang === "ar" ? desc.ar : desc.en}
                </p>

                {bullets && (
                  <ul className="mt-3 space-y-1 text-sm md:text-base text-[#4B5563]">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
                >
                  {lang === "ar" ? cta.ar : cta.en}{" "}
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          5. WHY ARABTEC
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3D2E]">
            {lang === "ar"
              ? "لماذا تختار أربتك شريكاً تقنياً؟"
              : "Why choose ARABTEC as a technology partner?"}
          </h2>
        </div>

        {/* الصف الأول: 4 كروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            {
              icon: BadgeCheck,
              titleAr: "خبرة ممتدة",
              titleEn: "Extended experience",
              descAr: "خبرة تقنية منذ 1996.",
              descEn: "Technology expertise since 1996.",
            },
            {
              icon: Layers,
              titleAr: "حلول متكاملة",
              titleEn: "Integrated solutions",
              descAr: "من التخطيط والتطوير إلى التنفيذ والدعم.",
              descEn: "From planning and development to execution and support.",
            },
            {
              icon: Target,
              titleAr: "حلول تناسب أعمالك",
              titleEn: "Solutions that fit your business",
              descAr: "نصمم التقنية وفق احتياجات مؤسستك.",
              descEn: "We design technology to fit your organization's needs.",
            },
            {
              icon: ShieldCheck,
              titleAr: "مسؤولية واضحة",
              titleEn: "Clear accountability",
              descAr: "جهة واحدة تدير مشروعك وتتابع تنفيذه.",
              descEn: "One entity manages and follows up on your project.",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="rounded-[12px] border border-[#E5E7EB] bg-white p-4 flex flex-col items-center text-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
              >
                <div className="mb-3">
                  <Icon className="h-7 w-7 text-[#0B3D2E]" strokeWidth={1.5} />
                </div>

                <h3 className="font-bold text-base text-[#0B3D2E] mb-1">
                  {lang === "ar" ? c.titleAr : c.titleEn}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {lang === "ar" ? c.descAr : c.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* الصف التاني: الشريط الأخضر (الأرقام) */}
        <div className="mt-4 md:mt-6 max-w-6xl mx-auto rounded-[16px] bg-[#0B3D2E] text-white py-4 md:py-5 px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 divide-x divide-white/20 rtl:divide-x-reverse">
            {[
              { num: "30+", titleAr: "عاماً من الخبرة", titleEn: "Years of experience" },
              { num: "16,000+", titleAr: "عميل يثق بنا", titleEn: "Clients trust us" },
              { num: "17+", titleAr: "قطاعاً نخدمه", titleEn: "Sectors we serve" },
              { num: "800+", titleAr: "مشروع ناجح", titleEn: "Successful projects" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center text-center px-2 ${
                  i >= 2 ? "lg:border-none" : ""
                }`}
              >
                <div className="text-xl md:text-2xl font-extrabold tracking-tight mb-1">
                  {stat.num}
                </div>
                <div className="text-sm text-white/90">
                  {lang === "ar" ? stat.titleAr : stat.titleEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          6. INDUSTRIES — القطاعات التي نخدمها
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <div className="mb-6 text-start">
          <div className="text-sm font-bold text-[color:var(--gold)] mb-1">
            {lang === "ar" ? "القطاعات التي نخدمها" : "Industries we serve"}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3D2E]">
            {lang === "ar" ? "حلول تقنية مصممة لقطاعك" : "Technology solutions designed for your sector"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: Landmark,
              titleAr: "الجهات الحكومية",
              titleEn: "Government Entities",
              descAr: "خدمات رقمية وأتمتة للإجراءات",
              descEn: "Digital services and process automation",
            },
            {
              icon: Fuel,
              titleAr: "النفط والغاز",
              titleEn: "Oil & Gas",
              descAr: "بنية تقنية موثوقة وربط للمواقع",
              descEn: "Reliable infrastructure and site connectivity",
            },
            {
              icon: GraduationCap,
              titleAr: "التعليم",
              titleEn: "Education",
              descAr: "أنظمة تعليمية ومنصات متصلة",
              descEn: "Educational systems and connected platforms",
            },
            {
              icon: HeartPulse,
              titleAr: "الرعاية الصحية",
              titleEn: "Healthcare",
              descAr: "حلول رقمية تدعم الرعاية الصحية",
              descEn: "Digital solutions supporting healthcare",
            },
            {
              icon: Banknote,
              titleAr: "البنوك والخدمات المالية",
              titleEn: "Banking & Finance",
              descAr: "تكامل آمن وأتمتة للعمليات",
              descEn: "Secure integration and process automation",
            },
            {
              icon: Building2,
              titleAr: "الشركات والمؤسسات",
              titleEn: "Enterprises",
              descAr: "أنظمة أعمال تدعم الكفاءة والنمو",
              descEn: "Business systems supporting efficiency and growth",
            },
          ].map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="rounded-xl border border-[#E5E7EB] bg-white p-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-[#0B3D2E]/30 transition-all duration-300"
              >
                <div className="shrink-0 text-[#0B3D2E]">
                  <Icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.2} />
                </div>

                <div className="text-start">
                  <h3 className="text-base font-bold text-[#0B3D2E] mb-1">
                    {lang === "ar" ? ind.titleAr : ind.titleEn}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {lang === "ar" ? ind.descAr : ind.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-start">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3D2E] hover:text-[color:var(--gold)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {lang === "ar" ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
          </Link>
        </div>
      </Section>

      {/* ============================================================
          8. PARTNERS & CLIENTS
          ============================================================ */}
      <Section className="!py-0 md:!py-0">
        <Partners3DSlider />
      </Section>
      {/* ============================================================
          9. CTA
          ============================================================ */}
      <section className="section-dark bg-primary text-primary-foreground">
        <div className="container-page py-10 md:py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {lang === "ar"
              ? "هل تخطط لمشروع تقني أو تحول مؤسسي جديد؟"
              : "Planning a new technology project or transformation?"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            {lang === "ar"
              ? "تحدثوا مع فريق أربتك لمناقشة احتياجات مؤسستكم وتحديد الحلول التقنية المناسبة، سواء كنتم تبحثون عن نظام ERP، حل ذكاء اصطناعي، تطوير برمجيات، بنية تحتية، شبكات أو أنظمة مراقبة وتحكم بالدخول."
              : "Talk to the ARABTEC team about your needs and the right solutions — whether you're exploring ERP, AI, software development, infrastructure, networks, or surveillance and access control."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {/* الزر الأول — أبيض */}
            <Link
              to="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0B3D2E] hover:bg-gray-100 transition"
            >
              {lang === "ar" ? "اطلب استشارة تقنية" : "Request a consultation"}
            </Link>

            {/* الزر الثاني — أخضر */}
            <Link
              to="/contact"
              className="rounded-md bg-[#0B3D2E] border border-[#0B3D2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0B3D2E]/90 transition"
            >
              {lang === "ar" ? "تواصل مع فريقنا" : "Contact our team"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          10. FAQ
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={
            lang === "ar"
              ? "أسئلة شائعة عن حلول أربتك التقنية"
              : "Frequently asked questions about ARABTEC solutions"
          }
        />
        <div className="mt-6">
          <FAQ
            items={[
              {
                q: {
                  ar: "ما الخدمات التقنية التي تقدمها أربتك؟",
                  en: "What technology services does ARABTEC provide?",
                },
                a: {
                  ar: "تقدم أربتك حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، الحلول السحابية والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
                  en: "ARABTEC provides AI & AI Agents solutions, ERP and business applications, software development and system integration, cloud and infrastructure, networks and connectivity, and surveillance, attendance and access control.",
                },
              },
              {
                q: {
                  ar: "هل تقدم أربتك حلولاً مخصصة للجهات الحكومية؟",
                  en: "Does ARABTEC offer tailored solutions for government entities?",
                },
                a: {
                  ar: "نعم، يمكن تصميم الحلول وفق إجراءات الجهة الحكومية ومتطلبات المستخدمين والربط مع الأنظمة والبيانات القائمة، بعد دراسة النطاق والمتطلبات الفنية والتنظيمية للمشروع.",
                  en: "Yes — solutions can be designed around government procedures, user requirements and integration with existing systems and data, after studying the project's scope, technical and regulatory requirements.",
                },
              },
              {
                q: {
                  ar: "هل تطور أربتك أنظمة وبرمجيات مخصصة؟",
                  en: "Does ARABTEC build custom systems and software?",
                },
                a: {
                  ar: "نعم، تشمل خدمات تطوير البرمجيات الأنظمة المؤسسية، تطبيقات الويب والهاتف وسطح المكتب، البوابات الرقمية وتكامل الأنظمة وواجهات API.",
                  en: "Yes — software development covers enterprise systems, web, mobile and desktop applications, digital portals, system integration and APIs.",
                },
              },
              {
                q: {
                  ar: "هل يمكن ربط حلول الذكاء الاصطناعي بأنظمة المؤسسة؟",
                  en: "Can AI solutions be integrated with enterprise systems?",
                },
                a: {
                  ar: "يمكن تصميم AI Agents وربطها بالوثائق وقواعد المعرفة والأنظمة المؤسسية المصرح بها، وفق نطاق المشروع وضوابط البيانات والصلاحيات.",
                  en: "AI Agents can be designed and connected to authorized documents, knowledge bases and enterprise systems — according to project scope, data controls and access policies.",
                },
              },
              {
                q: {
                  ar: "هل تقدم أربتك أنظمة ERP قابلة للتخصيص؟",
                  en: "Does ARABTEC offer customizable ERP systems?",
                },
                a: {
                  ar: "تقدم أربتك حلول ERP وتطبيقات أعمال يمكن مواءمتها مع عمليات المؤسسة وربطها بالمالية والموارد البشرية والمشتريات والمخزون وغيرها، وفق احتياجات المشروع.",
                  en: "ARABTEC offers ERP and business applications that can be aligned with your operations and integrated with finance, HR, procurement, inventory and more — based on project needs.",
                },
              },
              {
                q: {
                  ar: "هل تقدم أربتك خدمات التنفيذ والدعم؟",
                  en: "Does ARABTEC provide implementation and support services?",
                },
                a: {
                  ar: "تغطي خدمات أربتك، بحسب نطاق العقد، مراحل الدراسة والتصميم والتطوير أو التوريد والتنفيذ والتكامل والتدريب والدعم التشغيلي.",
                  en: "Depending on the contract scope, ARABTEC services cover study, design, development or supply, delivery, integration, training and operational support.",
                },
              },
            ]}
          />
        </div>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ما الخدمات التقنية التي تقدمها أربتك؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، السحابة والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
                },
              },
              {
                "@type": "Question",
                name: "هل تقدم أربتك حلولاً مخصصة للجهات الحكومية؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، تصمم الحلول وفق إجراءات الجهة الحكومية ومتطلبات المستخدمين والربط مع الأنظمة والبيانات القائمة.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن ربط حلول الذكاء الاصطناعي بأنظمة المؤسسة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "يمكن تصميم AI Agents وربطها بالوثائق وقواعد المعرفة والأنظمة المؤسسية المصرح بها وفق نطاق المشروع وضوابط البيانات والصلاحيات.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}