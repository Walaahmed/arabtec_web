import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // نفس منطق تحديد الجهة (عربي = يسار / إنجليزي = يمين)
  const isAr =
    typeof document !== "undefined" &&
    document.documentElement.lang === "ar";

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      style={{
        // 20px (حافة) + 48px (زر واتساب) + 12px (فاصل) + safe-area
        bottom: "calc(80px + env(safe-area-inset-bottom, 0px))",
      }}
      className={`
        fixed z-50 grid place-items-center
        h-11 w-11 rounded-full
        bg-[color:var(--brand-deep)] text-white
        shadow-lg hover:shadow-xl hover:scale-105
        transition-all duration-300
        ${isAr ? "left-5 sm:left-6" : "right-5 sm:right-6"}
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}
      `}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}