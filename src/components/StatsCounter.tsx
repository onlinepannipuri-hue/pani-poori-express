import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import { Star, Users, MapPin, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsCounter = () => {
  const [lottieData, setLottieData] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch a vibrant stable Lottie animation
    fetch('https://raw.githubusercontent.com/airbnb/lottie-web/master/demo/bodymovin/data.json')
      .then(res => res.json())
      .then(data => setLottieData(data))
      .catch((e) => console.log('Lottie failed to load', e));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Lottie container entry
      gsap.from(".lottie-container", {
        scrollTrigger: {
          trigger: ".lottie-container",
          start: "top 80%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Stats cards stagger entry
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { id: 1, title: 'Happy Customers', value: 15400, prefix: '+', icon: <Users className="w-8 h-8 text-orange-500" /> },
    { id: 2, title: '5-Star Reviews', value: 4800, prefix: '+', icon: <Star className="w-8 h-8 text-yellow-400" /> },
    { id: 3, title: 'Locations', value: 12, prefix: '', icon: <MapPin className="w-8 h-8 text-primary" /> },
    { id: 4, title: 'Secret Spices', value: 50, prefix: '+', icon: <Sparkles className="w-8 h-8 text-purple-500" /> },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="flex justify-center mb-16">
          <div className="lottie-container w-48 h-48 bg-background rounded-full shadow-2xl flex items-center justify-center p-6 border-4 border-orange-500/20">
            {lottieData ? (
              <Lottie animationData={lottieData} loop={true} />
            ) : (
              <div className="bg-orange-200/50 w-full h-full rounded-full animate-pulse" />
            )}
          </div>
        </div>

        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card flex flex-col items-center p-8 bg-background rounded-3xl shadow-lg border border-border/50 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="mb-6 p-5 bg-secondary rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-foreground font-display mb-3 drop-shadow-sm tracking-tight">
                <CountUp 
                  end={stat.value} 
                  duration={3} 
                  separator="," 
                  enableScrollSpy 
                  scrollSpyOnce
                />
                <span className="text-orange-500">{stat.prefix}</span>
              </h3>
              <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
