import React from 'react';
import { motion } from 'framer-motion';

interface Contribution {
  index: string;
  title: string;
  description: string;
  linkText: string;
  url: string;
}

const contributionsData: Contribution[] = [
  {
    index: '01',
    title: 'Aztec Protocol Research',
    description: 'Published in-depth research on zero-knowledge rollups, private state transitions, and developer documentation guides to make ZK-privacy accessible.',
    linkText: '[view_research]',
    url: 'https://github.com/shhuubbhh'
  },
  {
    index: '02',
    title: 'Midnight Network Onboarding',
    description: 'Created comprehensive educational materials and tutorials to help developers build and deploy privacy-preserving smart contracts.',
    linkText: '[view_guides]',
    url: 'https://github.com/shhuubbhh'
  },
  {
    index: '03',
    title: '0G Labs Community Expansion',
    description: 'Designed educational content and hosted community events to simplify and onboard builders into the AI-powered modular blockchain ecosystem.',
    linkText: '[view_content]',
    url: 'https://github.com/shhuubbhh'
  },
  {
    index: '04',
    title: 'Open Source Security Tools',
    description: 'Maintained and contributed to AST static analysis tooling to identify smart contract vulnerabilities and improve EVM gas efficiency.',
    linkText: '[view_github]',
    url: 'https://github.com/shhuubbhh'
  }
];

export const FeaturedContent: React.FC = () => {
  return (
    <section id="content" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Side: Sticky Title */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 05. CONTRIBUTIONS</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; ecosystem_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6" />
          </motion.div>
        </div>

        {/* Right Side: Clean Bullet points matching About layout */}
        <div className="md:col-span-8 flex flex-col gap-10 text-left">
          <div className="space-y-6">
            {contributionsData.map((item) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4 border-b border-white/5 pb-4 hover:border-brand-purple/20 transition-all group"
              >
                <span className="font-mono text-xs text-brand-purple tracking-widest pt-0.5 group-hover:glow-text-purple transition-all shrink-0">
                  //{item.index}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-purple transition-colors">
                      {item.title}
                    </h3>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-brand-blue hover:text-white transition-colors shrink-0"
                    >
                      {item.linkText}
                    </a>
                  </div>
                  <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
