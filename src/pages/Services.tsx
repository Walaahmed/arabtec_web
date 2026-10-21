// import { Link } from "@/lib/router";
// import {
//   Section,
//   SectionHead,
//   Card,
//   CTAButton,
//   JsonLd,
//   useL,
//   Breadcrumbs,
//   FAQ,
// } from "@/components/ui-blocks";
// import { SERVICES } from "@/lib/services-data";
// import { useI18n } from "@/lib/i18n";
// import {
//   ArrowLeft,
//   Cpu,
//   Database,
//   Code2,
//   Cloud,
//   Network,
//   ShieldCheck,
//   BadgeCheck,
//   Users,
//   Sliders,
//   Sparkles,
//   Headphones,
//   Landmark,
//   Fuel,
//   GraduationCap,
//   HeartPulse,
//   Banknote,
//   Building2,
//   LayersIcon,
// } from "lucide-react";

// // الصور
// import heroImg from "@/assets/arabtec-integrated-technology-services.jpg";
// import aiImg from "@/assets/service-ai-agents.jpg";
// import erpImg from "@/assets/service-erp.jpg";
// import softwareImg from "@/assets/service-software-development.jpg";
// import cloudImg from "@/assets/service-cloud-infrastructure.jpg";
// import networkImg from "@/assets/service-network-connectivity.jpg";
// import surveillanceImg from "@/assets/service-surveillance.jpg";
// import industriesImg from "@/assets/technology-services-for-industries.jpg";

// const icons = [Cpu, Database, Code2, Cloud, Network, ShieldCheck];

// export default function ServicesIndex() {
//   const { lang, t } = useI18n();
//   const l = useL();
//   const isAr = lang === "ar";

//   return (
//     <>
//       <JsonLd
//         data={{
//           "@context": "https://schema.org",
//           "@type": "ItemList",
//           itemListElement: SERVICES.map((s, i) => ({
//             "@type": "ListItem",
//             position: i + 1,
//             item: {
//               "@type": "Service",
//               name: s.title.ar,
//               description: s.short.ar,
//               url: s.path,
//             },
//           })),
//         }}
//       />

//       {/* ============================================================
//           1. HERO — صورة كبيرة يسار، نص يمين
//           ============================================================ */}
//       <Section>
//         <Breadcrumbs
//           items={[
//             { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
//             { label: { ar: "الخدمات", en: "Services" } },
//           ]}
//         />

//         <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
//           {/* الصورة — يسار */}
//           <div className="order-2 lg:order-1">
//             <img
//               src={heroImg}
//               alt={
//                 isAr
//                   ? "خدمات تقنية متكاملة تقدمها أربتك للمؤسسات والجهات الحكومية"
//                   : "Integrated technology services provided by ARABTEC for enterprises and government entities"
//               }
//               width={1600}
//               height={1067}
//               fetchPriority="high"
//               decoding="async"
//               className="rounded-lg shadow-lg w-full h-auto object-cover"
//             />
//           </div>

//           {/* النص — يمين */}
//           <div className="order-1 lg:order-2">
//             <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
//               {isAr ? "خدماتنا" : "Our services"}
//             </div>
//             <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
//               {isAr
//                 ? "خدمات تقنية متكاملة للمؤسسات والجهات الحكومية"
//                 : "Integrated technology services for enterprises and government entities"}
//             </h1>
//             <p className="mt-5 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تقدم أربتك مجموعة متكاملة من الخدمات والحلول التقنية المصممة لمساعدة المؤسسات والجهات الحكومية على تطوير أنظمتها، أتمتة عملياتها، تحسين الاتصال بين إداراتها ومواقعها، والاستفادة من البيانات والتقنيات الحديثة في رفع الكفاءة التشغيلية وتحسين جودة الخدمات."
//                 : "ARABTEC provides an integrated portfolio of technology services and solutions designed to help enterprises and government entities modernize systems, automate operations, improve connectivity across departments and sites, and leverage data and modern technologies to raise operational efficiency and improve service quality."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "نجمع بين الخبرة الممتدة في البنية التحتية والشبكات وأنظمة المراقبة والحضور، وبين الإمكانات الحديثة في الذكاء الاصطناعي، وكلاء الأعمال الذكيين، أنظمة ERP، تطوير البرمجيات، تكامل الأنظمة والحلول السحابية."
//                 : "We combine deep expertise in infrastructure, networks, surveillance and attendance systems with modern capabilities in AI, intelligent business agents, ERP, software development, system integration and cloud solutions."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "نعمل مع العميل منذ مرحلة تحليل الاحتياج وتصميم الحل، مرورًا بالتطوير والتوريد والتنفيذ والتكامل، وصولاً إلى التدريب والدعم والتشغيل وفق نطاق المشروع."
//                 : "We work with clients from requirements analysis and solution design, through development, supply, delivery and integration, to training, support and operations — according to project scope."}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <CTAButton to="/contact">
//                 {isAr ? "اطلب استشارة تقنية" : "Request a consultation"}
//               </CTAButton>
//               <CTAButton to="/contact" variant="outline">
//                 {isAr ? "ناقش احتياجات مؤسستك" : "Discuss your organization's needs"}
//               </CTAButton>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ============================================================
//           2. مقدمة الخدمات
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <SectionHead
//           title={isAr
//             ? "منظومة واحدة تغطي احتياجات المؤسسة التقنية"
//             : "One ecosystem covering your enterprise technology needs"}
//         />

//         <div className="grid gap-10 lg:grid-cols-2 items-start">
//           <div>
//             <p className="text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "لا تعمل الأنظمة المؤسسية بمعزل عن بعضها. فالبرمجيات تحتاج إلى بنية تحتية مستقرة، والذكاء الاصطناعي يحتاج إلى بيانات وأنظمة متكاملة، وأنظمة ERP تحتاج إلى تطوير وربط واتصال آمن بين الإدارات والفروع."
//                 : "Enterprise systems do not operate in isolation. Software needs stable infrastructure, AI needs integrated data and systems, and ERP needs development, integration and secure connectivity across departments and branches."}
//             </p>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "لهذا تقدم أربتك خدماتها باعتبارها منظومة مترابطة، مع إمكانية تنفيذ خدمة محددة أو تصميم حل متكامل يجمع بين أكثر من مجال وفق أهداف المؤسسة وبيئتها التقنية."
//                 : "ARABTEC therefore delivers its services as a connected ecosystem — supporting either a specific service or a fully integrated solution across multiple domains, according to the organization's goals and technology environment."}
//             </p>

//             <h3 className="mt-6 font-bold">
//               {isAr ? "تشمل خدماتنا ستة مجالات رئيسية:" : "Our services cover six main areas:"}
//             </h3>

//             <ul className="mt-4 space-y-2">
//               {(isAr
//                 ? [
//                     "حلول الذكاء الاصطناعي و AI Agents",
//                     "أنظمة ERP وتطبيقات الأعمال",
//                     "تطوير البرمجيات وتكامل الأنظمة",
//                     "السحابة والبنية التحتية",
//                     "الشبكات والاتصال",
//                     "أنظمة المراقبة والحضور والتحكم بالدخول",
//                   ]
//                 : [
//                     "AI Solutions & AI Agents",
//                     "ERP & Business Applications",
//                     "Software Development & System Integration",
//                     "Cloud & Infrastructure",
//                     "Networks & Connectivity",
//                     "Surveillance, Attendance & Access Control",
//                   ]
//               ).map((item, i) => {
//                 const Icon = icons[i];
//                 return (
//                   <li key={i} className="flex items-start gap-3">
//                     <div className="h-9 w-9 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
//                       <Icon className="h-4 w-4" />
//                     </div>
//                     <span className="pt-1.5 text-sm font-medium">{item}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* رسم دائري / مخطط مترابط */}
//           {/* <div className="rounded-2xl border border-border bg-card p-8 text-center">
//             <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
//               {isAr ? "منظومة أربتك" : "ARABTEC ecosystem"}
//             </div>
//             <div className="mt-2 text-2xl md:text-3xl font-extrabold text-[color:var(--brand-deep)] leading-snug">
//               {isAr
//                 ? "منظومة أربتك للحلول التقنية المتكاملة"
//                 : "ARABTEC Integrated Technology Solutions Ecosystem"}
//             </div>
//             <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
//               {icons.map((Icon, i) => (
//                 <div
//                   key={i}
//                   className="aspect-square rounded-xl border border-border bg-background grid place-items-center"
//                 >
//                   <Icon className="h-8 w-8 text-[color:var(--brand-deep)]" />
//                 </div>
//               ))}
//             </div>
//           </div> */}
//         </div>
//       </Section>

//       {/* ============================================================
//           الخدمة 1: AI
//           ============================================================ */}
//       <Section>
//         <div className="grid gap-10 lg:grid-cols-2 items-stretch">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               {isAr
//                 ? "حلول الذكاء الاصطناعي و AI Agents للمؤسسات"
//                 : "AI Solutions & AI Agents for enterprises"}
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "نساعد الجهات الحكومية والمؤسسات على الاستفادة العملية من الذكاء الاصطناعي من خلال تطوير حلول ذكية ووكلاء أعمال قادرين على الوصول إلى المعلومات المصرح بها، تنفيذ المهام، دعم الموظفين والمتعاملين، وتحسين سرعة ودقة العمليات."
//                 : "We help government entities and enterprises put AI to practical use through intelligent solutions and business agents that access authorized information, execute tasks, support employees and customers, and improve speed and accuracy of operations."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تصمم حلول AI Agents وفق احتياجات المؤسسة، ويمكن ربطها بالأنظمة الداخلية، قواعد البيانات، الوثائق، بوابات الخدمات، أنظمة ERP ومنصات إدارة علاقات العملاء."
//                 : "AI Agents are designed around each organization's needs and can be integrated with internal systems, databases, documents, service portals, ERP and CRM platforms."}
//             </p>

//             <h3 className="mt-8 text-xl font-bold">
//               {isAr ? "تشمل الخدمة" : "The service includes"}
//             </h3>
//             <div className="mt-4 space-y-4">
//               {(isAr
//                 ? [
//                     { t: "وكلاء ذكاء اصطناعي لخدمة المتعاملين", d: "مساعدون ذكيون للرد على الاستفسارات، توجيه المستخدمين، متابعة الطلبات وتقديم المعلومات من المصادر المعتمدة." },
//                     { t: "مساعدون ذكيون للموظفين", d: "حلول تساعد الموظفين على الوصول إلى السياسات والإجراءات والوثائق والنماذج والمعلومات المؤسسية بسرعة." },
//                     { t: "البحث الذكي في الوثائق", d: "البحث داخل العقود والسياسات والتقارير والأدلة والوثائق المؤسسية باستخدام اللغة الطبيعية." },
//                     { t: "أتمتة الإجراءات والمهام", d: "أتمتة معالجة الطلبات، إعداد الملخصات، تصنيف المستندات، استخراج البيانات وتوجيه الإجراءات." },
//                     { t: "تحليل البيانات ودعم القرار", d: "تحويل البيانات التشغيلية إلى تحليلات وتقارير ومؤشرات تساعد القيادات وصناع القرار." },
//                     { t: "تكامل الذكاء الاصطناعي مع الأنظمة", d: "ربط حلول الذكاء الاصطناعي بأنظمة ERP و CRM والبوابات وقواعد البيانات وواجهات API." },
//                   ]
//                 : [
//                     { t: "AI agents for customer service", d: "Intelligent assistants that answer questions, guide users, follow up on requests and surface information from approved sources." },
//                     { t: "AI copilots for employees", d: "Solutions that help employees quickly access policies, procedures, documents, forms and enterprise information." },
//                     { t: "Intelligent document search", d: "Natural-language search across contracts, policies, reports, manuals and enterprise documents." },
//                     { t: "Process & task automation", d: "Automating request handling, summarization, document classification, data extraction and workflow routing." },
//                     { t: "Data analytics & decision support", d: "Turning operational data into analytics, reports and KPIs that support leadership and decision-making." },
//                     { t: "AI integration with systems", d: "Integrating AI with ERP, CRM, portals, databases and APIs." },
//                   ]
//               ).map((item) => (
//                 <div key={item.t}>
//                   <h4 className="font-semibold text-base">{item.t}</h4>
//                   <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
//                 </div>
//               ))}
//             </div>

//             <h3 className="mt-8 text-xl font-bold">
//               {isAr ? "القطاعات المناسبة" : "Suitable sectors"}
//             </h3>
//             <div className="mt-3 flex flex-wrap gap-2">
//               {(isAr
//                 ? ["الجهات الحكومية", "البنوك والخدمات المالية", "الرعاية الصحية", "التعليم", "النفط والغاز", "الشركات والمؤسسات الكبرى"]
//                 : ["Government", "Banking & Finance", "Healthcare", "Education", "Oil & Gas", "Large enterprises"]
//               ).map((s) => (
//                 <span
//                   key={s}
//                   className="rounded-full border border-border bg-card px-3 py-1 text-xs"
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/services/$slug"
//                 params={{ slug: "ai-agents" }}
//                 className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
//               >
//                 {isAr ? "استكشف حلول الذكاء الاصطناعي و AI Agents" : "Explore AI & AI Agents"}
//                 <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//               </Link>
//             </div>
//           </div>

