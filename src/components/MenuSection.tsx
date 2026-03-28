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
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards staggered animation
      gsap.from(".menu-card", {
        scrollTrigger: {
          trigger: ".menu-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-20 bg-muted/40 overflow-hidden">
      <div className="container">
        <div className="menu-header text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground">
            Freshly made with love, delivered to your door 🚀
          </p>
        </div>

        <div className="menu-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-card group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  loading="lazy" 
                  width={512} 
                  height={512} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-black px-3 py-1 rounded-full shadow-lg">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 space-y-4">
                <h3 className="font-display font-bold text-base leading-tight min-h-[40px]">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-black text-xl">₹{item.price}</span>
                  <button
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    className="add-btn bg-primary text-primary-foreground p-2 rounded-xl active:scale-90 hover:scale-110 transition-all shadow-warm-lg"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Plus size={20} />
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
