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
  Code2,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  Plug,
  RefreshCw,
  Workflow,
  CheckCircle2,
  Building2,
  Landmark,
  Database,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  Users,
  FileText,
} from "lucide-react";

// الصور
import heroImg from "@/assets/enterprise-custom-software-development.webp";
import govSoftwareImg from "@/assets/government-software-development.jpg";
import webAppImg from "@/assets/enterprise-web-application.jpg";
import mobileAppImg from "@/assets/enterprise-mobile-app-development.jpg";
import legacyImg from "@/assets/legacy-system-modernization.webp";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

export default function SoftwareDevelopmentPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";
  const s = getService("software-development");
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
      <Section className="!py-6 md:!py-10">
        <Breadcrumbs
          items={[
            { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
            { label: { ar: "الخدمات", en: "Services" }, to: "/services" },
            { label: s.title },
          ]}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-center mt-4 md:mt-6">
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={
                isAr
                  ? "تطوير نظام برمجي مؤسسي متكامل للجهات الحكومية والشركات"
                  : "Custom enterprise software development for government and enterprises"
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
              {isAr ? "حلول برمجية مخصصة للمؤسسات" : "Custom software solutions for enterprises"}
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "تطوير البرمجيات وتكامل الأنظمة للجهات الحكومية والمؤسسات"
                : "Software development and system integration for government and enterprises"}
            </h1>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تساعد أربتك الجهات الحكومية والمؤسسات على تحويل احتياجاتها التشغيلية إلى أنظمة وبرمجيات رقمية مصممة وفق إجراءات العمل والمستخدمين والبيانات والأنظمة القائمة."
                : "ARABTEC helps government entities and enterprises turn their operational needs into digital systems and software designed around business processes, users, data and existing systems."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "نطور أنظمة مؤسسية وتطبيقات ويب وجوال وسطح مكتب، وبوابات رقمية للموظفين والمتعاملين والعملاء والموردين، مع خدمات تكامل الأنظمة وواجهات API وتحديث الأنظمة القديمة."
                : "We build enterprise systems, web, mobile and desktop applications, and digital portals for employees, customers, clients and vendors — plus system integration, APIs and legacy system modernization."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تبدأ خدماتنا بدراسة الاحتياج وتحليل العمليات، ثم تصميم تجربة المستخدم والبنية التقنية، مرورًا بالتطوير والاختبار والتكامل، وصولًا إلى الإطلاق والتدريب والدعم التشغيلي."
                : "Our services start with requirements study and process analysis, then UX and architecture design, through development, testing and integration, to go-live, training and operational support."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton to="/contact">
                {isAr ? "اطلب استشارة تطوير برمجيات" : "Request a software development consultation"}
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                {isAr ? "اطلب عرضًا فنيًا" : "Request a technical proposal"}
              </CTAButton>
            </div>

            {/* شريط مختصر */}
            <div className="mt-6 flex flex-wrap gap-2">
              {(isAr
                ? ["أنظمة مؤسسية", "تطبيقات ويب", "تطبيقات جوال", "بوابات رقمية", "واجهات API", "تكامل الأنظمة", "تحديث الأنظمة القديمة", "أتمتة الإجراءات"]
                : ["Enterprise systems", "Web apps", "Mobile apps", "Digital portals", "APIs", "System integration", "Legacy modernization", "Process automation"]
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
          2. تطوير البرمجيات المخصصة
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "برمجيات مصممة وفق عمليات المؤسسة"
            : "Software designed around the organization's processes"}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <p className="text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "لا تتشابه احتياجات المؤسسات وعملياتها بالكامل. لذلك نطور حلولًا برمجية مخصصة تعكس إجراءات العمل الفعلية، وتساعد على رقمنة الخدمات، أتمتة المهام، توحيد البيانات وتحسين تجربة المستخدم."
                : "Organizations don't have identical needs and processes. That's why we build custom software solutions that reflect actual business procedures and help digitize services, automate tasks, unify data and improve user experience."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يمكن تطوير نظام جديد من البداية، أو إضافة وظائف إلى نظام قائم، أو تحديث تطبيق قديم وربطه بالمنظومة التقنية للمؤسسة."
                : "You can develop a new system from scratch, add functions to an existing system, or modernize an old application and connect it to the enterprise technology ecosystem."}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-[#0B3D2E]">
              {isAr ? "متى تحتاج المؤسسة إلى برمجيات مخصصة؟" : "When does an organization need custom software?"}
            </h3>
            <ul className="space-y-1.5">
              {(isAr
                ? [
                    "عندما لا يغطي النظام الجاهز جميع الإجراءات",
                    "عندما تعتمد العمليات على ملفات Excel والبريد الإلكتروني",
                    "عندما توجد أنظمة منفصلة لا تتبادل البيانات",
                    "عندما تحتاج المؤسسة إلى بوابة لمستخدميها",
                    "عندما تتطلب الخدمة مسارات موافقات خاصة",
                    "عندما يكون النظام الحالي قديمًا أو صعب الصيانة",
                    "عندما تحتاج الإدارة إلى تقارير ولوحات مخصصة",
                    "عندما تتطلب المؤسسة تكاملًا مع منصات وأنظمة خارجية",
                  ]
                : [
                    "When the ready-made system doesn't cover all procedures",
                    "When operations rely on Excel files and email",
                    "When separate systems don't exchange data",
                    "When the organization needs a portal for its users",
                    "When the service requires specific approval workflows",
                    "When the current system is outdated or hard to maintain",
                    "When management needs custom reports and dashboards",
                    "When the organization needs integration with external platforms and systems",
                  ]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* مخطط: التحديات ← تحليل ← تطوير ← نتائج */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-4 md:p-6 overflow-x-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-medium min-w-max">
            {(isAr
              ? ["التحديات التشغيلية", "تحليل الاحتياج", "تطوير حل مخصص", "نتائج مؤسسية"]
              : ["Operational challenges", "Requirement analysis", "Custom solution development", "Enterprise outcomes"]
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
          3. خدمات تطوير البرمجيات — 10 خدمات
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "خدمات برمجية تغطي الأنظمة والمنصات والتطبيقات المؤسسية"
            : "Software services covering enterprise systems, platforms and applications"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              icon: Layers,
              hAr: "تطوير الأنظمة المؤسسية",
              hEn: "Enterprise systems development",
              descAr: "تطوير أنظمة داخلية لإدارة الإجراءات والمعاملات والبيانات والموافقات والعمليات التشغيلية ضمن منصة مركزية.",
              descEn: "Building internal systems to manage procedures, transactions, data, approvals and operational processes in a central platform.",
              itemsAr: ["أنظمة إدارة الطلبات", "أنظمة إدارة العمليات", "أنظمة الموافقات", "أنظمة إدارة الحالات", "أنظمة إدارة العقود", "أنظمة إدارة المشاريع", "أنظمة متابعة الأداء", "أنظمة إدارة الوثائق", "أنظمة الخدمات الداخلية"],
              itemsEn: ["Request management", "Operations management", "Approval systems", "Case management", "Contract management", "Project management", "Performance tracking", "Document management", "Internal services systems"],
            },
            {
              icon: Monitor,
              hAr: "تطوير تطبيقات الويب",
              hEn: "Web application development",
              descAr: "تطوير تطبيقات ويب سريعة ومتجاوبة تعمل عبر المتصفح، وتدعم المستخدمين والعمليات والتقارير والتكامل مع قواعد البيانات والأنظمة الأخرى.",
              descEn: "Building fast, responsive web applications that run in the browser and support users, operations, reporting and integration with databases and other systems.",
              itemsAr: ["منصات الخدمات الإلكترونية", "أنظمة إدارة الأعمال", "لوحات التحكم", "بوابات الموظفين", "بوابات العملاء", "بوابات الموردين", "أنظمة الحجز والطلبات", "أنظمة التقارير والتحليلات"],
              itemsEn: ["E-services platforms", "Business management systems", "Dashboards", "Employee portals", "Customer portals", "Vendor portals", "Booking & request systems", "Reports & analytics systems"],
            },
            {
              icon: Smartphone,
              hAr: "تطوير تطبيقات الجوال",
              hEn: "Mobile application development",
              descAr: "تطوير تطبيقات Android و iOS لدعم العملاء والموظفين والفرق الميدانية، مع ربطها بالأنظمة المؤسسية والخدمات الخلفية.",
              descEn: "Building Android and iOS apps for customers, employees and field teams, integrated with enterprise systems and back-end services.",
              itemsAr: ["تطبيقات الخدمات الحكومية", "تطبيقات الموظفين", "تطبيقات العملاء", "تطبيقات العمليات الميدانية", "تطبيقات متابعة الطلبات", "تطبيقات الصيانة والزيارات", "تطبيقات الموافقات", "تطبيقات الإشعارات والخدمات الذاتية"],
              itemsEn: ["Government services apps", "Employee apps", "Customer apps", "Field operations apps", "Request tracking apps", "Maintenance & visit apps", "Approval apps", "Notifications & self-service apps"],
            },
            {
              icon: Monitor,
              hAr: "تطوير تطبيقات سطح المكتب",
              hEn: "Desktop application development",
              descAr: "تطوير تطبيقات مكتبية مخصصة للعمليات التي تتطلب تشغيلًا محليًا أو تكاملًا مباشرًا مع أجهزة أو قواعد بيانات داخلية.",
              descEn: "Building custom desktop applications for operations requiring local execution or direct integration with devices or internal databases.",
              itemsAr: ["أنظمة التشغيل المحلية", "تطبيقات إدارة الأجهزة", "تطبيقات نقاط الخدمة", "برامج المخزون والمحاسبة", "تطبيقات إدخال ومعالجة البيانات", "تطبيقات التكامل مع المعدات"],
              itemsEn: ["Local operating systems", "Device management apps", "Point-of-service apps", "Inventory & accounting software", "Data entry & processing apps", "Equipment integration apps"],
            },
            {
              icon: Globe,
              hAr: "تطوير البوابات الإلكترونية",
              hEn: "Digital portal development",
              descAr: "تصميم وتطوير بوابات رقمية توفر خدمات ومعلومات وتجارب مخصصة لكل فئة من المستخدمين.",
              descEn: "Designing and building digital portals offering services, information and tailored experiences for each user group.",
              itemsAr: ["بوابات الجهات الحكومية", "بوابات الموظفين", "بوابات المتعاملين", "بوابات العملاء", "بوابات الموردين", "بوابات الشركاء", "بوابات الخدمات الذاتية", "بوابات المعرفة الداخلية"],
              itemsEn: ["Government portals", "Employee portals", "Customer portals", "Client portals", "Vendor portals", "Partner portals", "Self-service portals", "Internal knowledge portals"],
            },
            {
              icon: Building2,
              hAr: "تطوير الإنترانت المؤسسي",
              hEn: "Enterprise intranet development",
              descAr: "إنشاء بوابات داخلية لتوحيد التواصل والمعرفة والخدمات بين الموظفين والإدارات.",
              descEn: "Building internal portals to unify communication, knowledge and services across employees and departments.",
              itemsAr: ["الأخبار والتعاميم", "السياسات والإجراءات", "دليل الموظفين", "النماذج والطلبات", "الخدمات الذاتية", "الموافقات", "قواعد المعرفة", "التكامل مع الموارد البشرية و ERP"],
              itemsEn: ["News & circulars", "Policies & procedures", "Employee handbook", "Forms & requests", "Self-services", "Approvals", "Knowledge bases", "HR & ERP integration"],
            },
            {
              icon: Plug,
              hAr: "تكامل الأنظمة وواجهات API",
              hEn: "System integration & APIs",
              descAr: "ربط الأنظمة والتطبيقات وقواعد البيانات لتمكين تبادل المعلومات وتقليل الإدخال اليدوي وتحسين تدفق الإجراءات.",
              descEn: "Connecting systems, applications and databases to enable information exchange, reduce manual entry and improve process flow.",
              itemsAr: ["تصميم وتطوير واجهات API", "ربط الأنظمة الداخلية", "ربط الأنظمة الخارجية", "تكامل CRM و ERP", "تكامل بوابات الخدمات", "تكامل تطبيقات الويب والجوال", "تكامل أنظمة الدفع", "تكامل أنظمة الحضور", "تكامل منصات الذكاء الاصطناعي"],
              itemsEn: ["API design & development", "Internal system integration", "External system integration", "CRM & ERP integration", "Service portal integration", "Web & mobile app integration", "Payment system integration", "Attendance system integration", "AI platform integration"],
            },
            {
              icon: RefreshCw,
              hAr: "تحديث الأنظمة القديمة",
              hEn: "Legacy system modernization",
              descAr: "إعادة تصميم أو إعادة بناء الأنظمة القديمة لتحسين الأداء والقابلية للصيانة والتوسع وتجربة المستخدم.",
              descEn: "Redesigning or rebuilding legacy systems to improve performance, maintainability, scalability and user experience.",
              itemsAr: ["تحليل النظام الحالي", "إعادة تصميم الواجهة", "تحديث البنية التقنية", "تحسين قاعدة البيانات", "تحويل التطبيق إلى الويب أو السحابة", "تطوير واجهات API", "نقل البيانات", "اختبار التوافق والأداء"],
              itemsEn: ["Analyzing the current system", "UI redesign", "Architecture modernization", "Database improvement", "Web or cloud conversion", "API development", "Data migration", "Compatibility & performance testing"],
            },
            {
              icon: Workflow,
              hAr: "أتمتة الإجراءات والعمليات",
              hEn: "Process & task automation",
              descAr: "تحويل الإجراءات اليدوية والمتكررة إلى مسارات رقمية واضحة ومترابطة.",
              descEn: "Turning manual, repetitive procedures into clear, connected digital workflows.",
              itemsAr: ["نماذج إلكترونية", "مسارات موافقات", "تنبيهات وإشعارات", "إسناد المهام", "التصعيد الآلي", "تتبع الطلبات", "إنشاء المستندات", "التقارير التشغيلية", "ربط الإجراءات بأنظمة CRM و ERP"],
              itemsEn: ["Electronic forms", "Approval workflows", "Alerts & notifications", "Task assignment", "Auto escalation", "Request tracking", "Document generation", "Operational reports", "CRM & ERP integration"],
            },
            {
              icon: ShieldCheck,
              hAr: "الاختبار وضمان الجودة",
              hEn: "Testing & quality assurance",
              descAr: "تنفيذ اختبارات منظمة للتأكد من أن النظام يعمل وفق المتطلبات المعتمدة.",
              descEn: "Running structured tests to ensure the system works according to approved requirements.",
              itemsAr: ["الاختبار الوظيفي", "اختبار التكامل", "اختبار واجهات المستخدم", "اختبار التوافق مع الأجهزة والمتصفحات", "اختبار الأداء", "اختبار قبول المستخدم", "اختبار التراجع", "إدارة الملاحظات والأخطاء"],
              itemsEn: ["Functional testing", "Integration testing", "UI testing", "Device & browser compatibility", "Performance testing", "User acceptance testing", "Regression testing", "Feedback & bug management"],
            },
          ].map((svc) => {
            const Icon = svc.icon;
            return (
              <Card key={svc.hEn} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
                <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B3D2E]">{isAr ? svc.hAr : svc.hEn}</h3>
                <p className="mt-2 text-[15px] md:text-base text-[#4B5563] leading-relaxed">
                  {isAr ? svc.descAr : svc.descEn}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {(isAr ? svc.itemsAr : svc.itemsEn).map((x) => (
                    <li key={x} className="flex items-start gap-2 text-[14px] md:text-[15px] text-[#4B5563]">
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
          4. تطوير البرمجيات للجهات الحكومية
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <img
            src={govSoftwareImg}
            alt={isAr
              ? "تطوير الأنظمة والبوابات الرقمية للجهات الحكومية"
              : "Systems and digital portals development for government entities"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1 mt-6 lg:mt-0"
          />

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B3D2E]/10 px-3 py-1 text-xs font-semibold text-[#0B3D2E] mb-3">
              <Landmark className="h-3.5 w-3.5" />
              {isAr ? "للجهات الحكومية" : "For government entities"}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "حلول برمجية تدعم تطوير الخدمات الحكومية"
                : "Software solutions supporting government services"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يمكن تطوير الأنظمة والبوابات الحكومية بما يتوافق مع طبيعة الإجراءات، تعدد المستخدمين، مستويات الصلاحيات، مسارات الموافقة ومتطلبات التكامل مع الأنظمة الداخلية والخارجية."
                : "Government systems and portals can be built according to the nature of procedures, multiple user groups, permission levels, approval workflows and integration requirements with internal and external systems."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "نركز على بناء خدمات رقمية واضحة وقابلة للاستخدام، تساعد على تقليل الإجراءات اليدوية، تسهيل وصول المتعاملين إلى الخدمات وتحسين قدرة الموظفين على إدارة الطلبات والمعاملات."
                : "We focus on building clear, usable digital services that reduce manual procedures, ease customer access to services and improve employees' ability to manage requests and transactions."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "حالات الاستخدام" : "Use cases"}
            </h3>

            <div className="mt-4 space-y-3">
              {(isAr
                ? [
                    { t: "بوابات الخدمات الحكومية", d: "عرض الخدمات والمتطلبات والنماذج واستقبال الطلبات ومتابعتها رقميًا." },
                    { t: "أنظمة إدارة المعاملات", d: "استقبال المعاملات وتصنيفها وتوجيهها وتتبع مراحلها ومسؤولياتها." },
                    { t: "أنظمة الموافقات الحكومية", d: "تحويل مسارات الاعتماد إلى إجراءات إلكترونية وفق الهيكل والصلاحيات." },
                    { t: "بوابات الموظفين", d: "توفير الخدمات الذاتية والنماذج والسياسات والطلبات والموافقات." },
                    { t: "لوحات الإدارة والقيادات", d: "عرض مؤشرات الأداء والطلبات ونسب الإنجاز والبيانات التشغيلية." },
                    { t: "تكامل الخدمات والأنظمة", d: "ربط البوابات بالأنظمة الخلفية وقواعد البيانات والهوية الرقمية ووسائل الدفع والإشعارات، وفق نطاق المشروع." },
                  ]
                : [
                    { t: "Government service portals", d: "Displaying services, requirements, forms, and receiving and tracking requests digitally." },
                    { t: "Transactions management", d: "Receiving, classifying and routing transactions, and tracking stages and responsibilities." },
                    { t: "Government approval systems", d: "Turning approval paths into electronic procedures based on structure and permissions." },
                    { t: "Employee portals", d: "Self-services, forms, policies, requests and approvals." },
                    { t: "Management & leadership dashboards", d: "Displaying KPIs, requests, completion rates and operational data." },
                    { t: "Service & system integration", d: "Connecting portals to back-end systems, databases, digital identity, payment and notification services — per project scope." },
                  ]
              ).map((item) => (
                <div key={item.t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-base text-[#0B3D2E]">{item.t}</h4>
                    <p className="mt-1 text-[15px] md:text-[16px] text-[#4B5563] leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          5. تطبيقات الويب
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "تطبيقات ويب مؤسسية سريعة وقابلة للتوسع"
                : "Fast, scalable enterprise web applications"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "نطور تطبيقات ويب تعمل على أجهزة الكمبيوتر والهواتف والأجهزة اللوحية، وتوفر واجهات واضحة للمستخدمين مع إمكانية الربط بالأنظمة وقواعد البيانات والخدمات الرقمية."
                : "We build web applications that run on computers, phones and tablets, providing clear user interfaces with integration to systems, databases and digital services."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "خصائص التطبيقات" : "Application features"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["تصميم متجاوب مع جميع الأجهزة", "دعم اللغة العربية والإنجليزية", "إدارة المستخدمين والصلاحيات", "مسارات العمل والموافقات", "التنبيهات والإشعارات", "التقارير ولوحات المعلومات", "الربط مع قواعد البيانات", "التكامل عبر API", "إدارة المحتوى والوثائق", "قابلية التوسع والتطوير"]
                : ["Responsive across devices", "Arabic & English support", "User & permission management", "Workflows & approvals", "Alerts & notifications", "Reports & dashboards", "Database integration", "API integration", "Content & document management", "Scalability & evolution"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={webAppImg}
            alt={isAr
              ? "تطوير تطبيق ويب مؤسسي متجاوب ومتكامل مع الأنظمة"
              : "Building a responsive enterprise web application integrated with systems"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover mt-6 lg:mt-0"
          />
        </div>
      </Section>

      {/* ============================================================
          6. تطبيقات الجوال
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <img
            src={mobileAppImg}
            alt={isAr
              ? "تطوير تطبيقات الجوال للجهات الحكومية والمؤسسات"
              : "Mobile application development for government and enterprises"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1 mt-6 lg:mt-0"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "تطبيقات جوال تربط المستخدم بالخدمة أينما كان"
                : "Mobile apps that connect users to services anywhere"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "نطور تطبيقات هاتف للجهات الحكومية والمؤسسات والشركات، بحيث توفر خدمات سهلة وآمنة للموظفين والعملاء والمتعاملين والفرق الميدانية."
                : "We build mobile apps for government entities, organizations and companies, providing easy, secure services for employees, customers, clients and field teams."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "الوظائف المحتملة" : "Potential features"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["تسجيل الدخول وإدارة الحساب", "تقديم الطلبات", "رفع المستندات", "متابعة حالة الطلب", "الإشعارات", "الموافقات", "الموقع الجغرافي", "التقاط الصور", "العمل الميداني", "الخدمات الذاتية", "التكامل مع أنظمة المؤسسة"]
                : ["Login & account management", "Submitting requests", "Uploading documents", "Tracking request status", "Notifications", "Approvals", "Geolocation", "Photo capture", "Field work", "Self-services", "Integration with enterprise systems"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          7. البوابات الرقمية
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "بوابات رقمية مصممة لكل فئة من المستخدمين"
            : "Digital portals designed for each user group"}
          intro={
            isAr
              ? "تساعد البوابات الرقمية المؤسسة على توفير نقطة وصول موحدة للخدمات والمعلومات والطلبات والبيانات."
              : "Digital portals give the organization a unified access point for services, information, requests and data."}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 mt-6">
          {[
            {
              icon: Users,
              hAr: "بوابة المتعاملين والعملاء",
              hEn: "Customer & client portal",
              itemsAr: ["تسجيل المستخدم", "عرض الخدمات", "تقديم الطلبات", "رفع الوثائق", "متابعة المعاملات", "إدارة الحساب", "الإشعارات", "الدفع عند الحاجة"],
              itemsEn: ["User registration", "Viewing services", "Submitting requests", "Uploading documents", "Tracking transactions", "Account management", "Notifications", "Payment when needed"],
            },
            {
              icon: Users,
              hAr: "بوابة الموظفين",
              hEn: "Employee portal",
              itemsAr: ["الخدمات الذاتية", "طلبات الموارد البشرية", "السياسات والإجراءات", "الموافقات", "المهام", "التعاميم", "المستندات", "التقارير الشخصية"],
              itemsEn: ["Self-services", "HR requests", "Policies & procedures", "Approvals", "Tasks", "Circulars", "Documents", "Personal reports"],
            },
            {
              icon: Building2,
              hAr: "بوابة الموردين",
              hEn: "Vendor portal",
              itemsAr: ["تسجيل المورد", "تحديث البيانات", "الفرص والمنافسات", "تقديم العروض", "أوامر الشراء", "الفواتير", "متابعة المدفوعات", "إدارة المستندات"],
              itemsEn: ["Vendor registration", "Data updates", "Opportunities & tenders", "Submitting offers", "Purchase orders", "Invoices", "Payment tracking", "Document management"],
            },
            {
              icon: Building2,
              hAr: "بوابة الشركاء",
              hEn: "Partner portal",
              itemsAr: ["إدارة الحسابات", "الوصول إلى المعلومات", "تبادل المستندات", "متابعة الأنشطة", "التقارير", "التواصل والإشعارات"],
              itemsEn: ["Account management", "Access to information", "Document exchange", "Activity tracking", "Reports", "Communication & notifications"],
            },
          ].map((portal) => {
            const Icon = portal.icon;
            return (
              <Card key={portal.hEn} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
                <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B3D2E]">{isAr ? portal.hAr : portal.hEn}</h3>
                <ul className="mt-3 grid gap-1.5 md:grid-cols-2">
                  {(isAr ? portal.itemsAr : portal.itemsEn).map((x) => (
                    <li key={x} className="flex items-start gap-2 text-[14px] md:text-[15px] text-[#4B5563]">
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
          8. تكامل الأنظمة
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "ربط الأنظمة والبيانات ضمن بيئة مؤسسية موحدة"
            : "Connecting systems and data in a unified enterprise environment"}
          intro={
            isAr
              ? "قد تعمل المؤسسة على عدة أنظمة داخلية وخارجية. تساعد خدمات تكامل الأنظمة على توحيد تدفق البيانات وتقليل التكرار وتحسين دقة الإجراءات."
              : "The organization may run on multiple internal and external systems. System integration services help unify data flow, reduce duplication and improve process accuracy."}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <h3 className="font-bold mb-3 text-[#0B3D2E]">
              {isAr ? "الأنظمة القابلة للتكامل" : "Systems that can be integrated"}
            </h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["أنظمة ERP", "أنظمة CRM", "أنظمة الموارد البشرية", "أنظمة الحضور والانصراف", "أنظمة إدارة الوثائق", "بوابات الخدمات", "أنظمة الدفع", "أنظمة الرسائل والإشعارات", "قواعد البيانات", "تطبيقات الهاتف", "منصات الذكاء الاصطناعي", "الأنظمة الحكومية والخارجية وفق الإمكانات المتاحة"]
                : ["ERP systems", "CRM systems", "HR systems", "Attendance systems", "Document management", "Service portals", "Payment systems", "Messaging & notifications", "Databases", "Mobile apps", "AI platforms", "Government & external systems per available capabilities"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-bold mb-3 text-[#0B3D2E]">
              {isAr ? "أساليب التكامل" : "Integration methods"}
            </h3>
            <ul className="mt-3 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["REST APIs", "SOAP Web Services", "Webhooks", "تكامل قواعد البيانات", "تبادل الملفات", "منصات وسيطة للتكامل", "واجهات الموردين والأنظمة الخارجية"]
                : ["REST APIs", "SOAP Web Services", "Webhooks", "Database integration", "File exchange", "Middleware integration platforms", "Vendor & external system interfaces"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* مخطط معماري */}
          <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
            <h3 className="font-bold mb-3 text-sm text-[#0B3D2E]">
              {isAr ? "المخطط المعماري" : "Architecture diagram"}
            </h3>
            <div className="flex flex-col items-center gap-2 text-xs md:text-sm">
              <div className="rounded-lg border border-border bg-background px-4 py-2 text-center">
                {isAr ? "بوابة ويب / تطبيق هاتف / Agent AI" : "Web portal / mobile app / AI Agent"}
              </div>
              <ArrowLeft className="h-4 w-4 text-muted-foreground rotate-[-90deg]" />
              <div className="rounded-lg border border-[color:var(--brand-deep)]/40 bg-[color:var(--brand-deep)]/5 px-4 py-2 text-center font-semibold">
                {isAr ? "طبقة API والتكامل" : "API & integration layer"}
              </div>
              <ArrowLeft className="h-4 w-4 text-muted-foreground rotate-[-90deg]" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                {(isAr
                  ? ["ERP / CRM", "الوثائق", "الحضور", "قواعد البيانات"]
                  : ["ERP / CRM", "Documents", "Attendance", "Databases"]
                ).map((x) => (
                  <div key={x} className="rounded-lg border border-border bg-background px-2 py-2 text-center">
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          9. واجهات API
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "تصميم وتطوير واجهات API قابلة للإدارة والتوسع"
            : "Designing and building manageable, scalable APIs"}
          intro={
            isAr
              ? "تتيح واجهات API تبادل البيانات والوظائف بين الأنظمة والتطبيقات بطريقة منظمة، وتساعد المؤسسة على إضافة خدمات جديدة دون إعادة بناء جميع الأنظمة."
              : "APIs allow data and functions to be exchanged between systems and applications in an organized way, helping the organization add new services without rebuilding all systems."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["تحليل متطلبات التكامل", "تصميم بنية API", "تطوير واجهات REST أو SOAP", "توثيق الواجهات", "إدارة الإصدارات", "اختبار التكامل", "معالجة الأخطاء", "تسجيل العمليات", "تحديد الصلاحيات", "فرق دعم الأنظمة المتكاملة"]
            : ["Analyzing integration requirements", "API architecture design", "REST or SOAP development", "API documentation", "Version management", "Integration testing", "Error handling", "Operation logging", "Permissions setup", "Support for integrated systems"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 max-w-3xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
            <p className="text-[15px] md:text-base text-[#4B5563] leading-relaxed">
              {isAr
                ? "تحدد آلية المصادقة والصلاحيات وإدارة الوصول وفق البنية التقنية والسياسات ومتطلبات المشروع."
                : "Authentication, permissions and access management are defined according to the technology architecture, policies and project requirements."}
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          10. تحديث الأنظمة القديمة
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <img
            src={legacyImg}
            alt={isAr
              ? "تحديث وإعادة تطوير الأنظمة القديمة للمؤسسات"
              : "Legacy system modernization and redevelopment for enterprises"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1 mt-6 lg:mt-0"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "تحديث الأنظمة القديمة دون فقدان القيمة التشغيلية"
                : "Modernizing legacy systems without losing operational value"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "قد تصبح الأنظمة القديمة بطيئة أو صعبة الصيانة أو غير قابلة للتكامل مع الخدمات الحديثة. تساعد أربتك المؤسسات على تقييم هذه الأنظمة ووضع مسار مناسب لتحديثها أو إعادة بنائها."
                : "Legacy systems can become slow, hard to maintain or unable to integrate with modern services. ARABTEC helps organizations assess these systems and define the right path to modernize or rebuild them."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "خيارات التحديث" : "Modernization options"}
            </h3>

            <div className="mt-4 space-y-3">
              {(isAr
                ? [
                    { t: "تحسين النظام الحالي", d: "تطوير وظائف وواجهات محددة مع المحافظة على البنية الأساسية عند ملاءمتها." },
                    { t: "إعادة بناء التطبيق", d: "تطوير النظام باستخدام بنية وتقنيات حديثة مع إعادة تصميم تجربة المستخدم." },
                    { t: "تحويل النظام إلى تطبيق ويب", d: "نقل التطبيق المكتبي أو المحلي إلى بيئة ويب قابلة للوصول والإدارة." },
                    { t: "الانتقال إلى السحابة", d: "تحديث النظام ليعمل ضمن بيئة سحابية أو هجينة وفق متطلبات المؤسسة." },
                    { t: "فصل النظام إلى خدمات", d: "تقسيم الوظائف إلى خدمات مستقلة أو واجهات API لتسهيل التكامل والتوسع." },
                    { t: "ترحيل البيانات", d: "تنظيف ونقل البيانات من النظام القديم إلى النظام الجديد وفق خطة معتمدة." },
                  ]
                : [
                    { t: "Improving the current system", d: "Developing specific functions and interfaces while keeping the base architecture when suitable." },
                    { t: "Rebuilding the application", d: "Developing the system using modern architecture and technologies with a redesigned UX." },
                    { t: "Converting to a web app", d: "Moving a desktop or local application to a web environment that can be accessed and managed." },
                    { t: "Migrating to cloud", d: "Modernizing the system to run in a cloud or hybrid environment per the organization's requirements." },
                    { t: "Splitting into services", d: "Dividing functions into independent services or APIs for easier integration and expansion." },
                    { t: "Data migration", d: "Cleaning and transferring data from the old system to the new one per an approved plan." },
                  ]
              ).map((item) => (
                <div key={item.t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-base text-[#0B3D2E]">{item.t}</h4>
                    <p className="mt-1 text-[15px] md:text-[16px] text-[#4B5563] leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          11. تجربة المستخدم
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "تجربة استخدام واضحة تدعم إنجاز الخدمة"
            : "Clear UX that supports service completion"}
          intro={
            isAr
              ? "تصمم واجهات الأنظمة بناءً على مهام المستخدمين واحتياجاتهم، بحيث تكون واضحة ومتناسقة وسهلة الاستخدام على مختلف الأجهزة."
              : "System interfaces are designed based on user tasks and needs, so they are clear, consistent and easy to use across devices."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["دراسة المستخدمين", "تحليل رحلة الخدمة", "تصميم الهيكل والتنقل", "إعداد النماذج الأولية", "تصميم واجهة المستخدم", "اختبار سهولة الاستخدام", "تطبيق الهوية المؤسسية", "دعم اللغة العربية واتجاه RTL", "تحسين الوصول عبر الهاتف"]
            : ["User research", "Service journey analysis", "Structure & navigation design", "Prototyping", "UI design", "Usability testing", "Applying corporate identity", "Arabic & RTL support", "Mobile access optimization"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ============================================================
          12. قواعد البيانات
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "بنية بيانات تدعم استقرار النظام ودقة المعلومات"
            : "Data architecture supporting system stability and information accuracy"}
          intro={
            isAr
              ? "تعتمد الأنظمة المؤسسية على تصميم قاعدة بيانات واضح وقابل للتوسع، يراعي العلاقات بين البيانات وجودتها وسهولة الاستعلام والتقارير والتكامل."
              : "Enterprise systems rely on a clear, scalable database design that considers data relationships, quality, ease of querying, reporting and integration."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["تصميم قواعد البيانات", "تحليل نماذج البيانات", "تنظيف البيانات", "نقل البيانات", "تحسين الاستعلامات", "أرشفة البيانات", "إدارة البيانات المرجعية", "إعداد التقارير", "تكامل قواعد البيانات", "مراجعة جودة البيانات"]
            : ["Database design", "Data model analysis", "Data cleaning", "Data migration", "Query optimization", "Data archiving", "Reference data management", "Reporting setup", "Database integration", "Data quality review"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <Database className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ============================================================
          13. الذكاء الاصطناعي داخل البرمجيات
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "إضافة إمكانات الذكاء الاصطناعي إلى الأنظمة والتطبيقات"
            : "Adding AI capabilities to systems and applications"}
          intro={
            isAr
              ? "يمكن دمج حلول الذكاء الاصطناعي في الأنظمة والبوابات لتقديم وظائف ذكية تساعد المستخدمين وتدعم العمليات."
              : "AI solutions can be embedded in systems and portals to provide intelligent functions that help users and support operations."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["مساعد ذكي داخل النظام", "البحث الذكي في الوثائق", "تصنيف الطلبات", "استخراج البيانات من المستندات", "تلخيص التقارير", "اقتراح الردود", "تحليل البيانات", "توجيه المعاملات", "دعم الموظفين والمتعاملين"]
            : ["In-system AI assistant", "Intelligent document search", "Request classification", "Extracting data from documents", "Report summarization", "Response suggestions", "Data analytics", "Transaction routing", "Supporting employees & customers"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <Sparkles className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <CTAButton to="/services/ai-agents" variant="outline">
            {isAr ? "استكشف حلول الذكاء الاصطناعي و AI Agents" : "Explore AI & AI Agents solutions"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          14. ربط البرمجيات بأنظمة ERP
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "تطبيقات مخصصة تعمل مع نظام ERP"
            : "Custom applications working with your ERP"}
          intro={
            isAr
              ? "يمكن تطوير تطبيقات وبوابات ووحدات مخصصة ترتبط بنظام ERP لتمكين الموظفين والعملاء والموردين من الوصول إلى الخدمات والبيانات وفق الصلاحيات."
              : "Custom applications, portals and modules can be built and connected to the ERP, enabling employees, customers and vendors to access services and data within permissions."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["بوابة موظفين مرتبطة بالموارد البشرية", "تطبيق موافقات مرتبط بـ ERP", "بوابة موردين مرتبطة بالمشتريات", "تطبيق مخزون ميداني", "بوابة عملاء مرتبطة بالمبيعات والفواتير", "لوحة تقارير تنفيذية", "نظام طلبات مرتبط بالمالية والمخزون"]
            : ["Employee portal connected to HR", "Approval app connected to ERP", "Vendor portal connected to procurement", "Field inventory app", "Customer portal connected to sales & invoices", "Executive reports dashboard", "Request system connected to finance & inventory"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <CTAButton to="/services/erp-business-applications" variant="outline">
            {isAr ? "استكشف أنظمة ERP وتطبيقات الأعمال" : "Explore ERP & business applications"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          15. القطاعات المستفيدة
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "تطوير برمجيات مخصصة لمتطلبات القطاعات الحيوية"
            : "Custom software development for vital sector requirements"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { key: "government", ar: "الجهات الحكومية", en: "Government entities", itemsAr: ["بوابات الخدمات", "إدارة المعاملات", "الموافقات", "تطبيقات الموظفين", "تكامل الأنظمة", "لوحات الأداء"], itemsEn: ["Service portals", "Transactions management", "Approvals", "Employee apps", "System integration", "Performance dashboards"] },
            { key: "oil-gas", ar: "النفط والغاز", en: "Oil & gas", itemsAr: ["أنظمة العمليات", "إدارة المشاريع والمواقع", "تطبيقات الفرق الميدانية", "إدارة الصيانة", "تقارير الأداء", "تكامل البيانات"], itemsEn: ["Operations systems", "Projects & sites management", "Field team apps", "Maintenance management", "Performance reports", "Data integration"] },
            { key: "education", ar: "التعليم", en: "Education", itemsAr: ["بوابات الطالب والموظفين", "الأنظمة الإدارية", "تطبيقات الخدمات", "إدارة الطلبات", "المنصات الرقمية", "التقارير"], itemsEn: ["Student & staff portals", "Administrative systems", "Service apps", "Request management", "Digital platforms", "Reports"] },
            { key: "healthcare", ar: "الرعاية الصحية", en: "Healthcare", itemsAr: ["الأنظمة الإدارية", "إدارة الطلبات", "بوابات الموظفين", "تكامل الأنظمة", "تطبيقات العمليات", "إدارة الوثائق"], itemsEn: ["Administrative systems", "Request management", "Employee portals", "System integration", "Operations apps", "Document management"] },
            { key: "banking", ar: "البنوك والخدمات المالية", en: "Banking & finance", itemsAr: ["بوابات العملاء والموظفين", "أتمتة الإجراءات", "أنظمة الموافقات", "تكامل التطبيقات", "إدارة الوثائق", "لوحات المتابعة"], itemsEn: ["Customer & employee portals", "Process automation", "Approval systems", "Application integration", "Document management", "Tracking dashboards"] },
            { key: "enterprise", ar: "الشركات والمؤسسات", en: "Enterprises", itemsAr: ["أنظمة الأعمال المخصصة", "بوابات العملاء والموردين", "تطبيقات الهاتف", "أنظمة الموافقات", "التكامل مع CRM و ERP", "تقارير الإدارة"], itemsEn: ["Custom business systems", "Customer & vendor portals", "Mobile apps", "Approval systems", "CRM & ERP integration", "Management reports"] },
          ].map((sec) => (
            <Card key={sec.key} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
              <h3 className="font-bold text-base mb-3 text-[#0B3D2E]">{isAr ? sec.ar : sec.en}</h3>
              <ul className="space-y-1.5">
                {(isAr ? sec.itemsAr : sec.itemsEn).map((x) => (
                  <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                    <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <CTAButton to="/industries" variant="outline">
            {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          16. منهجية التطوير — 10 مراحل
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "منهجية منظمة من الفكرة إلى التشغيل"
            : "A structured methodology from idea to operations"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {(isAr
            ? [
                { t: "اكتشاف الاحتياج", d: "فهم أهداف المؤسسة والمستخدمين والتحديات والأنظمة والنتائج المطلوبة." },
                { t: "تحليل المتطلبات", d: "توثيق الوظائف والإجراءات والبيانات والتكاملات والصلاحيات." },
                { t: "تصميم تجربة المستخدم", d: "إعداد رحلة المستخدم والنماذج الأولية والواجهات الرئيسية." },
                { t: "التصميم الفني", d: "اختيار البنية التقنية وقواعد البيانات وواجهات التكامل." },
                { t: "التطوير المرحلي", d: "تطوير الوظائف ضمن مراحل وإصدارات قابلة للمراجعة." },
                { t: "الاختبار وضمان الجودة", d: "اختبار الوظائف والتكامل والأداء وتجربة المستخدم." },
                { t: "ترحيل البيانات والتكامل", d: "نقل البيانات وربط النظام بالأنظمة والخدمات المطلوبة." },
                { t: "اختبار قبول المستخدم", d: "مراجعة النظام مع المستخدمين الرئيسيين واعتماد الوظائف." },
                { t: "الإطلاق والتدريب", d: "نشر النظام وتدريب المستخدمين وفرق الدعم." },
                { t: "الدعم والتطوير", d: "معالجة الملاحظات ومتابعة الأداء وإطلاق التحسينات." },
              ]
            : [
                { t: "Requirement discovery", d: "Understanding organizational goals, users, challenges, systems and expected outcomes." },
                { t: "Requirements analysis", d: "Documenting functions, procedures, data, integrations and permissions." },
                { t: "UX design", d: "Preparing user journey, prototypes and main interfaces." },
                { t: "Technical design", d: "Selecting architecture, databases and integration interfaces." },
                { t: "Phased development", d: "Developing functions in reviewable phases and releases." },
                { t: "Testing & QA", d: "Testing functionality, integration, performance and UX." },
                { t: "Data migration & integration", d: "Migrating data and connecting the system to required systems and services." },
                { t: "User acceptance testing", d: "Reviewing the system with key users and approving functions." },
                { t: "Go-live & training", d: "Deploying the system and training users and support teams." },
                { t: "Support & evolution", d: "Handling feedback, monitoring performance and releasing improvements." },
              ]
          ).map((step, i) => (
            <li key={i} className="relative rounded-xl border border-border bg-card p-4 md:p-5 shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-[color:var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1 font-bold text-[#0B3D2E]">{step.t}</div>
              <p className="mt-1 text-[14px] md:text-[15px] text-[#4B5563] leading-relaxed">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          17. نماذج التنفيذ
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr ? "نماذج مرنة لتنفيذ المشروع" : "Flexible delivery models"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? [
                { icon: Layers, t: "تطوير مشروع كامل", d: "تحليل وتصميم وتطوير واختبار وإطلاق نظام أو منصة متكاملة." },
                { icon: Workflow, t: "تطوير مرحلي", d: "إطلاق الوظائف الأساسية أولًا، ثم إضافة الوحدات والتكاملات تدريجيًا." },
                { icon: RefreshCw, t: "تحديث نظام قائم", d: "تطوير أو إعادة بناء نظام موجود وتحسين بنيته ووظائفه." },
                { icon: Plug, t: "تطوير وحدة أو تكامل", d: "تنفيذ تطبيق أو وحدة أو API محدد مرتبط بأنظمة المؤسسة." },
                { icon: Sparkles, t: "نموذج أولي أو Proof of Concept", d: "بناء نسخة أولية لاختبار الفكرة وتجربة المستخدم والتكامل قبل المشروع الكامل." },
              ]
            : [
                { icon: Layers, t: "Full project development", d: "Analysis, design, development, testing and launch of a complete system or platform." },
                { icon: Workflow, t: "Phased development", d: "Launch core functions first, then gradually add modules and integrations." },
                { icon: RefreshCw, t: "Existing system modernization", d: "Developing or rebuilding an existing system and improving its architecture and functions." },
                { icon: Plug, t: "Module or integration development", d: "Delivering a specific application, module or API linked to enterprise systems." },
                { icon: Sparkles, t: "Prototype or Proof of Concept", d: "Building an initial version to test the idea, UX and integration before the full project." },
              ]
          ).map((m) => {
            const Icon = m.icon;
            return (
              <Card key={m.t} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
                <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B3D2E]">{m.t}</h3>
                <p className="mt-2 text-[15px] md:text-base text-[#4B5563] leading-relaxed">{m.d}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          18. لماذا أربتك؟
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "لماذا تختار المؤسسات أربتك لتطوير البرمجيات؟"
            : "Why organizations choose ARABTEC for software development"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { icon: Users, t: "فهم احتياجات المؤسسة", d: "نحلل العمليات والمستخدمين والأنظمة قبل بدء التطوير." },
                { icon: Layers, t: "خبرة متعددة المجالات", d: "نجمع بين البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والتكامل." },
                { icon: Sparkles, t: "حلول مخصصة وقابلة للتوسع", d: "نطور النظام وفق احتياجات المؤسسة الحالية مع مراعاة التوسع مستقبلًا." },
                { icon: Plug, t: "تكامل الأنظمة", d: "نصمم التطبيقات للعمل ضمن البيئة التقنية القائمة، وليس كأنظمة منفصلة." },
                { icon: Globe, t: "دعم اللغة العربية", d: "نطور واجهات عربية تدعم اتجاه RTL، مع إمكانية توفير الإنجليزية." },
                { icon: Workflow, t: "تنفيذ مرحلي وشفاف", d: "نقسم المشروع إلى مراحل واضحة قابلة للمراجعة والاعتماد." },
                { icon: ShieldCheck, t: "اختبار وتدريب", d: "نركز على جودة الوظائف وتجربة المستخدم وتبني النظام." },
                { icon: CheckCircle2, t: "نقطة مسؤولية واحدة", d: "إدارة التحليل والتصميم والتطوير والتكامل والإطلاق والدعم ضمن نطاق واضح." },
              ]
            : [
                { icon: Users, t: "Understanding your needs", d: "We analyze processes, users and systems before starting development." },
                { icon: Layers, t: "Multidisciplinary expertise", d: "We combine software, ERP, AI, cloud, networks and integration." },
                { icon: Sparkles, t: "Custom, scalable solutions", d: "We develop the system around current needs, planning for future growth." },
                { icon: Plug, t: "System integration", d: "We design applications to work within the existing technology environment, not as isolated systems." },
                { icon: Globe, t: "Arabic language support", d: "We build Arabic interfaces with RTL support, and optionally English." },
                { icon: Workflow, t: "Transparent phased delivery", d: "We split the project into clear, reviewable and approvable phases." },
                { icon: ShieldCheck, t: "Testing & training", d: "We focus on functionality quality, UX and system adoption." },
                { icon: CheckCircle2, t: "Single point of accountability", d: "Managing analysis, design, development, integration, launch and support within a clear scope." },
              ]
          ).map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.t} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
                <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B3D2E]">{c.t}</h3>
                <p className="mt-2 text-[15px] md:text-base text-[#4B5563] leading-relaxed">{c.d}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          19. خدمات مرتبطة
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "خدمات تدعم نجاح المشروع البرمجي"
            : "Services supporting the success of your software project"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {[
            { ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI & AI Agents solutions", descAr: "دمج المساعدين الذكيين والبحث في الوثائق وأتمتة المهام داخل التطبيقات.", descEn: "Embedding AI assistants, document search and task automation inside applications.", link: "ai-agents" },
            { ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & business applications", descAr: "ربط النظام المخصص بالعمليات والبيانات المالية والإدارية والتشغيلية.", descEn: "Connecting the custom system to financial, administrative and operational processes and data.", link: "erp-business-applications" },
            { ar: "السحابة والبنية التحتية", en: "Cloud & infrastructure", descAr: "تجهيز بيئة الاستضافة والخوادم والتخزين والنسخ الاحتياطي.", descEn: "Preparing hosting, servers, storage and backup environment.", link: "cloud-infrastructure" },
            { ar: "الشبكات والاتصال", en: "Networks & connectivity", descAr: "توفير الاتصال بين المستخدمين والمواقع والأنظمة.", descEn: "Providing connectivity between users, sites and systems.", link: "network-connectivity" },
            { ar: "أنظمة الحضور والتحكم بالدخول", en: "Attendance & access control", descAr: "ربط البرمجيات بأنظمة الحضور والانصراف والموارد البشرية.", descEn: "Connecting software to attendance and HR systems.", link: "surveillance-access-control" },
          ].map((c) => (
            <Card key={c.link} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
              <h3 className="font-bold text-base text-[#0B3D2E]">{isAr ? c.ar : c.en}</h3>
              <p className="mt-2 text-[15px] md:text-base text-[#4B5563] leading-relaxed">
                {isAr ? c.descAr : c.descEn}
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: c.link }}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0B3D2E] hover:text-[color:var(--gold)]"
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
        <div className="relative container-page py-10 md:py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground/90">
            {isAr
              ? "هل لديكم نظام أو منصة ترغبون في تطويرها؟"
              : "Do you have a system or platform you want to develop?"}
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-[16px] md:text-lg text-primary-foreground/90 leading-relaxed">
            {isAr
              ? "شاركوا فريق أربتك بفكرة النظام أو التحدي التشغيلي أو التطبيق الحالي، وسنعمل معكم على دراسة المتطلبات وتحديد الوظائف والتكاملات وخطة التنفيذ المناسبة."
              : "Share your system idea, operational challenge or current application with the ARABTEC team — we'll work with you to study requirements and define the right functions, integrations and delivery plan."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-bold text-primary hover:bg-secondary transition"
            >
              {isAr ? "اطلب استشارة تطوير برمجيات" : "Request a development consultation"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-gold transition"
            >
              {isAr ? "اطلب عرضًا فنيًا" : "Request a technical proposal"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-gold transition"
            >
              {isAr ? "اطلب نموذجًا أوليًا" : "Request a prototype"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          21. FAQ
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن تطوير البرمجيات وتكامل الأنظمة"
            : "Frequently asked questions about software development & system integration"}
        />

        <div className="mt-6">
          <FAQ
            items={[
              {
                q: { ar: "ما المقصود بتطوير البرمجيات المخصصة؟", en: "What is custom software development?" },
                a: {
                  ar: "هو تصميم وتطوير نظام أو تطبيق وفق إجراءات واحتياجات مؤسسة محددة، بدلًا من الاعتماد على منتج جاهز لا يغطي جميع المتطلبات.",
                  en: "It's the design and development of a system or application around a specific organization's procedures and needs, instead of relying on a ready-made product that doesn't cover all requirements.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك تطوير برمجيات للجهات الحكومية؟", en: "Does ARABTEC develop software for government entities?" },
                a: {
                  ar: "نعم، يمكن تطوير بوابات خدمات وأنظمة معاملات وموافقات وتطبيقات موظفين ولوحات متابعة وتكاملات تناسب الجهات الحكومية، وفق متطلبات المشروع.",
                  en: "Yes — service portals, transactions, approvals, employee apps, tracking dashboards and integrations suited to government entities can be developed per project requirements.",
                },
              },
              {
                q: { ar: "هل تطور أربتك تطبيقات ويب؟", en: "Does ARABTEC build web applications?" },
                a: {
                  ar: "نعم، تشمل الخدمات تطوير تطبيقات ويب مؤسسية متجاوبة ترتبط بقواعد البيانات والأنظمة والخدمات الأخرى.",
                  en: "Yes — the services include developing responsive enterprise web apps connected to databases, systems and other services.",
                },
              },
              {
                q: { ar: "هل تطور أربتك تطبيقات Android و iOS؟", en: "Does ARABTEC build Android and iOS apps?" },
                a: {
                  ar: "نعم، يمكن تطوير تطبيقات جوال للموظفين والعملاء والمتعاملين والعمليات الميدانية، مع ربطها بأنظمة المؤسسة.",
                  en: "Yes — mobile apps for employees, customers, clients and field operations can be built and integrated with enterprise systems.",
                },
              },
              {
                q: { ar: "هل يمكن تطوير نظام مخصص من البداية؟", en: "Can a custom system be developed from scratch?" },
                a: {
                  ar: "نعم، تبدأ الخدمة بتحليل الاحتياج والمتطلبات، ثم تصميم وتطوير واختبار وإطلاق النظام.",
                  en: "Yes — the service starts with requirement and need analysis, then design, development, testing and launch.",
                },
              },
              {
                q: { ar: "هل يمكن تحديث نظام قديم بدلًا من استبداله؟", en: "Can a legacy system be modernized instead of replaced?" },
                a: {
                  ar: "يعتمد ذلك على حالة النظام. يمكن تحسينه أو إعادة بنائه أو نقله إلى بيئة ويب أو سحابية بعد تقييم البنية الحالية.",
                  en: "It depends on the system's state. It can be improved, rebuilt or moved to a web or cloud environment after assessing the current architecture.",
                },
              },
              {
                q: { ar: "ما المقصود بتكامل الأنظمة؟", en: "What is system integration?" },
                a: {
                  ar: "هو ربط الأنظمة والتطبيقات بحيث تتبادل البيانات والوظائف بصورة منظمة من خلال واجهات API أو وسائل تكامل أخرى.",
                  en: "It's connecting systems and applications so they exchange data and functions in an organized way through APIs or other integration methods.",
                },
              },
              {
                q: { ar: "هل يمكن ربط النظام مع ERP؟", en: "Can the system be integrated with ERP?" },
                a: {
                  ar: "نعم، يمكن ربط الأنظمة المخصصة بأنظمة ERP والوحدات المالية والموارد البشرية والمشتريات والمخزون وغيرها.",
                  en: "Yes — custom systems can be integrated with ERP and the finance, HR, procurement, inventory and other modules.",
                },
              },
              {
                q: { ar: "هل يمكن ربط النظام بمنصة ذكاء اصطناعي؟", en: "Can the system be integrated with an AI platform?" },
                a: {
                  ar: "نعم، يمكن دمج AI Agents والبحث الذكي ومعالجة المستندات وتحليل البيانات وفق حالة الاستخدام والصلاحيات.",
                  en: "Yes — AI Agents, intelligent search, document processing and data analytics can be integrated per use case and permissions.",
                },
              },
              {
                q: { ar: "هل تدعم الأنظمة اللغة العربية؟", en: "Do the systems support Arabic?" },
                a: {
                  ar: "نعم، يمكن تطوير واجهات عربية تدعم اتجاه RTL، إضافة إلى نسخة إنجليزية عند الحاجة.",
                  en: "Yes — Arabic interfaces with RTL support can be built, plus an English version when needed.",
                },
              },
              {
                q: { ar: "هل تشمل الخدمة تصميم واجهة المستخدم؟", en: "Does the service include UI design?" },
                a: {
                  ar: "يمكن أن تشمل الخدمة تحليل تجربة المستخدم وتصميم النماذج الأولية والواجهات قبل التطوير.",
                  en: "The service can include UX analysis and design of prototypes and interfaces before development.",
                },
              },
              {
                q: { ar: "هل تشمل الخدمة ترحيل البيانات؟", en: "Does the service include data migration?" },
                a: {
                  ar: "يمكن أن يشمل المشروع تنظيف وتحويل واختبار ونقل البيانات من الأنظمة القديمة.",
                  en: "The project can include cleaning, converting, testing and transferring data from legacy systems.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك خدمات الاختبار؟", en: "Does ARABTEC provide testing services?" },
                a: {
                  ar: "نعم، يمكن أن يشمل نطاق العمل الاختبارات الوظيفية والتكامل وقبول المستخدم والأداء والتوافق.",
                  en: "Yes — scope can include functional, integration, user acceptance, performance and compatibility testing.",
                },
              },
              {
                q: { ar: "كم يستغرق تطوير نظام مخصص؟", en: "How long does custom system development take?" },
                a: {
                  ar: "تعتمد المدة على حجم المشروع وعدد الوظائف والتكاملات والمستخدمين وجاهزية المتطلبات وسرعة الاعتماد.",
                  en: "Duration depends on project size, number of functions and integrations, users, requirements readiness and speed of approval.",
                },
              },
              {
                q: { ar: "هل يمكن تنفيذ المشروع على مراحل؟", en: "Can the project be delivered in phases?" },
                a: {
                  ar: "نعم، يمكن إطلاق الوظائف الأساسية أولًا ثم إضافة الوحدات والتكاملات ضمن مراحل لاحقة.",
                  en: "Yes — core functions can be launched first, then modules and integrations added in later phases.",
                },
              },
              {
                q: { ar: "هل يمكن البدء بنموذج أولي؟", en: "Can the project start with a prototype?" },
                a: {
                  ar: "نعم، يمكن بناء نموذج أولي أو Proof of Concept لاختبار الفكرة وتجربة المستخدم قبل التطوير الكامل.",
                  en: "Yes — a prototype or Proof of Concept can be built to test the idea and UX before full development.",
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
                name: "ما المقصود بتطوير البرمجيات المخصصة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "هو تصميم وتطوير نظام أو تطبيق وفق إجراءات واحتياجات مؤسسة محددة، بدلًا من الاعتماد على منتج جاهز لا يغطي جميع المتطلبات.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن ربط النظام مع ERP؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن ربط الأنظمة المخصصة بأنظمة ERP والوحدات المالية والموارد البشرية والمشتريات والمخزون وغيرها.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن البدء بنموذج أولي؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن بناء نموذج أولي أو Proof of Concept لاختبار الفكرة وتجربة المستخدم قبل التطوير الكامل.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}