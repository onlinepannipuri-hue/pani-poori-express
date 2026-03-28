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
    <nav ref={navRef} className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b shadow-card">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-gradient">
          Online Pani Poori
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${open ? "bg-accent text-accent-foreground" : "bg-destructive text-destructive-foreground"}`}>
            {open ? "🟢 Open Now" : "🔴 Closed"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:9787927818" className="md:hidden p-2 rounded-full bg-accent text-accent-foreground">
            <Phone size={18} />
          </a>
          <button onClick={onCartClick} className="relative p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-bounce-in">
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t p-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${open ? "bg-accent text-accent-foreground" : "bg-destructive text-destructive-foreground"}`}>
            {open ? "🟢 Open Now" : "🔴 Closed"}
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
