import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background decor parallax (moves opposite to mouse)
  const bgX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [15, -15]);

  // Foreground image parallax (moves with mouse)
  const imgX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.6,
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 md:pt-20 md:pb-0 overflow-hidden bg-ivory">
      {/* Background Decor */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-champagne rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-20 w-[35rem] h-[35rem] bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        />
      </motion.div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left">
          <div className=" mb-10">
            <motion.span

              variants={textVariants}
              className="font-script text-3xl sm:text-4xl md:text-5xl text-gold text-shimmer"
            >
              Sweetest Moments
            </motion.span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-chocolate leading-tight mb-6">
            <div className="overflow-hidden"><motion.span className="block" custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>Luxury Personalized</motion.span></div>
            <div className="overflow-hidden"><motion.span className="block" custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>Chocolates for</motion.span></div>
            <div className="overflow-hidden"><motion.span className="block" custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>Every Occasion</motion.span></div>
          </h1>

          <div className="overflow-hidden">
            <motion.p
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="text-lg md:text-xl text-text font-light mb-10 max-w-lg mx-auto md:mx-0"
            >
              Custom printed covers, engraved chocolate bars, and premium gifting made for weddings, baptisms, birthdays, and unforgettable celebrations.
            </motion.p>
          </div>

          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="btn-primary">Explore Collections</button>
            <button className="btn-outline">Request Custom Design</button>
          </motion.div>
        </div>

        <motion.div
          style={{ x: imgX, y: imgY }}
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="hidden md:block relative h-[300px] sm:h-[400px] md:h-[500px] w-full flex justify-center items-center mt-8 md:mt-0"
        >
          {/* Luxury Mockup Image */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-sm relative flex flex-col items-center justify-center overflow-hidden group"
          >
            <img
              src="/3N/bgimg8.png"
              alt="Luxury Chocolate"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[var(--ease-luxury)] group-hover:scale-[1.03]"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/40 backdrop-blur-md border-t border-champagne/50 py-4 z-20">
        <div className="animate-marquee flex gap-8 md:gap-16 items-center whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-sm md:text-base tracking-[0.2em] uppercase text-chocolate">3NDIARIES</span>
              <span className="text-gold opacity-60">•</span>
              <span className="text-sm md:text-base tracking-[0.2em] uppercase text-chocolate">Sweetest Moments</span>
              <span className="text-gold opacity-60">•</span>
              <span className="text-sm md:text-base tracking-[0.2em] uppercase text-chocolate">Luxury Personalized Chocolates</span>
              <span className="text-gold opacity-60">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
