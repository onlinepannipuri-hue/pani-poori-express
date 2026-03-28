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
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Accordion items staggered entry
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // CTA entrance
      gsap.from(".faq-cta", {
        scrollTrigger: {
          trigger: ".faq-cta",
          start: "top 90%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container max-w-4xl relative z-10">
        <div className="faq-header text-center mb-20">
          <span className="text-premium-sm text-primary mb-4 block">Help Center</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight uppercase leading-none">
            Common <span className="text-primary italic">Queries</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Everything you need to know about our freshly prepared pani poori and delivery. 💡
          </p>
        </div>

        <Accordion type="single" collapsible className="faq-list space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`faq-${i}`} 
              className="faq-item card-premium px-8 border-transparent hover:border-primary/10 transition-all duration-300 group"
            >
              <AccordionTrigger className="text-lg font-bold text-left hover:no-underline py-6 leading-tight group-data-[state=open]:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 font-medium">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="faq-cta text-center mt-20 glass rounded-[2.5rem] p-12 border border-white/40 shadow-xl max-w-2xl mx-auto">
          <p className="text-premium-sm text-primary mb-4 block">Still Curious?</p>
          <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">Ask us anything!</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:onlinepannipuri@gmail.com" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-footer text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              ✉️ Email Us
            </a>
            <a 
              href="https://wa.me/919787927818" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg shadow-whatsapp/20"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
