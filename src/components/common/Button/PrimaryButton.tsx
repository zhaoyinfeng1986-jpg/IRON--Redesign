import React from 'react';
import Magnetic from '../Animation/Magnetic';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({ children, className = '', disabled, ...props }: PrimaryButtonProps) {
  const baseClasses = "w-auto inline-flex items-center justify-center whitespace-nowrap text-t14 h-[40px] px-[32px] rounded-full relative overflow-hidden transition-all duration-300";
  const activeClasses = "btn-gradient-flow text-background cursor-pointer";
  const disabledClasses = "bg-white/10 text-white/40 cursor-not-allowed border border-white/5";

  return (
    <Magnetic intensity={disabled ? 0 : 0.2} className="w-fit inline-block">
      <button 
        className={`${baseClasses} ${disabled ? disabledClasses : activeClasses} ${className}`}
        disabled={disabled}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-1.5 whitespace-nowrap">{children}</span>
      </button>
    </Magnetic>
  );
}
