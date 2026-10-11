import { useParams, Navigate } from "react-router-dom";
import { useNavigate } from "@/lib/router";
import { useSearchParams } from "react-router-dom";
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
import { SERVICES } from "@/lib/services-data";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  MessageSquare,
  Handshake,
  Presentation,
  Building2,
  LifeBuoy,
  Video,
  Users,
  Calendar,
  Globe,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Database,
  Code2,
  Cloud,
  Network,
  ShieldCheck,
  Lock,
  Briefcase,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";

// ============================================================
// بيانات الاتصال الرسمية (مكان واحد للتحكم)
// ============================================================
const CONTACT = {
  phone: "+966532891000",
  phoneDisplay: "+966 53 289 1000",
  email: "contact@arabtec.com",
  addressAr: "الخبر مول، الحزام الذهبي",
  addressEn: "Al khobar mall, Al hizam Al thahabi",
  mapUrl: "https://maps.app.goo.gl/4tnGNj6Zu1NCWxTKA?g_st=iw",
};

// ============================================================
// Web3Forms Access Key
// ============================================================
const WEB3FORMS_ACCESS_KEY = "9daac662-70db-4422-94ad-37a0a82f02e0";

// ============================================================
// الصور
// ============================================================
import heroImg from "@/assets/enterprise-technology-consultation.webp";
import contactTeamImg from "@/assets/arabtec-contact-technology-team.jpg";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

// ============================================================
// Zod Schemas
// ============================================================

// ✅ النموذج الرئيسي
const mainFormSchema = z.object({
  name: z.string().trim().min(2, "الاسم قصير جدًا"),
  org: z.string().trim().min(2, "اسم الجهة مطلوب"),
  title: z.string().trim().optional().or(z.literal("")),
  email: z.string().trim().email("بريد إلكتروني غير صالح"),
  phone: z
    .string()
    .trim()
    .min(8, "رقم الهاتف قصير جدًا")
    .regex(/^[\d\s\-+()]+$/, "رقم الهاتف يحتوي على أحرف غير مسموحة"),
  country: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  sector: z.string().optional().or(z.literal("")),
  empCount: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || /^\d+$/.test(v), "يجب أن يكون رقمًا صحيحًا"),
  sites: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || /^\d+$/.test(v), "يجب أن يكون رقمًا صحيحًا"),
  reqType: z.string().min(1, "نوع الطلب مطلوب"),
  service: z.string().min(1, "الخدمة المطلوبة مطلوبة"),
  projectTitle: z.string().optional().or(z.literal("")),
  desc: z.string().trim().min(10, "يجب أن يكون وصف الاحتياج 10 أحرف على الأقل"),
  hasSystem: z.string().optional().or(z.literal("")),
  currentSystem: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  pref: z.string().optional().or(z.literal("")),
  wantMeeting: z.string().optional(),
  consent: z.union([z.literal("on"), z.literal("true"), z.boolean()]).refine(
    (v) => v === "on" || v === "true" || v === true,
    "يجب الموافقة على سياسة الخصوصية"
  ),
});

// ✅ نموذج الاجتماع الاستشاري
const meetingFormSchema = z.object({
  name: z.string().trim().min(2, "الاسم قصير جدًا"),
  org: z.string().trim().min(2, "اسم الجهة مطلوب"),
  email: z.string().trim().email("بريد إلكتروني غير صالح"),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^[\d\s\-+()]+$/.test(v),
      "رقم الهاتف يحتوي على أحرف غير مسموحة"
    ),
  meetingType: z.string().min(1, "نوع الاجتماع مطلوب"),
  service: z.string().min(1, "الخدمة المطلوبة مطلوبة"),
  date: z.string().optional().or(z.literal("")),
  time: z.string().optional().or(z.literal("")),
  timezone: z.string().optional().or(z.literal("")),
  duration: z.string().optional().or(z.literal("")),
  topic: z.string().trim().min(5, "موضوع الاجتماع قصير جدًا"),
  notes: z.string().optional().or(z.literal("")),
  consent: z.union([z.literal("on"), z.literal("true"), z.boolean()]).refine(
    (v) => v === "on" || v === "true" || v === true,
    "يجب الموافقة على سياسة الخصوصية"
  ),
});

// ✅ نموذج الشراكة
const partnerFormSchema = z.object({
  company: z.string().trim().min(2, "اسم الشركة مطلوب"),
  website: z
    .string()
    .trim()
    .min(1, "الموقع الإلكتروني مطلوب")
    .refine(
      (v) => /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(v),
      "رابط الموقع غير صالح"
    ),
  country: z.string().optional().or(z.literal("")),
  name: z.string().trim().min(2, "اسم مسؤول التواصل مطلوب"),
  title: z.string().optional().or(z.literal("")),
  email: z.string().trim().email("بريد إلكتروني غير صالح"),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^[\d\s\-+()]+$/.test(v),
      "رقم الهاتف يحتوي على أحرف غير مسموحة"
    ),
  companyType: z.string().min(1, "نوع الشركة مطلوب"),
  technology: z.string().trim().min(2, "مجال التقنية مطلوب"),
  partnershipType: z.string().min(1, "نوع الشراكة المقترح مطلوب"),
  solution: z.string().trim().min(10, "وصف الحل قصير جدًا"),
  markets: z.string().optional().or(z.literal("")),
  support: z.string().optional().or(z.literal("")),
  consent: z.union([z.literal("on"), z.literal("true"), z.boolean()]).refine(
    (v) => v === "on" || v === "true" || v === true,
    "يجب الموافقة على سياسة الخصوصية"
  ),
});

// ✅ النموذج المؤسسي الحكومي
const govFormSchema = z.object({
  entity: z.string().trim().min(2, "اسم الجهة مطلوب"),
  department: z.string().optional().or(z.literal("")),
  reference: z.string().optional().or(z.literal("")),
  docType: z.string().optional().or(z.literal("")),
  deadline: z.string().optional().or(z.literal("")),
  contactName: z.string().trim().min(2, "اسم مسؤول التواصل مطلوب"),
  officialEmail: z.string().trim().email("بريد إلكتروني غير صالح"),
});

// ============================================================
// دالة مساعدة لاستخراج أول رسالة خطأ من Zod
// ============================================================
function getFirstError(error: z.ZodError): string {
  return error.issues[0]?.message || "بيانات غير صالحة";
}

// ============================================================
// دالة مساعدة لإرسال البيانات إلى Web3Forms
// ============================================================
async function sendToWeb3Forms(payload: Record<string, any>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "ARABTEC Website",
      ...payload,
    }),
  });
  return res.json();
}

