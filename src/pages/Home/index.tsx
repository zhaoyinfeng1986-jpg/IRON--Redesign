import React, { useState } from 'react';
import HeroBanner from './components/HeroBanner';
import AppGrid from './components/AppGrid';
import Tabs from '../../components/common/Tabs';
import Search from '../../components/common/Search';
import ScrollReveal from '../../components/common/Animation/ScrollReveal';
import { TabType } from '../../types';
import { TABS } from '../../constants';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>(TabType.APP);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <HeroBanner />
      <ScrollReveal delay={0.1} className="flex items-center justify-between gap-6 h-[46px] mb-10">
        <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
        <Search 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="flex-shrink min-w-[46px] max-w-[320px] w-full"
        />
      </ScrollReveal>
      <AppGrid activeTab={activeTab} />
    </>
  );
}
