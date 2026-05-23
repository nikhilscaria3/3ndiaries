import { useState } from 'react';
import { motion } from 'framer-motion';
import { LoadingScreen } from './../components/LoadingScreen';
import { Hero } from './../components/Hero';
import { ProductTiers } from './../components/ProductTiers';
import { Flavors } from './../components/Flavors';
import { Customization } from './../components/Customization';
import { HowItWorks } from './../components/HowItWorks';
import { WeddingGallery } from './../components/WeddingGallery';
import { PartnerWithUs } from './../components/PartnerWithUs';
import { Collaborators } from './../components/Collaborators';
import { ContactCTA } from './../components/ContactCTA';

function Home() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return <LoadingScreen onComplete={() => setLoading(false)} />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full overflow-hidden font-sans relative z-10"
        >
            <Hero />
            <ProductTiers />
            <Flavors />
            <Customization />
            {/* <CoverPreviewGenerator /> */}
            <HowItWorks />
            <WeddingGallery />
            <Collaborators />
            <PartnerWithUs />
            <ContactCTA />
        </motion.div>
    );
}

export default Home;
