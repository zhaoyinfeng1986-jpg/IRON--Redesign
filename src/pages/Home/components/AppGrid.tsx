import React from 'react';
import AppCard from './AppCard';
import { tabData } from '../../../data/apps';
import { AppItem } from '../../../types';

interface AppGridProps {
  activeTab: string;
}

export default function AppGrid({ activeTab }: AppGridProps) {
  const currentData: AppItem[] = tabData[activeTab] || [];

  return (
    <div className="grid gap-8 mb-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
      {currentData.map((app, index) => (
        <AppCard key={app.id} app={app} index={index} />
      ))}
    </div>
  );
}
