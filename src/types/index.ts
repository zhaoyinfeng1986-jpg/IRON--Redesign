export interface AppItem {
  id: string;
  title: string;
  date: string;
  badge: string;
  description: string;
}

export enum TabType {
  APP = '应用',
  ACTION = '动作',
  TOOL = '工具',
  MAP = '地图',
  KNOWLEDGE = '知识库',
}
