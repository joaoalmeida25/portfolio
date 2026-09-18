import { useTranslations } from 'next-intl';

interface IProjectTechnologiesProps {
  technologies: Array<string>;
}

export const ProjectTechnologies = ({ technologies }: IProjectTechnologiesProps) => {
  const t = useTranslations('common');

  return (
    <ul aria-label={t('projectTechnologies')} className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-control border border-border/50 bg-chip-background/50 px-3 py-1.5 text-xs leading-relaxed text-text-secondary"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
};
