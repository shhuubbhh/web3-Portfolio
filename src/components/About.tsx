import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, PenTool, Sparkles, GraduationCap, GitBranch } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col gap-4 text-left"
    >
      <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-semibold text-white text-base mb-1.5">{title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const features = [
    {
      icon: <Users size={18} />,
      title: 'Community Growth',
      description: 'Designing incentivization loops, community architectures, and scaling strategies for emerging networks.',
    },
    {
      icon: <Search size={18} />,
      title: 'Blockchain Research',
      description: 'Deep diving into consensus protocols, token economics, Layer-2 scaling solutions, and MEV dynamics.',
    },
    {
      icon: <PenTool size={18} />,
      title: 'Content Strategy',
      description: 'Translating complex protocol mechanics and cryptography details into engaging educational content.',
    },
    {
      icon: <Sparkles size={18} />,
      title: 'Product Thinking',
      description: 'Bridging the gap between core infrastructure capabilities and user-friendly Web3 product design.',
    },
    {
      icon: <GraduationCap size={18} />,
      title: 'Technical Learning',
      description: 'Continuously acquiring knowledge in Solidity, Rust, Vyper, cryptography, and smart contract security.',
    },
    {
      icon: <GitBranch size={18} />,
      title: 'Open Source',
      description: 'Contributing to ecosystem documentation, community tools, public goods funding, and open protocols.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side: Sticky Title */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit text-left">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">01 / Profile</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Who I Am</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6" />
          </motion.div>
        </div>

        {/* Right Side: Feature Grid & Introduction Paragraph */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <FeatureCard
                key={feat.title}
                icon={feat.icon}
                title={feat.title}
                description={feat.description}
                delay={idx * 0.1}
              />
            ))}
          </div>

          {/* Biography Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left bg-white/5 border border-white/5 p-8 rounded-2xl text-gray-300 text-sm md:text-base leading-relaxed space-y-4 font-sans"
          >
            <p>
              My journey into Web3 began with a fascination for decentralized systems and permissionless economies. Since stepping into the space, I have focused on helping Layer-1, Layer-2, and modular protocols grow by establishing strong community foundations, writing technical research, and contributing to ecosystem strategy.
            </p>
            <p>
              Whether analyzing DeFi liquidity mechanisms, facilitating developer relations for cross-chain projects, or producing high-impact educational resources, I strive to align technology with the communities that give it life. I believe the future of Web3 belongs to projects that prioritize user experience and sound technical fundamentals over short-term speculation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
