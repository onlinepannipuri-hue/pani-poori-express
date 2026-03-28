import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold animate-float"
          >
            🔥 Today's Offer: Family Pack @ ₹120 only!
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Online Pani Poori
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl opacity-90 font-medium"
          >
            Fresh • Hygienic • Delivered Fast
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm"
          >
            📍 Chennai | {getTimingText()}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 pt-2"
          >
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
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="text-xs"
          >
            ⏳ Limited slots available today – order before 9 PM!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
