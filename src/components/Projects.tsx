import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Shield } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  caseStudyUrl: string;
  featured: boolean;
  visual: React.ReactNode;
}

const projectsData: Project[] = [
  {
    title: 'SolGuard: Smart Contract Auditor CLI',
    role: 'Lead Architect',
    description: 'An open-source static analysis engine designed to detect vulnerability patterns in Solidity smart contracts. Features automated AST inspection, custom rule definitions, and generates detailed on-chain reports.',
    tech: ['Rust', 'Solidity', 'Web3.js', 'Typescript'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    caseStudyUrl: 'https://github.com',
    featured: true,
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-brand-purple/20 to-black flex flex-col justify-between p-6 font-mono text-xs text-gray-400 relative overflow-hidden select-none">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Shield size={120} className="text-brand-purple" />
        </div>
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-brand-purple font-semibold">⚡ solguard-cli v1.4.0</span>
          <span className="text-brand-success font-mono">STATUS: ACTIVE</span>
        </div>
        <div className="space-y-1.5 py-4">
          <p className="text-white font-semibold">$ solguard audit ./contracts/Token.sol</p>
          <p className="text-gray-500">▶ Parsing contract AST...</p>
          <p className="text-brand-warning">⚠ Warning: Reentrancy vulnerability found in line 42</p>
          <p className="text-brand-warning">⚠ Warning: Unprotected selfdestruct call in line 89</p>
          <p className="text-brand-success">✔ Audit finished: 2 issues found, 0 critical</p>
        </div>
        <div className="flex items-center gap-2 border-t border-white/5 pt-2 text-[10px]">
          <span className="bg-brand-purple/20 px-2 py-0.5 rounded text-brand-purple">solidity-parser-antlr</span>
          <span className="bg-white/5 px-2 py-0.5 rounded">slither-rules</span>
        </div>
      </div>
    ),
  },
  {
    title: 'GasOptimizer Dashboard',
    role: 'Solidity & Frontend Dev',
    description: 'Interactive analytics dashboard designed to optimize EVM smart contract gas consumption. Compares bytecode structures and storage layout configurations.',
    tech: ['React', 'Ethers.js', 'Hardhat', 'ChartJS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    caseStudyUrl: 'https://github.com',
    featured: false,
    visual: (
      <div className="w-full h-36 bg-gradient-to-tr from-brand-blue/20 to-black flex items-center justify-center p-4 relative overflow-hidden">
        <div className="text-center">
          <div className="text-2xl font-display font-bold text-white mb-1">42,120 Gwei</div>
          <div className="text-[10px] font-mono text-brand-success uppercase tracking-wider">Storage Layout Saved 25% Gas</div>
          <div className="w-24 h-1.5 bg-white/5 rounded-full mx-auto mt-3 overflow-hidden border border-white/5">
            <div className="w-3/4 h-full bg-brand-blue" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'CrossChain Bridging Analytics',
    role: 'Blockchain Researcher',
    description: 'Real-time telemetry and indexing pipeline monitoring cross-chain message protocols. Aggregates transfer events and gas speeds across major networks.',
    tech: ['Go', 'GraphQL', 'Solana Web3', 'Next.js'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    caseStudyUrl: 'https://github.com',
    featured: false,
    visual: (
      <div className="w-full h-36 bg-gradient-to-bl from-brand-purple/10 to-brand-blue/10 flex flex-col justify-around p-4 font-mono text-[10px]">
        <div className="flex justify-between text-gray-500">
          <span>SOURCE: ETHEREUM</span>
          <span>DEST: SOLANA</span>
        </div>
        <div className="h-0.5 bg-white/10 relative my-1">
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-brand-blue rounded-full -translate-y-1/2 animate-ping" />
        </div>
        <div className="flex justify-between text-white">
          <span>Tx Hash: 0x9f1a...</span>
          <span className="text-brand-success">COMMITTED</span>
        </div>
      </div>
    ),
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">03 / Codebase</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Featured Ecosystems</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
        </div>
        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
          A showcase of products, open-source utilities, and architectural prototypes designed to resolve scaling and security challenges.
        </p>
      </div>

      {/* Projects Display */}
      <div className="space-y-10">
        {/* 1. Featured Project Card */}
        {projectsData.filter(p => p.featured).map((proj) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-brand-purple/40 transition-all flex flex-col lg:grid lg:grid-cols-12"
          >
            {/* Visual Container */}
            <div className="lg:col-span-6 bg-black/40 border-b lg:border-b-0 lg:border-r border-white/5 min-h-[250px] flex items-center justify-center">
              {proj.visual}
            </div>

            {/* Content Container */}
            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono tracking-wider bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-1 rounded-full text-brand-purple font-semibold uppercase">
                    FEATURED PRODUCT
                  </span>
                  <span className="text-xs text-gray-500 font-mono">/ {proj.role}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  {proj.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs font-mono bg-white/5 border border-white/5 px-3 py-1 rounded-lg text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-white transition-all hover:scale-[1.02]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg> Repository
                </a>
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-blue px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-white transition-all hover:scale-[1.02]"
                >
                  <ExternalLink size={14} /> Live Sandbox
                </a>
                <a
                  href={proj.caseStudyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-400 hover:text-white transition-all"
                >
                  <BookOpen size={14} /> Architectural Spec
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* 2. Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.filter(p => !p.featured).map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between text-left"
            >
              <div>
                {/* Visual */}
                <div className="border-b border-white/5 bg-black/40 overflow-hidden">
                  {proj.visual}
                </div>
                
                {/* Text Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 font-mono">
                    <span>{proj.role}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                  
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded-md text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                <div className="flex gap-4">
                  <a href={proj.githubUrl} className="text-gray-400 hover:text-white transition-colors" title="Repository">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a href={proj.demoUrl} className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                    <ExternalLink size={16} />
                  </a>
                </div>
                <a href={proj.caseStudyUrl} className="text-xs font-mono text-brand-blue flex items-center gap-1 hover:underline">
                  Case Study <BookOpen size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
