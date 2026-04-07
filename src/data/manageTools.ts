import { ManageResourceItem } from './manageActions';

export const purchasedTools: ManageResourceItem[] = [
  {
    id: 'p-tool-1',
    title: '天气查询插件',
    date: '2026/01/05 12:31',
    description: '实时获取全球各地的天气信息，支持未来7天预报。'
  },
  {
    id: 'p-tool-2',
    title: '汇率转换器',
    date: '2026/01/02 11:20',
    description: '支持多国货币实时汇率转换，数据同步自权威金融机构。'
  },
  {
    id: 'p-tool-3',
    title: '日程同步助手',
    date: '2026/01/04 09:15',
    description: '将机器人的日程安排与企业日历系统（如 Outlook, Google Calendar）双向同步。'
  }
];

export const customTools: ManageResourceItem[] = [
  {
    id: 'c-tool-1',
    title: '内部系统查询接口',
    date: '2026/04/01 10:00',
    description: '连接企业内部 ERP 系统，支持快速查询订单状态和库存信息。'
  },
  {
    id: 'c-tool-2',
    title: '访客登记工具',
    date: '2026/03/28 15:30',
    description: '自定义的访客信息录入表单，支持人脸信息采集和自动打印访客牌。'
  }
];
