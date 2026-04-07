export interface ManageResourceItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const purchasedActions: ManageResourceItem[] = [
  {
    id: 'p-act-1',
    title: '双手打招呼',
    date: '2026/01/05 12:31',
    description: '机器人举起双手进行友好的打招呼动作，适用于迎宾场景。'
  },
  {
    id: 'p-act-2',
    title: '鞠躬致意',
    date: '2026/01/02 11:20',
    description: '标准的45度鞠躬动作，适用于服务结束或表达感谢。'
  },
  {
    id: 'p-act-3',
    title: '指引方向',
    date: '2026/01/04 09:15',
    description: '伸出单臂指向特定方向，配合头部转动，用于路线指引。'
  }
];

export const customActions: ManageResourceItem[] = [
  {
    id: 'c-act-1',
    title: '开心跳跃',
    date: '2026/04/01 10:00',
    description: '模拟开心的情绪，进行轻微的跳跃和手臂摆动。'
  },
  {
    id: 'c-act-2',
    title: '思考状态',
    date: '2026/03/28 15:30',
    description: '单手托腮，头部微倾，模拟正在处理复杂问题的思考状态。'
  }
];
