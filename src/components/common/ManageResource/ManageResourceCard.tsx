import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Copy, Trash2 } from 'lucide-react';
import ScrollReveal from '../Animation/ScrollReveal';
import BaseAppCard from '../Card/BaseAppCard';
import { useToast } from '../Toast/ToastContext';

interface ManageResourceItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface ManageResourceCardProps {
  item: ManageResourceItem;
  index: number;
  onDelete?: (id: string) => void;
  resourceName?: string;
}

export default function ManageResourceCard({ item, index, onDelete, resourceName = '资源' }: ManageResourceCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showToast } = useToast();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
    showToast(`已创建${resourceName}副本`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
    if (onDelete) {
      onDelete(item.id);
    }
    showToast(`已删除${resourceName}`);
  };

  return (
    <ScrollReveal delay={0.1 + index * 0.05} className={`h-[260px] ${isMenuOpen ? 'relative z-50' : ''}`}>
      <BaseAppCard
        title={item.title}
        date={item.date}
        description={item.description}
        footer={
          <div className="flex justify-end items-center">
            <div className="relative" ref={menuRef}>
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
                className={`p-2 rounded-full transition-colors cursor-pointer ${isMenuOpen ? 'bg-white/10 text-white' : 'hover:bg-white/10 text-secondary-text hover:text-white'}`}
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 p-2 bg-[#1E1F26]/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50 flex flex-col gap-1">
                  <button 
                    onClick={handleDuplicate}
                    className="w-full px-4 py-3 text-left text-t14 text-secondary-text hover:text-white hover:bg-white/10 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    创建副本
                  </button>
                  <button 
                    onClick={handleDelete}
                    className="w-full px-4 py-3 text-left text-t14 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    删除
                  </button>
                </div>
              )}
            </div>
          </div>
        }
      />
    </ScrollReveal>
  );
}
