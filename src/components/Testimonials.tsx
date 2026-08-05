import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organization: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Subhash possesses a rare combination of deep technical understanding and exceptional community empathy. His content drove unprecedented builder engagement on our devnet.",
    name: "Alex Rivera",
    role: "Head of Developer Relations",
    organization: "TxFlow Networks"
  },
  {
    quote: "Working with Subhash on our research initiatives was seamless. He translated highly mathematical zero-knowledge proof concepts into readable guides that our community loved.",
    name: "Marcus Chen",
    role: "Ecosystem Architect",
    organization: "Surf Protocol"
  },
  {
    quote: "Subhash is a powerhouse when it comes to organizing events and building documentation structures. Our builder hackathon was a major success thanks to his execution.",
    name: "Elena Rostova",
    role: "Ecosystem Lead",
    organization: "Arc Chain Foundation"
  },
  {
    quote: "His governance coordination and content creation skills are state-of-the-art. Subhash knows exactly how to structure incentives to keep a DAO community active.",
    name: "Devon Miller",
    role: "Operations Lead",
    organization: "Fogo DAO"
  }
];

export const Testimonials: React.FC = () => {
  // Double the list for seamless infinite marquee effect
  const marqueeItems = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-left mb-16">
        <span className="text-xs font-mono tracking-widest text-brand-purple uppercase mb-3 block">09 / Validation</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ecosystem Testimonials</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full flex items-center justify-start overflow-hidden py-4 select-none">
        {/* Left & Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner Row */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel w-[320px] md:w-[380px] shrink-0 p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-between whitespace-normal text-left"
            >
              <div>
                <Quote size={20} className="text-brand-purple mb-4 opacity-50" />
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 font-sans italic">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <h4 className="font-display font-semibold text-sm text-white">{item.name}</h4>
                <p className="text-[11px] font-mono text-gray-500 mt-0.5">
                  {item.role}, <span className="text-brand-purple">{item.organization}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inject styling for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
