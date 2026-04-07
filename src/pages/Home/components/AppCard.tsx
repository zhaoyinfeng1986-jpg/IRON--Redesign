import React, { useState } from 'react';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import { AppItem } from '../../../types';
import ScrollReveal from '../../../components/common/Animation/ScrollReveal';
import PrimaryButton from '../../../components/common/Button/PrimaryButton';
import IconButton from '../../../components/common/Button/IconButton';
import BaseAppCard from '../../../components/common/Card/BaseAppCard';
import Drawer from '../../../components/common/Drawer';
import { useToast } from '../../../components/common/Toast/ToastContext';

interface AppCardProps {
  app: AppItem;
  index: number;
}

export default function AppCard({ app, index }: AppCardProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { showToast } = useToast();

  const isFree = app.badge === '免费';
  const badgeClasses = isFree 
    ? "px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-400 text-t12 border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]"
    : "px-2.5 py-1 rounded-md bg-accent-purple/10 text-accent-purple text-t12 border border-accent-purple/20 shadow-[0_0_10px_rgba(165,109,255,0.1)]";

  const handlePurchase = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isPurchased) return;
    setIsPurchased(true);
    showToast('购买成功');
  };

  const handleCardClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <ScrollReveal 
        delay={0.1 + index * 0.05} 
        className="h-[260px]"
      >
        <BaseAppCard
          title={app.title}
          date={app.date}
          description={app.description}
          onClick={handleCardClick}
          headerRight={
            <span className={badgeClasses}>
              {app.badge}
            </span>
          }
          footer={
            <div className="flex gap-3 items-center">
              <PrimaryButton disabled={isPurchased} onClick={handlePurchase}>
                {isPurchased ? '已购买' : '立即购买'}
              </PrimaryButton>
              <IconButton icon={<ArrowUpRight className="w-5 h-5" />} onClick={handleCardClick} />
            </div>
          }
        />
      </ScrollReveal>

      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        title="详情"
      >
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-t24 font-bold text-white">{app.title}</h1>
              <span className={badgeClasses}>{app.badge}</span>
            </div>
            
            <div className="flex flex-col gap-4 mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-3 text-t14 text-secondary-text">
                <Clock className="w-4 h-4 text-tertiary-text" />
                <span className="w-16">发布时间</span>
                <span className="text-white">{app.date}</span>
              </div>
              <div className="flex items-center gap-3 text-t14 text-secondary-text">
                <User className="w-4 h-4 text-tertiary-text" />
                <span className="w-16">创建人</span>
                <span className="text-white">IRON Admin</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-t16 font-medium text-white mb-3">应用描述</h3>
              <p className="text-t14 text-secondary-text leading-relaxed whitespace-pre-wrap">
                {app.description}
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/10 mt-auto">
            <PrimaryButton 
              disabled={isPurchased} 
              onClick={(e) => handlePurchase(e)}
              className="w-full"
            >
              {isPurchased ? '已购买' : '立即购买'}
            </PrimaryButton>
          </div>
        </div>
      </Drawer>
    </>
  );
}
