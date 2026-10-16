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
} from "lucide-react";

// الصور
import heroImg from "@/assets/technology-solutions-across-industries.webp";
import govImg from "@/assets/government-digital-transformation-solutions.jpeg";
import oilImg from "@/assets/oil-gas-technology-solutions.webp";
import eduImg from "@/assets/education-technology-solutions.webp";
import healthImg from "@/assets/healthcare-it-solutions.jpg";
import financeImg from "@/assets/financial-services-technology-solutions.jpg";
import enterpriseImg from "@/assets/enterprise-technology-solution.webp";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

const industryIcons = [Landmark, Fuel, GraduationCap, HeartPulse, Banknote, Building2];

export default function IndustriesPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";

  // قائمة القطاعات الستة مع بياناتها الكاملة
  const sectors = [
    {
      key: "government",
      anchor: "#government",
      titleAr: "حلول تقنية للجهات الحكومية والتحول الرقمي",
      titleEn: "Technology solutions for government and digital transformation",
      solutionsTitleAr: "الحلول المناسبة للجهات الحكومية",
      solutionsTitleEn: "Solutions for government entities",
      descAr: "تساعد أربتك الجهات الحكومية على تطوير الخدمات الرقمية، أتمتة الإجراءات، ربط الأنظمة، تحسين الوصول إلى المعرفة المؤسسية وتجهيز البنية التقنية اللازمة لدعم الموظفين والمتعاملين. يمكن تصميم المشروع وفق طبيعة الجهة وهيكلها التنظيمي، عدد الإدارات والفروع، مسارات الموافقة، الأنظمة القائمة ومتطلبات الخدمة والتكامل.",
      descEn: "ARABTEC helps government entities modernize digital services, automate procedures, integrate systems, improve access to institutional knowledge and prepare the technology infrastructure needed to support employees and customers. The project is designed according to each entity's structure, departments, branches, approval paths, existing systems and service and integration requirements.",
      img: govImg,
      imgAltAr: "حلول التحول الرقمي والذكاء الاصطناعي والأنظمة للجهات الحكومية",
      imgAltEn: "Digital transformation, AI and systems solutions for government entities",
      ctaAr: "ناقش مشروعًا حكوميًا",
      ctaEn: "Discuss a government project",
      ctaLink: "/contact",
      solutions: [
        {
          hAr: "حلول الذكاء الاصطناعي و AI Agents",
          hEn: "AI Solutions & AI Agents",
          itemsAr: ["مساعد ذكي للموظفين", "مساعد للخدمات الحكومية", "البحث في السياسات واللوائح", "الإجابة عن استفسارات المتعاملين", "تصنيف الطلبات والمراسلات", "تلخيص الوثائق والتقارير", "تحليل الملاحظات والشكاوى", "ربط الذكاء الاصطناعي بالأنظمة الحكومية"],
          itemsEn: ["AI assistant for employees", "Government services assistant", "Policy & regulation search", "Answering customer inquiries", "Request & correspondence classification", "Document & report summarization", "Feedback & complaint analysis", "AI integration with government systems"],
          link: "ai-agents",
        },
        {
          hAr: "أنظمة ERP وتطبيقات الأعمال",
          hEn: "ERP & Business Applications",
          itemsAr: ["الإدارة المالية", "الموارد البشرية", "المشتريات والعقود", "الأصول", "المخزون", "المشاريع والمبادرات", "الموافقات", "التقارير الإدارية"],
          itemsEn: ["Financial management", "Human resources", "Procurement & contracts", "Assets", "Inventory", "Projects & initiatives", "Approvals", "Administrative reporting"],
          link: "erp-business-applications",
        },
        {
          hAr: "تطوير الأنظمة والبوابات الحكومية",
          hEn: "Government Systems & Portals Development",
          itemsAr: ["بوابات الخدمات", "أنظمة إدارة المعاملات", "بوابات الموظفين", "نماذج الخدمات الإلكترونية", "أنظمة الموافقات", "لوحات القيادات", "تطبيقات الهاتف", "تكامل الأنظمة"],
          itemsEn: ["Service portals", "Transactions management systems", "Employee portals", "E-service forms", "Approval systems", "Leadership dashboards", "Mobile applications", "System integration"],
          link: "software-development",
        },
        {
          hAr: "السحابة والبنية التحتية",
          hEn: "Cloud & Infrastructure",
          itemsAr: ["تشغيل البوابات والأنظمة", "الخوادم والتخزين", "النسخ الاحتياطي", "مراكز البيانات", "بيئات الاختبار والإنتاج", "استمرارية الأعمال", "تجهيز الفروع والمواقع"],
          itemsEn: ["Running portals & systems", "Servers & storage", "Backup", "Data centers", "Test & production environments", "Business continuity", "Branch & site setup"],
          link: "cloud-infrastructure",
        },
        {
          hAr: "الشبكات وربط المواقع الحكومية",
          hEn: "Government Networks & Site Connectivity",
          itemsAr: ["ربط الإدارات والفروع", "شبكات WAN و LAN", "الألياف الضوئية", "Wi-Fi المؤسسي", "الكابلات الهيكلية", "ربط مراكز الخدمة", "تشغيل وصيانة الشبكات"],
          itemsEn: ["Department & branch connectivity", "WAN & LAN networks", "Fiber optics", "Enterprise Wi-Fi", "Structured cabling", "Service center connectivity", "Network operations & maintenance"],
          link: "network-connectivity",
        },
        {
          hAr: "المراقبة والحضور والتحكم بالدخول",
          hEn: "Surveillance, Attendance & Access Control",
          itemsAr: ["كاميرات المباني والمرافق", "الحضور والانصراف", "التعرف على الوجه أو البصمة", "البطاقات و RFID", "إدارة الزوار", "التحكم بالدخول", "المراقبة المركزية"],
          itemsEn: ["Building & facility cameras", "Attendance", "Face recognition or biometrics", "Cards & RFID", "Visitor management", "Access control", "Central monitoring"],
          link: "surveillance-access-control",
        },
      ],
    },
    {
      key: "oil-gas",
      anchor: "#oil-gas",
      titleAr: "حلول تقنية لقطاع النفط والغاز والمواقع التشغيلية",
      titleEn: "Technology solutions for oil & gas and operational sites",
      solutionsTitleAr: "الحلول المناسبة لقطاع النفط والغاز",
      solutionsTitleEn: "Solutions for oil & gas",
      descAr: "تحتاج شركات النفط والغاز والمنشآت الصناعية إلى بنية تقنية تدعم المواقع المتعددة، الاتصال بالمناطق البعيدة، الأنظمة المؤسسية، الأصول والمخزون والمشاريع والعمليات الميدانية. تقدم أربتك حلولاً يمكن تخصيصها وفق طبيعة المنشأة وعدد المواقع والمستخدمين والأنظمة والاحتياجات التشغيلية.",
      descEn: "Oil & gas companies and industrial facilities need a technology infrastructure that supports multiple sites, remote connectivity, enterprise systems, assets, inventory, projects and field operations. ARABTEC delivers solutions that can be tailored to the facility, number of sites and users, systems and operational needs.",
      img: oilImg,
      imgAltAr: "حلول الشبكات والبنية التحتية والأنظمة لقطاع النفط والغاز",
      imgAltEn: "Networks, infrastructure and systems solutions for oil & gas",
      ctaAr: "ناقش احتياجات موقع تشغيلي",
      ctaEn: "Discuss an operational site",
      ctaLink: "/contact",
      solutions: [
        {
          hAr: "الشبكات وربط المواقع",
          hEn: "Networks & Site Connectivity",
          itemsAr: ["ربط المقر بالمواقع التشغيلية", "ربط المستودعات والفروع", "الألياف الضوئية", "Point-to-Point", "VSAT", "Wi-Fi للمواقع", "VoIP", "إدارة الاتصال مركزيًا"],
          itemsEn: ["HQ to operational sites connectivity", "Warehouse & branch connectivity", "Fiber optics", "Point-to-Point", "VSAT", "Site Wi-Fi", "VoIP", "Central connectivity management"],
          link: "network-connectivity",
        },
        {
          hAr: "البنية التحتية التقنية",
          hEn: "Technology Infrastructure",
          itemsAr: ["الخوادم والتخزين", "تجهيز غرف الخوادم", "البنية السحابية والهجينة", "النسخ الاحتياطي", "التعافي من الأعطال", "تجهيز المواقع الجديدة", "التشغيل والصيانة"],
          itemsEn: ["Servers & storage", "Server room setup", "Cloud & hybrid infrastructure", "Backup", "Disaster recovery", "New site setup", "Operations & maintenance"],
          link: "cloud-infrastructure",
        },
        {
          hAr: "ERP وتطبيقات الأعمال",
          hEn: "ERP & Business Applications",
          itemsAr: ["المشتريات", "المخزون والمستودعات", "إدارة الأصول", "إدارة الصيانة", "المشاريع", "الموارد البشرية", "التكاليف والتقارير", "إدارة الموردين"],
          itemsEn: ["Procurement", "Inventory & warehouses", "Asset management", "Maintenance management", "Projects", "Human resources", "Costs & reporting", "Vendor management"],
          link: "erp-business-applications",
        },
        {
          hAr: "تطوير البرمجيات",
          hEn: "Software Development",
          itemsAr: ["تطبيقات الفرق الميدانية", "أنظمة إدارة المواقع", "متابعة المهام والصيانة", "إدارة التقارير التشغيلية", "لوحات الأداء", "تطبيقات الزيارات والفحص", "تكامل الأنظمة والبيانات"],
          itemsEn: ["Field team applications", "Site management systems", "Task & maintenance tracking", "Operational reporting", "Performance dashboards", "Inspection & visit apps", "System & data integration"],
          link: "software-development",
        },
        {
          hAr: "المراقبة والتحكم بالدخول",
          hEn: "Surveillance & Access Control",
          itemsAr: ["مراقبة المواقع والمنشآت", "مراقبة المستودعات", "إدارة المداخل", "حضور الموظفين والعمال", "البطاقات والتصاريح", "ربط المواقع مركزيًا", "إدارة الزوار والمقاولين"],
          itemsEn: ["Site & facility surveillance", "Warehouse surveillance", "Entrance management", "Employee & worker attendance", "Cards & permits", "Central site connectivity", "Visitor & contractor management"],
          link: "surveillance-access-control",
        },
        {
          hAr: "الذكاء الاصطناعي وإدارة المعرفة",
          hEn: "AI & Knowledge Management",
          itemsAr: ["البحث في الأدلة التشغيلية", "تلخيص التقارير", "الوصول إلى الإجراءات", "تحليل البيانات التشغيلية", "تصنيف المستندات", "فرق دعم المواقع"],
          itemsEn: ["Operational manual search", "Report summarization", "Access to procedures", "Operational data analytics", "Document classification", "Site support teams"],
          link: "ai-agents",
        },
      ],
    },
    {
      key: "education",
      anchor: "#education",
      titleAr: "حلول تقنية للمدارس والجامعات والمؤسسات التعليمية",
      titleEn: "Technology solutions for schools, universities and educational institutions",
      solutionsTitleAr: "الحلول المناسبة لقطاع التعليم",
      solutionsTitleEn: "Solutions for education",
      descAr: "تساعد الحلول التقنية المؤسسات التعليمية على إدارة عملياتها، ربط مبانيها وفروعها، تحسين وصول الموظفين والطلاب إلى الخدمات، وتشغيل الأنظمة والمنصات ضمن بيئة تقنية منظمة. يمكن تصميم الحل وفق حجم المؤسسة التعليمية، عدد المباني والمستخدمين، الخدمات الإدارية، الشبكات والأنظمة الحالية.",
      descEn: "Technology solutions help educational institutions manage operations, connect buildings and branches, improve staff and student access to services, and operate systems and platforms within an organized technology environment. The solution can be designed according to the institution's size, number of buildings and users, administrative services, networks and current systems.",
      img: eduImg,
      imgAltAr: "حلول الشبكات والأنظمة والبوابات للمؤسسات التعليمية",
      imgAltEn: "Networks, systems and portal solutions for educational institutions",
      ctaAr: "ناقش احتياجات مؤسسة تعليمية",
      ctaEn: "Discuss an educational institution",
      ctaLink: "/contact",
      solutions: [
        {
          hAr: "الشبكات والاتصال",
          hEn: "Networks & Connectivity",
          itemsAr: ["شبكات المدارس والجامعات", "ربط المباني والفروع", "Wi-Fi", "الألياف الضوئية", "الكابلات الهيكلية", "معامل الحاسب", "ربط الأنظمة والمنصات", "إدارة الشبكات"],
          itemsEn: ["School & university networks", "Building & branch connectivity", "Wi-Fi", "Fiber optics", "Structured cabling", "Computer labs", "Systems & platforms connectivity", "Network management"],
          link: "network-connectivity",
        },
        {
          hAr: "الأنظمة الإدارية و ERP",
          hEn: "Administrative Systems & ERP",
          itemsAr: ["المالية والمحاسبة", "الموارد البشرية", "المشتريات", "المخزون", "الأصول", "المشاريع", "الموافقات", "التقارير الإدارية"],
          itemsEn: ["Finance & accounting", "Human resources", "Procurement", "Inventory", "Assets", "Projects", "Approvals", "Administrative reporting"],
          link: "erp-business-applications",
        },
        {
          hAr: "تطوير البوابات والتطبيقات",
          hEn: "Portal & Application Development",
          itemsAr: ["بوابات الموظفين", "بوابات الخدمات", "تطبيقات الهاتف", "أنظمة الطلبات", "الخدمات الذاتية", "الإنترانت", "إدارة الوثائق", "لوحات المتابعة"],
          itemsEn: ["Employee portals", "Service portals", "Mobile applications", "Request systems", "Self-service", "Intranet", "Document management", "Tracking dashboards"],
          link: "software-development",
        },
        {
          hAr: "الذكاء الاصطناعي",
          hEn: "Artificial Intelligence",
          itemsAr: ["مساعد للموظفين والطلاب", "البحث في اللوائح والسياسات", "الإجابة عن الاستفسارات", "إدارة المعرفة التعليمية والإدارية", "تلخيص الوثائق", "أتمتة الطلبات المتكررة"],
          itemsEn: ["Staff & student assistant", "Policy & regulation search", "Answering inquiries", "Educational & admin knowledge management", "Document summarization", "Automating repetitive requests"],
          link: "ai-agents",
        },
        {
          hAr: "الحضور والمراقبة والدخول",
          hEn: "Attendance, Surveillance & Access",
          itemsAr: ["حضور الموظفين", "البصمة أو التعرف على الوجه", "كاميرات المداخل والممرات", "إدارة دخول المباني", "البطاقات", "إدارة الزوار", "ربط عدة فروع"],
          itemsEn: ["Staff attendance", "Biometrics or face recognition", "Entrance & corridor cameras", "Building access management", "Cards", "Visitor management", "Multi-branch connectivity"],
          link: "surveillance-access-control",
        },
        {
          hAr: "السحابة والبنية التحتية",
          hEn: "Cloud & Infrastructure",
          itemsAr: ["استضافة الأنظمة", "الخوادم والتخزين", "النسخ الاحتياطي", "تجهيز المعامل والمكاتب", "تشغيل الفروع", "بيئات التطوير والاختبار"],
          itemsEn: ["System hosting", "Servers & storage", "Backup", "Lab & office setup", "Branch operations", "Development & test environments"],
          link: "cloud-infrastructure",
        },
      ],
    },
    {
      key: "healthcare",
      anchor: "#healthcare",
      titleAr: "حلول تقنية للمستشفيات والمنشآت الصحية",
      titleEn: "Technology solutions for hospitals and healthcare facilities",
      solutionsTitleAr: "الحلول المناسبة للرعاية الصحية",
      solutionsTitleEn: "Solutions for healthcare",
      descAr: "تحتاج المنشآت الصحية إلى أنظمة وبنية تقنية تساعد الفرق الإدارية والتشغيلية على إدارة المستخدمين والبيانات والمواقع والخدمات بصورة منظمة. يمكن لأربتك تقديم حلول برمجية وإدارية وبنية تحتية وشبكات وأنظمة حضور ودخول وفق نطاق المشروع والأنظمة المتاحة لدى المنشأة.",
      descEn: "Healthcare facilities need systems and technology infrastructure that help administrative and operational teams manage users, data, sites and services in an organized way. ARABTEC can provide software, administrative, infrastructure, network, attendance and access solutions according to project scope and the facility's available systems.",
      img: healthImg,
      imgAltAr: "حلول تقنية وبنية تحتية وأنظمة إدارية للمنشآت الصحية",
      imgAltEn: "Technology, infrastructure and administrative systems for healthcare facilities",
      ctaAr: "ناقش احتياجات منشأة صحية",
      ctaEn: "Discuss a healthcare facility",
      ctaLink: "/contact",
      solutions: [
        {
          hAr: "البنية التحتية والسحابة",
          hEn: "Infrastructure & Cloud",
          itemsAr: ["الخوادم والتخزين", "استضافة الأنظمة", "النسخ الاحتياطي", "استمرارية الخدمات", "تجهيز غرف الخوادم", "ربط المنشآت والمراكز", "مراقبة أداء البنية"],
          itemsEn: ["Servers & storage", "System hosting", "Backup", "Service continuity", "Server room setup", "Facility & center connectivity", "Infrastructure performance monitoring"],
          link: "cloud-infrastructure",
        },
        {
          hAr: "الشبكات والاتصال",
          hEn: "Networks & Connectivity",
          itemsAr: ["شبكات المستشفيات والمراكز", "ربط المباني", "Wi-Fi", "الألياف الضوئية", "ربط الأنظمة والأجهزة", "اتصال الفروع", "تشغيل وصيانة الشبكات"],
          itemsEn: ["Hospital & center networks", "Building connectivity", "Wi-Fi", "Fiber optics", "Systems & device connectivity", "Branch connectivity", "Network operations & maintenance"],
          link: "network-connectivity",
        },
        {
          hAr: "البرمجيات وتكامل الأنظمة",
          hEn: "Software & System Integration",
          itemsAr: ["أنظمة الطلبات والخدمات", "بوابات الموظفين", "تطبيقات العمليات", "إدارة الوثائق", "أنظمة الموافقات", "لوحات المتابعة", "تكامل قواعد البيانات والتطبيقات"],
          itemsEn: ["Request & service systems", "Employee portals", "Operations applications", "Document management", "Approval systems", "Tracking dashboards", "Database & application integration"],
          link: "software-development",
        },
        {
          hAr: "ERP وتطبيقات الأعمال",
          hEn: "ERP & Business Applications",
          itemsAr: ["المالية", "المشتريات", "المخزون", "الموارد البشرية", "الأصول", "الصيانة", "الموافقات", "التقارير الإدارية"],
          itemsEn: ["Finance", "Procurement", "Inventory", "Human resources", "Assets", "Maintenance", "Approvals", "Administrative reporting"],
          link: "erp-business-applications",
        },
        {
          hAr: "الحضور والتحكم بالدخول",
          hEn: "Attendance & Access Control",
          itemsAr: ["حضور الموظفين", "التحكم بدخول المناطق المحددة", "إدارة الزوار", "البطاقات", "مراقبة المداخل والممرات", "ربط عدة مبانٍ", "تقارير الدخول"],
          itemsEn: ["Staff attendance", "Restricted area access control", "Visitor management", "Cards", "Entrance & corridor surveillance", "Multi-building connectivity", "Access reports"],
          link: "surveillance-access-control",
        },
        {
          hAr: "الذكاء الاصطناعي المؤسسي",
          hEn: "Enterprise AI",
          itemsAr: ["البحث في السياسات والإجراءات", "دعم الموظفين", "تلخيص التقارير الإدارية", "تصنيف المستندات", "إدارة المعرفة", "تحليل بيانات العمليات الإدارية"],
          itemsEn: ["Policy & procedure search", "Employee support", "Administrative report summarization", "Document classification", "Knowledge management", "Administrative operations data analysis"],
          link: "ai-agents",
        },
      ],
      noteAr: "تقدم أربتك الحلول التقنية والإدارية ضمن نطاق قدراتها ومشروعاتها، ولا يقدم محتوى الصفحة أي ادعاء بتوفير أنظمة تشخيص طبي أو خدمات علاجية.",
      noteEn: "ARABTEC provides technology and administrative solutions within the scope of its capabilities and projects. The page content does not claim to provide medical diagnostic systems or treatment services.",
    },
    {
      key: "financial-services",
      anchor: "#financial-services",
      titleAr: "حلول تقنية للبنوك والمؤسسات المالية",
      titleEn: "Technology solutions for banks and financial institutions",
      solutionsTitleAr: "الحلول المناسبة للخدمات المالية",
      solutionsTitleEn: "Solutions for financial services",
      descAr: "تحتاج المؤسسات المالية إلى أنظمة مترابطة وعمليات واضحة وبنية تقنية مستقرة تساعد الموظفين والإدارات على إدارة البيانات والطلبات والموافقات والخدمات المؤسسية. يمكن تصميم حلول أربتك للعمليات الإدارية والمؤسسية والبوابات الداخلية وتكامل الأنظمة والذكاء الاصطناعي والبنية التحتية وفق نطاق المشروع ومتطلبات الجهة.",
      descEn: "Financial institutions need integrated systems, clear operations and stable technology infrastructure that help employees and departments manage data, requests, approvals and enterprise services. ARABTEC's solutions for administrative and enterprise operations, internal portals, system integration, AI and infrastructure can be designed according to project scope and the entity's requirements.",
      img: financeImg,
      imgAltAr: "حلول البرمجيات والذكاء الاصطناعي والبنية التقنية للمؤسسات المالية",
      imgAltEn: "Software, AI and technology infrastructure solutions for financial institutions",
      ctaAr: "ناقش مشروعًا للمؤسسات المالية",
      ctaEn: "Discuss a financial institution project",
      ctaLink: "/contact",
      solutions: [
        {
          hAr: "تطوير البرمجيات وتكامل الأنظمة",
          hEn: "Software Development & System Integration",
          itemsAr: ["بوابات الموظفين", "بوابات العملاء المؤسسية", "أنظمة الموافقات", "إدارة الطلبات", "إدارة الوثائق", "واجهات API", "تكامل الأنظمة", "لوحات الإدارة"],
          itemsEn: ["Employee portals", "Enterprise customer portals", "Approval systems", "Request management", "Document management", "API interfaces", "System integration", "Management dashboards"],
          link: "software-development",
        },
        {
          hAr: "الذكاء الاصطناعي",
          hEn: "Artificial Intelligence",
          itemsAr: ["مساعد داخلي للموظفين", "البحث في السياسات", "تصنيف المراسلات", "تلخيص المستندات", "إدارة المعرفة", "دعم مراكز الخدمة", "تحليل الملاحظات"],
          itemsEn: ["Internal employee assistant", "Policy search", "Correspondence classification", "Document summarization", "Knowledge management", "Service center support", "Feedback analysis"],
          link: "ai-agents",
        },
        {
          hAr: "ERP وتطبيقات الأعمال",
          hEn: "ERP & Business Applications",
          itemsAr: ["المالية المؤسسية", "الموارد البشرية", "المشتريات", "الأصول", "المشاريع", "الموافقات", "التقارير الإدارية"],
          itemsEn: ["Enterprise finance", "Human resources", "Procurement", "Assets", "Projects", "Approvals", "Administrative reporting"],
          link: "erp-business-applications",
        },
        {
          hAr: "البنية التحتية والسحابة",
          hEn: "Infrastructure & Cloud",
          itemsAr: ["الخوادم والتخزين", "النسخ الاحتياطي", "استمرارية الأعمال التقنية", "بيئات داخلية أو هجينة", "مراكز البيانات", "إدارة الموارد"],
          itemsEn: ["Servers & storage", "Backup", "Technology business continuity", "On-premise or hybrid environments", "Data centers", "Resource management"],
          link: "cloud-infrastructure",
        },
        {
          hAr: "الشبكات والاتصال",
          hEn: "Networks & Connectivity",
          itemsAr: ["ربط الفروع", "LAN و WAN", "الألياف الضوئية", "Wi-Fi للمكاتب", "VoIP", "إدارة الاتصال مركزيًا"],
          itemsEn: ["Branch connectivity", "LAN & WAN", "Fiber optics", "Office Wi-Fi", "VoIP", "Central connectivity management"],
          link: "network-connectivity",
        },
        {
          hAr: "الحضور والتحكم بالدخول",
          hEn: "Attendance & Access Control",
          itemsAr: ["حضور الموظفين", "بطاقات الدخول", "إدارة صلاحيات الأبواب", "مراقبة الفروع", "إدارة الزوار", "ربط الحضور بالموارد البشرية"],
          itemsEn: ["Staff attendance", "Access cards", "Door permission management", "Branch surveillance", "Visitor management", "Attendance & HR integration"],
          link: "surveillance-access-control",
        },
      ],
      noteAr: "تحدد متطلبات الاستضافة والتكامل والوصول إلى البيانات وفق سياسات المؤسسة والأنظمة والمتطلبات التنظيمية المعتمدة لديها.",
      noteEn: "Hosting, integration and data access requirements are determined according to the institution's policies, regulations and approved compliance requirements.",
    },
    {
      key: "enterprise",
      anchor: "#enterprise",
      titleAr: "حلول تقنية للشركات والمؤسسات متعددة الإدارات والفروع",
      titleEn: "Technology solutions for multi-department and multi-branch enterprises",
      solutionsTitleAr: "الحلول المناسبة للشركات والمؤسسات",
      solutionsTitleEn: "Solutions for enterprises",
      descAr: "تساعد أربتك الشركات والمؤسسات على توحيد بياناتها وعملياتها، تطوير أنظمتها، ربط فروعها وتجهيز بيئة تقنية تدعم النمو والتوسع. يمكن تصميم الحل وفق حجم الشركة وعدد الموظفين والفروع والعمليات والأنظمة المستخدمة، بدءًا من تطبيق خدمة محددة وصولاً إلى مشروع تحول تقني متكامل.",
      descEn: "ARABTEC helps companies and enterprises unify their data and operations, evolve their systems, connect branches and prepare a technology environment that supports growth and expansion. The solution can be designed according to company size, number of employees and branches, operations and systems — from a single service to a complete technology transformation project.",
      img: enterpriseImg,
      imgAltAr: "حلول ERP والبرمجيات والسحابة والشبكات للشركات والمؤسسات",
      imgAltEn: "ERP, software, cloud and network solutions for corporates and enterprises",
      ctaAr: "ناقش احتياجات مؤسستك",
      ctaEn: "Discuss your organization's needs",
      ctaLink: "/contact",
      solutions: [
        {
          hAr: "ERP وتطبيقات الأعمال",
          hEn: "ERP & Business Applications",
          itemsAr: ["المحاسبة والمالية", "الموارد البشرية والرواتب", "المشتريات", "المخزون", "المبيعات والعملاء", "الأصول", "المشاريع", "التقارير ولوحات الأداء"],
          itemsEn: ["Accounting & finance", "HR & payroll", "Procurement", "Inventory", "Sales & customers", "Assets", "Projects", "Reporting & performance dashboards"],
          link: "erp-business-applications",
        },
        {
          hAr: "البرمجيات المخصصة وأنظمة إدارة العمليات",
          hEn: "Custom Software & Operations Management Systems",
          itemsAr: ["أنظمة إدارة العمليات", "بوابات العملاء", "بوابات الموردين", "تطبيقات الهاتف", "أنظمة الموافقات", "أنظمة الطلبات", "لوحات الإدارة", "تكامل CRM و ERP"],
          itemsEn: ["Operations management systems", "Customer portals", "Vendor portals", "Mobile applications", "Approval systems", "Request systems", "Management dashboards", "CRM & ERP integration"],
          link: "software-development",
        },
        {
          hAr: "الذكاء الاصطناعي و AI Agents",
          hEn: "AI & AI Agents",
          itemsAr: ["مساعد الموارد البشرية", "مساعد خدمة العملاء", "البحث في وثائق المؤسسة", "أتمتة المهام", "معالجة المستندات", "تحليل البيانات", "دعم الموظفين"],
          itemsEn: ["HR assistant", "Customer service assistant", "Enterprise document search", "Task automation", "Document processing", "Data analytics", "Employee support"],
          link: "ai-agents",
        },
        {
          hAr: "السحابة والبنية التحتية",
          hEn: "Cloud & Infrastructure",
          itemsAr: ["الخوادم والتخزين", "الاستضافة السحابية", "النسخ الاحتياطي", "تجهيز الفروع", "أجهزة المستخدمين", "استمرارية الأعمال", "التشغيل والدعم"],
          itemsEn: ["Servers & storage", "Cloud hosting", "Backup", "Branch setup", "End-user devices", "Business continuity", "Operations & support"],
          link: "cloud-infrastructure",
        },
        {
          hAr: "الشبكات والاتصال",
          hEn: "Networks & Connectivity",
          itemsAr: ["ربط المقر والفروع", "LAN و WAN", "Wi-Fi", "VoIP", "الألياف الضوئية", "Structured Cabling", "ربط الأنظمة السحابية"],
          itemsEn: ["HQ & branch connectivity", "LAN & WAN", "Wi-Fi", "VoIP", "Fiber optics", "Structured Cabling", "Cloud systems connectivity"],
          link: "network-connectivity",
        },
        {
          hAr: "الحضور والمراقبة والتحكم بالدخول",
          hEn: "Attendance, Surveillance & Access Control",
          itemsAr: ["حضور الموظفين", "كاميرات الفروع والمكاتب", "البطاقات", "إدارة الزوار", "التحكم بالأبواب", "ربط الحضور بالرواتب", "المراقبة المركزية"],
          itemsEn: ["Staff attendance", "Branch & office cameras", "Cards", "Visitor management", "Door access control", "Attendance & payroll integration", "Central monitoring"],
          link: "surveillance-access-control",
        },
      ],
    },
  ];
    return (
    <>
      {/* ============================================================
          JSON-LD: CollectionPage + Breadcrumb
          ============================================================ */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: isAr ? "القطاعات التي نخدمها | أربتك" : "Industries we serve | ARABTEC",
          url: "/industries",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: isAr ? "الرئيسية" : "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: isAr ? "القطاعات" : "Industries", item: "/industries" },
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
            { label: { ar: "القطاعات", en: "Industries" } },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
          {/* الصورة — يسار */}
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={
                isAr
                  ? "حلول تقنية للجهات الحكومية والقطاعات الحيوية والمؤسسات"
                  : "Technology solutions for government, vital sectors and enterprises"
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
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              {isAr
                ? "حلول تقنية تراعي احتياجات كل قطاع"
                : "Technology solutions for each sector's needs"}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "حلول تقنية متكاملة للقطاعات الحكومية والحيوية والمؤسسات"
                : "Integrated technology solutions for government, vital sectors and enterprises"}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isAr
                ? "تختلف الاحتياجات التقنية باختلاف طبيعة القطاع، حجم العمليات، عدد المواقع والمستخدمين، حساسية البيانات، ومتطلبات التكامل واستمرارية الخدمات."
                : "Technology needs vary by sector, operation scale, number of sites and users, data sensitivity, and integration and continuity requirements."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تعمل أربتك مع الجهات الحكومية والمؤسسات والشركات على دراسة بيئة العمل وتحديد الحلول المناسبة، بدءًا من الذكاء الاصطناعي وأنظمة ERP وتطوير البرمجيات، وصولاً إلى السحابة والبنية التحتية والشبكات وأنظمة المراقبة والحضور والتحكم بالدخول."
                : "ARABTEC works with government entities, organizations and companies to study the operating environment and identify the right solutions — from AI, ERP and software development to cloud, infrastructure, networks, surveillance, attendance and access control."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "نصمم الحلول وفق أولويات كل قطاع، مع إمكانية تنفيذ خدمة محددة أو بناء منظومة تقنية متكاملة تجمع بين الأنظمة والتطبيقات والبنية التحتية والاتصال ضمن مشروع واحد."
                : "We design solutions around each sector's priorities, delivering either a specific service or a complete technology ecosystem combining systems, applications, infrastructure and connectivity in one project."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">
                {isAr ? "ناقش احتياجات قطاعك" : "Discuss your sector's needs"}
              </CTAButton>
              <CTAButton to="/services" variant="outline">
                {isAr ? "استكشف خدماتنا التقنية" : "Explore our technology services"}
              </CTAButton>
            </div>

            {/* شريط القطاعات أسفل الأزرار */}
            <div className="mt-8 flex flex-wrap gap-2">
              {sectors.map((s, i) => {
                const Icon = industryIcons[i];
                return (
                  <a
                    key={s.key}
                    href={s.anchor}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:border-[color:var(--brand-deep)]/40 hover:shadow-sm transition"
                  >
                    <Icon className="h-3.5 w-3.5 text-[color:var(--brand-deep)]" />
                    {isAr ? INDUSTRIES[i].ar : INDUSTRIES[i].en}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          2. حلول مصممة حسب القطاع
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "التقنية المناسبة تبدأ بفهم طبيعة المؤسسة"
            : "The right technology starts with understanding the organization"}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "لا يكفي تطبيق التقنية نفسها في جميع القطاعات. فالجهة الحكومية تحتاج إلى خدمات رقمية وإجراءات وموافقات مؤسسية، بينما تعتمد المنشآت الصناعية على الاتصال بين المواقع والبنية التشغيلية، وتحتاج المؤسسات التعليمية والصحية والمالية إلى حلول تناسب مستخدميها وعملياتها وأنظمتها."
                : "Applying the same technology across all sectors is not enough. Government entities need digital services and institutional procedures and approvals, industrial facilities depend on site-to-site connectivity and operational infrastructure, and educational, healthcare and financial institutions need solutions suited to their users, operations and systems."}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تبدأ أربتك بدراسة أهداف المؤسسة والتحديات الحالية والأنظمة والبيانات والمواقع والمستخدمين، ثم تحدد الخدمات والتقنيات التي يمكن أن تحقق قيمة عملية قابلة للتطوير."
                : "ARABTEC starts by studying the organization's goals, current challenges, systems, data, sites and users, then identifies the services and technologies that can deliver scalable, practical value."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "العناصر التي تتم دراستها" : "Elements we study"}
            </h3>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {(isAr
                ? [
                    "طبيعة العمليات والخدمات",
                    "الهيكل التنظيمي",
                    "عدد المستخدمين والمواقع",
                    "الأنظمة والتطبيقات الحالية",
                    "مصادر البيانات والوثائق",
                    "متطلبات التكامل",
                    "الأولويات التشغيلية",
                    "متطلبات الاستضافة والبنية التحتية",
                    "شبكات الاتصال وربط الفروع",
                    "أنظمة الحضور والمراقبة والدخول",
                    "خطط النمو والتوسع",
                    "متطلبات الدعم والتشغيل",
                  ]
                : [
                    "Nature of operations and services",
                    "Organizational structure",
                    "Number of users and sites",
                    "Current systems and applications",
                    "Data sources and documents",
                    "Integration requirements",
                    "Operational priorities",
                    "Hosting and infrastructure requirements",
                    "Networks and branch connectivity",
                    "Attendance, surveillance and access systems",
                    "Growth and expansion plans",
                    "Support and operations requirements",
                  ]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* مخطط دائري / عناصر الدراسة */}
          {/* <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              {isAr ? "حلول تقنية حسب القطاع" : "Technology solutions by sector"}
            </div>
            <div className="mt-2 text-2xl md:text-3xl font-extrabold text-[color:var(--brand-deep)] leading-snug">
              {isAr ? "حلول تقنية حسب القطاع" : "Technology solutions by sector"}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { ar: "العمليات", en: "Operations" },
                { ar: "المستخدمون", en: "Users" },
                { ar: "الأنظمة", en: "Systems" },
                { ar: "البيانات", en: "Data" },
                { ar: "المواقع", en: "Sites" },
                { ar: "التكامل", en: "Integration" },
                { ar: "البنية التحتية", en: "Infrastructure" },
                { ar: "الدعم", en: "Support" },
              ].map((x) => (
                <div
                  key={x.en}
                  className="aspect-square rounded-xl border border-border bg-background grid place-items-center text-sm font-medium p-2 text-center"
                >
                  {isAr ? x.ar : x.en}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </Section>

      {/* ============================================================
          الأقسام الستة للقطاعات — بالتناوب
          ============================================================ */}
      {sectors.map((sector, index) => {
        const isEven = index % 2 === 0;
        const Icon = industryIcons[index];

        return (
          <Section
            key={sector.key}
            id={sector.key}
            className={isEven ? "" : "bg-secondary"}
          >
            <div className="grid gap-10 lg:grid-cols-2 items-stretch">
              {/* الصورة */}
              <img
                src={sector.img}
                alt={isAr ? sector.imgAltAr : sector.imgAltEn}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
                className={`rounded-lg shadow-lg w-full h-full min-h-[400px] lg:min-h-[500px] object-cover ${
                  isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                }`}
              />

              {/* النص */}
              <div className={isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
                    {isAr ? sector.titleAr : sector.titleEn}
                  </h2>
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {isAr ? sector.descAr : sector.descEn}
                </p>

                {sector.noteAr && (
                  <div className="mt-5 rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isAr ? sector.noteAr : sector.noteEn}
                    </p>
                  </div>
                )}

                <div className="mt-6">
                  <Link
                    to={sector.ctaLink}
                    className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-deep)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
                  >
                    {isAr ? sector.ctaAr : sector.ctaEn}
                    <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </div>

            {/* الحلول المناسبة */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">
                {isAr ? sector.solutionsTitleAr : sector.solutionsTitleEn}
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sector.solutions.map((sol) => {
                  const solTitle = isAr ? sol.hAr : sol.hEn;
                  const solItems = isAr ? sol.itemsAr : sol.itemsEn;

                  return (
                    <Card key={sol.link}>
                      <h4 className="font-bold text-base">{solTitle}</h4>
                      <ul className="mt-3 space-y-1.5">
                        {solItems.map((x) => (
                          <li
                            key={x}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-[color:var(--gold)] mt-0.5 shrink-0">
                              •
                            </span>
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/services/$slug"
                        params={{ slug: sol.link }}
                        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:text-gold"
                      >
                        {isAr ? `استكشف ${solTitle}` : `Explore ${solTitle}`}
                        <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Section>
        );
      })}

      {/* ============================================================
          حالات المشاريع المتكاملة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "أمثلة على حلول متكاملة حسب طبيعة المؤسسة"
            : "Examples of integrated solutions by organization type"}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {(isAr
            ? [
                {
                  t: "تحول رقمي لجهة حكومية",
                  items: ["بوابة خدمات رقمية", "نظام إدارة معاملات", "Agent AI للموظفين والمتعاملين", "تكامل مع الأنظمة القائمة", "بنية سحابية أو داخلية", "ربط الفروع والمواقع", "لوحات متابعة وتقارير"],
                },
                {
                  t: "تجهيز مؤسسة متعددة الفروع",
                  items: ["شبكات وربط الفروع", "خوادم وبنية تحتية", "نظام ERP", "بوابة موظفين", "نظام حضور وانصراف", "كاميرات وتحكم بالدخول", "دعم وتشغيل"],
                },
                {
                  t: "تحديث بيئة منشأة صناعية",
                  items: ["تقييم البنية الحالية", "تحديث الخوادم والتخزين", "ربط المواقع البعيدة", "تطبيقات للفرق الميدانية", "إدارة الأصول والمخزون", "مراقبة المواقع", "التشغيل والصيانة"],
                },
                {
                  t: "تطوير خدمات مؤسسة تعليمية",
                  items: ["بوابة خدمات", "تطبيق للموظفين أو المستخدمين", "شبكة Wi-Fi وربط المباني", "أنظمة إدارية و ERP", "حضور ومراقبة", "استضافة ونسخ احتياطي", "مساعد ذكي للمعلومات والإجراءات"],
                },
              ]
            : [
                {
                  t: "Digital transformation for a government entity",
                  items: ["Digital services portal", "Transactions management system", "AI Agent for employees and customers", "Integration with existing systems", "Cloud or on-premise infrastructure", "Site and branch connectivity", "Dashboards & reporting"],
                },
                {
                  t: "Multi-branch organization setup",
                  items: ["Networks & branch connectivity", "Servers & infrastructure", "ERP system", "Employee portal", "Attendance system", "Cameras & access control", "Support & operations"],
                },
                {
                  t: "Industrial facility modernization",
                  items: ["Assessment of current infrastructure", "Server & storage upgrades", "Remote site connectivity", "Field team applications", "Asset & inventory management", "Site monitoring", "Operations & maintenance"],
                },
                {
                  t: "Educational institution services development",
                  items: ["Service portal", "Staff or user app", "Wi-Fi network & building connectivity", "Administrative systems & ERP", "Attendance & surveillance", "Hosting & backup", "AI assistant for information & procedures"],
                },
              ]
          ).map((c) => (
            <Card key={c.t}>
              <h3 className="text-lg font-bold">{c.t}</h3>
              <ul className="mt-3 space-y-1.5">
                {c.items.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          منهجية العمل حسب القطاع — 8 مراحل
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "منهجية تربط الحل التقني بأهداف المؤسسة"
            : "A methodology linking the technology solution to the organization's goals"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {(isAr
            ? [
                { t: "فهم القطاع", d: "دراسة طبيعة الخدمات والعمليات والمستخدمين والمواقع والمتطلبات المؤسسية." },
                { t: "تحليل البيئة الحالية", d: "مراجعة الأنظمة والبيانات والبنية والشبكات والإجراءات والتحديات." },
                { t: "تحديد الأولويات", d: "اختيار المبادرات ذات القيمة الأعلى والجاهزية المناسبة للتنفيذ." },
                { t: "تصميم الحل", d: "تحديد الخدمات والمكونات والتكاملات والبنية التقنية وخطة التنفيذ." },
                { t: "تنفيذ مرحلي", d: "تنفيذ الحل على مراحل قابلة للاختبار والمراجعة والاعتماد." },
                { t: "التكامل والاختبار", d: "ربط الأنظمة والبيانات وتنفيذ الاختبارات الفنية وقبول المستخدم." },
                { t: "الإطلاق والتدريب", d: "تشغيل الحل وتدريب الموظفين والفرق الفنية والإدارية." },
                { t: "الدعم والتطوير", d: "متابعة الأداء ومعالجة الملاحظات وتوسيع الحل عند الحاجة." },
              ]
            : [
                { t: "Understanding the sector", d: "Studying services, operations, users, sites and institutional requirements." },
                { t: "Current environment analysis", d: "Reviewing systems, data, infrastructure, networks, procedures and challenges." },
                { t: "Priority setting", d: "Selecting initiatives with the highest value and readiness for delivery." },
                { t: "Solution design", d: "Defining services, components, integrations, architecture and the delivery plan." },
                { t: "Phased delivery", d: "Delivering the solution in phases that support testing, review and approval." },
                { t: "Integration & testing", d: "Connecting systems and data and running technical tests and user acceptance." },
                { t: "Go-live & training", d: "Operating the solution and training administrative and technical teams." },
                { t: "Support & evolution", d: "Monitoring performance, addressing feedback and expanding the solution as needed." },
              ]
          ).map((step, i) => (
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
          لماذا أربتك؟
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "لماذا تختار القطاعات الحيوية أربتك شريكًا تقنيًا؟"
            : "Why vital sectors choose ARABTEC as a technology partner"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {(isAr
            ? [
                { h: "خبرة تقنية منذ عام 1996", d: "خبرة ممتدة في الشبكات والاتصال والبنية التحتية والبرمجيات والأنظمة المتكاملة." },
                { h: "فهم بيئات العمل المختلفة", d: "نربط تصميم الحل بطبيعة القطاع والعمليات والمستخدمين والمواقع." },
                { h: "خدمات مترابطة", d: "نجمع بين الذكاء الاصطناعي و ERP والبرمجيات والسحابة والشبكات والأنظمة الذكية." },
                { h: "حلول قابلة للتخصيص", d: "يمكن تصميم النظام أو التكامل أو البنية وفق احتياجات المؤسسة الحالية." },
                { h: "تنفيذ مرحلي", d: "إمكانية البدء بمشروع محدد ثم التوسع وفق الأولويات والنتائج." },
                { h: "نقطة مسؤولية واحدة", d: "تنسيق التحليل والتصميم والتطوير والتوريد والتنفيذ والتكامل والدعم ضمن نطاق واضح." },
                { h: "دعم المؤسسات متعددة المواقع", d: "حلول لربط المقرات والفروع والمواقع التشغيلية وإدارتها بصورة مركزية." },
                { h: "خبرة مؤسسية", d: "خبرة في التعامل مع مؤسسات حكومية وصناعية وتعليمية وتجارية." },
              ]
            : [
                { h: "Technology expertise since 1996", d: "Extensive expertise across networks, connectivity, infrastructure, software and integrated systems." },
                { h: "Understanding different work environments", d: "We link solution design to each sector's nature, operations, users and sites." },
                { h: "Connected services", d: "We combine AI, ERP, software, cloud, networks and smart systems." },
                { h: "Customizable solutions", d: "Systems, integration and infrastructure can be designed around the organization's current needs." },
                { h: "Phased delivery", d: "Starting with a specific project then expanding based on priorities and outcomes." },
                { h: "Single point of accountability", d: "Coordinating analysis, design, development, supply, delivery, integration and support within a clear scope." },
                { h: "Support for multi-site organizations", d: "Solutions to connect and centrally manage headquarters, branches and operational sites." },
                { h: "Institutional experience", d: "Experience working with government, industrial, educational and commercial institutions." },
              ]
          ).map((c) => (
            <Card key={c.h}>
              <h3 className="font-bold text-base">{c.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          قسم الخدمات
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "استكشف خدمات أربتك التقنية" : "Explore ARABTEC technology services"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI Solutions & AI Agents", slug: "ai-agents", icon: Cpu },
            { ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & Business Applications", slug: "erp-business-applications", icon: Database },
            { ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software Development & System Integration", slug: "software-development", icon: Code2 },
            { ar: "السحابة والبنية التحتية", en: "Cloud & Infrastructure", slug: "cloud-infrastructure", icon: Cloud },
            { ar: "الشبكات والاتصال", en: "Networks & Connectivity", slug: "network-connectivity", icon: Network },
            { ar: "أنظمة المراقبة والحضور والتحكم بالدخول", en: "Surveillance, Attendance & Access Control", slug: "surveillance-access-control", icon: ShieldCheck },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-lg border border-border bg-card p-5 hover:border-[color:var(--brand-deep)]/40 hover:shadow-md transition"
              >
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-semibold">
                  {isAr ? s.ar : s.en}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:text-gold">
                  {isAr ? "استكشف الخدمة" : "Explore service"}
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          CTA
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
              ? "ما التحدي التقني الذي يواجه قطاعكم؟"
              : "What technology challenge does your sector face?"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
            {isAr
              ? "شاركوا فريق أربتك بطبيعة المؤسسة والقطاع والأنظمة الحالية والتحديات والأهداف المطلوبة، وسنعمل معكم على تحديد الخدمات والحلول التقنية المناسبة وإعداد تصور أولي لنطاق المشروع."
              : "Share your organization type, sector, current systems, challenges and goals with the ARABTEC team — we will work with you to identify the right services and solutions and prepare an initial project scope concept."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {isAr ? "اطلب استشارة حسب القطاع" : "Request a sector consultation"}
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
          نموذج التواصل المختصر
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "أخبرنا عن مؤسستكم واحتياجها التقني"
            : "Tell us about your organization and technology needs"}
        />

        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {isAr
              ? "يمكنكم التواصل مع فريق أربتك مباشرة عبر صفحة «تواصل معنا» لملء النموذج التفصيلي، حيث سيتمكن فريقنا من مراجعة طبيعة قطاعكم والاحتياجات التقنية لمؤسستكم وتقديم التصور المناسب."
              : "You can reach the ARABTEC team directly through the Contact page to fill in the detailed form. Our team will review your sector and technology needs and provide the right concept."}
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
            {(isAr
              ? [
                  "الاسم الكامل *",
                  "اسم الجهة أو المؤسسة *",
                  "المسمى الوظيفي",
                  "البريد الإلكتروني للعمل *",
                  "رقم الهاتف",
                  "الدولة",
                  "القطاع *",
                  "حجم المؤسسة",
                  "عدد الموظفين",
                  "عدد المواقع أو الفروع",
                  "الخدمات المطلوبة *",
                  "هل توجد أنظمة حالية؟",
                ]
              : [
                  "Full name *",
                  "Organization name *",
                  "Job title",
                  "Work email *",
                  "Phone number",
                  "Country",
                  "Sector *",
                  "Organization size",
                  "Number of employees",
                  "Number of sites or branches",
                  "Required services *",
                  "Existing systems?",
                ]
            ).map((x) => (
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
            ? "أسئلة شائعة عن الحلول التقنية حسب القطاع"
            : "Frequently asked questions about sector-specific technology solutions"}
        />

        <FAQ
          items={[
            {
              q: { ar: "ما القطاعات التي تخدمها أربتك؟", en: "Which sectors does ARABTEC serve?" },
              a: {
                ar: "تقدم أربتك حلولاً تقنية للجهات الحكومية والنفط والغاز والتعليم والرعاية الصحية والبنوك والخدمات المالية والشركات والمؤسسات، وفق نطاق الخدمات والقدرات المتاحة.",
                en: "ARABTEC provides technology solutions for government, oil & gas, education, healthcare, banking & finance, and corporates & enterprises — according to the scope of services and capabilities available.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلولاً تقنية للجهات الحكومية؟", en: "Does ARABTEC provide technology solutions for government entities?" },
              a: {
                ar: "نعم، يمكن تصميم حلول تشمل الذكاء الاصطناعي و ERP والبوابات الحكومية وتكامل الأنظمة والسحابة والشبكات وأنظمة الحضور والمراقبة.",
                en: "Yes — solutions can include AI, ERP, government portals, system integration, cloud, networks and attendance and surveillance systems.",
              },
            },
            {
              q: { ar: "هل تختلف الحلول التقنية من قطاع إلى آخر؟", en: "Do technology solutions differ by sector?" },
              a: {
                ar: "نعم، يتم تصميم الحل وفق طبيعة العمليات والمستخدمين والمواقع والأنظمة والبيانات والأهداف التشغيلية لكل مؤسسة.",
                en: "Yes — the solution is designed according to each organization's operations, users, sites, systems, data and operational goals.",
              },
            },
            {
              q: { ar: "هل يمكن دمج أكثر من خدمة ضمن مشروع واحد؟", en: "Can multiple services be combined in one project?" },
              a: {
                ar: "نعم، يمكن دمج البرمجيات و ERP والذكاء الاصطناعي والبنية التحتية والشبكات والأنظمة الذكية ضمن حل متكامل.",
                en: "Yes — software, ERP, AI, infrastructure, networks and smart systems can be combined into an integrated solution.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلولاً لقطاع النفط والغاز؟", en: "Does ARABTEC provide solutions for oil & gas?" },
              a: {
                ar: "يمكن تقديم حلول الشبكات وربط المواقع والبنية التحتية و ERP وتطوير التطبيقات وأنظمة المراقبة والحضور وفق احتياجات المشروع.",
                en: "Solutions can include networks, multi-site connectivity, infrastructure, ERP, application development, and surveillance and attendance systems — per project requirements.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلولاً للمؤسسات التعليمية؟", en: "Does ARABTEC provide solutions for educational institutions?" },
              a: {
                ar: "نعم، تشمل الحلول الممكنة الشبكات والبوابات والأنظمة الإدارية و ERP والحضور والمراقبة والسحابة والذكاء الاصطناعي المؤسسي.",
                en: "Yes — solutions can include networks, portals, administrative systems, ERP, attendance, surveillance, cloud and enterprise AI.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلولاً للمنشآت الصحية؟", en: "Does ARABTEC provide solutions for healthcare facilities?" },
              a: {
                ar: "يمكن تقديم حلول تقنية وإدارية تشمل الشبكات والبنية التحتية والبرمجيات و ERP والحضور والتحكم بالدخول، وفق نطاق المشروع.",
                en: "Technology and administrative solutions can include networks, infrastructure, software, ERP, attendance and access control — per project scope.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك حلولاً للبنوك والمؤسسات المالية؟", en: "Does ARABTEC provide solutions for banks and financial institutions?" },
              a: {
                ar: "يمكن تصميم حلول مؤسسية للبرمجيات والتكامل والذكاء الاصطناعي و ERP والبنية التحتية والشبكات وفق سياسات ومتطلبات المؤسسة.",
                en: "Enterprise solutions can be designed for software, integration, AI, ERP, infrastructure and networks — according to the institution's policies and requirements.",
              },
            },
            {
              q: { ar: "هل يمكن تنفيذ المشروع على مراحل؟", en: "Can the project be delivered in phases?" },
              a: {
                ar: "نعم، يمكن البدء بخدمة أو إدارة أو موقع محدد ثم التوسع إلى أنظمة وفروع أخرى وفق الأولويات.",
                en: "Yes — starting with a specific service, department or site, then expanding to other systems and branches based on priorities.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك استشارة قبل تحديد الحل؟", en: "Does ARABTEC provide consultation before defining the solution?" },
              a: {
                ar: "تبدأ المشروعات عادة بدراسة الاحتياج والأنظمة والعمليات والمواقع، ثم تحديد الحل والخدمات المناسبة.",
                en: "Projects typically start with studying needs, systems, operations and sites, then defining the right solution and services.",
              },
            },
            {
              q: { ar: "هل يمكن تطوير حل مخصص لقطاع غير مذكور؟", en: "Can a custom solution be developed for a sector not listed?" },
              a: {
                ar: "نعم، يتم تقييم احتياجات القطاعات الأخرى وتحديد الحلول التي تقع ضمن خدمات أربتك وقدراتها الفنية.",
                en: "Yes — needs of other sectors are assessed, and solutions are identified within ARABTEC's services and technical capabilities.",
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
                name: "ما القطاعات التي تخدمها أربتك؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تقدم أربتك حلولاً تقنية للجهات الحكومية والنفط والغاز والتعليم والرعاية الصحية والبنوك والخدمات المالية والشركات والمؤسسات.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن دمج أكثر من خدمة ضمن مشروع واحد؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن دمج البرمجيات و ERP والذكاء الاصطناعي والبنية التحتية والشبكات والأنظمة الذكية ضمن حل متكامل.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن تنفيذ المشروع على مراحل؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن البدء بخدمة أو إدارة أو موقع محدد ثم التوسع إلى أنظمة وفروع أخرى وفق الأولويات.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}