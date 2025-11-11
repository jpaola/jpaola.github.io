import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quotes from "../data/curated-quotes.json";

export default function Quotes() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 180000); // ⏱ change quote every 3 minutes (180,000 ms)
        return () => clearInterval(timer);
    }, []);

    const quote = quotes[index];
    return (
        <div className="relative flex flex-col items-center justify-center text-center px-4 mt-8">
            <AnimatePresence mode="wait">
                <motion.blockquote
                    key={quote.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-2xl md:text-3xl italic text-white/90" // ⬅️ bigger font
                >
                    “{quote.text}”
                    <footer className="mt-4 text-lg md:text-xl text-white/70">— {quote.author}</footer> {/* ⬅️ bigger author */}
                </motion.blockquote>
            </AnimatePresence>
        </div>
    );
}