import React from 'react';
import { motion } from 'framer-motion';

interface LedgerItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

const ledgerData: LedgerItem[] = [
  {
    company: 'TxFlow Networks',
    role: 'Lead Community Strategist',
    period: '2024 - Present',
    bullets: [
      'Grew active validator network by 45% through targeted onboarding workshops.',
      'Managed devnet grant allocations, coordinating funding for 15+ early-stage applications.',
      'Led international ambassador program with 100+ global network leaders.'
    ]
  },
  {
    company: 'Surf Protocol',
    role: 'Blockchain Research Associate',
    period: '2023 - 2024',
    bullets: [
      'Authored 10+ research deep-dives analyzing EVM storage slots and L2 rollup gas throughput.',
      'Assisted in restructuring staking tokenomics for Surf v2 token contracts.',
      'Created developer guides outlining zero-knowledge verification steps.'
    ]
  },
  {
    company: 'Arc Chain Foundation',
    role: 'Technical Writer & DevRel Coordinator',
    period: '2022 - 2023',
    bullets: [
      'Redesigned developer contract onboarding guides, reducing dev deploy time by 50%.',
      'Orchestrated global CosmWasm hackathon with 800+ participants.',
      'Wrote tutorials on Rust-based smart contracts and cross-chain indexers.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Side */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 02. RECORD</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; ledger_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
          </motion.div>
        </div>

        {/* Right Side: Ledger transactions */}
        <div className="md:col-span-8 space-y-8 text-left">
          {ledgerData.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-white/5 bg-[#121216]/30 p-6 rounded-xl relative group hover:border-brand-purple/20 transition-all"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-mono text-sm text-brand-purple font-semibold">
                    $ {item.company.toLowerCase().replace(/\s+/g, '_')}
                  </h3>
                  <p className="text-white text-xs font-semibold mt-1 font-sans">{item.role}</p>
                </div>
                <span className="font-mono text-[10px] text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded self-start sm:self-center">
                  {item.period}
                </span>
              </div>

              {/* Bullet list */}
              <ul className="space-y-1.5 text-xs text-gray-400 font-sans pl-4 list-disc marker:text-brand-purple leading-relaxed">
                {item.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
