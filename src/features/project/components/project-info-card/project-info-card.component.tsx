import type { ReactNode } from 'react';

interface IProjectInfoCardProps {
  title: string;
  content: string;
  icon?: ReactNode;
}

export const ProjectInfoCard = ({ title, content, icon }: IProjectInfoCardProps) => {
  return (
    <section className="min-w-0 rounded-card border border-border/50 bg-surface/50 p-6">
      <h2 className="flex items-center gap-3 text-lg font-semibold text-text-primary">
        {icon && (
          <span aria-hidden="true" className="size-5 shrink-0 text-primary [&>svg]:size-full">
            {icon}
          </span>
        )}
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-text-secondary">{content}</p>
    </section>
  );
};
