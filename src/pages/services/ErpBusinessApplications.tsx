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
  DollarSign,
  Users,
  ShoppingCart,
  Package,
  TrendingUp,
  Boxes,
  Briefcase,
  Workflow,
  BarChart3,
  Landmark,
  Building2,
  CheckCircle2,
  Database,
  Plug,
  ShieldCheck,
  AlertCircle,
  Layers,
} from "lucide-react";

// الصور
import heroImg from "@/assets/enterprise-erp-business-management.webp";
import govErpImg from "@/assets/government-erp-solutions.webp";
import integrationImg from "@/assets/erp-system-integration.jpg";
import migrationImg from "@/assets/erp-data-migration.jpg";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

const moduleIcons = [
  DollarSign,   // المالية
  Users,        // الموارد البشرية
  ShoppingCart, // المشتريات
  Package,      // المخزون
  TrendingUp,   // المبيعات
  Boxes,        // الأصول والصيانة
  Briefcase,    // المشاريع
  Workflow,     // الموافقات
  BarChart3,    // التقارير
];

export default function ErpBusinessApplicationsPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";
  const s = getService("erp-business-applications");
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
                  ? "نظام ERP متكامل لإدارة عمليات وموارد المؤسسة"
                  : "Integrated ERP system for managing enterprise operations and resources"
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
              {isAr ? "حلول إدارة موارد المؤسسات" : "Enterprise resource management solutions"}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "أنظمة ERP وتطبيقات الأعمال لإدارة مؤسسة أكثر تكاملًا وكفاءة"
                : "ERP & business applications for a more integrated and efficient enterprise"}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isAr
                ? "تساعد أربتك الجهات الحكومية والمؤسسات والشركات على توحيد عملياتها وبياناتها من خلال أنظمة ERP وتطبيقات أعمال مؤسسية تربط الإدارات المالية والإدارية والتشغيلية ضمن منصة مركزية واحدة."
                : "ARABTEC helps government entities, organizations and companies unify their operations and data through ERP and enterprise business applications connecting financial, administrative and operational departments in one central platform."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "نقدم خدمات دراسة المتطلبات، تصميم الحل، تخصيص الوحدات، تطوير الوظائف، تكامل الأنظمة، ترحيل البيانات، الاختبار، تدريب المستخدمين ودعم الإطلاق، بما يتوافق مع طبيعة عمليات المؤسسة وأهدافها التشغيلية."
                : "We provide requirements study, solution design, module customization, function development, system integration, data migration, testing, user training and go-live support — aligned with the organization's operations and operational objectives."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تهدف حلول ERP إلى تقليل الاعتماد على العمليات اليدوية والأنظمة المنفصلة، وتحسين دقة البيانات، تسريع الموافقات، رفع كفاءة العمل وتوفير رؤية أوضح لصناع القرار."
                : "ERP solutions aim to reduce reliance on manual processes and disconnected systems, improve data accuracy, accelerate approvals, raise work efficiency and give decision-makers clearer visibility."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">
                {isAr ? "اطلب استشارة ERP" : "Request an ERP consultation"}
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                {isAr ? "اطلب عرضًا توضيحيًا" : "Request a demo"}
              </CTAButton>
            </div>

            {/* شريط مختصر */}
            <div className="mt-8 flex flex-wrap gap-2">
              {(isAr
                ? ["الإدارة المالية", "الموارد البشرية", "المشتريات", "المخزون", "الأصول", "إدارة المشاريع", "التقارير", "تكامل الأنظمة"]
                : ["Finance", "HR", "Procurement", "Inventory", "Assets", "Projects", "Reports", "Integration"]
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
          2. ما هو نظام ERP؟
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "ما هو نظام ERP لإدارة موارد المؤسسة؟"
            : "What is an ERP system for enterprise resource management?"}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "نظام ERP هو منصة مؤسسية توحد البيانات والإجراءات بين إدارات المؤسسة، وتساعد على إدارة الموارد المالية والبشرية والتشغيلية من خلال قاعدة بيانات مركزية وسير عمل مترابط."
                : "An ERP system is an enterprise platform that unifies data and procedures across the organization's departments, helping manage financial, human and operational resources through a central database and interconnected workflow."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "بدلًا من تشغيل كل إدارة على ملفات أو أنظمة منفصلة، يتيح نظام ERP مشاركة المعلومات بين الإدارات بصورة منظمة، وتقليل تكرار إدخال البيانات، وتحسين دقة التقارير ومتابعة العمليات والموافقات."
                : "Instead of each department running on separate files or systems, an ERP enables structured information sharing, reduces duplicate data entry, and improves report accuracy and tracking of processes and approvals."}
            </p>
          </div>

          {/* جدول المقارنة */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold text-lg mb-4">
              {isAr
                ? "الفرق بين الأنظمة المنفصلة ونظام ERP"
                : "Difference between separate systems and ERP"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-start py-2 font-semibold text-muted-foreground">
                      {isAr ? "الأنظمة المنفصلة" : "Separate systems"}
                    </th>
                    <th className="text-start py-2 font-semibold text-[color:var(--brand-deep)]">
                      {isAr ? "نظام ERP متكامل" : "Integrated ERP"}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {(isAr
                    ? [
                        ["بيانات موزعة بين عدة أنظمة وملفات", "قاعدة بيانات مركزية"],
                        ["تكرار إدخال المعلومات", "إدخال موحد للبيانات"],
                        ["صعوبة إعداد التقارير", "تقارير موحدة ومحدثة"],
                        ["موافقات يدوية وبطيئة", "مسارات عمل وموافقات إلكترونية"],
                        ["محدودية الربط بين الإدارات", "تكامل بين المالية والموارد والتشغيل"],
                        ["صعوبة تتبع المسؤوليات", "صلاحيات وسجلات واضحة"],
                      ]
                    : [
                        ["Data scattered across systems and files", "Centralized database"],
                        ["Duplicate data entry", "Unified data entry"],
                        ["Difficult reporting", "Unified, up-to-date reports"],
                        ["Manual, slow approvals", "Electronic workflows & approvals"],
                        ["Limited inter-department linkage", "Finance, HR & operations integration"],
                        ["Hard to track responsibilities", "Clear permissions & logs"],
                      ]
                  ).map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2.5 pe-4">{row[0]}</td>
                      <td className="py-2.5 font-medium text-foreground">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* مخطط: إدارات منفصلة ← ERP مركزي ← بيانات موحدة */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 overflow-x-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium min-w-max">
            {(isAr
              ? ["إدارات منفصلة", "ERP مركزي", "بيانات وتقارير موحدة"]
              : ["Separate departments", "Central ERP", "Unified data & reports"]
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
          3. وحدات نظام ERP — 9 وحدات
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "وحدات ERP تغطي العمليات الأساسية للمؤسسة"
            : "ERP modules covering the organization's core operations"}
          intro={
            isAr
              ? "يمكن تنفيذ الوحدات وفق احتياجات المؤسسة، سواء ضمن مشروع متكامل أو على مراحل متتابعة، مع إمكانية تخصيص الإجراءات والنماذج والصلاحيات والتقارير."
              : "Modules can be implemented based on the organization's needs — either within a comprehensive project or in successive phases — with customization of procedures, forms, permissions and reports."}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              icon: DollarSign,
              hAr: "الإدارة المالية والمحاسبة",
              hEn: "Finance & Accounting",
              descAr: "منصة لإدارة البيانات المالية والمعاملات والتقارير ضمن نظام مركزي يساعد الإدارة على متابعة الأداء المالي واتخاذ القرار.",
              descEn: "A platform for managing financial data, transactions and reports in a central system that supports financial performance monitoring and decision-making.",
              itemsAr: ["دليل الحسابات", "القيود اليومية", "الحسابات الدائنة والمدينة", "الإيرادات والمصروفات", "مراكز التكلفة", "الميزانيات", "التسويات المالية", "إدارة النقد والبنوك", "الفواتير والمدفوعات", "التقارير المالية"],
              itemsEn: ["Chart of accounts", "Journal entries", "AP & AR", "Revenues & expenses", "Cost centers", "Budgets", "Financial adjustments", "Cash & bank management", "Invoices & payments", "Financial reports"],
            },
            {
              icon: Users,
              hAr: "الموارد البشرية والرواتب",
              hEn: "HR & Payroll",
              descAr: "نظام لإدارة دورة حياة الموظف، الحضور، الإجازات، الرواتب، التقييمات والإجراءات الإدارية.",
              descEn: "A system for managing employee lifecycle, attendance, leave, payroll, evaluations and administrative procedures.",
              itemsAr: ["ملفات الموظفين", "الهيكل التنظيمي", "التوظيف", "العقود", "الحضور والانصراف", "الإجازات", "الرواتب والبدلات", "التقييمات", "التدريب", "الخدمة الذاتية للموظف", "الخدمة الذاتية للمدير"],
              itemsEn: ["Employee files", "Org structure", "Recruitment", "Contracts", "Attendance", "Leave", "Payroll & allowances", "Evaluations", "Training", "Employee self-service", "Manager self-service"],
            },
            {
              icon: ShoppingCart,
              hAr: "المشتريات وإدارة الموردين",
              hEn: "Procurement & Vendor Management",
              descAr: "إدارة دورة الشراء من الطلب الداخلي حتى الاستلام والفاتورة والدفع.",
              descEn: "Managing the procurement cycle from internal request to receipt, invoice and payment.",
              itemsAr: ["طلبات الشراء", "الموافقات", "طلبات عروض الأسعار", "مقارنة العروض", "أوامر الشراء", "إدارة الموردين", "عقود الموردين", "استلام المواد", "مطابقة الفواتير", "تقييم الموردين"],
              itemsEn: ["Purchase requests", "Approvals", "RFQs", "Quote comparison", "Purchase orders", "Vendor management", "Vendor contracts", "Goods receipt", "Invoice matching", "Vendor evaluation"],
            },
            {
              icon: Package,
              hAr: "المخزون والمستودعات",
              hEn: "Inventory & Warehouses",
              descAr: "متابعة حركة الأصناف والمخزون والمستودعات بصورة دقيقة ومحدثة.",
              descEn: "Tracking item movement, inventory and warehouses with accuracy and up-to-date data.",
              itemsAr: ["تعريف الأصناف", "إدارة المستودعات", "الاستلام والصرف", "التحويلات", "الجرد", "نقاط إعادة الطلب", "تتبع الكميات", "تقييم المخزون", "الباركود و RFID عند الحاجة", "تقارير حركة المخزون"],
              itemsEn: ["Item definitions", "Warehouse management", "Receiving & issuing", "Transfers", "Stock counting", "Reorder points", "Quantity tracking", "Inventory valuation", "Barcode & RFID if needed", "Stock movement reports"],
            },
            {
              icon: TrendingUp,
              hAr: "المبيعات وإدارة العملاء",
              hEn: "Sales & CRM",
              descAr: "إدارة دورة المبيعات والعروض والعقود والفواتير وعلاقات العملاء.",
              descEn: "Managing the sales cycle, quotations, contracts, invoices and customer relationships.",
              itemsAr: ["بيانات العملاء", "الفرص البيعية", "عروض الأسعار", "أوامر البيع", "العقود", "الفواتير", "التحصيل", "الخصومات", "متابعة العملاء", "تقارير المبيعات"],
              itemsEn: ["Customer data", "Sales leads", "Quotations", "Sales orders", "Contracts", "Invoices", "Collections", "Discounts", "Customer follow-up", "Sales reports"],
            },
            {
              icon: Boxes,
              hAr: "إدارة الأصول والصيانة",
              hEn: "Asset & Maintenance Management",
              descAr: "متابعة أصول المؤسسة ومواقعها وحالتها وتكاليفها وبرامج صيانتها.",
              descEn: "Tracking the organization's assets, locations, condition, costs and maintenance programs.",
              itemsAr: ["سجل الأصول", "تصنيف الأصول", "مواقع الأصول", "الاستهلاك", "نقل الأصول", "الجرد", "خطط الصيانة", "طلبات الصيانة", "تكاليف الصيانة", "التخلص من الأصل"],
              itemsEn: ["Asset register", "Asset classification", "Asset locations", "Depreciation", "Asset transfers", "Asset count", "Maintenance plans", "Maintenance requests", "Maintenance costs", "Asset disposal"],
            },
            {
              icon: Briefcase,
              hAr: "إدارة المشاريع",
              hEn: "Project Management",
              descAr: "إدارة المشاريع والميزانيات والموارد والمهام والتكاليف ومراحل التنفيذ.",
              descEn: "Managing projects, budgets, resources, tasks, costs and delivery phases.",
              itemsAr: ["خطط المشاريع", "المهام والمراحل", "الميزانيات", "الموارد", "الجداول الزمنية", "ساعات العمل", "التكاليف", "المشتريات المرتبطة", "المستخلصات", "تقارير تقدم المشروع"],
              itemsEn: ["Project plans", "Tasks & phases", "Budgets", "Resources", "Timelines", "Work hours", "Costs", "Related procurement", "Progress claims", "Project progress reports"],
            },
            {
              icon: Workflow,
              hAr: "الموافقات وسير العمل",
              hEn: "Approvals & Workflow",
              descAr: "تحويل الإجراءات الورقية أو اليدوية إلى مسارات موافقات إلكترونية واضحة.",
              descEn: "Turning paper or manual procedures into clear electronic approval workflows.",
              itemsAr: ["تصميم مسارات الموافقة", "تحديد مستويات الصلاحيات", "التنبيهات والإشعارات", "التصعيد الآلي", "تفويض الصلاحيات", "متابعة حالة الطلب", "سجل الإجراءات", "قياس زمن الإنجاز"],
              itemsEn: ["Approval workflow design", "Permission levels", "Alerts & notifications", "Auto escalation", "Permission delegation", "Request status tracking", "Action log", "Completion time measurement"],
            },
            {
              icon: BarChart3,
              hAr: "التقارير ولوحات المعلومات",
              hEn: "Reports & Dashboards",
              descAr: "عرض البيانات التشغيلية والمالية في تقارير ولوحات تساعد الإدارة على المتابعة واتخاذ القرار.",
              descEn: "Displaying operational and financial data in reports and dashboards that help management track and decide.",
              itemsAr: ["لوحات أداء تنفيذية", "تقارير مالية", "تقارير الموارد البشرية", "تقارير المخزون", "تقارير المشتريات", "تقارير المبيعات", "تقارير المشاريع", "مؤشرات الأداء", "تصدير البيانات", "تقارير مخصصة"],
              itemsEn: ["Executive dashboards", "Financial reports", "HR reports", "Inventory reports", "Procurement reports", "Sales reports", "Project reports", "KPIs", "Data export", "Custom reports"],
            },
          ].map((mod) => {
            const Icon = mod.icon;
            return (
              <Card key={mod.hEn}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">{isAr ? mod.hAr : mod.hEn}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? mod.descAr : mod.descEn}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {(isAr ? mod.itemsAr : mod.itemsEn).map((x) => (
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
          4. ERP للجهات الحكومية
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img
            src={govErpImg}
            alt={isAr
              ? "نظام ERP لإدارة الموارد والعمليات في الجهات الحكومية"
              : "ERP system for managing resources and operations in government entities"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-deep)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-deep)] mb-3">
              <Landmark className="h-3.5 w-3.5" />
              {isAr ? "للجهات الحكومية" : "For government entities"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "أنظمة ERP تدعم الإدارة الحكومية المتكاملة"
                : "ERP systems supporting integrated government management"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "يمكن تصميم حلول ERP للجهات الحكومية بهدف توحيد البيانات والإجراءات، أتمتة الموافقات، تعزيز الرقابة الإدارية والمالية، وتحسين القدرة على متابعة الموارد والمشاريع والأصول."
                : "ERP solutions for government entities can be designed to unify data and procedures, automate approvals, strengthen administrative and financial control, and improve the ability to track resources, projects and assets."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "يراعى في تصميم الحل الهيكل التنظيمي، تعدد الإدارات والفروع، مستويات الصلاحيات، مسارات الاعتماد، التكامل مع الأنظمة الحكومية ومتطلبات التقارير."
                : "The solution considers the organizational structure, multiple departments and branches, permission levels, approval paths, integration with government systems and reporting requirements."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "حالات الاستخدام الحكومية" : "Government use cases"}
            </h3>

            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "الإدارة المالية والميزانية", d: "إدارة البنود والميزانيات والمصروفات والالتزامات والتقارير المالية." },
                    { t: "إدارة الموارد البشرية", d: "توحيد بيانات الموظفين والإجازات والحضور والرواتب والخدمات الذاتية." },
                    { t: "المشتريات والعقود", d: "إدارة الطلبات والموافقات والموردين والعقود وأوامر الشراء." },
                    { t: "إدارة الأصول الحكومية", d: "تسجيل الأصول والمواقع والحالة والصيانة والجرد." },
                    { t: "إدارة المشاريع والمبادرات", d: "متابعة الخطط والميزانيات والإنجاز والتكاليف ومؤشرات الأداء." },
                    { t: "التقارير والرقابة", d: "توفير تقارير موحدة وسجلات إجراءات تساعد الإدارات والقيادات على المتابعة." },
                  ]
                : [
                    { t: "Financial & budget management", d: "Managing items, budgets, expenses, commitments and financial reports." },
                    { t: "HR management", d: "Unifying employee data, leave, attendance, payroll and self-services." },
                    { t: "Procurement & contracts", d: "Managing requests, approvals, vendors, contracts and purchase orders." },
                    { t: "Government asset management", d: "Recording assets, locations, condition, maintenance and counting." },
                    { t: "Projects & initiatives management", d: "Tracking plans, budgets, delivery, costs and KPIs." },
                    { t: "Reporting & control", d: "Providing unified reports and action logs that help departments and leadership track." },
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
          5. تطبيقات الأعمال المؤسسية
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "تطبيقات أعمال مكملة لنظام ERP"
            : "Business applications complementing the ERP"}
          intro={
            isAr
              ? "قد تحتاج المؤسسة إلى تطبيقات أو بوابات متخصصة تعمل بجانب نظام ERP أو تتكامل معه لتغطية إجراءات لا يوفرها النظام الأساسي بصورة كاملة. تطور أربتك تطبيقات أعمال مخصصة وفق احتياجات المؤسسة، مع ربطها بوحدات ERP والأنظمة الداخلية والخارجية."
              : "The organization may need specialized applications or portals alongside the ERP or integrated with it to cover procedures the core system doesn't fully provide. ARABTEC develops custom business applications based on the organization's needs, connected to ERP modules and internal/external systems."}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { icon: Users, hAr: "بوابة الموظفين", hEn: "Employee portal", dAr: "طلبات الإجازة، الخدمات الذاتية، الاطلاع على البيانات والرواتب والموافقات.", dEn: "Leave requests, self-services, viewing data, payroll and approvals." },
            { icon: ShoppingCart, hAr: "بوابة الموردين", hEn: "Vendor portal", dAr: "التسجيل، تحديث البيانات، تقديم العروض، متابعة أوامر الشراء والفواتير.", dEn: "Registration, data updates, submitting quotes, tracking purchase orders and invoices." },
            { icon: Building2, hAr: "بوابة العملاء", hEn: "Customer portal", dAr: "إدارة الخدمات والطلبات والعقود والفواتير والتواصل.", dEn: "Managing services, requests, contracts, invoices and communication." },
            { icon: Workflow, hAr: "تطبيقات الموافقات", hEn: "Approval apps", dAr: "اعتماد الطلبات والمعاملات من الويب أو الهاتف.", dEn: "Approving requests and transactions from web or mobile." },
            { icon: Briefcase, hAr: "تطبيقات العمليات الميدانية", hEn: "Field operations apps", dAr: "تسجيل الزيارات والمهام والصيانة والمخزون من المواقع.", dEn: "Recording visits, tasks, maintenance and inventory from sites." },
            { icon: Layers, hAr: "أنظمة إدارة الوثائق", hEn: "Document management", dAr: "حفظ وتصنيف وربط المستندات بالمعاملات والعمليات.", dEn: "Storing, classifying and linking documents to transactions and operations." },
            { icon: BarChart3, hAr: "لوحات الإدارة التنفيذية", hEn: "Executive dashboards", dAr: "عرض مؤشرات الأداء والبيانات من ERP والأنظمة الأخرى.", dEn: "Displaying KPIs and data from ERP and other systems." },
          ].map((c) => {
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

        <div className="mt-8">
          <CTAButton to="/services/software-development" variant="outline">
            {isAr
              ? "استكشف تطوير البرمجيات وتكامل الأنظمة"
              : "Explore software development & system integration"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          6. تخصيص نظام ERP
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "نظام ERP مصمم وفق عمليات المؤسسة"
            : "ERP designed around the organization's processes"}
          intro={
            isAr
              ? "لا تتطابق إجراءات جميع المؤسسات. لذلك تشمل خدمات أربتك دراسة العمليات الحالية، مواءمة النظام، تخصيص النماذج، إعداد الصلاحيات، تطوير الوظائف والتقارير المطلوبة."
              : "Not all organizations have identical procedures. ARABTEC's services therefore include studying current processes, aligning the system, customizing forms, configuring permissions, and developing required functions and reports."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? ["النماذج والحقول", "مسارات العمل", "الموافقات", "الصلاحيات", "الهيكل التنظيمي", "قواعد العمل", "التقارير", "الإشعارات", "الواجهات", "اللغة العربية والإنجليزية", "الوحدات الإضافية", "التكاملات"]
            : ["Forms & fields", "Workflows", "Approvals", "Permissions", "Org structure", "Business rules", "Reports", "Notifications", "Interfaces", "Arabic & English", "Additional modules", "Integrations"]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-3xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isAr
                ? "يتم تقييم كل طلب تخصيص للتأكد من ضرورته وتأثيره على سهولة الصيانة والتحديث والتوسع مستقبلًا."
                : "Every customization request is evaluated for necessity and its impact on maintainability, updates and future expansion."}
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          7. تكامل ERP مع الأنظمة
          ============================================================ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "تكامل ERP مع البيئة التقنية للمؤسسة"
                : "ERP integration with the enterprise technology environment"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تزداد قيمة نظام ERP عند ربطه بالأنظمة والخدمات الأخرى، بحيث تنتقل البيانات بصورة منظمة وتقل الحاجة إلى الإدخال اليدوي المتكرر."
                : "The value of an ERP increases when connected to other systems and services — data moves in an organized way and the need for repeated manual entry decreases."}
            </p>

            <div className="grid gap-4 mt-6">
              {(isAr
                ? [
                    { icon: Users, t: "أنظمة الحضور والانصراف", d: "نقل بيانات الحضور والإجازات إلى نظام الموارد البشرية والرواتب." },
                    { icon: Landmark, t: "الأنظمة البنكية والمالية", d: "تبادل بيانات الدفعات والتسويات والحسابات وفق وسائل التكامل المتاحة." },
                    { icon: TrendingUp, t: "أنظمة CRM", d: "ربط بيانات العملاء والمبيعات والعقود والفواتير." },
                    { icon: ShoppingCart, t: "التجارة الإلكترونية", d: "ربط الطلبات والعملاء والمدفوعات والمخزون." },
                    { icon: Layers, t: "أنظمة إدارة الوثائق", d: "ربط الملفات والمستندات بالمعاملات والموظفين والموردين." },
                    { icon: Building2, t: "بوابات الخدمات", d: "ربط طلبات المستخدمين والمعاملات بالأنظمة الخلفية." },
                    { icon: Plug, t: "أنظمة الذكاء الاصطناعي", d: "تمكين AI Agents من الوصول إلى بيانات ووظائف محددة وفق الصلاحيات." },
                    { icon: Plug, t: "واجهات API", d: "ربط الأنظمة الداخلية والخارجية من خلال واجهات تكامل منظمة." },
                  ]
                : [
                    { icon: Users, t: "Attendance systems", d: "Transferring attendance and leave data to HR and payroll." },
                    { icon: Landmark, t: "Banking & financial systems", d: "Exchanging payment, reconciliation and account data through available integration methods." },
                    { icon: TrendingUp, t: "CRM systems", d: "Connecting customer, sales, contract and invoice data." },
                    { icon: ShoppingCart, t: "E-commerce", d: "Connecting orders, customers, payments and inventory." },
                    { icon: Layers, t: "Document management systems", d: "Connecting files and documents to transactions, employees and vendors." },
                    { icon: Building2, t: "Service portals", d: "Connecting user requests and transactions to back-end systems." },
                    { icon: Plug, t: "AI systems", d: "Enabling AI Agents to access specific data and functions within permissions." },
                    { icon: Plug, t: "APIs", d: "Connecting internal and external systems through structured integration interfaces." },
                  ]
              ).map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.t} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{row.t}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{row.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <img
            src={integrationImg}
            alt={isAr
              ? "تكامل نظام ERP مع الأنظمة والتطبيقات المؤسسية"
              : "ERP system integration with enterprise systems and applications"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* المخطط المعماري */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 overflow-x-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium min-w-max">
            {(isAr
              ? ["المستخدمون والتطبيقات", "طبقة التكامل", "ERP", "المالية / الموارد البشرية / المشتريات / المخزون / المشاريع"]
              : ["Users & applications", "Integration layer", "ERP", "Finance / HR / Procurement / Inventory / Projects"]
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
          8. ترحيل البيانات
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img
            src={migrationImg}
            alt={isAr
              ? "ترحيل وتنظيف البيانات من الأنظمة القديمة إلى نظام ERP"
              : "Data migration and cleanup from legacy systems to ERP"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover order-2 lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr
                ? "ترحيل البيانات من الأنظمة القديمة إلى ERP"
                : "Data migration from legacy systems to ERP"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "يعد ترحيل البيانات من المراحل الأساسية في مشروع ERP، ويشمل جمع البيانات وتنظيفها ومراجعتها وتحويلها واختبارها قبل نقلها إلى النظام الجديد."
                : "Data migration is one of the key phases in an ERP project — including collecting, cleaning, reviewing, converting and testing data before transferring it to the new system."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "مراحل ترحيل البيانات" : "Data migration phases"}
            </h3>

            <ol className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "حصر مصادر البيانات", d: "تحديد الأنظمة والملفات وقواعد البيانات الحالية." },
                    { t: "تحليل جودة البيانات", d: "اكتشاف البيانات المكررة أو الناقصة أو غير المتسقة." },
                    { t: "تنظيف وتوحيد البيانات", d: "توحيد الصيغ والتصنيفات والرموز والسجلات." },
                    { t: "إعداد خرائط التحويل", d: "تحديد كيفية انتقال كل حقل وسجل إلى النظام الجديد." },
                    { t: "الترحيل التجريبي", d: "تنفيذ عملية نقل تجريبية ومراجعة النتائج." },
                    { t: "التحقق والاعتماد", d: "مقارنة البيانات والتأكد من دقتها واكتمالها." },
                    { t: "الترحيل النهائي", d: "تنفيذ النقل النهائي وفق خطة الإطلاق المعتمدة." },
                  ]
                : [
                    { t: "Identifying data sources", d: "Identifying existing systems, files and databases." },
                    { t: "Data quality analysis", d: "Detecting duplicate, missing or inconsistent data." },
                    { t: "Cleaning & standardizing data", d: "Standardizing formats, classifications, codes and records." },
                    { t: "Mapping setup", d: "Defining how each field and record transfers to the new system." },
                    { t: "Test migration", d: "Running a trial migration and reviewing results." },
                    { t: "Verification & approval", d: "Comparing data and confirming accuracy and completeness." },
                    { t: "Final migration", d: "Performing the final migration per the approved go-live plan." },
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
            </ol>

            <div className="mt-6 rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>{isAr ? "ملاحظة: " : "Note: "}</strong>
                {isAr
                  ? "تعتمد جودة الترحيل على جودة البيانات المصدر وتعاون فرق المؤسسة في المراجعة والاعتماد."
                  : "Migration quality depends on source data quality and the organization's teams' cooperation in review and approval."}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          9. الاستضافة والبنية التقنية
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "خيارات تشغيل تناسب متطلبات المؤسسة"
            : "Operation options that fit the organization's requirements"}
          intro={
            isAr
              ? "يمكن تصميم بيئة تشغيل نظام ERP وفق احتياجات المؤسسة ومتطلبات الأداء والتوسع والتكامل والسياسات الداخلية."
              : "The ERP operating environment can be designed according to the organization's needs, performance, scalability, integration requirements and internal policies."}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { icon: Layers, hAr: "استضافة سحابية", hEn: "Cloud hosting", dAr: "تشغيل النظام ضمن بيئة سحابية قابلة للتوسع وفق متطلبات المشروع.", dEn: "Running the system in a scalable cloud environment per project requirements." },
            { icon: Database, hAr: "استضافة داخل المؤسسة", hEn: "On-premise hosting", dAr: "تشغيل النظام على خوادم المؤسسة عند توفر المتطلبات الفنية اللازمة.", dEn: "Running the system on the organization's servers when the required technical requirements are available." },
            { icon: Plug, hAr: "بيئة هجينة", hEn: "Hybrid environment", dAr: "الجمع بين خدمات داخلية وسحابية وفق طبيعة الأنظمة والبيانات.", dEn: "Combining on-premise and cloud services based on systems and data nature." },
            { icon: ShieldCheck, hAr: "النسخ الاحتياطي", hEn: "Backup", dAr: "إعداد سياسات النسخ الاحتياطي والاستعادة وفق نطاق المشروع.", dEn: "Setting backup and recovery policies per project scope." },
            { icon: CheckCircle2, hAr: "بيئات الاختبار والإنتاج", hEn: "Test & production environments", dAr: "فصل بيئات التطوير والاختبار والتدريب والتشغيل الفعلي.", dEn: "Separating development, testing, training and production environments." },
          ].map((c) => {
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

        <div className="mt-8">
          <CTAButton to="/services/cloud-infrastructure" variant="outline">
            {isAr ? "استكشف حلول السحابة والبنية التحتية" : "Explore cloud & infrastructure solutions"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          10. منهجية تنفيذ ERP — 10 مراحل
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "منهجية تنفيذ منظمة من التحليل إلى التشغيل"
            : "A structured implementation methodology from analysis to operations"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {(isAr
            ? [
                { t: "اكتشاف الاحتياج", d: "دراسة أهداف المؤسسة، الهيكل التنظيمي، العمليات والتحديات الحالية." },
                { t: "تحليل الإجراءات", d: "توثيق العمليات الحالية وتحديد فرص التحسين والأتمتة." },
                { t: "تصميم الحل", d: "تحديد الوحدات ومسارات العمل والصلاحيات والتقارير والتكاملات." },
                { t: "إعداد النظام", d: "تهيئة الوحدات والبيانات الأساسية والمستخدمين والصلاحيات." },
                { t: "التطوير والتخصيص", d: "تنفيذ الوظائف والتقارير والتكاملات المخصصة." },
                { t: "ترحيل البيانات", d: "تنظيف وتحويل واختبار ونقل البيانات من الأنظمة الحالية." },
                { t: "الاختبارات", d: "تنفيذ اختبارات الوظائف والتكامل والأداء وقبول المستخدم." },
                { t: "التدريب", d: "تدريب المستخدمين الرئيسيين والنهائيين وفرق الدعم." },
                { t: "الإطلاق", d: "تشغيل النظام وفق خطة انتقال معتمدة ومتابعة العمليات." },
                { t: "الدعم والتحسين", d: "دعم المستخدمين ومعالجة الملاحظات وتطوير النظام وفق الاحتياجات." },
              ]
            : [
                { t: "Requirement discovery", d: "Studying the organization's goals, structure, operations and current challenges." },
                { t: "Process analysis", d: "Documenting current processes and identifying improvement and automation opportunities." },
                { t: "Solution design", d: "Defining modules, workflows, permissions, reports and integrations." },
                { t: "System setup", d: "Configuring modules, base data, users and permissions." },
                { t: "Development & customization", d: "Building custom functions, reports and integrations." },
                { t: "Data migration", d: "Cleaning, converting, testing and transferring data from current systems." },
                { t: "Testing", d: "Running function, integration, performance and user acceptance tests." },
                { t: "Training", d: "Training key users, end users and support teams." },
                { t: "Go-live", d: "Operating the system per an approved transition plan, with process monitoring." },
                { t: "Support & improvement", d: "Supporting users, handling feedback and evolving the system as needed." },
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
          11. فوائد نظام ERP
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "كيف يدعم ERP كفاءة المؤسسة؟" : "How does ERP support enterprise efficiency?"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "توحيد البيانات", d: "تجميع معلومات الإدارات في قاعدة بيانات مركزية." },
                { t: "تحسين دقة المعلومات", d: "تقليل الإدخال المتكرر والأخطاء الناتجة عن الأنظمة المنفصلة." },
                { t: "تسريع الإجراءات", d: "أتمتة مسارات العمل والموافقات والإشعارات." },
                { t: "رؤية أفضل للأداء", d: "توفير تقارير ومؤشرات محدثة للإدارة والقيادات." },
                { t: "ضبط الصلاحيات", d: "تحديد مسؤوليات المستخدمين ومستويات الوصول." },
                { t: "تحسين الرقابة", d: "توفير سجل واضح للمعاملات والموافقات والتغييرات." },
                { t: "دعم النمو", d: "استخدام نظام قابل للتوسع مع زيادة العمليات والمستخدمين والفروع." },
                { t: "تحسين تجربة المستخدم", d: "توفير بوابات وخدمات ذاتية للموظفين والمديرين والعملاء والموردين." },
              ]
            : [
                { t: "Unified data", d: "Centralizing departmental information in one database." },
                { t: "Improved accuracy", d: "Reducing duplicate entry and errors from disconnected systems." },
                { t: "Faster procedures", d: "Automating workflows, approvals and notifications." },
                { t: "Better performance visibility", d: "Providing up-to-date reports and KPIs for management." },
                { t: "Permission control", d: "Defining user responsibilities and access levels." },
                { t: "Better control", d: "Providing a clear log of transactions, approvals and changes." },
                { t: "Growth support", d: "A scalable system as operations, users and branches grow." },
                { t: "Better UX", d: "Portals and self-services for employees, managers, customers and vendors." },
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
          12. القطاعات المستفيدة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr ? "حلول ERP قابلة للتخصيص حسب القطاع" : "ERP solutions customizable by sector"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { ar: "الجهات الحكومية", en: "Government entities", itemsAr: ["المالية والميزانية", "الموارد البشرية", "المشتريات والعقود", "الأصول", "المشاريع والمبادرات", "الموافقات والتقارير"], itemsEn: ["Finance & budget", "Human resources", "Procurement & contracts", "Assets", "Projects & initiatives", "Approvals & reports"] },
            { ar: "النفط والغاز", en: "Oil & gas", itemsAr: ["المشتريات", "المخزون", "الأصول", "الصيانة", "المشاريع", "المواقع والفروع"], itemsEn: ["Procurement", "Inventory", "Assets", "Maintenance", "Projects", "Sites & branches"] },
            { ar: "التعليم", en: "Education", itemsAr: ["المالية", "الموارد البشرية", "المشتريات", "الأصول", "المخزون", "الخدمات الإدارية"], itemsEn: ["Finance", "HR", "Procurement", "Assets", "Inventory", "Admin services"] },
            { ar: "الرعاية الصحية", en: "Healthcare", itemsAr: ["المالية", "المشتريات", "المخزون", "الموارد البشرية", "الأصول", "العمليات الإدارية"], itemsEn: ["Finance", "Procurement", "Inventory", "HR", "Assets", "Admin operations"] },
            { ar: "البنوك والخدمات المالية", en: "Banking & finance", itemsAr: ["المالية", "الموارد البشرية", "المشتريات", "الأصول", "الموافقات", "التقارير الإدارية"], itemsEn: ["Finance", "HR", "Procurement", "Assets", "Approvals", "Admin reporting"] },
            { ar: "الشركات والمؤسسات", en: "Enterprises", itemsAr: ["المحاسبة", "المبيعات", "المشتريات", "المخزون", "الموارد البشرية", "إدارة المشاريع"], itemsEn: ["Accounting", "Sales", "Procurement", "Inventory", "HR", "Project management"] },
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

        <div className="mt-8">
          <CTAButton to="/industries" variant="outline">
            {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          13. لماذا أربتك؟
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "لماذا تختار المؤسسات أربتك لتنفيذ ERP؟"
            : "Why organizations choose ARABTEC for ERP implementation"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "فهم الأعمال والعمليات", d: "نبدأ بتحليل إجراءات المؤسسة وأهدافها قبل إعداد النظام." },
                { t: "خبرة في البرمجيات والتكامل", d: "نجمع بين تنفيذ ERP وتطوير الأنظمة المخصصة وواجهات API." },
                { t: "تخصيص مدروس", d: "نخصص النظام وفق الاحتياجات الفعلية مع مراعاة سهولة الصيانة والتوسع." },
                { t: "ترحيل بيانات منظم", d: "نتعامل مع البيانات باعتبارها جزءًا أساسيًا من نجاح المشروع." },
                { t: "تدريب ودعم المستخدمين", d: "نساعد فرق المؤسسة على تبني النظام واستخدامه بصورة صحيحة." },
                { t: "تكامل مع الأنظمة الحالية", d: "نربط ERP بالتطبيقات والبوابات والأنظمة المؤسسية وفق نطاق المشروع." },
                { t: "تنفيذ مرحلي", d: "يمكن البدء بوحدات محددة ثم التوسع وفق الأولويات والجاهزية." },
                { t: "نقطة مسؤولية واحدة", d: "إدارة التحليل والإعداد والتطوير والتكامل والتدريب والدعم ضمن نطاق واضح." },
              ]
            : [
                { t: "Understanding business & processes", d: "We start by analyzing the organization's procedures and goals before setting up the system." },
                { t: "Software & integration expertise", d: "We combine ERP implementation, custom development and APIs." },
                { t: "Considered customization", d: "We customize based on actual needs while considering maintainability and expansion." },
                { t: "Organized data migration", d: "We treat data as an essential part of project success." },
                { t: "User training & support", d: "We help the organization's teams adopt and use the system correctly." },
                { t: "Integration with current systems", d: "We connect ERP to applications, portals and enterprise systems per project scope." },
                { t: "Phased delivery", d: "Start with specific modules, then expand based on priorities and readiness." },
                { t: "Single point of accountability", d: "Managing analysis, setup, development, integration, training and support within a clear scope." },
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
          14. خدمات مرتبطة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "خدمات تدعم نجاح مشروع ERP"
            : "Services supporting the success of your ERP project"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 mt-6">
          {[
            { ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software development & system integration", descAr: "تطوير الوحدات والبوابات وواجهات API وربط النظام بالتطبيقات الأخرى.", descEn: "Developing modules, portals, APIs and connecting the system to other applications.", link: "software-development" },
            { ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI & AI Agents solutions", descAr: "استخدام الذكاء الاصطناعي للوصول إلى البيانات أو دعم المستخدمين وفق الصلاحيات.", descEn: "Using AI to access data or support users within permissions.", link: "ai-agents" },
            { ar: "السحابة والبنية التحتية", en: "Cloud & infrastructure", descAr: "تجهيز بيئة تشغيل النظام والخوادم والتخزين والنسخ الاحتياطي.", descEn: "Preparing the system environment, servers, storage and backup.", link: "cloud-infrastructure" },
            { ar: "الشبكات والاتصال", en: "Networks & connectivity", descAr: "ضمان الاتصال بين الإدارات والفروع والمستخدمين والنظام المركزي.", descEn: "Ensuring connectivity between departments, branches, users and the central system.", link: "network-connectivity" },
            { ar: "أنظمة الحضور والتحكم بالدخول", en: "Attendance & access control", descAr: "ربط بيانات الحضور والانصراف بالموارد البشرية والرواتب.", descEn: "Linking attendance data to HR and payroll.", link: "surveillance-access-control" },
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
          15. CTA
          ============================================================ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={ctaBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative container-page py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            {isAr
              ? "هل تخططون لتنفيذ أو تحديث نظام ERP؟"
              : "Are you planning to implement or upgrade an ERP system?"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
            {isAr
              ? "شاركوا فريق أربتك باحتياجات المؤسسة والأنظمة الحالية والوحدات المطلوبة، وسنعمل معكم على دراسة العمليات وتحديد نطاق الحل وخطة التنفيذ المناسبة."
              : "Share your organization's needs, current systems and required modules with the ARABTEC team — we'll work with you to study the processes, define the solution scope and the right implementation plan."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {isAr ? "اطلب استشارة ERP" : "Request an ERP consultation"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
            >
              {isAr ? "اطلب عرضًا توضيحيًا" : "Request a demo"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          16. FAQ
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن أنظمة ERP وتطبيقات الأعمال"
            : "Frequently asked questions about ERP and business applications"}
        />

        <FAQ
          items={[
            {
              q: { ar: "ما هو نظام ERP؟", en: "What is an ERP system?" },
              a: {
                ar: "نظام ERP هو منصة متكاملة لإدارة موارد وعمليات المؤسسة، وتربط بين المالية والموارد البشرية والمشتريات والمخزون والمبيعات والأصول والمشاريع ضمن قاعدة بيانات مركزية.",
                en: "An ERP is an integrated platform for managing the organization's resources and operations — connecting finance, HR, procurement, inventory, sales, assets and projects in a central database.",
              },
            },
            {
              q: { ar: "ما الفائدة من تطبيق نظام ERP؟", en: "What are the benefits of implementing ERP?" },
              a: {
                ar: "يساعد ERP على توحيد البيانات، تقليل العمليات اليدوية، تسريع الموافقات، تحسين دقة التقارير ورفع كفاءة العمل بين الإدارات.",
                en: "ERP helps unify data, reduce manual processes, accelerate approvals, improve report accuracy and raise work efficiency across departments.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك أنظمة ERP للجهات الحكومية؟", en: "Does ARABTEC offer ERP systems for government entities?" },
              a: {
                ar: "نعم، يمكن تصميم حلول ERP للجهات الحكومية وفق الهيكل التنظيمي ومسارات الموافقات والميزانيات والمشتريات والموارد البشرية والأصول والمشاريع.",
                en: "Yes — ERP solutions can be designed for government entities according to their organizational structure, approval paths, budgets, procurement, HR, assets and projects.",
              },
            },
            {
              q: { ar: "هل يمكن تخصيص نظام ERP؟", en: "Can an ERP system be customized?" },
              a: {
                ar: "نعم، يمكن تخصيص النماذج والإجراءات والصلاحيات والتقارير والتكاملات وفق احتياجات المؤسسة ونطاق المشروع.",
                en: "Yes — forms, procedures, permissions, reports and integrations can be customized based on the organization's needs and project scope.",
              },
            },
            {
              q: { ar: "هل يمكن تنفيذ وحدات محددة فقط؟", en: "Can specific modules be implemented only?" },
              a: {
                ar: "نعم، يمكن تنفيذ المشروع على مراحل والبدء بالوحدات ذات الأولوية ثم إضافة وحدات أخرى لاحقًا.",
                en: "Yes — the project can be delivered in phases, starting with priority modules, then adding others later.",
              },
            },
            {
              q: { ar: "هل يمكن ربط ERP بأنظمة المؤسسة؟", en: "Can the ERP be integrated with enterprise systems?" },
              a: {
                ar: "نعم، يمكن ربطه بأنظمة الحضور و CRM والبوابات وقواعد البيانات والأنظمة البنكية والتجارة الإلكترونية وغيرها من خلال وسائل التكامل المتاحة.",
                en: "Yes — it can be integrated with attendance systems, CRM, portals, databases, banking systems, e-commerce and others through available integration methods.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك خدمات ترحيل البيانات؟", en: "Does ARABTEC provide data migration services?" },
              a: {
                ar: "نعم، تشمل الخدمة تحليل وتنظيف وتحويل واختبار ونقل البيانات من الأنظمة أو الملفات القديمة إلى النظام الجديد.",
                en: "Yes — the service includes analyzing, cleaning, converting, testing and transferring data from legacy systems or files to the new system.",
              },
            },
            {
              q: { ar: "هل يشمل المشروع تدريب الموظفين؟", en: "Does the project include employee training?" },
              a: {
                ar: "يمكن أن يشمل نطاق المشروع تدريب المستخدمين الرئيسيين والنهائيين وفرق الدعم وفق الخطة المعتمدة.",
                en: "The project scope can include training key users, end users and support teams per the approved plan.",
              },
            },
            {
              q: { ar: "هل يمكن تشغيل ERP على السحابة؟", en: "Can ERP run on the cloud?" },
              a: {
                ar: "يمكن تصميم بيئة سحابية أو داخلية أو هجينة وفق احتياجات المؤسسة ومتطلبات الأداء والسياسات المعتمدة.",
                en: "A cloud, on-premise or hybrid environment can be designed based on the organization's needs, performance requirements and approved policies.",
              },
            },
            {
              q: { ar: "كم يستغرق تنفيذ نظام ERP؟", en: "How long does ERP implementation take?" },
              a: {
                ar: "تعتمد المدة على عدد الوحدات، حجم المؤسسة، مستوى التخصيص، جاهزية البيانات، التكاملات وسرعة اعتماد المتطلبات.",
                en: "Duration depends on the number of modules, organization size, customization level, data readiness, integrations and speed of requirements approval.",
              },
            },
            {
              q: { ar: "ما الفرق بين ERP وبرنامج المحاسبة؟", en: "What's the difference between ERP and accounting software?" },
              a: {
                ar: "برنامج المحاسبة يركز على العمليات المالية، بينما يربط ERP بين المالية والموارد البشرية والمشتريات والمخزون والمبيعات والأصول والمشاريع ضمن نظام واحد.",
                en: "Accounting software focuses on financial operations, while ERP connects finance, HR, procurement, inventory, sales, assets and projects in one system.",
              },
            },
            {
              q: { ar: "هل يمكن ربط نظام الحضور بالرواتب؟", en: "Can attendance be linked to payroll?" },
              a: {
                ar: "نعم، يمكن ربط بيانات الحضور والانصراف والإجازات بنظام الموارد البشرية والرواتب وفق التكامل المتاح.",
                en: "Yes — attendance, leave and checkout data can be linked to HR and payroll per available integration.",
              },
            },
            {
              q: { ar: "هل يمكن تطوير تطبيقات مخصصة مرتبطة بـ ERP؟", en: "Can custom applications be developed and linked to ERP?" },
              a: {
                ar: "نعم، يمكن تطوير بوابات وتطبيقات ويب وهاتف ووحدات مخصصة تتكامل مع نظام ERP.",
                en: "Yes — portals, web and mobile apps and custom modules can be developed to integrate with the ERP.",
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
                name: "ما هو نظام ERP؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نظام ERP هو منصة متكاملة لإدارة موارد وعمليات المؤسسة، وتربط بين المالية والموارد البشرية والمشتريات والمخزون والمبيعات والأصول والمشاريع ضمن قاعدة بيانات مركزية.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن تخصيص نظام ERP؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن تخصيص النماذج والإجراءات والصلاحيات والتقارير والتكاملات وفق احتياجات المؤسسة ونطاق المشروع.",
                },
              },
              {
                "@type": "Question",
                name: "هل تقدم أربتك خدمات ترحيل البيانات؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، تشمل الخدمة تحليل وتنظيف وتحويل واختبار ونقل البيانات من الأنظمة أو الملفات القديمة إلى النظام الجديد.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}