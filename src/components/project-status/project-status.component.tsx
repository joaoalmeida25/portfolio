import type { ProjectStatus as ProjectStatusValue } from '../../types/projects.type';
import { useTranslations } from 'next-intl';

interface IProjectStatusProps {
  status: ProjectStatusValue;
}

export const ProjectStatus = ({ status }: IProjectStatusProps) => {
  const t = useTranslations('common.projectStatus');

  return (
    <span className="inline-flex rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-text-primary">
      {t(status)}
    </span>
  );
};
