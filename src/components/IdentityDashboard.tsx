import React from 'react';
import { Cpu, Terminal, ArrowUpRight, CheckCircle } from 'lucide-react';

export const IdentityDashboard: React.FC = () => {
  const latestActivities = [
    { type: 'recap', text: 'Published TxFlow modular L1 ecosystem recap', hash: '0x9923...1a2f', time: '2 hrs ago' },
    { type: 'build', text: 'Built static analysis prototype for SolGuard AST parser', hash: '0x3bf9...f18a', time: '1 day ago' },
    { type: 'contrib', text: 'Facilitated Surf L2 developer documentation translation review', hash: '0x1c8b...452d', time: '3 days ago' },
    { type: 'thread', text: 'Wrote educational thread on Restaking vs Shared Security', hash: '0xaa4f...ef00', time: '5 days ago' },
    { type: 'research', text: 'Completed zk-Rollup consensus throughput research report', hash: '0x6e2c...889d', time: '1 week ago' },
  ];

  return (
    <section id="identity" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">08 / Scanner</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">On-Chain Identity Dashboard</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
      </div>

      {/* Explorer Style Interface Container */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-white/5 shadow-2xl text-left bg-black/40">
        {/* Explorer Top Address Bar Mockup */}
        <div className="bg-white/5 px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-b border-white/5 gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-mono text-brand-purple">
              <Terminal size={10} /> QUERY
            </div>
            <span className="font-mono text-xs text-gray-300 tracking-tight sm:text-sm">
              https://explorer.shubh.l1/address/<span className="text-white font-semibold">shubh.eth</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-gray-500">Scan Status:</span>
            <span className="text-brand-success font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" /> SYNCHRONIZED
            </span>
          </div>
        </div>

        {/* Explorer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Key Identity Specs */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/5 p-6 md:p-8 space-y-6">
            <div>
              <span className="text-[10px] font-mono text-gray-500 block mb-1">RESOLVED ADDRESS</span>
              <span className="font-mono text-sm text-brand-purple font-semibold">0x7C3AED82F6...shubh.eth</span>
            </div>

            <div className="h-px bg-white/5" />

            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="text-[10px] font-mono text-gray-500 block mb-1">SCAN STATUS</span>
                <span className="font-display text-sm font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-brand-success" /> Active
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-500 block mb-1">AVAILABILITY</span>
                <span className="font-display text-sm font-semibold text-white">Open to Web3 Opps</span>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            <div>
              <span className="text-[10px] font-mono text-gray-500 block mb-2">PRIMARY FOCUSES</span>
              <div className="flex flex-wrap gap-2">
                {['Community', 'Research', 'Content Strategy'].map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/5" />

            <div>
              <span className="text-[10px] font-mono text-gray-500 block mb-2">INTEGRATED NETWORKS</span>
              <div className="flex flex-wrap gap-2">
                {['Ethereum', 'Solana', 'Arc Chain', 'Cosmos'].map((net) => (
                  <span key={net} className="text-xs font-mono bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-2.5 py-1 rounded-lg text-brand-purple">
                    {net}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Transaction Activity Logs */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-white text-base mb-6 flex items-center gap-2">
                <Cpu size={16} className="text-brand-purple" /> Latest Activity Logs
              </h3>

              <div className="space-y-4">
                {latestActivities.map((act, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 shrink-0" />
                      <div>
                        <p className="text-xs md:text-sm text-gray-300 leading-tight">
                          {act.text}
                        </p>
                        <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1 mt-1">
                          TX: <span className="hover:text-brand-blue cursor-pointer">{act.hash}</span>
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 self-end sm:self-center whitespace-nowrap">
                      {act.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center sm:text-left">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-blue hover:text-white transition-all"
              >
                Scan Comprehensive Activity History <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
