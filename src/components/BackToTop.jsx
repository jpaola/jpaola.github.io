import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; // uses lucide-react icons (already available in shadcn/ui setup)

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0 }}
            animate={visible
                ? { opacity: 1, scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 3 } }
                : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-accent-start to-accent-end 
                 text-white p-3 rounded-full shadow-lg glow-hover 
                 hover:shadow-[0_0_20px_rgba(118,75,162,0.6)] 
                 focus:outline-none focus:ring-2 focus:ring-accent-end/50 z-50"
        >
            <ArrowUp className="w-5 h-5" />
        </motion.button>
    );
}