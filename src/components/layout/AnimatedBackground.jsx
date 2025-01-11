import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  </div>
);