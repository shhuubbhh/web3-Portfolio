import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const competencies = [
    {
      index: '01',
      title: 'Community Architecture',
      description: 'Designing incentivization loops, community governance structures, and validator onboarding programs.'
    },
    {
      index: '02',
      title: 'Protocol Research',
      description: 'Deep diving into L2 rollup throughput, smart contract gas optimizations, and token distribution models.'
    },
    {
      index: '03',
      title: 'Developer Relations',
      description: 'Orchestrating global ecosystem hackathons, structuring technical onboarding manuals, and handling developer grants.'
    },
    {
      index: '04',
      title: 'Technical Content',
      description: 'Translating complex cryptography and protocol specifications into highly engaging educational guides.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Side: Sticky Title */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 01. CORE_PROFILE</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; about_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6" />
          </motion.div>
        </div>

        {/* Right Side: Simple Clean Bullet points */}
        <div className="md:col-span-8 flex flex-col gap-10 text-left">
          {/* Competency List */}
          <div className="space-y-6">
            {competencies.map((comp) => (
              <motion.div
                key={comp.index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4 border-b border-white/5 pb-4 hover:border-brand-purple/20 transition-all group"
              >
                <span className="font-mono text-xs text-brand-purple tracking-widest pt-0.5 group-hover:glow-text-purple transition-all">
                  //{comp.index}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-purple transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple Concise Bio Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-4 pt-4 font-sans"
          >
            <p>
              I stepped into Web3 driven by a fascination for permissionless infrastructure and decentralized systems. Since then, I have focused on bridging core protocol development with ecosystem growth, handling developer relations, protocol research, and builder incentive programs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
