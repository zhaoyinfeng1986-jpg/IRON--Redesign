import React from 'react';
import ScrollReveal from '../../../components/common/Animation/ScrollReveal';

export default function HeroBanner() {
  return (
    <ScrollReveal className="relative overflow-hidden shadow-2xl h-[160px] rounded-3xl mb-10 group">
      <img 
        src="https://i.postimg.cc/P5D2MZ2n/jie-ping2026-04-07-xia.jpg" 
        alt="Banner Background" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 banner-gradient"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 h-full flex flex-col justify-center px-16">
        <h2 className="font-headline font-bold text-white mb-2 text-t32 drop-shadow-sm">探索机器人的未来边界</h2>
        <p className="text-white/80 max-w-xl leading-relaxed text-t14 drop-shadow-sm">
          来自小鹏官方和第三方的应用、动作、工具、知识库。为您的 IRON 机器人提供无限可能。
        </p>
      </div>
    </ScrollReveal>
  );
}
