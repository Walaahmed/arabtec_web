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
  MessageSquare,
  Users,
  FileSearch,
  Workflow,
  BarChart3,
  Plug,
  Landmark,
  Building2,
  CheckCircle2,
  Sparkles,
  Shield,
  Database,
  Layers,
} from "lucide-react";

// الصور
import heroImg from "@/assets/government-enterprise-ai-agent.webp";
import govAiImg from "@/assets/government-ai-solutions.jpg";
import knowledgeImg from "@/assets/enterprise-knowledge-ai-assistant.jpg";
import ctaBg from "@/assets/arabtec-digital-connectivity-background.jpg";

const useCaseIcons = [Users, MessageSquare, FileSearch, Workflow, BarChart3, Plug];

export default function AiAgentsPage() {
  const { lang, t } = useI18n();
  const l = useL();
  const isAr = lang === "ar";
  const s = getService("ai-agents");
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
          {/* الصورة — يسار */}
          <div className="order-2 lg:order-1">
            <img
              src={heroImg}
              alt={
                isAr
                  ? "وكيل ذكاء اصطناعي متكامل مع أنظمة ووثائق المؤسسة"
                  : "AI agent integrated with enterprise systems and documents"
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
              {isAr ? "حلول الذكاء الاصطناعي للمؤسسات" : "AI solutions for enterprises"}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-deep)]">
              {isAr
                ? "حلول الذكاء الاصطناعي و AI Agents للجهات الحكومية والمؤسسات"
                : "AI & AI Agents solutions for government entities and enterprises"}
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {isAr
                ? "تساعد أربتك الجهات الحكومية والمؤسسات على الاستفادة العملية من الذكاء الاصطناعي من خلال تصميم وتطوير وكلاء ذكاء اصطناعي ومساعدين مؤسسيين قادرين على الوصول إلى المعلومات المصرح بها، دعم المستخدمين، تنفيذ المهام وأتمتة الإجراءات ضمن بيئة العمل."
                : "ARABTEC helps government entities and enterprises put AI to practical use by designing and building AI agents and enterprise assistants capable of accessing authorized information, supporting users, executing tasks and automating procedures within the work environment."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "نطور حلول AI Agents قابلة للتكامل مع الأنظمة المؤسسية، قواعد البيانات، الوثائق، بوابات الخدمات، أنظمة ERP ومنصات إدارة علاقات العملاء، بما يساعد على تحسين سرعة الوصول إلى المعلومات، تقليل الأعمال اليدوية ورفع كفاءة الخدمات والعمليات."
                : "We build AI Agents integrable with enterprise systems, databases, documents, service portals, ERP and CRM — improving access to information, reducing manual work and raising the efficiency of services and operations."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">
                {isAr ? "اطلب عرضًا توضيحيًا" : "Request a demo"}
              </CTAButton>
              <CTAButton to="/contact" variant="outline">
                {isAr ? "ناقش حالة الاستخدام" : "Discuss your use case"}
              </CTAButton>
            </div>

            {/* شريط مختصر */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { ar: "مساعدون ذكيون للموظفين", en: "AI copilots for employees" },
                { ar: "خدمة المتعاملين", en: "Customer service" },
                { ar: "بحث مؤسسي ذكي", en: "Enterprise search" },
                { ar: "أتمتة الإجراءات", en: "Process automation" },
                { ar: "تكامل الأنظمة", en: "System integration" },
                { ar: "تحليل البيانات", en: "Data analytics" },
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
          2. ما هو Agent AI؟
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "ما هو وكيل الذكاء الاصطناعي Agent AI؟"
            : "What is an AI Agent?"}
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start mt-6">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "وكيل الذكاء الاصطناعي هو نظام ذكي مصمم لفهم طلب المستخدم، الوصول إلى المصادر والأنظمة المصرح بها، تحليل المعلومات واتخاذ خطوات محددة لتنفيذ مهمة أو مساعدة المستخدم في إنجازها."
                : "An AI Agent is an intelligent system designed to understand a user's request, access authorized sources and systems, analyze information and take specific steps to execute a task or help the user complete it."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "لا يقتصر Agent AI على تقديم إجابة نصية؛ بل يمكن تصميمه للبحث في الوثائق، جمع البيانات، تحديث الطلبات، إنشاء ملخصات، توجيه المعاملات، إعداد التقارير والتفاعل مع أنظمة المؤسسة وفق الصلاحيات والقواعد المحددة."
                : "AI Agent is not limited to providing a text answer — it can be designed to search documents, collect data, update requests, create summaries, route transactions, prepare reports and interact with enterprise systems within defined permissions and rules."}
            </p>
          </div>

          {/* جدول المقارنة */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold text-lg mb-4">
              {isAr
                ? "الفرق بين Chatbot تقليدي و Agent AI مؤسسي"
                : "Difference between traditional Chatbot and enterprise AI Agent"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-start py-2 font-semibold text-muted-foreground">
                      {isAr ? "Chatbot تقليدي" : "Traditional Chatbot"}
                    </th>
                    <th className="text-start py-2 font-semibold text-[color:var(--brand-deep)]">
                      {isAr ? "AI Agent مؤسسي" : "Enterprise AI Agent"}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {(isAr
                    ? [
                        ["يجيب عن أسئلة محددة مسبقًا", "يفهم الطلب وسياقه"],
                        ["يعتمد غالبًا على سيناريوهات ثابتة", "يستخدم المعرفة والأنظمة المصرح بها"],
                        ["يوجه المستخدم إلى معلومة", "يمكنه تنفيذ خطوات ضمن إجراء"],
                        ["تكامله محدود", "يمكن ربطه بعدة أنظمة ومصادر"],
                        ["قدرته على التخصيص محدودة", "يصمم وفق عمليات المؤسسة وصلاحياتها"],
                      ]
                    : [
                        ["Answers pre-defined questions", "Understands request and context"],
                        ["Often relies on fixed scenarios", "Uses authorized knowledge and systems"],
                        ["Guides user to information", "Can execute steps within a process"],
                        ["Limited integration", "Can be connected to multiple systems and sources"],
                        ["Limited customization", "Designed around enterprise processes and permissions"],
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
      </Section>

      {/* ============================================================
          3. حالات استخدام الذكاء الاصطناعي — 6 حالات
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "حلول ذكاء اصطناعي مصممة لاحتياجات المؤسسة"
            : "AI solutions designed for enterprise needs"}
          intro={
            isAr
              ? "تختلف حالات استخدام الذكاء الاصطناعي باختلاف القطاع والعمليات والبيانات المتاحة. لذلك تبدأ أربتك بدراسة الاحتياج وتحديد المهام التي يمكن تحسينها أو أتمتتها قبل تصميم الحل."
              : "AI use cases vary by sector, operations and available data. ARABTEC therefore starts by studying the need and identifying tasks that can be improved or automated before designing the solution."}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            {
              icon: Users,
              hAr: "مساعد ذكي للموظفين",
              hEn: "AI copilot for employees",
              descAr: "مساعد مؤسسي يتيح للموظفين البحث في السياسات والإجراءات والأدلة والنماذج والمعلومات الداخلية باستخدام اللغة الطبيعية.",
              descEn: "An enterprise assistant that lets employees search policies, procedures, manuals, forms and internal information using natural language.",
              itemsAr: ["الإجابة عن أسئلة الموظفين", "البحث في السياسات والإجراءات", "العثور على النماذج والوثائق", "تلخيص التعاميم والتقارير", "إرشاد الموظف إلى الخطوة التالية", "الوصول إلى المعرفة وفق الصلاحيات"],
              itemsEn: ["Answering employee questions", "Searching policies & procedures", "Finding forms & documents", "Summarizing circulars & reports", "Guiding to next step", "Knowledge access per permissions"],
            },
            {
              icon: MessageSquare,
              hAr: "Agent AI لخدمة المتعاملين والعملاء",
              hEn: "AI Agent for customer service",
              descAr: "وكيل ذكي يساعد المتعاملين على فهم الخدمات والمتطلبات، متابعة الطلبات والوصول إلى المعلومات من خلال القنوات الرقمية.",
              descEn: "An intelligent agent that helps customers understand services and requirements, track requests and access information through digital channels.",
              itemsAr: ["الإجابة عن الاستفسارات", "شرح الخدمات والمتطلبات", "توجيه المستخدم إلى الخدمة المناسبة", "المساعدة في تعبئة الطلبات", "متابعة حالة المعاملة عند توفر التكامل", "تقديم الخدمة بالعربية والإنجليزية", "تحويل الحالات المعقدة إلى الموظف المختص"],
              itemsEn: ["Answering inquiries", "Explaining services & requirements", "Guiding to the right service", "Assisting with form filling", "Tracking request status (with integration)", "Arabic & English service", "Escalating complex cases to staff"],
            },
            {
              icon: FileSearch,
              hAr: "البحث الذكي في الوثائق المؤسسية",
              hEn: "Intelligent enterprise document search",
              descAr: "حل يسمح للمستخدم بالبحث داخل آلاف الوثائق والعقود والسياسات والتقارير والأدلة باستخدام أسئلة طبيعية بدلاً من البحث اليدوي التقليدي.",
              descEn: "A solution that lets users search thousands of documents, contracts, policies, reports and manuals using natural questions instead of traditional manual search.",
              itemsAr: ["السياسات والإجراءات", "اللوائح والتعاميم", "العقود والاتفاقيات", "أدلة الموظفين", "التقارير السنوية", "المراسلات المعتمدة", "الأدلة التشغيلية", "قواعد المعرفة"],
              itemsEn: ["Policies & procedures", "Regulations & circulars", "Contracts & agreements", "Employee handbooks", "Annual reports", "Approved correspondence", "Operational manuals", "Knowledge bases"],
            },
            {
              icon: Workflow,
              hAr: "أتمتة الإجراءات والعمليات",
              hEn: "Process & task automation",
              descAr: "وكلاء ذكاء اصطناعي يساعدون على تنفيذ مراحل محددة من الإجراءات المؤسسية وتقليل الوقت المستغرق في الأعمال المتكررة.",
              descEn: "AI agents that help execute specific stages of enterprise procedures and reduce time spent on repetitive work.",
              itemsAr: ["تصنيف الطلبات والمستندات", "استخراج البيانات من الملفات", "تلخيص المراسلات", "إعداد مسودات الردود", "توجيه الطلب إلى الإدارة المختصة", "التحقق من اكتمال المعلومات", "إنشاء التقارير الأولية", "إرسال التنبيهات والإشعارات"],
              itemsEn: ["Classifying requests & documents", "Extracting data from files", "Summarizing correspondence", "Drafting responses", "Routing to the right department", "Verifying completeness", "Creating initial reports", "Sending notifications"],
            },
            {
              icon: BarChart3,
              hAr: "تحليل البيانات ودعم القرار",
              hEn: "Data analytics & decision support",
              descAr: "حلول تعتمد على الذكاء الاصطناعي لتحليل البيانات المؤسسية وتقديم مؤشرات وملخصات تساعد الإدارات والقيادات على متابعة الأداء واتخاذ القرار.",
              descEn: "AI-powered solutions that analyze enterprise data and provide indicators and summaries to help management and leadership track performance and make decisions.",
              itemsAr: ["تحليل مؤشرات الأداء", "اكتشاف الأنماط والاتجاهات", "تلخيص البيانات التشغيلية", "إنشاء تقارير للإدارة", "مقارنة الأداء بين الفترات", "تقديم تنبيهات مبكرة", "طرح الأسئلة على البيانات باللغة الطبيعية"],
              itemsEn: ["Analyzing KPIs", "Discovering patterns & trends", "Summarizing operational data", "Generating management reports", "Comparing performance across periods", "Early alerts", "Asking data questions in natural language"],
            },
            {
              icon: Plug,
              hAr: "معالجة المستندات بالذكاء الاصطناعي",
              hEn: "AI document processing",
              descAr: "استخدام تقنيات الذكاء الاصطناعي لاستخراج وتنظيم ومراجعة المعلومات الواردة في المستندات والنماذج.",
              descEn: "Using AI to extract, organize and review information in documents and forms.",
              itemsAr: ["الفواتير", "العقود", "طلبات الخدمات", "نماذج الموارد البشرية", "تقارير المشاريع", "المراسلات", "أوامر الشراء", "المستندات الممسوحة ضوئيًا"],
              itemsEn: ["Invoices", "Contracts", "Service requests", "HR forms", "Project reports", "Correspondence", "Purchase orders", "Scanned documents"],
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.hEn}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">{isAr ? c.hAr : c.hEn}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? c.descAr : c.descEn}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {(isAr ? c.itemsAr : c.itemsEn).map((x) => (
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
          4. حلول AI للجهات الحكومية
          ============================================================ */}
      <Section className="bg-secondary">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img
            src={govAiImg}
            alt={isAr
              ? "حلول الذكاء الاصطناعي لتطوير الخدمات الحكومية ودعم الموظفين والمتعاملين"
              : "AI solutions for government services development and employee/customer support"}
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
              {isAr ? "حلول AI تدعم تطوير الخدمات الحكومية" : "AI solutions supporting government services"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "يمكن تصميم حلول الذكاء الاصطناعي للجهات الحكومية بهدف تسهيل الوصول إلى المعلومات، تحسين تجربة المتعامل، دعم الموظفين وتسريع الإجراءات الداخلية، مع ربط الحل بمصادر المعرفة والأنظمة المعتمدة وفق نطاق المشروع."
                : "AI solutions for government entities can be designed to facilitate access to information, improve customer experience, support employees and accelerate internal procedures — with the solution connected to approved knowledge sources and systems within the project scope."}
            </p>

            <h3 className="mt-6 font-bold">
              {isAr ? "حالات الاستخدام الحكومية" : "Government use cases"}
            </h3>

            <div className="mt-4 space-y-4">
              {(isAr
                ? [
                    { t: "مساعد الخدمات الحكومية", d: "مساعدة المتعامل على معرفة الخدمة المناسبة، متطلباتها، خطواتها والقنوات المتاحة لتقديمها." },
                    { t: "مساعد السياسات والتشريعات", d: "تمكين الموظفين من البحث في السياسات واللوائح والتعاميم والأدلة المؤسسية بسرعة." },
                    { t: "وكيل متابعة الطلبات", d: "عرض حالة الطلب أو المعاملة عند ربط الوكيل بنظام الخدمات المؤسسي." },
                    { t: "أتمتة المراسلات والملخصات", d: "تصنيف المراسلات، إعداد الملخصات، استخراج الموضوعات وتوجيهها إلى الإدارات المعنية." },
                    { t: "دعم مراكز الاتصال", d: "اقتراح الإجابات للموظف والوصول السريع إلى المعلومات أثناء خدمة المتعامل." },
                    { t: "تحليل الملاحظات والشكاوى", d: "تصنيف ملاحظات المتعاملين واكتشاف الموضوعات المتكررة وفرص تحسين الخدمة." },
                  ]
                : [
                    { t: "Government services assistant", d: "Helps customers find the right service, its requirements, steps and available delivery channels." },
                    { t: "Policies & regulations assistant", d: "Enables employees to quickly search policies, regulations, circulars and institutional manuals." },
                    { t: "Request tracking agent", d: "Displays request or transaction status when integrated with the enterprise services system." },
                    { t: "Correspondence & summary automation", d: "Classifies correspondence, prepares summaries, extracts topics and routes them to relevant departments." },
                    { t: "Contact center support", d: "Suggests answers to employees and provides quick access to information while serving the customer." },
                    { t: "Feedback & complaint analysis", d: "Classifies customer feedback and identifies recurring topics and service improvement opportunities." },
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
          5. المساعد الذكي الداخلي
          ============================================================ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-deep)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-deep)] mb-3">
              <Building2 className="h-3.5 w-3.5" />
              {isAr ? "للمؤسسات" : "For enterprises"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-deep)]">
              {isAr ? "معرفة المؤسسة في واجهة ذكية واحدة" : "Enterprise knowledge in one intelligent interface"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {isAr
                ? "تتوزع المعرفة المؤسسية عادة بين الملفات المشتركة، أنظمة إدارة الوثائق، البريد الإلكتروني، المواقع الداخلية وقواعد البيانات. يمكن للمساعد الذكي توحيد الوصول إلى هذه المعرفة من خلال واجهة محادثة بسيطة."
                : "Enterprise knowledge is usually spread across shared files, document management systems, email, intranets and databases. The intelligent assistant can unify access to this knowledge through a simple chat interface."}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {isAr
                ? "يسأل الموظف باللغة الطبيعية، ويبحث النظام في المصادر المعتمدة ويعرض الإجابة أو الوثيقة ذات العلاقة وفق الصلاحيات المحددة."
                : "The employee asks in natural language, the system searches approved sources and presents the answer or relevant document according to defined permissions."}
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div>
                <h3 className="font-bold mb-3">
                  {isAr ? "مصادر التكامل المحتملة" : "Potential integration sources"}
                </h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {(isAr
                    ? ["أنظمة إدارة الوثائق", "بوابات الإنترانت", "قواعد المعرفة SharePoint", "أنظمة ERP", "أنظمة CRM", "قواعد البيانات", "واجهات API", "التخزين السحابي أو الداخلي", "الملفات المؤسسية"]
                    : ["Document management systems", "Intranet portals", "SharePoint knowledge bases", "ERP systems", "CRM systems", "Databases", "APIs", "Cloud or on-premise storage", "Enterprise files"]
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
                  {isAr ? "النتائج المتوقعة" : "Expected outcomes"}
                </h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {(isAr
                    ? ["تقليل الوقت المستغرق في البحث", "توحيد الوصول إلى المعرفة", "دعم الموظفين الجدد", "تقليل تكرار الاستفسارات", "تحسين الاستفادة من الوثائق", "تقديم إجابات مبنية على المصادر المعتمدة"]
                    : ["Reduced research time", "Unified knowledge access", "Support for new employees", "Fewer repeated inquiries", "Better use of documents", "Source-based answers"]
                  ).map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <img
            src={knowledgeImg}
            alt={isAr
              ? "مساعد ذكاء اصطناعي للبحث في وثائق ومعرفة المؤسسة"
              : "AI assistant for searching enterprise documents and knowledge"}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </Section>

      {/* ============================================================
          6. تكامل AI Agents مع الأنظمة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "تكامل الذكاء الاصطناعي مع الأنظمة والبيانات المؤسسية"
            : "AI integration with enterprise systems and data"}
          intro={
            isAr
              ? "تزداد قيمة Agent AI عندما يكون متكاملًا مع بيئة المؤسسة بدلًا من العمل كأداة منفصلة. يمكن تصميم التكامل بما يسمح للوكيل بالوصول إلى البيانات أو تنفيذ إجراءات محددة وفق الصلاحيات والقواعد المعتمدة."
              : "An AI Agent's value increases when it's integrated with the enterprise environment instead of operating as a standalone tool. Integration can be designed to let the agent access data or execute specific actions per approved permissions and rules."}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { icon: Database, hAr: "أنظمة ERP", hEn: "ERP systems", descAr: "الوصول إلى معلومات العمليات والموارد والطلبات والمخزون والموظفين وفق الصلاحيات.", descEn: "Access to operations, resources, requests, inventory and employee information within permissions." },
            { icon: Users, hAr: "أنظمة CRM", hEn: "CRM systems", descAr: "الاطلاع على بيانات العملاء والحالات والتفاعلات وتقديم الدعم للموظفين.", descEn: "Access customer, case and interaction data and support employees." },
            { icon: FileSearch, hAr: "أنظمة إدارة الوثائق", hEn: "Document management systems", descAr: "البحث في الوثائق والسياسات والعقود والأدلة المؤسسية.", descEn: "Search documents, policies, contracts and enterprise manuals." },
            { icon: Building2, hAr: "بوابات الخدمات", hEn: "Service portals", descAr: "مساعدة المستخدم، متابعة الطلبات وتنفيذ مراحل محددة من الخدمة.", descEn: "Support users, track requests and execute specific service stages." },
            { icon: Database, hAr: "قواعد البيانات", hEn: "Databases", descAr: "قراءة البيانات المصرح بها وإعداد ملخصات أو تقارير وفق نطاق المشروع.", descEn: "Read authorized data and prepare summaries or reports per project scope." },
            { icon: Plug, hAr: "واجهات API", hEn: "APIs", descAr: "ربط الوكيل بأنظمة داخلية أو خارجية من خلال واجهات تكامل منظمة.", descEn: "Connect the agent to internal or external systems through well-defined integration interfaces." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.hEn}>
                <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base">{isAr ? c.hAr : c.hEn}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? c.descAr : c.descEn}
                </p>
              </Card>
            );
          })}
        </div>

        {/* مخطط معماري */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 overflow-x-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium min-w-max">
            {(isAr
              ? ["المستخدم", "Agent AI", "طبقة التكامل", "ERP / CRM", "الوثائق", "قواعد البيانات", "بوابات الخدمات"]
              : ["User", "AI Agent", "Integration Layer", "ERP / CRM", "Documents", "Databases", "Service Portals"]
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

        <div className="mt-8">
          <CTAButton to="/services/software-development" variant="outline">
            {isAr
              ? "استكشف خدمات تطوير البرمجيات وتكامل الأنظمة"
              : "Explore software development & system integration"}
          </CTAButton>
        </div>
      </Section>

      {/* ============================================================
          7. بنية الحل
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr ? "مكونات حل Agent AI المؤسسي" : "Components of an enterprise AI Agent solution"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? [
                { t: "واجهة المستخدم", d: "قناة تفاعل يستخدمها الموظف أو المتعامل، مثل الموقع الإلكتروني، بوابة الموظفين، تطبيق الهاتف أو واجهة المحادثة." },
                { t: "محرك الذكاء الاصطناعي", d: "يعالج طلب المستخدم، يفهم السياق ويحدد الخطوات أو المعلومات المطلوبة." },
                { t: "قاعدة المعرفة", d: "تضم الوثائق والمصادر والمعلومات المعتمدة التي يسمح للوكيل بالوصول إليها." },
                { t: "طبقة التكامل", d: "تربط الوكيل بأنظمة المؤسسة وقواعد البيانات وواجهات API." },
                { t: "الصلاحيات والحوكمة", d: "تحدد ما يستطيع كل مستخدم الوصول إليه، وما يستطيع الوكيل قراءته أو تنفيذه." },
                { t: "المتابعة والتحسين", d: "متابعة الاستخدام وجودة الإجابات والحالات التي تحتاج إلى تطوير أو تدخل بشري." },
              ]
            : [
                { t: "User interface", d: "Interaction channel used by the employee or customer — website, employee portal, mobile app or chat interface." },
                { t: "AI engine", d: "Processes the user's request, understands context and determines required steps or information." },
                { t: "Knowledge base", d: "Contains the approved documents, sources and information the agent is allowed to access." },
                { t: "Integration layer", d: "Connects the agent to enterprise systems, databases and APIs." },
                { t: "Permissions & governance", d: "Defines what each user can access and what the agent can read or execute." },
                { t: "Monitoring & improvement", d: "Monitors usage, answer quality and cases requiring development or human intervention." },
              ]
          ).map((step, i) => (
            <li key={i} className="relative rounded-xl border border-border bg-card p-5">
              <div className="text-3xl font-extrabold text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <div className="mt-1 font-semibold">{step.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          8. البيانات والصلاحيات والحوكمة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "ذكاء اصطناعي مصمم وفق بيئة المؤسسة"
            : "AI designed around the enterprise environment"}
          intro={
            isAr
              ? "نراعي عند تصميم حلول الذكاء الاصطناعي طبيعة بيانات المؤسسة ومصادرها وصلاحيات المستخدمين والسياسات الداخلية المعتمدة. تحدد متطلبات البيانات والصلاحيات والاحتفاظ بالسجلات وآلية الاستضافة والتكامل خلال مرحلة تحليل المشروع وتصميم الحل."
              : "When designing AI solutions, we consider the nature of enterprise data, its sources, user permissions and approved internal policies. Data, permissions, logging, hosting and integration requirements are defined during project analysis and solution design."}
        />

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? [
                "مصادر البيانات والوثائق",
                "صلاحيات المستخدمين",
                "مستويات الوصول",
                "آلية التحقق من الهوية",
                "سجلات الاستخدام والعمليات",
                "مراجعة المحتوى والمصادر",
                "تحديد الإجراءات المسموح للوكيل بتنفيذها",
                "آلية التحويل إلى الموظف البشري",
                "بيئة الاستضافة المطلوبة",
                "سياسات الاحتفاظ بالبيانات",
              ]
            : [
                "Data and document sources",
                "User permissions",
                "Access levels",
                "Identity verification",
                "Usage and operation logs",
                "Content and source review",
                "Actions the agent is allowed to perform",
                "Escalation to human employee",
                "Required hosting environment",
                "Data retention policies",
              ]
          ).map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-3xl mx-auto rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 p-5">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isAr
                ? "لا تمنح حلول AI Agents صلاحيات مفتوحة بصورة افتراضية. يتم تحديد الوصول والوظائف وفق نطاق المشروع وسياسات المؤسسة والأنظمة المصرح بها."
                : "AI Agents solutions do not grant open permissions by default. Access and functions are defined according to project scope, enterprise policies and approved systems."}
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          9. القطاعات المستفيدة
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "حلول ذكاء اصطناعي قابلة للتخصيص حسب القطاع"
            : "AI solutions customizable by sector"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {[
            { key: "government", ar: "الجهات الحكومية", en: "Government", itemsAr: ["خدمات المتعاملين", "البحث في السياسات واللوائح", "دعم الموظفين", "متابعة الطلبات", "تحليل الملاحظات"], itemsEn: ["Customer services", "Policy search", "Employee support", "Request tracking", "Feedback analysis"] },
            { key: "oil-gas", ar: "النفط والغاز", en: "Oil & gas", itemsAr: ["البحث في الأدلة التشغيلية", "تلخيص التقارير", "فرق دعم المواقع", "تحليل البيانات التشغيلية", "إدارة المعرفة الفنية"], itemsEn: ["Operational manual search", "Report summarization", "Site support teams", "Operational data analysis", "Technical knowledge management"] },
            { key: "healthcare", ar: "الرعاية الصحية", en: "Healthcare", itemsAr: ["دعم الموظفين", "البحث في السياسات والإجراءات", "إدارة المعرفة", "تصنيف المستندات", "تحسين الخدمات الإدارية"], itemsEn: ["Employee support", "Policy & procedure search", "Knowledge management", "Document classification", "Admin service improvement"] },
            { key: "education", ar: "التعليم", en: "Education", itemsAr: ["مساعد للطلاب والموظفين", "البحث في اللوائح", "الإجابة عن الاستفسارات", "إدارة المعرفة التعليمية والإدارية", "أتمتة الطلبات"], itemsEn: ["Student & staff assistant", "Regulation search", "Answering inquiries", "Educational & admin knowledge", "Request automation"] },
            { key: "banking", ar: "البنوك والخدمات المالية", en: "Banking & finance", itemsAr: ["دعم الموظفين", "البحث في السياسات", "تصنيف الطلبات", "تحليل المراسلات", "أتمتة المهام الداخلية"], itemsEn: ["Employee support", "Policy search", "Request classification", "Correspondence analysis", "Internal task automation"] },
            { key: "enterprise", ar: "الشركات والمؤسسات", en: "Enterprises", itemsAr: ["مساعد موارد بشرية", "مساعد خدمة العملاء", "البحث في الوثائق", "أتمتة العمليات", "تحليل بيانات الأعمال"], itemsEn: ["HR assistant", "Customer service assistant", "Document search", "Process automation", "Business data analysis"] },
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
          10. منهجية تنفيذ المشروع — 8 مراحل
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "من تحديد حالة الاستخدام إلى الإطلاق والتحسين"
            : "From use case selection to go-live and improvement"}
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {(isAr
            ? [
                { t: "اكتشاف الاحتياج", d: "دراسة أهداف المؤسسة والتحديات والعمليات والمستخدمين والنتائج المطلوبة." },
                { t: "اختيار حالة الاستخدام", d: "تحديد الحالة ذات القيمة الواضحة والقابلة للتنفيذ والقياس." },
                { t: "دراسة البيانات والأنظمة", d: "مراجعة مصادر المعرفة والوثائق وقواعد البيانات والتكاملات المطلوبة." },
                { t: "تصميم الحل", d: "تحديد رحلة المستخدم، البنية التقنية، الصلاحيات، التكاملات ومؤشرات النجاح." },
                { t: "بناء نموذج أولي", d: "تنفيذ نموذج أولي أو إثبات مفهوم لاختبار الحالة مع مجموعة محددة من المستخدمين." },
                { t: "التطوير والتكامل", d: "تطوير الحل وربطه بالأنظمة والمصادر المعتمدة وتنفيذ الاختبارات." },
                { t: "الإطلاق والتدريب", d: "إطلاق الحل للمستخدمين وتقديم التدريب والإرشادات التشغيلية." },
                { t: "المتابعة والتحسين", d: "متابعة جودة الاستخدام والإجابات والأداء وتطوير الحل بناءً على النتائج." },
              ]
            : [
                { t: "Requirement discovery", d: "Studying the organization's goals, challenges, operations, users and expected outcomes." },
                { t: "Use case selection", d: "Identifying the case with clear value that can be delivered and measured." },
                { t: "Data & systems study", d: "Reviewing knowledge sources, documents, databases and required integrations." },
                { t: "Solution design", d: "Defining user journey, architecture, permissions, integrations and success metrics." },
                { t: "Prototype building", d: "Building a prototype or proof of concept to test the case with a specific user group." },
                { t: "Development & integration", d: "Developing the solution, integrating with approved systems and sources, and running tests." },
                { t: "Go-live & training", d: "Launching the solution to users and providing training and operational guidance." },
                { t: "Monitoring & improvement", d: "Monitoring usage, answers, and performance and evolving the solution based on outcomes." },
              ]
          ).map((step, i) => (
            <li key={i} className="relative rounded-xl border border-border bg-card p-5">
              <div className="text-3xl font-extrabold text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <div className="mt-1 font-semibold">{step.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          11. لماذا أربتك؟
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "لماذا تختار المؤسسات أربتك لحلول الذكاء الاصطناعي؟"
            : "Why organizations choose ARABTEC for AI solutions"}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {(isAr
            ? [
                { t: "فهم الأنظمة المؤسسية", d: "نجمع بين المعرفة بالبرمجيات وتطبيقات الأعمال والبنية التحتية والشبكات والتكامل، بما يساعد على بناء حل متصل ببيئة المؤسسة." },
                { t: "تصميم الحل وفق حالة الاستخدام", d: "نبدأ من المشكلة والنتيجة المطلوبة، وليس من أداة ذكاء اصطناعي جاهزة." },
                { t: "تكامل مع الأنظمة الحالية", d: "يمكن ربط الحل بالوثائق وقواعد البيانات والبوابات وأنظمة ERP و CRM عبر واجهات التكامل." },
                { t: "دعم اللغة العربية", d: "يمكن تصميم واجهات وتجارب استخدام ومصادر معرفة باللغة العربية والإنجليزية وفق متطلبات المشروع." },
                { t: "تنفيذ مرحلي", d: "إمكانية البدء بنموذج أولي ثم التوسع بناءً على النتائج والاحتياجات." },
                { t: "نقطة مسؤولية واحدة", d: "إدارة التحليل والتصميم والتطوير والتكامل والاختبار والدعم ضمن نطاق عمل واضح." },
              ]
            : [
                { t: "Understanding enterprise systems", d: "We combine knowledge of software, business applications, infrastructure, networks and integration to build a solution connected to the enterprise environment." },
                { t: "Design based on use case", d: "We start from the problem and desired outcome, not from a ready-made AI tool." },
                { t: "Integration with existing systems", d: "The solution can be connected to documents, databases, portals and ERP/CRM via integration interfaces." },
                { t: "Arabic language support", d: "Interfaces, use cases and knowledge sources can be designed in Arabic and English per project requirements." },
                { t: "Phased delivery", d: "Start with a prototype, then expand based on outcomes and needs." },
                { t: "Single point of accountability", d: "Managing analysis, design, development, integration, testing and support within a clear scope." },
              ]
          ).map((c) => (
            <Card key={c.t}>
              <div className="h-11 w-11 rounded-lg bg-[color:var(--brand-deep)]/10 text-[color:var(--brand-deep)] grid place-items-center mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          12. خدمات مرتبطة
          ============================================================ */}
      <Section className="bg-secondary">
        <SectionHead
          title={isAr
            ? "خدمات تدعم نجاح حلول الذكاء الاصطناعي"
            : "Services supporting the success of AI solutions"}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {[
            { ar: "تطوير البرمجيات وتكامل الأنظمة", en: "Software development & system integration", descAr: "تطوير الواجهات والبوابات وواجهات API وربط Agent AI بأنظمة المؤسسة.", descEn: "Developing interfaces, portals, APIs and connecting AI Agent to enterprise systems.", link: "software-development" },
            { ar: "أنظمة ERP وتطبيقات الأعمال", en: "ERP & business applications", descAr: "ربط الذكاء الاصطناعي بالعمليات والبيانات المؤسسية.", descEn: "Connecting AI to enterprise processes and data.", link: "erp-business-applications" },
            { ar: "السحابة والبنية التحتية", en: "Cloud & infrastructure", descAr: "تجهيز البيئة التقنية والاستضافة المطلوبة لتشغيل الحل وفق نطاق المشروع.", descEn: "Preparing the technology environment and required hosting per project scope.", link: "cloud-infrastructure" },
            { ar: "الشبكات والاتصال", en: "Networks & connectivity", descAr: "دعم الاتصال بين المستخدمين والمواقع والأنظمة المؤسسية.", descEn: "Supporting connectivity between users, sites and enterprise systems.", link: "network-connectivity" },
          ].map((c) => (
            <Card key={c.link}>
              <h3 className="font-bold text-base">{isAr ? c.ar : c.en}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {isAr ? c.descAr : c.descEn}
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: c.link }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:text-gold"
              >
                {isAr ? "استكشف الخدمة" : "Explore service"}
                <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================================
          13. CTA
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
              ? "هل لديكم عملية أو خدمة يمكن تحسينها بالذكاء الاصطناعي؟"
              : "Do you have a process or service that AI can improve?"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/85">
            {isAr
              ? "شاركوا فريق أربتك بالتحدي أو حالة الاستخدام التي ترغبون في تطويرها، وسنعمل معكم على دراسة المتطلبات والبيانات والأنظمة وتحديد المسار المناسب لبدء مشروع Agent AI مؤسسي."
              : "Share the challenge or use case you want to develop with the ARABTEC team — we will work with you to study requirements, data and systems and define the right path to start an enterprise AI Agent project."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary"
            >
              {isAr ? "اطلب عرضًا توضيحيًا" : "Request a demo"}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold"
            >
              {isAr ? "اطلب استشارة لحالة الاستخدام" : "Request a use case consultation"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          14. FAQ
          ============================================================ */}
      <Section>
        <SectionHead
          title={isAr
            ? "أسئلة شائعة عن AI Agents وحلول الذكاء الاصطناعي"
            : "Frequently asked questions about AI Agents and AI solutions"}
        />

        <FAQ
          items={[
            {
              q: { ar: "ما هو Agent AI؟", en: "What is an AI Agent?" },
              a: {
                ar: "Agent AI هو وكيل ذكاء اصطناعي يستطيع فهم طلب المستخدم، الوصول إلى المعلومات والأنظمة المصرح بها وتنفيذ خطوات أو مهام محددة وفق القواعد والصلاحيات المعتمدة.",
                en: "An AI Agent is an artificial intelligence agent that can understand a user's request, access authorized information and systems, and execute specific steps or tasks within approved rules and permissions.",
              },
            },
            {
              q: { ar: "ما الفرق بين Chatbot و Agent AI؟", en: "What's the difference between a Chatbot and an AI Agent?" },
              a: {
                ar: "يركز Chatbot عادة على الرد على الأسئلة، بينما يمكن لـ Agent AI البحث في عدة مصادر، فهم السياق والتفاعل مع الأنظمة أو تنفيذ إجراءات محددة عند السماح له بذلك.",
                en: "A Chatbot typically focuses on answering questions, while an AI Agent can search multiple sources, understand context and interact with systems or execute specific actions when allowed.",
              },
            },
            {
              q: { ar: "هل يمكن ربط Agent AI بأنظمة المؤسسة؟", en: "Can an AI Agent be integrated with enterprise systems?" },
              a: {
                ar: "نعم، يمكن ربطه بأنظمة ERP و CRM وقواعد البيانات وأنظمة الوثائق والبوابات الرقمية من خلال واجهات API أو وسائل التكامل المتاحة.",
                en: "Yes — it can be connected to ERP, CRM, databases, document systems and digital portals through APIs or available integration methods.",
              },
            },
            {
              q: { ar: "هل يمكن للوكيل الذكي البحث في الوثائق الداخلية؟", en: "Can the agent search internal documents?" },
              a: {
                ar: "نعم، يمكن تصميم مساعد ذكي للبحث في السياسات والإجراءات والعقود والتقارير وقواعد المعرفة المصرح بها.",
                en: "Yes — an intelligent assistant can be designed to search policies, procedures, contracts, reports and approved knowledge bases.",
              },
            },
            {
              q: { ar: "هل يمكن استخدام الذكاء الاصطناعي في الجهات الحكومية؟", en: "Can AI be used in government entities?" },
              a: {
                ar: "نعم، يمكن استخدامه لدعم الموظفين والمتعاملين، البحث في السياسات، تحسين الوصول إلى الخدمات، أتمتة بعض الإجراءات وتحليل البيانات، وفق متطلبات الجهة ونطاق المشروع.",
                en: "Yes — it can support employees and customers, search policies, improve service access, automate some procedures and analyze data — per the entity's requirements and project scope.",
              },
            },
            {
              q: { ar: "هل تدعم الحلول اللغة العربية؟", en: "Do the solutions support Arabic?" },
              a: {
                ar: "يمكن تصميم واجهات ومصادر معرفة وتجارب استخدام باللغة العربية والإنجليزية، وفق جودة المحتوى والوثائق المتاحة ومتطلبات المشروع.",
                en: "Interfaces, knowledge sources and user experiences can be designed in Arabic and English — per content quality, available documents and project requirements.",
              },
            },
            {
              q: { ar: "هل يمكن تشغيل الحل داخل بيئة المؤسسة؟", en: "Can the solution run inside the enterprise environment?" },
              a: {
                ar: "تحدد خيارات الاستضافة والبنية التقنية خلال مرحلة التصميم وفق متطلبات المؤسسة والأنظمة والسياسات المعتمدة.",
                en: "Hosting options and architecture are defined during the design phase based on the organization's requirements, systems and approved policies.",
              },
            },
            {
              q: { ar: "هل يصل Agent AI إلى جميع بيانات المؤسسة؟", en: "Does the AI Agent access all enterprise data?" },
              a: {
                ar: "لا. يتم تحديد مصادر البيانات والصلاحيات وفق نطاق المشروع، ولا يسمح للوكيل بالوصول إلا إلى الأنظمة والمعلومات المعتمدة.",
                en: "No. Data sources and permissions are defined by project scope — the agent can only access approved systems and information.",
              },
            },
            {
              q: { ar: "هل يمكن بدء المشروع بنموذج أولي؟", en: "Can the project start with a prototype?" },
              a: {
                ar: "نعم، يمكن البدء بإثبات مفهوم أو نموذج أولي لحالة استخدام محددة، ثم تقييم النتائج قبل التوسع.",
                en: "Yes — you can start with a proof of concept or prototype for a specific use case, then evaluate the results before expansion.",
              },
            },
            {
              q: { ar: "كم يستغرق تطوير Agent AI؟", en: "How long does developing an AI Agent take?" },
              a: {
                ar: "تعتمد المدة على حالة الاستخدام، عدد مصادر البيانات، جاهزية الوثائق، التكاملات المطلوبة والصلاحيات. يتم تحديد المدة بعد تحليل المتطلبات.",
                en: "Duration depends on the use case, number of data sources, document readiness, required integrations and permissions. It is determined after requirements analysis.",
              },
            },
            {
              q: { ar: "ما البيانات المطلوبة لبدء المشروع؟", en: "What data is needed to start the project?" },
              a: {
                ar: "تختلف البيانات وفق الحالة، وقد تشمل السياسات والوثائق وقواعد المعرفة وأوصاف الإجراءات وعينات من الطلبات والبيانات المطلوب تحليلها.",
                en: "Data varies by case and may include policies, documents, knowledge bases, procedure descriptions, sample requests and data to analyze.",
              },
            },
            {
              q: { ar: "هل يمكن دمج الموظف البشري مع Agent AI؟", en: "Can a human employee work alongside an AI Agent?" },
              a: {
                ar: "نعم، يمكن تصميم الحل بحيث يحول الحالات المعقدة أو غير المكتملة إلى الموظف المختص مع توفير ملخص للسياق والمعلومات المتاحة.",
                en: "Yes — the solution can be designed to escalate complex or incomplete cases to a specialist employee, with a summary of context and available information.",
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
                name: "ما هو Agent AI؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Agent AI هو وكيل ذكاء اصطناعي يستطيع فهم طلب المستخدم، الوصول إلى المعلومات والأنظمة المصرح بها وتنفيذ خطوات أو مهام محددة وفق القواعد والصلاحيات المعتمدة.",
                },
              },
              {
                "@type": "Question",
                name: "ما الفرق بين Chatbot و Agent AI؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "يركز Chatbot عادة على الرد على الأسئلة، بينما يمكن لـ Agent AI البحث في عدة مصادر، فهم السياق والتفاعل مع الأنظمة أو تنفيذ إجراءات محددة عند السماح له بذلك.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن ربط Agent AI بأنظمة المؤسسة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكن ربطه بأنظمة ERP و CRM وقواعد البيانات وأنظمة الوثائق والبوابات الرقمية من خلال واجهات API أو وسائل التكامل المتاحة.",
                },
              },
            ],
          }}
        />
      </Section>
    </>
  );
}