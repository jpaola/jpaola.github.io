import { useState } from "react";
import { FaGratipay } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-bg-dark/70 backdrop-blur-sm">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo + Name */}
                <a
                    href="#hero"
                    className="flex items-center gap-2 text-2xl font-bold text-white hover:text-accent-start transition-colors"
                >
                    <FaGratipay className="text-accent-start" />
                    JPaola
                </a>

                {/* Hamburger Menu Button */}
                <button
                    className="lg:hidden text-white text-3xl hover:text-accent-start transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-6 text-text-light">
                    {["About", "Art", "Books", "Technology", "Projects", "Music", "Contact"].map(
                        (item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="relative px-2 py-1 hover:text-accent-start transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent-start hover:after:w-full after:transition-all after:duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </nav>

            {/* Mobile & Tablet Menu */}
            {isOpen && (
                <div className="lg:hidden bg-bg-dark/95 backdrop-blur-sm border-t border-white/10">
                    <ul className="flex flex-col items-center py-6 gap-4 text-text-light text-lg">
                        {["About", "Art", "Books", "Technology", "Projects", "Music", "Contact"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)} // closes after clicking a link
                                        className="block px-4 py-2 rounded-lg hover:bg-accent-start/20 hover:text-accent-start transition-all"
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
}