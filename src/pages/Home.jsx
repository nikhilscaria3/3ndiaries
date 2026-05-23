import { motion } from 'framer-motion';
import { Hero } from './../components/Hero';
import { ProductTiers } from './../components/ProductTiers';
import { Customization } from './../components/Customization';
import { HowItWorks } from './../components/HowItWorks';
import { WeddingGallery } from './../components/WeddingGallery';
import { PartnerWithUs } from './../components/PartnerWithUs';
import { ContactCTA } from './../components/ContactCTA';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full overflow-hidden font-sans relative z-10"
        >
            <Hero />
            <ProductTiers />
            <Customization />
            {/* <CoverPreviewGenerator /> */}
            <HowItWorks />
            <WeddingGallery />
            <PartnerWithUs />
            <ContactCTA />
        </motion.div>
    );
}

export default Home;
