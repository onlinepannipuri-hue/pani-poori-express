import heroImg from "@/assets/hero-panipuri.jpg";
import { getTimingText } from "@/lib/store-status";

const HeroBanner = () => {
  const whatsappLink = "https://wa.me/919787927818?text=Hi!%20I%20want%20to%20order%20from%20Online%20Pani%20Poori!";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Delicious Pani Puri" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      <div className="relative container py-20 md:py-32 text-primary-foreground">
        <div className="max-w-lg space-y-5">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold animate-float">
            🔥 Today's Offer: Family Pack @ ₹120 only!
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">
            Online Pani Poori
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-medium">
            Fresh • Hygienic • Delivered Fast
          </p>
          <p className="text-sm opacity-75">📍 Chennai | {getTimingText()}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-base shadow-warm hover:scale-105 transition-transform animate-pulse-glow"
            >
              📲 Order Now on WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur text-primary-foreground px-6 py-3 rounded-full font-bold text-base border border-primary-foreground/30 hover:bg-primary-foreground/30 transition"
            >
              🍽️ View Menu
            </a>
          </div>
          <p className="text-xs opacity-60">⏳ Limited slots available today – order before 9 PM!</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
