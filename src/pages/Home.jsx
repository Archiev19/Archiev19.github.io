import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Download, ExternalLink, Calendar, MapPin, CheckCircle2, ChevronRight, Activity, Book } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import {
    heroData, aboutData, skillsData, experienceData, educationData, currentlyBuilding, launchedProducts, humanLayerData
} from '../data/portfolio';

const radarData = [
    { subject: 'Product Strategy', A: 80, fullMark: 100 },
    { subject: 'Product Design', A: 75, fullMark: 100 },
    { subject: 'Market Research', A: 80, fullMark: 100 },
    { subject: 'PM Tools', A: 85, fullMark: 100 },
    { subject: 'Data Engineering', A: 65, fullMark: 100 },
    { subject: 'AI & ML', A: 65, fullMark: 100 },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const RotatingLogo = ({ images, objectMode = "object-contain" }) => {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIdx(i => (i + 1) % images.length);
                setVisible(true);
            }, 400);
        }, 4500);
        return () => clearInterval(interval);
    }, [images.length]);

    const currentImg = images[idx];
    const src = typeof currentImg === 'string' ? currentImg : currentImg.path;
    const scale = typeof currentImg === 'object' ? currentImg.scale : '';

    return (
        <img
            key={src}
            src={src}
            alt="Rotating visual"
            className={`w-full h-full transition-opacity duration-400 ${objectMode} ${scale}`}
            style={{ opacity: visible ? 1 : 0 }}
        />
    );
};

