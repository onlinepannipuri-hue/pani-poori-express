import { Phone } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <a
      href="tel:9787927818"
      className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-warm hover:scale-110 transition-transform"
      aria-label="Call us"
    >
      <Phone size={22} />
    </a>
    <a
      href="https://wa.me/919787927818"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-warm hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="WhatsApp us"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  </div>
);

export default FloatingButtons;
