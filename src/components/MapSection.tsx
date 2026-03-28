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
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Map container entrance
      gsap.from(".map-container", {
        scrollTrigger: {
          trigger: ".map-container",
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="delivery-area" className="py-24 bg-muted/20 overflow-hidden">
      <div className="container">
        <div className="map-header text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">
            📍 Delivery Area
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            We deliver within a 5 KM radius in Chennai. Fast & Fresh! 🚀
          </p>
        </div>
        
        <div className="map-container relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-700 max-w-4xl mx-auto aspect-video border-8 border-white">
          <iframe
            title="Delivery Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124407.70440796498!2d80.18291264999999!3d13.047985999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
