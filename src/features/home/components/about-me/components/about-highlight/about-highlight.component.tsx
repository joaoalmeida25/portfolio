import type { ReactNode } from 'react';
import type { AboutHighlightIcon } from '../../about-me.types';

interface AboutHighlightProps {
  title: string;
  description: string;
  icon: AboutHighlightIcon;
}

const icons: Record<AboutHighlightIcon, ReactNode> = {
  experience: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a22 22 0 0 0 18 0M12 11v4" />
    </>
  ),
  products: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
  impact: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
};

export const AboutHighlight = ({ title, description, icon }: AboutHighlightProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-x-4">
      <dt className="contents">
        <span className="row-span-2 flex size-11 items-center justify-center rounded-control bg-icon-surface text-primary">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            {icons[icon]}
          </svg>
        </span>
        <span className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
          {title}
        </span>
      </dt>
      <dd className="col-start-2 mt-1 max-w-64 text-sm leading-relaxed text-text-secondary sm:text-base">
        {description}
      </dd>
    </div>
  );
};
