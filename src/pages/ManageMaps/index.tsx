import React from 'react';
import ManageResourceTemplate from '../../components/common/ManageResource/ManageResourceTemplate';
import { purchasedMaps, customMaps } from '../../data/manageMaps';

const MANAGE_TABS = ['已购地图', '自建地图'];

export default function ManageMaps() {
  return (
    <ManageResourceTemplate
      pageTitle="地图管理"
      tabs={MANAGE_TABS}
      createButtonText="创建地图"
      resourceName="地图"
      initialPurchased={purchasedMaps}
      initialCustom={customMaps}
    />
  );
}