//           <img
//             src={aiImg}
//             alt={isAr
//               ? "حلول الذكاء الاصطناعي و AI Agents للمؤسسات والجهات الحكومية"
//               : "AI & AI Agents solutions for enterprises and government entities"}
//             width={1600}
//             height={1067}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-lg w-full h-full min-h-[400px] lg:min-h-[600px] object-cover"
//           />
//         </div>
//       </Section>

//       {/* ============================================================
//           الخدمة 2: ERP
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <div className="grid gap-10 lg:grid-cols-2 items-stretch">
//           <img
//             src={erpImg}
//             alt={isAr
//               ? "أنظمة ERP وتطبيقات الأعمال لإدارة عمليات المؤسسات"
//               : "ERP and business applications for enterprise operations"}
//             width={1600}
//             height={1067}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-lg w-full h-full min-h-[400px] lg:min-h-[600px] object-cover order-2 lg:order-1"
//           />

//           <div className="order-1 lg:order-2">
//             <h2 className="text-3xl md:text-4xl font-bold">
//               {isAr ? "أنظمة ERP وتطبيقات الأعمال المؤسسية" : "ERP & Enterprise Business Applications"}
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تساعد حلول ERP المؤسسات على توحيد بياناتها وعملياتها ضمن نظام مركزي يربط الإدارات المالية والتشغيلية والإدارية، ويوفر رؤية أوضح للأداء والموارد والتكاليف."
//                 : "ERP solutions help enterprises unify their data and operations in a central system connecting financial, operational and administrative departments, providing clearer visibility of performance, resources and costs."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تقدم أربتك خدمات تحليل المتطلبات، تخصيص النظام، تطوير الوحدات، ترحيل البيانات، تكامل الأنظمة، التدريب والدعم، وفق طبيعة المؤسسة وحجم عملياتها."
//                 : "ARABTEC provides requirements analysis, system customization, module development, data migration, system integration, training and support — according to the organization's nature and scale."}
//             </p>

//             <h3 className="mt-8 text-xl font-bold">
//               {isAr ? "تشمل الخدمة" : "The service includes"}
//             </h3>
//             <div className="mt-4 space-y-4">
//               {(isAr
//                 ? [
//                     { t: "الإدارة المالية والمحاسبة", d: "إدارة الحسابات العامة، المصروفات، الإيرادات، الميزانيات، القيود والتقارير المالية." },
//                     { t: "الموارد البشرية والرواتب", d: "إدارة بيانات الموظفين، الحضور، الإجازات، الرواتب، التقييمات والإجراءات الإدارية." },
//                     { t: "المشتريات والموردون", d: "إدارة طلبات الشراء، عروض الأسعار، أوامر الشراء، الموردين والموافقات." },
//                     { t: "المخزون والمستودعات", d: "متابعة المخزون، الأصناف، المستودعات، التحويلات، الاستلام والصرف." },
//                     { t: "المبيعات وإدارة العملاء", d: "إدارة عروض الأسعار والمبيعات والعقود والعملاء والفواتير." },
//                     { t: "إدارة الأصول والمشاريع", d: "متابعة الأصول، الصيانة، التكاليف، الموارد ومراحل تنفيذ المشاريع." },
//                     { t: "تخصيص النظام وتكامل التطبيقات", d: "تطوير وحدات ووظائف مخصصة وربط ERP بالأنظمة الخارجية والبوابات والخدمات الرقمية." },
//                     { t: "ترحيل البيانات والتدريب", d: "نقل البيانات من الأنظمة القديمة، اختبارها، تدريب المستخدمين ودعم الإطلاق." },
//                   ]
//                 : [
//                     { t: "Finance & accounting", d: "General ledger, expenses, revenues, budgets, journal entries and financial reporting." },
//                     { t: "HR & payroll", d: "Managing employee data, attendance, leave, payroll, evaluations and administrative procedures." },
//                     { t: "Procurement & vendors", d: "Managing purchase requests, quotations, purchase orders, vendors and approvals." },
//                     { t: "Inventory & warehouses", d: "Tracking stock, items, warehouses, transfers, receiving and issuing." },
//                     { t: "Sales & CRM", d: "Managing quotations, sales, contracts, customers and invoices." },
//                     { t: "Assets & projects", d: "Tracking assets, maintenance, costs, resources and project delivery phases." },
//                     { t: "Customization & integration", d: "Developing custom modules and functions and connecting ERP to external systems, portals and digital services." },
//                     { t: "Data migration & training", d: "Migrating data from legacy systems, testing, training users and supporting go-live." },
//                   ]
//               ).map((item) => (
//                 <div key={item.t}>
//                   <h4 className="font-semibold text-base">{item.t}</h4>
//                   <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/services/$slug"
//                 params={{ slug: "erp-business-applications" }}
//                 className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
//               >
//                 {isAr ? "استكشف أنظمة ERP وتطبيقات الأعمال" : "Explore ERP & business applications"}
//                 <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ============================================================
//           الخدمة 3: تطوير البرمجيات
//           ============================================================ */}
//       <Section>
//         <div className="grid gap-10 lg:grid-cols-2 items-stretch">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               {isAr ? "تطوير البرمجيات وتكامل الأنظمة" : "Software Development & System Integration"}
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "نطور حلولاً برمجية مخصصة تتوافق مع إجراءات المؤسسة ومتطلبات المستخدمين، وتساعد على تحويل العمليات اليدوية أو المتفرقة إلى أنظمة رقمية مترابطة وقابلة للتوسع."
//                 : "We build custom software aligned with the organization's processes and user requirements, helping turn manual or fragmented operations into connected, scalable digital systems."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تشمل خبرات أربتك تطبيقات الويب و Android و iOS وتطبيقات سطح المكتب والحلول البرمجية والذكاء الاصطناعي."
//                 : "ARABTEC's expertise covers web, Android, iOS and desktop applications, software solutions and AI."}
//             </p>

//             <h3 className="mt-8 text-xl font-bold">
//               {isAr ? "تشمل الخدمة" : "The service includes"}
//             </h3>
//             <div className="mt-4 space-y-4">
//               {(isAr
//                 ? [
//                     { t: "الأنظمة المؤسسية المخصصة", d: "تطوير أنظمة داخلية لإدارة العمليات والموافقات والطلبات والبيانات وفق آلية عمل المؤسسة." },
//                     { t: "بوابات الخدمات الإلكترونية", d: "تطوير بوابات للمتعاملين والموظفين والموردين والشركاء، مع خدمات التسجيل والمتابعة والإشعارات." },
//                     { t: "تطبيقات الويب", d: "تطوير تطبيقات ويب سريعة ومتجاوبة وقابلة للتكامل مع قواعد البيانات والأنظمة المؤسسية." },
//                     { t: "تطبيقات الهاتف", d: "تطوير تطبيقات Android و iOS لخدمة الموظفين أو العملاء أو العمليات الميدانية." },
//                     { t: "تطبيقات سطح المكتب", d: "تطوير تطبيقات مخصصة للعمليات التي تحتاج إلى بيئات مكتبية أو تشغيل محلي." },
//                     { t: "تكامل الأنظمة وواجهات API", d: "ربط الأنظمة الداخلية والخارجية وتبادل البيانات بينها من خلال واجهات تكامل منظمة." },
//                     { t: "تحديث الأنظمة القديمة", d: "إعادة تصميم وتطوير الأنظمة القديمة لتحسين الأداء، تجربة المستخدم، القابلية للتوسع وسهولة الصيانة." },
//                     { t: "الاختبارات والدعم", d: "إجراء الاختبارات الوظيفية والفنية، تدريب المستخدمين، دعم الإطلاق والتحسين المستمر." },
//                   ]
//                 : [
//                     { t: "Custom enterprise systems", d: "Building internal systems for managing operations, approvals, requests and data according to the organization's workflow." },
//                     { t: "Digital service portals", d: "Building portals for customers, employees, vendors and partners, with registration, tracking and notifications." },
//                     { t: "Web applications", d: "Building fast, responsive web applications that integrate with databases and enterprise systems." },
//                     { t: "Mobile applications", d: "Building Android and iOS apps for employees, customers or field operations." },
//                     { t: "Desktop applications", d: "Building custom applications for operations that require desktop or local environments." },
//                     { t: "System integration & APIs", d: "Connecting internal and external systems and exchanging data through well-defined integration interfaces." },
//                     { t: "Legacy system modernization", d: "Redesigning and rebuilding legacy systems to improve performance, UX, scalability and maintainability." },
//                     { t: "Testing & support", d: "Running functional and technical testing, training users, supporting go-live and continuous improvement." },
//                   ]
//               ).map((item) => (
//                 <div key={item.t}>
//                   <h4 className="font-semibold text-base">{item.t}</h4>
//                   <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/services/$slug"
//                 params={{ slug: "software-development" }}
//                 className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
//               >
//                 {isAr ? "استكشف تطوير البرمجيات وتكامل الأنظمة" : "Explore software development"}
//                 <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//               </Link>
//             </div>
//           </div>

//           <img
//             src={softwareImg}
//             alt={isAr
//               ? "تطوير البرمجيات وتكامل الأنظمة للمؤسسات"
//               : "Software development and system integration for enterprises"}
//             width={1600}
//             height={1067}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-lg w-full h-full min-h-[400px] lg:min-h-[600px] object-cover"
//           />
//         </div>
//       </Section>

//       {/* ============================================================
//           الخدمة 4: السحابة
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <div className="grid gap-10 lg:grid-cols-2 items-stretch">
//           <img
//             src={cloudImg}
//             alt={isAr
//               ? "حلول السحابة والبنية التحتية التقنية للمؤسسات"
//               : "Cloud and IT infrastructure solutions for enterprises"}
//             width={1600}
//             height={1067}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-lg w-full h-full min-h-[400px] lg:min-h-[600px] object-cover order-2 lg:order-1"
//           />

//           <div className="order-1 lg:order-2">
//             <h2 className="text-3xl md:text-4xl font-bold">
//               {isAr ? "السحابة والبنية التحتية التقنية" : "Cloud & IT Infrastructure"}
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "نساعد المؤسسات على بناء وتحديث بيئاتها التقنية من خلال حلول الخوادم والتخزين والحوسبة السحابية والنسخ الاحتياطي وتجهيز مواقع العمل، بما يدعم استقرار الأنظمة واستمرارية العمليات وقابلية التوسع."
//                 : "We help organizations build and modernize their technology environments through servers, storage, cloud, backup and workplace solutions — supporting system stability, business continuity and scalability."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تغطي خدمات أربتك مراحل التقييم والتصميم والتوريد والتركيب والإعداد والاختبار والتشغيل والدعم، وفق نطاق المشروع ومتطلبات المؤسسة."
//                 : "ARABTEC's services cover assessment, design, supply, installation, configuration, testing, operation and support — according to project scope and requirements."}
//             </p>

//             <h3 className="mt-8 text-xl font-bold">
//               {isAr ? "تشمل الخدمة" : "The service includes"}
//             </h3>
//             <div className="mt-4 space-y-4">
//               {(isAr
//                 ? [
//                     { t: "تقييم البنية التقنية", d: "مراجعة الخوادم والتخزين والأنظمة والاحتياجات التشغيلية وتحديد فرص التحديث." },
//                     { t: "الخوادم والتخزين", d: "توريد وتركيب وإعداد الخوادم وأنظمة التخزين وفق احتياجات التطبيقات والبيانات." },
//                     { t: "الحلول السحابية", d: "تصميم وتنفيذ بيئات سحابية أو هجينة تساعد المؤسسة على تشغيل التطبيقات والبيانات بمرونة." },
//                     { t: "النسخ الاحتياطي واستعادة البيانات", d: "إنشاء حلول لحفظ النسخ الاحتياطية واستعادة البيانات وفق متطلبات المؤسسة." },
//                     { t: "استمرارية الأعمال", d: "تصميم بيئات تساعد الأنظمة والخدمات الأساسية على الاستمرار أو التعافي عند حدوث أعطال." },
//                     { t: "تجهيز مواقع العمل", d: "تجهيز بيئات المستخدمين والأجهزة والتراخيص والاتصال والبنية التقنية للمكاتب والفروع." },
//                     { t: "أنظمة التشغيل والمنصات", d: "إعداد وإدارة بيئات Windows و Linux والمنصات والخدمات المرتبطة بها." },
//                     { t: "التشغيل والصيانة", d: "متابعة الأنظمة ومعالجة الأعطال وتنفيذ التحديثات والدعم الفني وفق الاتفاق." },
//                   ]
//                 : [
//                     { t: "Infrastructure assessment", d: "Reviewing servers, storage, systems and operational needs and identifying modernization opportunities." },
//                     { t: "Servers & storage", d: "Supply, installation and configuration of servers and storage systems to meet application and data needs." },
//                     { t: "Cloud solutions", d: "Designing and delivering cloud or hybrid environments that let the organization run applications and data flexibly." },
//                     { t: "Backup & disaster recovery", d: "Building backup and data recovery solutions per the organization's requirements." },
//                     { t: "Business continuity", d: "Designing environments that allow critical systems and services to continue or recover from failures." },
//                     { t: "Workplace setup", d: "Setting up user environments, devices, licensing, connectivity and IT infrastructure for offices and branches." },
//                     { t: "Operating systems & platforms", d: "Setting up and managing Windows and Linux environments and the platforms and services related to them." },
//                     { t: "Operations & maintenance", d: "Monitoring systems, handling incidents, applying updates and providing technical support per agreement." },
//                   ]
//               ).map((item) => (
//                 <div key={item.t}>
//                   <h4 className="font-semibold text-base">{item.t}</h4>
//                   <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/services/$slug"
//                 params={{ slug: "cloud-infrastructure" }}
//                 className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
//               >
//                 {isAr ? "استكشف حلول السحابة والبنية التحتية" : "Explore cloud & infrastructure"}
//                 <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ============================================================
//           الخدمة 5: الشبكات
//           ============================================================ */}
//       <Section>
//         <div className="grid gap-10 lg:grid-cols-2 items-stretch">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               {isAr ? "الشبكات والاتصال وربط المواقع" : "Networks, Connectivity & Multi-site Linking"}
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "نصمم وننفذ حلول الشبكات والاتصال التي تساعد المؤسسات على ربط المستخدمين والأنظمة والفروع والمواقع ضمن بيئة تقنية مستقرة وقابلة للإدارة والتوسع."
//                 : "We design and deliver network and connectivity solutions that help organizations connect users, systems, branches and sites within a stable, manageable and scalable environment."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تمتلك أربتك خبرة في الشبكات المؤسسية، LAN و WAN، الألياف الضوئية، الشبكات اللاسلكية، WiMax، VSAT، Point-to-Point، VoIP والكابلات الهيكلية."
//                 : "ARABTEC has expertise in enterprise networks, LAN & WAN, fiber optics, wireless networks, WiMax, VSAT, Point-to-Point, VoIP and structured cabling."}
//             </p>

