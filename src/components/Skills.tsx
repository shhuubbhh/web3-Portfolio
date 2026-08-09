import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Engine',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Systems',
    skills: ['Node.js', 'Python']
  },
  {
    title: 'Blockchain / Cryptography',
    skills: ['Ethereum', 'Solana', 'Solidity', 'Rust', 'Smart Contracts']
  },
  {
    title: 'Growth / Research',
    skills: ['Technical Research', 'Content Strategy', 'Community Architecture', 'Developer Relations']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Claude', 'Anti-gravity']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Column */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 07. CAPABILITIES</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; skills_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-8 space-y-6 text-left font-mono text-xs">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
              className="border border-white/5 bg-[#121216]/30 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:border-brand-purple/20 transition-all"
            >
              <span className="text-gray-500 font-semibold text-[10px] uppercase sm:col-span-4">
                // {category.title.toLowerCase().replace(/\s+/g, '_')}
              </span>
              <div className="flex flex-wrap gap-1.5 text-gray-300 sm:col-span-8">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-white/5 px-2 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
