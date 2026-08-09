import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  role: string;
  description: string;
  image: string;
}

const projectsData: Project[] = [
  {
    title: 'MidNight Network',
    role: 'Community Ambassador',
    description: 'Helping expand the Midnight ecosystem by engaging with the community, sharing educational content, participating in campaigns, and supporting ecosystem initiatives focused on privacy-preserving blockchain technology.',
    image: '/src/mid.jpg'
  },
  {
    title: 'Aztec',
    role: 'Lead Technical Contributor',
    description: 'Actively contributing to the Aztec ecosystem through educational content, ecosystem participation, protocol research, and community engagement around privacy and zero-knowledge technology.',
    image: '/src/aztec.jpg'
  },
  {
    title: '0G Labs',
    role: 'Community Ambassador',
    description: 'Supporting the AI-powered modular blockchain ecosystem by creating educational content, participating in campaigns, engaging with the community, and helping onboard new users.',
    image: '/src/0g.jpg'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      {/* Top Header Centered */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 03. CODE</span>
          <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; ambassador_</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
        </motion.div>
      </div>

      {/* Horizontal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {projectsData.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="border border-white/5 bg-[#121216]/30 p-5 rounded-xl flex flex-col justify-between hover:border-brand-purple/20 transition-all overflow-hidden"
          >
            <div>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-32 object-cover rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-base text-white">{proj.title}</h3>
                <span className="font-mono text-[9px] text-gray-500">{proj.role}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
