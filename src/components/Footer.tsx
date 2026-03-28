const Footer = () => (
  <footer id="contact" className="bg-foreground text-primary-foreground/80 py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Online Pani Poori</h3>
          <p className="text-sm opacity-70">Fresh • Hygienic • Delivered Fast</p>
          <p className="text-sm opacity-70 mt-2">📍 Chennai, Tamil Nadu</p>
        </div>
        <div>
          <h4 className="font-display font-bold text-primary-foreground mb-3">Timings</h4>
          <p className="text-sm opacity-70">Mon–Sat: 5:30 PM – 10:30 PM</p>
          <p className="text-sm opacity-70">Sunday: 8:30 AM – 10:30 PM</p>
        </div>
        <div>
          <h4 className="font-display font-bold text-primary-foreground mb-3">Contact Us</h4>
          <p className="text-sm opacity-70">📞 <a href="tel:9787927818" className="hover:text-primary-foreground transition">9787927818</a></p>
          <p className="text-sm opacity-70">📧 <a href="mailto:onlinepannipuri@gmail.com" className="hover:text-primary-foreground transition">onlinepannipuri@gmail.com</a></p>
          <p className="text-sm opacity-70">💬 <a href="https://wa.me/919787927818" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition">WhatsApp</a></p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Online Pani Poori. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
