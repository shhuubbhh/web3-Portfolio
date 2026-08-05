import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  sections: string[];
}

export const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const scrollPosition = window.scrollY + 160;
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
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050816]/70 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center font-display font-bold text-white shadow-md shadow-brand-purple/20">
              S
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-white">
              SUBHASH<span className="text-brand-purple font-bold">.</span>L1
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans uppercase tracking-wider transition-all ${
                  activeSection === section
                    ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Web3 Network Switcher Style Toggle */}
            <div 
              onClick={() => setNetwork(prev => prev === 'mainnet' ? 'testnet' : 'mainnet')}
              className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-3 py-1.5 rounded-full text-[11px] font-mono cursor-pointer hover:border-brand-purple/50 transition-all"
            >
              <span className={`w-2 h-2 rounded-full ${network === 'mainnet' ? 'bg-brand-success' : 'bg-brand-warning'} animate-pulse`} />
              <span className="text-gray-400 capitalize">{network}</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="flex items-center gap-1 bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md shadow-brand-purple/20 transition-all hover:scale-105"
            >
              Download CV <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#050816]/95 backdrop-blur-lg border-t border-white/5 flex flex-col justify-between p-6 lg:hidden"
          >
            <div className="flex flex-col gap-3 mt-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-display tracking-wide uppercase transition-all ${
                    activeSection === section
                      ? 'bg-brand-purple/20 border-l-2 border-brand-purple text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="text-xs text-gray-400 font-mono">Network Status</span>
                <div 
                  onClick={() => setNetwork(prev => prev === 'mainnet' ? 'testnet' : 'mainnet')}
                  className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-3 py-1 rounded-full text-xs font-mono cursor-pointer"
                >
                  <span className={`w-2 h-2 rounded-full ${network === 'mainnet' ? 'bg-brand-success' : 'bg-brand-warning'} animate-pulse`} />
                  <span className="text-white capitalize">{network}</span>
                </div>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="w-full text-center bg-gradient-to-r from-brand-purple to-brand-blue text-white py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-1"
              >
                Download CV <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
