import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@/lib/router";
import { useI18n } from "@/lib/i18n";

// ✅ التعديل هنا: ضفنا query: '?url' عشان Vite يفهم إننا عايزين الرابط
const partnerLogos = Object.values(
  import.meta.glob("@/assets/partners/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  })
) as string[];

export default function Partners3DSlider() {
  const { lang } = useI18n();
  const isAr = lang === "ar";
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // دالة عشان نسحب الشريط يمين وشمال
  const scroll = (direction: "left" | "right") => {
    const amount = direction === "left" ? -300 : 300;
    scrollRef1.current?.scrollBy({ left: amount, behavior: "smooth" });
    scrollRef2.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  // بنقسم الشعارات لنصين عشان نعمل صفين
  const half = Math.ceil(partnerLogos.length / 2);
  const row1 = partnerLogos.slice(0, half);
  const row2 = partnerLogos.slice(half);

  // لو مفيش صور متسابة، مش هنعرض حاجة
  if (!partnerLogos.length) return null;

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="container-page relative">
        
        {/* العنوان */}
        <div className="text-center md:text-start mb-10">
          <div className="text-sm font-bold text-[#D4AF37] mb-2 flex items-center justify-center md:justify-start gap-2">
            <span>{isAr ? "شراكات تقنية" : "Technology partnerships"}</span>
            <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3D2E] mb-2">
            {isAr ? "شركاؤنا في التقنية" : "Our technology partners"}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {isAr
              ? "خبرات متكاملة تدعم نجاح أعمالكم"
              : "Integrated expertise supporting your business success"}
          </p>
        </div>

        {/* الصف الأول */}
        <div className="relative mb-6">
          {/* زر اليسار */}
          <button
            onClick={() => scroll(isAr ? "right" : "left")}
            className="absolute start-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
          >
            <ArrowLeft className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
          </button>

          <div
            ref={scrollRef1}
            className="flex gap-8 md:gap-12 overflow-x-auto items-center px-10 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[...row1, ...row1].map((logo, i) => (
             // في ملف Partners3DSlider.tsx
<img
  key={i}
  src={logo}
  alt={`Partner ${i}`}
  className="h-10 md:h-12 w-auto object-contain shrink-0 transition-all duration-300"
/>
            ))}
          </div>

          {/* زر اليمين */}
          <button
            onClick={() => scroll(isAr ? "left" : "right")}
            className="absolute end-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
          >
            <ArrowRight className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* فاصل */}
        <div className="w-full h-[1px] bg-gray-100 my-6"></div>

        {/* الصف الثاني */}
        <div className="relative mb-12">
          {/* زر اليسار */}
          <button
            onClick={() => scroll(isAr ? "right" : "left")}
            className="absolute start-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
          >
            <ArrowLeft className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
          </button>

          <div
            ref={scrollRef2}
            className="flex gap-8 md:gap-12 overflow-x-auto items-center px-10 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[...row2, ...row2].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i}`}
                className="h-10 md:h-12 w-auto object-contain shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              />
            ))}
          </div>

          {/* زر اليمين */}
          <button
            onClick={() => scroll(isAr ? "left" : "right")}
            className="absolute end-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
          >
            <ArrowRight className={`w-5 h-5 text-gray-600 ${isAr ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* الزر السفلي */}
        <div className="flex justify-center mt-6">
          <Link
            to="/partners-clients"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-[#0B3D2E] hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {isAr ? "عرض جميع الشركاء" : "View all partners"}
          </Link>
        </div>

      </div>
    </div>
  );
}