// ============================================================
// 1. أنواع الطلبات (6 بطاقات)
// ============================================================
const requestTypes = [
  {
    key: "consult",
    ar: "استشارة تقنية",
    en: "Technical consultation",
    descAr: "لمناقشة التحديات الحالية، الأنظمة المستخدمة، فرص التطوير والحلول المناسبة للمؤسسة.",
    descEn: "Discuss current challenges, existing systems, development opportunities and suitable solutions.",
    icon: MessageSquare,
  },
  {
    key: "rfp",
    ar: "طلب عرض فني",
    en: "Technical proposal",
    descAr: "لإرسال متطلبات مشروع محدد والحصول على مراجعة أولية لنطاق الحل والتنفيذ.",
    descEn: "Submit specific project requirements and get an initial review of solution and delivery scope.",
    icon: FileText,
  },
  {
    key: "demo",
    ar: "طلب عرض توضيحي",
    en: "Demo request",
    descAr: "لطلب عرض لحلول الذكاء الاصطناعي أو ERP أو الأنظمة والمنصات المتاحة.",
    descEn: "Request a demo of AI, ERP, or available systems and platforms.",
    icon: Presentation,
  },
  {
    key: "visit",
    ar: "طلب زيارة ميدانية",
    en: "Site survey",
    descAr: "لمشروعات الشبكات والبنية التحتية والمراقبة والحضور والتحكم بالدخول التي تحتاج إلى معاينة الموقع.",
    descEn: "For networks, infrastructure, surveillance, attendance and access control projects requiring a site visit.",
    icon: Building2,
  },
  {
    key: "partner",
    ar: "طلب شراكة",
    en: "Partnership request",
    descAr: "للتواصل بشأن شراكة تقنية أو تعاون مع مزود أو مصنع أو شركة حلول.",
    descEn: "Contact us about a technology partnership with a vendor, manufacturer or solution company.",
    icon: Handshake,
  },
  {
    key: "support",
    ar: "دعم مشروع قائم",
    en: "Existing project support",
    descAr: "للتواصل بشأن مشروع أو نظام أو خدمة قائمة لدى أربتك.",
    descEn: "Contact us about an existing project, system or service with ARABTEC.",
    icon: LifeBuoy,
  },
];

