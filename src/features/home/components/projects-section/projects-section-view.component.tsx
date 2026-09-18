import type { RefObject } from 'react';
import type { IProjectCardData } from '@/types/projects.type';
import { Button } from '@/components/ui/button/button.component';
import { ProjectCard } from './components/project-card/project-card.component';
import type { IProjectsSectionLabels } from './projects-section.types';

interface IProjectsSectionViewProps {
  projects: Array<IProjectCardData>;
  labels: IProjectsSectionLabels;
  listRef: RefObject<HTMLUListElement | null>;
  isScrollable: boolean;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const ProjectsSectionView = ({
  projects,
  labels,
  listRef,
  isScrollable,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
}: IProjectsSectionViewProps) => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="min-w-0 scroll-mt-8 border-t border-border/60 bg-background"
    >
      <div className="mx-auto min-w-0 max-w-[120rem] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
        <div className="flex items-center justify-between gap-5">
          <h2
            id="projects-title"
            className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
          >
            {labels.title}
          </h2>
          {isScrollable && (canGoPrevious || canGoNext) && (
            <div role="group" aria-label={labels.navigation} className="flex shrink-0 gap-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label={labels.previous}
                aria-controls="projects-list"
                disabled={!canGoPrevious}
                onClick={onPrevious}
              >
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
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label={labels.next}
                aria-controls="projects-list"
                disabled={!canGoNext}
                onClick={onNext}
              >
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
              </Button>
            </div>
          )}
        </div>
        <ul
          id="projects-list"
          ref={listRef}
          aria-label={labels.title}
          tabIndex={isScrollable && (canGoPrevious || canGoNext) ? 0 : undefined}
          className={`relative mt-10 grid lg:mt-12 ${
            isScrollable
              ? 'scrollbar-hidden auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring motion-reduce:scroll-auto md:auto-cols-[calc((100%_-_1.5rem)/2)] lg:auto-cols-[min(36rem,calc((100%_-_1.5rem)/2))] min-[120rem]:auto-cols-[calc((100%_-_4.5rem)/4)]'
              : 'gap-8 md:grid-cols-[repeat(2,minmax(0,36rem))]'
          }`}
        >
          {projects.map((project) => (
            <li key={project.slug} className={`min-w-0 ${isScrollable ? 'snap-start' : ''}`}>
              <ProjectCard
                project={project}
                imageSizes={
                  isScrollable
                    ? '(min-width: 1920px) 154px, (min-width: 1440px) 221px, (min-width: 1280px) 203px, (min-width: 1024px) 165px, (min-width: 768px) calc((100vw - 104px) / 2), (min-width: 640px) calc(100vw - 104px), calc(100vw - 72px)'
                    : undefined
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
