import { motion } from "framer-motion";
import { ShieldCheck, Package, Sparkles, ThermometerSun } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Clean Preparation", desc: "100% hygienic kitchen standards" },
  { icon: Package, title: "Sealed Packaging", desc: "Tamper-proof sealed containers" },
  { icon: Sparkles, title: "Fresh Ingredients", desc: "Daily sourced, no preservatives" },
  { icon: ThermometerSun, title: "Right Temperature", desc: "Served fresh, never reheated" },
];

const HygieneSection = () => (
  <section className="py-16">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-2"
      >
        🧼 Hygiene First
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10"
      >
        Your health is our priority
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-lg p-5 text-center shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <item.icon className="text-accent" size={24} />
            </div>
            <h3 className="font-display font-bold text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HygieneSection;
