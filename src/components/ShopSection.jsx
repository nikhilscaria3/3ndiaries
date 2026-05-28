import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Flat Card Chocolates',
    description: 'Elegant single-sided custom cards with premium chocolate embedded. Perfect for simple, impactful gifting.',
    price: 40,
    images: [
      '/collection/wedding/flat/flat1.png',
      '/collection/wedding/flat/flat2.png',
      '/collection/wedding/flat/flat5.png',
      '/collection/wedding/flat/flat6.png',
      '/collection/wedding/flat/flat7.png',
      '/collection/wedding/flat/flat8.png',
      '/collection/wedding/flat/flat9.png',
      '/collection/wedding/flat/flat10.png',

    ],
    features: ['Custom Cover Design', 'Premium Chocolate Inside', 'Starts from ₹40', 'Perfect for Bulk Gifting']
  },
  {
    id: 2,
    name: 'Fold Card Chocolates',
    description: 'Classic folded greeting cards revealing a delightful chocolate surprise inside, providing more space for your message.',
    price: 50,
    images: [
      '/collection/wedding/fold/fold1.png',
      '/collection/wedding/fold/fold2.png',
      '/collection/wedding/fold/fold3.png',
      '/collection/wedding/fold/fold4.png',
      '/collection/wedding/fold/fold5.png',
      '/collection/wedding/fold/fold6.png',
      


    ],
    features: ['Interactive Unboxing', 'More Space for Messages', 'Starts from ₹50', 'Premium Finish']
  },
  {
    id: 3,
    name: 'Artisan Chocolate Bars',
    description: 'Crafted chocolate bars available in three exquisite tiers. Standard (₹120), Premium (₹250), and Ultrapremium (₹500+).',
    price: 120,
    priceLabel: '₹120 - ₹500+',
    images: [
      '/collection/wedding/bar/col1.png',
      '/collection/wedding/bar/col2.png',
      '/collection/wedding/bar/col3.png',
      '/collection/wedding/bar/col4.png',
      '/collection/wedding/bar/col5.png',
      '/collection/wedding/bar/col6.png',
      '/collection/wedding/bar/col7.png',



    ],
    features: ['Standard Bar starts from ₹120', 'Premium Bar starts from ₹250', 'Ultrapremium starts from ₹500', 'Elegant Custom Wrapper']
  }
];

const quantities = [50, 100, 200];

export function ShopSection() {
  const [selectedQuantities, setSelectedQuantities] = useState({ 1: 50, 2: 50, 3: 50 });
  const [activeImageIndex, setActiveImageIndex] = useState({ 1: 0, 2: 0, 3: 0 });
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleQuantityChange = (productId, qty) => {
    setSelectedQuantities(prev => ({ ...prev, [productId]: qty }));
  };

  const handleImageChange = (productId, index) => {
    setActiveImageIndex(prev => ({ ...prev, [productId]: index }));
  };

  const handleOrderClick = (product) => {
    const qty = selectedQuantities[product.id];
    const qtyText = qty === 'custom' ? 'a Custom Quantity' : `a Set of ${qty}`;
    const message = `Hi, I would like to inquire about ordering ${qtyText} of ${product.name}. Could you please share more details?`;
    const whatsappUrl = `https://wa.me/919562849356?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden" id="shop">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4a27a] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-400 opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-stone-900 mb-6"
          >
            Signature Chocolate Cards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-500"
          >
            Explore our exclusive collection of chocolate cards. Available in sets of 50, 100, or 200. Custom quantities available on request.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-stone-100 flex flex-col group"
            >
              <div className="flex flex-col gap-2 p-4 pb-0">
                <div
                  className="h-64 overflow-hidden relative rounded-xl group cursor-pointer"
                  onClick={() => setFullScreenImage(product.images[activeImageIndex[product.id]])}
                >
                  <img
                    src={product.images[activeImageIndex[product.id]]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-stone-100">
                    <p className="text-sm font-semibold text-stone-900">
                      {product.priceLabel ? product.priceLabel : `Starts from ₹${product.price}`}
                    </p>
                  </div>
                  {/* Fullscreen icon indicator on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 h-16">
                  {product.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={() => handleImageChange(product.id, imgIdx)}
                      className={`flex-1 overflow-hidden rounded-lg border-2 transition-all ${activeImageIndex[product.id] === imgIdx
                        ? 'border-[#c4a27a] opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${imgIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-stone-900 mb-3">{product.name}</h3>
                <p className="text-stone-500 mb-6">{product.description}</p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-stone-500">
                      <Check className="w-4 h-4 text-[#c4a27a] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">Select Bulk Quantity (Sets)</label>
                    <div className="flex flex-wrap gap-2">
                      {quantities.map(qty => (
                        <button
                          key={qty}
                          onClick={() => handleQuantityChange(product.id, qty)}
                          className={`flex-1 min-w-[50px] py-2 text-sm rounded-lg border transition-all ${selectedQuantities[product.id] === qty
                            ? 'border-[#c4a27a] bg-[#c4a27a] text-white shadow-md'
                            : 'border-stone-200 text-stone-500 hover:border-[#c4a27a] hover:text-[#c4a27a]'
                            }`}
                        >
                          {qty}
                        </button>
                      ))}
                      <button
                        onClick={() => handleQuantityChange(product.id, 'custom')}
                        className={`flex-[1.5] min-w-[80px] py-2 text-sm rounded-lg border transition-all ${selectedQuantities[product.id] === 'custom'
                          ? 'border-[#c4a27a] bg-[#c4a27a] text-white shadow-md'
                          : 'border-stone-200 text-stone-500 hover:border-[#c4a27a] hover:text-[#c4a27a]'
                          }`}
                      >
                        Custom Qty
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOrderClick(product)}
                    className="w-full bg-stone-900 text-white py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-[#c4a27a] transition-colors group/btn mt-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="font-medium">
                      {selectedQuantities[product.id] === 'custom'
                        ? 'Request Custom Quote'
                        : `Order Set of ${selectedQuantities[product.id]}`}
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {createPortal(
        <AnimatePresence>
          {fullScreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
              onClick={() => setFullScreenImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
                onClick={() => setFullScreenImage(null)}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={fullScreenImage}
                alt="Full screen preview"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
