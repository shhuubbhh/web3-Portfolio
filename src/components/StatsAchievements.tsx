import React from 'react';
import { motion } from 'framer-motion';

interface WorkItem {
  index: string;
  title: string;
  description: string;
}

const worksData: WorkItem[] = [
  {
    index: '01',
    title: 'EthGlobal Hackathon Winner',
    description: 'Placed Top 3 in EVM security pools, designing static smart contract analysis tools and AST analyzers.'
  },
  {
    index: '02',
    title: 'Smart Contract Auditor Certification',
    description: 'Successfully validated expertise in EVM security auditing, threat modeling, and tokenomics structure validation.'
  },
  {
    index: '03',
    title: 'TxFlow Contributor Award',
    description: 'Recognized for building extensive validator onboarding documentation and fostering ecosystem community growth.'
  },
  {
    index: '04',
    title: 'Cosmos SDK Fellowship',
    description: 'Completed advanced training in AppChain architecture, IBC messaging, and Tendermint consensus layers.'
  }
];

export const StatsAchievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Side: Sticky Title */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 06. BUILDER_WORKS</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; works_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6" />
          </motion.div>
        </div>

        {/* Right Side: Clean Bullet points matching About layout */}
        <div className="md:col-span-8 flex flex-col gap-10 text-left">
          <div className="space-y-6">
            {worksData.map((item) => (
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
                <div>
                  <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-purple transition-colors">
                    {item.title}
                  </h3>
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
