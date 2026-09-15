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
  imageSizes = '(min-width: 1080px) 460px, (min-width: 1024px) calc((100vw - 160px) / 2), (min-width: 768px) calc((100vw - 112px) / 2), (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)',
}: IProjectCardProps) => {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-card border border-border/60 bg-surface/40">
      <ProjectPreview title={project.title} image={project.images[0]} sizes={imageSizes} />
      <div className="flex flex-1 flex-col items-start border-t border-border/40 p-6 lg:p-8">
        {project.status === 'development' && <ProjectStatus status={project.status} />}
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
          {project.shortDescription}
        </p>
        <div className="mt-5">
          <ProjectTechnologies technologies={project.technologies.slice(0, 5)} />
        </div>
        <div className="mt-auto pt-6">
          <Button
            href={`/projects/${project.slug}`}
            variant="outline"
            size="sm"
            rightIcon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            }
          >
            Ver projeto<span className="sr-only">: {project.title}</span>
          </Button>
        </div>
      </div>
    </article>
  );
};
