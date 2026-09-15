import { SectionHeading } from '../section-heading/section-heading.component';
import { AboutHighlight } from './components/about-highlight/about-highlight.component';
import type { AboutHighlightData } from './about-me.types';

interface AboutMeViewProps {
  title: string;
  description: string;
  highlights: readonly AboutHighlightData[];
}

export const AboutMeView = ({ title, description, highlights }: AboutMeViewProps) => {
  return (
    <section
      aria-labelledby="about-me-title"
      className="border-t border-border/60 bg-background-soft"
    >
      <div className="mx-auto max-w-[120rem] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-24">
        <SectionHeading id="about-me-title" title={title} />
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12 lg:mt-12 lg:gap-20 xl:gap-28">
          <p className="max-w-3xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
            {description}
          </p>
          <dl className="grid content-center gap-8 border-t border-border/60 pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-10 lg:pl-14">
            {highlights.map((highlight) => (
              <AboutHighlight
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
                icon={highlight.icon}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
