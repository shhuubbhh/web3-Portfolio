import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[#050816] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center font-display font-bold text-[10px] text-white">
              S
            </div>
            <span className="font-display font-semibold text-sm tracking-tight text-white">
              SUBHASH<span className="text-brand-purple font-bold">.</span>L1
            </span>
          </div>
          <p className="text-[11px] text-gray-500 font-sans mt-1">
            Building meaningful communities in Web3.
          </p>
        </div>

        {/* Right Side: Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-xs text-gray-500 font-mono">
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1 hover:text-white transition-colors bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg"
          >
            Scroll to Epoch 0 <ArrowUp size={12} />
          </button>
          <span>
            © {new Date().getFullYear()} Subhash Rajpurohit. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
