import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  yOffset = 20, 
  duration = 0.8,
  className = ""
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: duration, 
        ease: [0.2, 0.8, 0.2, 1], // 丝滑克制的缓动曲线，无强回弹
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
