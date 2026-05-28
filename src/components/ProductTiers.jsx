import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    name: 'Standard Tier',
    weight: '25-30g Mini Bar',
    description: 'Perfect for bulk event guests as a sweet takeaway.',
    features: ['Custom printed cover', 'Choice of 2 flavors', 'Elegant minimal packaging'],
    image: 'bg-blush'
  },
  {
    name: 'Premium Tier',
    weight: '50-55g Bar / Box',
    description: 'Ideal for VIP guests, family, and close friends.',
    features: ['Chocolate engraving', 'Premium gift box', 'Gold foil stamping', 'Choice of 4 flavors'],
    image: 'bg-gold',
    featured: true
  },
  {
    name: 'Ultra Premium',
    weight: 'Custom Hampers',
    description: 'The ultimate luxury gifting experience for your most special guests.',
    features: ['Fully bespoke packaging', 'Custom assortments', 'Premium ribbons & seals', 'Personalized notes'],
    image: 'bg-olive'
  }
];

const TiltCard = ({ tier, index, className = "" }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative bg-cream p-10 flex flex-col items-center text-center transition-shadow duration-[0.8s] ease-[var(--ease-luxury)] hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.2)] group ${tier.featured ? 'border-2 border-gold/40' : 'border border-champagne/50 hover:border-gold/30'} ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="absolute inset-0 pointer-events-none rounded-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_20px_rgba(212,175,55,0.15)]"></div>

      {tier.featured && (
        <div style={{ transform: "translateZ(40px)" }} className="absolute -top-4 bg-gold text-white text-xs tracking-widest uppercase py-1 px-4 shadow-md">
          Most Popular
        </div>
      )}

      <motion.div
        style={{ transform: "translateZ(50px)" }}
        className={`w-32 h-32 rounded-t-full rounded-b-full mb-8 ${tier.image} opacity-80 flex items-center justify-center transition-all duration-[0.8s] ease-[var(--ease-luxury)] group-hover:scale-[1.08] group-hover:opacity-100 group-hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)]`}
      >
        <span className="font-script text-2xl text-white drop-shadow-md">Choc</span>
      </motion.div>

      <h3 style={{ transform: "translateZ(30px)" }} className="font-serif text-3xl text-chocolate mb-2 relative">{tier.name}</h3>
      <div style={{ transform: "translateZ(20px)" }} className="font-sans text-xs tracking-widest text-gold uppercase mb-4 relative">{tier.weight}</div>
      <p style={{ transform: "translateZ(10px)" }} className="font-light text-text/80 mb-8 relative">{tier.description}</p>

      <ul style={{ transform: "translateZ(20px)" }} className="space-y-3 mb-10 w-full text-left font-light text-sm relative">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-center text-text/80">
            <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>

      {/* <div style={{ transform: "translateZ(40px)" }} className="w-full mt-auto relative">
        <button className="btn-primary w-full" onClick={() => navigate("/collections")}>View Details</button>
      </div> */}
    </motion.div>
  );
};

export const ProductTiers = () => {
  return (
    <section id="collections" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl md:text-5xl font-serif text-chocolate"
            >
              Curated Bar Collections
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="w-16 h-[1px] bg-gold mx-auto mb-6 origin-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text font-light max-w-2xl mx-auto"
          >
            Choose the perfect gifting tier for your celebration. From elegant mini bars for all your guests to premium engraved boxes for VIPs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto" style={{ perspective: "1000px" }}>
          {tiers.map((tier, index) => (
            <TiltCard 
              key={index} 
              tier={tier} 
              index={index} 
              className={index === 2 ? "md:col-span-2 lg:col-span-1 max-w-md mx-auto w-full" : "max-w-md mx-auto w-full"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
