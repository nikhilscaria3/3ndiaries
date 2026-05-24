import { motion } from 'framer-motion';

const covers = [
    { id: 1, src: '/collection/col1.png', title: 'Midnight Obsidian', desc: 'Deep, dark, and mysterious' },
    // { id: 2, src: '/collection/col2.png', title: 'Crimson Velvet', desc: 'Passionate and striking' },
    { id: 3, src: '/collection/col3.png', title: 'Ocean Whisper', desc: 'Calm and profound' },
    { id: 4, src: '/collection/col4.png', title: 'Emerald Dream', desc: 'Lush and vibrant' },
    { id: 5, src: '/collection/col5.png', title: 'Golden Hour', desc: 'Warm and inviting' },
    { id: 6, src: '/collection/col6.png', title: 'Silver Lining', desc: 'Sleek and modern' },
    { id: 7, src: '/collection/col7.png', title: 'Vintage Leather', desc: 'Classic and timeless' }
];

export function CoverCollection() {
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
                        className="text-lg text-stone-400 max-w-2xl mx-auto"
                    >
                        Discover our curated selection of premium cover designs. Each piece is crafted to inspire and elevate your journaling experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {covers.map((cover, index) => (
                        <motion.div
                            key={cover.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </div>
            </div>
        </section>
    );
}
