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
// بيانات الاتصال الرسمية
// ============================================================
const CONTACT = {
  phone: "+966532891000",
  phoneDisplay: "+966 53 289 1000",
  email: "contact@arabtec.com",
  addressAr: "الخبر مول، الحزام الذهبي",
  addressEn: "Al khobar mall, Al hizam Al thahabi",
  mapUrl: "https://maps.app.goo.gl/4tnGNj6Zu1NCWxTKA?g_st=iw",
};

const WEB3FORMS_ACCESS_KEY = "9daac662-70db-4422-94ad-37a0a82f02e0";

// ============================================================
// الصور
// ============================================================
import heroImg from "@/assets/enterprise-technology-consultation.jpg";
import mapImag from "@/assets/image_map.jpg";
import contactTeamImg from "@/assets/arabtec-contact-technology-team.jpg";

// ============================================================
// ✅ النموذج الرئيسي المبسط (مع الفاليديشن القديمة للهاتف)
// ============================================================
const mainFormSchema = z.object({
  name: z.string().trim().min(2, "الاسم قصير جدًا"),
  email: z.string().trim().email("بريد إلكتروني غير صالح"),
  org: z.string().trim().min(2, "اسم المؤسسة مطلوب"),
  phoneCode: z.string().optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^[\d\s\-+()]+$/.test(v),
      "رقم الهاتف يحتوي على أحرف غير مسموحة"
    )
    .refine(
      (v) => !v || v.replace(/\D/g, "").length >= 8,
      "رقم الهاتف قصير جدًا"
    ),
  subject: z.string().min(1, "موضوع الرسالة مطلوب"),
  message: z.string().trim().min(10, "يجب أن تكون الرسالة 10 أحرف على الأقل"),
  wantMeeting: z.string().optional(),
  consent: z.union([z.literal("on"), z.literal("true"), z.boolean()]).refine(
    (v) => v === "on" || v === "true" || v === true,
    "يجب الموافقة على سياسة الخصوصية"
  ),
});

// Schemas القديمة (محفوظة بس مش مستخدمة حالياً)
const meetingFormSchema = z.object({});
const partnerFormSchema = z.object({});
const govFormSchema = z.object({});

function getFirstError(error: z.ZodError): string {
  return error.issues[0]?.message || "بيانات غير صالحة";
}

function extractFieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  error.issues.forEach((issue) => {
    const field = issue.path[0] as string | undefined;
    if (field && !errors[field]) errors[field] = issue.message;
  });
  return errors;
}

async function sendToWeb3Forms(payload: Record<string, any>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "ARABTEC Website",
      ...payload,
    }),
  });
  return res.json();
}

// ============================================================
// Validators & Sanitizers
// ============================================================
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validators = {
  name: (v: string) =>
    !v.trim() ? "الاسم مطلوب" : v.trim().length < 2 ? "الاسم قصير جدًا" : undefined,
  org: (v: string) =>
    !v.trim()
      ? "اسم المؤسسة مطلوب"
      : v.trim().length < 2
      ? "اسم المؤسسة قصير جدًا"
      : undefined,
  email: (v: string) =>
    !v.trim()
      ? "البريد الإلكتروني مطلوب"
      : !EMAIL_RE.test(v.trim())
      ? "بريد إلكتروني غير صالح"
      : undefined,
  // ✅ الفاليديشن القديمة
  phone: (v: string) =>
    !v.trim()
      ? "رقم الهاتف مطلوب"
      : v.replace(/\D/g, "").length < 8
      ? "رقم الهاتف قصير جدًا"
      : undefined,
  optionalPhone: (v: string) =>
    !v.trim() || v.replace(/\D/g, "").length >= 8
      ? undefined
      : "رقم الهاتف قصير جدًا",
  minLen:
    (n: number, required: string, short: string) => (v: string) =>
      !v.trim() ? required : v.trim().length < n ? short : undefined,
  selectRequired: (msg: string) => (v: string) => (!v ? msg : undefined),
};

const sanitizers = {
  // ✅ يمنع كتابة أي حرف غير رقم/مسافة/-/+/() في الهاتف
  phone: (v: string) => v.replace(/[^\d\s\-+()]/g, ""),
  digits: (v: string) => v.replace(/\D/g, ""),
};

const makeFieldErrorSetter =
  (setter: React.Dispatch<React.SetStateAction<Record<string, string>>>) =>
  (field: string) =>
  (err: string | undefined) => {
    setter((prev) => {
      const next = { ...prev };
      if (err) next[field] = err;
      else delete next[field];
      return next;
    });
  };