//             <h3 className="mt-8 text-xl font-bold">
//               {isAr ? "تشمل الخدمة" : "The service includes"}
//             </h3>
//             <div className="mt-4 space-y-4">
//               {(isAr
//                 ? [
//                     { t: "تصميم الشبكات المؤسسية", d: "تحليل المتطلبات وإعداد تصميم الشبكة وفق عدد المستخدمين والمواقع والأنظمة." },
//                     { t: "شبكات LAN و WAN", d: "تنفيذ شبكات الاتصال الداخلية وربط الفروع والمواقع المؤسسية." },
//                     { t: "الألياف الضوئية", d: "توريد وتمديد ولحام واختبار كابلات الألياف الضوئية وملحقاتها." },
//                     { t: "الكابلات الهيكلية", d: "تنفيذ Structured Cabling وتمديد وإنهاء واختبار كابلات الشبكات." },
//                     { t: "الشبكات اللاسلكية", d: "تصميم وتنفيذ شبكات Wi-Fi وحلول الاتصال اللاسلكي للمكاتب والمواقع." },
//                     { t: "ربط المواقع والفروع", d: "حلول Point-to-Point و VSAT وتقنيات الاتصال المناسبة للمواقع المتعددة أو البعيدة." },
//                     { t: "حلول VoIP", d: "توفير أنظمة الاتصال الصوتي عبر الشبكات وربطها ببيئة المؤسسة." },
//                     { t: "تشغيل وصيانة الشبكات", d: "مراقبة الشبكة، تحسين الأداء، معالجة الأعطال وتنفيذ التحديثات." },
//                   ]
//                 : [
//                     { t: "Enterprise network design", d: "Analyzing requirements and preparing the network design based on users, sites and systems." },
//                     { t: "LAN & WAN networks", d: "Delivering internal connectivity networks and linking branches and enterprise sites." },
//                     { t: "Fiber optics", d: "Supply, laying, splicing and testing of fiber optic cables and accessories." },
//                     { t: "Structured cabling", d: "Delivering structured cabling, laying, terminating and testing network cables." },
//                     { t: "Wireless networks", d: "Designing and delivering Wi-Fi networks and wireless connectivity for offices and sites." },
//                     { t: "Multi-site linking", d: "Point-to-Point, VSAT and appropriate connectivity technologies for multiple or remote sites." },
//                     { t: "VoIP solutions", d: "Providing voice-over-network systems and connecting them to the enterprise environment." },
//                     { t: "Network operations & maintenance", d: "Monitoring the network, tuning performance, handling faults and applying updates." },
//                   ]
//               ).map((item) => (
//                 <div key={item.t}>
//                   <h4 className="font-semibold text-base">{item.t}</h4>
//                   <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/services/$slug"
//                 params={{ slug: "network-connectivity" }}
//                 className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
//               >
//                 {isAr ? "استكشف حلول الشبكات والاتصال" : "Explore networks & connectivity"}
//                 <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//               </Link>
//             </div>
//           </div>

//           <img
//             src={networkImg}
//             alt={isAr
//               ? "حلول الشبكات والاتصال وربط مواقع وفروع المؤسسات"
//               : "Networks and connectivity solutions linking enterprise sites and branches"}
//             width={1600}
//             height={1067}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-lg w-full h-full min-h-[400px] lg:min-h-[600px] object-cover"
//           />
//         </div>
//       </Section>

//       {/* ============================================================
//           الخدمة 6: المراقبة والحضور
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <div className="grid gap-10 lg:grid-cols-2 items-stretch">
//           <img
//             src={surveillanceImg}
//             alt={isAr
//               ? "أنظمة المراقبة والحضور والتحكم بالدخول للمؤسسات"
//               : "Surveillance, attendance and access control systems for enterprises"}
//             width={1600}
//             height={1067}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-lg w-full h-full min-h-[400px] lg:min-h-[600px] object-cover order-2 lg:order-1"
//           />

//           <div className="order-1 lg:order-2">
//             <h2 className="text-3xl md:text-4xl font-bold">
//               {isAr ? "أنظمة المراقبة والحضور والتحكم بالدخول" : "Surveillance, Attendance & Access Control"}
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تقدم أربتك حلولاً متكاملة لمراقبة المواقع وتنظيم دخول الأفراد وتسجيل الحضور والانصراف، بما يساعد المؤسسات على إدارة منشآتها وموظفيها ومواقعها بصورة أكثر كفاءة."
//                 : "ARABTEC provides integrated solutions for site surveillance, people access and attendance logging — helping organizations manage facilities, employees and sites more efficiently."}
//             </p>
//             <p className="mt-3 text-muted-foreground leading-relaxed">
//               {isAr
//                 ? "تشمل خبرة الشركة كاميرات المراقبة، أنظمة الحضور، البصمة، التعرف على الوجه وراحة اليد، أنظمة التحكم بالدخول و RFID."
//                 : "The company's expertise includes surveillance cameras, attendance systems, biometrics, face and palm recognition, access control and RFID."}
//             </p>

//             <h3 className="mt-8 text-xl font-bold">
//               {isAr ? "تشمل الخدمة" : "The service includes"}
//             </h3>
//             <div className="mt-4 space-y-4">
//               {(isAr
//                 ? [
//                     { t: "أنظمة كاميرات المراقبة", d: "توريد وتركيب وإعداد كاميرات المراقبة الداخلية والخارجية وفق طبيعة الموقع." },
//                     { t: "كاميرات IP", d: "حلول مراقبة تعتمد على الشبكات وتتيح الإدارة والتسجيل والمتابعة المركزية." },
//                     { t: "أنظمة التسجيل NVR و DVR", d: "توفير أنظمة تسجيل وحفظ وإدارة مقاطع المراقبة وفق متطلبات الموقع." },
//                     { t: "أنظمة الحضور والانصراف", d: "حلول لتسجيل حضور الموظفين وانصرافهم وربط البيانات بالإدارة والموارد البشرية." },
//                     { t: "البصمة والتعرف على الوجه", d: "تقنيات للتحقق من الهوية وتسجيل الحضور أو تنظيم الدخول." },
//                     { t: "RFID والبطاقات", d: "حلول البطاقات والتعريف الإلكتروني لإدارة الدخول والحضور والأصول حسب نطاق المشروع." },
//                     { t: "التحكم بالدخول", d: "أنظمة لإدارة صلاحيات دخول الأفراد إلى المباني والغرف والمناطق المحددة." },
//                     { t: "التكامل والتشغيل والصيانة", d: "ربط أنظمة الحضور والمراقبة بالأنظمة الإدارية وتقديم خدمات الإعداد والدعم والصيانة." },
//                   ]
//                 : [
//                     { t: "CCTV surveillance systems", d: "Supply, installation and configuration of indoor and outdoor surveillance cameras based on site needs." },
//                     { t: "IP cameras", d: "Network-based surveillance solutions supporting centralized management, recording and monitoring." },
//                     { t: "NVR & DVR recording systems", d: "Providing recording, storage and management of surveillance footage based on site requirements." },
//                     { t: "Attendance systems", d: "Solutions for logging employee attendance and integrating data with admin and HR systems." },
//                     { t: "Biometrics & face recognition", d: "Technologies for identity verification and attendance logging or access control." },
//                     { t: "RFID & cards", d: "Card and e-identification solutions for access, attendance and asset management per project scope." },
//                     { t: "Access control", d: "Systems for managing individual access rights to buildings, rooms and specific areas." },
//                     { t: "Integration, operations & maintenance", d: "Connecting attendance and surveillance systems to admin systems and providing setup, support and maintenance." },
//                   ]
//               ).map((item) => (
//                 <div key={item.t}>
//                   <h4 className="font-semibold text-base">{item.t}</h4>
//                   <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/services/$slug"
//                 params={{ slug: "surveillance-access-control" }}
//                 className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
//               >
//                 {isAr ? "استكشف أنظمة المراقبة والحضور والتحكم بالدخول" : "Explore surveillance & access control"}
//                 <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ============================================================
//           قسم الحلول المتكاملة
//           ============================================================ */}
//       <Section>
//         <SectionHead
//           title={isAr ? "أكثر من خدمة ضمن حل مؤسسي واحد" : "More than one service within a single enterprise solution"}
//           intro={
//             isAr
//               ? "يمكن تنفيذ خدمات أربتك بصورة مستقلة أو دمجها ضمن حل متكامل يخدم هدفًا مؤسسيًا محددًا."
//               : "ARABTEC services can be delivered independently or combined into an integrated solution that serves a specific business objective."
//           }
//         />

//         <div className="grid gap-6 md:grid-cols-2">
//           {(isAr
//             ? [
//                 {
//                   t: "منصة خدمات حكومية ذكية",
//                   items: ["بوابة إلكترونية", "Agent AI لخدمة المتعاملين", "تكامل مع الأنظمة وقواعد البيانات", "بنية سحابية أو داخلية", "لوحات متابعة وتقارير"],
//                 },
//                 {
//                   t: "نظام إدارة مؤسسي متكامل",
//                   items: ["نظام ERP", "تطبيقات مخصصة", "ربط الحضور والموارد البشرية", "تكامل مع الأنظمة المالية والتشغيلية", "تقارير ومؤشرات أداء"],
//                 },
//                 {
//                   t: "تجهيز فرع أو منشأة جديدة",
//                   items: ["بنية تحتية تقنية", "خوادم وأجهزة", "شبكات وكابلات", "اتصال وربط بالمركز الرئيسي", "حضور وتحكم بالدخول", "كاميرات مراقبة", "تشغيل ودعم"],
//                 },
//                 {
//                   t: "تحديث بيئة تقنية قائمة",
//                   items: ["تقييم الأنظمة والبنية الحالية", "تحديث الخوادم والشبكات", "تطوير أو تحديث البرمجيات", "تكامل الأنظمة", "نقل الخدمات إلى بيئة سحابية أو هجينة", "دعم التشغيل والتحسين"],
//                 },
//               ]
//             : [
//                 {
//                   t: "Smart government services platform",
//                   items: ["Digital portal", "AI Agent for customer service", "Integration with systems and databases", "Cloud or on-premise infrastructure", "Dashboards & reporting"],
//                 },
//                 {
//                   t: "Integrated enterprise management system",
//                   items: ["ERP system", "Custom applications", "Attendance & HR integration", "Integration with finance & operations", "Reports & KPIs"],
//                 },
//                 {
//                   t: "New branch or facility setup",
//                   items: ["IT infrastructure", "Servers & devices", "Networks & cabling", "Connectivity to HQ", "Attendance & access control", "Surveillance cameras", "Operations & support"],
//                 },
//                 {
//                   t: "Existing environment modernization",
//                   items: ["Assessment of current systems", "Server & network upgrades", "Software development or upgrade", "System integration", "Migration to cloud or hybrid", "Operations & improvement support"],
//                 },
//               ]
//           ).map((sol) => (
//             <Card key={sol.t}>
//               <h3 className="text-lg font-bold">{sol.t}</h3>
//               <ul className="mt-3 space-y-1.5">
//                 {sol.items.map((x) => (
//                   <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground">
//                     <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
//                     <span>{x}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Card>
//           ))}
//         </div>
//       </Section>

