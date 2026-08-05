import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, MessageSquare, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Engine',
    icon: <Layout size={16} />,
    color: 'from-brand-purple/20 to-brand-purple/5',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Ethers.js', 'Vite']
  },
  {
    title: 'Backend Systems',
    icon: <Server size={16} />,
    color: 'from-brand-blue/20 to-brand-blue/5',
    skills: ['Node.js', 'Python', 'Go', 'Express', 'GraphQL', 'FastAPI']
  },
  {
    title: 'Blockchain / Cryptography',
    icon: <Database size={16} />,
    color: 'from-brand-success/20 to-brand-success/5',
    skills: ['Ethereum', 'Solana', 'Solidity', 'Rust', 'Smart Contracts', 'Hardhat', 'Anchor']
  },
  {
    title: 'Growth / Research',
    icon: <MessageSquare size={16} />,
    color: 'from-amber-500/20 to-amber-500/5',
    skills: ['Technical Research', 'Content Strategy', 'Community Architecture', 'Developer Relations', 'Governance']
  },
  {
    title: 'Infrastructure & Tools',
    icon: <Wrench size={16} />,
    color: 'from-cyan-500/20 to-cyan-500/5',
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'GitHub Actions', 'Vercel']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">07 / Stack</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Technical Capabilities</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            className={`glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 text-white mb-6">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-brand-purple">
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-base">{category.title}</h3>
              </div>

              {/* Skills Pills Container */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs font-mono bg-white/5 hover:bg-brand-purple/20 border border-white/10 hover:border-brand-purple/30 px-3.5 py-1.5 rounded-full text-gray-300 hover:text-white cursor-default transition-all shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
