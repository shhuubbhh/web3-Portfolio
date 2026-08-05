import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentItem {
  id: string;
  category: 'threads' | 'research' | 'guides' | 'articles';
  title: string;
  views: string;
  platform: string;
  url: string;
}

const contentData: ContentItem[] = [
  {
    id: '1',
    category: 'research',
    title: 'EVM Storage Layout & Storage Slot Gas Optimization',
    views: '12.4k views',
    platform: 'Medium',
    url: 'https://medium.com'
  },
  {
    id: '2',
    category: 'threads',
    title: 'Modular Expansion: Why Appchains need Shared Security structures',
    views: '84.2k impressions',
    platform: 'X (Twitter)',
    url: 'https://x.com'
  },
  {
    id: '3',
    category: 'guides',
    title: 'CosmWasm Smart Contracts: Rust Compiler & On-Chain Deployments',
    views: '5.8k reads',
    platform: 'Dev.to',
    url: 'https://dev.to'
  },
  {
    id: '4',
    category: 'articles',
    title: 'Zero Knowledge Rollups: Reviewing Starknet, zkSync, and Scroll L2s',
    views: '15.1k views',
    platform: 'Mirror',
    url: 'https://mirror.xyz'
  }
];

export const FeaturedContent: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'threads' | 'research' | 'guides' | 'articles'>('all');

  const filteredItems = contentData.filter(item => 
    filter === 'all' ? true : item.category === filter
  );

  const categories = [
    { value: 'all', label: 'all' },
    { value: 'threads', label: 'threads' },
    { value: 'research', label: 'research' },
    { value: 'guides', label: 'guides' },
    { value: 'articles', label: 'articles' },
  ];

  return (
    <section id="content" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Column */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 05. PUBLICATIONS</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; media_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6" />
          </motion.div>

          {/* Inline Filter Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-[10px] font-mono">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value as any)}
                className={`transition-colors cursor-pointer ${
                  filter === cat.value ? 'text-brand-purple font-semibold' : 'text-gray-500 hover:text-white'
                }`}
              >
                [{cat.label}]
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Clean Terminal logs list */}
        <div className="md:col-span-8 space-y-4 text-left font-mono text-xs">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="border border-white/5 bg-[#121216]/30 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-brand-purple/20 transition-all"
              >
                <div className="flex items-start gap-2">
                  <span className="text-brand-purple shrink-0">$</span>
                  <div>
                    <span className="text-gray-500 font-semibold uppercase text-[9px] mr-2">[{item.platform}]</span>
                    <span className="text-gray-200">{item.title}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0 shrink-0 text-[10px]">
                  <span className="text-gray-600">{item.views}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-blue hover:text-white transition-colors"
                  >
                    [read]
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
