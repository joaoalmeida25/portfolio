interface ExperienceDetailsProps {
  id: string;
  company: string;
  context?: string;
  role: string;
  period: string;
  details: readonly string[];
  onClose: () => void;
}

export const ExperienceDetails = ({
  id,
  company,
  context,
  role,
  period,
  details,
  onClose,
}: ExperienceDetailsProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mt-8 grid gap-8 border-y border-border/70 py-8 md:grid-cols-[1fr_2fr] md:gap-12 sm:py-10"
    >
      <div>
        <h3 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-text-primary">
          {company}
          {context && (
            <span className="mt-1 block text-sm font-normal text-text-muted">{context}</span>
          )}
        </h3>
        <p className="mt-4 text-sm leading-6 text-text-secondary italic">{role}</p>
        <p className="mt-2 font-mono text-xs leading-5 text-text-muted">{period}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-control border border-primary px-4 py-2 text-sm font-medium text-text-primary hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          Ver menos
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
            className="shrink-0"
          >
            <path d="M6 12h12" />
          </svg>
          <span className="sr-only">
            {' '}
            sobre {company}
            {context ? ` — ${context}` : ''}
          </span>
        </button>
      </div>
      <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-text-secondary marker:text-primary sm:text-base">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </section>
  );
};
