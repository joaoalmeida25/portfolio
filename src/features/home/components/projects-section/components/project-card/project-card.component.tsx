import { Button } from '@/components/ui/button/button.component';
import { ProjectPreview } from '@/components/project-preview/project-preview.component';
import { IProject } from '@/types/projects.type';
import { ProjectStatus } from '@/components/project-status/project-status.component';
import { ProjectTechnologies } from '@/components/project-technologies/project-technologies.component';

interface IProjectCardProps {
  project: IProject;
  imageSizes?: string;
}

export const ProjectCard = ({
  project,
  imageSizes = '(min-width: 1440px) 221px, (min-width: 1280px) 201px, (min-width: 1024px) 161px, (min-width: 768px) calc((100vw - 112px) / 2), (min-width: 640px) calc(100vw - 104px), calc(100vw - 72px)',
}: IProjectCardProps) => {
  const visibleTechnologies = project.technologies.slice(0, 3);

  return (
    <article className="h-full min-w-0">
      <Button
        href={`/projects/${project.slug}`}
        aria-label={`Abrir projeto ${project.title}`}
        variant="ghost"
        size="sm"
        className="group relative !grid h-full !min-h-0 min-w-0 !items-stretch !justify-stretch gap-0 !overflow-hidden !rounded-card !border-border/60 !bg-surface/40 !p-3 text-left !font-normal shadow-card hover:!border-primary/30 hover:!bg-surface-hover/60 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-5"
      >
        <ProjectPreview
          title={project.title}
          image={project.images[0]}
          sizes={imageSizes}
          className="!aspect-[4/3] self-center rounded-control"
          imageClassName="object-cover"
        />
        <div className="flex min-w-0 flex-col items-start px-1 pt-4 pb-1 lg:py-1 lg:pr-2 lg:pl-0">
          <div className="flex w-full items-start justify-between gap-3">
            {project.status === 'development' && <ProjectStatus status={project.status} />}
            <span
              aria-hidden="true"
              className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full text-text-secondary transition-colors duration-150 group-hover:text-primary group-focus-visible:text-primary motion-reduce:transition-none"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4.5"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-text-primary lg:mt-2">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary lg:mt-1.5 lg:leading-5">
            {project.shortDescription}
          </p>
          <div className="mt-4 [&_li]:!px-2 [&_li]:!py-1 [&_li]:!text-xs [&_li]:leading-4 [&_ul]:!gap-1.5 lg:mt-auto lg:pt-2">
            <ProjectTechnologies technologies={visibleTechnologies} />
          </div>
        </div>
      </Button>
    </article>
  );
};
