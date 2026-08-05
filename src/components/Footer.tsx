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
    <footer className="border-t border-white/5 bg-[#08080c] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-[11px] text-gray-500 font-sans">
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
            © {new Date().getFullYear()} Shubh. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