//       {/* ============================================================
//           قسم القطاعات
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <SectionHead
//           title={isAr
//             ? "حلول تقنية مصممة لقطاعك "
//             : "Technology solutions designed for your sector"}
//           intro={
//             isAr
//               ? "نقدم حلولاً وخدمات تقنية قابلة للتخصيص وفق طبيعة كل قطاع، حجم عملياته، متطلبات الاتصال والتكامل، حساسية البيانات، عدد المواقع والمستخدمين وأهداف المؤسسة."
//               : "We deliver customizable technology solutions according to each sector's nature, operation scale, connectivity and integration requirements, data sensitivity, number of sites and users, and the organization's goals."
//           }
//         />

//         <div className="grid gap-10 lg:grid-cols-2 items-start mt-6">
//           <div className="space-y-3">
//             {[
//               {
//                 icon: Landmark,
//                 ar: "الجهات الحكومية",
//                 en: "Government",
//                 descAr: "الذكاء الاصطناعي، بوابات الخدمات، أتمتة الإجراءات، تكامل الأنظمة، البنية التحتية وربط المواقع.",
//                 descEn: "AI, service portals, process automation, system integration, infrastructure and site linking.",
//               },
//               {
//                 icon: Fuel,
//                 ar: "النفط والغاز",
//                 en: "Oil & Gas",
//                 descAr: "الشبكات، الاتصال بين المواقع، البنية التحتية، أنظمة الأعمال والمراقبة والتحكم بالدخول.",
//                 descEn: "Networks, site-to-site connectivity, infrastructure, business systems, surveillance and access control.",
//               },
//               {
//                 icon: GraduationCap,
//                 ar: "التعليم",
//                 en: "Education",
//                 descAr: "الشبكات، البنية التقنية، الأنظمة الإدارية، الحضور، البوابات والمنصات الرقمية.",
//                 descEn: "Networks, IT infrastructure, admin systems, attendance, portals and digital platforms.",
//               },
//               {
//                 icon: HeartPulse,
//                 ar: "الرعاية الصحية",
//                 en: "Healthcare",
//                 descAr: "البرمجيات المؤسسية، البنية التحتية، الشبكات، التكامل وتطبيقات إدارة العمليات.",
//                 descEn: "Enterprise software, infrastructure, networks, integration and operations management apps.",
//               },
//               {
//                 icon: Banknote,
//                 ar: "البنوك والخدمات المالية",
//                 en: "Banking & Finance",
//                 descAr: "الأنظمة المؤسسية، تكامل التطبيقات، الذكاء الاصطناعي، أتمتة العمليات واستمرارية الأعمال.",
//                 descEn: "Enterprise systems, application integration, AI, process automation and business continuity.",
//               },
//               {
//                 icon: Building2,
//                 ar: "الشركات والمؤسسات",
//                 en: "Corporates & Enterprises",
//                 descAr: "ERP، تطوير البرمجيات، السحابة، الشبكات، الحضور وأنظمة الإدارة والتشغيل.",
//                 descEn: "ERP, software development, cloud, networks, attendance and management & operations systems.",
//               },
//             ].map((row) => {
//               const Icon = row.icon;
//               return (
//                 <div
//                   key={row.en}
//                   className="rounded-lg border border-border bg-card p-4 flex items-start gap-3"
//                 >
//                   <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
//                     <Icon className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <div className="font-semibold">{isAr ? row.ar : row.en}</div>
//                     <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
//                       {isAr ? row.descAr : row.descEn}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <img
//             src={industriesImg}
//             alt={isAr
//               ? "خدمات تقنية للقطاعات الحكومية والصناعية والتعليمية والصحية والمالية"
//               : "Technology services for government, industrial, education, healthcare and financial sectors"}
//             width={1600}
//             height={1067}
//             loading="lazy"
//             decoding="async"
//             className="rounded-lg shadow-lg w-full h-auto object-cover"
//           />
//         </div>

//         <div className="mt-8">
//           <CTAButton to="/industries" variant="outline">
//             {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
//           </CTAButton>
//         </div>
//       </Section>

//       {/* ============================================================
//           منهجية تقديم الخدمة — 7 مراحل
//           ============================================================ */}
//       <Section>
//         <SectionHead
//           title={isAr
//             ? "منهجية منظمة من التحليل إلى التشغيل"
//             : "A structured methodology from analysis to operations"}
//         />

//         <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {(isAr
//             ? [
//                 { t: "دراسة الاحتياج", d: "فهم أهداف المؤسسة وتحدياتها والعمليات والمستخدمين والأنظمة والبنية الحالية." },
//                 { t: "تحديد نطاق العمل", d: "تحديد المخرجات والمتطلبات والمسؤوليات والمراحل والجداول الزمنية." },
//                 { t: "تصميم الحل", d: "إعداد التصميم الفني وخطة التكامل والتنفيذ والاختبار." },
//                 { t: "التطوير أو التوريد", d: "تطوير البرمجيات أو تجهيز الأنظمة والمعدات والخدمات المطلوبة." },
//                 { t: "التنفيذ والتكامل", d: "تركيب وتشغيل الحل وربطه بالأنظمة والبيانات والبيئة الحالية." },
//                 { t: "الاختبار والتدريب", d: "اختبار الوظائف والأداء وتدريب المستخدمين والفرق الفنية." },
//                 { t: "الإطلاق والدعم", d: "تشغيل الحل ومتابعة الأداء وتقديم الدعم والتحسين وفق الاتفاق." },
//               ]
//             : [
//                 { t: "Requirements study", d: "Understand the organization's goals, challenges, operations, users, systems and current architecture." },
//                 { t: "Scope definition", d: "Define deliverables, requirements, responsibilities, phases and timelines." },
//                 { t: "Solution design", d: "Prepare the technical design and the integration, delivery and testing plan." },
//                 { t: "Development or supply", d: "Develop software or prepare the required systems, equipment and services." },
//                 { t: "Delivery & integration", d: "Install, operate and integrate the solution with existing systems, data and environment." },
//                 { t: "Testing & training", d: "Test functionality and performance and train users and technical teams." },
//                 { t: "Go-live & support", d: "Launch, monitor performance, and provide support and improvement per agreement." },
//               ]
//           ).map((step, i) => (
//             <li key={i} className="relative rounded-xl border border-border bg-card p-5">
//               <div className="text-3xl font-extrabold text-[color:var(--gold)]">
//                 0{i + 1}
//               </div>
//               <div className="mt-1 font-semibold">{step.t}</div>
//               <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
//                 {step.d}
//               </p>
//             </li>
//           ))}
//         </ol>
//       </Section>

//       {/* ============================================================
//           لماذا أربتك؟
//           ============================================================ */}
//       <Section className="bg-secondary">
//         <SectionHead
//           title={isAr
//             ? "لماذا تختار المؤسسات خدمات أربتك؟"
//             : "Why organizations choose ARABTEC services"}
//         />

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               icon: BadgeCheck,
//               h: { ar: "خبرة تقنية ممتدة", en: "Extensive technology expertise" },
//               d: {
//                 ar: "خبرة منذ عام 1996 في الشبكات والاتصال والبنية التحتية والأنظمة والبرمجيات والحلول المتكاملة.",
//                 en: "Expertise since 1996 in networks, connectivity, infrastructure, systems, software and integrated solutions.",
//               },
//             },
//             {
//               icon: Users,
//               h: { ar: "نقطة مسؤولية موحدة", en: "Single point of accountability" },
//               d: {
//                 ar: "إدارة مراحل متعددة من المشروع من خلال فريق وجهة اتصال واضحة.",
//                 en: "Managing multiple project phases through one team and a clear point of contact.",
//               },
//             },
//             {
//               icon: Sliders,
//               h: { ar: "حلول قابلة للتخصيص", en: "Customizable solutions" },
//               d: {
//                 ar: "تصميم الحل وفق عمليات المؤسسة وبيئتها التقنية بدلاً من فرض نموذج موحد.",
//                 en: "Designing the solution around your processes and environment rather than forcing a single model.",
//               },
//             },
//             {
//               icon: LayersIcon,
//               h: { ar: "تكامل بين التخصصات", en: "Cross-disciplinary integration" },
//               d: {
//                 ar: "الجمع بين البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والأنظمة الذكية.",
//                 en: "Combining software, ERP, AI, cloud, networks and smart systems.",
//               },
//             },
//             {
//               icon: Headphones,
//               h: { ar: "تنفيذ ودعم", en: "Delivery & support" },
//               d: {
//                 ar: "تغطية مراحل التحليل والتصميم والتنفيذ والتكامل والتدريب والدعم بحسب نطاق العقد.",
//                 en: "Covering analysis, design, delivery, integration, training and support per contract scope.",
//               },
//             },
//             {
//               icon: Sparkles,
//               h: { ar: "التركيز على القيمة المؤسسية", en: "Focus on enterprise value" },
//               d: {
//                 ar: "توجيه التقنية نحو تحسين الأداء وتقليل العمل اليدوي ورفع جودة الخدمة واستمرارية العمليات.",
//                 en: "Directing technology toward improved performance, less manual work, higher service quality and continuity.",
//               },
//             },
//           ].map((c) => {
//             const Icon = c.icon;
//             return (
//               <Card key={c.h.en}>
//                 <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
//                   <Icon className="h-5 w-5" />
//                 </div>
//                 <h3 className="font-bold text-lg">{l(c.h)}</h3>
//                 <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l(c.d)}</p>
//               </Card>
//             );
//           })}
//         </div>
//       </Section>

//       {/* ============================================================
//           دعوة لاتخاذ إجراء
//           ============================================================ */}
//       <section className="relative overflow-hidden bg-primary text-primary-foreground">
//         {/* <img
//           src={ctaBg}
//           alt=""
//           aria-hidden="true"
//           loading="lazy"
//           decoding="async"
//           className="absolute inset-0 w-full h-full object-cover opacity-20"
//         /> */}
//         <div className="relative container-page py-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground/85">
//             {isAr
//               ? "ما الخدمة التقنية التي تحتاجها مؤسستكم؟"
//               : "Which technology service does your organization need?"}
//           </h2>
//           <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
//             {isAr
//               ? "شاركوا فريق أربتك بأهداف المشروع والتحديات الحالية، وسنعمل معكم على تحديد الخدمات المناسبة وتصميم نطاق عمل يتوافق مع احتياجات المؤسسة وبيئتها التقنية."
//               : "Share your project goals and current challenges with the ARABTEC team, and we will work with you to determine the right services and design a scope that fits your organization and technology environment."}
//           </p>
//           <div className="mt-8 flex flex-wrap justify-center gap-3">
//             <Link
//               to="/contact"
//               className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
//             >
//               {isAr ? "اطلب استشارة تقنية" : "Request a consultation"}
//             </Link>
//             <Link
//               to="/contact"
//               className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
//             >
//               {isAr ? "اطلب عرضًا فنيًا" : "Request a technical proposal"}
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ============================================================
//           الأسئلة الشائعة
//           ============================================================ */}
//       <Section>
//         <SectionHead
//           title={isAr
//             ? "أسئلة شائعة عن خدمات أربتك التقنية"
//             : "Frequently asked questions about ARABTEC technology services"}
//         />

