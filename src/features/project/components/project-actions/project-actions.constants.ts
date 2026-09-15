import type { IProjectLinks } from '../../../../types/projects.type';

interface IProjectAction {
  key: keyof IProjectLinks;
  label: string;
  iconPath: string;
}

export const PROJECT_ACTIONS: Readonly<Array<IProjectAction>> = [
  { key: 'github', label: 'GitHub', iconPath: '/icons/brands/github.svg' },
  { key: 'demo', label: 'Demo', iconPath: '/icons/brands/youtube.svg' },
  { key: 'documentation', label: 'Documentação', iconPath: '/icons/brands/notion.svg' },
];
