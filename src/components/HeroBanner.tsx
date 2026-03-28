import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "@/assets/hero-panipuri.jpg";
import { getTimingText } from "@/lib/store-status";

const HeroBanner = () => {
  const whatsappLink = "https://wa.me/919787927818?text=Hi!%20I%20want%20to%20order%20from%20Online%20Pani%20Poori!";
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      })
      .from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
      }, 0); // Start at the same time as the first animation

      gsap.to(".hero-offer", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden min-h-[550px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Delicious Pani Puri" className="hero-image w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      <div className="relative container py-24 md:py-40 text-primary-foreground z-10">
        <div className="hero-content max-w-xl space-y-6">
          <div className="hero-offer inline-flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-white animate-ping"></span>
            Today's Offer: Family Pack @ ₹120 only!
          </div>
          <h1 className="font-display text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase drop-shadow-2xl">
            Online <span className="text-primary italic">Pani</span> <br /> Poori
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-medium tracking-tight">
            Freshly Prepared. Hygienically Packed. <br className="hidden md:block" /> Delivered at Lightning Speed.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-full font-black text-xl shadow-warm-lg hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <i className="fa-brands fa-whatsapp text-3xl"></i>
              ORDER NOW
            </a>
            <div className="flex flex-col gap-1 ml-2">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
                Current Status
              </p>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                {getTimingText()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 pt-8 border-t border-white/10">
             <div className="flex flex-col">
                <span className="text-2xl font-black">500+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Daily Orders</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-black">4.9/5</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Customer Rating</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
