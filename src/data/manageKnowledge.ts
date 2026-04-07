import { ManageResourceItem } from './manageActions';

export const purchasedKnowledge: ManageResourceItem[] = [
  {
    id: 'p-kb-1',
    title: '通用闲聊语料库',
    date: '2026/01/05 12:31',
    description: '包含超过10万条日常对话语料，提升机器人的闲聊能力和情感交互体验。'
  },
  {
    id: 'p-kb-2',
    title: '基础百科知识',
    date: '2026/01/02 11:20',
    description: '涵盖历史、地理、科学等领域的常识问答库，支持快速检索。'
  }
];

export const customKnowledge: ManageResourceItem[] = [
  {
    id: 'c-kb-1',
    title: '企业文化与规章制度',
    date: '2026/04/01 10:00',
    description: '导入了最新的员工手册、企业价值观及各项行政规章制度，用于解答员工疑问。'
  },
  {
    id: 'c-kb-2',
    title: '产品技术白皮书',
    date: '2026/03/28 15:30',
    description: '收录了所有在售产品的详细技术规格、常见故障排查指南及维修手册。'
  },
  {
    id: 'c-kb-3',
    title: '展厅专属问答库',
    date: '2026/04/02 09:15',
    description: '针对展厅访客最常问的100个问题进行的人工精调问答对，确保回答准确专业。'
  }
];
