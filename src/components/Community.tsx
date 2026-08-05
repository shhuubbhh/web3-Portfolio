import React from 'react';
import { motion } from 'framer-motion';

interface ContributionItem {
  label: string;
  count: string;
}

interface EcosystemCardProps {
  name: string;
  role: string;
  items: ContributionItem[];
  delay: number;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ name, role, items, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="border border-white/5 bg-[#121216]/30 p-5 rounded-xl text-left hover:border-brand-purple/20 transition-all"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-display font-bold text-sm text-white">{name}</h3>
        <span className="font-mono text-[9px] text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
          {role}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        {items.map((item) => (
          <div key={item.label} className="border-l border-white/10 pl-3">
            <span className="text-[9px] font-mono text-gray-500 block uppercase tracking-wider">{item.label}</span>
            <span className="text-sm font-display font-bold text-white block mt-0.5">{item.count}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const Community: React.FC = () => {
  const ecosystems: EcosystemCardProps[] = [
    {
      name: 'TxFlow Ecosystem',
      role: 'Ambassador',
      delay: 0.1,
      items: [
        { label: 'Posts Created', count: '140+' },
        { label: 'Research Papers', count: '8' }
      ]
    },
    {
      name: 'Surf Protocol',
      role: 'Research Contributor',
      delay: 0.2,
      items: [
        { label: 'Research deep-dives', count: '12' },
        { label: 'Tutorial Guides', count: '14' }
      ]
    },
    {
      name: 'Arc Chain',
      role: 'Ecosystem Lead',
      delay: 0.3,
      items: [
        { label: 'Dev Tutorials', count: '16' },
        { label: 'Spec Testing', count: '9' }
      ]
    },
    {
      name: 'Fogo DAO',
      role: 'Council Member',
      delay: 0.4,
      items: [
        { label: 'Graphics / Posts', count: '75+' },
        { label: 'Gov Proposals', count: '8' }
      ]
    }
  ];

  return (
    <section id="community" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Side */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 04. ECOSYSTEM</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; community_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ecosystems.map((eco) => (
            <EcosystemCard key={eco.name} {...eco} />
          ))}
        </div>
      </div>
    </section>
  );
};
