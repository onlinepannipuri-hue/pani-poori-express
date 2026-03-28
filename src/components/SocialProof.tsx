import { Users, Star, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Customers", value: "100+" },
  { icon: Star, label: "Average Rating", value: "4.8★" },
  { icon: Clock, label: "Avg Delivery", value: "25 min" },
  { icon: MapPin, label: "Delivery Radius", value: "5 KM" },
];

const SocialProof = () => (
  <section className="py-10 bg-hero-gradient">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center text-primary-foreground">
            <s.icon className="mx-auto mb-2 opacity-80" size={28} />
            <p className="font-display text-2xl md:text-3xl font-extrabold">{s.value}</p>
            <p className="text-xs opacity-75">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