// ============================================================
// 1. أنواع الطلبات (البطاقات)
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
// 2. خيارات موضوع الرسالة (تتغير حسب البطاقة)
// ============================================================
const subjectOptions = [
  { value: "new-project", ar: "مشروع جديد", en: "New project" },
  { value: "consult", ar: "استشارة تقنية", en: "Technical consultation" },
  { value: "rfp", ar: "طلب عرض فني", en: "Technical proposal" },
  { value: "demo", ar: "طلب عرض توضيحي", en: "Demo request" },
  { value: "visit", ar: "طلب زيارة ميدانية", en: "Site survey" },
  { value: "support", ar: "دعم فني", en: "Technical support" },
  { value: "partner", ar: "شراكة", en: "Partnership" },
];

// ✅ ربط كل بطاقة بخيارها في القائمة
const cardToSubject: Record<string, string> = {
  consult: "consult",
  rfp: "rfp",
  demo: "demo",
  visit: "visit",
  partner: "partner",
  support: "support",
};

// ============================================================
// 3. مفاتيح الدولة للهاتف
// ============================================================
const phoneCodes = [
  { value: "+966", label: "SA +966" },
  { value: "+971", label: "AE +971" },
  { value: "+973", label: "BH +973" },
  { value: "+965", label: "KW +965" },
  { value: "+968", label: "OM +968" },
  { value: "+974", label: "QA +974" },
  { value: "+962", label: "JO +962" },
  { value: "+20", label: "EG +20" },
  { value: "+1", label: "US +1" },
  { value: "+44", label: "UK +44" },
];

// ============================================================
// 4. الدول (للـ Select العام)
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

