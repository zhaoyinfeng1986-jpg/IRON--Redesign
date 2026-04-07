import React from 'react';
import ManageResourceCard from './ManageResourceCard';

interface ManageResourceItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface ManageResourceGridProps {
  items: ManageResourceItem[];
  onDelete?: (id: string) => void;
  resourceName?: string;
}

export default function ManageResourceGrid({ items, onDelete, resourceName = '资源' }: ManageResourceGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-secondary-text">
        <p>暂无{resourceName}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 mb-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
      {items.map((item, index) => (
        <ManageResourceCard key={item.id} item={item} index={index} onDelete={onDelete} resourceName={resourceName} />
      ))}
    </div>
  );
}
