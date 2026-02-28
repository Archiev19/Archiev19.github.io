import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Journey', href: '#journey' },
        { name: 'Career', href: '#career' },
        { name: 'Products', href: '#products' },
        { name: 'Education', href: '#education' },
        { name: 'About', href: '#about' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full transition-all duration-300 ${scrolled ? 'glass-nav backdrop-blur-xl bg-[#0a0a0a]/80' : 'bg-transparent'}`}
        >
            <div className="flex items-center gap-1 sm:gap-2">
                {/* Logo/Avatar placeholder */}
                <a href="#hero" className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 mr-2 shrink-0">
                    <img src="/assets/main_1.jpg" alt="Archiev" className="w-full h-full object-cover" />
                </a>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-1 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Contact CTA */}
                <a
                    href="#contact"
                    className="ml-2 px-5 py-2.5 rounded-full text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-colors hidden sm:block shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                    Contact
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
