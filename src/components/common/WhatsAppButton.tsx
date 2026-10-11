import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "966532891000";
const WHATSAPP_MESSAGE_AR = "مرحبًا أربتك، أرغب في مناقشة مشروع تقني.";
const WHATSAPP_MESSAGE_EN = "Hello ARABTEC, I'd like to discuss a technology project.";

export default function WhatsAppButton() {
  const isAr =
    typeof document !== "undefined" &&
    document.documentElement.lang === "ar";

  const message = isAr ? WHATSAPP_MESSAGE_AR : WHATSAPP_MESSAGE_EN;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isAr ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
      title={isAr ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
      className="
        fixed bottom-6 right-6 z-50 grid place-items-center
        h-11 w-11 rounded-full
        bg-[#25D366] text-white
        shadow-lg hover:shadow-xl hover:scale-105
        transition-all duration-300
      "
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
    </a>
  );
}