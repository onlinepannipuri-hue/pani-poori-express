import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MapSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".map-header", {
        scrollTrigger: {
          trigger: ".map-header",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Map container entrance
      gsap.from(".map-container", {
        scrollTrigger: {
          trigger: ".map-container",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="delivery-area" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="map-header text-center mb-24">
          <span className="text-premium-sm text-accent mb-4 block">Our Reach</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight uppercase leading-none">
            We Deliver <span className="text-accent italic">Freshness</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Ready to serve within a 5 KM radius in Chennai. Lightning fast delivery at your doorstep! 🚀
          </p>
        </div>
        
        <div className="map-container relative card-premium p-4 md:p-8 max-w-5xl mx-auto shadow-2xl group transition-all duration-700">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/5">
            <iframe
              title="Delivery Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124407.70440796498!2d80.18291264999999!3d13.047985999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-accent/10 border border-accent/20">
            <div className="w-3 h-3 rounded-full bg-accent animate-ping" />
            <span className="text-premium-sm text-accent">Currently Delivering across all major zones</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
