import type { IProjectLinks } from '../../../../types/projects.type';

interface IProjectAction {
  key: keyof IProjectLinks;
  iconPath: string;
}

export const PROJECT_ACTIONS: Readonly<Array<IProjectAction>> = [
  { key: 'github', iconPath: '/icons/brands/github.svg' },
  { key: 'demo', iconPath: '/icons/brands/youtube.svg' },
  { key: 'documentation', iconPath: '/icons/brands/notion.svg' },
];
