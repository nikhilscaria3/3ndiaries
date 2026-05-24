import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { Services } from './../components/Services';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Use setTimeout to ensure the browser paints the un-hidden scrollbar first
            setTimeout(() => window.scrollTo(0, 0), 10);
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [loading]);

    return (
        <>
            <AnimatePresence>
                {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="w-full overflow-hidden font-sans relative z-10"
            >
                <Hero />
                <ProductTiers />
                <Flavors />
                <Customization />
                {/* <CoverPreviewGenerator /> */}
                <HowItWorks />
                <Services />
                <WeddingGallery />
                <Collaborators />
                <PartnerWithUs />
                <ContactCTA />
            </motion.div>
        </>
    );
}

export default Home;
