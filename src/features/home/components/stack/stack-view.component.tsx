import { SectionHeading } from '../section-heading/section-heading.component';
import { EngineeringPractice } from './components/engineering-practice/engineering-practice.component';
import { TechnologyItem } from './components/technology-item/technology-item.component';
import type { EngineeringPracticeData, Technology } from './stack.types';

interface StackViewProps {
  title: string;
  technologies: readonly Technology[];
  practicesLabel: string;
  practices: readonly EngineeringPracticeData[];
}

export const StackView = ({ title, technologies, practicesLabel, practices }: StackViewProps) => {
  return (
    <section aria-labelledby="stack-title" className="border-t border-border/60 bg-background-soft">
      <div className="mx-auto max-w-[120rem] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
        <SectionHeading id="stack-title" title={title} />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:mt-12 lg:gap-4 2xl:grid-cols-10">
          {technologies.map((technology) => (
            <TechnologyItem
              key={technology.name}
              name={technology.name}
              iconPath={technology.iconPath}
              monochrome={technology.monochrome}
            />
          ))}
        </ul>
        <div className="mt-10 border-t border-border/50 pt-8">
          <h3 className="text-sm font-medium text-text-secondary">{practicesLabel}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {practices.map((practice) => (
              <EngineeringPractice key={practice.label} label={practice.label} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
