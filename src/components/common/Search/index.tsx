import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Search({ placeholder = "输入关键词搜索...", value, onChange, className = '' }: SearchProps) {
  return (
    <div className={`relative h-full group ${className}`}>
      <SearchIcon className="absolute left-[15px] top-1/2 -translate-y-1/2 text-secondary-text w-4 h-4 group-focus-within:text-accent-purple group-hover:text-white/80 transition-colors z-10 pointer-events-none" />
      <input 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full min-w-0 bg-surface/40 backdrop-blur-3xl border border-white/10 hover:border-white/20 hover:bg-surface/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-3xl h-full pl-[38px] pr-2 text-t14 focus:outline-none focus:border-accent-purple/50 focus:bg-surface/60 focus:shadow-[0_0_15px_rgba(165,109,255,0.15)] transition-all placeholder:text-tertiary-text text-on-surface shadow-inner text-ellipsis overflow-hidden whitespace-nowrap"
      />
    </div>
  );
}
