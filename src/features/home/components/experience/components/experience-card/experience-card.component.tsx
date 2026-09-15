interface ExperienceCardProps {
  triggerId: string;
  detailsId: string;
  period: string;
  company: string;
  context?: string;
  role: string;
  summary: string;
  isCurrent: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

export const ExperienceCard = ({
  triggerId,
  detailsId,
  period,
  company,
  context,
  role,
  summary,
  isCurrent,
  isSelected,
  onSelect,
}: ExperienceCardProps) => {
  return (
    <article className="relative flex h-full flex-col pt-10">
      <span
        aria-hidden="true"
        className={`absolute top-0 left-0 size-4 rounded-full border-4 border-background ring-2 transition-colors duration-200 ease-out motion-reduce:transition-none ${isCurrent ? 'bg-primary ring-primary/20' : 'bg-border ring-border/60'}`}
      />
      <div className="flex flex-1 flex-col px-5 pb-2">
        <p className="font-mono text-xs leading-5 text-text-muted">{period}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">{company}</h3>
        <p className="mt-1 min-h-5 text-xs leading-5 text-text-muted">{context}</p>
        <p className="mt-3 text-sm leading-6 text-text-secondary italic">{role}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary">{summary}</p>
        <div className="mt-auto pt-5">
          <button
            id={triggerId}
            type="button"
            aria-expanded={isSelected}
            aria-controls={isSelected ? detailsId : undefined}
            onClick={onSelect}
            className="inline-flex min-h-11 items-center gap-3 rounded-control border border-primary px-4 py-2 text-sm font-medium text-text-primary hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            {isSelected ? 'Ver menos' : 'Ver mais'}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              className="shrink-0"
            >
              <path d={isSelected ? 'M6 12h12' : 'M4 12h16m-6-6 6 6-6 6'} />
            </svg>
            <span className="sr-only">
              {' '}
              sobre {company}
              {context ? ` — ${context}` : ''}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
