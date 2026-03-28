import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Star, Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, label: "Happy Souls Served", value: "15,000+" },
  { icon: Star, label: "Top Rated Food", value: "4.9/5 ★" },
  { icon: Clock, label: "Lightning Delivery", value: "25 MIN" },
  { icon: MapPin, label: "Active Coverage", value: "5 KM" },
];

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".social-grid",
          start: "top 95%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 bg-footer border-y border-white/5 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-primary/5 blur-[80px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="social-grid grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="stat-item flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg border border-white/5">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <p className="font-display text-2xl md:text-3xl font-black text-white tracking-tighter leading-none">{s.value}</p>
                <p className="text-premium-xs text-white/30 uppercase tracking-[0.2em] leading-none">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
