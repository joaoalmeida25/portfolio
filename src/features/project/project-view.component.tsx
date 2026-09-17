import { Button } from '@/components/ui/button/button.component';
import { ThemeToggle } from '@/components/theme-toggle/theme-toggle.component';
import { Footer } from '@/features/home/components/footer/footer.component';
import { ProjectActions } from './components/project-actions/project-actions.component';
import { ProjectInfoCard } from './components/project-info-card/project-info-card.component';
import { ProjectGallery } from './components/project-gallery/project-gallery.component';
import { ProjectStatus } from '@/components/project-status/project-status.component';
import { ProjectTechnologies } from '@/components/project-technologies/project-technologies.component';
import { IProject } from '@/types/projects.type';
import { Fragment } from 'react';

interface IProjectDetailViewProps {
  project: IProject;
  backHref: string;
}

export const ProjectView = ({ project, backHref }: IProjectDetailViewProps) => {
  return (
    <Fragment>
      <ThemeToggle />
      <main className="mx-auto w-full max-w-[120rem] flex-1 px-6 pt-8 pb-16 sm:px-10 sm:pt-10 sm:pb-20 lg:px-16 xl:px-24">
        <Button
          href={backHref}
          variant="ghost"
          size="sm"
          leftIcon={
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
              <path d="M20 12H4m6-6-6 6 6 6" />
            </svg>
          }
        >
          Voltar
        </Button>

        <header className="mt-6 grid gap-8 rounded-card border border-border/60 bg-surface/40 p-4 sm:mt-8 sm:p-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:p-8">
          <div className="flex min-w-0 flex-col items-start justify-center lg:py-4">
            <ProjectStatus status={project.status} />
            <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-text-primary lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-text-secondary lg:text-lg lg:leading-8">
              {project.shortDescription}
            </p>
          </div>
          <ProjectGallery title={project.title} images={project.images} />
        </header>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          <ProjectInfoCard title="Visão geral" content={project.overview} />
          <ProjectInfoCard title="Motivação" content={project.motivation} />
          <ProjectInfoCard title="Objetivo" content={project.objective} />
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <section
            aria-labelledby="project-features-title"
            className="min-w-0 rounded-card border border-border/50 bg-surface/50 p-6"
          >
            <h2 id="project-features-title" className="text-lg font-semibold text-text-primary">
              Principais funcionalidades
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-text-secondary marker:text-primary">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section
            aria-labelledby="project-stack-title"
            className="min-w-0 rounded-card border border-border/50 bg-surface/50 p-6"
          >
            <h2 id="project-stack-title" className="text-lg font-semibold text-text-primary">
              Stack
            </h2>
            <div className="mt-3">
              <ProjectTechnologies technologies={project.technologies} />
            </div>
          </section>
        </div>

        <ProjectActions links={project.links} />
      </main>
      <Footer />
    </Fragment>
  );
};
