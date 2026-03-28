import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: "Priya R.", text: "Best pani puri in Chennai! Super hygienic and tasty. My family loved it! 🤩", rating: 5 },
  { name: "Karthik S.", text: "Fast delivery and the pani puri was fresh. Will order again for sure!", rating: 5 },
  { name: "Anjali M.", text: "The Dahi Puri is to die for! Perfect evening snack. Highly recommended.", rating: 5 },
  { name: "Ravi K.", text: "Great value Family Pack. Enough for 4 people. Loved the tangy water!", rating: 4 },
  { name: "Deepa V.", text: "DIY Kit was such a fun idea! Kids had a blast making their own pani puri.", rating: 5 },
];

const ReviewCard = ({ r }: { r: typeof reviews[0] }) => (
  <div className="review-card bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors duration-500">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: r.rating }).map((_, j) => (
        <Star key={j} size={16} className="fill-secondary text-secondary" />
      ))}
    </div>
    <p className="text-base text-muted-foreground mb-4 italic leading-relaxed">"{r.text}"</p>
    <p className="font-display font-black text-sm uppercase tracking-widest text-primary">{r.name}</p>
  </div>
);

const ReviewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".reviews-header", {
        scrollTrigger: {
          trigger: ".reviews-header",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards staggered entry
      gsap.from(".review-card", {
        scrollTrigger: {
          trigger: ".reviews-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-24 bg-muted/40 overflow-hidden">
      <div className="container">
        <div className="reviews-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tighter uppercase grayscale opacity-30">
            Social Proof
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight relative -top-6">
            ⭐ What Customers Say
          </h3>
          <p className="text-lg text-muted-foreground font-medium">
            100+ Happy Customers and counting! 🚀
          </p>
        </div>

        <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
