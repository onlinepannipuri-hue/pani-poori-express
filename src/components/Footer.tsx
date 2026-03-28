import { Phone, Mail, Instagram, Facebook, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-footer text-white/90 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
    {/* Subtle Decorative Gradient */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    
    <div className="container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
        {/* Brand & Socials */}
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-3xl font-black text-gradient drop-shadow-sm mb-4 uppercase tracking-tighter">
              Online Pani Poori
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-medium max-w-xs">
              Chennai's premier destination for fresh, hygienic, and authentic pani puri experiences. Crafting magic in every bite since our inception. ✨
            </p>
          </div>
          
          <div className="flex items-center gap-5">
            {[
              { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
              { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-1 shadow-lg border border-white/5"
              >
                {social.icon}
              </a>
            ))}
            <a 
              href="https://wa.me/919787927818" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-xl bg-whatsapp/10 flex items-center justify-center text-whatsapp hover:bg-whatsapp hover:text-white transition-all duration-500 hover:-translate-y-1 shadow-lg border border-whatsapp/20"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-premium-sm text-primary">Explore</h4>
          <ul className="space-y-4">
            {['Menu', 'Reviews', 'FAQ', 'Social Proof'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm text-white/40 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-px bg-primary/0 group-hover:w-3 group-hover:bg-primary transition-all duration-300" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Timings */}
        <div className="space-y-8">
          <h4 className="text-premium-sm text-primary">Store Hours</h4>
          <div className="space-y-5">
            <div className="relative pl-4 border-l border-white/10">
              <p className="text-premium-xs text-white/30 mb-2">Monday – Saturday</p>
              <p className="text-base text-white/80 font-medium">5:30 PM – 10:30 PM</p>
            </div>
            <div className="relative pl-4 border-l border-white/10">
              <p className="text-premium-xs text-white/30 mb-2">Sunday</p>
              <p className="text-base text-white/80 font-medium font-display">8:30 AM – 10:30 PM</p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          <h4 className="text-premium-sm text-primary">Get in Touch</h4>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Phone size={18} />
              </div>
              <a href="tel:9787927818" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
                9787927818
              </a>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail size={18} />
              </div>
              <a href="mailto:onlinepannipuri@gmail.com" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
                onlinepannipuri@gmail.com
              </a>
            </li>
            <li className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_hsl(var(--accent))]"></span>
                <span className="text-premium-xs text-accent">Ready to Deliver</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-premium-xs text-white/20">
            © {new Date().getFullYear()} Online Pani Poori Express. All Rights Reserved.
          </p>
          <p className="text-[10px] text-white/10 font-medium">
            Handcrafted with excellence in Chennai.
          </p>
        </div>
        
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="text-premium-xs text-white/20 hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
    
    {/* Background Decorative Element */}
    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
  </footer>
);

export default Footer;

