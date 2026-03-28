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
  <div className="review-card card-premium p-8 flex flex-col justify-between group h-full">
    <div>
      <div className="flex gap-1 mb-6">
        {Array.from({ length: r.rating }).map((_, j) => (
          <Star key={j} size={14} className="fill-primary text-primary" strokeWidth={0} />
        ))}
      </div>
      <p className="text-base text-muted-foreground mb-8 italic leading-relaxed font-medium">"{r.text}"</p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary uppercase">
        {r.name.charAt(0)}
      </div>
      <p className="text-premium-xs text-primary">{r.name}</p>
    </div>
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
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Cards staggered entry
      gsap.from(".review-card", {
        scrollTrigger: {
          trigger: ".reviews-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="reviews-header text-center mb-24">
          <span className="text-premium-sm text-primary mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-7xl font-display font-black mb-6 tracking-tighter uppercase leading-none opacity-10 absolute left-1/2 -translate-x-1/2 top-4 w-full select-none">
            Trusted by Hundreds
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight relative z-10">
            Real <span className="text-primary italic font-display">Stories</span>
          </h3>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            100+ Happy Customers in Chennai and counting! 🚀
          </p>
        </div>

        <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