// ============================================================
// 2. الدول (8 خيارات)
// ============================================================
const countries = [
  { value: "sa", ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
  { value: "ae", ar: "الإمارات العربية المتحدة", en: "United Arab Emirates" },
  { value: "bh", ar: "البحرين", en: "Bahrain" },
  { value: "kw", ar: "الكويت", en: "Kuwait" },
  { value: "om", ar: "عُمان", en: "Oman" },
  { value: "qa", ar: "قطر", en: "Qatar" },
  { value: "jo", ar: "الأردن", en: "Jordan" },
  { value: "other", ar: "دولة أخرى", en: "Other country" },
];

// ============================================================
// 3. القطاعات (14 خيار)
// ============================================================
const sectors = [
  { value: "government", ar: "جهة حكومية", en: "Government entity" },
  { value: "oil-gas", ar: "النفط والغاز", en: "Oil & gas" },
  { value: "industrial", ar: "قطاع صناعي", en: "Industrial" },
  { value: "education", ar: "التعليم", en: "Education" },
  { value: "healthcare", ar: "الرعاية الصحية", en: "Healthcare" },
  { value: "banking", ar: "البنوك والخدمات المالية", en: "Banking & finance" },
  { value: "enterprise", ar: "شركة أو مؤسسة", en: "Company or enterprise" },
  { value: "retail", ar: "التجزئة والتجارة", en: "Retail & commerce" },
  { value: "hospitality", ar: "الضيافة", en: "Hospitality" },
  { value: "contracting", ar: "المقاولات", en: "Contracting" },
  { value: "telecom", ar: "الاتصالات", en: "Telecommunications" },
  { value: "other", ar: "غير ذلك", en: "Other" },
];

// ============================================================
// 4. أنواع الطلب (8 خيارات للنموذج)
// ============================================================
const requestTypeOptions = [
  { value: "consult", ar: "استشارة تقنية", en: "Technical consultation" },
  { value: "rfp", ar: "طلب عرض فني", en: "Technical proposal" },
  { value: "demo", ar: "طلب عرض توضيحي", en: "Demo request" },
  { value: "visit", ar: "طلب زيارة ميدانية", en: "Site survey" },
  { value: "partner", ar: "طلب شراكة", en: "Partnership request" },
  { value: "support", ar: "دعم مشروع قائم", en: "Existing project support" },
  { value: "info", ar: "طلب معلومات مؤسسية", en: "Institutional information request" },
  { value: "other", ar: "غير ذلك", en: "Other" },
];

// ============================================================
// 5. الخدمات المطلوبة (8 خيارات)
// ============================================================
const serviceOptions = [
  { value: "ai-agents", ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI & AI Agents solutions" },
  { value: "erp", ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & business applications" },
  { value: "software-development", ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software development & system integration" },
  { value: "cloud-infrastructure", ar: "السحابة والبنية التحتية", en: "Cloud & infrastructure" },
  { value: "network-connectivity", ar: "الشبكات والاتصال", en: "Networks & connectivity" },
  { value: "surveillance-access-control", ar: "أنظمة المراقبة والحضور والتحكم بالدخول", en: "Surveillance, attendance & access control" },
  { value: "integrated", ar: "حل تقني متكامل", en: "Integrated technology solution" },
  { value: "unsure", ar: "غير محدد وأحتاج إلى استشارة", en: "Not specified — need consultation" },
];

// ============================================================
// 6. المدة المتوقعة
// ============================================================
const timelineOptions = [
  { value: "now", ar: "فورًا", en: "Immediately" },
  { value: "1m", ar: "خلال شهر", en: "Within 1 month" },
  { value: "3m", ar: "خلال ثلاثة أشهر", en: "Within 3 months" },
  { value: "6m", ar: "خلال ستة أشهر", en: "Within 6 months" },
  { value: "1y", ar: "خلال سنة", en: "Within 1 year" },
  { value: "unsure", ar: "غير محدد", en: "Not specified" },
];

// ============================================================
// 7. طرق التواصل المفضلة
// ============================================================
const contactMethods = [
  { value: "email", ar: "البريد الإلكتروني", en: "Email" },
  { value: "phone", ar: "الهاتف", en: "Phone" },
  { value: "online", ar: "اجتماع عبر الإنترنت", en: "Online meeting" },
  { value: "inperson", ar: "اجتماع حضوري", en: "In-person meeting" },
];

// ============================================================
// 8. تواصل حسب الخدمة
// ============================================================
const serviceContacts = [
  {
    icon: Cpu,
    slug: "ai-agents",
    ar: "حلول الذكاء الاصطناعي و AI Agents",
    en: "AI & AI Agents solutions",
    descAr: "لطلب عرض توضيحي أو مناقشة حالة استخدام للموظفين أو المتعاملين أو الوثائق والعمليات.",
    descEn: "Request a demo or discuss a use case for employees, customers, documents or operations.",
  },
  {
    icon: Database,
    slug: "erp",
    ar: "أنظمة ERP وتطبيقات الأعمال",
    en: "ERP & business applications",
    descAr: "لمناقشة الوحدات المطلوبة والتخصيص والتكامل وترحيل البيانات.",
    descEn: "Discuss required modules, customization, integration and data migration.",
  },
  {
    icon: Code2,
    slug: "software-development",
    ar: "تطوير البرمجيات وتكامل الأنظمة",
    en: "Software development & system integration",
    descAr: "لطلب تطوير نظام أو منصة أو تطبيق أو بوابة أو واجهات API.",
    descEn: "Request development of a system, platform, app, portal or API.",
  },
  {
    icon: Cloud,
    slug: "cloud-infrastructure",
    ar: "السحابة والبنية التحتية",
    en: "Cloud & infrastructure",
    descAr: "لتقييم الخوادم والتخزين والسحابة والنسخ الاحتياطي ومراكز البيانات.",
    descEn: "Assess servers, storage, cloud, backup and data centers.",
  },
  {
    icon: Network,
    slug: "network-connectivity",
    ar: "الشبكات والاتصال",
    en: "Networks & connectivity",
    descAr: "لطلب تصميم شبكة أو ربط فروع أو ألياف ضوئية أو Wi-Fi أو VoIP.",
    descEn: "Request network design, branch connectivity, fiber, Wi-Fi or VoIP.",
  },
  {
    icon: ShieldCheck,
    slug: "surveillance-access-control",
    ar: "المراقبة والحضور والتحكم بالدخول",
    en: "Surveillance, attendance & access control",
    descAr: "لطلب زيارة ميدانية أو عرض فني للكاميرات والحضور وأنظمة الدخول.",
    descEn: "Request a site survey or technical proposal for cameras, attendance and access systems.",
  },
];

// ============================================================
// 9. خطوات ما بعد الإرسال
// ============================================================
const afterSubmitSteps = [
  {
    ar: "استلام الطلب",
    en: "Request received",
    descAr: "يصل الطلب إلى الفريق المختص مع البيانات والمرفقات المقدمة.",
    descEn: "The request reaches the appropriate team with the submitted data and attachments.",
  },
  {
    ar: "مراجعة المعلومات",
    en: "Information review",
    descAr: "تتم مراجعة طبيعة المؤسسة والخدمة المطلوبة ونطاق الاحتياج الأولي.",
    descEn: "Reviewing the organization, required service and initial scope of need.",
  },
  {
    ar: "التواصل مع مقدم الطلب",
    en: "Contacting the requester",
    descAr: "يتواصل الفريق للحصول على معلومات إضافية أو تحديد اجتماع.",
    descEn: "The team reaches out for additional information or to schedule a meeting.",
  },
  {
    ar: "تحليل المتطلبات",
    en: "Requirements analysis",
    descAr: "تتم مناقشة الأنظمة والمستخدمين والمواقع والتكاملات والمتطلبات الفنية.",
    descEn: "Discussing systems, users, sites, integrations and technical requirements.",
  },
  {
    ar: "تحديد الخطوة التالية",
    en: "Defining next step",
    descAr: "قد تشمل الخطوة التالية اجتماعًا فنيًا، زيارة ميدانية، عرضًا توضيحيًا أو إعداد نطاق عمل أولي.",
    descEn: "The next step may be a technical meeting, site visit, demo or drafting an initial scope.",
  },
];

// ============================================================
// 10. المعلومات المفيدة قبل التواصل
// ============================================================
const usefulInfoItems = [
  { ar: "نبذة عن المؤسسة والقطاع", en: "Brief about the organization & sector" },
  { ar: "الهدف من المشروع", en: "Project objective" },
  { ar: "المشكلة أو التحدي الحالي", en: "Current problem or challenge" },
  { ar: "الخدمات أو الأنظمة المطلوبة", en: "Required services or systems" },
  { ar: "عدد المستخدمين", en: "Number of users" },
  { ar: "عدد المواقع أو الفروع", en: "Number of sites or branches" },
  { ar: "الأنظمة الحالية", en: "Current systems" },
  { ar: "التكاملات المطلوبة", en: "Required integrations" },
  { ar: "المدة المتوقعة", en: "Expected timeline" },
  { ar: "الميزانية التقديرية إن أمكن", en: "Estimated budget if possible" },
  { ar: "وثيقة نطاق العمل أو RFP إن وجدت", en: "Scope of work or RFP if available" },
  { ar: "الشخص المسؤول عن المتابعة", en: "Person responsible for follow-up" },
];

export default function ContactPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const isAr = lang === "ar";

  // قراءة query params لتحديد نوع الطلب/الخدمة تلقائيًا
  const queryRequest = searchParams.get("request") || "";
  const queryService = searchParams.get("service") || "";

  const [reqType, setReqType] = useState(queryRequest || "consult");
  const [service, setService] = useState(queryService || "");
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [error, setError] = useState<string>("");
  const [mapLoaded, setMapLoaded] = useState(false);

  // مزامنة query params لو تغيرت
  useEffect(() => {
    if (queryRequest) setReqType(queryRequest);
    if (queryService) setService(queryService);
  }, [queryRequest, queryService]);

  // ============================================================
  // Submit Handler — النموذج الرئيسي
  // ============================================================
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // استخراج كل الحقول
    const rawData = {
      name: String(fd.get("name") || ""),
      org: String(fd.get("org") || ""),
      title: String(fd.get("title") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      country: String(fd.get("country") || ""),
      city: String(fd.get("city") || ""),
      sector: String(fd.get("sector") || ""),
      empCount: String(fd.get("empCount") || ""),
      sites: String(fd.get("sites") || ""),
      reqType,
      service,
      projectTitle: String(fd.get("projectTitle") || ""),
      desc: String(fd.get("desc") || ""),
      hasSystem: String(fd.get("hasSystem") || ""),
      currentSystem: String(fd.get("currentSystem") || ""),
      timeline: String(fd.get("timeline") || ""),
      pref: String(fd.get("pref") || ""),
      wantMeeting: String(fd.get("wantMeeting") || ""),
      consent: (fd.get("consent") as string | null) || "",
    };

    // ✅ التحقق بـ Zod
    const result = mainFormSchema.safeParse(rawData);
    if (!result.success) {
      setStatus("error");
      setError(getFirstError(result.error));
      return;
    }

    const data = result.data;

    // تجهيز البيانات للإرسال
    const payload = {
      subject: `طلب جديد من موقع Arabtec — ${data.name}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      organization: data.org,
      title: data.title,
      country: data.country,
      city: data.city,
      sector: data.sector,
      employees_count: data.empCount,
      sites_count: data.sites,
      request_type: data.reqType,
      service: data.service,
      project_title: data.projectTitle,
      description: data.desc,
      has_existing_system: data.hasSystem,
      current_system: data.currentSystem,
      timeline: data.timeline,
      preferred_contact: data.pref,
      wants_meeting: data.wantMeeting || "no",
      page_language: lang,
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await sendToWeb3Forms(payload);

      if (res.success) {
        nav({ to: "/thank-you/$type", params: { type: reqType } });
      } else {
        setStatus("error");
        setError(
          isAr
            ? "تعذر إرسال الطلب حاليًا. يرجى المحاولة مرة أخرى أو التواصل معنا عبر البريد الإلكتروني."
            : "Failed to send your request. Please try again or contact us via email."
        );
      }
    } catch {
      setStatus("error");
      setError(
        isAr
          ? "خطأ في الاتصال. يرجى المحاولة مرة أخرى."
          : "Connection error. Please try again."
      );
    }
  }

  // ============================================================
  // Submit Handler — نموذج الاجتماع الاستشاري
  // ============================================================
  async function onMeetingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const rawData = {
      name: String(fd.get("m-name") || ""),
      org: String(fd.get("m-org") || ""),
      email: String(fd.get("m-email") || ""),
      phone: String(fd.get("m-phone") || ""),
      meetingType: String(fd.get("m-type") || ""),
      service: String(fd.get("m-service") || ""),
      date: String(fd.get("m-date") || ""),
      time: String(fd.get("m-time") || ""),
      timezone: String(fd.get("m-tz") || ""),
      duration: String(fd.get("m-duration") || ""),
      topic: String(fd.get("m-topic") || ""),
      notes: String(fd.get("m-notes") || ""),
      consent: (fd.get("m-consent") as string | null) || "",
    };

    // ✅ التحقق بـ Zod
    const result = meetingFormSchema.safeParse(rawData);
    if (!result.success) {
      setStatus("error");
      setError(getFirstError(result.error));
      return;
    }

    const data = result.data;

    const payload = {
      subject: `طلب اجتماع استشاري — ${data.name} من ${data.org}`,
      name: data.name,
      organization: data.org,
      email: data.email,
      phone: data.phone,
      meeting_type: data.meetingType,
      service: data.service,
      preferred_date: data.date,
      preferred_time: data.time,
      time_zone: data.timezone,
      duration: data.duration,
      meeting_topic: data.topic,
      additional_notes: data.notes,
      page_language: lang,
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await sendToWeb3Forms(payload);

      if (res.success) {
        nav({ to: "/thank-you/$type", params: { type: "meeting" } });
      } else {
        setStatus("error");
        setError(
          isAr
            ? "تعذر إرسال الطلب حاليًا. حاول مرة أخرى."
            : "Failed to send. Try again."
        );
      }
    } catch {
      setStatus("error");
      setError(isAr ? "خطأ في الاتصال." : "Connection error.");
    }
  }

  // ============================================================
  // Submit Handler — نموذج الشراكة
  // ============================================================
  async function onPartnerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const rawData = {
      company: String(fd.get("p-company") || ""),
      website: String(fd.get("p-website") || ""),
      country: String(fd.get("p-country") || ""),
      name: String(fd.get("p-name") || ""),
      title: String(fd.get("p-title") || ""),
      email: String(fd.get("p-email") || ""),
      phone: String(fd.get("p-phone") || ""),
      companyType: String(fd.get("p-type") || ""),
      technology: String(fd.get("p-tech") || ""),
      partnershipType: String(fd.get("p-partnership") || ""),
      solution: String(fd.get("p-solution") || ""),
      markets: String(fd.get("p-markets") || ""),
      support: String(fd.get("p-support") || ""),
      consent: (fd.get("p-consent") as string | null) || "",
    };

    // ✅ التحقق بـ Zod
    const result = partnerFormSchema.safeParse(rawData);
    if (!result.success) {
      setStatus("error");
      setError(getFirstError(result.error));
      return;
    }

    const data = result.data;

    const payload = {
      subject: `طلب شراكة تقنية — ${data.company}`,
      company_name: data.company,
      website: data.website,
      country: data.country,
      contact_person: data.name,
      job_title: data.title,
      email: data.email,
      phone: data.phone,
      company_type: data.companyType,
      technology_area: data.technology,
      partnership_type: data.partnershipType,
      solution_description: data.solution,
      target_markets: data.markets,
      support_available: data.support,
      page_language: lang,
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await sendToWeb3Forms(payload);

      if (res.success) {
        nav({ to: "/thank-you/$type", params: { type: "partner" } });
      } else {
        setStatus("error");
        setError(
          isAr
            ? "تعذر إرسال الطلب حاليًا. حاول مرة أخرى."
            : "Failed to send. Try again."
        );
      }
    } catch {
      setStatus("error");
      setError(isAr ? "خطأ في الاتصال." : "Connection error.");
    }
  }

  // ============================================================
  // Submit Handler — نموذج الطلبات المؤسسية الحكومية
  // ============================================================
  async function onGovernmentSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const rawData = {
      entity: String(fd.get("g-entity") || ""),
      department: String(fd.get("g-department") || ""),
      reference: String(fd.get("g-ref") || ""),
      docType: String(fd.get("g-doctype") || ""),
      deadline: String(fd.get("g-deadline") || ""),
      contactName: String(fd.get("g-name") || ""),
      officialEmail: String(fd.get("g-email") || ""),
    };

    // ✅ التحقق بـ Zod
    const result = govFormSchema.safeParse(rawData);
    if (!result.success) {
      setStatus("error");
      setError(getFirstError(result.error));
      return;
    }

    const data = result.data;

    const payload = {
      subject: `طلب مؤسسي حكومي — ${data.entity}`,
      entity_name: data.entity,
      department: data.department,
      reference_number: data.reference,
      document_type: data.docType,
      response_deadline: data.deadline,
      contact_person: data.contactName,
      official_email: data.officialEmail,
      page_language: lang,
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await sendToWeb3Forms(payload);

      if (res.success) {
        nav({ to: "/thank-you/$type", params: { type: "rfp" } });
      } else {
        setStatus("error");
        setError(
          isAr
            ? "تعذر إرسال الطلب حاليًا. حاول مرة أخرى."
            : "Failed to send. Try again."
        );
      }
    } catch {
      setStatus("error");
      setError(isAr ? "خطأ في الاتصال." : "Connection error.");
    }
  }

  return (
    <>
      {/* ============================================================
          JSON-LD
          ============================================================ */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "/contact",
          mainEntity: {
            "@type": "Organization",
            name: "ARABTEC",
            alternateName: "أربتك",
            foundingDate: "1996",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: CONTACT.phone,
                email: CONTACT.email,
                areaServed: "SA",
              },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: isAr ? "الرئيسية" : "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: isAr ? "تواصل معنا" : "Contact", item: "/contact" },
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
            { label: { ar: "تواصل معنا", en: "Contact" } },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
          {/* الصورة — يسار */}
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={
                isAr
                  ? "اجتماع استشاري لمناقشة مشروع تقني للجهات الحكومية والمؤسسات"
                  : "Consultation meeting to discuss a technology project for government and enterprises"
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
              {isAr ? "ابدأ مشروعك مع أربتك" : "Start your project with ARABTEC"}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "تواصل معنا لمناقشة احتياجات مؤسستكم التقنية"
                : "Contact us to discuss your organization's technology needs"}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isAr
                ? "سواء كنتم تخططون لتطوير منصة رقمية، تطبيق نظام ERP، إطلاق حل ذكاء اصطناعي، تحديث البنية التحتية، ربط الفروع والمواقع أو تنفيذ أنظمة المراقبة والحضور والتحكم بالدخول، يمكن لفريق أربتك مساعدتكم على دراسة الاحتياج وتحديد نطاق الحل المناسب."
                : "Whether you are planning a digital platform, an ERP system, launching an AI solution, modernizing infrastructure, connecting branches and sites, or implementing surveillance, attendance and access control — the ARABTEC team can help you study the need and define the right solution scope."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "شاركوا معنا معلومات المشروع والأهداف والتحديات الحالية، وسيتولى الفريق المختص مراجعة الطلب والتواصل معكم لمناقشة المتطلبات والخطوات التالية."
                : "Share your project information, objectives and current challenges — our specialized team will review your request and contact you to discuss requirements and next steps."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="rounded-md bg-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                {isAr ? "أرسل طلب مشروع" : "Submit project request"}
              </a>
              <a
                href="#meeting-request"
                className="rounded-md border border-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-deep)]/5 transition"
              >
                {isAr ? "اطلب اجتماعًا استشاريًا" : "Request a consultation meeting"}
              </a>
            </div>

            {/* شريط مختصر */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { ar: "استشارة تقنية", en: "Technical consultation" },
                { ar: "طلب عرض فني", en: "Technical proposal" },
                { ar: "مشروع حكومي", en: "Government project" },
                { ar: "طلب شراكة", en: "Partnership" },
                { ar: "زيارة ميدانية", en: "Site survey" },
                { ar: "مشروع دعم قائم", en: "Existing project support" },
              ].map((x) => (
                <span
                  key={x.en}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium"
                >
                  {isAr ? x.ar : x.en}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          2. كيف يمكننا مساعدتكم؟ — 6 بطاقات
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr ? "اختر نوع الطلب المناسب" : "Choose the right request type"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {requestTypes.map((r) => {
            const Icon = r.icon;
            const isActive = reqType === r.key;
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => {
                  setReqType(r.key);
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-start rounded-xl border bg-card p-5 transition ${
                  isActive
                    ? "border-[color:var(--brand-deep)] shadow-md"
                    : "border-border hover:border-[color:var(--brand-deep)]/40 hover:shadow-sm"
                }`}
              >
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">
                  {isAr ? r.ar : r.en}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? r.descAr : r.descEn}
                </p>
              </button>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          3. نموذج التواصل الرئيسي
          ============================================================ */}
      <Section id="contact-form">
        <SectionHead
          title={isAr ? "أخبرنا عن احتياجكم" : "Tell us about your need"}
        />

        <form
          onSubmit={onSubmit}
          noValidate
          className="grid gap-5 md:grid-cols-2 rounded-2xl border border-border bg-card p-6"
        >
          {/* البيانات الأساسية */}
          <div className="md:col-span-2">
            <h3 className="font-bold mb-3">
              {isAr ? "بيانات التواصل" : "Contact information"}
            </h3>
          </div>

          <Field
            label={isAr ? "الاسم الكامل *" : "Full name *"}
            name="name"
            required
          />
          <Field
            label={isAr ? "اسم الجهة أو المؤسسة *" : "Organization name *"}
            name="org"
            required
          />
          <Field
            label={isAr ? "المسمى الوظيفي" : "Job title"}
            name="title"
          />
          <Field
            label={isAr ? "البريد الإلكتروني للعمل *" : "Work email *"}
            name="email"
            type="email"
            required
          />
          <Field
            label={isAr ? "رقم الهاتف *" : "Phone number *"}
            name="phone"
            type="tel"
            required
          />
          <Select
            label={isAr ? "الدولة" : "Country"}
            name="country"
            defaultValue="sa"
            options={countries.map((c) => ({
              value: c.value,
              label: isAr ? c.ar : c.en,
            }))}
          />
          <Field
            label={isAr ? "المدينة" : "City"}
            name="city"
          />

          {/* بيانات المؤسسة */}
          <div className="md:col-span-2 mt-2">
            <h3 className="font-bold mb-3">
              {isAr ? "بيانات المؤسسة" : "Organization details"}
            </h3>
          </div>

          <Select
            label={isAr ? "القطاع *" : "Sector *"}
            name="sector"
            options={sectors.map((s) => ({
              value: s.value,
              label: isAr ? s.ar : s.en,
            }))}
          />
          <Field
            label={isAr ? "عدد الموظفين" : "Number of employees"}
            name="empCount"
            type="number"
          />
          <Field
            label={isAr ? "عدد المواقع أو الفروع" : "Number of sites or branches"}
            name="sites"
            type="number"
          />

          {/* تفاصيل الطلب */}
          <div className="md:col-span-2 mt-2">
            <h3 className="font-bold mb-3">
              {isAr ? "تفاصيل الطلب" : "Request details"}
            </h3>
          </div>

          <Select
            label={isAr ? "نوع الطلب *" : "Request type *"}
            name="reqType"
            value={reqType}
            onChange={(v) => setReqType(v)}
            options={requestTypeOptions.map((r) => ({
              value: r.value,
              label: isAr ? r.ar : r.en,
            }))}
          />
          <Select
            label={isAr ? "الخدمة المطلوبة *" : "Required service *"}
            name="service"
            value={service}
            onChange={setService}
            options={serviceOptions.map((s) => ({
              value: s.value,
              label: isAr ? s.ar : s.en,
            }))}
          />
          <Field
            label={isAr ? "عنوان المشروع" : "Project title"}
            name="projectTitle"
            className="md:col-span-2"
          />
          <Textarea
            label={isAr ? "وصف الاحتياج أو التحدي *" : "Describe your need or challenge *"}
            name="desc"
            required
            className="md:col-span-2"
          />

          <Select
            label={isAr ? "هل يوجد نظام أو حل حالي؟" : "Do you have an existing system?"}
            name="hasSystem"
            options={[
              { value: "yes", label: isAr ? "نعم" : "Yes" },
              { value: "no", label: isAr ? "لا" : "No" },
            ]}
          />
          <Field
            label={isAr ? "اسم النظام الحالي إن وجد" : "Current system name (if any)"}
            name="currentSystem"
          />

          <Select
            label={isAr ? "المدة المتوقعة لبدء المشروع" : "Expected project start"}
            name="timeline"
            options={timelineOptions.map((t2) => ({
              value: t2.value,
              label: isAr ? t2.ar : t2.en,
            }))}
          />
          <Select
            label={isAr ? "طريقة التواصل المفضلة" : "Preferred contact method"}
            name="pref"
            options={contactMethods.map((c) => ({
              value: c.value,
              label: isAr ? c.ar : c.en,
            }))}
          />

          <label className="md:col-span-2 flex items-center gap-2 text-sm">
            <input type="checkbox" name="wantMeeting" />
            <span>{isAr ? "هل ترغب في اجتماع؟" : "Would you like a meeting?"}</span>
          </label>

          {/* المرفقات */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium block mb-1">
              {isAr ? "إرفاق ملف" : "Attach a file"}
            </label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png"
              className="text-sm"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              {isAr
                ? "يمكنكم إرفاق نطاق العمل أو وثيقة RFP أو المتطلبات الفنية. الحد الأقصى: 10 MB"
                : "You can attach scope of work, RFP or technical requirements. Max: 10 MB"}
            </p>
          </div>

          {/* الموافقة */}
          <label className="md:col-span-2 flex items-start gap-2 text-sm">
            <input type="checkbox" name="consent" required className="mt-1" />
            <span>
              {isAr
                ? "أوافق على استخدام بياناتي للتواصل معي ومراجعة طلبي وفق "
                : "I agree to the use of my data for contact and review of my request per "}
              <a href="/privacy-policy" className="text-brand-deep hover:underline">
                {isAr ? "سياسة الخصوصية" : "privacy policy"}
              </a>
              .
            </span>
          </label>

          {status === "error" && (
            <div className="md:col-span-2 text-sm text-destructive">{error}</div>
          )}

          <div className="md:col-span-2">
            <Button type="submit" disabled={status === "submitting"} size="lg">
              {status === "submitting"
                ? isAr
                  ? "جارٍ إرسال طلبكم..."
                  : "Submitting your request..."
                : isAr
                ? "إرسال الطلب"
                : "Submit request"}
            </Button>
          </div>
        </form>
      </Section>

      {/* ============================================================
          4. طلب اجتماع استشاري
          ============================================================ */}
      <Section id="meeting-request" className="bg-secondary">
        <SectionHead
          title={isAr ? "احجز اجتماعًا لمناقشة المشروع" : "Book a meeting to discuss your project"}
          intro={
            isAr
              ? "يمكنكم طلب اجتماع استشاري مع فريق أربتك لمناقشة أهداف المشروع والأنظمة الحالية والمتطلبات الفنية والخطوات المقترحة."
              : "You can request a consultation meeting with the ARABTEC team to discuss project objectives, current systems, technical requirements and proposed next steps."
          }
        />

        <form
          onSubmit={onMeetingSubmit}
          noValidate
          className="grid gap-5 md:grid-cols-2 rounded-2xl border border-border bg-card p-6 mt-6"
        >
          <Field
            label={isAr ? "الاسم الكامل *" : "Full name *"}
            name="m-name"
            required
          />
          <Field
            label={isAr ? "اسم الجهة *" : "Organization name *"}
            name="m-org"
            required
          />
          <Field
            label={isAr ? "البريد الإلكتروني للعمل *" : "Work email *"}
            name="m-email"
            type="email"
            required
          />
          <Field
            label={isAr ? "رقم الهاتف" : "Phone number"}
            name="m-phone"
            type="tel"
          />

          <Select
            label={isAr ? "نوع الاجتماع *" : "Meeting type *"}
            name="m-type"
            options={[
              { value: "online", label: isAr ? "اجتماع عبر الإنترنت" : "Online meeting" },
              { value: "inperson", label: isAr ? "اجتماع حضوري" : "In-person meeting" },
              { value: "phone", label: isAr ? "مكالمة هاتفية" : "Phone call" },
            ]}
          />
          <Select
            label={isAr ? "الخدمة المطلوبة *" : "Required service *"}
            name="m-service"
            options={serviceOptions.map((s) => ({
              value: s.value,
              label: isAr ? s.ar : s.en,
            }))}
          />

          <Field
            label={isAr ? "التاريخ المفضل" : "Preferred date"}
            name="m-date"
            type="date"
          />
          <Field
            label={isAr ? "الوقت المفضل" : "Preferred time"}
            name="m-time"
            type="time"
          />

          <Field
            label={isAr ? "المنطقة الزمنية" : "Time zone"}
            name="m-tz"
            defaultValue={isAr ? "توقيت السعودية (GMT+3)" : "Saudi time (GMT+3)"}
          />
          <Select
            label={isAr ? "مدة الاجتماع" : "Meeting duration"}
            name="m-duration"
            options={[
              { value: "30", label: isAr ? "30 دقيقة" : "30 minutes" },
              { value: "45", label: isAr ? "45 دقيقة" : "45 minutes" },
              { value: "60", label: isAr ? "60 دقيقة" : "60 minutes" },
            ]}
          />

          <Textarea
            label={isAr ? "موضوع الاجتماع *" : "Meeting topic *"}
            name="m-topic"
            required
            className="md:col-span-2"
          />
          <Textarea
            label={isAr ? "ملاحظات إضافية" : "Additional notes"}
            name="m-notes"
            className="md:col-span-2"
          />

          <label className="md:col-span-2 flex items-start gap-2 text-sm">
            <input type="checkbox" name="m-consent" required className="mt-1" />
            <span>
              {isAr
                ? "أوافق على سياسة الخصوصية ومعالجة بياناتي للتواصل بشأن الاجتماع."
                : "I agree to the privacy policy and processing of my data for contact about the meeting."}
            </span>
          </label>

          <div className="md:col-span-2">
            <p className="text-xs text-muted-foreground mb-3">
              {isAr
                ? "ملاحظة: لا يُعد الموعد مؤكدًا بمجرد إرسال النموذج. سيتم التواصل معكم لتأكيد الموعد أو اقتراح وقت بديل."
                : "Note: The meeting is not confirmed upon form submission. We will contact you to confirm the time or propose an alternative."}
            </p>
            <Button type="submit" disabled={status === "submitting"} size="lg">
              {isAr ? "طلب موعد اجتماع" : "Request meeting"}
            </Button>
          </div>
        </form>
      </Section>

      {/* ============================================================
          5. بيانات التواصل الرسمية
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "بيانات التواصل الرسمية" : "Official contact details"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          <Card>
            <Phone className="h-5 w-5 text-[color:var(--gold)] mb-3" />
            <h3 className="font-bold mb-2">{isAr ? "الهاتف" : "Phone"}</h3>
            <a
              href={`tel:${CONTACT.phone}`}
              dir="ltr"
              className="text-sm text-brand-deep hover:underline"
            >
              {CONTACT.phoneDisplay}
            </a>
          </Card>
          <Card>
            <Mail className="h-5 w-5 text-[color:var(--gold)] mb-3" />
            <h3 className="font-bold mb-2">{isAr ? "البريد الإلكتروني" : "Email"}</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-brand-deep hover:underline"
            >
              {CONTACT.email}
            </a>
          </Card>
          <Card>
            <MapPin className="h-5 w-5 text-[color:var(--gold)] mb-3" />
            <h3 className="font-bold mb-2">{isAr ? "العنوان" : "Address"}</h3>
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-deep hover:underline"
            >
              {isAr ? CONTACT.addressAr : CONTACT.addressEn}
            </a>
          </Card>
          <Card>
            <Clock className="h-5 w-5 text-[color:var(--gold)] mb-3" />
            <h3 className="font-bold mb-2">{isAr ? "ساعات العمل" : "Working hours"}</h3>
            <p className="text-sm text-muted-foreground">
              {isAr ? "الأحد – الخميس، 8:30 – 17:00" : "Sun–Thu, 8:30–17:00"}
            </p>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className="rounded-md bg-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            {isAr ? "اتصل بنا" : "Call us"}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-md border border-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-deep)]/5 transition"
          >
            {isAr ? "راسلنا عبر البريد الإلكتروني" : "Email us"}
          </a>
        </div>
      </Section>

      {/* ============================================================
          6. الخريطة (Lazy)
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr ? "موقع المكتب الرئيسي" : "Main office location"}
        />

        <div className="mt-6 rounded-2xl border border-border bg-card p-8 text-center">
          <MapPin className="h-8 w-8 mx-auto mb-3 text-[color:var(--gold)]" />
          <h3 className="text-lg font-bold mb-2">
            {isAr ? "مقر أربتك" : "ARABTEC Office"}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            {isAr ? CONTACT.addressAr : CONTACT.addressEn}
          </p>
          <a
            href={CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition inline-block"
          >
            {isAr ? "افتح الموقع في Google Maps" : "Open in Google Maps"}
          </a>
        </div>
      </Section>

      {/* ============================================================
          7. تواصل حسب نوع الخدمة — 6 بطاقات
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "الوصول السريع إلى فريق الخدمة المناسب"
            : "Quick access to the right service team"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {serviceContacts.map((sc) => {
            const Icon = sc.icon;
            return (
              <Card key={sc.slug}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">{isAr ? sc.ar : sc.en}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? sc.descAr : sc.descEn}
                </p>
                <a
                  href={`#contact-form`}
                  onClick={() => setService(sc.slug)}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:text-gold"
                >
                  {isAr ? "تواصل بشأن هذه الخدمة" : "Contact about this service"}
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                </a>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          8. ماذا يحدث بعد إرسال الطلب؟
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "خطوات واضحة لمراجعة احتياجكم"
            : "Clear steps to review your request"}
        />

        <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 mt-6">
          {afterSubmitSteps.map((step, i) => (
            <li
              key={i}
              className="relative rounded-xl border border-border bg-card p-5"
            >
              <div className="text-3xl font-extrabold text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <div className="mt-1 font-semibold">{isAr ? step.ar : step.en}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {isAr ? step.descAr : step.descEn}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          9. المعلومات المفيدة قبل التواصل
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "معلومات تساعدنا على فهم المشروع بصورة أسرع"
            : "Information that helps us understand your project faster"}
          intro={
            isAr
              ? "كلما كانت المعلومات المقدمة واضحة، تمكن الفريق من مراجعة الاحتياج وتوجيه الطلب إلى الاختصاص المناسب."
              : "The clearer the information provided, the better our team can review the need and route the request to the right specialist."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {usefulInfoItems.map((x) => (
            <li key={x.en} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{isAr ? x.ar : x.en}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-2xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-4">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {isAr
              ? "لا ترسلوا كلمات المرور أو بيانات الدخول أو المعلومات الحساسة من خلال نموذج الموقع."
              : "Do not send passwords, access credentials or sensitive information through the website form."}
          </p>
        </div>
      </Section>

      {/* ============================================================
          10. طلبات الجهات الحكومية
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "تواصل مخصص للمشروعات المؤسسية والحكومية"
            : "Dedicated contact for enterprise & government projects"}
          intro={
            isAr
              ? "يمكن للجهات الحكومية والمؤسسات الكبرى إرسال وثائق نطاق العمل أو طلبات المعلومات أو العروض الفنية من خلال النموذج أو البريد الرسمي المعتمد."
              : "Government entities and large enterprises can submit scopes of work, requests for information or technical proposals through the form or the official approved email."}
        />

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <h3 className="font-bold mb-3">
              {isAr ? "أنواع الطلبات" : "Request types"}
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? [
                    "Request for Information — RFI",
                    "Request for Proposal — RFP",
                    "Request for Quotation — RFQ",
                    "طلب عرض فني",
                    "طلب اجتماع تمهيدي",
                    "طلب إثبات مفهوم",
                    "طلب زيارة ميدانية",
                    "طلب تقديم مؤسسي",
                  ]
                : [
                    "Request for Information — RFI",
                    "Request for Proposal — RFP",
                    "Request for Quotation — RFQ",
                    "Technical proposal request",
                    "Introductory meeting request",
                    "Proof of concept request",
                    "Site visit request",
                    "Institutional presentation request",
                  ]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="font-bold mb-3">
              {isAr ? "حقول إضافية للجهات الحكومية" : "Additional fields for government entities"}
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {(isAr
                ? [
                    "اسم الجهة الرسمي",
                    "الإدارة أو القسم",
                    "الرقم المرجعي للطلب",
                    "نوع الوثيقة",
                    "الموعد النهائي للرد",
                    "اسم مسؤول التواصل",
                    "البريد الرسمي",
                    "إرفاق وثيقة المتطلبات",
                  ]
                : [
                    "Official entity name",
                    "Department or section",
                    "Request reference number",
                    "Document type",
                    "Response deadline",
                    "Contact person name",
                    "Official email",
                    "Attach requirements document",
                  ]
              ).map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)] mt-0.5 shrink-0">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6">
          <CTAButton to="/contact">
            {isAr ? "إرسال طلب مؤسسي" : "Submit institutional request"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          11. طلب الشراكة
          ============================================================ */}
      <Section id="partnership-form">
        <SectionHead
          title={isAr
            ? "تواصل معنا بشأن فرصة شراكة تقنية"
            : "Contact us about a technology partnership opportunity"}
          intro={
            isAr
              ? "ترحب أربتك بطلبات التعاون من مزودي التقنية والمصنعين وشركات البرمجيات والتكامل، على أن يتضمن الطلب وصفًا واضحًا للحل ونموذج التعاون والدعم المتاح."
              : "ARABTEC welcomes collaboration requests from technology providers, manufacturers, software and integration companies — the request should include a clear description of the solution, cooperation model and available support."}
        />

        <form
          onSubmit={onPartnerSubmit}
          noValidate
          className="grid gap-5 md:grid-cols-2 rounded-2xl border border-border bg-card p-6 mt-6"
        >
          <Field
            label={isAr ? "اسم الشركة *" : "Company name *"}
            name="p-company"
            required
          />
          <Field
            label={isAr ? "الموقع الإلكتروني *" : "Website *"}
            name="p-website"
            type="url"
            required
          />
          <Select
            label={isAr ? "الدولة *" : "Country *"}
            name="p-country"
            options={countries.map((c) => ({
              value: c.value,
              label: isAr ? c.ar : c.en,
            }))}
          />
          <Field
            label={isAr ? "اسم مسؤول التواصل *" : "Contact person *"}
            name="p-name"
            required
          />
          <Field
            label={isAr ? "المسمى الوظيفي" : "Job title"}
            name="p-title"
          />
          <Field
            label={isAr ? "البريد الإلكتروني *" : "Email *"}
            name="p-email"
            type="email"
            required
          />
          <Field
            label={isAr ? "رقم الهاتف" : "Phone number"}
            name="p-phone"
            type="tel"
          />
          <Select
            label={isAr ? "نوع الشركة *" : "Company type *"}
            name="p-type"
            options={[
              { value: "software", label: isAr ? "شركة برمجيات" : "Software company" },
              { value: "erp", label: isAr ? "مزود ERP" : "ERP provider" },
              { value: "ai", label: isAr ? "مزود ذكاء اصطناعي" : "AI provider" },
              { value: "cloud", label: isAr ? "مزود سحابي" : "Cloud provider" },
              { value: "hardware", label: isAr ? "مصنع أجهزة" : "Hardware manufacturer" },
              { value: "network", label: isAr ? "شركة شبكات" : "Network company" },
              { value: "surveillance", label: isAr ? "مزود مراقبة وحضور" : "Surveillance & attendance provider" },
              { value: "integration", label: isAr ? "شركة تكامل" : "Integration company" },
              { value: "training", label: isAr ? "شركة تدريب ودعم" : "Training & support company" },
              { value: "other", label: isAr ? "غير ذلك" : "Other" },
            ]}
          />
          <Field
            label={isAr ? "مجال التقنية *" : "Technology area *"}
            name="p-tech"
            required
          />
          <Select
            label={isAr ? "نوع الشراكة المقترحة *" : "Proposed partnership type *"}
            name="p-partnership"
            options={[
              { value: "reseller", label: isAr ? "موزع معتمد" : "Authorized reseller" },
              { value: "integration", label: isAr ? "تكامل تقني" : "Technical integration" },
              { value: "supply", label: isAr ? "توريد" : "Supply" },
              { value: "joint", label: isAr ? "مشروع مشترك" : "Joint project" },
              { value: "other", label: isAr ? "غير ذلك" : "Other" },
            ]}
          />
          <Textarea
            label={isAr ? "نبذة عن الحل أو المنتج *" : "About the solution or product *"}
            name="p-solution"
            required
            className="md:col-span-2"
          />
          <Field
            label={isAr ? "الأسواق المستهدفة" : "Target markets"}
            name="p-markets"
          />
          <Field
            label={isAr ? "الدعم والتدريب المتاح" : "Available support & training"}
            name="p-support"
          />
          <div className="md:col-span-2">
            <label className="text-sm font-medium block mb-1">
              {isAr ? "إرفاق الملف التعريفي" : "Attach company profile"}
            </label>
            <input
              type="file"
              name="p-file"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              className="text-sm"
            />
          </div>
          <label className="md:col-span-2 flex items-start gap-2 text-sm">
            <input type="checkbox" name="p-consent" required className="mt-1" />
            <span>
              {isAr
                ? "أوافق على سياسة الخصوصية ومعالجة بياناتي للتواصل بشأن طلب الشراكة."
                : "I agree to the privacy policy and processing of my data for contacting me about the partnership request."}
            </span>
          </label>
          <div className="md:col-span-2">
            <Button type="submit" disabled={status === "submitting"} size="lg">
              {isAr ? "إرسال طلب الشراكة" : "Submit partnership request"}
            </Button>
          </div>
        </form>
      </Section>

      {/* ============================================================
          12. صورة فريق التواصل + CTA
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <img
            src={contactTeamImg}
            alt={
              isAr
                ? "فريق أربتك لمراجعة استفسارات وطلبات المشروعات التقنية"
                : "ARABTEC team reviewing technology project inquiries and requests"
            }
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {isAr
                ? "فريق متخصص جاهز للتواصل معكم"
                : "A specialized team ready to connect with you"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "سواء كنتم تبحثون عن استشارة تقنية، عرض فني، عرض توضيحي، زيارة ميدانية، شراكة أو دعم مشروع قائم، فريق أربتك مستعد لمراجعة طلبكم والتواصل معكم."
                : "Whether you're looking for a technical consultation, a technical proposal, a demo, a site visit, a partnership or support for an existing project, the ARABTEC team is ready to review your request and get in touch."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="rounded-md bg-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                {isAr ? "أرسل طلبك الآن" : "Submit your request now"}
              </a>
              <a
                href="#meeting-request"
                className="rounded-md border border-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-deep)]/5 transition"
              >
                {isAr ? "اطلب اجتماعًا استشاريًا" : "Request a consultation meeting"}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          13. CTA Final
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
              ? "هل تبحث مؤسستكم عن شريك تقني موثوق؟"
              : "Is your organization looking for a trusted technology partner?"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
            {isAr
              ? "شاركوا فريق أربتك بطبيعة المشروع والخدمات المطلوبة والأنظمة الحالية، وسنعمل معكم على تحديد نطاق الحل والتقنيات المناسبة وخطة التنفيذ."
              : "Share your project type, required services and current systems with the ARABTEC team — we'll work with you to define the solution scope, right technologies and delivery plan."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact-form"
              className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {isAr ? "أرسل طلب مشروع" : "Submit project request"}
            </a>
            <a
              href="#meeting-request"
              className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
            >
              {isAr ? "اطلب اجتماعًا استشاريًا" : "Request a consultation"}
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          14. FAQ
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن التواصل مع أربتك"
            : "Frequently asked questions about contacting ARABTEC"}
        />

        <FAQ
          items={[
            {
              q: { ar: "كيف يمكنني طلب استشارة تقنية؟", en: "How can I request a technical consultation?" },
              a: {
                ar: "يمكن إرسال الطلب من خلال نموذج التواصل واختيار الخدمة المطلوبة وإضافة وصف واضح للاحتياج أو التحدي الحالي.",
                en: "Submit the request through the contact form, choose the required service and add a clear description of the need or challenge.",
              },
            },
            {
              q: { ar: "كيف أطلب عرضًا فنيًا؟", en: "How do I request a technical proposal?" },
              a: {
                ar: "اختر »طلب عرض فني« من نموذج التواصل، وأرفق نطاق العمل أو وثيقة المتطلبات عند توفرها.",
                en: "Choose 'Technical proposal' in the contact form and attach the scope of work or requirements document if available.",
              },
            },
            {
              q: { ar: "هل يمكن طلب اجتماع قبل تحديد الحل؟", en: "Can I request a meeting before defining the solution?" },
              a: {
                ar: "نعم، يمكن طلب اجتماع استشاري لمناقشة أهداف المشروع والأنظمة الحالية وتحديد الخطوات المناسبة.",
                en: "Yes — you can request a consultation meeting to discuss project goals, current systems and the right next steps.",
              },
            },
            {
              q: { ar: "هل تقدم أربتك زيارات ميدانية؟", en: "Does ARABTEC provide site visits?" },
              a: {
                ar: "يمكن طلب زيارة ميدانية للمشروعات التي تحتاج إلى معاينة، مثل الشبكات والبنية التحتية والمراقبة والحضور والتحكم بالدخول.",
                en: "You can request a site visit for projects requiring inspection — such as networks, infrastructure, surveillance, attendance and access control.",
              },
            },
            {
              q: { ar: "هل يمكن إرسال وثيقة RFP؟", en: "Can I submit an RFP document?" },
              a: {
                ar: "نعم، يمكن إرفاق وثيقة RFP أو RFQ أو نطاق العمل من خلال نموذج التواصل المؤسسي.",
                en: "Yes — you can attach an RFP, RFQ or scope of work through the institutional contact form.",
              },
            },
            {
              q: { ar: "ما المعلومات المطلوبة لطلب مشروع؟", en: "What information is required for a project request?" },
              a: {
                ar: "يفضل تقديم اسم المؤسسة والقطاع والخدمة المطلوبة ووصف التحدي وعدد المستخدمين والمواقع والأنظمة الحالية والمدة المتوقعة.",
                en: "It's preferred to provide the organization name, sector, required service, challenge description, number of users and sites, existing systems and expected timeline.",
              },
            },
            {
              q: { ar: "هل يمكن طلب عرض توضيحي لحلول الذكاء الاصطناعي أو ERP؟", en: "Can I request a demo for AI or ERP solutions?" },
              a: {
                ar: "نعم، يمكن اختيار »طلب عرض توضيحي« وتحديد الحل المطلوب داخل النموذج.",
                en: "Yes — choose 'Demo request' and specify the solution within the form.",
              },
            },
            {
              q: { ar: "هل يمكن لمزود تقنية التواصل بشأن شراكة؟", en: "Can a technology provider contact us about a partnership?" },
              a: {
                ar: "نعم، يوجد نموذج مخصص لطلبات الشراكة يتضمن مجال التقنية ونوع التعاون المقترح.",
                en: "Yes — there's a dedicated partnership form covering the technology area and proposed cooperation model.",
              },
            },
            {
              q: { ar: "هل يجب إرسال الميزانية في الطلب الأول؟", en: "Do I have to include the budget in the first request?" },
              a: {
                ar: "ليست إلزامية، لكن توفير نطاق تقديري قد يساعد على تحديد الحل والخيارات المناسبة.",
                en: "It's not mandatory, but providing an estimated range can help define the right solution and options.",
              },
            },
            {
              q: { ar: "هل يمكن التواصل بشأن مشروع قائم؟", en: "Can I contact you about an existing project?" },
              a: {
                ar: "نعم، اختر »دعم مشروع قائم« وأضف اسم المشروع أو النظام ووصف الطلب.",
                en: "Yes — choose 'Existing project support' and add the project or system name and a description of the request.",
              },
            },
            {
              q: { ar: "هل يتم تأكيد الاجتماع مباشرة بعد إرسال النموذج؟", en: "Is the meeting confirmed immediately after form submission?" },
              a: {
                ar: "لا، يتم تأكيد الموعد بعد مراجعة الطلب والتواصل معكم.",
                en: "No — the meeting is confirmed after reviewing the request and contacting you.",
              },
            },
            {
              q: { ar: "هل يمكن إرسال معلومات حساسة عبر النموذج؟", en: "Can I send sensitive information through the form?" },
              a: {
                ar: "لا ينصح بإرسال كلمات المرور أو بيانات الدخول أو معلومات سرية غير ضرورية من خلال النموذج العام.",
                en: "It's not recommended to send passwords, access credentials or unnecessary sensitive information through the public form.",
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
                name: "كيف يمكنني طلب استشارة تقنية؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "يمكن إرسال الطلب من خلال نموذج التواصل واختيار الخدمة المطلوبة وإضافة وصف واضح للاحتياج أو التحدي الحالي.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن طلب اجتماع قبل تحديد الحل؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن طلب اجتماع استشاري لمناقشة أهداف المشروع والأنظمة الحالية وتحديد الخطوات المناسبة.",
                },
              },
              {
                "@type": "Question",
                name: "هل يتم تأكيد الاجتماع مباشرة بعد إرسال النموذج؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "لا، يتم تأكيد الموعد بعد مراجعة الطلب والتواصل معكم.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}

// ============================================================
// مكونات فرعية (Field, Textarea, Select)
// ============================================================
function Field({
  label,
  className = "",
  ...props
}: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = `field-${props.name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium block mb-1">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Textarea({
  label,
  className = "",
  ...props
}: { label: string; className?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = `field-${props.name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium block mb-1">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        {...props}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  value,
  onChange,
  defaultValue,
  className = "",
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (v: string) => void;
  defaultValue?: string;
  className?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium block mb-1">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="">{"—"}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}