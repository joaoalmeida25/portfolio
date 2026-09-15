import type { ReactNode } from 'react';
import type { AboutHighlightIcon } from '../../about-me.types';

interface IAboutHighlightProps {
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
  solution: (
    <>
      <path d="M8 15a6 6 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3ZM9 21h6M12 18v-5m-2-2 2 2 2-2" />
    </>
  ),
  learning: (
    <>
      <path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1ZM12 6v14" />
      <path d="M6 9h3M6 13h3M15 9h3M15 13h3" />
    </>
  ),
};

export const AboutHighlight = ({ title, description, icon }: IAboutHighlightProps) => {
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
      <dd className="col-start-2 mt-1 max-w-xs text-sm leading-relaxed text-text-secondary sm:text-base">
        {description}
      </dd>
    </div>
  );
};
