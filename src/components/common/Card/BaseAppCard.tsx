import React from 'react';
import { Clock } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface BaseAppCardProps {
  title: string;
  date: string;
  description: string;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function BaseAppCard({
  title,
  date,
  description,
  headerRight,
  footer,
  className = '',
  onClick
}: BaseAppCardProps) {
  return (
    <SpotlightCard
      className={`glass-card p-8 flex flex-col group rounded-3xl h-full ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div 
        className="flex-1 flex flex-col"
        onClick={onClick}
      >
        {/* Header: Title + Time & Optional Right Element */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-t18 group-hover:text-[#A276FF] transition-colors duration-300">
              {title}
            </h3>
            <div className="flex items-center gap-1.5 text-t12 text-tertiary-text">
              <Clock className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
          </div>
          {headerRight && <div>{headerRight}</div>}
        </div>

        {/* Description */}
        <p className="text-t14 text-secondary-text mb-6 line-clamp-2 leading-relaxed group-hover:text-secondary-text/90 transition-colors relative z-10">
          {description}
        </p>
      </div>

      {/* Footer */}
      {footer && (
        <div className="mt-auto relative z-10">
          {footer}
        </div>
      )}
    </SpotlightCard>
  );
}
