import type { RefObject } from 'react';
import { SectionHeading } from '../section-heading/section-heading.component';
import { ExperienceCard } from './components/experience-card/experience-card.component';
import { ExperienceDetails } from './components/experience-details/experience-details.component';
import { ExperienceNavigation } from './components/experience-navigation/experience-navigation.component';
import type { IProfessionalExperience } from './experience.types';

interface IExperienceViewProps {
  experiences: readonly IProfessionalExperience[];
  activeExperience: IProfessionalExperience | null;
  activeTimelineIndex: number;
  timelineRef: RefObject<HTMLOListElement | null>;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (id: string) => void;
}

export const ExperienceView = ({
  experiences,
  activeExperience,
  activeTimelineIndex,
  timelineRef,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
  onSelect,
}: IExperienceViewProps) => {
  return (
    <section
      aria-labelledby="experience-title"
      className="min-w-0 border-t border-border/60 bg-background"
    >
      <div className="mx-auto min-w-0 max-w-[120rem] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
        <div className="flex flex-wrap items-center justify-between gap-5 lg:flex-nowrap">
          <SectionHeading id="experience-title" title="Experiência profissional" />
          <div className="flex items-center gap-4">
            <ExperienceNavigation
              timelineId="experience-timeline"
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </div>
        </div>

        <ol
          id="experience-timeline"
          ref={timelineRef}
          aria-label="Experiências da mais recente para a mais antiga"
          className="scrollbar-hidden mt-8 grid auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto overscroll-x-contain scroll-px-4 snap-x snap-mandatory px-4 pt-2 pb-1 after:hidden after:content-[''] md:auto-cols-[calc((100%_-_1.5rem)/2)] md:after:block lg:mt-10 lg:auto-cols-[calc((100%_-_3rem)/3)] lg:after:col-span-2"
        >
          {experiences.map((experience, index) => (
            <li key={experience.id} className="relative min-w-0 snap-start">
              {index < experiences.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-2 left-2 h-px w-[calc(100%_+_1.5rem)] transition-colors duration-300 ease-out motion-reduce:transition-none ${index >= activeTimelineIndex ? 'bg-primary' : 'bg-border'}`}
                />
              )}
              <ExperienceCard
                triggerId={`experience-trigger-${experience.id}`}
                detailsId={`experience-details-${experience.id}`}
                period={experience.period}
                company={experience.company}
                context={experience.context}
                role={experience.role}
                summary={experience.summary}
                isCurrent={index === activeTimelineIndex}
                isSelected={activeExperience?.id === experience.id}
                onSelect={() => onSelect(experience.id)}
              />
            </li>
          ))}
        </ol>

        {activeExperience && (
          <ExperienceDetails
            id={`experience-details-${activeExperience.id}`}
            details={activeExperience.details}
          />
        )}
      </div>
    </section>
  );
};
