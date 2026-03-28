import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya R.", text: "Best pani puri in Chennai! Super hygienic and tasty. My family loved it! 🤩", rating: 5 },
  { name: "Karthik S.", text: "Fast delivery and the pani puri was fresh. Will order again for sure!", rating: 5 },
  { name: "Anjali M.", text: "The Dahi Puri is to die for! Perfect evening snack. Highly recommended.", rating: 5 },
  { name: "Ravi K.", text: "Great value Family Pack. Enough for 4 people. Loved the tangy water!", rating: 4 },
  { name: "Deepa V.", text: "DIY Kit was such a fun idea! Kids had a blast making their own pani puri.", rating: 5 },
];

const ReviewCard = ({ r, i }: { r: typeof reviews[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    className="bg-card rounded-lg p-5 shadow-card"
  >
    <div className="flex gap-0.5 mb-2">
      {Array.from({ length: r.rating }).map((_, j) => (
        <Star key={j} size={14} className="fill-secondary text-secondary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground mb-3">"{r.text}"</p>
    <p className="font-display font-bold text-sm">{r.name}</p>
  </motion.div>
);

const ReviewsSection = () => (
  <section id="reviews" className="py-16 bg-muted/40">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-2"
      >
        ⭐ What Customers Say
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10"
      >
        100+ Happy Customers and counting!
      </motion.p>
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.slice(0, 3).map((r, i) => <ReviewCard key={i} r={r} i={i} />)}
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {reviews.slice(3).map((r, i) => <ReviewCard key={i + 3} r={r} i={i} />)}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
