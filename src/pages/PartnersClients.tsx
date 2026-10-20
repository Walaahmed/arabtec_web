import { useRef } from "react";
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
import { INDUSTRIES } from "@/lib/services-data";
import { useI18n } from "@/lib/i18n";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Database,
  Code2,
  Cloud,
  Network,
  ShieldCheck,
  Landmark,
  Fuel,
  GraduationCap,
  HeartPulse,
  Banknote,
  Building2,
  CheckCircle2,
  Handshake,
  BadgeCheck,
  Layers,
  Target,
  Users,
  Headphones,
  Sparkles,
  Lock,
} from "lucide-react";

// ============================================================
// الصور الرئيسية
// ============================================================
import heroImg from "@/assets/enterprise-technology-partnerships.jpg";
import partnerOppImg from "@/assets/arabtec-enterprise-technology-team.jpg";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

// ============================================================
// قراءة شعارات العملاء والشركاء ديناميكياً
// ============================================================
const clientLogos = Object.values(
  import.meta.glob("@/assets/logos/clients/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
  })
) as string[];

const partnerLogos = Object.values(
  import.meta.glob("@/assets/logos/partners/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
  })
) as string[];

const industryIcons = [Landmark, Fuel, GraduationCap, HeartPulse, Banknote, Building2];

