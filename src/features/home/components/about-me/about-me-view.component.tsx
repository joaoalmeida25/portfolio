import { SectionHeading } from '../section-heading/section-heading.component';
import { AboutHighlight } from './components/about-highlight/about-highlight.component';
import type { AboutHighlightData } from './about-me.types';

interface AboutMeViewProps {
  title: string;
  paragraphs: readonly string[];
  highlights: readonly AboutHighlightData[];
}

export const AboutMeView = ({ title, paragraphs, highlights }: AboutMeViewProps) => {
  return (
    <section
      aria-labelledby="about-me-title"
      className="border-t border-border/60 bg-background-soft"
    >
      <div className="mx-auto max-w-[120rem] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
        <SectionHeading id="about-me-title" title={title} />
        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,55fr)_minmax(0,35fr)] md:gap-x-[10%] lg:mt-12">
          <div className="space-y-5 text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
