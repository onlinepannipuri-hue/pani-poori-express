import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What areas do you deliver to?", a: "We deliver within a 5 KM radius of our Chennai location. Check the map below for our coverage area." },
  { q: "What are your operating hours?", a: "Monday to Saturday: 5:30 PM – 10:30 PM. Sunday: 8:30 AM – 10:30 PM." },
  { q: "How do I place an order?", a: "Simply add items to your cart and click 'Order via WhatsApp'. Your order will be sent directly to us!" },
  { q: "What payment methods do you accept?", a: "We accept GPay, PhonePe, and Paytm. Payment is done after order confirmation." },
  { q: "How long does delivery take?", a: "Typically 20-30 minutes depending on your location within our delivery zone." },
  { q: "Is the food prepared fresh?", a: "Yes! Every order is freshly prepared. We never use preservatives or pre-made batches." },
  { q: "Can I customize my order?", a: "Yes! Mention any preferences or spice level in the WhatsApp message." },
  { q: "Do you offer bulk/party orders?", a: "Absolutely! Contact us on WhatsApp for bulk order pricing and special party packages." },
  { q: "Is the packaging safe?", a: "All orders are sealed in tamper-proof packaging to ensure hygiene and safety." },
  { q: "What if I have a complaint?", a: "Please reach out via WhatsApp or email us at onlinepannipuri@gmail.com. We'll resolve it immediately!" },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".faq-header", {
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Accordion items staggered entry
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 80%",
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });

      // CTA entrance
      gsap.from(".faq-cta", {
        scrollTrigger: {
          trigger: ".faq-cta",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-background overflow-hidden border-t border-border/50">
      <div className="container max-w-3xl">
        <div className="faq-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">
            ❓ Frequently Asked
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Got questions? We've got answers! 💡
          </p>
        </div>

        <Accordion type="single" collapsible className="faq-list space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`faq-${i}`} 
              className="faq-item bg-card rounded-2xl px-6 shadow-card border border-border/50 hover:border-primary/20 transition-colors duration-300"
            >
              <AccordionTrigger className="text-base font-bold text-left hover:no-underline py-5 leading-tight">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="faq-cta text-center mt-12 bg-secondary/5 rounded-3xl p-8 border border-secondary/10">
          <p className="text-base text-muted-foreground font-medium mb-4 italic">Still have a specific question?</p>
          <a 
            href="mailto:onlinepannipuri@gmail.com" 
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-warm-lg hover:scale-105 transition-all duration-300"
          >
            ✉️ Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
