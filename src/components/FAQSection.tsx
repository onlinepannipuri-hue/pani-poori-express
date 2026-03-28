import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const FAQSection = () => (
  <section id="faq" className="py-16">
    <div className="container max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">❓ Frequently Asked</h2>
      <p className="text-center text-muted-foreground mb-10">Got questions? We've got answers!</p>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg px-4 shadow-card border-none">
            <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground mb-2">Still have questions?</p>
        <a href="mailto:onlinepannipuri@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
          ✉️ Email Us
        </a>
      </div>
    </div>
  </section>
);

export default FAQSection;
