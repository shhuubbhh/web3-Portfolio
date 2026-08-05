import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const socials = [
    { name: 'x.com', type: 'handle', value: '@01Rajpurohit', url: 'https://x.com/01Rajpurohit' },
    { name: 't.me', type: 'handle', value: '@shhuubhh', url: 'https://t.me/shhuubhh' },
    { name: 'discord', type: 'handle', value: 'shubh.__', url: 'https://discord.com' },
    { name: 'github', type: 'handle', value: '@shhuubbhh', url: 'https://github.com/shhuubbhh' },
    { name: 'email', type: 'addr', value: 'encryp.shubh@gmail.com', url: 'mailto:encryp.shubh@gmail.com' }
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left Column */}
        <div className="md:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 10. CONNECT</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; contact_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
          </motion.div>
        </div>

        {/* Right Column: Console styled links */}
        <div className="md:col-span-8 text-left space-y-4 font-mono text-xs">
          {socials.map((soc, idx) => (
            <motion.div
              key={soc.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-white/5 bg-[#121216]/30 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-brand-purple/20 transition-all animate-float"
              style={{ animationDelay: `${idx * 0.5}s`, animationDuration: '8s' }}
            >
              <div className="flex items-start gap-2">
                <span className="text-brand-purple shrink-0">$</span>
                <div>
                  <span className="text-gray-300 font-semibold uppercase text-[9px] mr-2">[{soc.name}]</span>
                  <span className="text-gray-500">// {soc.type}: </span>
                  <span className="text-gray-400 font-sans">{soc.value}</span>
                </div>
              </div>

              <a
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="text-brand-blue hover:text-white transition-colors text-[10px] shrink-0 self-end sm:self-center"
              >
                [connect]
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
