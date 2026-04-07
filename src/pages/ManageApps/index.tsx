import React from 'react';
import ManageResourceTemplate from '../../components/common/ManageResource/ManageResourceTemplate';
import { purchasedApps, customApps } from '../../data/manageApps';

const MANAGE_TABS = ['已购应用', '自建应用'];

export default function ManageApps() {
  return (
    <ManageResourceTemplate
      pageTitle="应用管理"
      tabs={MANAGE_TABS}
      createButtonText="创建应用"
      resourceName="应用"
      initialPurchased={purchasedApps}
      initialCustom={customApps}
    />
  );
}
