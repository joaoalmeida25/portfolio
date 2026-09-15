import type { ProjectStatus as ProjectStatusValue } from '../../types/projects.type';
import { PROJECT_STATUS_LABELS } from './project-status.constants';

interface IProjectStatusProps {
  status: ProjectStatusValue;
}

export const ProjectStatus = ({ status }: IProjectStatusProps) => {
  return (
    <span className="inline-flex rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-text-primary">
      {PROJECT_STATUS_LABELS[status]}
    </span>
  );
};
