import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, CheckCircle } from 'lucide-react';

export const IdentityDashboard: React.FC = () => {
  const latestActivities = [
    { type: 'recap', text: 'Published TxFlow modular L1 ecosystem recap', hash: '0x9923...1a2f', time: '2 hrs ago' },
    { type: 'build', text: 'Built static analysis prototype for SolGuard AST parser', hash: '0x3bf9...f18a', time: '1 day ago' },
    { type: 'contrib', text: 'Facilitated Surf L2 developer documentation translation review', hash: '0x1c8b...452d', time: '3 days ago' },
    { type: 'thread', text: 'Wrote educational thread on Restaking vs Shared Security', hash: '0xaa4f...ef00', time: '5 days ago' },
    { type: 'research', text: 'Completed zk-Rollup consensus throughput research report', hash: '0x6e2c...889d', time: '1 week ago' },
  ];

  return (
    <section id="identity" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Column */}
        <div className="lg:col-span-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase mb-2 block">// 08. DATA_SCAN</span>
            <h2 className="text-3xl font-display font-bold text-white mb-4">&gt; scanner_</h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
          </motion.div>
        </div>

        {/* Right Column: Explorer Panel */}
        <div className="lg:col-span-8">
          <div className="glass-panel rounded-2xl overflow-hidden border border-white/5 shadow-2xl text-left bg-black/40">
            {/* Explorer Top Address Bar */}
            <div className="bg-white/5 px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-b border-white/5 gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-brand-purple">
                  <Terminal size={10} /> QUERY
                </div>
                <span className="font-mono text-xs text-gray-300 tracking-tight">
                  https://explorer.shubh.l1/address/<span className="text-white font-semibold">shubh.eth</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono">
                <span className="text-gray-500">Scan Status:</span>
                <span className="text-brand-success font-semibold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-brand-success animate-pulse" /> SYNCHRONIZED
                </span>
              </div>
            </div>

            {/* Explorer Content Details */}
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[9px] text-gray-500 block mb-0.5">RESOLVED ADDRESS</span>
                  <span className="text-brand-purple font-semibold text-xs">0x7C3AED82F6...shubh.eth</span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 block mb-0.5">SCAN STATUS</span>
                  <span className="text-white flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-brand-success" /> Active
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 block mb-0.5">AVAILABILITY</span>
                  <span className="text-white">Open to Web3 Opps</span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 block mb-0.5">PRIMARY FOCUSES</span>
                  <span className="text-white">Community, Research, DevRel</span>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              {/* Recent Activity Logs */}
              <div>
                <h3 className="font-mono font-semibold text-white text-xs mb-3 flex items-center gap-1.5">
                  <Cpu size={12} className="text-brand-purple" /> Latest Activity Logs
                </h3>

                <div className="space-y-2.5">
                  {latestActivities.map((act, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/5 border border-white/5 p-3 rounded-lg font-mono text-[10px]">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-purple mt-1.5 shrink-0" />
                        <div>
                          <p className="text-gray-300 leading-tight">{act.text}</p>
                          <span className="text-[9px] text-gray-500">TX: {act.hash}</span>
                        </div>
                      </div>
                      <span className="text-[9px] text-gray-500 whitespace-nowrap self-end sm:self-center">
                        {act.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
