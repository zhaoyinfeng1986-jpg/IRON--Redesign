import React from 'react';
import ManageResourceTemplate from '../../components/common/ManageResource/ManageResourceTemplate';
import { purchasedKnowledge, customKnowledge } from '../../data/manageKnowledge';

const MANAGE_TABS = ['已购知识库', '自建知识库'];

export default function ManageKnowledge() {
  return (
    <ManageResourceTemplate
      pageTitle="知识库管理"
      tabs={MANAGE_TABS}
      createButtonText="创建知识库"
      resourceName="知识库"
      initialPurchased={purchasedKnowledge}
      initialCustom={customKnowledge}
    />
  );
}
