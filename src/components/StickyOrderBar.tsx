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
      className="fixed top-16 left-0 right-0 z-40 bg-hero-gradient shadow-warm"
      style={{ transform: "translateY(-60px)", opacity: 0, display: "none" }}
    >
      <div className="container flex items-center justify-between h-14 gap-4">
        <p className="text-primary-foreground text-sm font-bold truncate tracking-tight">
          🔥 Fresh Pani Puri — Get it in 25 min! 🚀
        </p>
        <div className="flex items-center gap-3 shrink-0">
          {count > 0 && (
            <button
              onClick={onCartClick}
              className="flex items-center gap-2 bg-white/20 backdrop-blur text-white text-xs font-black px-4 py-2 rounded-full hover:bg-white/30 transition-all border border-white/20 shadow-inner"
            >
              <ShoppingCart size={14} />
              ₹{total}
            </button>
          )}
          <a
            href="https://wa.me/919787927818?text=Hi!%20I%20want%20to%20order%20from%20Online%20Pani%20Poori!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white text-xs font-black px-6 py-2 rounded-full hover:scale-105 transition-all shadow-lg uppercase tracking-widest flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyOrderBar;
