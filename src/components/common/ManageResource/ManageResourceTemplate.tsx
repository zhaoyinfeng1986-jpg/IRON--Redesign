import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Tabs from '../Tabs';
import PrimaryButton from '../Button/PrimaryButton';
import ScrollReveal from '../Animation/ScrollReveal';
import ManageResourceGrid from './ManageResourceGrid';
import { useToast } from '../Toast/ToastContext';

interface ManageResourceItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface ManageResourceTemplateProps {
  pageTitle: string;
  tabs: string[];
  createButtonText: string;
  resourceName: string;
  initialPurchased: ManageResourceItem[];
  initialCustom: ManageResourceItem[];
}

export default function ManageResourceTemplate({
  pageTitle,
  tabs,
  createButtonText,
  resourceName,
  initialPurchased,
  initialCustom
}: ManageResourceTemplateProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [purchasedItems, setPurchasedItems] = useState(initialPurchased);
  const [customItems, setCustomItems] = useState(initialCustom);
  const { showToast } = useToast();

  const handleCreate = () => {
    showToast(`进入${createButtonText}流程`);
  };

  const handleDelete = (id: string) => {
    if (activeTab === tabs[0]) {
      setPurchasedItems(purchasedItems.filter(item => item.id !== id));
    } else {
      setCustomItems(customItems.filter(item => item.id !== id));
    }
  };

  const currentItems = activeTab === tabs[0] ? purchasedItems : customItems;

  return (
    <div className="flex flex-col min-h-full">
      <ScrollReveal className="mb-10">
        <h1 className="text-t32 font-bold text-white tracking-tight">{pageTitle}</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="flex items-center justify-between h-[46px] mb-10">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="h-full">
          <PrimaryButton onClick={handleCreate}>
            <Plus className="w-4 h-4" />
            <span>{createButtonText}</span>
          </PrimaryButton>
        </div>
      </ScrollReveal>

      <ManageResourceGrid items={currentItems} onDelete={handleDelete} resourceName={resourceName} />
    </div>
  );
}
