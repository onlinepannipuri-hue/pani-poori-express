import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

interface StickyOrderBarProps {
  onCartClick: () => void;
}

const StickyOrderBar = ({ onCartClick }: StickyOrderBarProps) => {
  const [visible, setVisible] = useState(false);
  const { count, total } = useCart();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 bg-hero-gradient shadow-warm"
        >
          <div className="container flex items-center justify-between h-12 gap-3">
            <p className="text-primary-foreground text-sm font-semibold truncate">
              🔥 Fresh Pani Puri — Order now & get it in 25 min!
            </p>
            <div className="flex items-center gap-2 shrink-0">
              {count > 0 && (
                <button
                  onClick={onCartClick}
                  className="flex items-center gap-1.5 bg-primary-foreground/20 backdrop-blur text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full hover:bg-primary-foreground/30 transition"
                >
                  <ShoppingCart size={14} />
                  {count} items · ₹{total}
                </button>
              )}
              <a
                href="https://wa.me/919787927818?text=Hi!%20I%20want%20to%20order%20from%20Online%20Pani%20Poori!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full hover:scale-105 transition-transform"
              >
                Order Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyOrderBar;
