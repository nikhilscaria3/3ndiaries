import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const collections = {
    wedding: [
        { id: 'w1', src: '/collection/wedding/col1.png', title: 'Classic Elegance', desc: 'Timeless and sophisticated' },
        // { id: 'w2', src: '/collection/wedding/col2.png', title: 'Midnight Obsidian', desc: 'Deep, dark, and mysterious' },
        { id: 'w3', src: '/collection/wedding/col3.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
        { id: 'w4', src: '/collection/wedding/col4.png', title: 'Emerald Dream', desc: 'Lush and vibrant' },
        { id: 'w5', src: '/collection/wedding/col5.png', title: 'Golden Hour', desc: 'Warm and inviting' },
        { id: 'w6', src: '/collection/wedding/col6.png', title: 'Silver Lining', desc: 'Sleek and modern' },
        { id: 'w7', src: '/collection/wedding/col7.png', title: 'Vintage Leather', desc: 'Classic and timeless' }
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

    return (
        <section className="py-24 bg-gradient-to-b from-stone-900 to-black text-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-500"
                    >
                        The Masterpiece Collection
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
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

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="text-xl font-bold text-white mb-2">{cover.title}</h3>
                                    <p className="text-sm text-stone-300">{cover.desc}</p>
                                </div>

                                {/* Glassmorphism subtle border */}
                                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
