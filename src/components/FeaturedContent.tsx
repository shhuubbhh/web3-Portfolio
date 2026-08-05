import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, BookOpen, FileText, Compass, ExternalLink } from 'lucide-react';

interface ContentItem {
  id: string;
  category: 'threads' | 'research' | 'guides' | 'articles';
  title: string;
  summary: string;
  views: string;
  platform: string;
  platformIcon: React.ReactNode;
  url: string;
  coverColor: string;
}

const contentData: ContentItem[] = [
  {
    id: '1',
    category: 'research',
    title: 'EVM Storage Layout and Gas Optimization Techniques',
    summary: 'A deep-dive analysis on how storage slots operate under the hood in Ethereum, and layout patterns to maximize contract execution efficiency.',
    views: '12.4k views',
    platform: 'Medium',
    platformIcon: <FileText size={12} />,
    url: 'https://medium.com',
    coverColor: 'from-[#7C3AED]/20 to-[#3B82F6]/10'
  },
  {
    id: '2',
    category: 'threads',
    title: 'The Modular Expansion: Why Appchains need Shared Security',
    summary: 'A viral 20-post thread explaining the architectural differences between Cosmos-style shared security and Ethereum-based EigenLayer restaking.',
    views: '84.2k impressions',
    platform: 'X (Twitter)',
    platformIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
      </svg>
    ),
    url: 'https://x.com',
    coverColor: 'from-[#3B82F6]/20 to-[#111827]'
  },
  {
    id: '3',
    category: 'guides',
    title: 'CosmWasm Smart Contracts: Rust Beginner Blueprint',
    summary: 'Step-by-step developer tutorial showing how to setup a CosmWasm local network, instantiate contracts, and run custom unit testing suites.',
    views: '5.8k reads',
    platform: 'Dev.to',
    platformIcon: <Compass size={12} />,
    url: 'https://dev.to',
    coverColor: 'from-brand-success/15 to-[#111827]'
  },
  {
    id: '4',
    category: 'articles',
    title: 'Zero Knowledge Rollups: Comparing zkSync, Starknet & Scroll',
    summary: 'An architectural review comparing prover systems (SNARKs vs STARKs), transaction submission costs, and developer ergonomics across top zkEVM networks.',
    views: '15.1k views',
    platform: 'Mirror.xyz',
    platformIcon: <BookOpen size={12} />,
    url: 'https://mirror.xyz',
    coverColor: 'from-amber-500/15 to-[#111827]'
  }
];

export const FeaturedContent: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'threads' | 'research' | 'guides' | 'articles'>('all');

  const filteredItems = contentData.filter(item => 
    filter === 'all' ? true : item.category === filter
  );

  const categories = [
    { value: 'all', label: 'All Content' },
    { value: 'threads', label: 'Threads' },
    { value: 'research', label: 'Research' },
    { value: 'guides', label: 'Guides' },
    { value: 'articles', label: 'Articles' },
  ];

  return (
    <section id="content" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">05 / Media</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Featured Publications</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === cat.value
                  ? 'bg-brand-purple text-white shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Cards Container */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-brand-purple/30 transition-all flex flex-col md:flex-row text-left"
            >
              {/* Cover Gradient Panel */}
              <div className={`md:w-48 bg-gradient-to-br ${item.coverColor} flex items-center justify-center p-6 min-h-[120px] md:min-h-0 border-b md:border-b-0 md:border-r border-white/5`}>
                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center border border-white/10 text-white/80">
                  {item.platformIcon}
                </div>
              </div>

              {/* Card Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2 text-xs font-mono text-gray-500">
                    <span className="capitalize text-brand-purple font-semibold">{item.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
                  <span className="text-xs text-gray-500 font-mono">Platform: <span className="text-gray-300 font-semibold">{item.platform}</span></span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-white transition-all font-mono"
                  >
                    Read Article <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
