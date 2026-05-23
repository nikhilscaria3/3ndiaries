import { Customization } from '../components/Customization';
import { motion } from 'framer-motion';

export default function CustomizationPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full overflow-hidden font-sans relative z-10 pt-20"
        >
            <Customization />
        </motion.div>
    );
}
