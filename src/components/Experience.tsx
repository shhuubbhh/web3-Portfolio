import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Hash, Calendar } from 'lucide-react';

interface TimelineItem {
  blockHeight: string;
  year: string;
  role: string;
  organization: string;
  txHash: string;
  status: 'Success' | 'Confirmed';
  gasUsed: string;
  summary: string;
  details: string[];
}

const experienceData: TimelineItem[] = [
  {
    blockHeight: 'Block #20,412,183',
    year: '2024 - Present',
    role: 'Lead Community Strategist',
    organization: 'TxFlow Networks',
    txHash: '0x3bf9...f18a',
    status: 'Success',
    gasUsed: '21,000 gwei',
    summary: 'Spearheading ecosystem growth, developer relations, and validator onboarding programs for high-throughput Layer-1 chain.',
    details: [
      'Grew active validator network by 45% through targeted incentivization campaigns and custom onboarding workshops.',
      'Designed and launched the DevNet Grant program, reviewing and funding 15+ early-stage applications.',
      'Coordinated the ambassador program, managing 100+ worldwide community leaders.'
    ]
  },
  {
    blockHeight: 'Block #18,920,443',
    year: '2023 - 2024',
    role: 'Blockchain Research Associate',
    organization: 'Surf Protocol',
    txHash: '0x99e3...b71c',
    status: 'Confirmed',
    gasUsed: '45,210 gwei',
    summary: 'Conducted protocol designs analysis, published deep-dives on L2 rollups, and structured token distribution models.',
    details: [
      'Authored 10+ comprehensive research papers on optimistic vs zk-rollup architectures, generating 50k+ views.',
      'Assisted in restructuring the token economics for the Surf governance token v2, focusing on long-term staking loops.',
      'Created interactive educational widgets detailing zero-knowledge proof verification steps.'
    ]
  },
  {
    blockHeight: 'Block #16,554,821',
    year: '2022 - 2023',
    role: 'Technical Writer & DevRel Coordinator',
    organization: 'Arc Chain Foundation',
    txHash: '0x6e2c...889d',
    status: 'Confirmed',
    gasUsed: '32,150 gwei',
    summary: 'Built developer documentation, tutorial libraries, and orchestrated global ecosystem hackathons.',
    details: [
      'Rebuilt the developer onboarding documentation, cutting the time-to-first-contract deployment by 50%.',
      'Orchestrated ArcBuilder Hackathon, attracting 800+ participants and producing 45 project submissions.',
      'Wrote comprehensive Rust & CosmWasm contract SDK tutorials for beginner developers.'
    ]
  },
  {
    blockHeight: 'Block #14,103,420',
    year: '2021 - 2022',
    role: 'Community Builder & Lead Content Creator',
    organization: 'Fogo DAO',
    txHash: '0xfa11...e224',
    status: 'Confirmed',
    gasUsed: '24,000 gwei',
    summary: 'Cultivated early stage community, managed Discord governance structures, and spearheaded marketing campaigns.',
    details: [
      'Scaled Discord server from 1,000 to 25,000 active members with high retention rates.',
      'Created weekly video recaps and informative educational twitter threads detailing DAO proposals.',
      'Implemented automated governance bot tools for voting alerts and snapshot voting statistics.'
    ]
  }
];

export const Experience: React.FC = () => {
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);

  const toggleBlock = (blockHeight: string) => {
    setExpandedBlock(prev => (prev === blockHeight ? null : blockHeight));
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">02 / Ledger</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Transaction History</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple/50 via-brand-blue/30 to-transparent -translate-x-1/2 hidden md:block" />
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple/50 via-brand-blue/30 to-transparent md:hidden" />

        <div className="space-y-12">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedBlock === item.blockHeight;

            return (
              <div 
                key={item.blockHeight} 
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 rounded-full bg-brand-purple border-2 border-[#050816] -translate-x-1/2 z-10 hidden md:block" />
                <div className="absolute left-6 w-3.5 h-3.5 rounded-full bg-brand-purple border-2 border-[#050816] -translate-x-1/2 z-10 md:hidden" />

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className={`w-full md:w-[46%] ml-12 md:ml-0 glass-panel rounded-2xl p-6 cursor-pointer border border-white/5 hover:border-brand-purple/30 transition-all`}
                  onClick={() => toggleBlock(item.blockHeight)}
                >
                  {/* Card Header (Transaction Metadata) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3 mb-4 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-1">
                      <Hash size={12} className="text-brand-purple" />
                      <span className="text-gray-300 font-semibold">{item.blockHeight}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[#22C55E]/85">
                        <CheckCircle2 size={12} />
                        <span>{item.status}</span>
                      </div>
                      <span className="hidden sm:inline">Gas: {item.gasUsed}</span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="text-left">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-display font-bold text-lg text-white leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-brand-purple font-display text-sm font-semibold">
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded-full text-gray-400 whitespace-nowrap flex items-center gap-1.5">
                        <Calendar size={10} /> {item.year}
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Expand Details Trigger */}
                    <div className="flex items-center justify-between text-xs text-brand-blue font-mono font-semibold pt-2 border-t border-white/5">
                      <span className="flex items-center gap-1">
                        TX Hash: <span className="text-gray-500 font-normal hover:text-brand-blue">{item.txHash}</span>
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </div>

                    {/* Expanded details */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2 border-t border-dashed border-white/10 pt-4 text-xs md:text-sm text-gray-300 pl-4 list-disc marker:text-brand-purple leading-relaxed">
                            {item.details.map((point, pIdx) => (
                              <li key={pIdx}>{point}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