export default function PartnersPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";
  
  // Refs لشريط العملاء وشريط الشركاء
  const clientsScrollRef = useRef<HTMLDivElement>(null);
  const partnersScrollRef = useRef<HTMLDivElement>(null);

  // دالة تحريك شريط العملاء
  const scrollClients = (direction: "left" | "right") => {
    const amount = direction === "left" ? -300 : 300;
    clientsScrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  // دالة تحريك شريط الشركاء
  const scrollPartners = (direction: "left" | "right") => {
    const amount = direction === "left" ? -300 : 300;
    partnersScrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  // ============================================
  // 1. مبادئ العلاقات
  // ============================================
  const principles = isAr
    ? [
        "الوضوح في نطاق العمل",
        "الالتزام بالمتطلبات",
        "اختيار التقنية المناسبة",
        "التنسيق بين الأطراف",
        "التوثيق والمتابعة",
        "احترام سرية المعلومات",
        "العمل وفق الصلاحيات والاتفاقيات",
        "التركيز على استمرارية العلاقة",
      ]
    : [
        "Clarity of scope",
        "Commitment to requirements",
        "Choosing the right technology",
        "Coordination among parties",
        "Documentation & follow-up",
        "Respecting information confidentiality",
        "Working within authorities & agreements",
        "Focus on relationship continuity",
      ];

  // ============================================
  // 2. القطاعات (للروابط)
  // ============================================
  const sectorLinks = [
    { key: "government", icon: Landmark, href: "/industries#government" },
    { key: "oil-gas", icon: Fuel, href: "/industries#oil-gas" },
    { key: "education", icon: GraduationCap, href: "/industries#education" },
    { key: "healthcare", icon: HeartPulse, href: "/industries#healthcare" },
    { key: "financial-services", icon: Banknote, href: "/industries#financial-services" },
    { key: "enterprise", icon: Building2, href: "/industries#enterprise" },
  ];

  // وصف كل قطاع
  const sectorDescAr: Record<string, string> = {
    government: "خبرة في الحلول التقنية والبنية التحتية والأنظمة التي تدعم الموظفين والخدمات والمباني والفروع الحكومية.",
    "oil-gas": "خبرة في الشبكات وربط المواقع والبنية التحتية والأنظمة المؤسسية والمراقبة للمواقع متعددة الاحتياجات.",
    education: "خبرة في الشبكات والبنية التقنية والأنظمة الإدارية والحضور والمراقبة للمؤسسات التعليمية.",
    healthcare: "حلول تقنية وإدارية وبنية تحتية للمنشآت الصحية وفق نطاق القدرات والمشروع.",
    "financial-services": "حلول مؤسسية للبرمجيات والتكامل والبنية التقنية والعمليات الإدارية وفق متطلبات الجهة.",
    enterprise: "حلول ERP والبرمجيات والشبكات والسحابة والحضور والمراقبة للمؤسسات متعددة الإدارات والفروع.",
  };
  const sectorDescEn: Record<string, string> = {
    government: "Expertise in technology, infrastructure and systems that support government employees, services, buildings and branches.",
    "oil-gas": "Expertise in networks, site connectivity, infrastructure, enterprise systems and surveillance for multi-requirement sites.",
    education: "Expertise in networks, IT infrastructure, administrative systems, attendance and surveillance for educational institutions.",
    healthcare: "Technology, administrative and infrastructure solutions for healthcare facilities within scope and project capabilities.",
    "financial-services": "Enterprise solutions for software, integration, IT infrastructure and administrative operations per the entity's requirements.",
    enterprise: "ERP, software, networks, cloud, attendance and surveillance solutions for multi-department and multi-branch organizations.",
  };

  // ============================================
  // 3. تصنيف الشركاء حسب مجال الحل
  // ============================================
  const partnerCategories = [
    {
      icon: Code2,
      titleAr: "البرمجيات وتطبيقات الأعمال",
      titleEn: "Software & Business Applications",
      itemsAr: ["أنظمة التشغيل", "قواعد البيانات", "تطبيقات الأعمال", "التراخيص", "أدوات التطوير", "منصات التعاون"],
      itemsEn: ["Operating systems", "Databases", "Business applications", "Licensing", "Development tools", "Collaboration platforms"],
      link: "software-development",
    },
    {
      icon: Cloud,
      titleAr: "السحابة والخوادم والتخزين",
      titleEn: "Cloud, Servers & Storage",
      itemsAr: ["الخوادم", "التخزين", "الافتراضية", "النسخ الاحتياطي", "المنصات السحابية", "بيئات مراكز البيانات"],
      itemsEn: ["Servers", "Storage", "Virtualization", "Backup", "Cloud platforms", "Data center environments"],
      link: "cloud-infrastructure",
    },
    {
      icon: Network,
      titleAr: "الشبكات والاتصال",
      titleEn: "Networks & Connectivity",
      itemsAr: ["المبدلات", "الموجهات", "نقاط الاتصال اللاسلكية", "حلول ربط المواقع", "الألياف الضوئية", "الاتصال الصوتي"],
      itemsEn: ["Switches", "Routers", "Wireless access points", "Site connectivity solutions", "Fiber optics", "Voice communications"],
      link: "network-connectivity",
    },
    {
      icon: ShieldCheck,
      titleAr: "أنظمة المراقبة والحضور",
      titleEn: "Surveillance & Attendance Systems",
      itemsAr: ["كاميرات المراقبة", "أجهزة التسجيل", "أجهزة الحضور", "قارئات البطاقات", "RFID", "التحكم بالدخول"],
      itemsEn: ["Surveillance cameras", "Recording devices", "Attendance devices", "Card readers", "RFID", "Access control"],
      link: "surveillance-access-control",
    },
    {
      icon: Cpu,
      titleAr: "الذكاء الاصطناعي والتكامل",
      titleEn: "AI & Integration",
      itemsAr: ["منصات الذكاء الاصطناعي", "نماذج اللغة", "أدوات التكامل", "معالجة الوثائق", "تحليل البيانات", "واجهات API"],
      itemsEn: ["AI platforms", "Language models", "Integration tools", "Document processing", "Data analytics", "API interfaces"],
      link: "ai-agents",
    },
  ];

  // ============================================
  // 4. معايير الاختيار
  // ============================================
  const criteria = [
    {
      icon: Target,
      hAr: "ملاءمة الحل",
      hEn: "Solution fit",
      dAr: "مدى توافق التقنية مع الوظائف والعمليات المطلوبة.",
      dEn: "How well the technology matches the required functions and operations.",
    },
    {
      icon: Layers,
      hAr: "قابلية التكامل",
      hEn: "Integration capability",
      dAr: "قدرة التقنية على العمل مع الأنظمة والتطبيقات والبيانات القائمة.",
      dEn: "The technology's ability to work with existing systems, applications and data.",
    },
    {
      icon: Sparkles,
      hAr: "قابلية التوسع",
      hEn: "Scalability",
      dAr: "إمكانية إضافة مستخدمين أو مواقع أو وحدات جديدة مستقبلاً.",
      dEn: "Ability to add users, sites or new modules in the future.",
    },
    {
      icon: Headphones,
      hAr: "سهولة التشغيل والدعم",
      hEn: "Operability & support",
      dAr: "توفر الأدوات والخبرات اللازمة لإدارة الحل وصيانته.",
      dEn: "Availability of tools and expertise to manage and maintain the solution.",
    },
    {
      icon: Banknote,
      hAr: "التكلفة الكلية",
      hEn: "Total cost",
      dAr: "مراعاة تكاليف التوريد والتنفيذ والتراخيص والتشغيل والدعم.",
      dEn: "Considering supply, implementation, licensing, operations and support costs.",
    },
    {
      icon: BadgeCheck,
      hAr: "متطلبات المؤسسة",
      hEn: "Organization requirements",
      dAr: "الالتزام بالسياسات الداخلية والاستضافة والصلاحيات والمتطلبات الفنية.",
      dEn: "Compliance with internal policies, hosting, access rights and technical requirements.",
    },
  ];

  // ============================================
  // 5. نموذج التعاون
  // ============================================
  const cooperationSteps = isAr
    ? [
        { t: "فهم متطلبات العميل", d: "تحديد الأهداف والأنظمة والمستخدمين والمواقع والمتطلبات التشغيلية." },
        { t: "تحديد الحل والتقنيات", d: "اختيار المكونات والمنصات والموردين المناسبين لنطاق المشروع." },
        { t: "إعداد العرض الفني", d: "تحديد نطاق العمل والمخرجات والمراحل والمسؤوليات." },
        { t: "التنسيق والتوريد", d: "تنسيق المنتجات والتراخيص والمكونات المطلوبة وفق الجدول المعتمد." },
        { t: "التنفيذ والتكامل", d: "تركيب أو تطوير الحل وربطه بالأنظمة والبنية التقنية." },
        { t: "الاختبار والتسليم", d: "اختبار الوظائف والمكونات والتكامل وتسليم المشروع." },
        { t: "الدعم والمتابعة", d: "تقديم الدعم والتحديثات والصيانة وفق نطاق الاتفاق." },
      ]
    : [
        { t: "Understanding client requirements", d: "Defining goals, systems, users, sites and operational requirements." },
        { t: "Solution & technology definition", d: "Selecting the right components, platforms and vendors for the project scope." },
        { t: "Technical proposal preparation", d: "Defining scope, deliverables, phases and responsibilities." },
        { t: "Coordination & supply", d: "Coordinating products, licenses and required components per the approved schedule." },
        { t: "Delivery & integration", d: "Installing or developing the solution and integrating with systems and infrastructure." },
        { t: "Testing & handover", d: "Testing functions, components and integration and handing over the project." },
        { t: "Support & follow-up", d: "Providing support, updates and maintenance per the agreement scope." },
      ];

  // ============================================
  // 6. لماذا تثق المؤسسات بأربتك
  // ============================================
  const whyTrust = [
    {
      icon: BadgeCheck,
      hAr: "خبرة ممتدة منذ عام 1996",
      hEn: "Extensive experience since 1996",
      dAr: "خبرة في الشبكات والاتصال والبنية التحتية والبرمجيات والأنظمة المؤسسية.",
      dEn: "Expertise in networks, connectivity, infrastructure, software and enterprise systems.",
    },
    {
      icon: Handshake,
      hAr: "علاقات متعددة مع مزودي التقنية",
      hEn: "Multiple technology vendor relationships",
      dAr: "القدرة على العمل مع تقنيات ومنتجات متنوعة وفق احتياج المشروع.",
      dEn: "Ability to work with a variety of technologies and products based on project needs.",
    },
    {
      icon: Users,
      hAr: "نقطة مسؤولية واضحة",
      hEn: "Clear point of accountability",
      dAr: "تنسيق مراحل التحليل والتصميم والتوريد والتنفيذ والتكامل والدعم.",
      dEn: "Coordinating analysis, design, supply, delivery, integration and support phases.",
    },
    {
      icon: Layers,
      hAr: "خبرة في القطاعات الحيوية",
      hEn: "Experience in vital sectors",
      dAr: "فهم احتياجات الجهات الحكومية والصناعية والتعليمية والمؤسسات الكبرى.",
      dEn: "Understanding the needs of government, industrial, educational and large enterprises.",
    },
    {
      icon: Sparkles,
      hAr: "حلول متكاملة",
      hEn: "Integrated solutions",
      dAr: "الجمع بين البرمجيات و ERP والذكاء الاصطناعي والسحابة والشبكات والأنظمة الذكية.",
      dEn: "Combining software, ERP, AI, cloud, networks and smart systems.",
    },
    {
      icon: Target,
      hAr: "مرونة في اختيار الحل",
      hEn: "Flexibility in solution choice",
      dAr: "عدم تقييد المشروع بتقنية واحدة عندما تتطلب الاحتياجات خيارات أخرى.",
      dEn: "Not restricting the project to a single technology when needs require other options.",
    },
    {
      icon: Headphones,
      hAr: "تنفيذ ودعم",
      hEn: "Delivery & support",
      dAr: "تقديم خدمات ما قبل التنفيذ وأثناءه وبعده وفق نطاق العقد.",
      dEn: "Pre-, during- and post-delivery services per contract scope.",
    },
    {
      icon: Lock,
      hAr: "الحفاظ على سرية العملاء",
      hEn: "Client confidentiality",
      dAr: "عدم نشر تفاصيل المشروعات أو البيانات أو الصور دون موافقة.",
      dEn: "Not publishing project details, data or images without consent.",
    },
  ];

  // ============================================
  // 7. الفئات المستهدفة للشراكة
  // ============================================
  const partnerTargets = isAr
    ? [
        "شركات البرمجيات",
        "مزودو أنظمة ERP",
        "مزودو حلول الذكاء الاصطناعي",
        "مزودو الحوسبة السحابية",
        "مصنعو الخوادم والتخزين",
        "مصنعو معدات الشبكات",
        "مزودو أنظمة المراقبة والحضور",
        "شركات التكامل المتخصصة",
        "مقدمو التدريب والدعم",
      ]
    : [
        "Software companies",
        "ERP solution providers",
        "AI solution providers",
        "Cloud computing providers",
        "Server & storage manufacturers",
        "Network equipment manufacturers",
        "Surveillance & attendance system providers",
        "Specialized integration companies",
        "Training & support providers",
      ];

  // ============================================
  // 8. نموذج التواصل المختصر
  // ============================================
  const formFields = isAr
    ? [
        "الاسم الكامل *",
        "اسم الجهة أو الشركة *",
        "المسمى الوظيفي",
        "البريد الإلكتروني للعمل *",
        "رقم الهاتف",
        "الدولة",
        "نوع الطلب *",
        "القطاع",
        "مجال الخدمة أو الشراكة *",
        "نبذة عن المشروع أو فرصة التعاون *",
        "هل ترغب في اجتماع؟",
        "الموافقة على سياسة الخصوصية *",
      ]
    : [
        "Full name *",
        "Organization or company name *",
        "Job title",
        "Work email *",
        "Phone number",
        "Country",
        "Request type *",
        "Sector",
        "Service or partnership area *",
        "Project or partnership brief *",
        "Would you like a meeting?",
        "Accept privacy policy *",
      ];

  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: isAr ? "الشركاء والعملاء | أربتك" : "Partners & Clients | ARABTEC",
          url: "/partners-clients",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: isAr ? "الرئيسية" : "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: isAr ? "الشركاء والعملاء" : "Partners & Clients", item: "/partners-clients" },
          ],
        }}
      />

      {/* ============================================================
          1. HERO
          ============================================================ */}
      <Section>
        <Breadcrumbs
          items={[
            { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
            { label: { ar: "الشركاء والعملاء", en: "Partners & Clients" } },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
          {/* الصورة — يسار */}
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={
                isAr
                  ? "علاقات تقنية مؤسسية تجمع أربتك بالعملاء والشركاء"
                  : "Enterprise technology relationships connecting ARABTEC with clients and partners"
              }
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* النص — يمين */}
         <div className="order-1 lg:order-2">
  {/* العنوان الفرعي الذهبي */}
  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
    {isAr
      ? "شراكات استراتيجية وثقة مؤسسية"
      : "Strategic partnerships and institutional trust"}
  </div>

  {/* العنوان الرئيسي */}
  <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
    {isAr
      ? "شركاؤنا وعملاؤنا | علاقات تبني الثقة وتصنع النجاح"
      : "Our Partners & Clients | Relationships that build trust and success"}
  </h1>

  {/* الفقرة الأولى */}
  <p className="mt-6 text-base text-[#4B5563] leading-relaxed">
    {isAr
      ? "بنت أربتك خبرتها من خلال العمل مع جهات ومؤسسات في قطاعات متعددة، والاستفادة من منظومة من التقنيات والموردين والمصنعين لتقديم حلول تقنية متكاملة تتناسب مع متطلبات كل مشروع."
      : "ARABTEC built its expertise by working with entities and organizations across multiple sectors, leveraging an ecosystem of technologies, vendors and manufacturers to deliver integrated solutions that fit each project's requirements."}
  </p>

  {/* الفقرة الثانية */}
  <p className="mt-5 text-base text-[#4B5563] leading-relaxed">
    {isAr
      ? "تساعد علاقاتنا التقنية وخبراتنا المؤسسية على توفير حلول تشمل تطوير البرمجيات، أنظمة ERP، الذكاء الاصطناعي، السحابة والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول."
      : "Our technology relationships and institutional expertise help deliver solutions covering software development, ERP, AI, cloud and infrastructure, networks and connectivity, and surveillance, attendance and access control systems."}
  </p>

  {/* الفقرة الثالثة */}
  <p className="mt-5 text-base text-[#4B5563] leading-relaxed">
    {isAr
      ? "نعرض في هذه الصفحة الجهات والعلامات والتقنيات التي تم التحقق من علاقتها بأربتك والمصرح بنشرها، مع المحافظة على الدقة والوضوح في وصف طبيعة كل علاقة."
      : "This page presents entities, brands and technologies whose relationship with ARABTEC has been verified and approved for publication, with accuracy and clarity in describing each relationship."}
  </p>

  {/* الأزرار */}
  <div className="mt-8 flex flex-wrap gap-3">
    {/* الزر الأول — أخضر (تواصل) */}
    <Link
      to="/contact"
      className="rounded-md bg-[#0B3D2E] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
    >
      {isAr ? "ناقش مشروعك معنا" : "Discuss your project with us"}
    </Link>

    {/* الزر الثاني — أبيض (استكشاف) */}
    <Link
      to="/services"
      className="rounded-md bg-white border border-[#0B3D2E] px-6 py-3 text-sm font-semibold text-[#0B3D2E] hover:bg-gray-50 transition"
    >
      {isAr ? "استكشف خدماتنا" : "Explore our services"}
    </Link>
  </div>
</div>
        </div>
      </Section>

      {/* ============================================================
          2. مقدمة العلاقات المؤسسية
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "خبرة قائمة على التعاون والثقة والمسؤولية"
            : "Expertise built on collaboration, trust and responsibility"}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "تتطلب المشاريع التقنية المؤسسية تعاونًا منظمًا بين العميل وفريق التنفيذ ومزودي التقنية والجهات ذات العلاقة."
                : "Enterprise technology projects require organized collaboration between the client, the delivery team, technology vendors and relevant parties."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تعمل أربتك على فهم متطلبات المؤسسة، اختيار الحلول والتقنيات المناسبة، تنسيق مراحل التنفيذ، ومتابعة التكامل والدعم ضمن نطاق المشروع المعتمد."
                : "ARABTEC works to understand the organization's requirements, select the right solutions and technologies, coordinate delivery phases, and follow up on integration and support within the approved project scope."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "لا تقتصر قيمة الشراكة التقنية على توريد منتج أو جهاز، بل تشمل مواءمة التقنية مع عمليات المؤسسة، ضمان قابلية التكامل، وتوفير الدعم المناسب طوال دورة حياة الحل."
                : "The value of a technology partnership is not limited to supplying a product or device — it includes aligning technology with the organization's operations, ensuring integration capability, and providing proper support throughout the solution lifecycle."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "المبادئ التي تحكم علاقاتنا" : "Principles governing our relationships"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          3. عملاؤنا
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "عملاؤنا" : "Our Clients"}
          intro={
            isAr
              ? "خبرات تقنية مع جهات ومؤسسات من قطاعات متعددة."
              : "Technology expertise with entities and organizations across multiple sectors."
          }
        />

        {/* شريط العملاء (نفس ستايل Partners3DSlider) */}
        <div className="mt-8 relative w-full overflow-hidden">
          <div className="container-page relative">
            
            <div className="relative">
              {/* زر اليسار */}
              <button
                onClick={() => scrollClients(isAr ? "right" : "left")}
                className="absolute start-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
                aria-label="Previous"
              >
                <ArrowLeft className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
              </button>

              <div
                ref={clientsScrollRef}
                className="flex gap-8 md:gap-12 overflow-x-auto items-center px-12 py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {clientLogos.length > 0 ? (
                  [...clientLogos, ...clientLogos].map((logo, i) => (
                    <div key={i} className="shrink-0 flex items-center justify-center">
                      <img
                        src={logo}
                        alt={`Client ${i}`}
                        loading="lazy"
                        decoding="async"
                        className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm text-center w-full">
                    {isAr ? "لا توجد شعارات عملاء مضافة حالياً." : "No client logos added yet."}
                  </p>
                )}
              </div>

              {/* زر اليمين */}
              <button
                onClick={() => scrollClients(isAr ? "left" : "right")}
                className="absolute end-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
                aria-label="Next"
              >
                <ArrowRight className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
              </button>
            </div>

          </div>
        </div>

        {/* رسالة احتياطية */}
        <div className="mt-10 max-w-3xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-5">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {isAr
              ? "عملت أربتك مع مؤسسات في قطاعات حكومية وصناعية وتعليمية وتجارية، مع الالتزام بسرية تفاصيل المشروعات وخصوصية العملاء."
              : "ARABTEC has worked with organizations in government, industrial, educational and commercial sectors, while maintaining confidentiality of project details and client privacy."}
          </p>
        </div>
      </Section>

      {/* ============================================================
          4. القطاعات التي اكتسبنا فيها الخبرة
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "خبرات مؤسسية عبر قطاعات حيوية"
            : "Institutional expertise across vital sectors"}
          intro={
            isAr
              ? "تعكس المشروعات والعلاقات التي بنتها أربتك فهمًا لاحتياجات قطاعات تختلف في عملياتها ومواقعها وأنظمتها وأولوياتها التقنية."
              : "The projects and relationships ARABTEC has built reflect an understanding of sectors that differ in operations, sites, systems and technology priorities."
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {sectorLinks.map((s, i) => {
            const Icon = s.icon;
            const ind = INDUSTRIES[i];
            return (
              <Card key={s.key}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">
                  {isAr ? ind.ar : ind.en}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? sectorDescAr[s.key] : sectorDescEn[s.key]}
                </p>
                <Link
                  to={s.href}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:text-gold"
                >
                  {isAr ? "استكشف القطاع" : "Explore sector"}
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <CTAButton to="/industries" variant="outline">
            {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          5. شركاؤنا التقنيون (شريط متحرك)
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "منظومة تقنية تدعم تنوع الحلول"
            : "A technology ecosystem supporting solution diversity"}
          intro={isAr
            ? "تستفيد أربتك من تقنيات ومنتجات ومكونات مقدمة من شركات ومصنعين عالميين عند تصميم وتنفيذ المشاريع، وفق احتياجات العميل ونطاق العمل واعتماد التقنية المناسبة."
            : "ARABTEC leverages technologies, products and components from global companies and manufacturers when designing and delivering projects — based on client needs, project scope and approval of the right technology."}
        />

        {/* تنبيه مهم للزائر */}
        <div className="max-w-3xl mx-auto mt-6 rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isAr
              ? "يُعرض كل شريك بالوصف الصحيح لطبيعة العلاقة. العبارات المذكورة أدناه تعني «تقنيات ومنتجات نعمل معها بحسب احتياجات المشروع»، ولا تعني اعتمادًا رسميًا أو شراكة استراتيجية ما لم يُذكر ذلك صراحةً."
              : "Each partner is presented with an accurate description of the relationship. The phrases below mean 'technologies and products we work with based on project needs' — they do not imply an official certification or strategic partnership unless explicitly stated."}
          </p>
        </div>

        {/* شريط الشركاء المتحرك */}
        <div className="mt-8 relative w-full overflow-hidden">
          <div className="container-page relative">
            
            <div className="relative">
              {/* زر اليسار */}
              <button
                onClick={() => scrollPartners(isAr ? "right" : "left")}
                className="absolute start-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
                aria-label="Previous"
              >
                <ArrowLeft className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
              </button>

              <div
                ref={partnersScrollRef}
                className="flex gap-8 md:gap-12 overflow-x-auto items-center px-12 py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {partnerLogos.length > 0 ? (
                  [...partnerLogos, ...partnerLogos].map((logo, i) => (
                    <div key={i} className="shrink-0 flex items-center justify-center">
                      <img
                        src={logo}
                        alt={`Partner ${i}`}
                        loading="lazy"
                        decoding="async"
                        className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm text-center w-full">
                    {isAr ? "لا توجد شعارات شركاء مضافة حالياً." : "No partner logos added yet."}
                  </p>
                )}
              </div>

              {/* زر اليمين */}
              <button
                onClick={() => scrollPartners(isAr ? "left" : "right")}
                className="absolute end-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
                aria-label="Next"
              >
                <ArrowRight className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
              </button>
            </div>

          </div>
        </div>

        {/* العبارة الآمنة */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {isAr
              ? "تقنيات ومنتجات نعمل معها بحسب احتياجات المشروع."
              : "Technologies and products we work with based on project needs."}
          </p>
        </div>
      </Section>

      {/* ============================================================
          6. تصنيف الشركاء حسب مجال الحل
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "تقنيات تغطي مختلف مكونات البيئة المؤسسية"
            : "Technologies covering all components of the enterprise environment"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {partnerCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.titleEn}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">
                  {isAr ? cat.titleAr : cat.titleEn}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {(isAr ? cat.itemsAr : cat.itemsEn).map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug: cat.link }}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:text-gold"
                >
                  {isAr ? "استكشف الخدمة" : "Explore service"}
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                </Link>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          7. كيف نختار التقنية المناسبة؟
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "التقنية تُختار وفق احتياج المشروع لا وفق اسم المنتج"
            : "Technology is chosen based on project needs, not product name"}
          intro={
            isAr
              ? "تدرس أربتك متطلبات المشروع قبل اختيار التقنية أو المورد، بحيث يتوافق الحل مع بيئة المؤسسة وأهدافها وميزانيتها وخطط التوسع."
              : "ARABTEC studies project requirements before choosing the technology or vendor — so the solution fits the organization's environment, goals, budget and expansion plans."}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {criteria.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.hEn}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">{isAr ? c.hAr : c.hEn}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? c.dAr : c.dEn}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          8. نموذج التعاون في المشروع
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "تعاون منظم بين العميل وأربتك ومزودي التقنية"
            : "Organized collaboration between client, ARABTEC and technology vendors"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {cooperationSteps.map((step, i) => (
            <li key={i} className="relative rounded-xl border border-border bg-card p-5">
              <div className="text-3xl font-extrabold text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <div className="mt-1 font-semibold">{step.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.d}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          10. لماذا تثق المؤسسات بأربتك؟
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "شريك تقني يجمع الخبرة والتكامل والمسؤولية"
            : "A technology partner combining expertise, integration and responsibility"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {whyTrust.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.hEn}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">{isAr ? c.hAr : c.hEn}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? c.dAr : c.dEn}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          11. دعوة للانضمام كشريك
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "هل ترغبون في التعاون مع أربتك؟"
            : "Would you like to collaborate with ARABTEC?"}
          intro={
            isAr
              ? "ترحب أربتك بالتعاون مع مزودي التقنية والمصنعين وشركات البرمجيات ومقدمي الحلول الذين يمكنهم إضافة قيمة حقيقية للمشروعات المؤسسية والجهات الحكومية. يتم تقييم فرص التعاون وفق مجال التقنية، توافق الحل مع احتياجات السوق، إمكانات الدعم، نموذج الشراكة والقدرة على التنفيذ."
              : "ARABTEC welcomes collaboration with technology vendors, manufacturers, software companies and solution providers who can add real value to enterprise and government projects. Partnership opportunities are evaluated based on technology area, solution-market fit, support capabilities, partnership model and execution capability."}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isAr ? "الفئات المستهدفة" : "Target categories"}
            </h3>

            <ul className="grid gap-2 md:grid-cols-2">
              {partnerTargets.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <CTAButton to="/contact">
                {isAr ? "تقدم بطلب شراكة" : "Submit a partnership request"}
              </CTAButton>
            </div>
          </div>

          <img
            src={partnerOppImg}
            alt={isAr
              ? "فرصة تعاون وشراكة تقنية مع أربتك"
              : "Technology partnership opportunity with ARABTEC"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </Section>

      {/* ============================================================
          12. CTA
          ============================================================ */}
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
  <div className="relative container-page py-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground/85">
      {isAr
        ? "هل تبحث مؤسستكم عن شريك تقني موثوق؟"
        : "Is your organization looking for a trusted technology partner?"}
    </h2>
    <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85 text-lg leading-relaxed">
      {isAr
        ? "نساعد مؤسستكم على اختيار وتنفيذ الحلول التقنية المناسبة، بدءًا من فهم احتياجاتكم وحتى التشغيل والدعم المستمر."
        : "We help your organization select and implement the right technology solutions — from understanding your needs to operations and ongoing support."}
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {/* الزر الأول — ناقش مشروعك معنا */}
      <Link
        to="/contact"
        className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary transition"
      >
        {isAr ? "ناقش مشروعك معنا" : "Discuss your project"}
      </Link>

      {/* الزر الثاني — تواصل بشأن شراكة */}
      <Link
        to="/contact"
        className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold transition"
      >
        {isAr ? "تواصل بشأن شراكة" : "Contact us about partnership"}
      </Link>
    </div>
  </div>
</section>

      {/* ============================================================
          نموذج التواصل المختصر
          ============================================================ */}
      <Section className="bg-white">
        <SectionHead
          title={isAr
            ? "تواصل معنا بشأن مشروع أو شراكة"
            : "Contact us about a project or partnership"}
        />

        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {isAr
              ? "يمكنكم التواصل مع فريق أربتك مباشرة عبر صفحة «تواصل معنا» لملء النموذج التفصيلي، حيث سيتمكن فريقنا من مراجعة طبيعة المشروع أو فرصة التعاون وتقديم التصور المناسب."
              : "You can reach the ARABTEC team directly through the Contact page to fill in the detailed form. Our team will review your project or partnership opportunity and provide the right concept."}
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              to="/contact"
              className="rounded-md bg-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              {isAr ? "انتقل إلى نموذج التواصل" : "Go to the contact form"}
            </Link>
          </div>

          <ul className="mt-6 grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
            {formFields.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ============================================================
          الأسئلة الشائعة
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن شركاء وعملاء أربتك"
            : "Frequently asked questions about ARABTEC partners and clients"}
        />

        <FAQ
          items={[
            {
              q: { ar: "من هم عملاء أربتك؟", en: "Who are ARABTEC's clients?" },
              a: {
                ar: "عملت أربتك مع جهات ومؤسسات من قطاعات حكومية وصناعية وتعليمية وتجارية. تعرض أسماء الجهات والشعارات التي تم التحقق منها والمصرح بنشرها فقط.",
                en: "ARABTEC has worked with entities and organizations across government, industrial, educational and commercial sectors. Only verified and authorized names and logos are displayed.",
              },
            },
            {
              q: { ar: "هل عملت أربتك مع جهات حكومية؟", en: "Has ARABTEC worked with government entities?" },
              a: {
                ar: "يمتد نطاق خبرة أربتك إلى جهات ومؤسسات حكومية وتعليمية وصناعية، ويتم نشر الأسماء وتفاصيل المشروعات بعد التحقق والحصول على الموافقات اللازمة.",
                en: "ARABTEC's expertise extends to government, educational and industrial entities. Names and project details are published after verification and obtaining necessary approvals.",
              },
            },
            {
              q: { ar: "من هم شركاء أربتك التقنيون؟", en: "Who are ARABTEC's technology partners?" },
              a: {
                ar: "تعمل أربتك مع مجموعة من مزودي التقنيات والمصنعين والموردين وفق احتياجات المشاريع. يوضح الموقع طبيعة كل علاقة بعد التحقق منها.",
                en: "ARABTEC works with a range of technology vendors, manufacturers and suppliers based on project needs. The site describes the nature of each relationship after verification.",
              },
            },
            {
              q: { ar: "هل جميع الشعارات المعروضة تمثل شراكات معتمدة؟", en: "Do all displayed logos represent certified partnerships?" },
              a: {
                ar: "لا. يجب وصف كل علاقة بدقة، فقد تكون شراكة معتمدة أو علاقة توريد أو تقنية تعمل معها أربتك. لا تستخدم عبارة «شريك معتمد» دون إثبات حالي.",
                en: "No. Each relationship must be described precisely — it may be a certified partnership, a supply relationship, or a technology ARABTEC works with. The term 'certified partner' is not used without current proof.",
              },
            },
            {
              q: { ar: "هل يمكن الحصول على مراجع لمشروعات سابقة؟", en: "Can references for previous projects be provided?" },
              a: {
                ar: "يمكن مناقشة المراجع المؤسسية المتاحة وفق طبيعة المشروع، موافقة العميل السابق، ومتطلبات السرية.",
                en: "Available institutional references can be discussed according to the project's nature, the previous client's approval and confidentiality requirements.",
              },
            },
            {
              q: { ar: "هل تنشر أربتك تفاصيل مشروعات العملاء؟", en: "Does ARABTEC publish client project details?" },
              a: {
                ar: "لا تنشر أربتك تفاصيل أو صورًا أو بيانات خاصة بأي مشروع دون موافقة الجهة المعنية.",
                en: "ARABTEC does not publish project details, images or specific data without the concerned party's approval.",
              },
            },
            {
              q: { ar: "هل يمكن لمزود تقنية التعاون مع أربتك؟", en: "Can a technology provider collaborate with ARABTEC?" },
              a: {
                ar: "نعم، يمكن إرسال طلب تعاون يتضمن مجال التقنية والحلول ونموذج الشراكة المقترح، ليتم تقييمه من الفريق المختص.",
                en: "Yes — a collaboration request can be submitted including the technology area, solutions and proposed partnership model, to be evaluated by the specialized team.",
              },
            },
            {
              q: { ar: "هل تختار أربتك تقنية واحدة لجميع المشروعات؟", en: "Does ARABTEC choose one technology for all projects?" },
              a: {
                ar: "لا. يتم اختيار التقنية وفق متطلبات العميل والأنظمة القائمة والتكامل وقابلية التوسع والدعم.",
                en: "No. Technology is chosen based on client requirements, existing systems, integration, scalability and support.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك خدمات متعددة الموردين؟", en: "Does ARABTEC provide multi-vendor services?" },
              a: {
                ar: "يمكن لأربتك تنسيق تقنيات ومكونات من أكثر من مزود ضمن حل متكامل، وفق نطاق المشروع والقدرات المتاحة.",
                en: "ARABTEC can coordinate technologies and components from multiple vendors within an integrated solution — per project scope and capabilities available.",
              },
            },
            {
              q: { ar: "هل يمكن تنفيذ مشروع دون إظهار اسم العميل في الموقع؟", en: "Can a project be delivered without showing the client name on the site?" },
              a: {
                ar: "نعم، يمكن المحافظة على سرية اسم العميل وتفاصيل المشروع وفق الاتفاقيات والسياسات المعتمدة.",
                en: "Yes — client name and project details can be kept confidential in accordance with agreed contracts and policies.",
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
                name: "من هم عملاء أربتك؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "عملت أربتك مع جهات ومؤسسات من قطاعات حكومية وصناعية وتعليمية وتجارية. تعرض أسماء الجهات والشعارات التي تم التحقق منها والمصرح بنشرها فقط.",
                },
              },
              {
                "@type": "Question",
                name: "هل جميع الشعارات المعروضة تمثل شراكات معتمدة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "لا. يجب وصف كل علاقة بدقة، فقد تكون شراكة معتمدة أو علاقة توريد أو تقنية تعمل معها أربتك. لا تستخدم عبارة «شريك معتمد» دون إثبات حالي.",
                },
              },
              {
                "@type": "Question",
                name: "هل تنشر أربتك تفاصيل مشروعات العملاء؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "لا تنشر أربتك تفاصيل أو صورًا أو بيانات خاصة بأي مشروع دون موافقة الجهة المعنية.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}