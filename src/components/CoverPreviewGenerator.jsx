import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CoverPreviewGenerator = () => {
  const [names, setNames] = useState('Sarah & James');
  const [date, setDate] = useState('12th November 2026');
  const [color, setColor] = useState('#F2E8DF'); // Champagne
  const [image, setImage] = useState(null);

  const colors = [
    { name: 'Champagne', hex: '#F2E8DF' },
    { name: 'Blush', hex: '#E6C5C0' },
    { name: 'Ivory', hex: '#FFFFF0' },
    { name: 'Olive', hex: '#556B2F' },
    { name: 'Chocolate', hex: '#3B2A1A' }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-gold block mb-2">Create Yours</span>
          <h2 className="text-4xl md:text-5xl font-serif text-chocolate mb-4">
            Design Your Cover
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="text-text font-light max-w-2xl mx-auto">
            Personalize your chocolate cover instantly. Upload your photo, enter your details, and see how your luxury favor will look.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ivory p-8 rounded-sm luxury-shadow"
          >
            <div className="space-y-6">
              <div>
                <label className="block font-serif text-chocolate mb-2">Couple Names</label>
                <input
                  type="text"
                  value={names}
                  onChange={(e) => setNames(e.target.value)}
                  className="w-full bg-white border border-champagne p-3 font-sans text-text focus:outline-none focus:border-gold transition-colors"
                  placeholder="e.g. Sarah & James"
                />
              </div>

              <div>
                <label className="block font-serif text-chocolate mb-2">Event Date</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-champagne p-3 font-sans text-text focus:outline-none focus:border-gold transition-colors"
                  placeholder="e.g. 12th November 2026"
                />
              </div>

              <div>
                <label className="block font-serif text-chocolate mb-2">Theme Color</label>
                <div className="flex gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.hex)}
                      className={`w-10 h-10 rounded-full border-2 transition-transform ${color === c.hex ? 'border-gold scale-110' : 'border-transparent hover:scale-105'}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    ></button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-serif text-chocolate mb-2">Custom Photo</label>
                <div className="border-2 border-dashed border-champagne p-6 text-center bg-white cursor-pointer hover:border-gold transition-colors relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="font-light text-text/70">
                    {image ? 'Change Photo' : 'Click or drag to upload'}
                  </div>
                </div>
                {image && (
                  <button
                    onClick={() => setImage(null)}
                    className="text-xs text-text/60 mt-2 hover:text-chocolate uppercase tracking-widest"
                  >
                    Remove Photo
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Live Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center bg-cream rounded-sm p-4 sm:p-10 luxury-shadow h-[600px] overflow-hidden"
          >
            {/* The Base Mockup Image */}
            <div className="relative w-full max-w-md aspect-[3/4] flex justify-center items-center">

              {/* The Sleeve Overlay - these inset percentages will need to be adjusted based on bgimg8.png's actual perspective */}
              <div
                className="absolute z-10 overflow-hidden flex flex-col items-center shadow-inner"
                style={{
                  top: '15%',
                  bottom: '15%',
                  left: '25%',
                  right: '25%',
                  backgroundColor: color,
                  // Simulate slight perspective curve
                  transform: 'perspective(600px) rotateY(-1deg) rotateX(1deg)',
                  boxShadow: 'inset -5px 0 15px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.2)',
                  borderRadius: '2px'
                }}
              >
                <div
                  className="w-[90%] h-[94%] mt-[3%] border-[1px] border-solid flex flex-col items-center justify-between p-2 sm:p-4 z-10"
                  style={{ borderColor: color === '#3B2A1A' ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.6)' }}
                >
                  {/* Top Text / Logo Area */}
                  <div className="text-center w-full pt-1">
                    <p
                      className="font-serif text-[8px] uppercase tracking-[0.2em] opacity-80"
                      style={{ color: color === '#3B2A1A' ? '#D4AF37' : '#3B2A1A' }}
                    >
                      3NDIARIES
                    </p>
                  </div>

                  {/* Photo Area (Middle) */}
                  <div className="w-[85%] h-[55%] relative rounded-t-[50%] overflow-hidden border border-gold/30 mt-2 mb-2 bg-white/10 shadow-inner">
                    {image ? (
                      <img src={image} alt="Custom" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-chocolate/30 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[8px] uppercase tracking-widest text-chocolate/50">Photo</span>
                      </div>
                    )}
                  </div>

                  {/* Text Area (Bottom) */}
                  <div className="text-center w-full flex flex-col items-center pb-2">
                    <h3
                      className="font-script text-xl sm:text-3xl mb-1 leading-tight w-full break-words"
                      style={{ color: color === '#3B2A1A' ? '#D4AF37' : '#3B2A1A' }}
                    >
                      {names || 'Names'}
                    </h3>
                    <div
                      className="w-6 h-[1px] mb-1 sm:mb-2"
                      style={{ backgroundColor: color === '#3B2A1A' ? 'rgba(212,175,55,0.5)' : 'rgba(59,42,26,0.3)' }}
                    ></div>
                    <p
                      className="font-serif text-[8px] sm:text-[9px] uppercase tracking-widest"
                      style={{ color: color === '#3B2A1A' ? '#F2E8DF' : '#3B2A1A' }}
                    >
                      {date || 'Date'}
                    </p>
                  </div>
                </div>

                {/* Highlights/Shadows overlay to make it look realistic */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/30 pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
