import { Phone } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
    <a
      href="tel:9787927818"
      className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shadow-card border border-black/5 hover:bg-primary hover:text-white transition-all duration-500 hover:-translate-y-1"
      aria-label="Call us"
    >
      < Phone size={24} />
    </a>
    <a
      href="https://wa.me/919787927818"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-2xl bg-whatsapp text-white flex items-center justify-center shadow-xl hover:shadow-whatsapp/20 hover:scale-110 transition-all duration-500 animate-pulse-glow"
      aria-label="WhatsApp us"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  </div>
);

export default FloatingButtons;
