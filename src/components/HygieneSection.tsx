import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Package, Sparkles, ThermometerSun } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: ShieldCheck, title: "Clean Prep", desc: "100% hygienic kitchen standards with daily sanitization." },
  { icon: Package, title: "Sealed Pure", desc: "Tamper-proof sealed containers to ensure zero contamination." },
  { icon: Sparkles, title: "Fresh Daily", desc: "Daily sourced ingredients, prepared fresh for every order." },
  { icon: ThermometerSun, title: "Perfect Temp", desc: "Served at the ideal temperature for maximum flavor." },
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
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Cards staggered entry
      gsap.from(".hygiene-card", {
        scrollTrigger: {
          trigger: ".hygiene-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hygiene" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="hygiene-header text-center mb-20 max-w-2xl mx-auto">
          <span className="text-premium-sm text-accent mb-4 block">Safety Standards</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight uppercase leading-none">
            Hygiene is our <span className="text-accent italic">Signature</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            We don't just make food; we craft experiences with military-grade hygiene standards. 🛡️
          </p>
        </div>

        <div className="hygiene-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {items.map((item) => (
            <div
              key={item.title}
              className="hygiene-card card-premium p-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg shadow-accent/5">
                <item.icon className="text-accent group-hover:text-white transition-colors duration-500" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-black text-lg mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HygieneSection;
