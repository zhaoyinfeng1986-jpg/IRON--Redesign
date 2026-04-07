import React from 'react';
import Magnetic from '../Animation/Magnetic';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export default function IconButton({ icon, className = '', ...props }: IconButtonProps) {
  return (
    <Magnetic intensity={0.3}>
      <button 
        className={`flex items-center justify-center border border-white/10 hover:border-white/20 hover:text-accent-cyan transition-all w-10 h-10 rounded-full text-secondary-text icon-btn-flow cursor-pointer ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">{icon}</span>
      </button>
    </Magnetic>
  );
}
