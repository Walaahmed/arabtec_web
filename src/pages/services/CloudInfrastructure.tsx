import { Link } from "@/lib/router";
import { getService } from "@/lib/services-data";
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
import { useI18n } from "@/lib/i18n";
import {
  ArrowLeft,
  Server,
  HardDrive,
  Cloud,
  CloudUpload,
  DatabaseBackup,
  ShieldCheck,
  Activity,
  Layers,
  Building2,
  Landmark,
  Users,
  Boxes,
  Plug,
  RefreshCw,
  Network,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// الصور
import heroImg from "@/assets/enterprise-cloud-data-center.webp";
import cloudImg from "@/assets/enterprise-hybrid-cloud-solutions.webp";
import govCloudImg from "@/assets/government-cloud-infrastructure.webp";
import serversImg from "@/assets/enterprise-servers-storage.webp";
import dcImg from "@/assets/enterprise-data-center-design.jpg";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

export default function CloudInfrastructurePage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";
  const s = getService("cloud-infrastructure");
  if (!s) return null;

  return (
    <>
      {/* ============================================================
          JSON-LD
          ============================================================ */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title.ar,
          description: s.seoDesc.ar,
          provider: { "@type": "Organization", name: "ARABTEC" },
          url: s.path,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "الرئيسية", item: "/" },
            { "@type": "ListItem", position: 2, name: "الخدمات", item: "/services" },
            { "@type": "ListItem", position: 3, name: s.title.ar, item: s.path },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faqs.map((f) => ({
            "@type": "Question",
            name: f.q.ar,
            acceptedAnswer: { "@type": "Answer", text: f.a.ar },
          })),
        }}
      />

      {/* ============================================================
          1. HERO
          ============================================================ */}
      <Section>
        <Breadcrumbs
          items={[
            { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
            { label: { ar: "الخدمات", en: "Services" }, to: "/services" },
            { label: s.title },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={
                isAr
                  ? "بيئة سحابية ومركز بيانات متكامل للمؤسسات والجهات الحكومية"
                  : "Integrated cloud environment and data center for enterprises and government"
              }
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              {isAr ? "بنية تقنية مرنة وقابلة للتوسع" : "Flexible, scalable technology infrastructure"}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "حلول السحابة والبنية التحتية التقنية للجهات الحكومية والمؤسسات"
                : "Cloud and IT infrastructure solutions for government and enterprises"}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isAr
                ? "تساعد أربتك الجهات الحكومية والمؤسسات على بناء وتحديث بيئاتها التقنية من خلال حلول متكاملة تشمل الحوسبة السحابية، الخوادم، التخزين، مراكز البيانات، النسخ الاحتياطي، استمرارية الأعمال وتجهيز مواقع العمل."
                : "ARABTEC helps government entities and enterprises build and modernize their technology environments through integrated solutions covering cloud computing, servers, storage, data centers, backup, business continuity and workplace setup."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "نبدأ بدراسة البنية الحالية واحتياجات الأنظمة والمستخدمين، ثم نصمم بيئة تقنية قابلة للتوسع تدعم استقرار الخدمات، تحسين الأداء، إدارة الموارد وتهيئة المؤسسة للتحول الرقمي وتطبيقات الأعمال والذكاء الاصطناعي."
                : "We start by studying the current environment and the needs of systems and users, then design a scalable technology environment that supports service stability, performance improvement, resource management and readiness for digital transformation, business applications and AI."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تشمل خدماتنا التقييم والتصميم والتوريد والتركيب والإعداد والاختبار والترحيل والتشغيل والدعم، وفق متطلبات المشروع والسياسات والبيئة التقنية المعتمدة لدى المؤسسة."
                : "Our services cover assessment, design, supply, installation, configuration, testing, migration, operations and support — according to the organization's requirements, policies and approved technology environment."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">
                {isAr ? "اطلب استشارة للبنية التحتية" : "Request an infrastructure consultation"}
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                {isAr ? "اطلب تقييمًا للبيئة التقنية" : "Request a technology assessment"}
              </CTAButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {(isAr
                ? ["الحوسبة السحابية", "الخوادم والتخزين", "مراكز البيانات", "النسخ الاحتياطي", "استمرارية الأعمال", "التعافي من الكوارث", "التشغيل والدعم"]
                : ["Cloud computing", "Servers & storage", "Data centers", "Backup", "Business continuity", "Disaster recovery", "Operations & support"]
              ).map((x) => (
                <span
                  key={x}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          2. ما المقصود بالبنية التحتية التقنية؟
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "الأساس الذي تعتمد عليه الأنظمة والخدمات الرقمية"
            : "The foundation that digital systems and services rely on"}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "تشمل البنية التحتية التقنية الموارد والأنظمة التي تعتمد عليها التطبيقات والبيانات والمستخدمون، مثل الخوادم، التخزين، أنظمة التشغيل، الشبكات، النسخ الاحتياطي، مراكز البيانات والبيئات السحابية."
                : "Technology infrastructure covers the resources and systems that applications, data and users rely on — servers, storage, operating systems, networks, backup, data centers and cloud environments."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "كلما كانت البنية التقنية مصممة ومدارة بصورة صحيحة، أصبحت المؤسسة أكثر قدرة على تشغيل أنظمتها بكفاءة، إضافة خدمات جديدة، دعم المستخدمين والتوسع دون تعقيد غير ضروري."
                : "The better the infrastructure is designed and managed, the more capable the organization is to run its systems efficiently, add new services, support users and scale without unnecessary complexity."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "مكونات البنية التحتية التقنية" : "Infrastructure components"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["الخوادم", "أنظمة التخزين", "مراكز البيانات", "أنظمة التشغيل", "الحوسبة السحابية", "النسخ الاحتياطي", "التعافي من الأعطال", "المراقبة والإدارة", "أجهزة المستخدمين", "التراخيص والمنصات", "الاتصال والشبكات", "بيئات التطوير والاختبار والإنتاج"]
                : ["Servers", "Storage systems", "Data centers", "Operating systems", "Cloud computing", "Backup", "Disaster recovery", "Monitoring & management", "End-user devices", "Licenses & platforms", "Connectivity & networks", "Dev/test/prod environments"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* مخطط طبقات */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold mb-4 text-sm">
              {isAr ? "مخطط الطبقات" : "Layered architecture"}
            </h3>
            <div className="flex flex-col items-center gap-3 text-xs">
              {(isAr
                ? ["المستخدمون والتطبيقات", "الخوادم والمنصات", "التخزين والنسخ الاحتياطي", "السحابة ومركز البيانات", "الشبكات والاتصال"]
                : ["Users & applications", "Servers & platforms", "Storage & backup", "Cloud & data center", "Networks & connectivity"]
              ).map((layer, i, arr) => (
                <div key={layer} className="w-full flex flex-col items-center gap-2">
                  <div className="w-full rounded-lg border border-border bg-background px-4 py-2 text-center">
                    {layer}
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowLeft className="h-3.5 w-3.5 text-muted-foreground rotate-[-90deg]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          3. خدمات السحابة والبنية التحتية — 12 خدمة
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "خدمات متكاملة من التقييم إلى التشغيل"
            : "Integrated services from assessment to operations"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              icon: Activity,
              hAr: "تقييم البنية التحتية التقنية",
              hEn: "IT infrastructure assessment",
              descAr: "مراجعة البيئة الحالية وتحديد نقاط القوة والتحديات والاحتياجات التشغيلية وفرص التحديث.",
              descEn: "Reviewing the current environment and identifying strengths, challenges, operational needs and modernization opportunities.",
              itemsAr: ["حصر الخوادم والأنظمة", "مراجعة التخزين", "تحليل أحمال التطبيقات", "مراجعة النسخ الاحتياطي", "تقييم أنظمة التشغيل", "مراجعة بيئة المستخدمين", "تحليل قابلية التوسع", "تحديد الأنظمة القديمة", "مراجعة احتياجات الاستمرارية", "إعداد توصيات وخارطة طريق"],
              itemsEn: ["Servers & systems inventory", "Storage review", "Application load analysis", "Backup review", "OS assessment", "User environment review", "Scalability analysis", "Legacy system identification", "Continuity needs review", "Recommendations & roadmap"],
            },
            {
              icon: Layers,
              hAr: "تصميم البنية التقنية",
              hEn: "Technology architecture design",
              descAr: "إعداد تصميم فني يحدد مكونات البيئة التقنية وتوزيع الموارد وآلية التشغيل والتوسع.",
              descEn: "Preparing a technical design defining environment components, resource distribution and operation/expansion mechanisms.",
              itemsAr: ["بنية الخوادم", "تصميم التخزين", "تصميم بيئة السحابة", "بيئات الاختبار والإنتاج", "النسخ الاحتياطي", "التعافي من الكوارث", "المراقبة والإدارة", "خطة التوسع", "التكامل مع الشبكات", "متطلبات التطبيقات"],
              itemsEn: ["Server architecture", "Storage design", "Cloud environment design", "Test & production environments", "Backup", "Disaster recovery", "Monitoring & management", "Expansion plan", "Network integration", "Application requirements"],
            },
            {
              icon: Server,
              hAr: "الخوادم المؤسسية",
              hEn: "Enterprise servers",
              descAr: "توريد وتركيب وإعداد الخوادم لتشغيل تطبيقات المؤسسة وقواعد البيانات والخدمات الرقمية.",
              descEn: "Supply, installation and configuration of servers to run enterprise applications, databases and digital services.",
              itemsAr: ["خوادم فعلية", "خوادم افتراضية", "خوادم التطبيقات", "خوادم قواعد البيانات", "خوادم الملفات", "خوادم الهوية والمستخدمين", "خوادم الاختبار والتطوير", "خوادم النسخ الاحتياطي", "إعداد أنظمة Linux و Windows", "إدارة الموارد والأداء"],
              itemsEn: ["Physical servers", "Virtual servers", "Application servers", "Database servers", "File servers", "Identity & user servers", "Test & dev servers", "Backup servers", "Linux & Windows setup", "Resource & performance management"],
            },
            {
              icon: HardDrive,
              hAr: "حلول التخزين المؤسسي",
              hEn: "Enterprise storage solutions",
              descAr: "تصميم وتنفيذ حلول تخزين تناسب حجم البيانات والتطبيقات ومتطلبات الأداء والتوسع.",
              descEn: "Designing and implementing storage solutions that fit data volume, applications, performance and scalability requirements.",
              itemsAr: ["التخزين المركزي", "التخزين الشبكي", "مساحات تخزين للتطبيقات", "تخزين قواعد البيانات", "أرشفة الملفات", "توسعة السعة التخزينية", "إدارة الأداء", "توزيع مساحات التخزين", "نسخ البيانات", "مراجعة استخدام السعة"],
              itemsEn: ["Central storage", "Network storage", "Application storage", "Database storage", "File archiving", "Storage capacity expansion", "Performance management", "Storage allocation", "Data copies", "Capacity usage review"],
            },
            {
              icon: Cloud,
              hAr: "الحوسبة السحابية",
              hEn: "Cloud computing",
              descAr: "تصميم وتشغيل بيئات سحابية تساعد المؤسسة على إدارة التطبيقات والموارد بمرونة.",
              descEn: "Designing and operating cloud environments that help the organization manage applications and resources flexibly.",
              itemsAr: ["السحابة العامة", "السحابة الخاصة", "السحابة الهجينة", "البنية التحتية كخدمة", "المنصات السحابية", "الاستضافة السحابية", "بيئات الاختبار والتطوير", "التوسع عند الحاجة", "إدارة الموارد السحابية", "الربط بالأنظمة الداخلية"],
              itemsEn: ["Public cloud", "Private cloud", "Hybrid cloud", "Infrastructure as a service", "Cloud platforms", "Cloud hosting", "Test & dev environments", "On-demand scaling", "Cloud resource management", "Integration with internal systems"],
            },
            {
              icon: CloudUpload,
              hAr: "ترحيل الأنظمة إلى السحابة",
              hEn: "Migration to cloud",
              descAr: "نقل التطبيقات والبيانات والخدمات إلى بيئة سحابية أو هجينة وفق خطة مرحلية تقلل تأثير الانتقال على العمليات.",
              descEn: "Moving applications, data and services to a cloud or hybrid environment per a phased plan that reduces impact on operations.",
              itemsAr: ["تقييم جاهزية الأنظمة", "تصنيف التطبيقات", "تحديد أولوية الترحيل", "تصميم البيئة المستهدفة", "ترحيل البيانات", "ترحيل التطبيقات", "اختبار الأداء", "اختبار التكامل", "خطة العودة عند الحاجة", "دعم ما بعد الانتقال"],
              itemsEn: ["System readiness assessment", "Application classification", "Migration priority", "Target environment design", "Data migration", "Application migration", "Performance testing", "Integration testing", "Rollback plan", "Post-migration support"],
            },
            {
              icon: DatabaseBackup,
              hAr: "النسخ الاحتياطي واستعادة البيانات",
              hEn: "Backup & data recovery",
              descAr: "تصميم حلول تساعد المؤسسة على الاحتفاظ بنسخ من البيانات والأنظمة واستعادتها عند الحاجة.",
              descEn: "Designing solutions that help the organization keep copies of data and systems and restore them when needed.",
              itemsAr: ["تحديد مصادر البيانات", "إعداد سياسات النسخ الاحتياطي", "جدولة النسخ", "نسخ قواعد البيانات", "نسخ الملفات والأنظمة", "النسخ داخل الموقع أو خارجه", "مراقبة نجاح النسخ", "اختبار الاستعادة", "الاحتفاظ بالإصدارات", "تقارير النسخ الاحتياطي"],
              itemsEn: ["Identifying data sources", "Backup policy setup", "Backup scheduling", "Database backups", "File & system backups", "On-site or off-site backup", "Backup success monitoring", "Restore testing", "Version retention", "Backup reporting"],
            },
            {
              icon: ShieldCheck,
              hAr: "التعافي من الكوارث",
              hEn: "Disaster recovery",
              descAr: "إعداد بيئة وخطة تساعد الأنظمة والخدمات الأساسية على الاستعادة بعد حدوث عطل كبير أو توقف في الموقع الرئيسي.",
              descEn: "Preparing an environment and plan that help critical systems and services recover after a major failure or loss of the primary site.",
              itemsAr: ["تحديد الأنظمة الحرجة", "تحليل أثر توقف الخدمات", "تحديد أولويات الاستعادة", "تصميم الموقع البديل", "نسخ البيانات والأنظمة", "إعداد خطط التحويل", "اختبار الاستعادة", "توثيق الإجراءات", "تحديد الأدوار والمسؤوليات", "تحديث الخطة بصورة دورية"],
              itemsEn: ["Critical systems identification", "Service outage impact analysis", "Recovery priority", "Alternate site design", "Data & system copies", "Failover plans", "Recovery testing", "Procedure documentation", "Roles & responsibilities", "Regular plan updates"],
            },
            {
              icon: Boxes,
              hAr: "استمرارية الأعمال التقنية",
              hEn: "Technology business continuity",
              descAr: "تصميم إجراءات وبيئات تساعد المؤسسة على استمرار الخدمات الأساسية أو استعادتها ضمن أولويات واضحة.",
              descEn: "Designing procedures and environments that help the organization maintain or restore core services with clear priorities.",
              itemsAr: ["تحديد الخدمات الأساسية", "تحليل المخاطر التشغيلية", "تحديد الاعتماد بين الأنظمة", "إعداد سيناريوهات الاستمرارية", "خطط التواصل والتصعيد", "خطة استعادة الخدمات", "تحديد فرق المسؤولية", "اختبارات دورية", "مراجعة النتائج", "تحديث الخطط"],
              itemsEn: ["Identifying core services", "Operational risk analysis", "System dependency mapping", "Continuity scenarios", "Communication & escalation", "Service restoration plan", "Responsibility teams", "Periodic testing", "Results review", "Plan updates"],
            },
            {
              icon: Building2,
              hAr: "مراكز البيانات",
              hEn: "Data centers",
              descAr: "تصميم وتجهيز وتحديث البيئات التي تستضيف الخوادم والتخزين والأنظمة المركزية.",
              descEn: "Designing, equipping and modernizing the environments hosting servers, storage and central systems.",
              itemsAr: ["تخطيط مساحة مركز البيانات", "الخزائن والرفوف", "توزيع الخوادم والمعدات", "إدارة الكابلات", "التغذية الكهربائية", "مصادر الطاقة الاحتياطية", "التبريد", "المراقبة", "التوثيق والترقيم", "تجهيز غرف الخوادم"],
              itemsEn: ["Data center space planning", "Racks & cabinets", "Server & equipment layout", "Cable management", "Electrical supply", "Backup power sources", "Cooling", "Monitoring", "Documentation & labeling", "Server room setup"],
            },
            {
              icon: Layers,
              hAr: "الافتراضية وإدارة الموارد",
              hEn: "Virtualization & resource management",
              descAr: "استخدام تقنيات الافتراضية لتشغيل عدة خوادم وخدمات على بنية مرنة وقابلة للإدارة.",
              descEn: "Using virtualization to run multiple servers and services on a flexible, manageable architecture.",
              itemsAr: ["إنشاء خوادم افتراضية", "توزيع الموارد", "إدارة المعالجات والذاكرة", "تجميع الخوادم", "نقل الأنظمة الافتراضية", "إدارة البيئات", "دعم التوسع", "تحسين الاستفادة من الموارد", "إنشاء بيئات اختبار", "متابعة الأداء"],
              itemsEn: ["Creating virtual servers", "Resource allocation", "CPU & memory management", "Server clustering", "Virtual system migration", "Environment management", "Scaling support", "Resource utilization optimization", "Creating test environments", "Performance monitoring"],
            },
            {
              icon: Activity,
              hAr: "تشغيل وصيانة البنية التحتية",
              hEn: "Infrastructure operations & maintenance",
              descAr: "إدارة ومتابعة البيئة التقنية لمعالجة الأعطال وتنفيذ التحديثات والمحافظة على استقرار الأنظمة.",
              descEn: "Managing and monitoring the technology environment to handle faults, apply updates and maintain system stability.",
              itemsAr: ["مراقبة الخوادم", "مراقبة التخزين", "متابعة استخدام الموارد", "إدارة أنظمة التشغيل", "تنفيذ التحديثات", "معالجة الأعطال", "إدارة النسخ الاحتياطي", "إعداد التقارير", "إدارة الطلبات الفنية", "الدعم وفق اتفاقية الخدمة"],
              itemsEn: ["Server monitoring", "Storage monitoring", "Resource usage tracking", "OS management", "Applying updates", "Fault handling", "Backup management", "Reporting", "Technical request management", "SLA-based support"],
            },
          ].map((svc) => {
            const Icon = svc.icon;
            return (
              <Card key={svc.hEn}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">{isAr ? svc.hAr : svc.hEn}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? svc.descAr : svc.descEn}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {(isAr ? svc.itemsAr : svc.itemsEn).map((x) => (
                    <li key={x} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          4. الحوسبة السحابية للمؤسسات
          ============================================================ */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img
            src={cloudImg}
            alt={isAr
              ? "حلول السحابة العامة والخاصة والهجينة للمؤسسات"
              : "Public, private and hybrid cloud solutions for enterprises"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "بيئات سحابية تدعم المرونة والتوسع"
                : "Cloud environments supporting flexibility and scaling"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تساعد الحوسبة السحابية المؤسسات على تشغيل التطبيقات والموارد التقنية ضمن بيئات قابلة للتوسع والإدارة، مع إمكانية توزيع الخدمات بين السحابة والأنظمة الداخلية وفق احتياجات المشروع."
                : "Cloud computing helps organizations run applications and technology resources in scalable, manageable environments — with the ability to distribute services between cloud and internal systems according to project needs."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "يتم اختيار النموذج السحابي وفق طبيعة التطبيقات، البيانات، عدد المستخدمين، متطلبات التكامل، الأداء والسياسات الداخلية للمؤسسة."
                : "The cloud model is chosen based on the applications, data, number of users, integration, performance and the organization's internal policies."}
            </p>

            <div className="mt-6 space-y-4">
              {(isAr
                ? [
                    { t: "السحابة العامة", d: "استخدام موارد سحابية مشتركة تقدمها جهة مزودة للخدمة ضمن اشتراك أو استهلاك محدد." },
                    { t: "السحابة الخاصة", d: "إنشاء بيئة سحابية مخصصة للمؤسسة داخل مركز البيانات أو ضمن بيئة استضافة مخصصة." },
                    { t: "السحابة الهجينة", d: "دمج الخدمات الداخلية والسحابية بحيث تعمل بعض الأنظمة داخل المؤسسة وأخرى على السحابة." },
                    { t: "البيئة متعددة السحابات", d: "استخدام أكثر من مزود أو منصة سحابية وفق متطلبات الأنظمة والخدمات." },
                  ]
                : [
                    { t: "Public cloud", d: "Using shared cloud resources provided by a service provider within a specific subscription or consumption model." },
                    { t: "Private cloud", d: "Creating a dedicated cloud environment for the organization inside a data center or dedicated hosting environment." },
                    { t: "Hybrid cloud", d: "Combining internal and cloud services so some systems run on-premise and others in the cloud." },
                    { t: "Multi-cloud environment", d: "Using more than one cloud provider or platform based on system and service requirements." },
                  ]
              ).map((item) => (
                <div key={item.t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">{item.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          5. حلول السحابة للجهات الحكومية
          ============================================================ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-deep)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-deep)] mb-3">
              <Landmark className="h-3.5 w-3.5" />
              {isAr ? "للجهات الحكومية" : "For government entities"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "بنية سحابية تدعم الخدمات الحكومية الرقمية"
                : "Cloud infrastructure supporting digital government services"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "يمكن للجهات الحكومية الاستفادة من البيئات السحابية لتشغيل التطبيقات، تطوير الخدمات، إدارة الموارد التقنية ودعم التوسع، وفق السياسات والمتطلبات التنظيمية المعتمدة."
                : "Government entities can benefit from cloud environments to run applications, develop services, manage technology resources and support expansion — per approved policies and regulatory requirements."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "يتم تصميم الحل بعد دراسة نوع البيانات، مكان استضافة الأنظمة، احتياجات التكامل، مستوى التوفر وأولويات استمرارية الخدمة."
                : "The solution is designed after studying data type, system hosting location, integration needs, availability level and service continuity priorities."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "حالات الاستخدام" : "Use cases"}
            </h3>

            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "استضافة البوابات والخدمات الرقمية", d: "تشغيل بوابات الخدمات وتطبيقات الموظفين والمتعاملين ضمن بيئة قابلة للتوسع." },
                    { t: "بيئات التطوير والاختبار", d: "توفير بيئات منفصلة لتطوير واختبار الأنظمة قبل إطلاقها." },
                    { t: "تشغيل أنظمة الأعمال", d: "استضافة تطبيقات ERP والأنظمة المؤسسية وفق متطلبات الأداء والتكامل." },
                    { t: "دعم منصات الذكاء الاصطناعي", d: "تجهيز البنية المطلوبة لتشغيل حلول AI Agents ومعالجة البيانات والوثائق." },
                    { t: "النسخ الاحتياطي والتعافي", d: "توفير بيئة بديلة لحفظ النسخ واستعادة الخدمات عند الحاجة." },
                    { t: "ربط الجهات والمواقع", d: "ربط البيئة السحابية بمواقع الجهة وأنظمتها الداخلية." },
                  ]
                : [
                    { t: "Hosting portals & digital services", d: "Running service portals and employee/customer apps in a scalable environment." },
                    { t: "Dev & test environments", d: "Providing separate environments for developing and testing systems before launch." },
                    { t: "Running business systems", d: "Hosting ERP and enterprise systems per performance and integration requirements." },
                    { t: "Supporting AI platforms", d: "Preparing the infrastructure needed to run AI Agents, data processing and documents." },
                    { t: "Backup & recovery", d: "Providing an alternate environment for backup and service recovery when needed." },
                    { t: "Connecting entities & sites", d: "Connecting the cloud environment to the entity's sites and internal systems." },
                  ]
              ).map((item) => (
                <div key={item.t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">{item.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={govCloudImg}
            alt={isAr
              ? "بنية سحابية لتشغيل الخدمات والأنظمة الحكومية"
              : "Cloud infrastructure for running government services and systems"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </Section>

      {/* ============================================================
          6. الخوادم والتخزين
          ============================================================ */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img
            src={serversImg}
            alt={isAr
              ? "حلول الخوادم والتخزين المؤسسي لتشغيل التطبيقات والبيانات"
              : "Enterprise servers and storage solutions for running applications and data"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "موارد تقنية تدعم أداء الأنظمة واستقرارها"
                : "Technology resources supporting system performance and stability"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تعتمد التطبيقات وقواعد البيانات والخدمات المؤسسية على خوادم وأنظمة تخزين مصممة وفق الأحمال الحالية وخطط النمو المستقبلية."
                : "Enterprise applications, databases and services rely on servers and storage designed for current workloads and future growth plans."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "نساعد المؤسسة على تحديد السعة والموارد المناسبة، وإعداد البيئات ومراقبة الأداء وتنظيم الاستفادة من الخوادم والتخزين."
                : "We help the organization determine the right capacity and resources, set up environments, monitor performance and organize server and storage utilization."}
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div>
                <h3 className="font-bold mb-3">{isAr ? "الخوادم" : "Servers"}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {(isAr
                    ? ["خوادم التطبيقات", "خوادم قواعد البيانات", "خوادم الملفات", "خوادم الويب", "خوادم الهوية", "خوادم البريد والخدمات", "خوادم الاختبار", "خوادم النسخ الاحتياطي"]
                    : ["Application servers", "Database servers", "File servers", "Web servers", "Identity servers", "Mail & service servers", "Test servers", "Backup servers"]
                  ).map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-3">{isAr ? "التخزين" : "Storage"}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {(isAr
                    ? ["تخزين الملفات", "تخزين قواعد البيانات", "التخزين المركزي", "التخزين الشبكي", "تخزين النسخ الاحتياطية", "أرشفة البيانات", "توسعة السعة", "إدارة الأداء"]
                    : ["File storage", "Database storage", "Central storage", "Network storage", "Backup storage", "Data archiving", "Capacity expansion", "Performance management"]
                  ).map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          7. النسخ الاحتياطي واستعادة البيانات
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "خطط واضحة لحماية استمرارية البيانات"
            : "Clear plans for data continuity protection"}
          intro={
            isAr
              ? "لا يكفي إنشاء نسخ احتياطية؛ بل يجب التأكد من نجاحها وإمكانية استعادة البيانات والأنظمة منها عند الحاجة. تحدد خطة النسخ الاحتياطي وفق أهمية البيانات، معدل تغيرها، حجمها، مدة الاحتفاظ بها والوقت المطلوب لاستعادتها."
              : "Creating backups isn't enough — their success and the ability to restore data and systems from them must be verified. The backup plan is defined by data importance, change rate, size, retention period and required restore time."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["تحديد البيانات الحرجة", "تحديد عدد مرات النسخ", "تحديد مكان حفظ النسخ", "تحديد فترة الاحتفاظ", "تشفير النسخ عند الحاجة", "مراقبة نجاح النسخ", "اختبار الاستعادة", "توثيق إجراءات الاسترجاع", "تحديد المسؤوليات", "إعداد تقارير دورية"]
            : ["Identifying critical data", "Defining backup frequency", "Defining backup location", "Defining retention period", "Encrypting backups when needed", "Monitoring backup success", "Restore testing", "Documenting restore procedures", "Defining responsibilities", "Periodic reporting"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 max-w-3xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isAr
                ? "يجب اختبار استعادة البيانات بصورة دورية؛ لأن نجاح عملية النسخ وحده لا يضمن إمكانية الاسترجاع الكامل."
                : "Data restore must be tested regularly — because backup success alone doesn't guarantee full recoverability."}
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          8. استمرارية الأعمال والتعافي من الكوارث
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "جاهزية تقنية للتعامل مع الأعطال والتوقفات"
            : "Technology readiness for failures and outages"}
          intro={
            isAr
              ? "تساعد خطط استمرارية الأعمال والتعافي من الكوارث المؤسسة على تحديد كيفية استعادة الأنظمة والخدمات عند حدوث أعطال كبيرة أو فقدان للموقع الرئيسي. تعتمد الخطة على أولوية كل نظام، اعتماد الخدمات على بعضها، حجم البيانات ومتطلبات المؤسسة التشغيلية."
              : "Business continuity and disaster recovery plans help the organization define how to restore systems and services after major failures or loss of the primary site. The plan depends on each system's priority, service dependencies, data volume and operational requirements."}
        />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div>
            <h3 className="font-bold mb-3">{isAr ? "أهداف الاستعادة" : "Recovery objectives"}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["الوقت المستهدف لاستعادة الخدمة", "مقدار البيانات المقبول فقدانها", "ترتيب الأنظمة حسب الأولوية", "الموقع أو البيئة البديلة", "آلية التحويل والاسترجاع", "الفرق والمسؤوليات"]
                : ["Target service recovery time", "Acceptable data loss", "System priority ordering", "Alternate site or environment", "Failover & recovery mechanism", "Teams & responsibilities"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">{isAr ? "اختبارات الاستمرارية" : "Continuity tests"}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["اختبار استعادة البيانات", "اختبار تشغيل الأنظمة البديلة", "اختبار التحويل بين البيئات", "اختبار خطط التواصل", "مراجعة زمن الاستعادة", "توثيق الملاحظات", "تحديث الخطة"]
                : ["Data restore testing", "Alternate system operation testing", "Environment failover testing", "Communication plan testing", "Recovery time review", "Notes documentation", "Plan updates"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* مخطط الاستعادة */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 overflow-x-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium min-w-max">
            {(isAr
              ? ["الموقع الرئيسي", "عطل", "النسخ والبيئة البديلة", "استعادة", "عودة الخدمات الأساسية"]
              : ["Primary site", "Failure", "Backup & alternate environment", "Recovery", "Core services restored"]
            ).map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-lg border border-border bg-background px-4 py-2 whitespace-nowrap">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <ArrowLeft className="h-4 w-4 text-muted-foreground rtl:rotate-180" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          9. مراكز البيانات وغرف الخوادم
          ============================================================ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "تجهيز بيئات تشغيل منظمة وقابلة للإدارة"
                : "Preparing organized, manageable operating environments"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تحتاج غرف الخوادم ومراكز البيانات إلى تخطيط واضح للمعدات والطاقة والتبريد والكابلات والمراقبة، بما يسهل التشغيل والصيانة ويقلل الأعطال الناتجة عن البيئة غير المنظمة."
                : "Server rooms and data centers need clear planning for equipment, power, cooling, cabling and monitoring — making operations and maintenance easier and reducing failures from unorganized environments."}
            </p>

            <ul className="mt-6 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["تقييم الموقع", "تصميم توزيع المعدات", "تركيب الخزائن", "تنظيم الكابلات", "أنظمة الطاقة الاحتياطية", "التبريد", "ترقيم المعدات", "المراقبة البيئية", "تجهيز الخوادم والتخزين", "اختبار التشغيل", "التوثيق", "خطة الصيانة"]
                : ["Site assessment", "Equipment layout design", "Rack installation", "Cable organization", "Backup power systems", "Cooling", "Equipment labeling", "Environmental monitoring", "Servers & storage setup", "Operation testing", "Documentation", "Maintenance plan"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={dcImg}
            alt={isAr
              ? "تصميم وتجهيز مركز بيانات وغرفة خوادم للمؤسسات"
              : "Designing and setting up a data center and server room for enterprises"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </Section>

      {/* ============================================================
          10. تحديث البنية التحتية القديمة
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "تحديث البيئة التقنية لدعم الأنظمة الحديثة"
            : "Modernizing the technology environment for modern systems"}
          intro={
            isAr
              ? "قد تعاني المؤسسات من خوادم قديمة، سعات تخزين محدودة، صعوبة في التوسع أو بيئات تشغيل غير موحدة. تساعد أربتك على تقييم البنية الحالية ووضع خطة تحديث مرحلية تقلل تأثير التغيير على الخدمات القائمة."
              : "Organizations may face old servers, limited storage capacity, scaling difficulties or inconsistent operating environments. ARABTEC helps assess the current infrastructure and define a phased modernization plan that reduces the impact of change on existing services."}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <h3 className="font-bold mb-3">
              {isAr ? "مجالات التحديث" : "Modernization areas"}
            </h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["تحديث الخوادم", "توسعة التخزين", "توحيد أنظمة التشغيل", "تطبيق الافتراضية", "الانتقال إلى السحابة", "تحديث النسخ الاحتياطي", "تجهيز بيئة تعافي", "إعادة تنظيم مركز البيانات", "تحديث أجهزة المستخدمين", "تحسين المراقبة والإدارة"]
                : ["Server upgrades", "Storage expansion", "OS standardization", "Virtualization adoption", "Cloud migration", "Backup modernization", "Recovery environment setup", "Data center reorganization", "End-user device refresh", "Monitoring & management improvement"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              {isAr ? "مسارات التحديث" : "Modernization paths"}
            </h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["تحسين البنية الحالية", "استبدال المعدات القديمة", "دمج الخوادم", "الانتقال إلى الافتراضية", "الانتقال إلى بيئة هجينة", "ترحيل تطبيقات محددة إلى السحابة"]
                : ["Improving current infrastructure", "Replacing old equipment", "Server consolidation", "Migrating to virtualization", "Migrating to hybrid environment", "Migrating specific applications to cloud"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          11. تجهيز مواقع العمل والفروع
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "بيئة تقنية جاهزة لتشغيل المستخدمين والخدمات"
            : "A technology environment ready for users and services"}
          intro={
            isAr
              ? "توفر أربتك خدمات تجهيز المواقع والفروع الجديدة أو تحديث المواقع القائمة، بما يشمل الموارد التقنية اللازمة للمستخدمين والأنظمة والاتصال."
              : "ARABTEC provides setup services for new sites and branches or updating existing ones — including the technology resources needed for users, systems and connectivity."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["حصر المستخدمين والاحتياجات", "أجهزة الحاسب والعمل", "الخوادم المحلية عند الحاجة", "الشبكات والاتصال", "الطابعات والأجهزة الطرفية", "التراخيص", "البريد والخدمات المكتبية", "أنظمة الحضور", "التحكم بالدخول", "كاميرات المراقبة", "التثبيت والإعداد", "التسليم والدعم"]
            : ["User & needs inventory", "Computers & work devices", "Local servers if needed", "Networks & connectivity", "Printers & peripherals", "Licensing", "Email & office services", "Attendance systems", "Access control", "Surveillance cameras", "Installation & configuration", "Handover & support"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAButton to="/services/network-connectivity" variant="outline">
            {isAr ? "استكشف حلول الشبكات والاتصال" : "Explore networks & connectivity"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          12. البنية التحتية لأنظمة ERP
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "بيئة تشغيل تدعم أداء نظام ERP"
            : "An operating environment supporting ERP performance"}
          intro={
            isAr
              ? "يتطلب نظام ERP بنية تقنية مستقرة تدعم قواعد البيانات، التطبيقات، المستخدمين، الفروع، النسخ الاحتياطي والتقارير. يمكن تصميم بيئة تشغيل داخلية أو سحابية أو هجينة وفق حجم النظام وعدد المستخدمين والتكاملات ومتطلبات المؤسسة."
              : "An ERP system requires a stable technology infrastructure supporting databases, applications, users, branches, backup and reports. An on-premise, cloud or hybrid environment can be designed according to system size, users, integrations and requirements."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["خوادم التطبيقات", "خوادم قواعد البيانات", "التخزين", "النسخ الاحتياطي", "بيئة الاختبار", "بيئة الإنتاج", "ربط الفروع", "المراقبة", "خطط التوسع", "استمرارية الخدمة"]
            : ["Application servers", "Database servers", "Storage", "Backup", "Test environment", "Production environment", "Branch connectivity", "Monitoring", "Expansion plans", "Service continuity"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAButton to="/services/erp-business-applications" variant="outline">
            {isAr ? "استكشف أنظمة ERP وتطبيقات الأعمال" : "Explore ERP & business applications"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          13. البنية التحتية لحلول الذكاء الاصطناعي
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "موارد تقنية تدعم تشغيل AI Agents والمنصات الذكية"
            : "Technology resources supporting AI Agents and intelligent platforms"}
          intro={
            isAr
              ? "تحتاج حلول الذكاء الاصطناعي إلى بيئة مناسبة لتشغيل التطبيقات، حفظ الوثائق والبيانات، تنفيذ التكاملات وإدارة المستخدمين والصلاحيات. تحدد متطلبات البنية وفق حجم البيانات، عدد المستخدمين، نموذج التشغيل، مصادر المعرفة والتكاملات المطلوبة."
              : "AI solutions need an appropriate environment for running applications, storing documents and data, executing integrations and managing users and permissions. Infrastructure requirements are defined by data volume, users, operating model, knowledge sources and required integrations."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["خوادم التطبيقات", "تخزين الوثائق", "قواعد البيانات", "بيئة التكامل", "المراقبة", "إدارة الهوية والصلاحيات", "موارد المعالجة", "النسخ الاحتياطي", "بيئات الاختبار والإنتاج", "التكامل مع السحابة أو الأنظمة الداخلية"]
            : ["Application servers", "Document storage", "Databases", "Integration environment", "Monitoring", "Identity & permission management", "Compute resources", "Backup", "Test & production environments", "Cloud or internal system integration"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <Sparkles className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAButton to="/services/ai-agents" variant="outline">
            {isAr ? "استكشف حلول الذكاء الاصطناعي و AI Agents" : "Explore AI & AI Agents"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          14. إدارة ومراقبة البنية التحتية
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "متابعة مستمرة للأداء والموارد"
            : "Continuous monitoring of performance and resources"}
          intro={
            isAr
              ? "تساعد المراقبة المركزية المؤسسة على اكتشاف المشكلات ومتابعة استخدام الموارد وتحليل الأداء قبل أن تؤثر الأعطال على المستخدمين والخدمات."
              : "Centralized monitoring helps the organization detect issues, track resource usage and analyze performance before failures affect users and services."}
        />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div>
            <h3 className="font-bold mb-3">{isAr ? "عناصر المراقبة" : "Monitoring elements"}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["حالة الخوادم", "استخدام المعالج والذاكرة", "استخدام التخزين", "أداء التطبيقات", "حالة النسخ الاحتياطي", "التنبيهات", "سجلات الأعطال", "توفر الخدمات", "استهلاك الموارد السحابية", "تقارير الأداء"]
                : ["Server status", "CPU & memory usage", "Storage usage", "Application performance", "Backup status", "Alerts", "Failure logs", "Service availability", "Cloud resource consumption", "Performance reports"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">{isAr ? "الدعم التشغيلي" : "Operational support"}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["استقبال البلاغات", "تصنيف الأعطال", "معالجة المشكلات", "التصعيد", "تنفيذ التحديثات", "التوثيق", "إعداد التقارير", "متابعة مؤشرات الخدمة"]
                : ["Receiving reports", "Fault classification", "Issue handling", "Escalation", "Applying updates", "Documentation", "Reporting", "Service indicator tracking"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          15. القطاعات المستفيدة
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "بنية تقنية تناسب متطلبات القطاعات الحيوية"
            : "Technology infrastructure fitting vital sector requirements"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { key: "government", ar: "الجهات الحكومية", en: "Government entities", itemsAr: ["استضافة الخدمات الرقمية", "تشغيل الأنظمة الحكومية", "بيئات سحابية وهجينة", "النسخ الاحتياطي", "استمرارية الأعمال", "مراكز البيانات"], itemsEn: ["Hosting digital services", "Running government systems", "Cloud & hybrid environments", "Backup", "Business continuity", "Data centers"] },
            { key: "oil-gas", ar: "النفط والغاز", en: "Oil & gas", itemsAr: ["ربط المواقع", "الخوادم والتخزين", "البيئات التشغيلية", "النسخ الاحتياطي", "التعافي من الكوارث", "تجهيز المواقع"], itemsEn: ["Site connectivity", "Servers & storage", "Operational environments", "Backup", "Disaster recovery", "Site setup"] },
            { key: "education", ar: "التعليم", en: "Education", itemsAr: ["البنية التقنية للمؤسسات التعليمية", "الخوادم والمنصات", "التخزين", "الخدمات السحابية", "معامل الحاسب", "تشغيل الفروع"], itemsEn: ["Educational institution infrastructure", "Servers & platforms", "Storage", "Cloud services", "Computer labs", "Branch operations"] },
            { key: "healthcare", ar: "الرعاية الصحية", en: "Healthcare", itemsAr: ["استضافة الأنظمة", "الخوادم والتخزين", "النسخ الاحتياطي", "استمرارية الخدمات", "ربط المواقع", "مراقبة البنية"], itemsEn: ["System hosting", "Servers & storage", "Backup", "Service continuity", "Site connectivity", "Infrastructure monitoring"] },
            { key: "banking", ar: "البنوك والخدمات المالية", en: "Banking & finance", itemsAr: ["البيئات المؤسسية", "النسخ الاحتياطي", "استمرارية الأعمال", "مراكز البيانات", "البيئات الهجينة", "إدارة الموارد"], itemsEn: ["Enterprise environments", "Backup", "Business continuity", "Data centers", "Hybrid environments", "Resource management"] },
            { key: "enterprise", ar: "الشركات والمؤسسات", en: "Enterprises", itemsAr: ["تحديث الخوادم", "الحوسبة السحابية", "تجهيز الفروع", "النسخ الاحتياطي", "تشغيل الأنظمة", "الدعم الفني"], itemsEn: ["Server modernization", "Cloud computing", "Branch setup", "Backup", "Running systems", "Technical support"] },
          ].map((sec) => (
            <Card key={sec.key}>
              <h3 className="font-bold text-base mb-3">{isAr ? sec.ar : sec.en}</h3>
              <ul className="space-y-1.5">
                {(isAr ? sec.itemsAr : sec.itemsEn).map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton to="/industries" variant="outline">
            {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          16. منهجية التنفيذ — 10 مراحل
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "منهجية واضحة من التقييم إلى التشغيل"
            : "A clear methodology from assessment to operations"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {(isAr
            ? [
                { t: "تقييم البيئة الحالية", d: "حصر الأنظمة والخوادم والتخزين والاحتياجات والمشكلات الحالية." },
                { t: "تحليل المتطلبات", d: "تحديد احتياجات التطبيقات والمستخدمين والأداء والتوسع والاستمرارية." },
                { t: "تصميم البنية", d: "إعداد التصميم الفني ومكونات البيئة وخطة التنفيذ." },
                { t: "التوريد والتجهيز", d: "تجهيز المعدات والتراخيص والبيئات المطلوبة." },
                { t: "التركيب والإعداد", d: "تركيب الخوادم والتخزين والمنصات وإعداد الأنظمة." },
                { t: "ترحيل الأنظمة والبيانات", d: "نقل التطبيقات والبيانات من البيئة الحالية عند الحاجة." },
                { t: "الاختبار", d: "اختبار الأداء والتكامل والنسخ الاحتياطي والاستعادة." },
                { t: "الإطلاق والتسليم", d: "تشغيل البيئة وتوثيق الإعدادات وتسليمها للفرق المعنية." },
                { t: "التدريب", d: "تدريب الفرق الفنية والمستخدمين المعنيين على التشغيل والإدارة." },
                { t: "التشغيل والدعم", d: "متابعة الأداء ومعالجة الأعطال والتحسين وفق نطاق الاتفاق." },
              ]
            : [
                { t: "Current environment assessment", d: "Inventory systems, servers, storage, needs and current issues." },
                { t: "Requirements analysis", d: "Defining application, user, performance, scaling and continuity needs." },
                { t: "Architecture design", d: "Preparing technical design, environment components and delivery plan." },
                { t: "Supply & preparation", d: "Preparing equipment, licenses and required environments." },
                { t: "Installation & setup", d: "Installing servers, storage and platforms, and configuring systems." },
                { t: "Migration", d: "Moving applications and data from the current environment when needed." },
                { t: "Testing", d: "Testing performance, integration, backup and recovery." },
                { t: "Launch & handover", d: "Operating the environment, documenting configurations and handing over to teams." },
                { t: "Training", d: "Training technical teams and relevant users on operations and management." },
                { t: "Operations & support", d: "Monitoring performance, handling faults and improving per agreement scope." },
              ]
          ).map((step, i) => (
            <li key={i} className="relative rounded-xl border border-border bg-card p-5">
              <div className="text-3xl font-extrabold text-[color:var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1 font-semibold text-sm">{step.t}</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          17. فوائد تحديث البنية التحتية
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "كيف تدعم البنية التقنية أهداف المؤسسة؟"
            : "How does IT infrastructure support the organization's goals?"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "تحسين الاستقرار", d: "بيئة أكثر قدرة على تشغيل الأنظمة والخدمات باستمرارية." },
                { t: "دعم التوسع", d: "إضافة مستخدمين وتطبيقات وموارد جديدة بصورة منظمة." },
                { t: "تحسين الأداء", d: "تخصيص الموارد المناسبة للتطبيقات وقواعد البيانات." },
                { t: "إدارة أفضل للبيانات", d: "تنظيم التخزين والنسخ الاحتياطي والاستعادة." },
                { t: "دعم التحول الرقمي", d: "تجهيز المؤسسة لتشغيل الأنظمة المؤسسية والخدمات الرقمية." },
                { t: "تسهيل التكامل", d: "توفير بيئة تدعم ربط الأنظمة والتطبيقات." },
                { t: "رفع الجاهزية", d: "إعداد خطط للاستمرارية والتعافي من الأعطال." },
                { t: "تحسين الإدارة", d: "متابعة الموارد والأداء من خلال أدوات وتقارير مركزية." },
              ]
            : [
                { t: "Improved stability", d: "A more capable environment for running systems and services with continuity." },
                { t: "Scaling support", d: "Adding users, applications and resources in an organized way." },
                { t: "Better performance", d: "Allocating the right resources to applications and databases." },
                { t: "Better data management", d: "Organizing storage, backup and recovery." },
                { t: "Digital transformation support", d: "Preparing the organization to run enterprise systems and digital services." },
                { t: "Easier integration", d: "An environment that supports connecting systems and applications." },
                { t: "Higher readiness", d: "Preparing continuity and disaster recovery plans." },
                { t: "Better management", d: "Tracking resources and performance with central tools and reports." },
              ]
          ).map((c) => (
            <Card key={c.t}>
              <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mb-3" />
              <h3 className="font-bold text-base">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          18. لماذا أربتك؟
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "لماذا تختار المؤسسات أربتك للبنية التحتية التقنية؟"
            : "Why organizations choose ARABTEC for IT infrastructure"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "خبرة تقنية ممتدة", d: "خبرة في البنية التحتية، الأنظمة، الشبكات والاتصال منذ سنوات طويلة." },
                { t: "رؤية متكاملة", d: "ربط البنية التحتية باحتياجات التطبيقات والبرمجيات و ERP والذكاء الاصطناعي." },
                { t: "تصميم وفق الحاجة", d: "اختيار الموارد وفق حجم المؤسسة والأنظمة والأولويات التشغيلية." },
                { t: "تنفيذ مرحلي", d: "إمكانية تحديث البيئة على مراحل لتقليل تأثير التغيير." },
                { t: "تكامل بين التخصصات", d: "الجمع بين الخوادم والسحابة والشبكات والأنظمة والتطبيقات." },
                { t: "تشغيل ودعم", d: "توفير خدمات المتابعة والتحديث والصيانة وفق نطاق الاتفاق." },
                { t: "نقطة مسؤولية واحدة", d: "إدارة التقييم والتصميم والتوريد والتنفيذ والتسليم والدعم ضمن مشروع منظم." },
              ]
            : [
                { t: "Extensive technology expertise", d: "Experience in infrastructure, systems, networks and connectivity over many years." },
                { t: "Integrated vision", d: "Connecting infrastructure to application, software, ERP and AI needs." },
                { t: "Design based on need", d: "Selecting resources based on organization size, systems and operational priorities." },
                { t: "Phased delivery", d: "Environment can be modernized in phases to reduce change impact." },
                { t: "Cross-disciplinary integration", d: "Combining servers, cloud, networks, systems and applications." },
                { t: "Operations & support", d: "Providing monitoring, update and maintenance services per agreement scope." },
                { t: "Single point of accountability", d: "Managing assessment, design, supply, delivery, handover and support within an organized project." },
              ]
          ).map((c) => (
            <Card key={c.t}>
              <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mb-3" />
              <h3 className="font-bold text-sm">{c.t}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          19. خدمات مرتبطة
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "خدمات تكمل البنية التقنية للمؤسسة"
            : "Services complementing the organization's IT infrastructure"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {[
            { ar: "الشبكات والاتصال", en: "Networks & connectivity", descAr: "ربط الخوادم والمستخدمين والمواقع والبيئات السحابية.", descEn: "Connecting servers, users, sites and cloud environments.", link: "network-connectivity" },
            { ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & business applications", descAr: "تشغيل الأنظمة المالية والإدارية والتشغيلية على بنية مناسبة.", descEn: "Running financial, administrative and operational systems on suitable infrastructure.", link: "erp-business-applications" },
            { ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software development & system integration", descAr: "تطوير التطبيقات وربطها بالبيئات السحابية وقواعد البيانات والخدمات.", descEn: "Developing applications and connecting them to cloud environments, databases and services.", link: "software-development" },
            { ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI & AI Agents solutions", descAr: "تجهيز بيئة تشغيل للمنصات الذكية والوثائق والتكاملات.", descEn: "Preparing the environment for intelligent platforms, documents and integrations.", link: "ai-agents" },
            { ar: "أنظمة المراقبة والحضور والتحكم بالدخول", en: "Surveillance, attendance & access control", descAr: "تجهيز الأنظمة والأجهزة وربطها بالبنية التقنية للمؤسسة.", descEn: "Preparing systems and devices and connecting them to the enterprise infrastructure.", link: "surveillance-access-control" },
          ].map((c) => (
            <Card key={c.link}>
              <h3 className="font-bold text-sm">{isAr ? c.ar : c.en}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {isAr ? c.descAr : c.descEn}
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: c.link }}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:text-gold"
              >
                {isAr ? "استكشف الخدمة" : "Explore service"}
                <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          20. CTA
          ============================================================ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* <img
          src={ctaBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        /> */}
        <div className="relative container-page py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground/85">
            {isAr
              ? "هل تحتاج مؤسستكم إلى تحديث أو توسيع البنية التقنية؟"
              : "Does your organization need to modernize or expand its IT infrastructure?"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
            {isAr
              ? "شاركوا فريق أربتك بالبيئة الحالية والتحديات والأنظمة المطلوب تشغيلها، وسنعمل معكم على تقييم الاحتياج وتصميم بنية تقنية تناسب أهداف المؤسسة ومتطلبات الأداء والتوسع والاستمرارية."
              : "Share your current environment, challenges and systems with the ARABTEC team — we'll work with you to assess the need and design an infrastructure that fits your goals, performance, scaling and continuity requirements."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {isAr ? "اطلب استشارة للبنية التحتية" : "Request an infrastructure consultation"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
            >
              {isAr ? "اطلب تقييمًا للبيئة التقنية" : "Request a technology assessment"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
            >
              {isAr ? "اطلب عرضًا فنيًا" : "Request a technical proposal"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          21. FAQ
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن السحابة والبنية التحتية التقنية"
            : "Frequently asked questions about cloud & IT infrastructure"}
        />

        <FAQ
          items={[
            {
              q: { ar: "ما المقصود بالبنية التحتية التقنية؟", en: "What is IT infrastructure?" },
              a: {
                ar: "تشمل البنية التحتية التقنية الخوادم والتخزين ومراكز البيانات وأنظمة التشغيل والسحابة والنسخ الاحتياطي والموارد التي تعتمد عليها التطبيقات والبيانات والمستخدمون.",
                en: "IT infrastructure includes servers, storage, data centers, operating systems, cloud, backup and the resources that applications, data and users rely on.",
              },
            },
            {
              q: { ar: "ما الفرق بين السحابة العامة والخاصة والهجينة؟", en: "What's the difference between public, private and hybrid cloud?" },
              a: {
                ar: "السحابة العامة تعتمد على موارد يقدمها مزود خارجي، والسحابة الخاصة تكون مخصصة لمؤسسة واحدة، بينما تجمع السحابة الهجينة بين الأنظمة الداخلية والخدمات السحابية.",
                en: "Public cloud uses resources provided by an external provider, private cloud is dedicated to one organization, and hybrid cloud combines on-premise systems with cloud services.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك خدمات ترحيل الأنظمة إلى السحابة؟", en: "Does ARABTEC provide cloud migration services?" },
              a: {
                ar: "نعم، يمكن أن تشمل الخدمة تقييم جاهزية الأنظمة وتصميم البيئة المستهدفة وترحيل التطبيقات والبيانات والاختبار والدعم.",
                en: "Yes — the service can include system readiness assessment, target environment design, application and data migration, testing and support.",
              },
            },
            {
              q: { ar: "هل يمكن تشغيل الأنظمة داخل المؤسسة؟", en: "Can systems run on-premise?" },
              a: {
                ar: "نعم، يمكن تصميم بيئة داخلية أو سحابية أو هجينة وفق متطلبات المؤسسة وطبيعة الأنظمة والسياسات المعتمدة.",
                en: "Yes — an on-premise, cloud or hybrid environment can be designed per the organization's needs, system nature and approved policies.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلول الخوادم والتخزين؟", en: "Does ARABTEC provide server and storage solutions?" },
              a: {
                ar: "نعم، تشمل الخدمات تصميم وتوريد وتركيب وإعداد الخوادم وأنظمة التخزين وفق احتياجات التطبيقات والبيانات.",
                en: "Yes — services include designing, supplying, installing and configuring servers and storage systems per application and data needs.",
              },
            },
            {
              q: { ar: "هل تشمل الخدمة النسخ الاحتياطي؟", en: "Does the service include backup?" },
              a: {
                ar: "نعم، يمكن تصميم وتنفيذ سياسات النسخ الاحتياطي ومراقبة نجاحها واختبار استعادة البيانات.",
                en: "Yes — backup policies can be designed and implemented, with success monitoring and data restore testing.",
              },
            },
            {
              q: { ar: "ما المقصود بالتعافي من الكوارث؟", en: "What is disaster recovery?" },
              a: {
                ar: "هو إعداد خطة وبيئة بديلة تساعد المؤسسة على استعادة الأنظمة والخدمات بعد حدوث عطل كبير أو توقف في الموقع الرئيسي.",
                en: "It's preparing a plan and alternate environment that help the organization recover systems and services after a major failure or loss of the primary site.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك خدمات استمرارية الأعمال؟", en: "Does ARABTEC provide business continuity services?" },
              a: {
                ar: "يمكن أن يشمل نطاق المشروع تحليل الأنظمة الحرجة وتحديد أولويات الاستعادة وإعداد خطط التحويل والاسترجاع والاختبار.",
                en: "Project scope can include critical system analysis, recovery priority setting, failover and restore plans, and testing.",
              },
            },
            {
              q: { ar: "هل يمكن تجهيز مركز بيانات أو غرفة خوادم؟", en: "Can a data center or server room be set up?" },
              a: {
                ar: "نعم، تشمل الخدمات التخطيط والخزائن والطاقة والتبريد والكابلات وتركيب المعدات والتوثيق.",
                en: "Yes — services include planning, cabinets, power, cooling, cabling, equipment installation and documentation.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك خدمات تشغيل وصيانة؟", en: "Does ARABTEC provide operations & maintenance?" },
              a: {
                ar: "نعم، يمكن تقديم المراقبة والتحديثات ومعالجة الأعطال وإدارة النسخ الاحتياطي والدعم وفق اتفاقية الخدمة.",
                en: "Yes — monitoring, updates, fault handling, backup management and support can be provided per the service agreement.",
              },
            },
            {
              q: { ar: "هل يمكن تجهيز فرع جديد بالكامل؟", en: "Can a new branch be fully set up?" },
              a: {
                ar: "نعم، يمكن تجهيز الموقع بالأجهزة والخوادم والشبكات والتراخيص وأنظمة الحضور والمراقبة والخدمات التقنية المطلوبة.",
                en: "Yes — the site can be set up with devices, servers, networks, licenses, attendance systems, surveillance and required technology services.",
              },
            },
            {
              q: { ar: "هل تدعم البنية التحتية أنظمة ERP؟", en: "Does the infrastructure support ERP systems?" },
              a: {
                ar: "نعم، يمكن تصميم بيئة مناسبة لتشغيل أنظمة ERP وقواعد البيانات والنسخ الاحتياطي وربط الفروع.",
                en: "Yes — a suitable environment can be designed to run ERP systems, databases, backup and branch connectivity.",
              },
            },
            {
              q: { ar: "هل يمكن تجهيز بيئة لحلول الذكاء الاصطناعي؟", en: "Can an environment be set up for AI solutions?" },
              a: {
                ar: "نعم، تحدد الموارد المطلوبة وفق حجم البيانات والتطبيقات والتكاملات ونموذج التشغيل.",
                en: "Yes — required resources are defined based on data volume, applications, integrations and operating model.",
              },
            },
            {
              q: { ar: "كم يستغرق تنفيذ مشروع البنية التحتية؟", en: "How long does an infrastructure project take?" },
              a: {
                ar: "تعتمد المدة على حجم المشروع وعدد المواقع والمعدات والترحيل والتكامل والاختبارات المطلوبة.",
                en: "Duration depends on project size, number of sites and equipment, migration, integration and required testing.",
              },
            },
          ]}
        />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ما المقصود بالبنية التحتية التقنية؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تشمل البنية التحتية التقنية الخوادم والتخزين ومراكز البيانات وأنظمة التشغيل والسحابة والنسخ الاحتياطي والموارد التي تعتمد عليها التطبيقات والبيانات والمستخدمون.",
                },
              },
              {
                "@type": "Question",
                name: "ما الفرق بين السحابة العامة والخاصة والهجينة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "السحابة العامة تعتمد على موارد يقدمها مزود خارجي، والسحابة الخاصة تكون مخصصة لمؤسسة واحدة، بينما تجمع السحابة الهجينة بين الأنظمة الداخلية والخدمات السحابية.",
                },
              },
              {
                "@type": "Question",
                name: "هل تقدم أربتك خدمات ترحيل الأنظمة إلى السحابة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن أن تشمل الخدمة تقييم جاهزية الأنظمة وتصميم البيئة المستهدفة وترحيل التطبيقات والبيانات والاختبار والدعم.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}