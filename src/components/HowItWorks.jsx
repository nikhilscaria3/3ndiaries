import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Choose Your Tier', desc: 'Select between our Standard mini bars or Premium gift boxes based on your guest list.' },
    { num: '02', title: 'Share Your Details', desc: 'Provide us with your custom photo, names, dates, and event color palette.' },
    { num: '03', title: 'Approve Design', desc: 'Review the digital mockups created by our design team and approve for printing.' },
    { num: '04', title: 'Production & Delivery', desc: 'We craft, pack, and securely deliver the chocolates to your venue across India.' }
  ];

  return (
    <section className="py-24 bg-ivory relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="overflow-hidden mb-2">
            <motion.span 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="font-script text-3xl text-gold block"
            >
              The Process
            </motion.span>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h2 
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl md:text-5xl font-serif text-chocolate"
            >
              How It Works
            </motion.h2>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="w-16 h-[1px] bg-gold mx-auto origin-center"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gold/30 -z-0 origin-left"
          ></motion.div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-cream border border-gold/40 flex items-center justify-center mb-6 shadow-sm transition-transform duration-[0.8s] ease-[var(--ease-luxury)] group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] group-hover:border-gold bg-clip-padding">
                <span className="font-serif text-3xl text-gold">{step.num}</span>
              </div>
              <h3 className="font-serif text-xl text-chocolate mb-3">{step.title}</h3>
              <p className="font-light text-sm text-text/80">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
