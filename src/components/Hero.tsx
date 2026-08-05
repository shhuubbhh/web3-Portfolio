import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const titles = [
    'Building Communities',
    'Creating Educational Content',
    'Exploring Blockchain',
    'Shipping Products',
    'Building Reputation'
  ];

  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const fullText = titles[index];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : fullText.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-6 overflow-hidden">
      {/* Background glow behind profile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-success/10 border border-brand-success/20 px-4 py-1.5 rounded-full text-xs font-medium text-brand-success mb-8 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-ping" />
          <span className="tracking-wide">Available for Web3 Opportunities</span>
        </motion.div>

        {/* Profile Image with Animated Rotating Glowing Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative w-36 h-36 mb-6"
        >
          {/* Animated gradient ring */}
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-brand-purple via-transparent to-brand-blue animate-spin-slow opacity-80" />
          <div className="absolute inset-[2px] rounded-full bg-[#08080c] z-10" />
          {/* Actual Avatar */}
          <img
            src="/avatar.jpg"
            alt="Shubh Avatar"
            className="absolute inset-[6px] rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover z-20"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-4"
        >
          Shubh
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="h-10 mb-6 flex items-center justify-center font-display text-lg md:text-2xl font-medium"
        >
          <span className="text-gray-400">Web3</span>
          <span className="mx-2 text-brand-purple font-semibold">{currentText}</span>
          <span className="w-0.5 h-6 bg-brand-purple animate-pulse ml-0.5" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-sm md:text-lg max-w-xl mb-10 leading-relaxed font-sans"
        >
          I help blockchain ecosystems grow through community, content, research, and product thinking.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto bg-gradient-to-r from-brand-purple to-brand-blue text-white px-8 py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-brand-purple/20 hover:scale-[1.03] transition-all flex items-center justify-center gap-1.5"
          >
            View Portfolio <Cpu size={16} />
          </button>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3.5 rounded-2xl font-semibold text-sm transition-all hover:scale-[1.03] flex items-center justify-center gap-1.5"
          >
            Get In Touch <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-8 cursor-pointer text-gray-500 hover:text-white transition-colors"
        onClick={handleScrollToProjects}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