//         <FAQ
//           items={[
//             {
//               q: { ar: "ما الخدمات التقنية التي تقدمها أربتك؟", en: "What technology services does ARABTEC provide?" },
//               a: {
//                 ar: "تقدم أربتك حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، السحابة والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
//                 en: "ARABTEC provides AI & AI Agents, ERP & business applications, software development & system integration, cloud & infrastructure, networks & connectivity, and surveillance, attendance & access control.",
//               },
//             },
//             {
//               q: { ar: "هل تقدم أربتك خدمات تقنية للجهات الحكومية؟", en: "Does ARABTEC provide technology services for government entities?" },
//               a: {
//                 ar: "نعم، يمكن لأربتك تصميم وتنفيذ حلول تقنية تناسب الجهات الحكومية، بما يشمل الخدمات الرقمية، أتمتة الإجراءات، الذكاء الاصطناعي، تكامل الأنظمة، البنية التحتية والشبكات، وفق متطلبات المشروع.",
//                 en: "Yes — ARABTEC can design and deliver technology solutions suited to government entities, including digital services, process automation, AI, system integration, infrastructure and networks, per project requirements.",
//               },
//             },
//             {
//               q: { ar: "هل يمكن دمج أكثر من خدمة في مشروع واحد؟", en: "Can multiple services be combined in one project?" },
//               a: {
//                 ar: "نعم، يمكن دمج البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والأنظمة الذكية ضمن حل مؤسسي متكامل.",
//                 en: "Yes — software, ERP, AI, cloud, networks and smart systems can be combined into an integrated enterprise solution.",
//               },
//             },
//             {
//               q: { ar: "هل تقدم أربتك حلولاً مخصصة للمؤسسات؟", en: "Does ARABTEC provide tailored solutions?" },
//               a: {
//                 ar: "نعم، تبدأ أربتك بدراسة احتياجات المؤسسة وعملياتها وأنظمتها الحالية، ثم تصمم أو تخصص الحل وفق نطاق العمل المعتمد.",
//                 en: "Yes — ARABTEC starts by studying the organization's needs, operations and current systems, then designs or customizes the solution per approved scope.",
//               },
//             },
//             {
//               q: { ar: "هل تقدم أربتك خدمات تطوير البرمجيات وتكامل الأنظمة؟", en: "Does ARABTEC provide software development and system integration?" },
//               a: {
//                 ar: "نعم، تشمل الخدمات تطوير الأنظمة المؤسسية وتطبيقات الويب والهاتف وسطح المكتب والبوابات الرقمية وواجهات API وتحديث الأنظمة القديمة.",
//                 en: "Yes — services include enterprise systems, web, mobile and desktop applications, digital portals, APIs and legacy system modernization.",
//               },
//             },
//             {
//               q: { ar: "هل تقدم أربتك أنظمة ERP؟", en: "Does ARABTEC provide ERP systems?" },
//               a: {
//                 ar: "نعم، تقدم أربتك أنظمة ERP وتطبيقات أعمال تشمل المالية والموارد البشرية والمشتريات والمخزون والمبيعات والأصول والمشاريع والتكاملات.",
//                 en: "Yes — ARABTEC provides ERP and business applications covering finance, HR, procurement, inventory, sales, assets, projects and integrations.",
//               },
//             },
//             {
//               q: { ar: "هل تقدم أربتك حلول Agents AI؟", en: "Does ARABTEC provide AI Agents solutions?" },
//               a: {
//                 ar: "نعم، يمكن تطوير وكلاء ذكاء اصطناعي لخدمة الموظفين والمتعاملين، والبحث في الوثائق، وأتمتة المهام وربطها بالأنظمة المؤسسية.",
//                 en: "Yes — AI agents can be developed to serve employees and customers, search documents, automate tasks and integrate with enterprise systems.",
//               },
//             },
//             {
//               q: { ar: "هل تشمل الخدمات التنفيذ والدعم؟", en: "Do services include delivery and support?" },
//               a: {
//                 ar: "يمكن أن يشمل نطاق الخدمة التحليل والتصميم والتطوير أو التوريد والتنفيذ والتكامل والاختبار والتدريب والدعم، وفق الاتفاق والعقد.",
//                 en: "Scope can include analysis, design, development or supply, delivery, integration, testing, training and support — per agreement and contract.",
//               },
//             },
//             {
//               q: { ar: "هل تقدم أربتك حلول الشبكات وربط الفروع؟", en: "Does ARABTEC provide network and multi-site solutions?" },
//               a: {
//                 ar: "نعم، تشمل الخدمات تصميم وتنفيذ شبكات LAN و WAN، الألياف الضوئية، الشبكات اللاسلكية، الكابلات الهيكلية، VoIP وربط المواقع والفروع.",
//                 en: "Yes — services include design and delivery of LAN & WAN networks, fiber optics, wireless, structured cabling, VoIP and multi-site linking.",
//               },
//             },
//             {
//               q: { ar: "هل تقدم أربتك أنظمة حضور ومراقبة وتحكم بالدخول؟", en: "Does ARABTEC provide attendance, surveillance and access control?" },
//               a: {
//                 ar: "نعم، تشمل الخدمات كاميرات المراقبة، أنظمة الحضور والانصراف، البصمة، التعرف على الوجه، RFID وأنظمة التحكم بالدخول.",
//                 en: "Yes — services include surveillance cameras, attendance systems, biometrics, face recognition, RFID and access control systems.",
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
//                 name: "هل يمكن دمج أكثر من خدمة في مشروع واحد؟",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "نعم، يمكن دمج البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والأنظمة الذكية ضمن حل مؤسسي متكامل.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "هل تقدم أربتك حلول Agents AI؟",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "نعم، يمكن تطوير وكلاء ذكاء اصطناعي لخدمة الموظفين والمتعاملين، والبحث في الوثائق، وأتمتة المهام وربطها بالأنظمة المؤسسية.",
//                 },
//               },
//             ],
//           }}
//         />
//       </Section>
//     </>
//   );
// }
import { Link } from "@/lib/router";
import {
  Section,
  SectionHead,
  Card,
  CTAButton,
  JsonLd,
  useL,
  Breadcrumbs,
  FAQ,
} from "@/components/ui-blocks";
import { SERVICES } from "@/lib/services-data";
import { useI18n } from "@/lib/i18n";
import {
  ArrowLeft,
  Cpu,
  Database,
  Code2,
  Cloud,
  Network,
  ShieldCheck,
  BadgeCheck,
  Users,
  Sliders,
  Sparkles,
  Headphones,
  Landmark,
  Fuel,
  GraduationCap,
  HeartPulse,
  Banknote,
  Building2,
  LayersIcon,
} from "lucide-react";

// الصور
import heroImg from "@/assets/arabtec-integrated-technology-services.jpg";
import aiImg from "@/assets/service-ai-agents.jpg";
import erpImg from "@/assets/service-erp.jpg";
import softwareImg from "@/assets/service-software-development.jpg";
import cloudImg from "@/assets/service-cloud-infrastructure.jpg";
import networkImg from "@/assets/service-network-connectivity.jpg";
import surveillanceImg from "@/assets/service-surveillance.jpg";
import industriesImg from "@/assets/technology-services-for-industries.jpg";

const icons = [Cpu, Database, Code2, Cloud, Network, ShieldCheck];

