import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductTiers } from './components/ProductTiers';
import { Customization } from './components/Customization';
import { CoverPreviewGenerator } from './components/CoverPreviewGenerator';
import { HowItWorks } from './components/HowItWorks';
import { WeddingGallery } from './components/WeddingGallery';
import { PartnerWithUs } from './components/PartnerWithUs';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="noise-overlay"></div>
      <div className="particles-bg"></div>

      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="w-full overflow-hidden font-sans relative z-10"
        >
          <Navbar />
          <Hero />
          <ProductTiers />
          <Customization />
          {/* <CoverPreviewGenerator /> */}
          <HowItWorks />
          <WeddingGallery />
          <PartnerWithUs />
          <ContactCTA />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
