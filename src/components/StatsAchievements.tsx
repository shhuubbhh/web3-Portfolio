import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, ShieldCheck, Milestone } from 'lucide-react';

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<StatProps> = ({ label, value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500; // ms
      const stepTime = Math.abs(Math.floor(duration / value));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) {
          clearInterval(timer);
          setCount(value);
        }
      }, Math.max(stepTime, 20));

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="bg-black/20 border border-white/5 rounded-2xl p-6 text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
        {count}
        <span className="text-brand-purple">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm text-gray-400 font-mono tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
};

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  delay: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description, badge, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col gap-4 text-left border border-white/5"
    >
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
          {icon}
        </div>
        <span className="text-[10px] font-mono font-semibold bg-white/5 border border-white/5 px-2.5 py-1 rounded-full text-gray-400">
          {badge}
        </span>
      </div>
      <div>
        <h3 className="font-display font-semibold text-white text-base mb-1.5">{title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const StatsAchievements: React.FC = () => {
  const stats = [
    { label: 'Ecosystems Contributed', value: 4 },
    { label: 'Threads Published', value: 35, suffix: '+' },
    { label: 'Tutorial Articles', value: 20 },
    { label: 'Community Members Reached', value: 50, suffix: 'k+' },
  ];

  const achievements = [
    {
      icon: <Trophy size={18} />,
      title: 'EthGlobal Hackathon Winner',
      description: 'Awarded top 3 in EVM security and optimization pools for building the SolGuard static AST parser prototype.',
      badge: 'Solidity Pool',
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'Certified Smart Contract Auditor',
      description: 'Successfully passed rigorous security audits and tokenomics validations with industry partners.',
      badge: 'EVM Audit',
    },
    {
      icon: <Star size={18} />,
      title: 'Top Contributor Award',
      description: 'Honored by TxFlow Network Foundation for driving devnet community growth and authoring official validator manuals.',
      badge: 'L1 Contributor',
    },
    {
      icon: <Milestone size={18} />,
      title: 'Cosmos SDK Fellowship',
      description: 'Completed extensive training on Cosmos AppChain frameworks, IBC protocols, and CometBFT consensus engines.',
      badge: 'IBC Protocol',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      {/* Title */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">06 / Achievements</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Metrics & Milestones</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <AnimatedCounter key={stat.label} {...stat} />
        ))}
      </div>

      {/* Achievements Subheading */}
      <div className="text-left mb-10">
        <h3 className="text-2xl font-display font-bold text-white mb-2">Ecosystem Recognition</h3>
        <p className="text-gray-400 text-xs md:text-sm">Proof-of-Contribution badges and milestone achievements earned across networks.</p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach, idx) => (
          <AchievementCard key={ach.title} {...ach} delay={idx * 0.1} />
        ))}
      </div>
    </section>
  );
};
