import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-[#0b101b] text-white/90 pt-16 pb-8 border-t border-white/5">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand & Socials */}
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-2xl font-black text-primary drop-shadow-sm mb-3 uppercase tracking-tighter">
              Online Pani Poori
            </h3>
            <p className="text-sm text-white/60 leading-relaxed font-medium">
              Chennai's favorite fresh and hygienic pani puri delivery. Taste the magic in every bite! ✨
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a 
              href="https://wa.me/919787927818" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-lg text-primary uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            {['Menu', 'Reviews', 'FAQ', 'Social Proof'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm text-white/50 hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Timings */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-lg text-primary uppercase tracking-wider">Our Store Hours</h4>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Mon – Sat</p>
              <p className="text-sm text-white/80">5:30 PM – 10:30 PM</p>
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Sunday</p>
              <p className="text-sm text-white/80">8:30 AM – 10:30 PM</p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-lg text-primary uppercase tracking-wider">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <a href="tel:9787927818" className="text-sm text-white/80 hover:text-primary transition-colors underline-offset-4 hover:underline">
                9787927818
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <a href="mailto:onlinepannipuri@gmail.com" className="text-sm text-white/80 hover:text-primary transition-colors underline-offset-4 hover:underline">
                onlinepannipuri@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="text-xs text-white/50 font-bold uppercase tracking-widest leading-none">Online & Ready to Deliver</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Online Pani Poori. Made with ❤️ in Chennai.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
