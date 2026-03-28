import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import classicImg from "@/assets/classic-panipuri.jpg";
import dahiImg from "@/assets/dahi-panipuri.jpg";
import specialImg from "@/assets/special-panipuri.jpg";
import familyImg from "@/assets/family-panipuri.jpg";
import kitImg from "@/assets/kit-panipuri.jpg";

const menuItems = [
  { id: "classic", name: "Classic Pani Puri", price: 50, img: classicImg, tag: "Bestseller" },
  { id: "dahi", name: "Dahi Puri", price: 60, img: dahiImg, tag: "Creamy" },
  { id: "special", name: "Special Pani Puri", price: 70, img: specialImg, tag: "Chef's Pick" },
  { id: "family", name: "Family Pack", price: 120, img: familyImg, tag: "Value Deal" },
  { id: "kit", name: "DIY Kit", price: 150, img: kitImg, tag: "Make at Home" },
];

const MenuSection = () => {
  const { addItem } = useCart();

  return (
    <section id="menu" className="py-16 bg-muted/40">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-2"
        >
          Our Menu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-10"
        >
          Freshly made with love, delivered to your door 🚀
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={item.img} alt={item.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-3 space-y-2">
                <h3 className="font-display font-bold text-sm leading-tight">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">₹{item.price}</span>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    className="bg-primary text-primary-foreground p-1.5 rounded-full hover:scale-110 transition-transform shadow-warm"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
