import React from 'react';
import ManageResourceTemplate from '../../components/common/ManageResource/ManageResourceTemplate';
import { purchasedTools, customTools } from '../../data/manageTools';

const MANAGE_TABS = ['已购工具', '自建工具'];

export default function ManageTools() {
  return (
    <ManageResourceTemplate
      pageTitle="工具管理"
      tabs={MANAGE_TABS}
      createButtonText="创建工具"
      resourceName="工具"
      initialPurchased={purchasedTools}
      initialCustom={customTools}
    />
  );
}
