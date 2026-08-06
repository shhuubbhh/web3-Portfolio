import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const competencies = [
    {
      index: '01',
      title: 'Community Growth',
      description: 'Helping Web3 ecosystems grow by fostering engaged communities, creating educational initiatives, and building meaningful relationships between projects and users.'
    },
    {
      index: '02',
      title: 'Community Operations',
      description: 'Experienced in managing community interactions, organizing initiatives, supporting ecosystem campaigns, and creating an environment where contributors can thrive.'
    },
    {
      index: '03',
      title: 'Building Products',
      description: 'Exploring blockchain technologies by building practical Web3 applications and continuously improving my development skills to turn ideas into usable products.'
    },
    {
      index: '04',
      title: 'Research & Education',
      description: 'Simplifying complex blockchain concepts into actionable content, ecosystem research, and technical guides that help communities learn and participate with confidence.'
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
              I entered Web3 driven by curiosity and stayed because of the people building it. My focus is on helping blockchain ecosystems grow through research, educational content, community engagement, and hands-on product exploration. Whether it's simplifying complex protocols, contributing to community initiatives, or building small products, I enjoy creating work that makes Web3 more accessible and valuable for everyone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
