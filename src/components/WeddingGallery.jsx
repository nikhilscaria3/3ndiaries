import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const WeddingGallery = () => {
  const navigate = useNavigate()
  const images = [
    { type: 'tall', bg: 'bg-champagne', title: 'Sleeve Covers', img: "/gallery/img1.png" },
    { type: 'square', bg: 'bg-blush', title: 'Premium Gift Boxes', img: "/gallery/img2.png" },
    { type: 'wide', bg: 'bg-cream', title: 'Engraved Bars', img: "/gallery/img4.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'Corporate Milestones', img: "/gallery/img22.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'Timeless Elegance', img: "/gallery/img29.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'Celebration Bundles', img: "/gallery/img31.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'Premium Keepsakes', img: "/gallery/img32.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'Exclusive Releases', img: "/gallery/img34.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'Seasonal Delights', img: "/gallery/img25.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'VIP Gift Boxes', img: "/gallery/img27.png" },
    { type: 'square', bg: 'bg-olive/20', title: 'Exquisite Curation', img: "/gallery/img28.png" },
    { type: 'square', bg: 'bg-ivory', title: 'Flat Mailers', img: "/gallery/img3.png" },
    { type: 'wide', bg: 'bg-olive/20', title: 'Event Hampers', img: "/gallery/img5.png" },
    { type: 'wide', bg: 'bg-olive/20', title: 'Event Hampers', img: "/gallery/img6.png" },
    { type: 'wide', bg: 'bg-olive/20', title: 'Event Hampers', img: "/gallery/img7.png" },

  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-chocolate mb-4">
            Event Gallery
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="text-text font-light max-w-2xl mx-auto">
            Explore our portfolio of elegantly crafted chocolate packaging designed for unforgettable events.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-row-dense">
          {images.map((img, index) => {
            let spanClass = '';
            if (img.type === 'tall') spanClass = 'col-span-2 md:col-span-1 row-span-2';
            if (img.type === 'wide') spanClass = 'col-span-2 md:col-span-2 row-span-1';
            if (img.type === 'square') spanClass = 'col-span-1 md:col-span-1 row-span-1';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${spanClass} ${img.bg} rounded-sm relative group overflow-hidden border border-champagne/30`}
              >
                <img src={img.img} alt={img.title} className="w-full h-full object-contain" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-chocolate/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-serif tracking-widest uppercase text-sm border-b border-gold pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary mt-10" onClick={() => navigate("/gallery")}>View Full Portfolio</button>
        </div>
      </div>
    </section>
  );
};
