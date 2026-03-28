import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import { Star, Users, MapPin, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsCounter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats cards stagger entry
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".stats-header", {
        scrollTrigger: {
          trigger: ".stats-header",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { id: 1, title: 'Happy Customers', value: 15400, prefix: '+', icon: <Users className="w-10 h-10 text-primary" strokeWidth={1.5} /> },
    { id: 2, title: '5-Star Reviews', value: 4800, prefix: '+', icon: <Star className="w-10 h-10 text-secondary" strokeWidth={1.5} /> },
    { id: 3, title: 'Delivery Radius', value: 5, prefix: ' KM', icon: <MapPin className="w-10 h-10 text-accent" strokeWidth={1.5} /> },
    { id: 4, title: 'Pani Puri Varieties', value: 50, prefix: '+', icon: <Sparkles className="w-10 h-10 text-primary" strokeWidth={1.5} /> },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-footer relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="stats-header text-center mb-24">
          <span className="text-premium-sm text-primary mb-4 block">Our Impact</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white/90 mb-6 tracking-tight uppercase leading-none">
            Spreading Joy, <span className="text-primary italic">One Bite</span> at a Time
          </h2>
        </div>

        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card flex flex-col items-center p-12 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group shadow-2xl"
            >
              <div className="mb-8 p-6 bg-white/5 rounded-3xl shadow-inner group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white font-display mb-4 tracking-tighter">
                <CountUp 
                  end={stat.value} 
                  duration={3} 
                  separator="," 
                  enableScrollSpy 
                  scrollSpyOnce
                />
                <span className="text-primary ml-1">{stat.prefix}</span>
              </h3>
              <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.25em]">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
