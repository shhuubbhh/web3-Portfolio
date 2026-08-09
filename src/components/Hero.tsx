import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const titles = [
    'building_communities',
    'creating_educational_content',
    'exploring_blockchain',
    'shipping_products',
    'building_reputation'
  ];

  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const fullText = titles[index];
    const speed = isDeleting ? 25 : 60;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
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
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative pt-24 pb-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle glowing radial background */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full text-left z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column: Badge, Avatar, Name, Status */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-brand-success/5 border border-brand-success/15 px-4 py-1.5 rounded-full text-xs font-mono text-brand-success mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
            <span className="tracking-wide font-medium">AVAILABLE_FOR_OPPORTUNITIES</span>
          </motion.div>

          {/* Profile Image with Radar Waves & Stats Badges */}
          <div className="relative mb-6 select-none ml-20 md:ml-28">
            {/* Radar waves expanding behind profile */}
            <div className="absolute inset-0 rounded-full border border-brand-purple/10 scale-125 animate-ping opacity-30" style={{ animationDuration: '3.5s' }} />
            <div className="absolute inset-0 rounded-full border border-brand-blue/5 scale-150 animate-ping opacity-15" style={{ animationDuration: '5s' }} />

            {/* Floating Web3 Badge: Top-Left */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[-15px] left-[-90px] md:left-[-120px] bg-[#121216]/90 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono text-gray-400 backdrop-blur-sm shadow-md flex items-center gap-1.5 z-30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
              <span>0x7C3A...shubh.eth</span>
            </motion.div>

            {/* Floating Web3 Badge: Top-Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-[-5px] right-[-80px] md:right-[-100px] bg-[#121216]/90 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono text-gray-400 backdrop-blur-sm shadow-md flex items-center gap-1.5 z-30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
              <span>Node Active</span>
            </motion.div>

            {/* Floating Web3 Badge: Bottom-Left */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute bottom-[5px] left-[-75px] md:left-[-100px] bg-[#121216]/90 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono text-gray-400 backdrop-blur-sm shadow-md flex items-center gap-1.5 z-30"
            >
              <span>Target: L1/L2</span>
            </motion.div>

            {/* Floating Web3 Badge: Bottom-Right */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute bottom-[-5px] right-[-70px] md:right-[-90px] bg-[#121216]/90 border border-white/5 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono text-gray-400 backdrop-blur-sm shadow-md flex items-center gap-1.5 z-30"
            >
              <span>Gas: 12 gwei</span>
            </motion.div>

            {/* Inner profile wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-40 h-40 md:w-48 md:h-48"
            >
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-brand-purple/50 via-transparent to-brand-blue/50 animate-spin-slow opacity-80" />
              <div className="absolute inset-[1px] rounded-full bg-[#08080c] z-10" />
              <img
                src="/avatar.jpg"
                alt="Shubh Avatar"
                className="absolute inset-[4px] rounded-full w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover z-20"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-4"
          >
            Shubh
          </motion.h1>

          {/* Dynamic Typing Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-10 mb-2 flex items-center justify-start font-mono text-sm md:text-base lg:text-lg text-gray-400"
          >
            <span className="text-brand-purple font-semibold">$ run shubh --status=active</span>
            <span className="mx-2 text-white font-medium">&gt; {currentText}</span>
            <span className="w-2 h-4 bg-brand-purple animate-pulse" />
          </motion.div>
        </div>

        {/* Right Column: Description and Call to Actions */}
        <div className="lg:col-span-5 flex flex-col items-start lg:pt-0">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mb-6 leading-relaxed font-sans text-left"
          >
            I help blockchain ecosystems grow through community architecture, developer relations, deep protocol research, and content strategy.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 items-center justify-start font-mono text-xs md:text-sm"
          >
            <button
              onClick={handleScrollToProjects}
              className="bg-white/5 border border-white/10 hover:border-brand-purple/50 hover:bg-brand-purple/5 px-8 py-3 rounded-lg text-white transition-all cursor-pointer"
            >
              [view_portfolio]
            </button>
            <a
              href="#contact"
              className="border border-white/5 hover:border-white/15 px-8 py-3 rounded-lg text-gray-400 hover:text-white transition-all"
            >
              [connect]
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 cursor-pointer text-gray-600 hover:text-white transition-colors"
        onClick={handleScrollToProjects}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};
