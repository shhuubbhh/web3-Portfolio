import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  caseStudyUrl: string;
}

const projectsData: Project[] = [
  {
    title: 'MidNight Network',
    role: 'Community Ambassador',
    description: 'Helping expand the Midnight ecosystem by engaging with the community, sharing educational content, participating in campaigns, and supporting ecosystem initiatives focused on privacy-preserving blockchain technology.',
    tech: ['Rust', 'Solidity', 'Web3.js'],
    githubUrl: 'https://github.com/shhuubbhh',
    demoUrl: 'https://github.com/shhuubbhh',
    caseStudyUrl: 'https://github.com/shhuubbhh'
  },
  {
    title: 'Aztec',
    role: 'Lead Technical Contributor',
    description: 'Actively contributing to the Aztec ecosystem through educational content, ecosystem participation, protocol research, and community engagement around privacy and zero-knowledge technology.',
    tech: ['React', 'Ethers.js', 'Hardhat'],
    githubUrl: 'https://github.com/shhuubbhh',
    demoUrl: 'https://github.com/shhuubbhh',
    caseStudyUrl: 'https://github.com/shhuubbhh'
  },
  {
    title: '0G Labs',
    role: 'Community Ambassador',
    description: 'Supporting the AI-powered modular blockchain ecosystem by creating educational content, participating in campaigns, engaging with the community, and helping onboard new users.',
    tech: ['Go', 'GraphQL', 'Next.js'],
    githubUrl: 'https://github.com/shhuubbhh',
    demoUrl: 'https://github.com/shhuubbhh',
    caseStudyUrl: 'https://github.com/shhuubbhh'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Side */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 03. CODE</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; ambassador_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
          </motion.div>
        </div>

        {/* Right Side: Simple Product Grid */}
        <div className="md:col-span-8 space-y-6 text-left">
          {projectsData.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-white/5 bg-[#121216]/30 p-5 rounded-xl flex flex-col justify-between hover:border-brand-purple/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-base text-white">{proj.title}</h3>
                  <span className="font-mono text-[9px] text-gray-500">{proj.role}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{proj.description}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-[10px]">
                {/* Tech Badges */}
                <div className="flex gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-gray-500">#{t.toLowerCase()}</span>
                  ))}
                </div>

                {/* Direct Action triggers */}
                <div className="flex gap-3 text-brand-blue">
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    [code]
                  </a>
                  <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    [sandbox]
                  </a>
                  <a href={proj.caseStudyUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    [spec]
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
