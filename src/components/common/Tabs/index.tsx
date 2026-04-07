import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div 
      className="bg-surface/40 backdrop-blur-3xl p-1 rounded-3xl flex shrink-0 gap-1 border border-white/10 h-full relative"
      onMouseLeave={() => setHoveredTab(null)}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          onMouseEnter={() => setHoveredTab(tab)}
          className={`relative px-6 rounded-3xl text-t14 font-medium transition-colors h-full flex items-center z-10 cursor-pointer ${
            activeTab === tab ? 'text-on-surface font-bold' : 'text-secondary-text hover:text-on-surface'
          }`}
        >
          {hoveredTab === tab && (
            <motion.div
              layoutId="hoverTab"
              className="absolute inset-0 bg-white/5 rounded-3xl -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-accent-purple/20 border border-accent-purple/20 rounded-3xl shadow-[0_0_15px_rgba(165,109,255,0.15)] -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