const Home = () => {
    const [typingText, setTypingText] = useState("");
    const [photoOpen, setPhotoOpen] = useState(false);
    const fullText = "> Initializing PM workspace...\n> Loading user insights...\n> Analyzing market data...\n> Empathy level: MAXIMUM\n> Strategy: ALIGNED\n> System ready. Welcome to the roadmap.\n> \"Great products solve real problems.\"";

    useEffect(() => {
        let typingInterval;
        let timeoutId;

        const typeLoop = () => {
            let i = 0;
            setTypingText("");
            typingInterval = setInterval(() => {
                if (i <= fullText.length) {
                    setTypingText(fullText.substring(0, i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    timeoutId = setTimeout(typeLoop, 10000); // Wait 10s then restart
                }
            }, 20); // typing speed
        };

        typeLoop();

        return () => {
            clearInterval(typingInterval);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="flex flex-col w-full relative z-10 selection:bg-purple-500/30">

            {/* Decorative Blob Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full pt-10">
                <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full mb-12">

                    {/* Left Text */}
                    <div className="flex-1 max-w-2xl">
                        {/* Clickable avatar with pulsating ring */}
                        <div
                            onClick={() => setPhotoOpen(true)}
                            className="relative mb-6 w-28 h-28 sm:w-36 sm:h-36 cursor-pointer group"
                        >
                            {/* Outer pulsating glow ring */}
                            <span className="absolute inset-0 rounded-full ring-2 ring-purple-500/60 animate-ping opacity-60" />
                            <span className="absolute inset-0 rounded-full ring-2 ring-purple-500/40" />
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#030014] shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform duration-300">
                                <img src={heroData.image} alt="Archiev Kumar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            Hi, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 pb-2 leading-tight">
                            {heroData.name}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-400 mb-8 leading-relaxed max-w-xl">
                            {heroData.subtitle}
                        </p>

                        <div className="flex items-center gap-4 mb-8">
                            <a href="https://github.com/Archiev19" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all text-neutral-300 hover:text-white">
                                <Github size={20} />
                            </a>
                            <span className="p-3 bg-white/5 border border-white/10 rounded-xl text-neutral-600 cursor-not-allowed opacity-40" title="LinkedIn coming soon">
                                <Linkedin size={20} />
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#products" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2">
                                View My Work <ChevronRight size={18} />
                            </a>
                            <a href="/assets/Archiev_Kumar_Resume_Final.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-xl font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                                Download CV <Download size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Terminal */}
                    <div className="w-full lg:w-[58%] max-w-xl">
                        <div className="glass-card overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.15)] border-white/10 rounded-2xl">
                            {/* Mac Window Header */}
                            <div className="bg-[#1a1b26] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs font-mono text-neutral-500 flex items-center gap-2">
                                    <Terminal size={14} /> terminal
                                </span>
                            </div>
                            {/* Terminal Body */}
                            <div className="p-6 bg-[#0f111a] min-h-[250px] font-mono text-sm leading-relaxed">
                                {typingText.split('\n').map((line, i) => {
                                    let colorClass = "text-blue-400";
                                    if (line.includes("MAXIMUM")) colorClass = "text-green-400";
                                    if (line.includes("ALIGNED")) colorClass = "text-green-400";
                                    if (line.includes("Great products")) colorClass = "text-purple-400";
                                    return (
                                        <p key={i} className={`${colorClass} mb-2`}>{line}</p>
                                    );
                                })}
                                <span className="animate-pulse inline-block w-2 h-4 bg-white/50 ml-1" />
                            </div>
                        </div>
                    </div>

                </motion.div>
            </section>

            {/* Photo Modal */}
            {photoOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setPhotoOpen(false)}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={e => e.stopPropagation()}
                        className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-[0_0_60px_rgba(139,92,246,0.4)]"
                    >
                        <img src={heroData.image} alt="Archiev Kumar" className="w-full h-full object-cover" />
                    </motion.div>
                    <button
                        onClick={() => setPhotoOpen(false)}
                        className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                        ✕
                    </button>
                </motion.div>
            )}

            {/* About & Skills Section combined style */}
            <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            {aboutData.hook}
                        </h2>
                        <p className="text-xl text-neutral-400 leading-relaxed">
                            {aboutData.bio}
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Radar Chart */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full lg:w-1/3 glass-card p-6 min-h-[460px] flex flex-col items-center justify-center">
                            <div className="w-full h-[420px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="55%" data={radarData}>
                                        <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }} />
                                        <Radar name="Skills" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>

                        {/* Skills Grid */}
                        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(skillsData).map(([category, skills], i) => (
                                <motion.div key={category} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="glass-card p-6 hover:bg-white/[0.08] transition-colors group">
                                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map(s => (
                                            <span key={s} className="px-3 py-1.5 bg-neutral-900/50 border border-white/10 rounded-lg text-xs font-semibold text-neutral-400">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Journey (Timeline style) */}
            <section id="career" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900/30 border-t border-white/5 relative">
                <div className="max-w-[1000px] mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase border border-purple-500/20 mb-4">
                            Career Roadmap
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                            Professional Journey
                        </h2>
                    </motion.div>

                    {/* Timeline Experience */}
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                        {experienceData.map((exp, index) => (
                            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                {/* Timeline dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030014] bg-neutral-800 group-hover:bg-purple-500 group-hover:border-purple-500/30 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                                    <Activity size={16} />
                                </div>
                                {/* Card */}
                                <div className="glass-card p-6 w-[calc(100%-4rem)] md:w-[calc(56%-2rem)] group-hover:border-purple-500/30 transition-colors">
                                    {/* Row 1: Role + Logo */}
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-2xl font-bold text-white pr-4 leading-tight">{exp.role}</h3>
                                        {exp.logo && (
                                            <div className="w-14 h-14 rounded-xl bg-white border border-white/20 flex items-center justify-center p-0.5 overflow-hidden shadow-sm shrink-0">
                                                <img src={exp.logo} alt={exp.company} className={`w-full h-full object-contain ${exp.logoScale || ''}`} />
                                            </div>
                                        )}
                                    </div>
                                    {/* Row 2: Company + Date on same line */}
                                    <div className="flex items-center justify-between mb-4">
                                        <p className="text-base text-neutral-400 font-medium flex items-center gap-1">
                                            <MapPin size={14} /> {exp.company}{exp.location !== 'India' ? `, ${exp.location}` : ''}
                                        </p>
                                        <span className="text-xs font-medium text-purple-400 flex items-center gap-1 whitespace-nowrap ml-4">
                                            <Calendar size={12} /> {exp.date}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, idx) => {
                                            const isObj = typeof highlight === 'object';
                                            return (
                                                <li key={idx} className="text-sm text-neutral-300 flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                                    <span>
                                                        {isObj ? highlight.text : highlight}
                                                        {isObj && highlight.link && (
                                                            <a href={highlight.link} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
                                                                {highlight.linkText} <ExternalLink size={10} />
                                                            </a>
                                                        )}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid (Currently Building & Launched) */}
            <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">

                    {/* Currently Building */}
                    <div className="mb-24">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase border border-blue-500/20 mb-4 animate-pulse">
                                Currently Building
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                Simply Fit
                            </h2>
                        </motion.div>

                        <div className="max-w-2xl mx-auto">
                            {currentlyBuilding.map((proj) => (
                                <motion.div key={proj.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card p-8 group hover:border-white/20 transition-all text-center">
                                    {/* Rotating Logo */}
                                    {proj.images && proj.images.length > 0 && (
                                        <div className="w-56 h-56 mx-auto mb-6 rounded-2xl bg-white border border-white/20 flex items-center justify-center p-4 overflow-hidden shadow-lg">
                                            <RotatingLogo images={proj.images} />
                                        </div>
                                    )}
                                    <h3 className="text-3xl font-bold text-white mb-2">{proj.title}</h3>
                                    <p className="text-sm text-neutral-500 uppercase tracking-wider font-semibold mb-4">{proj.category}</p>
                                    <p className="text-neutral-400 leading-relaxed mb-6">{proj.shortDescription}</p>
                                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                                        {proj.techStack.map(stack => (
                                            <span key={stack} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/20">
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={proj.links[0].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                                        Visit Simply Fit <ExternalLink size={16} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Launched Products */}
                    <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold tracking-widest uppercase border border-green-500/20 mb-4">
                                Launched Products
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">
                                Products That Make Impact
                            </h2>
                        </motion.div>

                        {/* Infinite horizontal carousel */}
                        <div className="relative overflow-hidden">
                            {/* fade edges */}
                            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#030014] to-transparent z-10" />
                            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#030014] to-transparent z-10" />

                            <style>{`
                                @keyframes scroll-left {
                                    0%   { transform: translateX(0); }
                                    100% { transform: translateX(-50%); }
                                }
                                .carousel-track {
                                    display: flex;
                                    width: max-content;
                                    animation: scroll-left 22s linear infinite;
                                }
                                .carousel-track:hover { animation-play-state: paused; }
                            `}</style>

                            <div className="carousel-track gap-6">
                                {[...launchedProducts, ...launchedProducts].map((proj, i) => (
                                    <div key={`${proj.id}-${i}`} className="glass-card p-8 flex flex-col w-80 shrink-0 hover:border-white/20 transition-all">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full w-fit mb-4">
                                            {proj.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-grow">{proj.shortDescription}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {proj.techStack.slice(0, 3).map(stack => (
                                                <span key={stack} className="px-2.5 py-1 bg-white/5 text-neutral-300 text-[10px] uppercase tracking-wider font-bold rounded-lg border border-white/10">
                                                    {stack}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-3 mt-auto">
                                            {proj.links.map((link, lIdx) => (
                                                <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/20 transition-all w-fit">
                                                    {link.text} <ExternalLink size={14} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Educational Background (Timeline style continued) */}
            <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900/30 border-t border-white/5 relative">
                <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full md:w-1/3">
                        <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Education</h2>
                        <p className="text-neutral-400 leading-relaxed">The foundational learning and rigorous training paths that built my systems-thinking muscle.</p>
                    </motion.div>
                    <div className="w-full md:w-2/3 space-y-8">
                        {educationData.map((edu, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.1 }} className="glass-card p-8 group hover:border-blue-500/30 transition-all">
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-1">{edu.institution}</h3>
                                        <p className="text-sm text-neutral-500 font-medium mb-4">Delhi, India</p>
                                        <p className="text-sm sm:text-base md:text-lg font-semibold text-purple-400 mb-1 leading-tight whitespace-nowrap">{edu.degree}</p>
                                        <p className="text-sm text-neutral-400">{edu.date}</p>
                                    </div>
                                    {edu.logo && (
                                        <div className="w-20 h-20 rounded-2xl bg-white border border-white/20 flex items-center justify-center p-2 overflow-hidden shadow-lg shrink-0">
                                            <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                                        </div>
                                    )}
                                </div>

                                {edu.coursework && (
                                    <div className="mt-8 border-t border-white/5 pt-8">
                                        <h4 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                            Key Coursework
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                            {edu.coursework.map((course, cIdx) => (
                                                <div key={cIdx} className="flex items-center gap-3 text-sm text-neutral-300">
                                                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                                                    {course}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Human Layer */}
            <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
                {/* Subtle background element */}
                <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
                    <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                </div>

                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">{humanLayerData.title}</h2>
                        <p className="text-xl text-neutral-400 leading-relaxed">{humanLayerData.intro}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {humanLayerData.interests.map((interest, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.1 }} className="glass-card p-8 lg:p-10 flex flex-col border border-white/10 hover:border-purple-500/30 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-4">{interest.title}</h3>
                                <div className="text-neutral-400 leading-relaxed mb-8 flex-grow">
                                    {interest.description.split('**').map((part, i) => (
                                        i % 2 === 1 ? <strong key={i} className="text-white font-bold">{part}</strong> : part
                                    ))}
                                </div>

                                {interest.images && (
                                    <div className="relative h-64 rounded-2xl overflow-hidden group mb-8 border border-white/5 bg-black/40">
                                        <RotatingLogo images={interest.images} objectMode="object-contain" />
                                    </div>
                                )}

                                {interest.goodreads && (
                                    <a
                                        href={interest.goodreads}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors mb-6 group w-fit"
                                    >
                                        See what I am reading <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                )}

                                {interest.books && (
                                    <div className="bg-black/30 p-6 rounded-2xl border border-white/5 mt-auto">
                                        <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Book size={14} /> Recommended Reading
                                        </p>
                                        <ul className="space-y-4">
                                            {interest.books.map((book, b) => (
                                                <li key={b} className="text-sm flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                                                    <span className="text-white font-medium break-words">"{book.title}"</span>
                                                    <span className="text-neutral-500 shrink-0">— {book.author}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {interest.hasMedia && (
                                    <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
                                        <div className="flex -space-x-3">
                                            <div className="h-10 w-10 rounded-full border-2 border-[#1e1e2f] bg-neutral-800" />
                                            <div className="h-10 w-10 rounded-full border-2 border-[#1e1e2f] bg-neutral-700" />
                                        </div>
                                        <span className="text-xs text-neutral-500 font-medium">Photos arriving soon</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
