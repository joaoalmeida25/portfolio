import { IProject } from '@/types/projects.type';
import { ProjectView } from './project-view.component';

interface IProjectDetailProps {
  project: IProject;
}

export const Project = ({ project }: IProjectDetailProps) => {
  return <ProjectView project={project} />;
};
