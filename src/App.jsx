import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductTiers } from './components/ProductTiers';
import { Customization } from './components/Customization';
import { HowItWorks } from './components/HowItWorks';
import { WeddingGallery } from './components/WeddingGallery';
import { PartnerWithUs } from './components/PartnerWithUs';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-hidden font-sans">
      <Navbar />
      <Hero />
      <ProductTiers />
      <Customization />
      <HowItWorks />
      <WeddingGallery />
      <PartnerWithUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
