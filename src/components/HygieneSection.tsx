import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Package, Sparkles, ThermometerSun } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: ShieldCheck, title: "Clean Preparation", desc: "100% hygienic kitchen standards" },
  { icon: Package, title: "Sealed Packaging", desc: "Tamper-proof sealed containers" },
  { icon: Sparkles, title: "Fresh Ingredients", desc: "Daily sourced, no preservatives" },
  { icon: ThermometerSun, title: "Right Temperature", desc: "Served fresh, never reheated" },
];

const HygieneSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".hygiene-header", {
        scrollTrigger: {
          trigger: ".hygiene-header",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards staggered entry
      gsap.from(".hygiene-card", {
        scrollTrigger: {
          trigger: ".hygiene-grid",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="hygiene-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">
            🧼 Hygiene First
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Your health is our single biggest priority. 🛡️
          </p>
        </div>

        <div className="hygiene-grid grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="hygiene-card bg-card rounded-2xl p-8 text-center shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-display font-black text-base mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HygieneSection;
