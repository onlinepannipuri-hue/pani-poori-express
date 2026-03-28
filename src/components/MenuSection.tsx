import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import classicImg from "@/assets/classic-panipuri.jpg";
import dahiImg from "@/assets/dahi-panipuri.jpg";
import specialImg from "@/assets/special-panipuri.jpg";
import familyImg from "@/assets/family-panipuri.jpg";
import kitImg from "@/assets/kit-panipuri.jpg";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { id: "classic", name: "Classic Pani Puri", price: 50, img: classicImg, tag: "Bestseller" },
  { id: "dahi", name: "Dahi Puri", price: 60, img: dahiImg, tag: "Creamy" },
  { id: "special", name: "Special Pani Puri", price: 70, img: specialImg, tag: "Chef's Pick" },
  { id: "family", name: "Family Pack", price: 120, img: familyImg, tag: "Value Deal" },
  { id: "kit", name: "DIY Kit", price: 150, img: kitImg, tag: "Make at Home" },
];

const MenuSection = () => {
  const { addItem } = useCart();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".menu-header", {
        scrollTrigger: {
          trigger: ".menu-header",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Cards staggered animation
      gsap.from(".menu-card", {
        scrollTrigger: {
          trigger: ".menu-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="menu-header text-center mb-24">
          <span className="text-premium-sm text-primary mb-4 block">Curated Selection</span>
          <h2 className="text-4xl md:text-7xl font-display font-black mb-6 tracking-tight uppercase leading-none">
            Our <span className="text-primary italic">Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Freshly prepared with authentic ingredients, delivered straight to your doorstep. 🚀
          </p>
        </div>

        <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-card card-premium group flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden mb-6 rounded-2xl">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  loading="lazy" 
                  width={512} 
                  height={512} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-premium-xs px-4 py-2 rounded-full shadow-xl">
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3 className="font-display font-black text-xl mb-2 tracking-tight uppercase">{item.name}</h3>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Premium Quality</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5">
                  <span className="text-primary font-black text-2xl">₹{item.price}</span>
                  <button
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    className="w-12 h-12 flex items-center justify-center bg-footer text-white rounded-2xl active:scale-90 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl group/btn"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Plus size={24} className="group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
