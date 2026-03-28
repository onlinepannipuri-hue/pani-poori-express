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
      const isVisible = window.scrollY > 500;
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
        duration: 0.4,
        ease: "power2.out",
        display: "block",
      });
    } else {
      gsap.to(barRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (barRef.current) barRef.current.style.display = "none";
        },
      });
    }
  }, [visible]);

  return (
    <div
      ref={barRef}
      className="fixed top-20 left-4 right-4 z-40 bg-white border border-black/5 shadow-2xl rounded-2xl overflow-hidden"
      style={{ transform: "translateY(-100px)", opacity: 0, display: "none" }}
    >
      <div className="container flex items-center justify-between h-14 gap-4 px-4">
        <p className="text-foreground text-xs font-bold truncate tracking-tight flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Fresh Pani Puri — Get it in 25 min! 🚀
        </p>
        <div className="flex items-center gap-2 shrink-0">
          {count > 0 && (
            <button
              onClick={onCartClick}
              className="flex items-center gap-2 bg-primary/10 text-primary text-[11px] font-black px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all border border-primary/20 shadow-sm"
            >
              <ShoppingCart size={14} />
              ₹{total}
            </button>
          )}
          <a
            href="https://wa.me/919787927818?text=Hi!%20I%20want%20to%20order%20from%20Online%20Pani%20Poori!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white text-[11px] font-black px-5 py-2 rounded-xl hover:scale-105 transition-all shadow-lg uppercase tracking-widest flex items-center gap-2 border border-whatsapp/20"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyOrderBar;
