export interface ManageAppItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const purchasedApps: ManageAppItem[] = [
  {
    id: 'p-app-1',
    title: '大堂接待机器人',
    date: '2026/01/05 12:31',
    description: '机器人在小鹏总部大堂自由行走，接待客户。具备多模态交互能力，可引导访客至会议室。'
  },
  {
    id: 'p-app-2',
    title: '展厅讲解员',
    date: '2026/01/02 11:20',
    description: '为科技展厅定制的专业讲解应用，支持多国语言，生动展示产品核心卖点。'
  },
  {
    id: 'p-app-3',
    title: '园区巡检专家',
    date: '2026/01/04 09:15',
    description: '24/7 自动化巡检，识别违规停车、火灾隐患及设施损坏。支持远程喊话。'
  },
  {
    id: 'p-app-4',
    title: '智能客服助手',
    date: '2026/02/15 14:20',
    description: '24小时在线解答客户常见问题，支持多轮对话与复杂意图识别，无缝转接人工客服。'
  },
  {
    id: 'p-app-5',
    title: '会议室预订管家',
    date: '2026/02/28 08:45',
    description: '自动管理企业会议室日程，支持语音预约、冲突检测以及会议前自动开启设备。'
  },
  {
    id: 'p-app-6',
    title: '财务报销审核员',
    date: '2026/03/10 16:30',
    description: '自动化识别发票信息，智能校验报销合规性，大幅提升财务审批效率与准确率。'
  },
  {
    id: 'p-app-7',
    title: '仓储盘点机器人',
    date: '2026/03/22 23:00',
    description: '结合视觉识别技术，夜间自动完成仓库物资盘点与异常上报，降低人工盘点成本。'
  }
];

export const customApps: ManageAppItem[] = [
  {
    id: 'c-app-1',
    title: '内部测试应用 A',
    date: '2026/04/01 10:00',
    description: '用于测试机器人导航算法的内部应用，包含特定的测试路线和障碍物设置。'
  },
  {
    id: 'c-app-2',
    title: '特定场景交互演示',
    date: '2026/03/28 15:30',
    description: '针对特定客户演示需求开发的交互应用，包含定制的语音包和动作序列。'
  },
  {
    id: 'c-app-3',
    title: '迎宾路线规划测试',
    date: '2026/04/02 09:15',
    description: '用于测试不同人流密度下的最优迎宾路线规划算法，支持动态避障数据收集。'
  },
  {
    id: 'c-app-4',
    title: '语音唤醒灵敏度调优',
    date: '2026/04/03 14:20',
    description: '收集并分析嘈杂环境下的语音唤醒数据，优化麦克风阵列算法与降噪模型。'
  },
  {
    id: 'c-app-5',
    title: '视觉抓取标定工具',
    date: '2026/04/04 11:00',
    description: '辅助机械臂进行目标物体的视觉识别与抓取坐标标定，提高抓取成功率。'
  },
  {
    id: 'c-app-6',
    title: '电池续航监控大屏',
    date: '2026/04/05 16:45',
    description: '实时监控所有在线机器人的电量消耗趋势，预测充电时机并自动派发回充任务。'
  },
  {
    id: 'c-app-7',
    title: '多机协同调度沙盘',
    date: '2026/04/06 10:30',
    description: '模拟多台机器人在同一区域内的路径规划与避障协同测试，验证调度系统稳定性。'
  }
];
