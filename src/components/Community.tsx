import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Globe, Share2, Layers, Star, Sparkles, Send } from 'lucide-react';

interface ContributionItem {
  label: string;
  count: string;
  icon: React.ReactNode;
}

interface EcosystemCardProps {
  name: string;
  tagline: string;
  role: string;
  items: ContributionItem[];
  color: 'purple' | 'blue' | 'indigo' | 'cyan';
  delay: number;
}

const colorMap = {
  purple: 'border-brand-purple/20 hover:border-brand-purple/50 text-brand-purple bg-brand-purple/10',
  blue: 'border-brand-blue/20 hover:border-brand-blue/50 text-brand-blue bg-brand-blue/10',
  indigo: 'border-indigo-500/20 hover:border-indigo-500/50 text-indigo-400 bg-indigo-500/10',
  cyan: 'border-cyan-500/20 hover:border-cyan-500/50 text-cyan-400 bg-cyan-500/10',
};
const EcosystemCard: React.FC<EcosystemCardProps> = ({ name, tagline, role, items, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] shadow-lg ${colorMap[color]}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-display font-bold text-xl text-white tracking-tight">{name}</h3>
          <p className="text-gray-400 text-xs mt-1 font-sans">{tagline}</p>
        </div>
        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300">
          {role}
        </span>
      </div>

      <div className="h-px bg-white/5 my-4" />

      {/* Contribution Grid */}
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.label} className="bg-black/20 border border-white/5 rounded-xl p-3.5 flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-[10px] font-mono font-medium tracking-wide uppercase">{item.label}</span>
              <div className="text-white opacity-70">{item.icon}</div>
            </div>
            <div className="text-lg font-display font-semibold text-white mt-1">
              {item.count}
            </div>
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
      tagline: 'High-throughput modular Layer-1',
      role: 'Core Ambassador',
      color: 'purple',
      delay: 0.1,
      items: [
        { label: 'Posts Created', count: '140+', icon: <MessageSquare size={13} /> },
        { label: 'Educational Threads', count: '24', icon: <Share2 size={13} /> },
        { label: 'Research Papers', count: '8', icon: <FileText size={13} /> },
        { label: 'AMA Coverages', count: '12', icon: <Globe size={13} /> },
      ],
    },
    {
      name: 'Surf Protocol',
      tagline: 'EVM Layer-2 Liquidity Aggregator',
      role: 'Research Contributor',
      color: 'blue',
      delay: 0.2,
      items: [
        { label: 'Research Deep-Dives', count: '12', icon: <FileText size={13} /> },
        { label: 'Translations', count: '18', icon: <Globe size={13} /> },
        { label: 'Community Meetups', count: '6', icon: <UsersIcon size={13} /> },
        { label: 'Tutorial Guides', count: '14', icon: <Layers size={13} /> },
      ],
    },
    {
      name: 'Arc Chain',
      tagline: 'Cross-chain CosmWasm hub',
      role: 'Ecosystem Lead',
      color: 'indigo',
      delay: 0.3,
      items: [
        { label: 'Developer Tutorials', count: '16', icon: <Layers size={13} /> },
        { label: 'Product Testing Reports', count: '9', icon: <Star size={13} /> },
        { label: 'Research Analytics', count: '5', icon: <FileText size={13} /> },
        { label: 'Community AMA Guest', count: '4', icon: <MessageSquare size={13} /> },
      ],
    },
    {
      name: 'Fogo DAO',
      tagline: 'Decentralized media & marketing network',
      role: 'Governance Council',
      color: 'cyan',
      delay: 0.4,
      items: [
        { label: 'Graphics & Design', count: '45+', icon: <Sparkles size={13} /> },
        { label: 'Governance Proposals', count: '8', icon: <Send size={13} /> },
        { label: 'Campaigns Launched', count: '11', icon: <Globe size={13} /> },
        { label: 'Newsletter Posts', count: '30+', icon: <FileText size={13} /> },
      ],
    },
  ];

  return (
    <section id="community" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">04 / Ecosystem</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Community Contributions</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6" />
        <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
          I am actively embedded in leading blockchain ecosystems. Here is a ledger of contributions designed to drive builder adoption and community clarity.
        </p>
      </div>

      {/* Grid of Ecosystem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ecosystems.map((eco) => (
          <EcosystemCard key={eco.name} {...eco} />
        ))}
      </div>
    </section>
  );
};

// Local minimal UsersIcon to avoid duplicate imports
const UsersIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
