import React from 'react';
import { motion } from 'framer-motion';

interface WorkItem {
  index: string;
  title: string;
  description: string;
  linkText?: string;
  url?: string;
  image: string;
}

const worksData: WorkItem[] = [
  {
    index: '01',
    title: 'ArcLedger',
    description: 'A merchant-focused payment management platform built for the Arc ecosystem, featuring wallet authentication, customer management, transaction tracking, and modern Web3 UX.',
    linkText: 'Link',
    url: 'https://arc-ledger.pages.dev/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  {
    index: '02',
    title: 'Mohalla',
    description: 'A platform designed to connect people within local communities, making it easier to discover nearby events, businesses, and neighborhood discussions through a simple and scalable interface.',
    linkText: 'Link',
    url: 'https://mohalla2.vercel.app/',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80'
  },
  {
    index: '03',
    title: 'PolyScope',
    description: 'A dashboard concept for tracking prediction markets, on-chain activity, and track all the diffferent criteria of a user based on the activity on Polymarket.',
    linkText: 'Link',
    url: 'https://poly-score.vercel.app/',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80'
  },
  {
    index: '04',
    title: 'Raiku Handbook',
    description: 'A easy-to-understand guide from the official docs of Raiku to help community get better understanding of how Raiku works and how to use it.',
    linkText: 'Link',
    url: 'https://www.raikuhandbook.org/',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
  }
];

export const StatsAchievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5 font-sans">
      {/* Top Header Centered */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 06. BUILDER_WORKS</span>
          <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; works_</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
        </motion.div>
      </div>

      {/* Horizontal Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        {worksData.map((item, idx) => (
          <motion.div
            key={item.index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="border border-white/5 bg-[#121216]/30 p-5 rounded-xl flex flex-col justify-between hover:border-brand-purple/20 transition-all overflow-hidden group"
          >
            <div>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] text-brand-purple tracking-widest group-hover:glow-text-purple transition-all shrink-0">
                  //{item.index}
                </span>
                <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-purple transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
            </div>
            {item.linkText && item.url && (
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] text-brand-blue hover:text-white transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
