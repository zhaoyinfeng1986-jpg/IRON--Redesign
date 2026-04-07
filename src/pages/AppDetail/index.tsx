import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/common/Animation/ScrollReveal';
import PrimaryButton from '../../components/common/Button/PrimaryButton';
import { useToast } from '../../components/common/Toast/ToastContext';

export default function AppDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);
  const { showToast } = useToast();

  const handlePurchase = () => {
    if (isPurchased) return;
    setIsPurchased(true);
    showToast('购买成功');
  };

  return (
    <ScrollReveal className="glass-card p-10 rounded-3xl min-h-[600px]">
      <button 
        onClick={() => navigate(-1)}
        className="text-secondary-text hover:text-on-surface mb-8 transition-colors"
      >
        &larr; 返回列表
      </button>
      <h1 className="text-t32 font-bold mb-4">应用详情 - {id}</h1>
      <p className="text-secondary-text mb-8">这里是应用的详细信息展示区域。组件已拆分，可在此处扩展详情页逻辑。</p>
      <PrimaryButton disabled={isPurchased} onClick={handlePurchase}>
        {isPurchased ? '已购买' : '立即购买'}
      </PrimaryButton>
    </ScrollReveal>
  );
}
