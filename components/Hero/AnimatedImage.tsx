import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";

const AnimatedImage = ({ src }: StaticImageData) => {

    // cool transition animation

    
    return (
        <AnimatePresence>
            <motion.img
                src={src}
                alt="Dynamic Image"
                className={`z-[100000] flex object-cover transition-all duration-300 ease-in-out `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </AnimatePresence>
    );
};

export default AnimatedImage;
