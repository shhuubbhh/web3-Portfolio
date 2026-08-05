import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  History, 
  FolderGit2, 
  Share2, 
  BookOpen, 
  Trophy, 
  Terminal, 
  Cpu, 
  MessageSquare, 
  Send,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  sections: string[];
}

export const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'experience', label: 'Ledger', icon: <History size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 size={18} /> },
    { id: 'community', label: 'Ecosystem', icon: <Share2 size={18} /> },
    { id: 'content', label: 'Media', icon: <BookOpen size={18} /> },
    { id: 'achievements', label: 'Awards', icon: <Trophy size={18} /> },
    { id: 'skills', label: 'Stack', icon: <Cpu size={18} /> },
    { id: 'identity', label: 'Scanner', icon: <Terminal size={18} /> },
    { id: 'testimonials', label: 'Reviews', icon: <MessageSquare size={18} /> },
    { id: 'contact', label: 'Connect', icon: <Send size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Sticky Top Utility Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080c]/60 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-end">

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Web3 Network Switcher style */}
            <div 
              onClick={() => setNetwork(prev => prev === 'mainnet' ? 'testnet' : 'mainnet')}
              className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono cursor-pointer hover:border-brand-purple/50 transition-all"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${network === 'mainnet' ? 'bg-brand-success' : 'bg-brand-warning'} animate-pulse`} />
              <span className="text-gray-400 capitalize">{network}</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[11px] font-semibold px-4 py-2 rounded-full transition-all"
            >
              Download CV <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[580px] pointer-events-none">
        <div className="w-full glass-panel border border-white/10 rounded-2xl px-4 py-3 shadow-2xl flex items-center justify-between gap-1 overflow-x-auto no-scrollbar pointer-events-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center shrink-0"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Tooltip text bubble above */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bg-[#121216] border border-white/10 text-white text-[10px] font-mono font-semibold px-2 py-1 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-50"
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nav Button */}
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-brand-purple' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* Sliding capsule indicator background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDockIndicator"
                      className="absolute inset-0 bg-white/5 rounded-xl border border-white/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10 block hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};
