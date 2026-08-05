import { motion } from 'framer-motion';
import { MessageSquare, Send, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const socials = [
    { 
      name: 'X / Twitter', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
        </svg>
      ), 
      url: 'https://x.com/01Rajpurohit', 
      handle: '@01Rajpurohit', 
      color: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30' 
    },
    { 
      name: 'GitHub', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ), 
      url: 'https://github.com/shhuubbhh', 
      handle: '@shhuubbhh', 
      color: 'hover:text-white hover:border-white/30' 
    },
    { name: 'Discord', icon: <MessageSquare size={18} />, url: 'https://discord.com', handle: 'shubh.__', color: 'hover:text-[#5865F2] hover:border-[#5865F2]/30' },
    { name: 'Telegram', icon: <Send size={18} />, url: 'https://t.me/shhuubhh', handle: '@shhuubhh', color: 'hover:text-[#0088cc] hover:border-[#0088cc]/30' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:encryp.shubh@gmail.com', handle: 'encryp.shubh@gmail.com', color: 'hover:text-brand-purple hover:border-brand-purple/30' },
  ];

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden">
      {/* Background glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">10 / Connect</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Let's Build Something<br />Amazing Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Interested in scaling your community, launching technical research, or expanding your developer ecosystem? Reach out on-chain or off-chain.
          </p>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {socials.map((soc, idx) => (
            <motion.a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`bg-[#111827]/40 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2.5 transition-all text-gray-400 hover:bg-[#111827]/80 hover:translate-y-[-2px] ${soc.color}`}
            >
              <div className="text-current">{soc.icon}</div>
              <div className="text-center">
                <span className="text-xs text-white font-display font-medium block">{soc.name}</span>
                <span className="text-[10px] font-mono text-gray-500 block mt-0.5">{soc.handle}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
