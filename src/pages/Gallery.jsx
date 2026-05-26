import { motion } from 'framer-motion';


export default function Gallery() {
    const images = [

        { type: 'square', bg: 'bg-olive/20', title: 'Personalized Favors', img: "/gallery/img24.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Seasonal Delights', img: "/gallery/img25.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'VIP Gift Boxes', img: "/gallery/img27.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Exquisite Curation', img: "/gallery/img28.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Timeless Elegance', img: "/gallery/img29.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Celebration Bundles', img: "/gallery/img31.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Premium Keepsakes', img: "/gallery/img32.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Heritage Collection', img: "/gallery/img33.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Exclusive Releases', img: "/gallery/img34.png" },


        { type: 'tall', bg: 'bg-champagne', title: 'Bespoke Sleeve Covers', img: "/gallery/img1.png" },
        { type: 'square', bg: 'bg-blush', title: 'Premium Gift Boxes', img: "/gallery/img2.png" },
        { type: 'square', bg: 'bg-ivory', title: 'Elegant Flat Mailers', img: "/gallery/img3.png" },
        { type: 'square', bg: 'bg-cream', title: 'Signature Engraved Bars', img: "/gallery/img4.png" },
        { type: 'wide', bg: 'bg-olive/20', title: 'Corporate Gifting', img: "/gallery/img5.png" },
        { type: 'wide', bg: 'bg-olive/20', title: 'Wedding Collections', img: "/gallery/img6.png" },
        { type: 'wide', bg: 'bg-olive/20', title: 'Festive Hampers', img: "/gallery/img7.png" },
        { type: 'tall', bg: 'bg-champagne', title: 'Custom Sleeve Covers', img: "/gallery/img8.png" },
        { type: 'square', bg: 'bg-blush', title: 'Luxury Assortments', img: "/gallery/img9.png" },
        { type: 'square', bg: 'bg-ivory', title: 'Classic Pralines', img: "/gallery/img10.png" },
        { type: 'square', bg: 'bg-cream', title: 'Artisan Truffle Boxes', img: "/gallery/img11.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Bespoke Event Favors', img: "/gallery/img12.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Ribbon Tied Bundles', img: "/gallery/img13.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Celebration Hampers', img: "/gallery/img14.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Bridal Shower Treats', img: "/gallery/img15.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Gold Foil Packaging', img: "/gallery/img16.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Anniversary Specials', img: "/gallery/img17.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Boutique Chocolate Boxes', img: "/gallery/img18.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Velvet Touch Boxes', img: "/gallery/img19.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Minimalist Gifting', img: "/gallery/img20.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Rustic Charm Hampers', img: "/gallery/img21.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Corporate Milestones', img: "/gallery/img22.png" },
        { type: 'square', bg: 'bg-olive/20', title: 'Grandeur Collections', img: "/gallery/img23.png" },





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


            </div>
        </section>
    )
}