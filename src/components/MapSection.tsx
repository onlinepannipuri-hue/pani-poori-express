import { motion } from "framer-motion";

const MapSection = () => (
  <section className="py-16 bg-muted/40">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-2"
      >
        📍 Delivery Area
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-8"
      >
        We deliver within 5 KM radius in Chennai
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg overflow-hidden shadow-card max-w-3xl mx-auto aspect-video"
      >
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
      </motion.div>
    </div>
  </section>
);

export default MapSection;
