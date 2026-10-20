// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState, useCallback } from "react";
// import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

// const partnerLogos = Object.values(
//   import.meta.glob("@/assets/partners/*.{png,jpg,jpeg,webp,svg}", {
//     eager: true,
//     import: "default",
//   })
// ) as string[];

// const Partners3DSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [direction, setDirection] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!isAutoPlaying || isHovered || partnerLogos.length === 0) return;

//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % partnerLogos.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, isHovered]);

//   const getVisibleLogos = useCallback(() => {
//     const logos = [];
//     for (let i = -3; i <= 3; i++) {
//       const index =
//         (currentIndex + i + partnerLogos.length) % partnerLogos.length;
//       logos.push({ index, position: i, logo: partnerLogos[index] });
//     }
//     return logos;
//   }, [currentIndex]);

//   const getCardStyles = (position: number) => {
//     const abs = Math.abs(position);

//     return {
//       x: position * 160,
//       scale: position === 0 ? 1.15 : 1 - abs * 0.12,
//       rotateY: position * -20,
//       opacity: position === 0 ? 1 : 1 - abs * 0.25,
//       zIndex: 10 - abs,
//     };
//   };

//   const handlePrev = () => {
//     setIsAutoPlaying(false);
//     setDirection(-1);
//     setCurrentIndex(
//       (prev) => (prev - 1 + partnerLogos.length) % partnerLogos.length
//     );
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   const handleNext = () => {
//     setIsAutoPlaying(false);
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % partnerLogos.length);
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   if (!partnerLogos.length) return null;

//   return (
//     <div
//       className="relative w-full py-20 overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--gold)]/5 via-[color:var(--brand-deep)]/5 to-[color:var(--gold)]/5 blur-3xl" />
//       </div>

//       <div
//         className="relative h-[320px] flex items-center justify-center max-w-6xl mx-auto"
//         style={{ perspective: "1200px" }}
//       >
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 z-30 bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--brand-deep)] p-4 rounded-full shadow-lg"
//           aria-label="Previous"
//         >
//           <ArrowRight className="text-white w-6 h-6" />
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute right-4 z-30 bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--gold)] p-4 rounded-full shadow-lg"
//           aria-label="Next"
//         >
//           <ArrowLeft className="text-white w-6 h-6" />
//         </button>

//         <div
//           className="relative w-full flex items-center justify-center"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <AnimatePresence>
//             {getVisibleLogos().map(({ index, position, logo }) => {
//               const styles = getCardStyles(position);
//               const isCenter = position === 0;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={styles}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ type: "spring", stiffness: 260, damping: 25 }}
//                   className="absolute cursor-pointer"
//                 >
//                   <div
//                     className={`relative rounded-3xl p-6 bg-white shadow-xl border-2 ${
//                       isCenter
//                         ? "border-[color:var(--gold)]"
//                         : "border-transparent"
//                     }`}
//                   >
//                     {isCenter && (
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--brand-deep)] p-2 rounded-full shadow-lg">
//                         <Sparkles className="w-4 h-4 text-white" />
//                       </div>
//                     )}

//                     <img
//                       src={logo}
//                       alt={`Partner ${index + 1}`}
//                       className={`object-contain mx-auto ${
//                         isCenter ? "w-36 h-36" : "w-24 h-24 opacity-70"
//                       }`}
//                     />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners3DSlider;
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@/lib/router";
import { useI18n } from "@/lib/i18n";

// بنقرا الشعارات من فولدر partners
const partnerLogos = Object.values(
  import.meta.glob("@/assets/partners/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
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