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
  Network,
  Activity,
  Layers,
  Cable,
  Wifi,
  Radio,
  Satellite,
  Phone,
  Wrench,
  Building2,
  Landmark,
  Server,
  Globe,
  Users,
  Router,
  Plug,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Rss,
} from "lucide-react";

// الصور
import heroImg from "@/assets/enterprise-network-branch-connectivity.webp";
import branchImg from "@/assets/multi-branch-network-connectivity.jpg";
import fiberImg from "@/assets/enterprise-fiber-optic-installation.jpg";
import wifiImg from "@/assets/enterprise-wifi-network.webp";
import govNetImg from "@/assets/government-network-connectivity.webp";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

export default function NetworkConnectivityPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";
  const s = getService("network-connectivity");
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
                  ? "شبكة مؤسسية تربط الفروع والمستخدمين والأنظمة ومركز البيانات"
                  : "Enterprise network connecting branches, users, systems and data center"
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
              {isAr ? "اتصال مؤسسي موثوق بين المستخدمين والأنظمة والمواقع" : "Reliable enterprise connectivity between users, systems and sites"}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "حلول الشبكات والاتصال وربط المواقع للجهات الحكومية والمؤسسات"
                : "Networks, connectivity and multi-site linking solutions for government and enterprises"}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isAr
                ? "تساعد أربتك الجهات الحكومية والمؤسسات على تصميم وتنفيذ شبكات اتصال تربط الموظفين والأنظمة والخوادم والفروع والمواقع ضمن بيئة تقنية منظمة وقابلة للإدارة والتوسع."
                : "ARABTEC helps government entities and enterprises design and deliver networks connecting employees, systems, servers, branches and sites within a well-organized, manageable and scalable environment."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "نقدم حلول الشبكات المؤسسية، الألياف الضوئية، الكابلات الهيكلية، الشبكات اللاسلكية، ربط المواقع، Point-to-Point، VSAT، WiMax و VoIP، إضافة إلى خدمات الاختبار والتوثيق والتشغيل والصيانة."
                : "We provide enterprise networks, fiber optics, structured cabling, wireless networks, site connectivity, Point-to-Point, VSAT, WiMax and VoIP — plus testing, documentation, operations and maintenance."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تبدأ خدماتنا بدراسة عدد المستخدمين والمواقع والتطبيقات وحركة البيانات، ثم إعداد تصميم فني يحدد البنية والمعدات ومسارات الاتصال وخطة التنفيذ بما يتوافق مع احتياجات المؤسسة الحالية وخططها المستقبلية."
                : "Our services start by studying users, sites, applications and data traffic, then preparing a technical design defining architecture, equipment, connectivity paths and the delivery plan — aligned with the organization's current and future needs."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">
                {isAr ? "اطلب استشارة للشبكات" : "Request a network consultation"}
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                {isAr ? "اطلب تقييمًا للشبكة" : "Request a network assessment"}
              </CTAButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {(isAr
                ? ["ربط الفروع", "الألياف الضوئية", "Structured Cabling", "Wi-Fi", "Point-to-Point", "VSAT", "VoIP", "تشغيل وصيانة"]
                : ["Branch connectivity", "Fiber optics", "Structured Cabling", "Wi-Fi", "Point-to-Point", "VSAT", "VoIP", "Operations & maintenance"]
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
          2. الشبكات المؤسسية
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "شبكة تقنية تدعم الأنظمة والخدمات اليومية"
            : "A technology network supporting daily systems and services"}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "تعتمد الأنظمة المؤسسية والخدمات الرقمية على شبكة مستقرة تربط المستخدمين بالخوادم والتطبيقات والبيانات والفروع."
                : "Enterprise systems and digital services rely on a stable network connecting users to servers, applications, data and branches."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "لا يقتصر تصميم الشبكة على توصيل الأجهزة؛ بل يشمل دراسة حجم الاستخدام، عدد المواقع، طبيعة التطبيقات، الأولويات التشغيلية، سهولة الإدارة والتوسع، ومتطلبات استمرارية الاتصال."
                : "Network design isn't limited to connecting devices — it includes studying usage volume, sites, application nature, operational priorities, manageability, scalability and connectivity continuity requirements."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "مكونات الشبكة المؤسسية" : "Enterprise network components"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["ربط الفروع والمواقع", "الشبكات اللاسلكية", "الألياف الضوئية", "الكابلات النحاسية", "أجهزة التوجيه", "المبدلات", "نقاط الاتصال اللاسلكية", "الاتصالات الصوتية", "مراكز البيانات", "المراقبة والإدارة"]
                : ["Branch & site connectivity", "Wireless networks", "Fiber optics", "Copper cabling", "Routers", "Switches", "Wireless access points", "Voice communications", "Data centers", "Monitoring & management"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold mb-4 text-sm">
              {isAr ? "مخطط الشبكة" : "Network diagram"}
            </h3>
            <div className="flex flex-col items-center gap-3 text-xs">
              {(isAr
                ? ["المستخدمون والأجهزة", "الشبكة المحلية", "مركز البيانات والتطبيقات", "WAN", "الفروع والمواقع البعيدة"]
                : ["Users & devices", "Local network", "Data center & applications", "WAN", "Branches & remote sites"]
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
          3. خدمات الشبكات والاتصال — 12 خدمة
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "خدمات متكاملة من التخطيط إلى التشغيل"
            : "Integrated services from planning to operations"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              icon: Activity,
              hAr: "تقييم الشبكة الحالية",
              hEn: "Current network assessment",
              descAr: "مراجعة البنية الشبكية القائمة لتحديد المشكلات والقيود وفرص التحديث والتوسع.",
              descEn: "Reviewing the current network architecture to identify issues, limitations and modernization opportunities.",
              itemsAr: ["حصر المواقع والمستخدمين", "مراجعة أجهزة الشبكة", "تحليل التغطية اللاسلكية", "مراجعة الكابلات", "تحليل الاتصال بين الفروع", "مراجعة استخدام النطاق", "تحليل الأعطال المتكررة", "تحديد نقاط الاختناق", "مراجعة التوثيق", "إعداد توصيات فنية"],
              itemsEn: ["Sites & users inventory", "Network devices review", "Wireless coverage analysis", "Cabling review", "Branch connectivity analysis", "Bandwidth usage review", "Recurring failures analysis", "Bottleneck identification", "Documentation review", "Technical recommendations"],
            },
            {
              icon: Layers,
              hAr: "تصميم الشبكات المؤسسية",
              hEn: "Enterprise network design",
              descAr: "إعداد تصميم فني يحدد كيفية ربط المستخدمين والأنظمة والمواقع ضمن شبكة قابلة للإدارة.",
              descEn: "Preparing a technical design defining how users, systems and sites connect in a manageable network.",
              itemsAr: ["هيكل الشبكة", "توزيع المبدلات", "توزيع نقاط Wi-Fi", "مسارات الكابلات", "ربط مركز البيانات", "ربط الفروع", "تقسيم الشبكة", "خطة عناوين الشبكة", "خطة التوسع", "قائمة المعدات", "التوثيق الفني"],
              itemsEn: ["Network topology", "Switch distribution", "Wi-Fi access points layout", "Cable paths", "Data center connectivity", "Branch connectivity", "Network segmentation", "IP addressing plan", "Expansion plan", "Equipment list", "Technical documentation"],
            },
            {
              icon: Network,
              hAr: "شبكات LAN",
              hEn: "LAN networks",
              descAr: "تصميم وتنفيذ الشبكات المحلية داخل المكاتب والمباني والمنشآت لربط المستخدمين والطابعات والخوادم والأجهزة.",
              descEn: "Designing and delivering local area networks inside offices, buildings and facilities to connect users, printers, servers and devices.",
              itemsAr: ["تصميم الشبكة المحلية", "تركيب المبدلات", "ربط الأجهزة", "توزيع نقاط الشبكة", "ربط الخوادم", "إعداد VLAN", "اختبار الاتصال", "توثيق المنافذ", "ترقيم الكابلات", "تشغيل الشبكة"],
              itemsEn: ["LAN design", "Switch installation", "Device connectivity", "Network outlet distribution", "Server connectivity", "VLAN setup", "Connectivity testing", "Port documentation", "Cable labeling", "Network operations"],
            },
            {
              icon: Globe,
              hAr: "شبكات WAN وربط الفروع",
              hEn: "WAN & branch connectivity",
              descAr: "ربط المقر الرئيسي بالفروع والمستودعات والمواقع التشغيلية ضمن شبكة واسعة.",
              descEn: "Connecting HQ with branches, warehouses and operational sites within a wide area network.",
              itemsAr: ["تصميم شبكة WAN", "ربط الفروع", "ربط المواقع البعيدة", "تحديد مسارات الاتصال", "ربط التطبيقات المركزية", "توحيد الوصول إلى الأنظمة", "مراقبة الاتصال", "تعدد المواقع", "دعم المسارات البديلة", "خطة الاتصال البديل", "التوثيق"],
              itemsEn: ["WAN design", "Branch connectivity", "Remote site connectivity", "Connectivity path design", "Central application connectivity", "Unified system access", "Connectivity monitoring", "Multi-site support", "Alternate path support", "Backup connectivity plan", "Documentation"],
            },
            {
              icon: Cable,
              hAr: "الألياف الضوئية",
              hEn: "Fiber optics",
              descAr: "توريد وتمديد ولحام واختبار كابلات الألياف الضوئية للمباني والمواقع والفروع ومراكز البيانات.",
              descEn: "Supplying, laying, splicing and testing fiber optic cables for buildings, sites, branches and data centers.",
              itemsAr: ["تصميم مسار الألياف", "توريد الكابلات والملحقات", "تمديد الكابلات", "FOC Laying", "لحام الألياف", "FOC Splicing", "اختبار OTDR", "اختبار Power Meter", "تركيب Patch Panel", "تركيب Pigtail", "تركيب Patch Cord", "ترقيم وتوثيق المسارات"],
              itemsEn: ["Fiber path design", "Cable & accessory supply", "Cable laying", "FOC Laying", "Fiber splicing", "FOC Splicing", "OTDR testing", "Power Meter testing", "Patch Panel installation", "Pigtail installation", "Patch Cord installation", "Path labeling & documentation"],
            },
            {
              icon: Cable,
              hAr: "الكابلات الهيكلية Structured Cabling",
              hEn: "Structured Cabling",
              descAr: "تنفيذ بنية كابلات منظمة لدعم الشبكات والاتصال والأجهزة والأنظمة داخل المنشآت.",
              descEn: "Delivering structured cabling architecture supporting networks, connectivity, devices and systems inside facilities.",
              itemsAr: ["تخطيط النقاط", "تمديد كابلات UTP", "تمديد CAT6 أو الأنواع المناسبة", "تركيب المخارج", "Termination", "Patch Panels", "Racks", "اختبار الكابلات", "ترقيم النقاط", "تنظيم مسارات الكابلات", "التوثيق"],
              itemsEn: ["Outlet planning", "UTP cabling", "CAT6 or appropriate types", "Outlet installation", "Termination", "Patch Panels", "Racks", "Cable testing", "Outlet labeling", "Cable path organization", "Documentation"],
            },
            {
              icon: Wifi,
              hAr: "الشبكات اللاسلكية Wi-Fi",
              hEn: "Wi-Fi wireless networks",
              descAr: "تصميم وتنفيذ تغطية لاسلكية للمكاتب والمباني والمنشآت وفق عدد المستخدمين وطبيعة الموقع.",
              descEn: "Designing and delivering wireless coverage for offices, buildings and facilities according to users and site nature.",
              itemsAr: ["دراسة الموقع", "تحديد مناطق التغطية", "توزيع نقاط الوصول", "إعداد الشبكات اللاسلكية", "شبكات الموظفين", "شبكات الزوار", "إدارة نقاط الوصول", "تحسين التغطية", "اختبار قوة الإشارة", "تحليل الاستخدام"],
              itemsEn: ["Site survey", "Coverage area definition", "Access point distribution", "Wireless network configuration", "Employee networks", "Guest networks", "Access point management", "Coverage optimization", "Signal strength testing", "Usage analysis"],
            },
            {
              icon: Radio,
              hAr: "ربط Point-to-Point",
              hEn: "Point-to-Point connectivity",
              descAr: "ربط مبنيين أو موقعين من خلال اتصال مباشر وفق المسافة وطبيعة الموقع ومتطلبات الخدمة.",
              descEn: "Connecting two buildings or sites via direct link based on distance, site nature and service requirements.",
              itemsAr: ["دراسة خط الرؤية", "اختيار نقاط التركيب", "تحديد السعة المطلوبة", "تركيب أجهزة الربط", "توجيه الهوائيات", "اختبار الاتصال", "مراقبة الأداء", "إعداد الاتصال البديل عند الحاجة", "توثيق الإعدادات"],
              itemsEn: ["Line-of-sight study", "Installation point selection", "Required capacity definition", "Link equipment installation", "Antenna alignment", "Connectivity testing", "Performance monitoring", "Backup link setup if needed", "Configuration documentation"],
            },
            {
              icon: Satellite,
              hAr: "حلول VSAT والاتصال بالمواقع البعيدة",
              hEn: "VSAT & remote site connectivity",
              descAr: "توفير حلول اتصال للمواقع التي يصعب ربطها بالخطوط التقليدية، وفق التغطية والجدوى الفنية.",
              descEn: "Providing connectivity for sites difficult to connect with conventional lines — based on coverage and technical feasibility.",
              itemsAr: ["دراسة الموقع", "تحديد متطلبات الاتصال", "تركيب معدات VSAT", "إعداد الاتصال", "ربط الموقع بالشبكة المؤسسية", "اختبار الخدمة", "متابعة الأداء", "الدعم والصيانة"],
              itemsEn: ["Site study", "Connectivity requirements", "VSAT equipment installation", "Connectivity setup", "Site connectivity to enterprise network", "Service testing", "Performance monitoring", "Support & maintenance"],
            },
            {
              icon: Rss,
              hAr: "حلول WiMax والاتصال اللاسلكي واسع النطاق",
              hEn: "WiMax & wide-area wireless",
              descAr: "تنفيذ حلول اتصال لاسلكية للمواقع التي تتطلب تغطية أو ربطًا ضمن نطاق جغرافي واسع.",
              descEn: "Delivering wireless connectivity for sites requiring coverage or linking over a wide geographic area.",
              itemsAr: ["تقييم الموقع", "دراسة التغطية", "تحديد نقاط البث والاستقبال", "تركيب الأجهزة", "إعداد الشبكة", "اختبار السعة", "مراقبة الاتصال", "الصيانة"],
              itemsEn: ["Site assessment", "Coverage study", "Transmit & receive point setup", "Equipment installation", "Network configuration", "Capacity testing", "Connectivity monitoring", "Maintenance"],
            },
            {
              icon: Phone,
              hAr: "حلول VoIP والاتصالات الصوتية",
              hEn: "VoIP & voice communications",
              descAr: "تنفيذ أنظمة اتصال صوتي تعمل عبر شبكة المؤسسة لربط المستخدمين والفروع.",
              descEn: "Delivering voice systems running over the enterprise network to connect users and branches.",
              itemsAr: ["تحليل احتياجات الاتصال", "تصميم نظام VoIP", "تركيب وإعداد الأجهزة", "ربط الفروع", "إعداد التحويلات", "إعداد المستخدمين", "دعم مراكز الاتصال عند الحاجة", "اختبار جودة الصوت", "التكامل مع الشبكة", "الدعم الفني"],
              itemsEn: ["Communications needs analysis", "VoIP system design", "Device installation & configuration", "Branch connectivity", "Call routing setup", "User setup", "Contact center support if needed", "Voice quality testing", "Network integration", "Technical support"],
            },
            {
              icon: Wrench,
              hAr: "تشغيل وصيانة الشبكات",
              hEn: "Network operations & maintenance",
              descAr: "مراقبة الشبكة ومعالجة الأعطال وتحسين الأداء وتنفيذ التحديثات وفق نطاق اتفاقية الخدمة.",
              descEn: "Monitoring the network, handling faults, improving performance and applying updates per the service agreement.",
              itemsAr: ["مراقبة الاتصال", "متابعة أجهزة الشبكة", "معالجة الأعطال", "إدارة المبدلات والموجهات", "مراقبة Wi-Fi", "تحديث الإعدادات", "متابعة استخدام النطاق", "إدارة طلبات الدعم", "إعداد التقارير", "الصيانة الوقائية"],
              itemsEn: ["Connectivity monitoring", "Network device tracking", "Fault handling", "Switch & router management", "Wi-Fi monitoring", "Configuration updates", "Bandwidth usage tracking", "Support request management", "Reporting", "Preventive maintenance"],
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
          4. ربط الفروع والمواقع
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img
            src={branchImg}
            alt={isAr
              ? "ربط مقر المؤسسة والفروع والمواقع البعيدة ضمن شبكة واحدة"
              : "Connecting HQ, branches and remote sites into one network"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "شبكة واحدة تربط المقر والفروع والمواقع التشغيلية"
                : "One network connecting HQ, branches and operational sites"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تحتاج المؤسسات متعددة المواقع إلى اتصال مستقر يسمح للموظفين بالوصول إلى الأنظمة والملفات والخدمات المركزية، ويساعد فرق الإدارة التقنية على متابعة جميع المواقع."
                : "Multi-site organizations need stable connectivity letting employees access central systems, files and services, and helping technology teams monitor all sites."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "يتم اختيار وسيلة الربط وفق موقع الفرع، المسافة، طبيعة التطبيقات، حجم البيانات، عدد المستخدمين ومدى توفر خدمات الاتصال."
                : "The connectivity method is chosen based on branch location, distance, application nature, data volume, number of users and availability of connectivity services."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "وسائل الربط المحتملة" : "Potential connectivity methods"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["شبكات WAN", "الألياف الضوئية", "الخطوط المؤجرة", "Point-to-Point", "الاتصال اللاسلكي", "VSAT", "الاتصال الهجين", "ربط المواقع بمركز البيانات", "ربط المواقع بالبيئة السحابية"]
                : ["WAN networks", "Fiber optics", "Leased lines", "Point-to-Point", "Wireless connectivity", "VSAT", "Hybrid connectivity", "Site connectivity to data center", "Site connectivity to cloud"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-bold">
              {isAr ? "تطبيقات ربط المواقع" : "Multi-site connectivity use cases"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["الوصول إلى نظام ERP", "الوصول إلى الأنظمة المؤسسية", "نقل البيانات بين الفروع", "الاتصال الصوتي", "ربط الكاميرات", "ربط أنظمة الحضور", "الوصول إلى الخوادم", "إدارة الفروع مركزيًا"]
                : ["ERP system access", "Enterprise systems access", "Data transfer across branches", "Voice communications", "Camera connectivity", "Attendance systems connectivity", "Server access", "Central branch management"]
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
          5. شبكات LAN / WAN
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "شبكات محلية وواسعة مصممة وفق بيئة الشركة"
            : "LAN and WAN networks designed for the enterprise environment"}
          intro={
            isAr
              ? "تربط شبكة LAN المستخدمين والأجهزة والخوادم داخل الموقع الواحد، بينما تربط شبكة WAN الفروع والمواقع المختلفة ضمن بيئة اتصال موحدة. يتم تصميم الشبكتين معًا لضمان سهولة الوصول إلى التطبيقات والبيانات ودعم نمو المؤسسة وتعدد مواقعها."
              : "LAN connects users, devices and servers within a single site, while WAN connects branches and different sites in a unified connectivity environment. Both are designed together to ensure easy access to applications and data and to support growth and multi-site expansion."}
        />

        {/* <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
                <Network className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{isAr ? "شبكة LAN" : "LAN network"}</h3>
            </div>
            <ul className="grid gap-1.5 md:grid-cols-2">
              {(isAr
                ? ["ربط المستخدمين", "ربط الخوادم", "ربط الطابعات", "ربط أنظمة الحضور", "ربط كاميرات IP", "ربط نقاط Wi-Fi", "ربط أجهزة المؤسسة"]
                : ["User connectivity", "Server connectivity", "Printer connectivity", "Attendance system connectivity", "IP camera connectivity", "Wi-Fi access point connectivity", "Enterprise device connectivity"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{isAr ? "شبكة WAN" : "WAN network"}</h3>
            </div>
            <ul className="grid gap-1.5 md:grid-cols-2">
              {(isAr
                ? ["ربط الفروع", "ربط المقر بالمستودعات", "ربط المواقع التشغيلية", "الوصول إلى الأنظمة المركزية", "ربط مراكز البيانات", "ربط البيئة السحابية", "دعم الاتصال الصوتي"]
                : ["Branch connectivity", "HQ-warehouse connectivity", "Operational site connectivity", "Central system access", "Data center connectivity", "Cloud environment connectivity", "Voice communications support"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div> */}

        {/* مقارنة LAN vs WAN */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="rounded-lg border border-border bg-background px-5 py-3">
              <span className="font-semibold text-[color:var(--brand-deep)]">LAN</span>
              <span className="mx-2 text-muted-foreground">=</span>
              <span className="text-muted-foreground">{isAr ? "داخل الموقع" : "Within site"}</span>
            </div>
            <div className="rounded-lg border border-border bg-background px-5 py-3">
              <span className="font-semibold text-[color:var(--brand-deep)]">WAN</span>
              <span className="mx-2 text-muted-foreground">=</span>
              <span className="text-muted-foreground">{isAr ? "بين المواقع" : "Between sites"}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          6. الألياف الضوئية
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "بنية اتصال عالية السعة للمواقع والمؤسسات"
                : "High-capacity connectivity infrastructure for sites and enterprises"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تستخدم الألياف الضوئية لربط المباني والطوابق والفروع ومراكز البيانات عندما تكون الحاجة إلى نقل البيانات لمسافات أطول أو بسرعات أعلى."
                : "Fiber optics are used to connect buildings, floors, branches and data centers when data needs to travel longer distances or at higher speeds."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تشمل خدمات أربتك توريد وتمديد ولحام واختبار الألياف الضوئية، إضافة إلى تركيب الملحقات وتوثيق المسارات."
                : "ARABTEC's services include supplying, laying, splicing and testing fiber optics, plus installing accessories and documenting paths."}
            </p>

            {/* <h3 className="mt-6 font-bold">
              {isAr ? "مراحل التنفيذ" : "Delivery phases"}
            </h3>

            <ol className="mt-4 space-y-3">
              {(isAr
                ? [
                    { t: "المسح الميداني", d: "تحديد مسار الكابل والمواقع ونقاط البداية والنهاية." },
                    { t: "التصميم", d: "تحديد نوع الألياف وعدد المسارات والملحقات المطلوبة." },
                    { t: "التمديد", d: "تمديد الكابلات داخل أو خارج المباني وفق التصميم." },
                    { t: "اللحام والإنهاء", d: "تنفيذ Splicing وتركيب Pigtails و Patch Panels." },
                    { t: "الاختبار", d: "استخدام OTDR و Power Meter للتحقق من جودة المسار." },
                    { t: "التوثيق", d: "ترقيم الألياف والمنافذ وتسليم التقارير." },
                  ]
                : [
                    { t: "Site survey", d: "Defining cable path, locations, start and end points." },
                    { t: "Design", d: "Defining fiber type, number of paths and required accessories." },
                    { t: "Laying", d: "Laying cables inside or outside buildings per design." },
                    { t: "Splicing & termination", d: "Splicing and installing Pigtails and Patch Panels." },
                    { t: "Testing", d: "Using OTDR and Power Meter to verify path quality." },
                    { t: "Documentation", d: "Labeling fibers and ports and delivering reports." },
                  ]
              ).map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="text-2xl font-extrabold text-[color:var(--gold)] shrink-0 w-8">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold">{step.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol> */}
          </div>

          <img
            src={fiberImg}
            alt={isAr
              ? "تمديد ولحام واختبار الألياف الضوئية للمؤسسات"
              : "Fiber optic laying, splicing and testing for enterprises"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </Section>

      {/* ============================================================
          7. الكابلات الهيكلية
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "بنية كابلات منظمة تدعم الشبكات والأنظمة"
            : "Structured cabling supporting networks and systems"}
          intro={
            isAr
              ? "تسهم الكابلات الهيكلية المصممة جيدًا في تقليل الأعطال وتسهيل الصيانة وإضافة مستخدمين وأجهزة جديدة مستقبلًا. يشمل التنفيذ تمديد الكابلات وتركيب الرفوف والمخارج واللوحات واختبار كل نقطة وتسليم توثيق واضح."
              : "Well-designed structured cabling reduces failures, eases maintenance and enables adding users and devices in the future. Delivery includes laying cables, installing racks, outlets and panels, testing each outlet and delivering clear documentation."}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start mt-6">
          {/* <div>
            <h3 className="font-bold mb-4">
              {isAr ? "المكونات" : "Components"}
            </h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["UTP Cabling", "CAT6 أو الأنواع المناسبة", "Patch Panels", "Data Outlets", "Faceplates", "Racks", "Patch Cords", "Cable Managers", "Labels", "اختبارات النقاط", "مخططات التوزيع"]
                : ["UTP Cabling", "CAT6 or appropriate types", "Patch Panels", "Data Outlets", "Faceplates", "Racks", "Patch Cords", "Cable Managers", "Labels", "Outlet testing", "Distribution diagrams"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="font-bold mb-4">
              {isAr ? "الأنظمة التي تدعمها الكابلات" : "Systems supported by cabling"}
            </h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["أجهزة الحاسب", "الهواتف", "نقاط Wi-Fi", "كاميرات IP", "أنظمة الحضور", "التحكم بالدخول", "الخوادم", "الطابعات"]
                : ["Computers", "Phones", "Wi-Fi access points", "IP cameras", "Attendance systems", "Access control", "Servers", "Printers"]
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
          8. الشبكات اللاسلكية
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img
            src={wifiImg}
            alt={isAr
              ? "تصميم وتنفيذ شبكة Wi-Fi مؤسسية للمباني والمواقع"
              : "Designing and delivering enterprise Wi-Fi networks for buildings and sites"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "تغطية Wi-Fi مؤسسية مدروسة"
                : "Considered enterprise Wi-Fi coverage"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تحتاج الشبكات اللاسلكية المؤسسية إلى تخطيط يراعي مساحة المبنى، عدد المستخدمين، توزيع الغرف، طبيعة الجدران وكثافة الأجهزة. يتم توزيع نقاط الوصول وفق دراسة الموقع بدلًا من الاعتماد على التغطية العشوائية."
                : "Enterprise wireless networks need planning that considers building space, users, room layout, wall nature and device density. Access points are distributed based on a site survey rather than random coverage."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "تشمل الخدمة" : "The service includes"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["Site Survey", "تحليل التغطية", "تحديد مواقع نقاط الوصول", "شبكة الموظفين", "شبكة الضيوف", "إدارة المستخدمين", "توزيع السعات", "التجوال بين النقاط", "تحليل التداخل", "اختبار الأداء", "إدارة مركزية"]
                : ["Site Survey", "Coverage analysis", "Access point placement", "Employee network", "Guest network", "User management", "Capacity distribution", "Roaming between APs", "Interference analysis", "Performance testing", "Central management"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-bold">
              {isAr ? "بيئات الاستخدام" : "Deployment environments"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? ["المكاتب", "المباني الحكومية", "المؤسسات التعليمية", "المستودعات", "المستشفيات", "الفنادق", "المواقع الصناعية", "المراكز الخدمية"]
                : ["Offices", "Government buildings", "Educational institutions", "Warehouses", "Hospitals", "Hotels", "Industrial sites", "Service centers"]
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
          9. VoIP
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "اتصالات صوتية موحدة بين الموظفين والفروع"
            : "Unified voice communications between employees and branches"}
          intro={
            isAr
              ? "تتيح حلول VoIP تشغيل الاتصالات الصوتية عبر شبكة المؤسسة وربط الفروع ضمن نظام اتصالات موحد. يتم تصميم النظام وفق عدد المستخدمين والفروع والأرقام والخدمات المطلوبة، مع مراعاة جودة الشبكة واستقرار الاتصال."
              : "VoIP solutions run voice communications over the enterprise network and connect branches into a unified system. The system is designed according to users, branches, numbers and required services — considering network quality and call stability."}
        />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div>
            <h3 className="font-bold mb-3">
              {isAr ? "الوظائف المحتملة" : "Potential features"}
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["الأرقام الداخلية", "تحويل المكالمات", "البريد الصوتي", "ربط الفروع", "المؤتمرات الصوتية", "مجموعات الاتصال", "تسجيل المكالمات عند الحاجة", "التقارير", "ربط مراكز الاتصال", "إدارة المستخدمين"]
                : ["Extensions", "Call transfer", "Voicemail", "Branch connectivity", "Audio conferencing", "Call groups", "Call recording if needed", "Reporting", "Contact center connectivity", "User management"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              {isAr ? "متطلبات نجاح VoIP" : "VoIP success requirements"}
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["شبكة مستقرة", "جودة اتصال مناسبة", "تحديد أولويات حركة الصوت", "أجهزة متوافقة", "إعدادات صحيحة", "مراقبة الأداء"]
                : ["Stable network", "Suitable connectivity quality", "Voice traffic prioritization", "Compatible devices", "Correct configuration", "Performance monitoring"]
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
          10. الشبكات للجهات الحكومية
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-deep)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-deep)] mb-3">
              <Landmark className="h-3.5 w-3.5" />
              {isAr ? "للجهات الحكومية" : "For government entities"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "بنية اتصال تدعم الخدمات الحكومية والمواقع المتعددة"
                : "Connectivity infrastructure supporting government services and multi-site"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "يمكن تصميم شبكات الجهات الحكومية لربط الإدارات والمباني والفروع ومراكز الخدمة ومراكز البيانات ضمن بيئة منظمة وقابلة للإدارة."
                : "Government entity networks can be designed to connect departments, buildings, branches, service centers and data centers within an organized, manageable environment."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "يراعى في التصميم عدد المواقع والمستخدمين والتطبيقات، ومتطلبات التوسع، واستمرارية الخدمات، وربط الأنظمة المركزية."
                : "Design considers sites, users and applications, expansion requirements, service continuity and central system connectivity."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "حالات الاستخدام" : "Use cases"}
            </h3>

            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "ربط المقر والفروع", d: "توفير اتصال بين الإدارات والمواقع للوصول إلى الأنظمة والخدمات المركزية." },
                    { t: "ربط مراكز الخدمة", d: "ربط مراكز المتعاملين بالبوابات والأنظمة الحكومية." },
                    { t: "ربط مراكز البيانات", d: "توفير الاتصال بين المستخدمين والخوادم والتطبيقات." },
                    { t: "شبكات المباني الحكومية", d: "تنفيذ LAN و Wi-Fi والكابلات الهيكلية والألياف الضوئية." },
                    { t: "ربط أنظمة المراقبة والحضور", d: "ربط كاميرات IP وأجهزة الحضور والتحكم بالدخول بالشبكة المؤسسية." },
                    { t: "تشغيل الشبكة ومتابعتها", d: "إدارة الأعطال والأجهزة والاتصال ضمن نطاق الخدمة المعتمد." },
                  ]
                : [
                    { t: "HQ & branch connectivity", d: "Providing connectivity between departments and sites to access central systems and services." },
                    { t: "Service center connectivity", d: "Connecting customer service centers to portals and government systems." },
                    { t: "Data center connectivity", d: "Providing connectivity between users, servers and applications." },
                    { t: "Government building networks", d: "Delivering LAN, Wi-Fi, structured cabling and fiber optics." },
                    { t: "Surveillance & attendance connectivity", d: "Connecting IP cameras, attendance devices and access control to the enterprise network." },
                    { t: "Network operations & monitoring", d: "Managing faults, devices and connectivity per the approved service scope." },
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
            src={govNetImg}
            alt={isAr
              ? "شبكة اتصال تربط المباني والفروع والخدمات الحكومية"
              : "Connectivity network linking government buildings, branches and services"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </Section>

      {/* ============================================================
          11. القطاعات متعددة المواقع
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "حلول اتصال تناسب البيئات الميدانية والتشغيلية"
            : "Connectivity solutions for field and operational environments"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {[
            // { ar: "النفط والغاز", en: "Oil & gas", itemsAr: ["ربط المواقع التشغيلية", "ربط الحقول والمستودعات", "اتصال المواقع البعيدة", "VSAT", "Point-to-Point", "الألياف الضوئية", "مراقبة الاتصال"], itemsEn: ["Operational site connectivity", "Field & warehouse connectivity", "Remote site connectivity", "VSAT", "Point-to-Point", "Fiber optics", "Connectivity monitoring"] },
            // { ar: "التعليم", en: "Education", itemsAr: ["شبكات المدارس والجامعات", "Wi-Fi", "معامل الحاسب", "ربط الفروع", "الألياف الضوئية", "الكابلات الهيكلية", "إدارة الشبكة"], itemsEn: ["School & university networks", "Wi-Fi", "Computer labs", "Branch connectivity", "Fiber optics", "Structured cabling", "Network management"] },
            { ar: "الرعاية الصحية", en: "Healthcare", itemsAr: ["ربط المستشفيات والمراكز", "شبكات المستخدمين", "ربط الأنظمة", "Wi-Fi", "ربط الأجهزة", "استمرارية الاتصال"], itemsEn: ["Hospital & center connectivity", "User networks", "System connectivity", "Wi-Fi", "Device connectivity", "Connectivity continuity"] },
            { ar: "الشركات والمؤسسات", en: "Enterprises", itemsAr: ["ربط المقر والفروع", "LAN و WAN", "Wi-Fi", "VoIP", "ربط ERP", "ربط السحابة", "تشغيل وصيانة الشبكة"], itemsEn: ["HQ & branch connectivity", "LAN & WAN", "Wi-Fi", "VoIP", "ERP connectivity", "Cloud connectivity", "Network operations & maintenance"] },
          ].map((sec) => (
            <Card key={sec.en}>
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
      </Section>

      {/* ============================================================
          12. ربط الشبكة بالسحابة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "اتصال يدعم التطبيقات والأنظمة السحابية"
            : "Connectivity supporting cloud applications and systems"}
          intro={
            isAr
              ? "تحتاج التطبيقات السحابية والأنظمة المركزية إلى اتصال مستقر بين المستخدمين والفروع ومركز البيانات أو البيئة السحابية. تعمل أربتك على تصميم الشبكة بما يراعي التطبيقات المستخدمة وحجم البيانات وعدد المواقع ومتطلبات الوصول."
              : "Cloud applications and central systems need stable connectivity between users, branches and the data center or cloud environment. ARABTEC designs the network considering used applications, data volume, sites and access requirements."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? ["الوصول إلى التطبيقات السحابية", "الوصول إلى ERP", "ربط قواعد البيانات", "ربط الفروع بمركز البيانات", "ربط المواقع بخدمات الاستضافة", "تشغيل النسخ الاحتياطي", "الوصول إلى الملفات المركزية", "تشغيل AI Agents"]
            : ["Cloud application access", "ERP access", "Database connectivity", "Branch-data center connectivity", "Site-hosting connectivity", "Running backup", "Central file access", "Running AI Agents"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAButton to="/services/cloud-infrastructure" variant="outline">
            {isAr ? "استكشف حلول السحابة والبنية التحتية" : "Explore cloud & infrastructure solutions"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          13. ربط الشبكة بأنظمة المراقبة والحضور
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "شبكة موحدة تدعم الأنظمة الذكية داخل المنشأة"
            : "A unified network supporting smart systems inside the facility"}
          intro={
            isAr
              ? "تعتمد كاميرات IP وأنظمة الحضور والتحكم بالدخول على شبكة مناسبة تربط الأجهزة بمراكز الإدارة والتسجيل. يمكن تصميم البنية الشبكية لهذه الأنظمة ضمن مشروع متكامل يراعي عدد الأجهزة والمواقع وحركة البيانات والتخزين."
              : "IP cameras, attendance and access control systems rely on a suitable network connecting devices to management and recording centers. The network architecture for these systems can be designed within an integrated project considering devices, sites, data traffic and storage."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? ["ربط كاميرات IP", "ربط أجهزة الحضور", "ربط أنظمة التحكم بالدخول", "توفير نقاط الشبكة", "ربط أجهزة التسجيل", "ربط المواقع", "المراقبة المركزية", "التكامل مع أنظمة الموارد البشرية"]
            : ["IP camera connectivity", "Attendance device connectivity", "Access control system connectivity", "Network outlet provisioning", "Recording device connectivity", "Site connectivity", "Central monitoring", "HR system integration"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAButton to="/services/surveillance-access-control" variant="outline">
            {isAr ? "استكشف أنظمة المراقبة والحضور والتحكم بالدخول" : "Explore surveillance, attendance & access control"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          14. إدارة ومراقبة الشبكة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "متابعة مركزية للأداء والاتصال"
            : "Centralized monitoring of performance and connectivity"}
          intro={
            isAr
              ? "تساعد مراقبة الشبكة على اكتشاف الأعطال ومتابعة حالة الأجهزة والاتصالات وتحليل الاستخدام قبل أن تؤثر المشكلات على الخدمات."
              : "Network monitoring helps detect faults, track devices and connectivity status, and analyze usage before problems affect services."}
        />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div>
            <h3 className="font-bold mb-3">{isAr ? "عناصر المراقبة" : "Monitoring elements"}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["حالة أجهزة الشبكة", "توفر الاتصال", "استخدام النطاق", "حالة الفروع", "حالة نقاط Wi-Fi", "استخدام المنافذ", "التنبيهات", "الأعطال المتكررة", "أداء الاتصالات", "تقارير الشبكة"]
                : ["Network device status", "Connectivity availability", "Bandwidth usage", "Branch status", "Wi-Fi access point status", "Port usage", "Alerts", "Recurring faults", "Connectivity performance", "Network reports"]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">{isAr ? "خدمات الدعم" : "Support services"}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? ["استقبال البلاغات", "تحليل الأعطال", "المعالجة", "التصعيد", "التحديثات", "إدارة التغييرات", "الصيانة الوقائية", "التقارير"]
                : ["Receiving reports", "Fault analysis", "Resolution", "Escalation", "Updates", "Change management", "Preventive maintenance", "Reporting"]
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
          15. منهجية تنفيذ مشروع الشبكات — 10 مراحل
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "منهجية واضحة من المسح الميداني إلى التشغيل"
            : "A clear methodology from site survey to operations"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {(isAr
            ? [
                { t: "فهم الاحتياج", d: "تحديد المواقع والمستخدمين والتطبيقات ومتطلبات الاتصال." },
                { t: "المسح الميداني", d: "مراجعة المباني والمسارات وغرف الأجهزة ونقاط الاتصال." },
                { t: "تصميم الشبكة", d: "إعداد الهيكل الفني والمعدات ومسارات الكابلات والربط." },
                { t: "تحديد نطاق العمل", d: "تحديد المكونات والكميات والمراحل ومسؤوليات التنفيذ." },
                { t: "التوريد والتجهيز", d: "تجهيز المعدات والكابلات والملحقات المطلوبة." },
                { t: "التركيب", d: "تركيب أجهزة الشبكة والكابلات والألياف ونقاط الاتصال." },
                { t: "الإعداد", d: "إعداد الشبكة والأجهزة والمستخدمين ومسارات الاتصال." },
                { t: "الاختبار", d: "اختبار الكابلات والتغطية والاتصال والأداء." },
                { t: "التوثيق والتسليم", d: "تسليم المخططات والعناوين والمنافذ والإعدادات والتقارير." },
                { t: "التشغيل والدعم", d: "مراقبة الشبكة ومعالجة الأعطال والتحسين وفق الاتفاق." },
              ]
            : [
                { t: "Understanding needs", d: "Defining sites, users, applications and connectivity requirements." },
                { t: "Site survey", d: "Reviewing buildings, paths, equipment rooms and outlets." },
                { t: "Network design", d: "Preparing technical topology, equipment, cable paths and connectivity." },
                { t: "Scope definition", d: "Defining components, quantities, phases and delivery responsibilities." },
                { t: "Supply & preparation", d: "Preparing required equipment, cables and accessories." },
                { t: "Installation", d: "Installing network devices, cables, fiber and outlets." },
                { t: "Configuration", d: "Configuring network, devices, users and connectivity paths." },
                { t: "Testing", d: "Testing cables, coverage, connectivity and performance." },
                { t: "Documentation & handover", d: "Delivering diagrams, addresses, ports, configurations and reports." },
                { t: "Operations & support", d: "Monitoring the network, handling faults and improving per agreement." },
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
          16. فوائد الشبكة المؤسسية
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "كيف تدعم الشبكة أهداف المؤسسة؟"
            : "How does the network support the organization's goals?"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "اتصال أفضل بين الإدارات", d: "ربط المستخدمين والأنظمة والمواقع ضمن بيئة واحدة." },
                { t: "دعم التطبيقات المؤسسية", d: "توفير الاتصال اللازم لـ ERP والبوابات وقواعد البيانات والخدمات السحابية." },
                { t: "سهولة التوسع", d: "إضافة مستخدمين وفروع وأجهزة جديدة ضمن تصميم منظم." },
                { t: "إدارة مركزية", d: "متابعة أجهزة الشبكة والمواقع من خلال أدوات وتقارير موحدة." },
                { t: "تقليل التعقيد", d: "تنظيم الكابلات والمعدات والمنافذ والمسارات." },
                { t: "دعم العمل متعدد المواقع", d: "تمكين الفروع والمواقع من الوصول إلى الخدمات المركزية." },
                { t: "تحسين تجربة المستخدم", d: "توفير اتصال مناسب للعمل اليومي والوصول إلى التطبيقات." },
                { t: "تسهيل الصيانة", d: "وجود توثيق واضح للأجهزة والمنافذ والكابلات والإعدادات." },
              ]
            : [
                { t: "Better inter-department connectivity", d: "Connecting users, systems and sites in one environment." },
                { t: "Enterprise application support", d: "Providing connectivity for ERP, portals, databases and cloud services." },
                { t: "Easy scaling", d: "Adding users, branches and devices within an organized design." },
                { t: "Centralized management", d: "Tracking network devices and sites via unified tools and reports." },
                { t: "Reduced complexity", d: "Organizing cables, equipment, ports and paths." },
                { t: "Multi-site support", d: "Enabling branches and sites to access central services." },
                { t: "Better UX", d: "Providing appropriate connectivity for daily work and application access." },
                { t: "Easier maintenance", d: "Clear documentation of devices, ports, cables and configurations." },
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
          17. لماذا أربتك؟
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "لماذا تختار المؤسسات أربتك لحلول الشبكات والاتصال؟"
            : "Why organizations choose ARABTEC for networks & connectivity"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "خبرة عملية ممتدة", d: "تملك أربتك خبرة في LAN و WAN والألياف الضوئية و WiMax و VSAT و Point-to-Point و VoIP والكابلات الهيكلية." },
                { t: "فهم البنية المؤسسية", d: "نربط تصميم الشبكة باحتياجات الأنظمة والخوادم والفروع والمستخدمين." },
                { t: "تنفيذ متكامل", d: "نغطي المسح والتصميم والتوريد والتركيب والإعداد والاختبار والتوثيق والدعم." },
                { t: "دعم المواقع المتعددة", d: "خبرة في تصميم شبكات تربط المقر والفروع والمواقع البعيدة." },
                { t: "تكامل مع الخدمات الأخرى", d: "ربط الشبكات بالسحابة و ERP والبرمجيات وأنظمة المراقبة والحضور." },
                { t: "توثيق واضح", d: "تسليم مخططات ومعلومات المنافذ والكابلات والإعدادات وفق نطاق المشروع." },
                { t: "تشغيل وصيانة", d: "متابعة الشبكة ومعالجة الأعطال وتنفيذ التحسينات وفق الاتفاق." },
                { t: "نقطة مسؤولية واحدة", d: "إدارة مكونات المشروع والتنسيق بين فرق الشبكات والبنية التحتية والأنظمة." },
              ]
            : [
                { t: "Extensive practical experience", d: "ARABTEC has expertise in LAN, WAN, fiber optics, WiMax, VSAT, Point-to-Point, VoIP and structured cabling." },
                { t: "Understanding enterprise architecture", d: "We link network design to the needs of systems, servers, branches and users." },
                { t: "Integrated delivery", d: "We cover survey, design, supply, installation, configuration, testing, documentation and support." },
                { t: "Multi-site support", d: "Experience designing networks connecting HQ, branches and remote sites." },
                { t: "Integration with other services", d: "Connecting networks with cloud, ERP, software, surveillance and attendance systems." },
                { t: "Clear documentation", d: "Delivering diagrams and information on ports, cables and configurations per project scope." },
                { t: "Operations & maintenance", d: "Monitoring the network, handling faults and improving per agreement." },
                { t: "Single point of accountability", d: "Managing project components and coordinating networks, infrastructure and systems teams." },
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
          18. خدمات مرتبطة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "خدمات تكمل حلول الشبكات والاتصال"
            : "Services complementing networks & connectivity solutions"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {[
            { ar: "السحابة والبنية التحتية", en: "Cloud & infrastructure", descAr: "ربط المستخدمين والفروع بالخوادم ومراكز البيانات والأنظمة السحابية.", descEn: "Connecting users and branches to servers, data centers and cloud systems.", link: "cloud-infrastructure" },
            { ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software development & system integration", descAr: "ربط التطبيقات والبوابات وقواعد البيانات عبر الشبكة المؤسسية.", descEn: "Connecting applications, portals and databases through the enterprise network.", link: "software-development" },
            { ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & business applications", descAr: "توفير الاتصال بين المستخدمين والفروع ونظام ERP المركزي.", descEn: "Providing connectivity between users, branches and the central ERP.", link: "erp-business-applications" },
            { ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI & AI Agents solutions", descAr: "ربط المستخدمين والأنظمة ومصادر البيانات بحلول الذكاء الاصطناعي.", descEn: "Connecting users, systems and data sources with AI solutions.", link: "ai-agents" },
            { ar: "أنظمة المراقبة والحضور والتحكم بالدخول", en: "Surveillance, attendance & access control", descAr: "تصميم شبكة تدعم الكاميرات وأجهزة الحضور والتحكم بالدخول.", descEn: "Designing a network supporting cameras, attendance and access control devices.", link: "surveillance-access-control" },
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
        <div className="relative container-page py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground/85">
            {isAr
              ? "هل تحتاج مؤسستكم إلى شبكة جديدة أو ربط عدة مواقع؟"
              : "Does your organization need a new network or multi-site connectivity?"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
            {isAr
              ? "شاركوا فريق أربتك بعدد المواقع والمستخدمين والأنظمة والتحديات الحالية، وسنعمل معكم على تقييم الاحتياج وتصميم حل شبكات واتصال يتناسب مع بيئة المؤسسة ومتطلبات التوسع والتشغيل."
              : "Share your sites, users, systems and current challenges with the ARABTEC team — we'll work with you to assess the need and design a network and connectivity solution fitting your environment, scaling and operations."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {isAr ? "اطلب استشارة للشبكات" : "Request a network consultation"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
            >
              {isAr ? "اطلب تقييمًا للشبكة" : "Request a network assessment"}
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
          20. FAQ
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن الشبكات والاتصال"
            : "Frequently asked questions about networks & connectivity"}
        />

        <FAQ
          items={[
            {
              q: { ar: "ما الخدمات التي تقدمها أربتك في مجال الشبكات؟", en: "What network services does ARABTEC provide?" },
              a: {
                ar: "تقدم أربتك تصميم وتنفيذ شبكات LAN و WAN، ربط الفروع، الألياف الضوئية، الكابلات الهيكلية، Wi-Fi، Point-to-Point، VSAT، WiMax، VoIP والتشغيل والصيانة.",
                en: "ARABTEC provides design and delivery of LAN & WAN networks, branch connectivity, fiber optics, structured cabling, Wi-Fi, Point-to-Point, VSAT, WiMax, VoIP, operations and maintenance.",
              },
            },
            {
              q: { ar: "ما الفرق بين LAN و WAN؟", en: "What's the difference between LAN and WAN?" },
              a: {
                ar: "تربط LAN المستخدمين والأجهزة داخل الموقع الواحد، بينما تربط WAN الفروع والمواقع المختلفة ضمن شبكة واسعة.",
                en: "LAN connects users and devices within a single site, while WAN connects branches and different sites over a wide area network.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك خدمات ربط الفروع؟", en: "Does ARABTEC provide branch connectivity?" },
              a: {
                ar: "نعم، يمكن تصميم ربط بين المقر والفروع والمواقع البعيدة وفق التطبيقات وعدد المستخدمين ووسائل الاتصال المتاحة.",
                en: "Yes — connectivity between HQ, branches and remote sites can be designed based on applications, users and available connectivity methods.",
              },
            },
            {
              q: { ar: "هل تنفذ أربتك الألياف الضوئية؟", en: "Does ARABTEC deliver fiber optics?" },
              a: {
                ar: "نعم، تشمل الخدمات تمديد ولحام واختبار الألياف الضوئية وتركيب الملحقات وإعداد التقارير.",
                en: "Yes — services include laying, splicing, testing fiber optics, installing accessories and preparing reports.",
              },
            },
            {
              q: { ar: "هل تشمل الخدمة اختبار OTDR؟", en: "Does the service include OTDR testing?" },
              a: {
                ar: "يمكن أن تشمل خدمة الألياف الضوئية اختبار OTDR و Power Meter وفق نطاق المشروع.",
                en: "The fiber service can include OTDR and Power Meter testing per project scope.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك Structured Cabling؟", en: "Does ARABTEC provide Structured Cabling?" },
              a: {
                ar: "نعم، تشمل الخدمات تمديد وإنهاء واختبار الكابلات وتركيب المخارج والرفوف واللوحات وترقيم النقاط.",
                en: "Yes — services include cable laying, termination, testing, installing outlets, racks, panels and outlet labeling.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلول Wi-Fi للمؤسسات؟", en: "Does ARABTEC provide Wi-Fi for enterprises?" },
              a: {
                ar: "نعم، يمكن دراسة الموقع وتوزيع نقاط الوصول وإعداد شبكات الموظفين والزوار واختبار التغطية والأداء.",
                en: "Yes — site survey, access point distribution, employee and guest networks setup, and coverage and performance testing.",
              },
            },
            {
              q: { ar: "هل يمكن ربط مواقع بعيدة؟", en: "Can remote sites be connected?" },
              a: {
                ar: "يمكن استخدام وسائل مثل Point-to-Point أو VSAT أو وسائل اتصال أخرى وفق الموقع والتغطية والجدوى الفنية.",
                en: "Methods like Point-to-Point, VSAT or other connectivity options can be used based on location, coverage and technical feasibility.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلول VoIP؟", en: "Does ARABTEC provide VoIP solutions?" },
              a: {
                ar: "نعم، يمكن تصميم وتنفيذ أنظمة اتصال صوتي عبر الشبكة وربط المستخدمين والفروع.",
                en: "Yes — voice communication systems can be designed and delivered over the network, connecting users and branches.",
              },
            },
            {
              q: { ar: "هل يمكن ربط الكاميرات بالشبكة؟", en: "Can cameras be connected to the network?" },
              a: {
                ar: "نعم، يمكن تصميم شبكة تدعم كاميرات IP وأجهزة التسجيل والإدارة المركزية وفق متطلبات المشروع.",
                en: "Yes — a network supporting IP cameras, recording devices and central management can be designed per project requirements.",
              },
            },
            {
              q: { ar: "هل يمكن ربط أنظمة الحضور بالشبكة؟", en: "Can attendance systems be connected to the network?" },
              a: {
                ar: "نعم، يمكن ربط أجهزة الحضور والانصراف وأنظمة التحكم بالدخول بالشبكة والأنظمة الإدارية.",
                en: "Yes — attendance devices and access control systems can be connected to the network and admin systems.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك خدمات تشغيل وصيانة الشبكات؟", en: "Does ARABTEC provide network operations & maintenance?" },
              a: {
                ar: "نعم، يمكن تقديم المراقبة ومعالجة الأعطال والتحديثات والتقارير والصيانة وفق اتفاقية الخدمة.",
                en: "Yes — monitoring, fault handling, updates, reporting and maintenance can be provided per the service agreement.",
              },
            },
            {
              q: { ar: "هل يمكن تحديث شبكة قائمة؟", en: "Can an existing network be modernized?" },
              a: {
                ar: "نعم، تبدأ الخدمة بتقييم الشبكة الحالية وتحديد نقاط الضعف ثم إعداد خطة تحديث مرحلية.",
                en: "Yes — the service starts by assessing the current network and identifying weaknesses, then preparing a phased modernization plan.",
              },
            },
            {
              q: { ar: "كم يستغرق تنفيذ مشروع شبكة؟", en: "How long does a network project take?" },
              a: {
                ar: "تعتمد المدة على عدد المواقع والمستخدمين والكابلات والألياف والمعدات ونطاق الربط والاختبارات المطلوبة.",
                en: "Duration depends on sites, users, cables, fiber, equipment, connectivity scope and required testing.",
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
                name: "ما الخدمات التي تقدمها أربتك في مجال الشبكات؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تقدم أربتك تصميم وتنفيذ شبكات LAN و WAN، ربط الفروع، الألياف الضوئية، الكابلات الهيكلية، Wi-Fi، Point-to-Point، VSAT، WiMax، VoIP والتشغيل والصيانة.",
                },
              },
              {
                "@type": "Question",
                name: "ما الفرق بين LAN و WAN؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تربط LAN المستخدمين والأجهزة داخل الموقع الواحد، بينما تربط WAN الفروع والمواقع المختلفة ضمن شبكة واسعة.",
                },
              },
              {
                "@type": "Question",
                name: "هل تقدم أربتك خدمات ربط الفروع؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن تصميم ربط بين المقر والفروع والمواقع البعيدة وفق التطبيقات وعدد المستخدمين ووسائل الاتصال المتاحة.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}