export default function ContactPage() {
  const { lang } = useI18n();
  const l = useL();
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const isAr = lang === "ar";

  const queryRequest = searchParams.get("request") || "";

  const [reqType, setReqType] = useState(queryRequest || "consult");
  const [subject, setSubject] = useState(cardToSubject[queryRequest] || "new-project");
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [error, setError] = useState<string>("");
  const [submittedForm, setSubmittedForm] = useState<"main" | null>(null);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [consentError, setConsentError] = useState(false);

  const setMainFieldError = makeFieldErrorSetter(setFormErrors);

  useEffect(() => {
    if (queryRequest) {
      setReqType(queryRequest);
      setSubject(cardToSubject[queryRequest] || "new-project");
    }
  }, [queryRequest]);

  // ============================================================
  // Submit — النموذج الرئيسي
  // ============================================================
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    setSubmittedForm("main");
    setFormErrors({});
    setConsentError(false);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const rawData = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      org: String(fd.get("org") || ""),
      phoneCode: String(fd.get("phoneCode") || ""),
      phone: String(fd.get("phone") || ""),
      subject,
      message: String(fd.get("message") || ""),
      wantMeeting: String(fd.get("wantMeeting") || ""),
      consent: (fd.get("consent") as string | null) || "",
    };

    const result = mainFormSchema.safeParse(rawData);

    if (!result.success) {
      setStatus("error");
      setError(getFirstError(result.error));
      const errs = extractFieldErrors(result.error);
      delete errs["consent"];
      setFormErrors(errs);
      if (rawData.consent !== "on") setConsentError(true);
      return;
    }

    const data = result.data;
    const fullPhone = data.phone
      ? `${data.phoneCode || ""} ${data.phone}`.trim()
      : "";

    const payload = {
      subject: `طلب جديد من موقع Arabtec — ${data.name}`,
      name: data.name,
      email: data.email,
      phone: fullPhone,
      organization: data.org,
      message_subject: data.subject,
      message: data.message,
      wants_meeting: data.wantMeeting || "no",
      page_language: lang,
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await sendToWeb3Forms(payload);
      if (res.success) {
        nav({ to: "/thank-you/$type", params: { type: data.subject } });
      } else {
        setStatus("error");
        setError(
          isAr
            ? "تعذر إرسال الطلب حاليًا. يرجى المحاولة مرة أخرى."
            : "Failed to send your request. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setError(isAr ? "خطأ في الاتصال. حاول مرة أخرى." : "Connection error.");
    }
  }

  return (
    <>
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

      {/* ============================================================
          1. HERO + Cards
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <Breadcrumbs
          items={[
            { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
            { label: { ar: "تواصل معنا", en: "Contact" } },
          ]}
        />

        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-center mt-4 md:mt-6">
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={isAr ? "اجتماع استشاري" : "Consultation meeting"}
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              {isAr ? "تواصل معنا" : "Contact us"}
            </div>

            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "لنناقش متطلبات مشروعك التقني"
                : "Let's discuss your technology project requirements"}
            </h1>

            <p className="mt-4 text-base md:text-lg text-[#4B5563] leading-relaxed">
              {isAr
                ? "تعمل أربتك مع المؤسسات والجهات الحكومية والشركات لتقديم حلول تقنية متكاملة تشمل التحول الرقمي، تطوير البرمجيات وأنظمة ERP، الذكاء الاصطناعي، البنية التحتية، والشبكات والاتصالات. سواء كنت تخطط لمشروع جديد، أو تسعى لتطوير أنظمتك الحالية، أو تبحث عن شريك تقني موثوق، فإن فريقنا مستعد لمناقشة متطلباتك وتحديد الحلول المناسبة لأهداف مؤسستك."
                : "ARABTEC works with enterprises, government entities and companies to deliver integrated technology solutions covering digital transformation, software development and ERP systems, AI, infrastructure, networks and communications. Whether you're planning a new project, looking to modernize your current systems, or seeking a trusted technology partner, our team is ready to discuss your requirements and identify the right solutions for your organization's goals."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="rounded-md bg-[#0B3D2E] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                {isAr ? "أرسل طلب مشروع" : "Submit a project request"}
              </a>
              <a
                href="#contact-form"
                className="rounded-md border border-[color:var(--brand-deep)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-deep)]/5 transition"
              >
                {isAr ? "اطلب استشارة تقنية" : "Request a technical consultation"}
              </a>
            </div>
          </div>
        </div>

        {/* ===== البطاقات ===== */}
        <div className="mt-10 md:mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--brand-deep)]">
            {isAr ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
            {isAr
              ? "اختر نوع طلبك وشاركنا المعلومات الأساسية، ليتم توجيهه إلى الفريق المختص ومتابعته معك"
              : "Choose your request type and share the essential information, so it can be routed to the right team and followed up with you."}
          </p>

          <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {requestTypes.map((r) => {
              const Icon = r.icon;
              const isActive = reqType === r.key;
              return (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => {
                    setReqType(r.key);
                    setSubject(cardToSubject[r.key] || "new-project");
                    setMainFieldError("subject")(undefined);
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-start rounded-xl border bg-card p-4 md:p-5 transition ${
                    isActive
                      ? "border-[color:var(--brand-deep)] shadow-md"
                      : "border-border hover:border-[color:var(--brand-deep)]/40 hover:shadow-sm"
                  }`}
                >
                  <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-base">{isAr ? r.ar : r.en}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {isAr ? r.descAr : r.descEn}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ============================================================
          2. الفورم المبسط
          ============================================================ */}
      <Section id="contact-form" className="!py-6 md:!py-10">
        <SectionHead
          title={isAr ? "أخبرنا عن احتياجكم" : "Tell us about your need"}
        />

        <form
          onSubmit={onSubmit}
          noValidate
          className="grid gap-4 md:gap-5 md:grid-cols-2 rounded-2xl border border-border bg-card p-4 md:p-6 mt-6"
        >
          <Field
            label={isAr ? "الاسم الكامل *" : "Full name *"}
            name="name"
            required
            error={formErrors["name"]}
            validate={validators.name}
            onValidate={setMainFieldError("name")}
          />
          <Field
            label={isAr ? "البريد الإلكتروني *" : "Email *"}
            name="email"
            type="email"
            required
            error={formErrors["email"]}
            validate={validators.email}
            onValidate={setMainFieldError("email")}
          />
          <Field
            label={isAr ? "اسم المؤسسة *" : "Organization name *"}
            name="org"
            required
            error={formErrors["org"]}
            validate={validators.org}
            onValidate={setMainFieldError("org")}
          />

          {/* ✅ الهاتف مع مفتاح الدولة + الفاليديشن القديمة */}
          <div>
            <label className="text-sm font-medium block mb-1">
              {isAr ? "رقم الهاتف (اختياري)" : "Phone number (optional)"}
            </label>
            <div className="flex gap-2" dir="ltr">
              <select
                name="phoneCode"
                defaultValue="+966"
                className="w-28 rounded-md border border-input bg-background px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {phoneCodes.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="5X XXX XXXX"
                onChange={(e) => {
                  // ✅ بيشيل أي حرف/رمز غير مسموح فوراً
                  const sanitized = sanitizers.phone(e.target.value);
                  if (sanitized !== e.target.value) e.target.value = sanitized;
                  // ✅ فاليديشن فوري
                  const err = validators.optionalPhone(e.target.value);
                  setMainFieldError("phone")(err);
                }}
                className={`flex-1 min-w-0 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  formErrors["phone"]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-input focus:ring-ring"
                }`}
              />
            </div>
            {formErrors["phone"] && (
              <p className="mt-1 text-xs text-red-500 font-semibold">
                {formErrors["phone"]}
              </p>
            )}
          </div>

          {/* ✅ موضوع الرسالة */}
          <Select
            label={isAr ? "موضوع الرسالة *" : "Message subject *"}
            name="subject"
            value={subject}
            onChange={(v) => setSubject(v)}
            options={subjectOptions.map((s) => ({
              value: s.value,
              label: isAr ? s.ar : s.en,
            }))}
            error={formErrors["subject"]}
            validate={validators.selectRequired(
              isAr ? "موضوع الرسالة مطلوب" : "Subject is required"
            )}
            onValidate={setMainFieldError("subject")}
            className="md:col-span-1"
          />

          {/* ✅ رسالتك */}
          <Textarea
            label={isAr ? "رسالتك *" : "Your message *"}
            name="message"
            required
            className="md:col-span-2"
            error={formErrors["message"]}
            validate={validators.minLen(
              10,
              isAr ? "الرسالة مطلوبة" : "Message is required",
              isAr
                ? "يجب أن تكون الرسالة 10 أحرف على الأقل"
                : "Message must be at least 10 characters"
            )}
            onValidate={setMainFieldError("message")}
          />

          {/* ✅ هل ترغب في اجتماع */}
          <label className="md:col-span-2 flex items-center gap-2 text-sm">
            <input type="checkbox" name="wantMeeting" />
            <span>
              {isAr ? "هل ترغب في اجتماع؟" : "Would you like a meeting?"}
            </span>
          </label>

          {/* ✅ إرفاق ملف */}
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

          {/* ✅ الموافقة */}
          <label
            className={`md:col-span-2 flex items-start gap-2 text-sm ${
              consentError ? "text-red-500" : ""
            }`}
          >
            <input
              type="checkbox"
              name="consent"
              required
              className={`mt-1 ${
                consentError ? "outline outline-1 outline-red-500" : ""
              }`}
            />
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
          {consentError && (
            <div className="md:col-span-2 text-xs text-red-500 font-bold -mt-3">
              {isAr
                ? "يجب الموافقة على سياسة الخصوصية للمتابعة."
                : "You must accept the privacy policy to continue."}
            </div>
          )}

          {status === "error" && submittedForm === "main" && (
            <div className="md:col-span-2 text-sm text-red-500 font-semibold bg-red-50 p-3 rounded-md border border-red-200">
              {error}
            </div>
          )}

          {/* ✅ زر الإرسال */}
          <div className="md:col-span-2">
            <Button type="submit" disabled={status === "submitting"} size="lg">
              {status === "submitting" && submittedForm === "main"
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
          3. بيانات التواصل والموقع
          ============================================================ */}
      <Section className="!py-6 md:!py-10">
        <SectionHead
          title={isAr ? "تواصل مع أربتك" : "Contact ARABTEC"}
          intro={isAr ? "المملكة العربية السعودية" : "Saudi Arabia"}
        />

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          <Card>
            <Phone className="h-5 w-5 text-[color:var(--gold)] mb-2" />
            <h3 className="font-bold mb-1">{isAr ? "الهاتف" : "Phone"}</h3>
            <a
              href={`tel:${CONTACT.phone}`}
              dir="ltr"
              className="text-sm text-brand-deep hover:underline"
            >
              {CONTACT.phoneDisplay}
            </a>
          </Card>
          <Card>
            <Mail className="h-5 w-5 text-[color:var(--gold)] mb-2" />
            <h3 className="font-bold mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-brand-deep hover:underline"
            >
              {CONTACT.email}
            </a>
          </Card>
          <Card>
            <MapPin className="h-5 w-5 text-[color:var(--gold)] mb-2" />
            <h3 className="font-bold mb-1">{isAr ? "العنوان" : "Address"}</h3>
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
            <Clock className="h-5 w-5 text-[color:var(--gold)] mb-2" />
            <h3 className="font-bold mb-1">{isAr ? "ساعات العمل" : "Working hours"}</h3>
            <p className="text-sm text-muted-foreground">
              {isAr ? "الأحد – الخميس، 8:30 – 17:00" : "Sun–Thu, 8:30–17:00"}
            </p>
          </Card>
        </div>

        <div className="mt-6 md:mt-8 max-w-5xl mx-auto rounded-2xl md:rounded-[32px] bg-card border border-border p-4 md:p-6 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="relative w-full h-[220px] sm:h-[300px] lg:h-auto lg:min-h-[350px] rounded-xl md:rounded-2xl overflow-hidden shadow-sm order-1 lg:order-1">
              <img
                src={mapImag}
                alt={isAr ? "مقر أربتك - الخبر" : "ARABTEC HQ - Al Khobar"}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center order-2 lg:order-2 py-2 lg:py-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="border border-border rounded-full p-1.5 flex items-center justify-center text-[color:var(--brand-deep)]">
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                </div>
                <span className="font-bold text-lg text-[color:var(--brand-deep)]">
                  {isAr ? "موقعنا" : "Our Location"}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-[color:var(--brand-deep)]">
                  {isAr ? "مقر أربتك – الخبر" : "ARABTEC HQ – Al Khobar"}
                </h3>
                <p className="text-[15px] md:text-base text-[#4B5563] leading-relaxed">
                  {isAr ? CONTACT.addressAr : CONTACT.addressEn}
                </p>
              </div>

              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 lg:mt-8 flex items-center justify-center gap-2.5 w-full bg-[color:var(--brand-deep)] text-white rounded-full py-3 px-4 text-sm md:text-base font-semibold hover:opacity-90 transition-colors shadow-sm"
              >
                <MapPin className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
                {isAr ? "عرض المنطقة في خرائط Google" : "View area in Google Maps"}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

// ============================================================
// Field Component
// ============================================================
function Field({
  label,
  className = "",
  error,
  sanitize,
  validate,
  onValidate,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ...props
}: {
  label: string;
  className?: string;
  error?: string;
  sanitize?: (v: string) => string;
  validate?: (v: string) => string | undefined;
  onValidate?: (err: string | undefined) => void;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = `field-${props.name}`;
  const [touched, setTouched] = useState(false);

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`text-sm font-medium block mb-1 ${error ? "text-red-500" : ""}`}
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        onChange={(e) => {
          if (sanitize) {
            const sanitized = sanitize(e.target.value);
            if (sanitized !== e.target.value) e.target.value = sanitized;
          }
          const shouldValidate = touched || !!error;
          if (shouldValidate && validate && onValidate) {
            if (!touched) setTouched(true);
            onValidate(validate(e.target.value));
          }
          externalOnChange?.(e);
        }}
        onBlur={(e) => {
          setTouched(true);
          if (validate && onValidate) onValidate(validate(e.target.value));
          externalOnBlur?.(e);
        }}
        className={`w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-500" : "border-input focus:ring-ring"}`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500 font-semibold">{error}</p>
      )}
    </div>
  );
}

// ============================================================
// Textarea Component
// ============================================================
function Textarea({
  label,
  className = "",
  error,
  validate,
  onValidate,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ...props
}: {
  label: string;
  className?: string;
  error?: string;
  validate?: (v: string) => string | undefined;
  onValidate?: (err: string | undefined) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = `field-${props.name}`;
  const [touched, setTouched] = useState(false);

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`text-sm font-medium block mb-1 ${error ? "text-red-500" : ""}`}
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        {...props}
        onChange={(e) => {
          const shouldValidate = touched || !!error;
          if (shouldValidate && validate && onValidate) {
            if (!touched) setTouched(true);
            onValidate(validate(e.target.value));
          }
          externalOnChange?.(e);
        }}
        onBlur={(e) => {
          setTouched(true);
          if (validate && onValidate) onValidate(validate(e.target.value));
          externalOnBlur?.(e);
        }}
        className={`w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-500" : "border-input focus:ring-ring"}`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500 font-semibold">{error}</p>
      )}
    </div>
  );
}

// ============================================================
// Select Component
// ============================================================
function Select({
  label,
  name,
  options,
  value,
  onChange,
  defaultValue,
  className = "",
  error,
  validate,
  onValidate,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (v: string) => void;
  defaultValue?: string;
  className?: string;
  error?: string;
  validate?: (v: string) => string | undefined;
  onValidate?: (err: string | undefined) => void;
}) {
  const id = `field-${name}`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`text-sm font-medium block mb-1 ${error ? "text-red-500" : ""}`}
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => {
          const v = e.target.value;
          onChange?.(v);
          if (validate && onValidate) onValidate(validate(v));
        }}
        className={`w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-500" : "border-input focus:ring-ring"}`}
      >
        <option value="">—</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-xs text-red-500 font-semibold">{error}</p>
      )}
    </div>
  );
}