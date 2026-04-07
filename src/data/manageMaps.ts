import { ManageResourceItem } from './manageActions';

export const purchasedMaps: ManageResourceItem[] = [
  {
    id: 'p-map-1',
    title: '标准办公区地图',
    date: '2026/01/05 12:31',
    description: '适用于常规写字楼办公区域的导航地图，包含工位、会议室、茶水间等预设点位。'
  },
  {
    id: 'p-map-2',
    title: '大型展厅地图',
    date: '2026/01/02 11:20',
    description: '针对开阔展厅优化的地图，支持动态障碍物规避和多条参观路线规划。'
  }
];

export const customMaps: ManageResourceItem[] = [
  {
    id: 'c-map-1',
    title: '小鹏总部一楼大堂',
    date: '2026/04/01 10:00',
    description: '高精度扫描的总部大堂地图，标注了前台、休息区、VIP接待室及所有出入口。'
  },
  {
    id: 'c-map-2',
    title: '研发中心测试场',
    date: '2026/03/28 15:30',
    description: '包含各种复杂地形和测试障碍物的内部测试场地图，用于算法验证。'
  },
  {
    id: 'c-map-3',
    title: '三楼多功能会议中心',
    date: '2026/04/02 09:15',
    description: '详细的会议中心平面图，支持多会议室联动调度和茶歇区自动巡航。'
  }
];