export default function ServicesIndex() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title.ar,
              description: s.short.ar,
              url: s.path,
            },
          })),
        }}
      />

      {/* ============================================================
          1. HERO
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <Breadcrumbs
          items={[
            { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
            { label: { ar: "الخدمات", en: "Services" } },
          ]}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-center mt-4 md:mt-6">
          {/* الصورة — يسار */}
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={
                isAr
                  ? "خدمات تقنية متكاملة تقدمها أربتك للمؤسسات والجهات الحكومية"
                  : "Integrated technology services provided by ARABTEC for enterprises and government entities"
              }
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* النص — يمين */}
          <div className="order-1 lg:order-2">
            <div className="text-sm font-bold uppercase tracking-wider text-[color:var(--gold)]">
              {isAr ? "خدماتنا" : "Our services"}
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0B3D2E]">
              {isAr
                ? "خدمات تقنية متكاملة للمؤسسات والجهات الحكومية"
                : "Integrated technology services for enterprises and government entities"}
            </h1>
            
            <p className="mt-4 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تقدم أربتك مجموعة متكاملة من الخدمات والحلول التقنية المصممة لمساعدة المؤسسات والجهات الحكومية على تطوير أنظمتها، أتمتة عملياتها، تحسين الاتصال بين إداراتها ومواقعها، والاستفادة من البيانات والتقنيات الحديثة في رفع الكفاءة التشغيلية وتحسين جودة الخدمات."
                : "ARABTEC provides an integrated portfolio of technology services and solutions designed to help enterprises and government entities modernize systems, automate operations, improve connectivity across departments and sites, and leverage data and modern technologies to raise operational efficiency and improve service quality."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "نجمع بين الخبرة الممتدة في البنية التحتية والشبكات وأنظمة المراقبة والحضور، وبين الإمكانات الحديثة في الذكاء الاصطناعي، وكلاء الأعمال الذكيين، أنظمة ERP، تطوير البرمجيات، تكامل الأنظمة والحلول السحابية."
                : "We combine deep expertise in infrastructure, networks, surveillance and attendance systems with modern capabilities in AI, intelligent business agents, ERP, software development, system integration and cloud solutions."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "نعمل مع العميل منذ مرحلة تحليل الاحتياج وتصميم الحل، مرورًا بالتطوير والتوريد والتنفيذ والتكامل، وصولاً إلى التدريب والدعم والتشغيل وفق نطاق المشروع."
                : "We work with clients from requirements analysis and solution design, through development, supply, delivery and integration, to training, support and operations — according to project scope."}
            </p>

            {/* الأزرار: الأول أبيض والتاني أخضر */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0B3D2E] border border-[#0B3D2E] hover:bg-slate-50 transition"
              >
                {isAr ? "اطلب استشارة تقنية" : "Request a consultation"}
              </Link>
              <Link
                to="/contact"
                className="rounded-md bg-[#0B3D2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0B3D2E]/90 transition"
              >
                {isAr ? "ناقش احتياجات مؤسستك" : "Discuss your organization's needs"}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          2. مقدمة الخدمات
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "منظومة واحدة تغطي احتياجات المؤسسة التقنية"
            : "One ecosystem covering your enterprise technology needs"}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-4 md:mt-6">
          <div>
            <p className="text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "لا تعمل الأنظمة المؤسسية بمعزل عن بعضها. فالبرمجيات تحتاج إلى بنية تحتية مستقرة، والذكاء الاصطناعي يحتاج إلى بيانات وأنظمة متكاملة، وأنظمة ERP تحتاج إلى تطوير وربط واتصال آمن بين الإدارات والفروع."
                : "Enterprise systems do not operate in isolation. Software needs stable infrastructure, AI needs integrated data and systems, and ERP needs development, integration and secure connectivity across departments and branches."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "لهذا تقدم أربتك خدماتها باعتبارها منظومة مترابطة، مع إمكانية تنفيذ خدمة محددة أو تصميم حل متكامل يجمع بين أكثر من مجال وفق أهداف المؤسسة وبيئتها التقنية."
                : "ARABTEC therefore delivers its services as a connected ecosystem — supporting either a specific service or a fully integrated solution across multiple domains, according to the organization's goals and technology environment."}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#0B3D2E]">
              {isAr ? "تشمل خدماتنا ستة مجالات رئيسية:" : "Our services cover six main areas:"}
            </h3>

            <ul className="mt-4 space-y-3">
              {(isAr
                ? [
                    "حلول الذكاء الاصطناعي و AI Agents",
                    "أنظمة ERP وتطبيقات الأعمال",
                    "تطوير البرمجيات وتكامل الأنظمة",
                    "السحابة والبنية التحتية",
                    "الشبكات والاتصال",
                    "أنظمة المراقبة والحضور والتحكم بالدخول",
                  ]
                : [
                    "AI Solutions & AI Agents",
                    "ERP & Business Applications",
                    "Software Development & System Integration",
                    "Cloud & Infrastructure",
                    "Networks & Connectivity",
                    "Surveillance, Attendance & Access Control",
                  ]
              ).map((item, i) => {
                const Icon = icons[i];
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="pt-2 text-[16px] font-medium text-slate-800">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          الخدمة 1: AI
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "حلول الذكاء الاصطناعي و AI Agents للمؤسسات"
                : "AI Solutions & AI Agents for enterprises"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "نساعد الجهات الحكومية والمؤسسات على الاستفادة العملية من الذكاء الاصطناعي من خلال تطوير حلول ذكية ووكلاء أعمال قادرين على الوصول إلى المعلومات المصرح بها، تنفيذ المهام، دعم الموظفين والمتعاملين، وتحسين سرعة ودقة العمليات."
                : "We help government entities and enterprises put AI to practical use through intelligent solutions and business agents that access authorized information, execute tasks, support employees and customers, and improve speed and accuracy of operations."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تصمم حلول AI Agents وفق احتياجات المؤسسة، ويمكن ربطها بالأنظمة الداخلية، قواعد البيانات، الوثائق، بوابات الخدمات، أنظمة ERP ومنصات إدارة علاقات العملاء."
                : "AI Agents are designed around each organization's needs and can be integrated with internal systems, databases, documents, service portals, ERP and CRM platforms."}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#0B3D2E]">
              {isAr ? "تشمل الخدمة" : "The service includes"}
            </h3>
            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "وكلاء ذكاء اصطناعي لخدمة المتعاملين", d: "مساعدون ذكيون للرد على الاستفسارات، توجيه المستخدمين، متابعة الطلبات وتقديم المعلومات من المصادر المعتمدة." },
                    { t: "مساعدون ذكيون للموظفين", d: "حلول تساعد الموظفين على الوصول إلى السياسات والإجراءات والوثائق والنماذج والمعلومات المؤسسية بسرعة." },
                    { t: "البحث الذكي في الوثائق", d: "البحث داخل العقود والسياسات والتقارير والأدلة والوثائق المؤسسية باستخدام اللغة الطبيعية." },
                    { t: "أتمتة الإجراءات والمهام", d: "أتمتة معالجة الطلبات، إعداد الملخصات، تصنيف المستندات، استخراج البيانات وتوجيه الإجراءات." },
                    { t: "تحليل البيانات ودعم القرار", d: "تحويل البيانات التشغيلية إلى تحليلات وتقارير ومؤشرات تساعد القيادات وصناع القرار." },
                    { t: "تكامل الذكاء الاصطناعي مع الأنظمة", d: "ربط حلول الذكاء الاصطناعي بأنظمة ERP و CRM والبوابات وقواعد البيانات وواجهات API." },
                  ]
                : [
                    { t: "AI agents for customer service", d: "Intelligent assistants that answer questions, guide users, follow up on requests and surface information from approved sources." },
                    { t: "AI copilots for employees", d: "Solutions that help employees quickly access policies, procedures, documents, forms and enterprise information." },
                    { t: "Intelligent document search", d: "Natural-language search across contracts, policies, reports, manuals and enterprise documents." },
                    { t: "Process & task automation", d: "Automating request handling, summarization, document classification, data extraction and workflow routing." },
                    { t: "Data analytics & decision support", d: "Turning operational data into analytics, reports and KPIs that support leadership and decision-making." },
                    { t: "AI integration with systems", d: "Integrating AI with ERP, CRM, portals, databases and APIs." },
                  ]
              ).map((item) => (
                <div key={item.t}>
                  <h4 className="font-bold text-base text-slate-800">{item.t}</h4>
                  <p className="mt-1 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/services/$slug"
                params={{ slug: "ai-agents" }}
                className="inline-flex items-center gap-2 text-base font-bold text-[#0B3D2E] hover:text-[color:var(--gold)]"
              >
                {isAr ? "استكشف حلول الذكاء الاصطناعي و AI Agents" : "Explore AI & AI Agents"}
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* الصورة: sticky + عرض كامل بدون قص */}
          <div className="lg:sticky lg:top-24 mt-6 lg:mt-0">
            <div className="bg-slate-50/50 rounded-xl p-2 md:p-3 border border-border/40">
              <img
                src={aiImg}
                alt={isAr
                  ? "حلول الذكاء الاصطناعي و AI Agents للمؤسسات والجهات الحكومية"
                  : "AI & AI Agents solutions for enterprises and government entities"}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          الخدمة 2: ERP
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          {/* الصورة */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24 mt-6 lg:mt-0">
            <div className="bg-slate-50/50 rounded-xl p-2 md:p-3 border border-border/40">
              <img
                src={erpImg}
                alt={isAr
                  ? "أنظمة ERP وتطبيقات الأعمال لإدارة عمليات المؤسسات"
                  : "ERP and business applications for enterprise operations"}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr ? "أنظمة ERP وتطبيقات الأعمال المؤسسية" : "ERP & Enterprise Business Applications"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تساعد حلول ERP المؤسسات على توحيد بياناتها وعملياتها ضمن نظام مركزي يربط الإدارات المالية والتشغيلية والإدارية، ويوفر رؤية أوضح للأداء والموارد والتكاليف."
                : "ERP solutions help enterprises unify their data and operations in a central system connecting financial, operational and administrative departments, providing clearer visibility of performance, resources and costs."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تقدم أربتك خدمات تحليل المتطلبات، تخصيص النظام، تطوير الوحدات، ترحيل البيانات، تكامل الأنظمة، التدريب والدعم، وفق طبيعة المؤسسة وحجم عملياتها."
                : "ARABTEC provides requirements analysis, system customization, module development, data migration, system integration, training and support — according to the organization's nature and scale."}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#0B3D2E]">
              {isAr ? "تشمل الخدمة" : "The service includes"}
            </h3>
            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "الإدارة المالية والمحاسبة", d: "إدارة الحسابات العامة، المصروفات، الإيرادات، الميزانيات، القيود والتقارير المالية." },
                    { t: "الموارد البشرية والرواتب", d: "إدارة بيانات الموظفين، الحضور، الإجازات، الرواتب، التقييمات والإجراءات الإدارية." },
                    { t: "المشتريات والموردون", d: "إدارة طلبات الشراء، عروض الأسعار، أوامر الشراء، الموردين والموافقات." },
                    { t: "المخزون والمستودعات", d: "متابعة المخزون، الأصناف، المستودعات، التحويلات، الاستلام والصرف." },
                    { t: "المبيعات وإدارة العملاء", d: "إدارة عروض الأسعار والمبيعات والعقود والعملاء والفواتير." },
                    { t: "إدارة الأصول والمشاريع", d: "متابعة الأصول، الصيانة، التكاليف، الموارد ومراحل تنفيذ المشاريع." },
                    { t: "تخصيص النظام وتكامل التطبيقات", d: "تطوير وحدات ووظائف مخصصة وربط ERP بالأنظمة الخارجية والبوابات والخدمات الرقمية." },
                    { t: "ترحيل البيانات والتدريب", d: "نقل البيانات من الأنظمة القديمة، اختبارها، تدريب المستخدمين ودعم الإطلاق." },
                  ]
                : [
                    { t: "Finance & accounting", d: "General ledger, expenses, revenues, budgets, journal entries and financial reporting." },
                    { t: "HR & payroll", d: "Managing employee data, attendance, leave, payroll, evaluations and administrative procedures." },
                    { t: "Procurement & vendors", d: "Managing purchase requests, quotations, purchase orders, vendors and approvals." },
                    { t: "Inventory & warehouses", d: "Tracking stock, items, warehouses, transfers, receiving and issuing." },
                    { t: "Sales & CRM", d: "Managing quotations, sales, contracts, customers and invoices." },
                    { t: "Assets & projects", d: "Tracking assets, maintenance, costs, resources and project delivery phases." },
                    { t: "Customization & integration", d: "Developing custom modules and functions and connecting ERP to external systems, portals and digital services." },
                    { t: "Data migration & training", d: "Migrating data from legacy systems, testing, training users and supporting go-live." },
                  ]
              ).map((item) => (
                <div key={item.t}>
                  <h4 className="font-bold text-base text-slate-800">{item.t}</h4>
                  <p className="mt-1 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/services/$slug"
                params={{ slug: "erp-business-applications" }}
                className="inline-flex items-center gap-2 text-base font-bold text-[#0B3D2E] hover:text-[color:var(--gold)]"
              >
                {isAr ? "استكشف أنظمة ERP وتطبيقات الأعمال" : "Explore ERP & business applications"}
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          الخدمة 3: تطوير البرمجيات
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr ? "تطوير البرمجيات وتكامل الأنظمة" : "Software Development & System Integration"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "نطور حلولاً برمجية مخصصة تتوافق مع إجراءات المؤسسة ومتطلبات المستخدمين، وتساعد على تحويل العمليات اليدوية أو المتفرقة إلى أنظمة رقمية مترابطة وقابلة للتوسع."
                : "We build custom software aligned with the organization's processes and user requirements, helping turn manual or fragmented operations into connected, scalable digital systems."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تشمل خبرات أربتك تطبيقات الويب و Android و iOS وتطبيقات سطح المكتب والحلول البرمجية والذكاء الاصطناعي."
                : "ARABTEC's expertise covers web, Android, iOS and desktop applications, software solutions and AI."}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#0B3D2E]">
              {isAr ? "تشمل الخدمة" : "The service includes"}
            </h3>
            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "الأنظمة المؤسسية المخصصة", d: "تطوير أنظمة داخلية لإدارة العمليات والموافقات والطلبات والبيانات وفق آلية عمل المؤسسة." },
                    { t: "بوابات الخدمات الإلكترونية", d: "تطوير بوابات للمتعاملين والموظفين والموردين والشركاء، مع خدمات التسجيل والمتابعة والإشعارات." },
                    { t: "تطبيقات الويب", d: "تطوير تطبيقات ويب سريعة ومتجاوبة وقابلة للتكامل مع قواعد البيانات والأنظمة المؤسسية." },
                    { t: "تطبيقات الهاتف", d: "تطوير تطبيقات Android و iOS لخدمة الموظفين أو العملاء أو العمليات الميدانية." },
                    { t: "تطبيقات سطح المكتب", d: "تطوير تطبيقات مخصصة للعمليات التي تحتاج إلى بيئات مكتبية أو تشغيل محلي." },
                    { t: "تكامل الأنظمة وواجهات API", d: "ربط الأنظمة الداخلية والخارجية وتبادل البيانات بينها من خلال واجهات تكامل منظمة." },
                    { t: "تحديث الأنظمة القديمة", d: "إعادة تصميم وتطوير الأنظمة القديمة لتحسين الأداء، تجربة المستخدم، القابلية للتوسع وسهولة الصيانة." },
                    { t: "الاختبارات والدعم", d: "إجراء الاختبارات الوظيفية والفنية، تدريب المستخدمين، دعم الإطلاق والتحسين المستمر." },
                  ]
                : [
                    { t: "Custom enterprise systems", d: "Building internal systems for managing operations, approvals, requests and data according to the organization's workflow." },
                    { t: "Digital service portals", d: "Building portals for customers, employees, vendors and partners, with registration, tracking and notifications." },
                    { t: "Web applications", d: "Building fast, responsive web applications that integrate with databases and enterprise systems." },
                    { t: "Mobile applications", d: "Building Android and iOS apps for employees, customers or field operations." },
                    { t: "Desktop applications", d: "Building custom applications for operations that require desktop or local environments." },
                    { t: "System integration & APIs", d: "Connecting internal and external systems and exchanging data through well-defined integration interfaces." },
                    { t: "Legacy system modernization", d: "Redesigning and rebuilding legacy systems to improve performance, UX, scalability and maintainability." },
                    { t: "Testing & support", d: "Running functional and technical testing, training users, supporting go-live and continuous improvement." },
                  ]
              ).map((item) => (
                <div key={item.t}>
                  <h4 className="font-bold text-base text-slate-800">{item.t}</h4>
                  <p className="mt-1 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/services/$slug"
                params={{ slug: "software-development" }}
                className="inline-flex items-center gap-2 text-base font-bold text-[#0B3D2E] hover:text-[color:var(--gold)]"
              >
                {isAr ? "استكشف تطوير البرمجيات وتكامل الأنظمة" : "Explore software development"}
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* الصورة */}
          <div className="lg:sticky lg:top-24 mt-6 lg:mt-0">
            <div className="bg-slate-50/50 rounded-xl p-2 md:p-3 border border-border/40">
              <img
                src={softwareImg}
                alt={isAr
                  ? "تطوير البرمجيات وتكامل الأنظمة للمؤسسات"
                  : "Software development and system integration for enterprises"}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          الخدمة 4: السحابة
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          {/* الصورة */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24 mt-6 lg:mt-0">
            <div className="bg-slate-50/50 rounded-xl p-2 md:p-3 border border-border/40">
              <img
                src={cloudImg}
                alt={isAr
                  ? "حلول السحابة والبنية التحتية التقنية للمؤسسات"
                  : "Cloud and IT infrastructure solutions for enterprises"}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr ? "السحابة والبنية التحتية التقنية" : "Cloud & IT Infrastructure"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "نساعد المؤسسات على بناء وتحديث بيئاتها التقنية من خلال حلول الخوادم والتخزين والحوسبة السحابية والنسخ الاحتياطي وتجهيز مواقع العمل، بما يدعم استقرار الأنظمة واستمرارية العمليات وقابلية التوسع."
                : "We help organizations build and modernize their technology environments through servers, storage, cloud, backup and workplace solutions — supporting system stability, business continuity and scalability."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تغطي خدمات أربتك مراحل التقييم والتصميم والتوريد والتركيب والإعداد والاختبار والتشغيل والدعم، وفق نطاق المشروع ومتطلبات المؤسسة."
                : "ARABTEC's services cover assessment, design, supply, installation, configuration, testing, operation and support — according to project scope and requirements."}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#0B3D2E]">
              {isAr ? "تشمل الخدمة" : "The service includes"}
            </h3>
            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "تقييم البنية التقنية", d: "مراجعة الخوادم والتخزين والأنظمة والاحتياجات التشغيلية وتحديد فرص التحديث." },
                    { t: "الخوادم والتخزين", d: "توريد وتركيب وإعداد الخوادم وأنظمة التخزين وفق احتياجات التطبيقات والبيانات." },
                    { t: "الحلول السحابية", d: "تصميم وتنفيذ بيئات سحابية أو هجينة تساعد المؤسسة على تشغيل التطبيقات والبيانات بمرونة." },
                    { t: "النسخ الاحتياطي واستعادة البيانات", d: "إنشاء حلول لحفظ النسخ الاحتياطية واستعادة البيانات وفق متطلبات المؤسسة." },
                    { t: "استمرارية الأعمال", d: "تصميم بيئات تساعد الأنظمة والخدمات الأساسية على الاستمرار أو التعافي عند حدوث أعطال." },
                    { t: "تجهيز مواقع العمل", d: "تجهيز بيئات المستخدمين والأجهزة والتراخيص والاتصال والبنية التقنية للمكاتب والفروع." },
                    { t: "أنظمة التشغيل والمنصات", d: "إعداد وإدارة بيئات Windows و Linux والمنصات والخدمات المرتبطة بها." },
                    { t: "التشغيل والصيانة", d: "متابعة الأنظمة ومعالجة الأعطال وتنفيذ التحديثات والدعم الفني وفق الاتفاق." },
                  ]
                : [
                    { t: "Infrastructure assessment", d: "Reviewing servers, storage, systems and operational needs and identifying modernization opportunities." },
                    { t: "Servers & storage", d: "Supply, installation and configuration of servers and storage systems to meet application and data needs." },
                    { t: "Cloud solutions", d: "Designing and delivering cloud or hybrid environments that let the organization run applications and data flexibly." },
                    { t: "Backup & disaster recovery", d: "Building backup and data recovery solutions per the organization's requirements." },
                    { t: "Business continuity", d: "Designing environments that allow critical systems and services to continue or recover from failures." },
                    { t: "Workplace setup", d: "Setting up user environments, devices, licensing, connectivity and IT infrastructure for offices and branches." },
                    { t: "Operating systems & platforms", d: "Setting up and managing Windows and Linux environments and the platforms and services related to them." },
                    { t: "Operations & maintenance", d: "Monitoring systems, handling incidents, applying updates and providing technical support per agreement." },
                  ]
              ).map((item) => (
                <div key={item.t}>
                  <h4 className="font-bold text-base text-slate-800">{item.t}</h4>
                  <p className="mt-1 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/services/$slug"
                params={{ slug: "cloud-infrastructure" }}
                className="inline-flex items-center gap-2 text-base font-bold text-[#0B3D2E] hover:text-[color:var(--gold)]"
              >
                {isAr ? "استكشف حلول السحابة والبنية التحتية" : "Explore cloud & infrastructure"}
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          الخدمة 5: الشبكات
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr ? "الشبكات والاتصال وربط المواقع" : "Networks, Connectivity & Multi-site Linking"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "نصمم وننفذ حلول الشبكات والاتصال التي تساعد المؤسسات على ربط المستخدمين والأنظمة والفروع والمواقع ضمن بيئة تقنية مستقرة وقابلة للإدارة والتوسع."
                : "We design and deliver network and connectivity solutions that help organizations connect users, systems, branches and sites within a stable, manageable and scalable environment."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تمتلك أربتك خبرة في الشبكات المؤسسية، LAN و WAN، الألياف الضوئية، الشبكات اللاسلكية، WiMax، VSAT، Point-to-Point، VoIP والكابلات الهيكلية."
                : "ARABTEC has expertise in enterprise networks, LAN & WAN, fiber optics, wireless networks, WiMax, VSAT, Point-to-Point, VoIP and structured cabling."}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#0B3D2E]">
              {isAr ? "تشمل الخدمة" : "The service includes"}
            </h3>
            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "تصميم الشبكات المؤسسية", d: "تحليل المتطلبات وإعداد تصميم الشبكة وفق عدد المستخدمين والمواقع والأنظمة." },
                    { t: "شبكات LAN و WAN", d: "تنفيذ شبكات الاتصال الداخلية وربط الفروع والمواقع المؤسسية." },
                    { t: "الألياف الضوئية", d: "توريد وتمديد ولحام واختبار كابلات الألياف الضوئية وملحقاتها." },
                    { t: "الكابلات الهيكلية", d: "تنفيذ Structured Cabling وتمديد وإنهاء واختبار كابلات الشبكات." },
                    { t: "الشبكات اللاسلكية", d: "تصميم وتنفيذ شبكات Wi-Fi وحلول الاتصال اللاسلكي للمكاتب والمواقع." },
                    { t: "ربط المواقع والفروع", d: "حلول Point-to-Point و VSAT وتقنيات الاتصال المناسبة للمواقع المتعددة أو البعيدة." },
                    { t: "حلول VoIP", d: "توفير أنظمة الاتصال الصوتي عبر الشبكات وربطها ببيئة المؤسسة." },
                    { t: "تشغيل وصيانة الشبكات", d: "مراقبة الشبكة، تحسين الأداء، معالجة الأعطال وتنفيذ التحديثات." },
                  ]
                : [
                    { t: "Enterprise network design", d: "Analyzing requirements and preparing the network design based on users, sites and systems." },
                    { t: "LAN & WAN networks", d: "Delivering internal connectivity networks and linking branches and enterprise sites." },
                    { t: "Fiber optics", d: "Supply, laying, splicing and testing of fiber optic cables and accessories." },
                    { t: "Structured cabling", d: "Delivering structured cabling, laying, terminating and testing network cables." },
                    { t: "Wireless networks", d: "Designing and delivering Wi-Fi networks and wireless connectivity for offices and sites." },
                    { t: "Multi-site linking", d: "Point-to-Point, VSAT and appropriate connectivity technologies for multiple or remote sites." },
                    { t: "VoIP solutions", d: "Providing voice-over-network systems and connecting them to the enterprise environment." },
                    { t: "Network operations & maintenance", d: "Monitoring the network, tuning performance, handling faults and applying updates." },
                  ]
              ).map((item) => (
                <div key={item.t}>
                  <h4 className="font-bold text-base text-slate-800">{item.t}</h4>
                  <p className="mt-1 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/services/$slug"
                params={{ slug: "network-connectivity" }}
                className="inline-flex items-center gap-2 text-base font-bold text-[#0B3D2E] hover:text-[color:var(--gold)]"
              >
                {isAr ? "استكشف حلول الشبكات والاتصال" : "Explore networks & connectivity"}
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* الصورة */}
          <div className="lg:sticky lg:top-24 mt-6 lg:mt-0">
            <div className="bg-slate-50/50 rounded-xl p-2 md:p-3 border border-border/40">
              <img
                src={networkImg}
                alt={isAr
                  ? "حلول الشبكات والاتصال وربط مواقع وفروع المؤسسات"
                  : "Networks and connectivity solutions linking enterprise sites and branches"}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          الخدمة 6: المراقبة والحضور
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          {/* الصورة */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24 mt-6 lg:mt-0">
            <div className="bg-slate-50/50 rounded-xl p-2 md:p-3 border border-border/40">
              <img
                src={surveillanceImg}
                alt={isAr
                  ? "أنظمة المراقبة والحضور والتحكم بالدخول للمؤسسات"
                  : "Surveillance, attendance and access control systems for enterprises"}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr ? "أنظمة المراقبة والحضور والتحكم بالدخول" : "Surveillance, Attendance & Access Control"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تقدم أربتك حلولاً متكاملة لمراقبة المواقع وتنظيم دخول الأفراد وتسجيل الحضور والانصراف، بما يساعد المؤسسات على إدارة منشآتها وموظفيها ومواقعها بصورة أكثر كفاءة."
                : "ARABTEC provides integrated solutions for site surveillance, people access and attendance logging — helping organizations manage facilities, employees and sites more efficiently."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-slate-700 leading-relaxed">
              {isAr
                ? "تشمل خبرة الشركة كاميرات المراقبة، أنظمة الحضور، البصمة، التعرف على الوجه وراحة اليد، أنظمة التحكم بالدخول و RFID."
                : "The company's expertise includes surveillance cameras, attendance systems, biometrics, face and palm recognition, access control and RFID."}
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#0B3D2E]">
              {isAr ? "تشمل الخدمة" : "The service includes"}
            </h3>
            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "أنظمة كاميرات المراقبة", d: "توريد وتركيب وإعداد كاميرات المراقبة الداخلية والخارجية وفق طبيعة الموقع." },
                    { t: "كاميرات IP", d: "حلول مراقبة تعتمد على الشبكات وتتيح الإدارة والتسجيل والمتابعة المركزية." },
                    { t: "أنظمة التسجيل NVR و DVR", d: "توفير أنظمة تسجيل وحفظ وإدارة مقاطع المراقبة وفق متطلبات الموقع." },
                    { t: "أنظمة الحضور والانصراف", d: "حلول لتسجيل حضور الموظفين وانصرافهم وربط البيانات بالإدارة والموارد البشرية." },
                    { t: "البصمة والتعرف على الوجه", d: "تقنيات للتحقق من الهوية وتسجيل الحضور أو تنظيم الدخول." },
                    { t: "RFID والبطاقات", d: "حلول البطاقات والتعريف الإلكتروني لإدارة الدخول والحضور والأصول حسب نطاق المشروع." },
                    { t: "التحكم بالدخول", d: "أنظمة لإدارة صلاحيات دخول الأفراد إلى المباني والغرف والمناطق المحددة." },
                    { t: "التكامل والتشغيل والصيانة", d: "ربط أنظمة الحضور والمراقبة بالأنظمة الإدارية وتقديم خدمات الإعداد والدعم والصيانة." },
                  ]
                : [
                    { t: "CCTV surveillance systems", d: "Supply, installation and configuration of indoor and outdoor surveillance cameras based on site needs." },
                    { t: "IP cameras", d: "Network-based surveillance solutions supporting centralized management, recording and monitoring." },
                    { t: "NVR & DVR recording systems", d: "Providing recording, storage and management of surveillance footage based on site requirements." },
                    { t: "Attendance systems", d: "Solutions for logging employee attendance and integrating data with admin and HR systems." },
                    { t: "Biometrics & face recognition", d: "Technologies for identity verification and attendance logging or access control." },
                    { t: "RFID & cards", d: "Card and e-identification solutions for access, attendance and asset management per project scope." },
                    { t: "Access control", d: "Systems for managing individual access rights to buildings, rooms and specific areas." },
                    { t: "Integration, operations & maintenance", d: "Connecting attendance and surveillance systems to admin systems and providing setup, support and maintenance." },
                  ]
              ).map((item) => (
                <div key={item.t}>
                  <h4 className="font-bold text-base text-slate-800">{item.t}</h4>
                  <p className="mt-1 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/services/$slug"
                params={{ slug: "surveillance-access-control" }}
                className="inline-flex items-center gap-2 text-base font-bold text-[#0B3D2E] hover:text-[color:var(--gold)]"
              >
                {isAr ? "استكشف أنظمة المراقبة والحضور والتحكم بالدخول" : "Explore surveillance & access control"}
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          قسم الحلول المتكاملة
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr ? "أكثر من خدمة ضمن حل مؤسسي واحد" : "More than one service within a single enterprise solution"}
          intro={
            isAr
              ? "يمكن تنفيذ خدمات أربتك بصورة مستقلة أو دمجها ضمن حل متكامل يخدم هدفًا مؤسسيًا محددًا."
              : "ARABTEC services can be delivered independently or combined into an integrated solution that serves a specific business objective."
          }
        />

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          {(isAr
            ? [
                {
                  t: "منصة خدمات حكومية ذكية",
                  items: ["بوابة إلكترونية", "Agent AI لخدمة المتعاملين", "تكامل مع الأنظمة وقواعد البيانات", "بنية سحابية أو داخلية", "لوحات متابعة وتقارير"],
                },
                {
                  t: "نظام إدارة مؤسسي متكامل",
                  items: ["نظام ERP", "تطبيقات مخصصة", "ربط الحضور والموارد البشرية", "تكامل مع الأنظمة المالية والتشغيلية", "تقارير ومؤشرات أداء"],
                },
                {
                  t: "تجهيز فرع أو منشأة جديدة",
                  items: ["بنية تحتية تقنية", "خوادم وأجهزة", "شبكات وكابلات", "اتصال وربط بالمركز الرئيسي", "حضور وتحكم بالدخول", "كاميرات مراقبة", "تشغيل ودعم"],
                },
                {
                  t: "تحديث بيئة تقنية قائمة",
                  items: ["تقييم الأنظمة والبنية الحالية", "تحديث الخوادم والشبكات", "تطوير أو تحديث البرمجيات", "تكامل الأنظمة", "نقل الخدمات إلى بيئة سحابية أو هجينة", "دعم التشغيل والتحسين"],
                },
              ]
            : [
                {
                  t: "Smart government services platform",
                  items: ["Digital portal", "AI Agent for customer service", "Integration with systems and databases", "Cloud or on-premise infrastructure", "Dashboards & reporting"],
                },
                {
                  t: "Integrated enterprise management system",
                  items: ["ERP system", "Custom applications", "Attendance & HR integration", "Integration with finance & operations", "Reports & KPIs"],
                },
                {
                  t: "New branch or facility setup",
                  items: ["IT infrastructure", "Servers & devices", "Networks & cabling", "Connectivity to HQ", "Attendance & access control", "Surveillance cameras", "Operations & support"],
                },
                {
                  t: "Existing environment modernization",
                  items: ["Assessment of current systems", "Server & network upgrades", "Software development or upgrade", "System integration", "Migration to cloud or hybrid", "Operations & improvement support"],
                },
              ]
          ).map((sol) => (
            <Card key={sol.t} className="p-5 md:p-6 border-border/60 shadow-sm bg-card">
              <h3 className="text-lg font-bold text-[#0B3D2E]">{sol.t}</h3>
              <ul className="mt-3 space-y-2">
                {sol.items.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] md:text-[16px] text-slate-700">
                    <span className="text-[color:var(--gold)] mt-1 shrink-0">•</span>
                    <span className="leading-relaxed">{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          قسم القطاعات
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "حلول تقنية مصممة لقطاعك "
            : "Technology solutions designed for your sector"}
          intro={
            isAr
              ? "نقدم حلولاً وخدمات تقنية قابلة للتخصيص وفق طبيعة كل قطاع، حجم عملياته، متطلبات الاتصال والتكامل، حساسية البيانات، عدد المواقع والمستخدمين وأهداف المؤسسة."
              : "We deliver customizable technology solutions according to each sector's nature, operation scale, connectivity and integration requirements, data sensitivity, number of sites and users, and the organization's goals."
          }
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-6">
          <div className="space-y-3">
            {[
              {
                icon: Landmark,
                ar: "الجهات الحكومية",
                en: "Government",
                descAr: "الذكاء الاصطناعي، بوابات الخدمات، أتمتة الإجراءات، تكامل الأنظمة، البنية التحتية وربط المواقع.",
                descEn: "AI, service portals, process automation, system integration, infrastructure and site linking.",
              },
              {
                icon: Fuel,
                ar: "النفط والغاز",
                en: "Oil & Gas",
                descAr: "الشبكات، الاتصال بين المواقع، البنية التحتية، أنظمة الأعمال والمراقبة والتحكم بالدخول.",
                descEn: "Networks, site-to-site connectivity, infrastructure, business systems, surveillance and access control.",
              },
              {
                icon: GraduationCap,
                ar: "التعليم",
                en: "Education",
                descAr: "الشبكات، البنية التقنية، الأنظمة الإدارية، الحضور، البوابات والمنصات الرقمية.",
                descEn: "Networks, IT infrastructure, admin systems, attendance, portals and digital platforms.",
              },
              {
                icon: HeartPulse,
                ar: "الرعاية الصحية",
                en: "Healthcare",
                descAr: "البرمجيات المؤسسية، البنية التحتية، الشبكات، التكامل وتطبيقات إدارة العمليات.",
                descEn: "Enterprise software, infrastructure, networks, integration and operations management apps.",
              },
              {
                icon: Banknote,
                ar: "البنوك والخدمات المالية",
                en: "Banking & Finance",
                descAr: "الأنظمة المؤسسية، تكامل التطبيقات، الذكاء الاصطناعي، أتمتة العمليات واستمرارية الأعمال.",
                descEn: "Enterprise systems, application integration, AI, process automation and business continuity.",
              },
              {
                icon: Building2,
                ar: "الشركات والمؤسسات",
                en: "Corporates & Enterprises",
                descAr: "ERP، تطوير البرمجيات، السحابة، الشبكات، الحضور وأنظمة الإدارة والتشغيل.",
                descEn: "ERP, software development, cloud, networks, attendance and management & operations systems.",
              },
            ].map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.en}
                  className="rounded-lg border border-border bg-card p-4 shadow-sm flex items-start gap-4"
                >
                  <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[16px] text-[#0B3D2E]">{isAr ? row.ar : row.en}</div>
                    <p className="mt-1 text-[15px] md:text-[16px] text-slate-700 leading-relaxed">
                      {isAr ? row.descAr : row.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <img
            src={industriesImg}
            alt={isAr
              ? "خدمات تقنية للقطاعات الحكومية والصناعية والتعليمية والصحية والمالية"
              : "Technology services for government, industrial, education, healthcare and financial sectors"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-xl shadow-md w-full h-auto object-cover mt-6 lg:mt-0"
          />
        </div>

        <div className="mt-6">
          <CTAButton to="/industries" variant="outline">
            {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          منهجية تقديم الخدمة — 7 مراحل
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "منهجية منظمة من التحليل إلى التشغيل"
            : "A structured methodology from analysis to operations"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "دراسة الاحتياج", d: "فهم أهداف المؤسسة وتحدياتها والعمليات والمستخدمين والأنظمة والبنية الحالية." },
                { t: "تحديد نطاق العمل", d: "تحديد المخرجات والمتطلبات والمسؤوليات والمراحل والجداول الزمنية." },
                { t: "تصميم الحل", d: "إعداد التصميم الفني وخطة التكامل والتنفيذ والاختبار." },
                { t: "التطوير أو التوريد", d: "تطوير البرمجيات أو تجهيز الأنظمة والمعدات والخدمات المطلوبة." },
                { t: "التنفيذ والتكامل", d: "تركيب وتشغيل الحل وربطه بالأنظمة والبيانات والبيئة الحالية." },
                { t: "الاختبار والتدريب", d: "اختبار الوظائف والأداء وتدريب المستخدمين والفرق الفنية." },
                { t: "الإطلاق والدعم", d: "تشغيل الحل ومتابعة الأداء وتقديم الدعم والتحسين وفق الاتفاق." },
              ]
            : [
                { t: "Requirements study", d: "Understand the organization's goals, challenges, operations, users, systems and current architecture." },
                { t: "Scope definition", d: "Define deliverables, requirements, responsibilities, phases and timelines." },
                { t: "Solution design", d: "Prepare the technical design and the integration, delivery and testing plan." },
                { t: "Development or supply", d: "Develop software or prepare the required systems, equipment and services." },
                { t: "Delivery & integration", d: "Install, operate and integrate the solution with existing systems, data and environment." },
                { t: "Testing & training", d: "Test functionality and performance and train users and technical teams." },
                { t: "Go-live & support", d: "Launch, monitor performance, and provide support and improvement per agreement." },
              ]
          ).map((step, i) => (
            <li key={i} className="relative rounded-xl border border-border bg-card p-4 md:p-5 shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <div className="mt-1 font-bold text-[#0B3D2E]">{step.t}</div>
              <p className="mt-1 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
                {step.d}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          لماذا أربتك؟
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "لماذا تختار المؤسسات خدمات أربتك؟"
            : "Why organizations choose ARABTEC services"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              icon: BadgeCheck,
              h: { ar: "خبرة تقنية ممتدة", en: "Extensive technology expertise" },
              d: {
                ar: "خبرة منذ عام 1996 في الشبكات والاتصال والبنية التحتية والأنظمة والبرمجيات والحلول المتكاملة.",
                en: "Expertise since 1996 in networks, connectivity, infrastructure, systems, software and integrated solutions.",
              },
            },
            {
              icon: Users,
              h: { ar: "نقطة مسؤولية موحدة", en: "Single point of accountability" },
              d: {
                ar: "إدارة مراحل متعددة من المشروع من خلال فريق وجهة اتصال واضحة.",
                en: "Managing multiple project phases through one team and a clear point of contact.",
              },
            },
            {
              icon: Sliders,
              h: { ar: "حلول قابلة للتخصيص", en: "Customizable solutions" },
              d: {
                ar: "تصميم الحل وفق عمليات المؤسسة وبيئتها التقنية بدلاً من فرض نموذج موحد.",
                en: "Designing the solution around your processes and environment rather than forcing a single model.",
              },
            },
            {
              icon: LayersIcon,
              h: { ar: "تكامل بين التخصصات", en: "Cross-disciplinary integration" },
              d: {
                ar: "الجمع بين البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والأنظمة الذكية.",
                en: "Combining software, ERP, AI, cloud, networks and smart systems.",
              },
            },
            {
              icon: Headphones,
              h: { ar: "تنفيذ ودعم", en: "Delivery & support" },
              d: {
                ar: "تغطية مراحل التحليل والتصميم والتنفيذ والتكامل والتدريب والدعم بحسب نطاق العقد.",
                en: "Covering analysis, design, delivery, integration, training and support per contract scope.",
              },
            },
            {
              icon: Sparkles,
              h: { ar: "التركيز على القيمة المؤسسية", en: "Focus on enterprise value" },
              d: {
                ar: "توجيه التقنية نحو تحسين الأداء وتقليل العمل اليدوي ورفع جودة الخدمة واستمرارية العمليات.",
                en: "Directing technology toward improved performance, less manual work, higher service quality and continuity.",
              },
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.h.en} className="p-5 md:p-6 border-border/60 shadow-sm bg-card">
                <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-[#0B3D2E]">{l(c.h)}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] text-slate-700 leading-relaxed">{l(c.d)}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          دعوة لاتخاذ إجراء
          ============================================================ */}
      <section className="relative overflow-hidden bg-[#0B3D2E] text-white">
        <div className="relative container-page py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl text-white font-bold">
            {isAr
              ? "ما الخدمة التقنية التي تحتاجها مؤسستكم؟"
              : "Which technology service does your organization need?"}
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-white/90 text-[16px] md:text-lg leading-relaxed">
            {isAr
              ? "شاركوا فريق أربتك بأهداف المشروع والتحديات الحالية، وسنعمل معكم على تحديد الخدمات المناسبة وتصميم نطاق عمل يتوافق مع احتياجات المؤسسة وبيئتها التقنية."
              : "Share your project goals and current challenges with the ARABTEC team, and we will work with you to determine the right services and design a scope that fits your organization and technology environment."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[#0B3D2E] hover:bg-slate-100 transition"
            >
              {isAr ? "اطلب استشارة تقنية" : "Request a consultation"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
            >
              {isAr ? "اطلب عرضًا فنيًا" : "Request a technical proposal"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          الأسئلة الشائعة
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن خدمات أربتك التقنية"
            : "Frequently asked questions about ARABTEC technology services"}
        />

        <div className="mt-6">
          <FAQ
            items={[
              {
                q: { ar: "ما الخدمات التقنية التي تقدمها أربتك؟", en: "What technology services does ARABTEC provide?" },
                a: {
                  ar: "تقدم أربتك حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، السحابة والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
                  en: "ARABTEC provides AI & AI Agents, ERP & business applications, software development & system integration, cloud & infrastructure, networks & connectivity, and surveillance, attendance & access control.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك خدمات تقنية للجهات الحكومية؟", en: "Does ARABTEC provide technology services for government entities?" },
                a: {
                  ar: "نعم، يمكن لأربتك تصميم وتنفيذ حلول تقنية تناسب الجهات الحكومية، بما يشمل الخدمات الرقمية، أتمتة الإجراءات، الذكاء الاصطناعي، تكامل الأنظمة، البنية التحتية والشبكات، وفق متطلبات المشروع.",
                  en: "Yes — ARABTEC can design and deliver technology solutions suited to government entities, including digital services, process automation, AI, system integration, infrastructure and networks, per project requirements.",
                },
              },
              {
                q: { ar: "هل يمكن دمج أكثر من خدمة في مشروع واحد؟", en: "Can multiple services be combined in one project?" },
                a: {
                  ar: "نعم، يمكن دمج البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والأنظمة الذكية ضمن حل مؤسسي متكامل.",
                  en: "Yes — software, ERP, AI, cloud, networks and smart systems can be combined into an integrated enterprise solution.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك حلولاً مخصصة للمؤسسات؟", en: "Does ARABTEC provide tailored solutions?" },
                a: {
                  ar: "نعم، تبدأ أربتك بدراسة احتياجات المؤسسة وعملياتها وأنظمتها الحالية، ثم تصمم أو تخصص الحل وفق نطاق العمل المعتمد.",
                  en: "Yes — ARABTEC starts by studying the organization's needs, operations and current systems, then designs or customizes the solution per approved scope.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك خدمات تطوير البرمجيات وتكامل الأنظمة؟", en: "Does ARABTEC provide software development and system integration?" },
                a: {
                  ar: "نعم، تشمل الخدمات تطوير الأنظمة المؤسسية وتطبيقات الويب والهاتف وسطح المكتب والبوابات الرقمية وواجهات API وتحديث الأنظمة القديمة.",
                  en: "Yes — services include enterprise systems, web, mobile and desktop applications, digital portals, APIs and legacy system modernization.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك أنظمة ERP؟", en: "Does ARABTEC provide ERP systems?" },
                a: {
                  ar: "نعم، تقدم أربتك أنظمة ERP وتطبيقات أعمال تشمل المالية والموارد البشرية والمشتريات والمخزون والمبيعات والأصول والمشاريع والتكاملات.",
                  en: "Yes — ARABTEC provides ERP and business applications covering finance, HR, procurement, inventory, sales, assets, projects and integrations.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك حلول Agents AI؟", en: "Does ARABTEC provide AI Agents solutions?" },
                a: {
                  ar: "نعم، يمكن تطوير وكلاء ذكاء اصطناعي لخدمة الموظفين والمتعاملين، والبحث في الوثائق، وأتمتة المهام وربطها بالأنظمة المؤسسية.",
                  en: "Yes — AI agents can be developed to serve employees and customers, search documents, automate tasks and integrate with enterprise systems.",
                },
              },
              {
                q: { ar: "هل تشمل الخدمات التنفيذ والدعم؟", en: "Do services include delivery and support?" },
                a: {
                  ar: "يمكن أن يشمل نطاق الخدمة التحليل والتصميم والتطوير أو التوريد والتنفيذ والتكامل والاختبار والتدريب والدعم، وفق الاتفاق والعقد.",
                  en: "Scope can include analysis, design, development or supply, delivery, integration, testing, training and support — per agreement and contract.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك حلول الشبكات وربط الفروع؟", en: "Does ARABTEC provide network and multi-site solutions?" },
                a: {
                  ar: "نعم، تشمل الخدمات تصميم وتنفيذ شبكات LAN و WAN، الألياف الضوئية، الشبكات اللاسلكية، الكابلات الهيكلية، VoIP وربط المواقع والفروع.",
                  en: "Yes — services include design and delivery of LAN & WAN networks, fiber optics, wireless, structured cabling, VoIP and multi-site linking.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك أنظمة حضور ومراقبة وتحكم بالدخول؟", en: "Does ARABTEC provide attendance, surveillance and access control?" },
                a: {
                  ar: "نعم، تشمل الخدمات كاميرات المراقبة، أنظمة الحضور والانصراف، البصمة، التعرف على الوجه، RFID وأنظمة التحكم بالدخول.",
                  en: "Yes — services include surveillance cameras, attendance systems, biometrics, face recognition, RFID and access control systems.",
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
                name: "هل يمكن دمج أكثر من خدمة في مشروع واحد؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن دمج البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والأنظمة الذكية ضمن حل مؤسسي متكامل.",
                },
              },
              {
                "@type": "Question",
                name: "هل تقدم أربتك حلول Agents AI؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن تطوير وكلاء ذكاء اصطناعي لخدمة الموظفين والمتعاملين، والبحث في الوثائق، وأتمتة المهام وربطها بالأنظمة المؤسسية.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}