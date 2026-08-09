import React from 'react';
import { motion } from 'framer-motion';

interface Contribution {
  index: string;
  title: string;
  description: string;
  linkText: string;
  url: string;
  image: string;
}

const contributionsData: Contribution[] = [
  {
    index: '01',
    title: 'Raiku',
    description: 'Supporting ecosystem growth through educational content, Content development, campaign participation, and community engagement.',
    linkText: '',
    url: 'https://github.com/shhuubbhh',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80'
  },
  {
    index: '02',
    title: 'Sentient AGI',
    description: 'Participated in ecosystem initiatives, developed API based tools, and supported community engagement through research and discussions.',
    linkText: '',
    url: 'https://github.com/shhuubbhh',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80'
  },
  {
    index: '03',
    title: 'Fogo',
    description: 'Created graphics, educational posts, community content, and actively participated in ecosystem campaigns while engaging with the community.',
    linkText: '',
    url: 'https://github.com/shhuubbhh',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    index: '04',
    title: 'Arc',
    description: 'Contributed through product development, educational content, and community participation while building applications such as ArcLedger on the Arc network.',
    linkText: '',
    url: 'https://github.com/shhuubbhh',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
  }
];

export const FeaturedContent: React.FC = () => {
  return (
    <section id="content" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5 font-sans">
      {/* Top Header Centered */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 05. CONTRIBUTIONS</span>
          <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; ecosystem_</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
        </motion.div>
      </div>

      {/* Horizontal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {contributionsData.map((item, idx) => (
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
                className="w-full h-28 object-cover rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
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
            {item.linkText && (
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
