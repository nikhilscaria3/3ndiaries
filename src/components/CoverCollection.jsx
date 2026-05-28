import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const collections = {
    wedding: [
        { id: 'w1', src: '/collection/wedding/bar/col1.png', title: 'Classic Elegance', desc: 'Timeless and sophisticated' },
        { id: 'w2', src: '/collection/wedding/bar/col2.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
        { id: 'w3', src: '/collection/wedding/bar/col3.png', title: 'Emerald Dream', desc: 'Lush and vibrant' },
        { id: 'w4', src: '/collection/wedding/bar/col4.png', title: 'Golden Hour', desc: 'Warm and inviting' },
        { id: 'w5', src: '/collection/wedding/bar/col5.png', title: 'Silver Lining', desc: 'Sleek and modern' },
        { id: 'w6', src: '/collection/wedding/bar/col6.png', title: 'Vintage Leather', desc: 'Classic and timeless' },
        { id: 'w7', src: '/collection/wedding/bar/col7.png', title: 'Vintage Leather', desc: 'Classic and timeless' }

    ],
    foldandfalt: [
        { id: 'f1', src: '/collection/wedding/fold/fold1.png', title: 'Classic Elegance', desc: 'Timeless and sophisticated' },
        { id: 'f2', src: '/collection/wedding/fold/fold2.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
        { id: 'f3', src: '/collection/wedding/fold/fold3.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
        { id: 'f4', src: '/collection/wedding/fold/fold4.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
        { id: 'f5', src: '/collection/wedding/fold/fold5.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
        { id: 'f6', src: '/collection/wedding/fold/fold6.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
        { id: 'f7', src: '/collection/wedding/flat/flat1.png', title: 'Emerald Dream', desc: 'Lush and vibrant' },
        { id: 'f8', src: '/collection/wedding/flat/flat2.png', title: 'Golden Hour', desc: 'Warm and inviting' },
        { id: 'f9', src: '/collection/wedding/flat/flat5.png', title: 'Silver Lining', desc: 'Sleek and modern' },
        { id: 'f10', src: '/collection/wedding/flat/flat6.png', title: 'Vintage Leather', desc: 'Classic and timeless' },
        { id: 'f11', src: '/collection/wedding/flat/flat7.png', title: 'Vintage Leather', desc: 'Classic and timeless' },
        { id: 'f12', src: '/collection/wedding/flat/flat8.png', title: 'Vintage Leather', desc: 'Classic and timeless' },
        { id: 'f13', src: '/collection/wedding/flat/flat9.png', title: 'Vintage Leather', desc: 'Classic and timeless' },
        { id: 'f14', src: '/collection/wedding/flat/flat10.png', title: 'Vintage Leather', desc: 'Classic and timeless' },

    ],
    birthday: [
        { id: 'b1', src: '/collection/birthday/col1.png', title: 'Joyful Celebration', desc: 'Bright and energetic' },
        { id: 'b2', src: '/collection/birthday/col2.png', title: 'Sweet Memories', desc: 'Playful and fun' }
    ],
    baptism: [
        { id: 'ba1', src: '/collection/baptism/col1.png', title: 'Pure Grace', desc: 'Gentle and serene' },
        { id: 'ba2', src: '/collection/baptism/col2.png', title: 'Pure Grace', desc: 'Gentle and serene' }


    ],
    housewarming: [
        { id: 'h1', src: '/collection/housewarming/col1.png', title: 'Warm Hearth', desc: 'Cozy and welcoming' },
        { id: 'h2', src: '/collection/housewarming/col2.png', title: 'Warm Hearth', desc: 'Cozy and welcoming' },

    ]
};

const events = [
    { id: 'wedding', label: 'Wedding' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'baptism', label: 'Baptism' },
    { id: 'housewarming', label: 'Housewarming' }
];

export function CoverCollection() {
    const [activeEvent, setActiveEvent] = useState('wedding');
    const activeCovers = collections[activeEvent];
    const foldandfaltCovers = collections['foldandfalt'];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 to-black text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div  >
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-500"
                        >
                            The Masterpiece Flat and Fold Collection
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-stone-400 max-w-2xl mx-auto mb-10"
                        >
                            Discover our curated selection of premium cover designs. Each piece is crafted to inspire and elevate your journaling experience.
                        </motion.p>


                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {foldandfaltCovers.map((cover, index) => (
                                <motion.div
                                    layout
                                    key={cover.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-800 shadow-2xl shadow-black/50 cursor-pointer"
                                >
                                    {/* Image with zoom effect on hover */}
                                    <img
                                        src={cover.src}
                                        alt={cover.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Unique ID Badge */}
                                    <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/50 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10 z-10 shadow-lg">
                                        <span className="text-[10px] md:text-xs font-mono font-bold text-stone-200 uppercase tracking-widest">
                                            {cover.id}
                                        </span>
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 translate-y-4 md:translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">{cover.title}</h3>
                                        <p className="text-[10px] md:text-sm text-stone-300 hidden sm:block">{cover.desc}</p>
                                    </div>

                                    {/* Glassmorphism subtle border */}
                                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-xl md:rounded-2xl transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <div className='mt-24'>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-500"
                        >
                            The Masterpiece Bar Collection
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-stone-400 max-w-2xl mx-auto mb-10"
                        >
                            Discover our curated selection of premium cover designs. Each piece is crafted to inspire and elevate your journaling experience.
                        </motion.p>

                        {/* Event Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {events.map((event) => (
                                <button
                                    key={event.id}
                                    onClick={() => setActiveEvent(event.id)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeEvent === event.id
                                        ? 'bg-stone-200 text-stone-900 border-stone-200 shadow-[0_0_15px_rgba(231,229,228,0.3)]'
                                        : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'
                                        }`}
                                >
                                    {event.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {activeCovers.map((cover, index) => (
                                <motion.div
                                    layout
                                    key={cover.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-800 shadow-2xl shadow-black/50 cursor-pointer"
                                >
                                    {/* Image with zoom effect on hover */}
                                    <img
                                        src={cover.src}
                                        alt={cover.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Unique ID Badge */}
                                    <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/50 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10 z-10 shadow-lg">
                                        <span className="text-[10px] md:text-xs font-mono font-bold text-stone-200 uppercase tracking-widest">
                                            {cover.id}
                                        </span>
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 translate-y-4 md:translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">{cover.title}</h3>
                                        <p className="text-[10px] md:text-sm text-stone-300 hidden sm:block">{cover.desc}</p>
                                    </div>

                                    {/* Glassmorphism subtle border */}
                                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-xl md:rounded-2xl transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
