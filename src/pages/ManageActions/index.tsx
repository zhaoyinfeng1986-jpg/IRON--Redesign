import React from 'react';
import ManageResourceTemplate from '../../components/common/ManageResource/ManageResourceTemplate';
import { purchasedActions, customActions } from '../../data/manageActions';

const MANAGE_TABS = ['已购动作', '自建动作'];

export default function ManageActions() {
  return (
    <ManageResourceTemplate
      pageTitle="动作管理"
      tabs={MANAGE_TABS}
      createButtonText="创建动作"
      resourceName="动作"
      initialPurchased={purchasedActions}
      initialCustom={customActions}
    />
  );
}
