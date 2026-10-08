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
import { useI18n } from "@/lib/i18n";
import {
  ArrowLeft,
  Eye,
  Target,
  BadgeCheck,
  Layers,
  Users,
  Sliders,
  Sparkles,
  Headphones,
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
} from "lucide-react";

// الصور
import heroImg from "@/assets/arabtec-enterprise-technology-team.jpg";
import aboutImg from "@/assets/arabtec-technology-experience.webp";
import industriesImg from "@/assets/arabtec-industries-served.jpg";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

const expertiseIcons = [Cpu, Database, Code2, Cloud, Network, ShieldCheck];

export default function AboutPage() {
  const { lang, t } = useI18n();
  const l = useL();

  const isAr = lang === "ar";

  return (
    <>
      {/* ============================================================
          JSON-LD: AboutPage + Breadcrumb
          ============================================================ */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: isAr ? "من نحن | أربتك" : "About | ARABTEC",
          url: "/about",
          mainEntity: {
            "@type": "Organization",
            name: "ARABTEC",
            alternateName: "أربتك",
            foundingDate: "1996",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: isAr ? "الرئيسية" : "Home",
              item: "/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: isAr ? "من نحن" : "About",
              item: "/about",
            },
          ],
        }}
      />

      {/* ============================================================
          1. HERO
          صورة كبيرة يسار، نص يمين (على الديسكتوب)
          ============================================================ */}
      <Section>
        <Breadcrumbs
          items={[
            { label: { ar: "الرئيسية", en: "Home" }, to: "/" },
            { label: { ar: "من نحن", en: "About" } },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-center mt-6">
          {/* النص — يمين */}
          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              {isAr ? "من نحن" : "About us"}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "شريك تقني بخبرة ممتدة في بناء الحلول المؤسسية المتكاملة"
                : "A technology partner with deep expertise in building integrated enterprise solutions"}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isAr
                ? "تأسست أربتك عام 1996 لتقديم حلول تقنية موثوقة تساعد المؤسسات على تطوير بيئاتها التشغيلية، تحسين الاتصال بين أنظمتها ومواقعها، والاستفادة من التقنيات الحديثة في بناء أعمال أكثر كفاءة ومرونة واستدامة."
                : "ARABTEC was founded in 1996 to deliver reliable technology solutions that help organizations evolve their operating environments, improve connectivity across systems and sites, and leverage modern technologies to build more efficient, resilient and sustainable businesses."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "على مدار مسيرتها، تطورت خبرات أربتك من الشبكات والاتصالات والبنية التحتية وأنظمة المراقبة والحضور، لتشمل تطوير البرمجيات، أنظمة ERP وتطبيقات الأعمال، الحلول السحابية، تكامل الأنظمة، وحلول الذكاء الاصطناعي و AI Agents."
                : "Over the years, ARABTEC's expertise evolved from networks, communications, infrastructure, surveillance and attendance systems to include software development, ERP and business applications, cloud solutions, system integration, and AI & AI Agents."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "نعمل مع الجهات الحكومية والمؤسسات والشركات لتقديم حلول تقنية متكاملة تبدأ من فهم الاحتياج، مرورًا بالتصميم والتطوير والتوريد والتنفيذ، وصولاً إلى التكامل والتدريب والدعم التشغيلي."
                : "We work with government entities, organizations and companies to deliver integrated technology solutions — from understanding the need, through design, development, supply and delivery, to integration, training and operational support."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/services">
                {isAr ? "استكشف خدماتنا" : "Explore our services"}
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                {isAr ? "تواصل مع فريقنا" : "Contact our team"}
              </CTAButton>
            </div>
          </div>

          {/* الصورة — يسار */}
          <img
            src={heroImg}
            alt={
              isAr
                ? "فريق أربتك لتصميم وتنفيذ الحلول التقنية المؤسسية"
                : "ARABTEC team designing and delivering enterprise technology solutions"
            }
            width={1400}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="rounded-lg shadow-md order-2 lg:order-1"
          />
        </div>
      </Section>

      {/* ============================================================
          2. نبذة عن أربتك
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* الصورة */}
          <img
            src={aboutImg}
            alt={
              isAr
                ? "خبرة أربتك في الحلول التقنية والبنية التحتية والشبكات"
                : "ARABTEC expertise in technology solutions, infrastructure and networks"
            }
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-md order-2 lg:order-1"
          />

          {/* النص */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              {isAr
                ? "خبرة تقنية تجمع بين الأسس الراسخة والتقنيات الحديثة"
                : "Technology expertise combining solid foundations with modern capabilities"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "أربتك شركة متخصصة في تقديم الحلول والخدمات التقنية للمؤسسات والجهات الحكومية والشركات بمختلف أحجامها."
                : "ARABTEC is a specialized provider of technology solutions and services for enterprises, government entities and companies of all sizes."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "بدأت الشركة بخبرات قوية في الاتصال، الشبكات، البنية التحتية التقنية، أنظمة المراقبة، أنظمة الحضور والانصراف وتوريد الحلول التقنية، ثم وسعت نطاق أعمالها ليشمل تطوير البرمجيات، تطبيقات الويب والهاتف وسطح المكتب، الأتمتة، الأنظمة المؤسسية والحلول الرقمية الحديثة."
                : "The company started with strong expertise in communications, networks, IT infrastructure, surveillance, attendance systems and technology supply — then expanded into software development, web, mobile and desktop applications, automation, enterprise systems and modern digital solutions."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تتبنى أربتك منهجًا متكاملًا يقوم على توفير نقطة مسؤولية واضحة للمشروع، تغطي التخطيط والتصميم والتنفيذ والإدارة والدعم، بما يساعد العميل على تقليل التعقيد وتحسين جودة التنفيذ واستمرارية الخدمة."
                : "ARABTEC adopts an integrated approach built on a single point of accountability for the project — covering planning, design, delivery, management and support, helping clients reduce complexity and improve delivery quality and service continuity."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تأسست أربتك عام 1996، ويذكر ملف الشركة خبرتها في الاتصال، الشبكات، المراقبة، الحضور، البرمجيات، الأتمتة والحلول التقنية المتكاملة."
                : "ARABTEC was founded in 1996, and its company profile highlights expertise in communications, networks, surveillance, attendance, software, automation and integrated technology solutions."}
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          3. رؤيتنا ورسالتنا — بطاقتين
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "رؤيتنا ورسالتنا" : "Our vision and mission"}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* الرؤية */}
          <Card className="h-full">
            <div className="h-12 w-12 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">
              {isAr ? "رؤيتنا" : "Our vision"}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "أن نكون شريكًا تقنيًا موثوقًا للمؤسسات والجهات الحكومية، وأن نساهم في بناء بيئات رقمية مترابطة وذكية تدعم النمو، ترفع الكفاءة التشغيلية وتحسن جودة الخدمات."
                : "To be a trusted technology partner for enterprises and government entities, contributing to connected, intelligent digital environments that support growth, raise operational efficiency and improve service quality."}
            </p>
          </Card>

          {/* الرسالة */}
          <Card className="h-full">
            <div className="h-12 w-12 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">
              {isAr ? "رسالتنا" : "Our mission"}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "تقديم حلول تقنية متكاملة وعملية تجمع بين الخبرة، الابتكار وجودة التنفيذ، وتساعد عملاءنا على تحديث أنظمتهم، أتمتة عملياتهم، ربط بياناتهم والاستفادة من التقنيات الحديثة بما يتوافق مع أهدافهم المؤسسية."
                : "Delivering integrated, practical technology solutions that combine expertise, innovation and delivery quality — helping our clients modernize systems, automate operations, connect data and leverage modern technologies in line with their organizational goals."}
            </p>
          </Card>
        </div>
      </Section>

      {/* ============================================================
          4. ما الذي يميز أربتك؟ — 6 بطاقات
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr ? "قيمة تتجاوز تقديم التقنية" : "Value beyond delivering technology"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BadgeCheck,
              h: { ar: "خبرة منذ عام 1996", en: "Experience since 1996" },
              d: {
                ar: "خبرة ممتدة في تنفيذ ودعم الحلول التقنية للمؤسسات، مع تطور مستمر لمواكبة البرمجيات المؤسسية، الحوسبة السحابية والذكاء الاصطناعي.",
                en: "Extensive experience in delivering and supporting enterprise technology solutions, continuously evolving to keep up with enterprise software, cloud computing and AI.",
              },
            },
            {
              icon: Layers,
              h: { ar: "حلول تقنية متكاملة", en: "Integrated technology solutions" },
              d: {
                ar: "نغطي مراحل المشروع من دراسة الاحتياج وتصميم الحل إلى التطوير والتوريد والتنفيذ والتكامل والتدريب والدعم.",
                en: "We cover the project lifecycle from requirements study and solution design to development, supply, delivery, integration, training and support.",
              },
            },
            {
              icon: Users,
              h: { ar: "فهم بيئة المؤسسة", en: "Understanding the enterprise environment" },
              d: {
                ar: "نبدأ بفهم العمليات والمستخدمين والأنظمة الحالية والتحديات التشغيلية قبل اقتراح التقنية أو المنتج المناسب.",
                en: "We start by understanding processes, users, current systems and operational challenges before recommending the right technology or product.",
              },
            },
            {
              icon: Sliders,
              h: { ar: "مرونة في التصميم والتنفيذ", en: "Flexibility in design and delivery" },
              d: {
                ar: "نقدم حلولاً قابلة للتخصيص والتوسع، ويمكن ربطها بالأنظمة والبيانات والبنية التقنية القائمة لدى المؤسسة.",
                en: "We provide customizable, scalable solutions that can integrate with the organization's existing systems, data and technology infrastructure.",
              },
            },
            {
              icon: Sparkles,
              h: { ar: "خبرات متعددة التخصصات", en: "Multidisciplinary expertise" },
              d: {
                ar: "نجمع بين تطوير البرمجيات، ERP، الذكاء الاصطناعي، السحابة، البنية التحتية، الشبكات وأنظمة المراقبة والحضور والتحكم بالدخول.",
                en: "We combine software development, ERP, AI, cloud, infrastructure, networks and surveillance, attendance and access control systems.",
              },
            },
            {
              icon: Headphones,
              h: { ar: "مسؤولية واضحة ودعم مستمر", en: "Clear accountability and ongoing support" },
              d: {
                ar: "نعمل كنقطة اتصال تقنية موحدة تساعد العميل على متابعة المشروع وتقليل تعدد الموردين وتحسين التنسيق أثناء التنفيذ والدعم.",
                en: "We act as a single technology point of contact, helping clients track the project, reduce vendor fragmentation and improve coordination during delivery and support.",
              },
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.h.en}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">{l(c.h)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l(c.d)}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ============================================================
          5. مجالات خبرتنا — 6 بطاقات بأيقونات تقنية
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "خبرات تقنية تدعم رحلة التحول المؤسسي" : "Technology expertise supporting the enterprise transformation journey"}
          intro={
            isAr
              ? "توفر أربتك مجموعة مترابطة من الحلول والخدمات التقنية التي تساعد المؤسسات على تحديث أعمالها، تحسين الأداء، ربط الأنظمة وتوفير بنية تقنية قابلة للنمو."
              : "ARABTEC provides a connected portfolio of technology solutions and services that help organizations modernize operations, improve performance, connect systems and provide scalable technology infrastructure."
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              slug: "ai-agents",
              h: { ar: "حلول الذكاء الاصطناعي و AI Agents", en: "AI Solutions & AI Agents" },
              d: {
                ar: "حلول ذكية لأتمتة المهام، البحث في الوثائق، دعم الموظفين والمتعاملين، تحليل البيانات وربط وكلاء الذكاء الاصطناعي بأنظمة المؤسسة.",
                en: "Intelligent solutions for task automation, document search, employee and customer support, data analytics and connecting AI agents to enterprise systems.",
              },
            },
            {
              slug: "erp-business-applications",
              h: { ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & Business Applications" },
              d: {
                ar: "أنظمة مؤسسية لإدارة المالية، الموارد البشرية، المشتريات، المخزون، المبيعات، الأصول والمشاريع ضمن بيئة موحدة.",
                en: "Enterprise systems for finance, HR, procurement, inventory, sales, assets and projects within a unified environment.",
              },
            },
            {
              slug: "software-development",
              h: { ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software Development & System Integration" },
              d: {
                ar: "تطوير أنظمة مخصصة وتطبيقات ويب وهاتف وسطح مكتب، بوابات إلكترونية، تكاملات API وتحديث الأنظمة القديمة.",
                en: "Custom systems, web/mobile/desktop applications, digital portals, API integrations and legacy system modernization.",
              },
            },
            {
              slug: "cloud-infrastructure",
              h: { ar: "السحابة والبنية التحتية", en: "Cloud & Infrastructure" },
              d: {
                ar: "حلول الخوادم والتخزين والأنظمة السحابية والنسخ الاحتياطي وتجهيز بيئات العمل واستمرارية الأعمال.",
                en: "Servers, storage, cloud systems, backup, workplace setup and business continuity solutions.",
              },
            },
            {
              slug: "network-connectivity",
              h: { ar: "الشبكات والاتصال", en: "Networks & Connectivity" },
              d: {
                ar: "تصميم وتنفيذ الشبكات المؤسسية وربط المواقع والفروع والألياف الضوئية والشبكات اللاسلكية و VoIP والكابلات الهيكلية.",
                en: "Design and delivery of enterprise networks, multi-site linking, fiber optics, wireless networks, VoIP and structured cabling.",
              },
            },
            {
              slug: "surveillance-access-control",
              h: { ar: "المراقبة والحضور والتحكم بالدخول", en: "Surveillance, Attendance & Access Control" },
              d: {
                ar: "أنظمة الكاميرات، الحضور والانصراف، البصمة، التعرف على الوجه، RFID والبطاقات وأنظمة التحكم بالدخول.",
                en: "Cameras, attendance systems, biometrics, face recognition, RFID and cards, and access control systems.",
              },
            },
          ].map((c, i) => {
            const Icon = expertiseIcons[i];
            return (
              <Card key={c.slug}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">{l(c.h)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l(c.d)}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: c.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-gold"
                >
                  {isAr ? "استكشف الخدمة" : "Explore service"}
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <CTAButton to="/services" variant="outline">
            {isAr ? "عرض جميع الخدمات" : "View all services"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          6. القطاعات التي نخدمها
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {isAr ? "حلول مصممة للقطاعات الحيوية" : "Solutions designed for vital sectors"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "ندرك أن لكل قطاع أولويات تشغيلية وتقنية مختلفة. لذلك تصمم أربتك حلولها وفق طبيعة عمل المؤسسة، حجم عملياتها، متطلبات الاتصال والتكامل، حساسية البيانات والحاجة إلى استمرارية الخدمة."
                : "We understand that each sector has different operational and technology priorities. ARABTEC therefore designs solutions according to the organization's nature, scale, connectivity and integration requirements, data sensitivity and need for service continuity."}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: Landmark, ar: "الجهات الحكومية", en: "Government" },
                { icon: Fuel, ar: "النفط والغاز", en: "Oil & Gas" },
                { icon: GraduationCap, ar: "التعليم", en: "Education" },
                { icon: HeartPulse, ar: "الرعاية الصحية", en: "Healthcare" },
                { icon: Banknote, ar: "البنوك والخدمات المالية", en: "Banking & Finance" },
                { icon: Building2, ar: "الشركات والمؤسسات", en: "Corporates" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.en}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <div className="h-9 w-9 rounded-md bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">
                      {isAr ? s.ar : s.en}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <CTAButton to="/industries" variant="outline">
                {isAr ? "استكشف القطاعات التي نخدمها" : "Explore the sectors we serve"}
              </CTAButton>
            </div>
          </div>

          <img
            src={industriesImg}
            alt={
              isAr
                ? "حلول أربتك التقنية للقطاعات الحكومية والصناعية والصحية والتعليمية"
                : "ARABTEC technology solutions for government, industrial, healthcare and education sectors"
            }
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-md"
          />
        </div>
      </Section>

      {/* ============================================================
          7. منهجيتنا — 5 مراحل
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "منهجية عمل تركز على احتياج المؤسسة ونتائج المشروع" : "A methodology focused on the enterprise's needs and project outcomes"}
        />

        <ol className="grid gap-4 md:grid-cols-5">
          {(isAr
            ? [
                { t: "التحليل وفهم الاحتياج", d: "دراسة الأهداف المؤسسية والتحديات والعمليات والمستخدمين والأنظمة والبيانات الحالية." },
                { t: "تصميم الحل", d: "إعداد التصور الفني، نطاق العمل، البنية التقنية، مراحل التنفيذ ومتطلبات التكامل." },
                { t: "التطوير والتجهيز", d: "تطوير البرمجيات أو تجهيز الأنظمة والمعدات والمكونات المطلوبة وفق المواصفات المعتمدة." },
                { t: "التنفيذ والتكامل", d: "تنفيذ الحل وربطه بالأنظمة القائمة، وإجراء الاختبارات والتدريب والإطلاق." },
                { t: "الدعم والتحسين", d: "متابعة أداء الحل، تقديم الدعم التشغيلي، ومعالجة فرص التطوير والتوسع." },
              ]
            : [
                { t: "Analysis & understanding", d: "Study organizational goals, challenges, processes, users, current systems and data." },
                { t: "Solution design", d: "Technical concept, scope, architecture, delivery phases and integration requirements." },
                { t: "Development & preparation", d: "Software development or preparation of systems, equipment and components per approved specs." },
                { t: "Delivery & integration", d: "Implement the solution, integrate with existing systems, and run testing, training and go-live." },
                { t: "Support & improvement", d: "Monitor performance, provide operational support and address development and expansion opportunities." },
              ]
          ).map((step, i) => (
            <li
              key={i}
              className="relative rounded-xl border border-border bg-card p-5"
            >
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
          8. قيمنا — 6 قيم
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr ? "القيم التي تقود عملنا" : "The values that drive our work"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(isAr
            ? [
                { t: "الجودة", d: "نلتزم بتقديم حلول مصممة ومنفذة وفق متطلبات واضحة ومعايير جودة تناسب طبيعة المشروع." },
                { t: "الثقة", d: "نبني علاقات طويلة الأمد تقوم على الوضوح، الالتزام والمسؤولية في التواصل والتنفيذ." },
                { t: "الابتكار العملي", d: "نستخدم التقنيات الحديثة عندما تقدم قيمة حقيقية وتحسن الأداء والخدمة، وليس لمجرد مواكبة الاتجاهات." },
                { t: "التركيز على العميل", d: "نضع احتياجات المؤسسة وواقع عملياتها في مركز قرارات التصميم والتنفيذ." },
                { t: "التكامل", d: "ننظر إلى الأنظمة والبيانات والبنية التقنية باعتبارها منظومة مترابطة، وليس مجموعة حلول منفصلة." },
                { t: "الاستدامة", d: "نصمم حلولاً قابلة للتوسع والإدارة والدعم، بما يضمن استمرار القيمة بعد إطلاق المشروع." },
              ]
            : [
                { t: "Quality", d: "We commit to solutions designed and delivered against clear requirements and quality standards suited to each project." },
                { t: "Trust", d: "We build long-term relationships based on clarity, commitment and responsibility in communication and delivery." },
                { t: "Practical innovation", d: "We adopt modern technologies when they deliver real value and improve performance and service — not just to follow trends." },
                { t: "Customer focus", d: "We put the organization's needs and operational reality at the center of design and delivery decisions." },
                { t: "Integration", d: "We view systems, data and technology infrastructure as one connected ecosystem, not a set of separate solutions." },
                { t: "Sustainability", d: "We design scalable, manageable and supportable solutions so value continues well beyond project go-live." },
              ]
          ).map((v, i) => (
            <Card key={i}>
              <h3 className="font-bold text-lg">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          9. خبرتنا مع المؤسسات — شريط شعارات
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "ثقة بُنيت عبر مشروعات وقطاعات متعددة" : "Trust built across projects and sectors"}
          intro={
            isAr
              ? "قدمت أربتك خدمات وحلولاً تقنية لمؤسسات تعمل في قطاعات حكومية وصناعية وتعليمية وتجارية، وساعدت عملاءها في بناء الشبكات والبنية التحتية وتنفيذ أنظمة الحضور والمراقبة وتطوير الحلول البرمجية والاتصال بين المواقع."
              : "ARABTEC has delivered technology services and solutions to organizations across government, industrial, educational and commercial sectors — helping clients build networks and infrastructure, implement attendance and surveillance systems, develop software and connect sites."
          }
        />

        {/* شريط الشعارات — أسماء الجهات كنص (استبدلها بشعارات عند الحصول على إذن) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { ar: "أرامكو السعودية", en: "Saudi Aramco" },
            { ar: "وزارة التعليم", en: "Ministry of Education" },
            { ar: "سابك", en: "SABIC" },
            { ar: "جهات أخرى", en: "Other entities" },
          ].map((c, i) => (
            <div
              key={i}
              className="h-20 rounded-lg border border-border bg-card grid place-items-center text-xs text-muted-foreground text-center px-3"
            >
              {isAr ? c.ar : c.en}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton to="/partners-clients" variant="outline">
            {isAr ? "تعرّف إلى شركائنا وعملائنا" : "Meet our partners & clients"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          10. CTA — خلفية تقنية
          ============================================================ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* صورة الخلفية (زخرفية) */}
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
              ? "نساعدكم على تحويل الاحتياج التقني إلى مشروع قابل للتنفيذ"
              : "We help you turn technical needs into an executable project"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
            {isAr
              ? "سواء كانت مؤسستكم تخطط لتطبيق نظام ERP، تطوير منصة رقمية، إطلاق Agent AI، تحديث البنية التحتية، ربط المواقع والفروع أو تنفيذ أنظمة مراقبة وتحكم بالدخول، يعمل فريق أربتك معكم على دراسة الاحتياج وتصميم الحل المناسب."
              : "Whether you're planning an ERP system, a digital platform, launching an AI Agent, modernizing infrastructure, linking sites and branches, or implementing surveillance and access control systems — the ARABTEC team works with you to study the need and design the right solution."}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {isAr ? "اطلب استشارة تقنية" : "Request a consultation"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
            >
              {isAr ? "ناقش مشروعك معنا" : "Discuss your project"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          11. FAQ
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "أسئلة شائعة عن أربتك" : "Frequently asked questions about ARABTEC"}
        />

        <FAQ
          items={[
            {
              q: {
                ar: "متى تأسست شركة أربتك؟",
                en: "When was ARABTEC founded?",
              },
              a: {
                ar: "تأسست أربتك عام 1996، وبدأت بتقديم حلول الشبكات والاتصال والبنية التحتية والأنظمة التقنية، ثم وسعت خدماتها لتشمل البرمجيات والأنظمة المؤسسية والسحابة والذكاء الاصطناعي.",
                en: "ARABTEC was founded in 1996, starting with networks, communications, infrastructure and technology systems — then expanding into software, enterprise systems, cloud and AI.",
              },
            },
            {
              q: {
                ar: "ما الخدمات التي تقدمها أربتك؟",
                en: "What services does ARABTEC provide?",
              },
              a: {
                ar: "تقدم أربتك حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، السحابة والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
                en: "ARABTEC provides AI & AI Agents solutions, ERP and business applications, software development and system integration, cloud and infrastructure, networks and connectivity, and surveillance, attendance and access control.",
              },
            },
            {
              q: {
                ar: "هل تقدم أربتك حلولاً للجهات الحكومية؟",
                en: "Does ARABTEC offer solutions for government entities?",
              },
              a: {
                ar: "نعم، تقدم أربتك حلولاً تقنية يمكن تصميمها وفق إجراءات ومتطلبات الجهات الحكومية والمؤسسات الكبرى، بعد دراسة نطاق المشروع والأنظمة والبيانات والمتطلبات التنظيمية.",
                en: "Yes — ARABTEC delivers technology solutions that can be designed around government and large-enterprise procedures and requirements, after studying scope, systems, data and regulatory requirements.",
              },
            },
            {
              q: {
                ar: "هل تقدم أربتك حلولاً مخصصة؟",
                en: "Does ARABTEC provide customized solutions?",
              },
              a: {
                ar: "نعم، يمكن تطوير وتخصيص الحلول البرمجية وأنظمة ERP والتكاملات التقنية وفق عمليات المؤسسة ومتطلبات المستخدمين والأنظمة القائمة.",
                en: "Yes — software solutions, ERP and technical integrations can be developed and customized to the organization's processes, user requirements and existing systems.",
              },
            },
            {
              q: {
                ar: "هل تنفذ أربتك المشروع كاملاً؟",
                en: "Does ARABTEC deliver the full project end-to-end?",
              },
              a: {
                ar: "يمكن أن يشمل نطاق عمل أربتك التحليل والتصميم والتطوير أو التوريد والتنفيذ والتكامل والتدريب والدعم، وفق طبيعة المشروع والعقد المعتمد.",
                en: "ARABTEC's scope can cover analysis, design, development or supply, delivery, integration, training and support — according to the project's nature and the signed contract.",
              },
            },
            {
              q: {
                ar: "في أي قطاعات تعمل أربتك؟",
                en: "Which sectors does ARABTEC serve?",
              },
              a: {
                ar: "تخدم أربتك الجهات الحكومية، النفط والغاز، التعليم، الرعاية الصحية، البنوك والخدمات المالية، إضافة إلى الشركات والمؤسسات.",
                en: "ARABTEC serves government, oil & gas, education, healthcare, banking & finance, as well as corporates and enterprises.",
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
                name: "متى تأسست شركة أربتك؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تأسست أربتك عام 1996، وبدأت بتقديم حلول الشبكات والاتصال والبنية التحتية والأنظمة التقنية، ثم وسعت خدماتها لتشمل البرمجيات والأنظمة المؤسسية والسحابة والذكاء الاصطناعي.",
                },
              },
              {
                "@type": "Question",
                name: "ما الخدمات التي تقدمها أربتك؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "حلول الذكاء الاصطناعي و AI Agents، أنظمة ERP وتطبيقات الأعمال، تطوير البرمجيات وتكامل الأنظمة، السحابة والبنية التحتية، الشبكات والاتصال، وأنظمة المراقبة والحضور والتحكم بالدخول.",
                },
              },
              {
                "@type": "Question",
                name: "هل تقدم أربتك حلولاً للجهات الحكومية؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن تصميم الحلول وفق إجراءات ومتطلبات الجهات الحكومية والمؤسسات الكبرى، بعد دراسة نطاق المشروع والأنظمة والبيانات والمتطلبات التنظيمية.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}