import React from 'react';
import { motion } from 'framer-motion';

export const StatsAchievements: React.FC = () => {
  const stats = [
    { count: '4', label: 'Ecosystems Contributed' },
    { count: '35+', label: 'Threads Published' },
    { count: '20', label: 'Tutorial Articles' },
    { count: '50k+', label: 'Community Reach' }
  ];

  const milestones = [
    { title: 'EthGlobal Hackathon Winner', desc: 'Top 3 in EVM security pools' },
    { title: 'Smart Contract Auditor Cert', desc: 'EVM security & tokenomics validation' },
    { title: 'TxFlow Contributor Award', desc: 'Validator documentation & community growth' },
    { title: 'Cosmos SDK Fellowship', desc: 'AppChain, IBC & consensus training' }
  ];

  return (
    <section id="achievements" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Column */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 06. MILESTONES</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; metrics_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-8 space-y-10 text-left font-mono text-xs">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="border border-white/5 bg-[#121216]/30 p-4 rounded-xl text-center">
                <span className="text-xl font-display font-bold text-brand-purple block">{stat.count}</span>
                <span className="text-[9px] text-gray-500 block uppercase mt-1 tracking-tight">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Milestones list */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h3 className="font-display font-bold text-white text-sm mb-4 font-sans">&gt; proofs_</h3>
            {milestones.map((m, idx) => (
              <div key={idx} className="flex items-start gap-2 py-2 border-b border-white/5 last:border-b-0">
                <span className="text-brand-purple">//</span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-gray-300 font-semibold">{m.title}</span>
                  <span className="text-gray-500 text-[10px]">{m.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
