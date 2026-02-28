import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 border-t border-white/5 bg-[#030014] mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Let's build something impactful.</h2>
                    <p className="text-neutral-400 max-w-xl mx-auto">
                        Whether it's discussing macro-systems, testing new AI models, or building the next 0→1 product, I'm always open to connecting.
                    </p>
                </div>

                <div className="flex gap-6 mb-12">
                    <a href="mailto:archiev.kumar19@gmail.com" className="px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                        archiev.kumar19@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/archievkumar" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        LinkedIn
                    </a>
                </div>

                <p className="text-neutral-600 text-sm">
                    © {new Date().getFullYear()} Archiev Kumar. Building products for humans.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
