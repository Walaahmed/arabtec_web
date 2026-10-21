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
  Camera,
  Video,
  MonitorPlay,
  Users,
  Fingerprint,
  Scan,
  CreditCard,
  DoorOpen,
  ShieldCheck,
  Activity,
  Wrench,
  Building2,
  Landmark,
  Hospital,
  GraduationCap,
  Factory,
  Server,
  Network,
  Database,
  Layers,
  Eye,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// الصور
import heroImg from "@/assets/enterprise-surveillance-access-management.jpg";
import attendanceImg from "@/assets/enterprise-attendance-management-system.png";
import accessControlImg from "@/assets/enterprise-access-control-system.jpg";
import govSurvImg from "@/assets/government-surveillance-access-control.jpg";
import controlRoomImg from "@/assets/central-surveillance-control-room.jpg";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

export default function SurveillanceAccessControlPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";
  const s = getService("surveillance-access-control");
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
                  ? "نظام متكامل للمراقبة والحضور والتحكم بالدخول في منشأة مؤسسية"
                  : "Integrated surveillance, attendance and access control system in an enterprise facility"
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
              {isAr ? "حلول ذكية لإدارة المواقع والموظفين والدخول" : "Smart solutions for sites, employees and access"}
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "أنظمة المراقبة والحضور والتحكم بالدخول للجهات الحكومية والمؤسسات"
                : "Surveillance, attendance and access control systems for government and enterprises"}
            </h1>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تقدم أربتك حلولًا متكاملة تساعد الجهات الحكومية والمؤسسات على مراقبة المواقع، تنظيم دخول الأفراد، تسجيل حضور الموظفين وانصرافهم، وإدارة الأجهزة والبيانات من خلال أنظمة مركزية قابلة للتكامل مع البيئة التقنية للمؤسسة."
                : "ARABTEC provides integrated solutions that help government entities and enterprises monitor sites, organize access, log attendance and manage devices and data through central systems that integrate with the enterprise technology environment."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تشمل خدماتنا كاميرات المراقبة الداخلية والخارجية، كاميرات IP، أنظمة التسجيل والإدارة، أنظمة الحضور والانصراف، البصمة، التعرف على الوجه، البطاقات و RFID، إضافة إلى أنظمة التحكم بالدخول وربطها بالموارد البشرية وأنظمة ERP وفق نطاق المشروع."
                : "Our services include indoor and outdoor surveillance cameras, IP cameras, recording and management systems, attendance systems, biometrics, face recognition, RFID and cards, plus access control systems — integrated with HR and ERP per project scope."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "نبدأ بدراسة الموقع وعدد المستخدمين والمداخل والأجهزة واحتياجات التسجيل والتقارير والتكامل، ثم نصمم الحل وننفذ أعمال التوريد والتركيب والإعداد والاختبار والتدريب والصيانة."
                : "We start by studying the site, users, entrances, devices, and recording, reporting and integration needs — then design the solution and deliver supply, installation, configuration, testing, training and maintenance."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton to="/contact">
                {isAr ? "اطلب زيارة ميدانية" : "Request a site survey"}
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                {isAr ? "اطلب عرضًا فنيًا" : "Request a technical proposal"}
              </CTAButton>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {(isAr
                ? ["كاميرات مراقبة", "كاميرات IP", "NVR و DVR", "الحضور والانصراف", "البصمة", "التعرف على الوجه", "RFID", "التحكم بالدخول", "التكامل والصيانة"]
                : ["Surveillance cameras", "IP cameras", "NVR & DVR", "Attendance", "Biometrics", "Face recognition", "RFID", "Access control", "Integration & maintenance"]
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
          2. منظومة متكاملة لإدارة المنشأة
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "مراقبة المواقع وتنظيم الدخول وإدارة الحضور ضمن بيئة واحدة"
            : "Site monitoring, access organization and attendance in one environment"}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <p className="text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تعمل أنظمة المراقبة والحضور والتحكم بالدخول بصورة أفضل عندما يتم تصميمها باعتبارها منظومة واحدة، وليس أجهزة منفصلة."
                : "Surveillance, attendance and access control systems work better when designed as one ecosystem rather than separate devices."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يمكن ربط الكاميرات وأجهزة الحضور وقارئات البطاقات والأبواب والبوابات ضمن شبكة المؤسسة، مع إدارة المستخدمين والصلاحيات والسجلات والتقارير من خلال واجهات مركزية وفق احتياجات المشروع."
                : "Cameras, attendance devices, card readers, doors and gates can be connected within the enterprise network — with user, permission, log and report management through central interfaces per project needs."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "مكونات المنظومة" : "Ecosystem components"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["كاميرات المراقبة", "أنظمة التسجيل", "محطات الإدارة والمشاهدة", "أجهزة الحضور والانصراف", "قارئات البصمة", "التعرف على الوجه", "بطاقات RFID", "قارئات الدخول", "الأقفال والأبواب والبوابات", "الخوادم والتخزين", "الشبكات والاتصال", "أنظمة الموارد البشرية و ERP"]
                : ["Surveillance cameras", "Recording systems", "Management & viewing stations", "Attendance devices", "Biometric readers", "Face recognition", "RFID cards", "Access readers", "Locks, doors & gates", "Servers & storage", "Networks & connectivity", "HR & ERP systems"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* مخطط المنظومة */}
          <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
            <h3 className="font-bold mb-4 text-sm text-[#0B3D2E]">
              {isAr ? "مخطط المنظومة" : "Ecosystem diagram"}
            </h3>
            <div className="flex flex-col items-center gap-3 text-xs md:text-sm">
              {(isAr
                ? ["المستخدمون والمداخل والمواقع", "كاميرات وأجهزة حضور وقارئات دخول", "الشبكة", "منصة الإدارة والتسجيل", "التقارير والموارد البشرية و ERP"]
                : ["Users, entrances & sites", "Cameras, attendance devices & readers", "Network", "Management & recording platform", "Reports, HR & ERP"]
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
          3. خدمات أنظمة المراقبة — 8 خدمات
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "حلول مراقبة مرئية للمباني والمواقع والمنشآت"
            : "Visual surveillance solutions for buildings, sites and facilities"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              icon: Activity,
              hAr: "تقييم الموقع وتصميم نظام المراقبة",
              hEn: "Site assessment & surveillance design",
              descAr: "دراسة الموقع وتحديد النقاط التي تحتاج إلى مراقبة، ونوع الكاميرات وزوايا الرؤية ومسارات الكابلات والتسجيل والإدارة.",
              descEn: "Studying the site and identifying monitoring points, camera types, viewing angles, cable paths, recording and management.",
              itemsAr: ["عدد المباني والمواقع", "المداخل والمخارج", "الممرات والمواقف", "المناطق الداخلية والخارجية", "الإضاءة", "مسافات التصوير", "نقاط تركيب الكاميرات", "مسارات الشبكة والكابلات", "مكان أجهزة التسجيل", "متطلبات التخزين", "فترة الاحتفاظ المطلوبة", "المراقبة المركزية"],
              itemsEn: ["Buildings & sites", "Entrances & exits", "Corridors & parking", "Indoor & outdoor areas", "Lighting", "Capture distances", "Camera installation points", "Network & cable paths", "Recording device location", "Storage requirements", "Required retention period", "Central monitoring"],
            },
            {
              icon: Camera,
              hAr: "كاميرات المراقبة الداخلية",
              hEn: "Indoor surveillance cameras",
              descAr: "كاميرات مخصصة للمكاتب والممرات والاستقبال والمخازن والقاعات والمناطق الداخلية.",
              descEn: "Cameras for offices, corridors, receptions, warehouses, halls and indoor areas.",
              itemsAr: ["المداخل الداخلية", "مناطق الاستقبال", "الممرات", "المكاتب المفتوحة", "المستودعات", "قاعات الخدمة", "غرف المعدات", "المناطق المشتركة"],
              itemsEn: ["Indoor entrances", "Reception areas", "Corridors", "Open offices", "Warehouses", "Service halls", "Equipment rooms", "Shared areas"],
            },
            {
              icon: Camera,
              hAr: "كاميرات المراقبة الخارجية",
              hEn: "Outdoor surveillance cameras",
              descAr: "كاميرات مناسبة لمراقبة محيط المبنى والمواقف والبوابات والمناطق الخارجية وفق طبيعة الموقع.",
              descEn: "Cameras suitable for monitoring building perimeter, parking, gates and outdoor areas per site nature.",
              itemsAr: ["المداخل الخارجية", "المواقف", "الأسوار", "الساحات", "مناطق التحميل", "بوابات المركبات", "المستودعات الخارجية", "محيط المنشأة"],
              itemsEn: ["Outdoor entrances", "Parking areas", "Perimeter walls", "Yards", "Loading areas", "Vehicle gates", "Outdoor warehouses", "Facility perimeter"],
            },
            {
              icon: Video,
              hAr: "كاميرات IP",
              hEn: "IP cameras",
              descAr: "كاميرات تعتمد على شبكة المؤسسة وتتيح التسجيل والإدارة والمشاهدة المركزية وفق البنية المتاحة.",
              descEn: "Network-based cameras enabling recording, management and central viewing per available infrastructure.",
              itemsAr: ["الربط عبر الشبكة", "الإدارة المركزية", "إضافة كاميرات جديدة", "المشاهدة من نقاط مصرح بها", "الربط مع NVR", "إدارة عدة مواقع", "سهولة التوسع", "تكامل أفضل مع البنية التقنية"],
              itemsEn: ["Network connectivity", "Central management", "Adding new cameras", "Viewing from authorized points", "NVR integration", "Multi-site management", "Easy scaling", "Better integration with infrastructure"],
            },
            {
              icon: MonitorPlay,
              hAr: "أنظمة التسجيل NVR و DVR",
              hEn: "NVR & DVR recording systems",
              descAr: "توفير أنظمة تسجيل وإدارة لحفظ مقاطع المراقبة والوصول إليها وفق صلاحيات المستخدمين.",
              descEn: "Providing recording and management systems to store surveillance footage and access it per user permissions.",
              itemsAr: ["تحديد عدد القنوات", "تحديد سعة التخزين", "إعداد التسجيل", "إدارة المستخدمين", "عرض الكاميرات", "استرجاع المقاطع", "تصدير التسجيلات", "مراقبة حالة الأجهزة", "إعداد التنبيهات", "اختبار الاحتفاظ"],
              itemsEn: ["Channel count definition", "Storage capacity definition", "Recording setup", "User management", "Camera viewing", "Clip retrieval", "Recording export", "Device status monitoring", "Alert setup", "Retention testing"],
            },
            {
              icon: Eye,
              hAr: "المراقبة المركزية لعدة مواقع",
              hEn: "Central multi-site monitoring",
              descAr: "ربط كاميرات الفروع والمباني والمواقع التشغيلية بمنصة إدارة مركزية وفق جاهزية الشبكة والبنية التحتية.",
              descEn: "Connecting branch, building and operational site cameras to a central management platform per network and infrastructure readiness.",
              itemsAr: ["ربط عدة مواقع", "عرض موحد للكاميرات", "إدارة المستخدمين والصلاحيات", "مراقبة حالة الأجهزة", "الوصول إلى التسجيلات", "توزيع شاشات العرض", "تنظيم أسماء المواقع والكاميرات", "إعداد تقارير الحالة"],
              itemsEn: ["Multi-site connectivity", "Unified camera view", "User & permission management", "Device status monitoring", "Recording access", "Display distribution", "Site & camera naming", "Status reports"],
            },
            {
              icon: Wrench,
              hAr: "تحديث أنظمة المراقبة القائمة",
              hEn: "Modernizing existing surveillance",
              descAr: "تقييم النظام الحالي واستبدال أو تطوير المكونات غير المناسبة أو إضافة كاميرات وتخزين وربط مركزي.",
              descEn: "Assessing the current system and replacing or upgrading unsuitable components, or adding cameras, storage and central connectivity.",
              itemsAr: ["مراجعة الكاميرات الحالية", "مراجعة جودة الصورة", "مراجعة أجهزة التسجيل", "تقييم التخزين", "مراجعة الشبكة والكابلات", "تحديد الأعطال", "إضافة نقاط جديدة", "استبدال المعدات القديمة", "إعادة تنظيم النظام", "التوثيق"],
              itemsEn: ["Reviewing existing cameras", "Image quality review", "Recording device review", "Storage assessment", "Network & cabling review", "Fault identification", "Adding new points", "Replacing old equipment", "System reorganization", "Documentation"],
            },
            {
              icon: Wrench,
              hAr: "تشغيل وصيانة أنظمة المراقبة",
              hEn: "Surveillance operations & maintenance",
              descAr: "متابعة الكاميرات وأجهزة التسجيل والتخزين ومعالجة الأعطال وفق نطاق اتفاقية الخدمة.",
              descEn: "Monitoring cameras, recording devices and storage and handling faults per the service agreement.",
              itemsAr: ["فحص حالة الكاميرات", "فحص التسجيل", "مراجعة التخزين", "تنظيف العدسات", "ضبط زوايا التصوير", "معالجة انقطاع الكاميرات", "مراجعة الكابلات والاتصال", "تحديث الإعدادات", "إعداد تقارير الصيانة", "الصيانة الوقائية"],
              itemsEn: ["Camera status checks", "Recording checks", "Storage review", "Lens cleaning", "Camera angle adjustment", "Camera outage handling", "Cable & connectivity review", "Configuration updates", "Maintenance reports", "Preventive maintenance"],
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
          4. أنظمة الحضور والانصراف
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <img
            src={attendanceImg}
            alt={isAr
              ? "نظام حضور وانصراف بالبصمة والتعرف على الوجه للمؤسسات"
              : "Attendance system with biometrics and face recognition for enterprises"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1 mt-6 lg:mt-0"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "إدارة حضور الموظفين ضمن نظام منظم وقابل للتكامل"
                : "Managing employee attendance in an organized, integrable system"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تساعد أنظمة الحضور والانصراف المؤسسات على تسجيل أوقات دخول الموظفين وخروجهم، وإدارة جداول العمل والتقارير وربط البيانات بأنظمة الموارد البشرية والرواتب وفق التكامل المتاح."
                : "Attendance systems help organizations log employee check-in and check-out times, manage work schedules and reports, and integrate data with HR and payroll per available integration."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يمكن تصميم النظام لموقع واحد أو عدة فروع، مع اختيار وسيلة التحقق المناسبة حسب عدد الموظفين وطبيعة العمل وبيئة الموقع."
                : "The system can be designed for one site or multiple branches, choosing the appropriate verification method based on users, work nature and site environment."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "وسائل تسجيل الحضور" : "Attendance recording methods"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["البصمة", "التعرف على الوجه", "البطاقات", "RFID", "الرقم الوظيفي", "وسائل تحقق متعددة"]
                : ["Biometrics", "Face recognition", "Cards", "RFID", "Employee ID", "Multi-factor methods"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "وظائف نظام الحضور" : "Attendance system functions"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["تسجيل الدخول والخروج", "إدارة الموظفين", "إدارة الفروع", "جداول العمل", "الورديات", "التأخير", "الغياب", "العمل الإضافي", "الإجازات عند توفر التكامل", "التقارير", "التصدير إلى الموارد البشرية", "إدارة أجهزة متعددة"]
                : ["Check-in & check-out", "Employee management", "Branch management", "Work schedules", "Shifts", "Lateness", "Absence", "Overtime", "Leave (with integration)", "Reports", "Export to HR", "Multi-device management"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          5. الحضور بالبصمة
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr ? "تسجيل الحضور باستخدام البصمة" : "Attendance using biometrics"}
          intro={
            isAr
              ? "تتيح أجهزة البصمة تسجيل حضور الموظفين وانصرافهم من خلال التحقق من هوية المستخدم، مع نقل السجلات إلى نظام الحضور والتقارير. يتم اختيار الجهاز وفق عدد الموظفين، عدد المستخدمين المسجلين، بيئة التركيب، الاتصال المتاح، وعدد المواقع."
              : "Biometric devices log employee attendance through identity verification, transferring records to the attendance system and reports. The device is chosen based on employees, registered users, installation environment, available connectivity and number of sites."}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-6">
          <ul className="grid gap-2 md:grid-cols-2">
            {(isAr
              ? ["توريد جهاز البصمة", "تسجيل الموظفين", "إعداد أوقات العمل", "ربط الجهاز بالشبكة", "إعداد المستخدمين", "نقل سجلات الحضور", "اختبار الجهاز", "تدريب المسؤولين", "الدعم والصيانة"]
              : ["Biometric device supply", "Employee enrollment", "Work hours setup", "Device network connectivity", "User setup", "Attendance log transfer", "Device testing", "Admin training", "Support & maintenance"]
            ).map((x) => (
              <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                <Fingerprint className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="font-bold mb-3 text-lg text-[#0B3D2E]">
              {isAr ? "بيئات الاستخدام" : "Deployment environments"}
            </h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["المكاتب", "المؤسسات الحكومية", "المدارس", "المستشفيات", "المصانع", "المستودعات", "الفروع", "المواقع التشغيلية"]
                : ["Offices", "Government institutions", "Schools", "Hospitals", "Factories", "Warehouses", "Branches", "Operational sites"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          6. الحضور بالتعرف على الوجه
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "تسجيل الحضور من خلال التعرف على الوجه"
            : "Attendance via face recognition"}
          intro={
            isAr
              ? "يمكن استخدام التعرف على الوجه ضمن أنظمة الحضور للتحقق من المستخدم وتسجيل وقت الدخول أو الخروج، وفق خصائص النظام وبيئة الموقع. تتم دراسة مكان التركيب والإضاءة وعدد المستخدمين وطبيعة الحركة قبل تحديد الجهاز المناسب."
              : "Face recognition can be used within attendance systems to verify users and log check-in/out times, based on system features and site environment. Installation location, lighting, number of users and movement are studied before choosing the device."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? ["تسجيل الموظفين", "التعرف على المستخدم", "تسجيل الدخول والخروج", "إدارة عدة أجهزة", "ربط الفروع", "إعداد التقارير", "التكامل مع الموارد البشرية", "تحديد صلاحيات الاستخدام"]
            : ["Employee enrollment", "User recognition", "Check-in/out logging", "Multi-device management", "Branch connectivity", "Reporting", "HR integration", "Usage permissions"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <Scan className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 max-w-3xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
            <p className="text-[15px] md:text-base text-[#4B5563] leading-relaxed">
              {isAr
                ? "يتم استخدام تقنيات التعرف على الوجه وفق سياسات المؤسسة والمتطلبات التنظيمية المعتمدة، وبعد تحديد آلية جمع البيانات واستخدامها وحفظها."
                : "Face recognition technologies are used per the organization's policies and approved regulatory requirements — after defining data collection, use and storage."}
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          7. البطاقات و RFID
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "حلول بطاقات لإدارة الحضور والدخول"
            : "Card solutions for attendance and access"}
          intro={
            isAr
              ? "تستخدم بطاقات RFID أو البطاقات التعريفية لتسجيل الحضور أو منح صلاحيات الدخول إلى مناطق محددة وفق النظام المستخدم. يمكن ربط البطاقة ببيانات الموظف أو الزائر أو المستخدم وتحديد المواقع والأوقات المسموح له بالدخول خلالها."
              : "RFID or ID cards are used to log attendance or grant access to specific areas per the system used. The card can be linked to employee, visitor or user data, defining allowed locations and times."}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <h3 className="font-bold mb-3 text-lg text-[#0B3D2E]">{isAr ? "الاستخدامات" : "Uses"}</h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["تسجيل الحضور", "فتح الأبواب", "الدخول إلى المكاتب", "الدخول إلى غرف محددة", "إدارة الموظفين", "إدارة الزوار", "ربط البطاقة بالهوية الوظيفية", "تتبع سجلات الدخول"]
                : ["Attendance logging", "Door opening", "Office access", "Restricted room access", "Employee management", "Visitor management", "Linking card to employee ID", "Access log tracking"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CreditCard className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-lg text-[#0B3D2E]">{isAr ? "مكونات الحل" : "Solution components"}</h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["البطاقات", "قارئات البطاقات", "وحدات التحكم", "الأبواب أو البوابات", "نظام الإدارة", "قاعدة المستخدمين", "الصلاحيات", "التقارير"]
                : ["Cards", "Card readers", "Control units", "Doors or gates", "Management system", "User database", "Permissions", "Reports"]
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
          8. أنظمة التحكم بالدخول
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "إدارة صلاحيات الدخول إلى المباني والمناطق المحددة"
                : "Managing access rights to buildings and restricted areas"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تساعد أنظمة التحكم بالدخول المؤسسة على تنظيم من يستطيع دخول كل مبنى أو باب أو منطقة، وفي أي وقت، مع الاحتفاظ بسجلات العمليات وإدارة المستخدمين والصلاحيات مركزيًا."
                : "Access control systems help the organization organize who can access each building, door or area and at what time — while retaining operation logs and managing users and permissions centrally."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يمكن تنفيذ النظام على باب واحد أو عدة مبانٍ ومواقع، وربطه بالبطاقات أو البصمة أو التعرف على الوجه وفق نطاق المشروع."
                : "The system can be implemented on one door or multiple buildings and sites, integrated with cards, biometrics or face recognition per project scope."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "مكونات نظام التحكم بالدخول" : "Access control system components"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["قارئات البطاقات", "قارئات البصمة", "أجهزة التعرف على الوجه", "وحدات التحكم", "الأقفال الكهربائية", "أزرار الخروج", "حساسات الأبواب", "البوابات", "نظام الإدارة", "صلاحيات المستخدمين", "سجلات الدخول والخروج"]
                : ["Card readers", "Biometric readers", "Face recognition devices", "Control units", "Electric locks", "Exit buttons", "Door sensors", "Gates", "Management system", "User permissions", "Access logs"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <DoorOpen className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={accessControlImg}
            alt={isAr
              ? "نظام تحكم بالدخول بالبطاقات والبصمة والتعرف على الوجه"
              : "Access control system with cards, biometrics and face recognition"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover mt-6 lg:mt-0"
          />
        </div>

        {/* الوظائف */}
        <div className="mt-6">
          <h3 className="font-bold mb-4 text-lg text-[#0B3D2E]">{isAr ? "الوظائف" : "Functions"}</h3>
          <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {(isAr
              ? ["إضافة المستخدمين", "تحديد الأبواب المسموح بها", "تحديد أوقات الدخول", "إلغاء الصلاحيات", "إدارة عدة مواقع", "متابعة حالة الأبواب", "استخراج سجلات الدخول", "إدارة البطاقات المفقودة", "تنظيم صلاحيات الموظفين والزوار", "ربط النظام بقاعدة المستخدمين"]
              : ["Adding users", "Defining allowed doors", "Defining access times", "Revoking permissions", "Multi-site management", "Door status monitoring", "Extracting access logs", "Lost card management", "Employee & visitor permissions", "User database integration"]
            ).map((x) => (
              <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ============================================================
          9. إدارة الزوار
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "تنظيم دخول الزوار والمقاولين والموردين"
            : "Organizing visitor, contractor and vendor access"}
          intro={
            isAr
              ? "يمكن إضافة نظام لإدارة الزوار يساعد المؤسسة على تسجيل بيانات الزيارة، تحديد الجهة المضيفة، منح صلاحية دخول مؤقتة ومتابعة وقت الدخول والخروج."
              : "A visitor management system can help the organization log visit data, define the host department, grant temporary access and track entry and exit times."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["تسجيل بيانات الزائر", "تحديد الموظف أو الإدارة المضيفة", "تحديد موعد الزيارة", "إصدار بطاقة مؤقتة", "منح صلاحية دخول محددة", "تسجيل وقت الدخول", "تسجيل وقت الخروج", "إلغاء البطاقة بعد الزيارة", "إعداد تقارير الزيارات"]
            : ["Visitor data logging", "Defining host employee or department", "Visit time scheduling", "Temporary card issuance", "Granting specific access", "Entry time logging", "Exit time logging", "Card cancellation after visit", "Visit report generation"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <Users className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 max-w-3xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
            <p className="text-[15px] md:text-base text-[#4B5563] leading-relaxed">
              {isAr
                ? "تحدد البيانات المطلوبة للاستخدام والاحتفاظ وفق سياسة المؤسسة والمتطلبات التنظيمية المعتمدة."
                : "Required data for use and retention is defined by the organization's policy and approved regulatory requirements."}
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          10. ربط الحضور بالموارد البشرية و ERP
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "نقل بيانات الحضور إلى الأنظمة الإدارية"
            : "Transferring attendance data to admin systems"}
          intro={
            isAr
              ? "يمكن ربط نظام الحضور والانصراف بنظام الموارد البشرية أو ERP لتقليل الإدخال اليدوي والاستفادة من سجلات الحضور في احتساب التأخير والغياب والعمل الإضافي والرواتب وفق القواعد المعتمدة."
              : "The attendance system can be integrated with HR or ERP to reduce manual entry and use attendance records for lateness, absence, overtime and payroll calculation per approved rules."}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <h3 className="font-bold mb-3 text-lg text-[#0B3D2E]">
              {isAr ? "البيانات القابلة للتكامل" : "Integrable data"}
            </h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["بيانات الموظفين", "أوقات الدخول والخروج", "الورديات", "التأخير", "الغياب", "ساعات العمل", "العمل الإضافي", "الإجازات", "الفروع", "أرقام الموظفين"]
                : ["Employee data", "Check-in/out times", "Shifts", "Lateness", "Absence", "Work hours", "Overtime", "Leave", "Branches", "Employee numbers"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-lg text-[#0B3D2E]">
              {isAr ? "آليات التكامل المحتملة" : "Potential integration methods"}
            </h3>
            <ul className="grid gap-2">
              {(isAr
                ? ["واجهات API", "تبادل الملفات", "التكامل مع قاعدة البيانات", "مزامنة دورية", "ربط مباشر وفق النظام المتاح"]
                : ["APIs", "File exchange", "Database integration", "Periodic synchronization", "Direct link per available system"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <Database className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* مخطط التكامل */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-4 md:p-6 overflow-x-auto">
          <h3 className="font-bold mb-3 text-sm text-[#0B3D2E]">
            {isAr ? "مخطط التكامل" : "Integration diagram"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-medium min-w-max">
            {(isAr
              ? ["جهاز الحضور", "منصة الحضور", "نظام الموارد البشرية", "الرواتب والتقارير"]
              : ["Attendance device", "Attendance platform", "HR system", "Payroll & reports"]
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

        <div className="mt-6">
          <CTAButton to="/services/erp-business-applications" variant="outline">
            {isAr ? "استكشف أنظمة ERP وتطبيقات الأعمال" : "Explore ERP & business applications"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          11. ربط الكاميرات بالشبكة والبنية التحتية
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "بنية تقنية تدعم التسجيل والمشاهدة والإدارة المركزية"
            : "Technology infrastructure supporting recording, viewing and central management"}
          intro={
            isAr
              ? "تعتمد كاميرات IP وأنظمة التسجيل على شبكة وتخزين مصممين وفق عدد الكاميرات، دقة التصوير، معدل التسجيل وفترة الاحتفاظ المطلوبة. يمكن لأربتك تنفيذ الشبكة والكابلات والخوادم والتخزين والربط بين المواقع ضمن مشروع متكامل."
              : "IP cameras and recording systems rely on a network and storage designed for the number of cameras, resolution, recording rate and required retention period. ARABTEC can deliver networks, cabling, servers, storage and multi-site connectivity within an integrated project."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? ["نقاط الشبكة", "المبدلات", "الكابلات", "الألياف الضوئية عند الحاجة", "أجهزة التسجيل", "الخوادم", "التخزين", "الشاشات", "غرفة المراقبة", "ربط الفروع", "المراقبة المركزية"]
            : ["Network outlets", "Switches", "Cables", "Fiber optics if needed", "Recording devices", "Servers", "Storage", "Screens", "Control room", "Branch connectivity", "Central monitoring"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
              <Network className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton to="/services/network-connectivity" variant="outline">
            {isAr ? "استكشف حلول الشبكات والاتصال" : "Explore networks & connectivity"}
          </CTAButton>
          <CTAButton to="/services/cloud-infrastructure" variant="outline">
            {isAr ? "استكشف حلول السحابة والبنية التحتية" : "Explore cloud & infrastructure"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          12. أنظمة المراقبة للجهات الحكومية
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B3D2E]/10 px-3 py-1 text-xs font-semibold text-[#0B3D2E] mb-3">
              <Landmark className="h-3.5 w-3.5" />
              {isAr ? "للجهات الحكومية" : "For government entities"}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "حلول للمباني والمراكز والمواقع الحكومية"
                : "Solutions for government buildings, centers and sites"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يمكن تصميم أنظمة المراقبة والحضور والتحكم بالدخول للجهات الحكومية وفق عدد المواقع والمستخدمين والمداخل ومتطلبات الإدارة والتقارير والتكامل."
                : "Government surveillance, attendance and access control systems can be designed based on sites, users, entrances and management, reporting and integration requirements."}
            </p>
            <p className="mt-3 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يراعى في المشروع تنظيم الصلاحيات، إدارة الأجهزة مركزيًا، توثيق المواقع، وربط الأنظمة بالبنية التقنية للجهة."
                : "The project considers permission organization, central device management, site documentation and connecting systems to the entity's technology infrastructure."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "حالات الاستخدام" : "Use cases"}
            </h3>

            <div className="mt-4 space-y-3">
              {(isAr
                ? [
                    { t: "المباني الحكومية", d: "مراقبة المداخل والممرات والمواقف والمرافق، وتنظيم الدخول إلى المناطق المحددة." },
                    { t: "مراكز الخدمة", d: "مراقبة صالات الخدمة والمداخل، وإدارة حضور الموظفين ودخول المناطق الداخلية." },
                    { t: "المستودعات والمرافق", d: "مراقبة المخازن ومناطق الاستلام والصرف، وتنظيم صلاحيات الدخول." },
                    { t: "الفروع والمواقع المتعددة", d: "ربط الكاميرات وأجهزة الحضور وأنظمة الدخول بمنصة إدارة مركزية." },
                    { t: "الموظفون والزوار", d: "إدارة حضور الموظفين وإصدار بطاقات أو صلاحيات مؤقتة للزوار." },
                    { t: "التكامل مع الأنظمة", d: "ربط الحضور بالموارد البشرية وربط الأجهزة بالشبكات والخوادم وقواعد البيانات." },
                  ]
                : [
                    { t: "Government buildings", d: "Monitoring entrances, corridors, parking and facilities, and organizing access to restricted areas." },
                    { t: "Service centers", d: "Monitoring service halls and entrances, and managing employee attendance and inner area access." },
                    { t: "Warehouses & facilities", d: "Monitoring stores, receiving and issuing areas, and organizing access permissions." },
                    { t: "Branches & multi-site", d: "Connecting cameras, attendance devices and access systems to a central management platform." },
                    { t: "Employees & visitors", d: "Managing employee attendance and issuing temporary cards or permissions for visitors." },
                    { t: "System integration", d: "Linking attendance to HR and connecting devices to networks, servers and databases." },
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

          <img
            src={govSurvImg}
            alt={isAr
              ? "أنظمة مراقبة وحضور وتحكم بالدخول للمباني والجهات الحكومية"
              : "Surveillance, attendance and access control for government buildings"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover mt-6 lg:mt-0"
          />
        </div>
      </Section>

      {/* ============================================================
          13. حلول للقطاعات الحيوية
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "أنظمة مصممة وفق طبيعة كل منشأة"
            : "Systems designed according to each facility's nature"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { ar: "النفط والغاز", en: "Oil & gas", icon: Factory, itemsAr: ["مراقبة المواقع التشغيلية", "مراقبة المستودعات", "إدارة المداخل", "حضور الموظفين", "بطاقات الدخول", "ربط المواقع مركزيًا"], itemsEn: ["Operational site surveillance", "Warehouse surveillance", "Entrance management", "Employee attendance", "Access cards", "Central site connectivity"] },
            { ar: "التعليم", en: "Education", icon: GraduationCap, itemsAr: ["مراقبة المداخل والممرات", "حضور الموظفين", "إدارة دخول المنشآت", "كاميرات المدارس والجامعات", "ربط الفروع", "إدارة الزوار"], itemsEn: ["Entrance & corridor surveillance", "Staff attendance", "Facility access management", "School & university cameras", "Branch connectivity", "Visitor management"] },
            { ar: "الرعاية الصحية", en: "Healthcare", icon: Hospital, itemsAr: ["مراقبة المداخل والممرات", "إدارة دخول المناطق المحددة", "حضور الموظفين", "إدارة الزوار", "ربط عدة مبانٍ", "تقارير الدخول"], itemsEn: ["Entrance & corridor surveillance", "Restricted area access", "Staff attendance", "Visitor management", "Multi-building connectivity", "Access reports"] },
            { ar: "البنوك والخدمات المالية", en: "Banking & finance", icon: Building2, itemsAr: ["مراقبة الفروع", "التحكم بالدخول", "إدارة مناطق الصلاحيات", "حضور الموظفين", "مراقبة المواقع", "الإدارة المركزية"], itemsEn: ["Branch surveillance", "Access control", "Restricted area management", "Staff attendance", "Site monitoring", "Central management"] },
            { ar: "الشركات والمؤسسات", en: "Enterprises", icon: Building2, itemsAr: ["كاميرات المكاتب والفروع", "الحضور والانصراف", "بطاقات الموظفين", "التحكم بالأبواب", "إدارة الزوار", "التكامل مع الموارد البشرية"], itemsEn: ["Office & branch cameras", "Attendance", "Employee cards", "Door access control", "Visitor management", "HR integration"] },
            { ar: "المستودعات والمواقع الصناعية", en: "Warehouses & industrial sites", icon: Factory, itemsAr: ["مراقبة ساحات التحميل", "مراقبة المخزون", "إدارة بوابات المركبات", "حضور العمال", "التحكم بالمداخل", "ربط المواقع"], itemsEn: ["Loading area surveillance", "Inventory monitoring", "Vehicle gate management", "Worker attendance", "Entrance access control", "Site connectivity"] },
          ].map((sec) => {
            const Icon = sec.icon;
            return (
              <Card key={sec.en} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
                <div className="h-10 w-10 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E] grid place-items-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
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
            );
          })}
        </div>

        <div className="mt-6">
          <CTAButton to="/industries" variant="outline">
            {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          14. غرفة المراقبة والإدارة المركزية
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
          <img
            src={controlRoomImg}
            alt={isAr
              ? "غرفة مراقبة مركزية لإدارة كاميرات عدة مبانٍ ومواقع"
              : "Central control room for managing cameras across multiple buildings and sites"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1 mt-6 lg:mt-0"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D2E]">
              {isAr
                ? "واجهة موحدة لمتابعة المواقع والأجهزة"
                : "Unified interface for tracking sites and devices"}
            </h2>
            <p className="mt-4 text-[16px] md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "يمكن تجهيز غرفة مراقبة أو مركز إدارة لعرض الكاميرات ومتابعة حالة الأجهزة والوصول إلى التسجيلات وإدارة عدة مواقع وفق الصلاحيات."
                : "A control room or management center can be prepared to display cameras, track device status, access recordings and manage multiple sites per permissions."}
            </p>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "المكونات المحتملة" : "Potential components"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["شاشات العرض", "محطات المشاهدة", "خوادم الإدارة", "أجهزة التسجيل", "التخزين", "شبكة الاتصال", "أجهزة التحكم", "طاولات العمل", "نظام إدارة الكاميرات", "صلاحيات المستخدمين"]
                : ["Display screens", "Viewing stations", "Management servers", "Recording devices", "Storage", "Connectivity network", "Control devices", "Workstations", "Camera management system", "User permissions"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <MonitorPlay className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-bold text-lg text-[#0B3D2E]">
              {isAr ? "الوظائف" : "Functions"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["عرض مباشر", "عرض عدة مواقع", "استرجاع التسجيلات", "توزيع الشاشات", "متابعة حالة الكاميرات", "إدارة المستخدمين", "تنظيم أسماء المواقع", "استخراج التقارير"]
                : ["Live view", "Multi-site view", "Recording retrieval", "Display distribution", "Camera status monitoring", "User management", "Site naming", "Report generation"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-[15px] md:text-base text-[#4B5563]">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================================================
          15. منهجية تنفيذ المشروع — 10 مراحل
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "منهجية واضحة من المسح الميداني إلى التشغيل"
            : "A clear methodology from site survey to operations"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {(isAr
            ? [
                { t: "فهم الاحتياج", d: "تحديد المواقع والمداخل وعدد المستخدمين والأجهزة والنتائج المطلوبة." },
                { t: "المسح الميداني", d: "مراجعة المباني ومسارات الكابلات ونقاط التركيب والشبكات والطاقة." },
                { t: "تصميم الحل", d: "تحديد الكاميرات والأجهزة والتسجيل والتخزين والصلاحيات والتكاملات." },
                { t: "تحديد نطاق العمل", d: "إعداد المكونات والكميات والمراحل ومسؤوليات التنفيذ." },
                { t: "التوريد والتجهيز", d: "توفير الأجهزة والكاميرات والقارئات والملحقات المطلوبة." },
                { t: "التركيب", d: "تركيب الكاميرات والأجهزة والقارئات والأبواب والكابلات." },
                { t: "الإعداد والتكامل", d: "إعداد المستخدمين والصلاحيات وربط الأنظمة والشبكات." },
                { t: "الاختبار", d: "اختبار التسجيل والحضور والدخول والتقارير والتكامل." },
                { t: "التدريب والتسليم", d: "تدريب فرق المؤسسة وتسليم التوثيق والإعدادات المعتمدة." },
                { t: "التشغيل والصيانة", d: "متابعة الأجهزة ومعالجة الأعطال وتنفيذ الصيانة وفق الاتفاق." },
              ]
            : [
                { t: "Understanding needs", d: "Defining sites, entrances, users, devices and expected outcomes." },
                { t: "Site survey", d: "Reviewing buildings, cable paths, installation points, networks and power." },
                { t: "Solution design", d: "Defining cameras, devices, recording, storage, permissions and integrations." },
                { t: "Scope definition", d: "Preparing components, quantities, phases and delivery responsibilities." },
                { t: "Supply & preparation", d: "Providing required devices, cameras, readers and accessories." },
                { t: "Installation", d: "Installing cameras, devices, readers, doors and cables." },
                { t: "Configuration & integration", d: "Setting up users and permissions, connecting systems and networks." },
                { t: "Testing", d: "Testing recording, attendance, access, reports and integration." },
                { t: "Training & handover", d: "Training the organization's teams and handing over documentation and approved configurations." },
                { t: "Operations & maintenance", d: "Monitoring devices, handling faults and performing maintenance per agreement." },
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
          16. فوائد النظام المتكامل
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "كيف تدعم هذه الأنظمة إدارة المؤسسة؟"
            : "How do these systems support enterprise management?"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "إدارة مركزية", d: "متابعة الكاميرات والأجهزة والمستخدمين والمواقع من خلال منصات موحدة." },
                { t: "تنظيم الحضور", d: "تسجيل أوقات الموظفين وإعداد تقارير الحضور والانصراف." },
                { t: "ضبط صلاحيات الدخول", d: "تحديد من يستطيع دخول كل باب أو منطقة وفي أي وقت." },
                { t: "ربط المواقع", d: "إدارة عدة فروع ومبانٍ ضمن النظام نفسه وفق البنية المتاحة." },
                { t: "دعم التقارير", d: "توفير سجلات وتقارير تساعد الإدارات على المتابعة." },
                { t: "تقليل الإجراءات اليدوية", d: "نقل بيانات الحضور إلى الموارد البشرية عند توفر التكامل." },
                { t: "سهولة التوسع", d: "إضافة أجهزة ومواقع ومستخدمين وفق تصميم قابل للتطوير." },
                { t: "تحسين الإدارة التشغيلية", d: "اكتشاف الأعطال ومتابعة حالة الكاميرات والأجهزة والتسجيل." },
              ]
            : [
                { t: "Central management", d: "Tracking cameras, devices, users and sites via unified platforms." },
                { t: "Attendance organization", d: "Logging employee times and generating attendance reports." },
                { t: "Access permission control", d: "Defining who can access each door or area and when." },
                { t: "Site connectivity", d: "Managing multiple branches and buildings within the same system per available infrastructure." },
                { t: "Report support", d: "Providing logs and reports helping departments track operations." },
                { t: "Reduced manual procedures", d: "Transferring attendance data to HR when integration is available." },
                { t: "Easy scaling", d: "Adding devices, sites and users per a scalable design." },
                { t: "Improved operational management", d: "Detecting faults and monitoring cameras, devices and recording status." },
              ]
          ).map((c) => (
            <Card key={c.t} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
              <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mb-3" />
              <h3 className="font-bold text-base text-[#0B3D2E]">{c.t}</h3>
              <p className="mt-2 text-[15px] md:text-base text-[#4B5563] leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          17. لماذا أربتك؟
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "لماذا تختار المؤسسات أربتك لهذه الأنظمة؟"
            : "Why organizations choose ARABTEC for these systems"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "خبرة في أنظمة المراقبة والحضور", d: "خبرة في كاميرات المراقبة وأنظمة الحضور والبصمة والتعرف على الوجه وراحة اليد و RFID والتحكم بالدخول." },
                { t: "تصميم متكامل", d: "نربط الأجهزة بالشبكات والتخزين والأنظمة الإدارية بدلًا من التعامل معها كحلول منفصلة." },
                { t: "تنفيذ من نقطة واحدة", d: "نغطي المسح والتصميم والتوريد والتركيب والإعداد والاختبار والتدريب." },
                { t: "تكامل مع الأنظمة", d: "إمكانية ربط الحضور بالموارد البشرية و ERP وفق نطاق المشروع." },
                { t: "دعم المواقع المتعددة", d: "تصميم حلول للفروع والمباني والمواقع التشغيلية المختلفة." },
                { t: "توثيق وتسليم", d: "تسليم معلومات الأجهزة والمواقع والمستخدمين والإعدادات وفق نطاق العمل." },
                { t: "صيانة ودعم", d: "تقديم خدمات الفحص والمعالجة والتحديث والصيانة وفق الاتفاق." },
                { t: "حلول قابلة للتوسع", d: "إضافة كاميرات وأجهزة ومستخدمين ومواقع وفق تصميم منظم." },
              ]
            : [
                { t: "Surveillance & attendance expertise", d: "Expertise in surveillance cameras, attendance systems, biometrics, face and palm recognition, RFID and access control." },
                { t: "Integrated design", d: "We connect devices to networks, storage and admin systems instead of treating them as isolated solutions." },
                { t: "Single-source delivery", d: "We cover survey, design, supply, installation, configuration, testing and training." },
                { t: "System integration", d: "Attendance can be linked to HR and ERP per project scope." },
                { t: "Multi-site support", d: "Solutions designed for various branches, buildings and operational sites." },
                { t: "Documentation & handover", d: "Delivering information on devices, sites, users and configurations per scope." },
                { t: "Maintenance & support", d: "Providing inspection, resolution, update and maintenance services per agreement." },
                { t: "Scalable solutions", d: "Adding cameras, devices, users and sites within an organized design." },
              ]
          ).map((c) => (
            <Card key={c.t} className="p-4 md:p-5 border-border/60 shadow-sm bg-card">
              <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)] mb-3" />
              <h3 className="font-bold text-base text-[#0B3D2E]">{c.t}</h3>
              <p className="mt-2 text-[15px] md:text-base text-[#4B5563] leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          18. خدمات مرتبطة
          ============================================================ */}
      <Section className="bg-white !py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "خدمات تدعم نجاح أنظمة المراقبة والحضور والدخول"
            : "Services supporting surveillance, attendance & access success"}
        />

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {[
            { ar: "الشبكات والاتصال", en: "Networks & connectivity", descAr: "توفير نقاط الشبكة وربط الكاميرات والأجهزة والفروع ومراكز الإدارة.", descEn: "Providing network outlets and connecting cameras, devices, branches and management centers.", link: "network-connectivity" },
            { ar: "السحابة والبنية التحتية", en: "Cloud & infrastructure", descAr: "توفير الخوادم والتخزين والنسخ الاحتياطي وبيئات التشغيل.", descEn: "Providing servers, storage, backup and operating environments.", link: "cloud-infrastructure" },
            { ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & business applications", descAr: "ربط الحضور بالموارد البشرية والرواتب والتقارير.", descEn: "Linking attendance to HR, payroll and reports.", link: "erp-business-applications" },
            { ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software development & system integration", descAr: "تطوير واجهات التكامل والبوابات والتقارير المخصصة.", descEn: "Developing integration interfaces, portals and custom reports.", link: "software-development" },
            { ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI & AI Agents solutions", descAr: "إضافة وظائف ذكية للبحث والتحليل وأتمتة التقارير عند توفر حالة استخدام مناسبة.", descEn: "Adding intelligent functions for search, analysis and report automation when a suitable use case exists.", link: "ai-agents" },
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
          19. CTA
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
              ? "هل تحتاج منشأتكم إلى نظام مراقبة أو حضور أو تحكم بالدخول؟"
              : "Does your facility need surveillance, attendance or access control?"}
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-[16px] md:text-lg text-primary-foreground/90 leading-relaxed">
            {isAr
              ? "شاركوا فريق أربتك بعدد المواقع والمداخل والموظفين والأجهزة المطلوبة، وسنعمل معكم على إجراء المسح الميداني وتصميم حل مناسب للمراقبة والحضور والتحكم بالدخول والتكامل مع الأنظمة القائمة."
              : "Share your sites, entrances, employees and required devices with the ARABTEC team — we'll work with you to conduct the site survey and design a suitable surveillance, attendance and access control solution integrated with existing systems."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-bold text-primary hover:bg-secondary transition"
            >
              {isAr ? "اطلب زيارة ميدانية" : "Request a site survey"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-gold transition"
            >
              {isAr ? "اطلب استشارة تقنية" : "Request a technical consultation"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-gold transition"
            >
              {isAr ? "اطلب عرضًا فنيًا" : "Request a technical proposal"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          20. FAQ
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن أنظمة المراقبة والحضور والتحكم بالدخول"
            : "Frequently asked questions about surveillance, attendance and access control"}
        />

        <div className="mt-6">
          <FAQ
            items={[
              {
                q: { ar: "ما الخدمات التي تقدمها أربتك في هذا المجال؟", en: "What services does ARABTEC offer in this area?" },
                a: {
                  ar: "تقدم أربتك حلول كاميرات المراقبة، كاميرات IP، أنظمة التسجيل، المراقبة المركزية، أنظمة الحضور والانصراف، البصمة، التعرف على الوجه، RFID، البطاقات وأنظمة التحكم بالدخول.",
                  en: "ARABTEC provides surveillance cameras, IP cameras, recording systems, central monitoring, attendance systems, biometrics, face recognition, RFID, cards and access control systems.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك كاميرات مراقبة للمؤسسات؟", en: "Does ARABTEC provide enterprise surveillance cameras?" },
                a: {
                  ar: "نعم، يمكن تصميم وتركيب أنظمة مراقبة للمكاتب والمباني والفروع والمستودعات والمواقع التشغيلية وفق المسح الميداني.",
                  en: "Yes — surveillance systems for offices, buildings, branches, warehouses and operational sites can be designed and installed based on a site survey.",
                },
              },
              {
                q: { ar: "ما الفرق بين NVR و DVR؟", en: "What's the difference between NVR and DVR?" },
                a: {
                  ar: "يستخدم DVR عادة مع أنظمة كاميرات تعتمد على توصيلات مخصصة، بينما يستخدم NVR غالبًا مع كاميرات IP المتصلة بالشبكة.",
                  en: "DVR is typically used with cameras relying on dedicated wiring, while NVR is usually used with network-connected IP cameras.",
                },
              },
              {
                q: { ar: "هل يمكن ربط كاميرات عدة فروع؟", en: "Can cameras from multiple branches be connected?" },
                a: {
                  ar: "نعم، يمكن تصميم مراقبة مركزية لعدة مواقع وفق جاهزية الشبكة والبنية التحتية وسعة التخزين.",
                  en: "Yes — central monitoring across multiple sites can be designed based on network and infrastructure readiness and storage capacity.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك أنظمة حضور وانصراف؟", en: "Does ARABTEC provide attendance systems?" },
                a: {
                  ar: "نعم، تشمل الحلول البصمة والتعرف على الوجه والبطاقات و RFID، مع تقارير وإدارة أجهزة متعددة.",
                  en: "Yes — solutions include biometrics, face recognition, cards and RFID, with reporting and multi-device management.",
                },
              },
              {
                q: { ar: "هل يمكن ربط الحضور بالموارد البشرية؟", en: "Can attendance be integrated with HR?" },
                a: {
                  ar: "نعم، يمكن ربط بيانات الحضور بنظام الموارد البشرية أو ERP عبر وسائل التكامل المتاحة.",
                  en: "Yes — attendance data can be integrated with HR or ERP via available integration methods.",
                },
              },
              {
                q: { ar: "هل يمكن استخدام التعرف على الوجه للحضور؟", en: "Can face recognition be used for attendance?" },
                a: {
                  ar: "نعم، يمكن استخدام أجهزة التعرف على الوجه وفق متطلبات المشروع وسياسات المؤسسة والمتطلبات التنظيمية المعتمدة.",
                  en: "Yes — face recognition devices can be used per project requirements and the organization's policies and approved regulatory requirements.",
                },
              },
              {
                q: { ar: "ما هو نظام التحكم بالدخول؟", en: "What is an access control system?" },
                a: {
                  ar: "هو نظام يدير صلاحيات دخول المستخدمين إلى الأبواب والمباني والمناطق المحددة باستخدام بطاقة أو بصمة أو وسيلة تحقق أخرى.",
                  en: "It's a system that manages user access rights to doors, buildings and restricted areas using a card, biometrics or another verification method.",
                },
              },
              {
                q: { ar: "هل يمكن تحديد أوقات دخول مختلفة للموظفين؟", en: "Can different access times be defined for employees?" },
                a: {
                  ar: "نعم، يمكن إعداد صلاحيات بحسب المستخدم والباب والموقع والوقت وفق إمكانات النظام.",
                  en: "Yes — permissions can be configured per user, door, site and time based on system capabilities.",
                },
              },
              {
                q: { ar: "هل يمكن إدارة الزوار؟", en: "Can visitors be managed?" },
                a: {
                  ar: "يمكن إضافة وظائف لتسجيل الزوار وإصدار صلاحيات أو بطاقات مؤقتة ومتابعة الدخول والخروج.",
                  en: "Visitor logging, temporary cards or permissions, and entry/exit tracking can be added.",
                },
              },
              {
                q: { ar: "هل يمكن ربط نظام الدخول بعدة مبانٍ؟", en: "Can the access system connect multiple buildings?" },
                a: {
                  ar: "نعم، يمكن إدارة عدة مبانٍ ومواقع من خلال نظام مركزي وفق البنية المتاحة.",
                  en: "Yes — multiple buildings and sites can be managed from a central system per available infrastructure.",
                },
              },
              {
                q: { ar: "هل تشمل الخدمة التركيب والتدريب؟", en: "Does the service include installation and training?" },
                a: {
                  ar: "يمكن أن يشمل نطاق المشروع التوريد والتركيب والإعداد والاختبار والتدريب والتسليم.",
                  en: "Project scope can include supply, installation, configuration, testing, training and handover.",
                },
              },
              {
                q: { ar: "هل تقدم أربتك الصيانة؟", en: "Does ARABTEC provide maintenance?" },
                a: {
                  ar: "نعم، يمكن تقديم الصيانة الوقائية ومعالجة الأعطال ومراجعة التسجيل والأجهزة وفق اتفاقية الخدمة.",
                  en: "Yes — preventive maintenance, fault handling, recording and device review can be provided per the service agreement.",
                },
              },
              {
                q: { ar: "كم يستغرق تنفيذ المشروع؟", en: "How long does project implementation take?" },
                a: {
                  ar: "تعتمد المدة على عدد المواقع والكاميرات والأجهزة والمداخل والكابلات والتكاملات والأعمال الميدانية المطلوبة.",
                  en: "Duration depends on sites, cameras, devices, entrances, cables, integrations and required field work.",
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
                name: "ما الخدمات التي تقدمها أربتك في هذا المجال؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تقدم أربتك حلول كاميرات المراقبة، كاميرات IP، أنظمة التسجيل، المراقبة المركزية، أنظمة الحضور والانصراف، البصمة، التعرف على الوجه، RFID، البطاقات وأنظمة التحكم بالدخول.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن ربط الحضور بالموارد البشرية؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن ربط بيانات الحضور بنظام الموارد البشرية أو ERP عبر وسائل التكامل المتاحة.",
                },
              },
              {
                "@type": "Question",
                name: "ما هو نظام التحكم بالدخول؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "هو نظام يدير صلاحيات دخول المستخدمين إلى الأبواب والمباني والمناطق المحددة باستخدام بطاقة أو بصمة أو وسيلة تحقق أخرى.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}