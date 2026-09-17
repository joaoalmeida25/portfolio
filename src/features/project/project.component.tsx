import { IProject } from '@/types/projects.type';
import { getPathname } from '@/i18n/navigation';
import { getLocale } from 'next-intl/server';
import { ProjectView } from './project-view.component';

interface IProjectDetailProps {
  project: IProject;
}

export const Project = async ({ project }: IProjectDetailProps) => {
  const locale = await getLocale();
  const backHref = getPathname({ href: '/#projects', locale });

  return <ProjectView project={project} backHref={backHref} />;
};
