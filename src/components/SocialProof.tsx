import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Star, Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, label: "Happy Customers", value: "100+" },
  { icon: Star, label: "Average Rating", value: "4.8★" },
  { icon: Clock, label: "Avg Delivery", value: "25 min" },
  { icon: MapPin, label: "Delivery Radius", value: "5 KM" },
];

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".social-grid",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-hero-gradient shadow-warm">
      <div className="container">
        <div className="social-grid grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="stat-item text-center text-primary-foreground">
              <s.icon className="mx-auto mb-3 opacity-60" size={32} />
              <p className="font-display text-3xl md:text-4xl font-black tracking-tight mb-1">{s.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 leading-none">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
