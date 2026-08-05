import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BlockchainBg: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816] pointer-events-none select-none">
      {/* Dynamic Mouse radial glow */}
      <div
        className="absolute hidden md:block w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.07] transition-all duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          position: 'fixed',
        }}
      />

      {/* Static premium blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-purple/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-blue/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Modern Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle Blockchain network lines illustration */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="line-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="1" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Nodes and Links */}
        <circle cx="15%" cy="20%" r="2" fill="#7C3AED" />
        <circle cx="25%" cy="35%" r="3" fill="#3B82F6" />
        <circle cx="10%" cy="50%" r="2" fill="#7C3AED" />
        <circle cx="30%" cy="65%" r="2.5" fill="#3B82F6" />
        <circle cx="20%" cy="80%" r="3" fill="#7C3AED" />

        <line x1="15%" y1="20%" x2="25%" y2="35%" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="25%" y1="35%" x2="10%" y2="50%" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="10%" y1="50%" x2="30%" y2="65%" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="30%" y1="65%" x2="20%" y2="80%" stroke="#ffffff" strokeWidth="0.5" />

        <circle cx="85%" cy="15%" r="2.5" fill="#3B82F6" />
        <circle cx="75%" cy="30%" r="2" fill="#7C3AED" />
        <circle cx="90%" cy="45%" r="3" fill="#3B82F6" />
        <circle cx="80%" cy="60%" r="2" fill="#7C3AED" />
        <circle cx="88%" cy="78%" r="3.5" fill="#3B82F6" />

        <line x1="85%" y1="15%" x2="75%" y2="30%" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="75%" y1="30%" x2="90%" y2="45%" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="90%" y1="45%" x2="80%" y2="60%" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="80%" y1="60%" x2="88%" y2="78%" stroke="#ffffff" strokeWidth="0.5" />
      </svg>

      {/* Floating glowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-purple/20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
