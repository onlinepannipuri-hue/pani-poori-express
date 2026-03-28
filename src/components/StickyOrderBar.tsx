import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

interface StickyOrderBarProps {
  onCartClick: () => void;
}

const StickyOrderBar = ({ onCartClick }: StickyOrderBarProps) => {
  const [visible, setVisible] = useState(false);
  const { count, total } = useCart();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const isVisible = window.scrollY > 400;
      setVisible(isVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.to(barRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.4)",
        display: "block",
      });
    } else {
      gsap.to(barRef.current, {
        y: -40,
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          if (barRef.current) barRef.current.style.display = "none";
        },
      });
    }
  }, [visible]);

  return (
    <div
      ref={barRef}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl glass rounded-full shadow-2xl border border-white/40 overflow-hidden"
      style={{ transform: "translate(-50%, -40px) scale(0.95)", opacity: 0, display: "none" }}
    >
      <div className="flex items-center justify-between h-14 pl-6 pr-2 gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
          <p className="text-foreground text-[11px] font-black uppercase tracking-widest truncate leading-none">
            Freshly Prepared <span className="text-primary tracking-normal ml-1">Order Now! 🚀</span>
          </p>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          {count > 0 && (
            <button
              onClick={onCartClick}
              className="flex items-center gap-2 bg-primary/10 text-primary text-[10px] font-black px-4 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-primary/20 shadow-sm uppercase tracking-tighter"
            >
              <ShoppingCart size={14} strokeWidth={3} />
              ₹{total}
            </button>
          )}
          <a
            href="https://wa.me/919787927818?text=Hi!%20I%20want%20to%20order%20from%20Online%20Pani%20Poori!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white text-[11px] font-black px-6 h-10 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-whatsapp/20 uppercase tracking-[0.1em] flex items-center gap-2 border border-white/20"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyOrderBar;
