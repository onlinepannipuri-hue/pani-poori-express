import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { useCart } from "@/lib/cart";
import { isStoreOpen } from "@/lib/store-status";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();
  const open = isStoreOpen();
  const navRef = useRef<HTMLElement>(null);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="font-display text-2xl font-black text-gradient uppercase tracking-tighter">
          Online Pani Poori
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-premium-sm text-foreground/70 hover:text-primary transition-all duration-300">
              {l.label}
            </a>
          ))}
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${open ? "bg-accent/5 border-accent/20 text-accent" : "bg-destructive/5 border-destructive/20 text-destructive"}`}>
            <span className={`w-2 h-2 rounded-full ${open ? "bg-accent animate-pulse" : "bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.4)]"}`}></span>
            <span className="text-premium-xs">{open ? "Open Now" : "Closed"}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:9787927818" className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
            <Phone size={18} />
          </a>
          <button onClick={onCartClick} className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-primary-foreground hover:shadow-warm transition-all duration-300">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-secondary text-secondary-foreground text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce-in">
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground/70">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t p-6 space-y-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${open ? "bg-accent/5 border-accent/20 text-accent" : "bg-destructive/5 border-destructive/20 text-destructive"}`}>
            <span className={`w-2 h-2 rounded-full ${open ? "bg-accent animate-pulse" : "bg-destructive"}`}></span>
            <span className="text-premium-xs">{open ? "Open Now" : "Closed"}</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
