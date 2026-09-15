import { Button } from '@/components/ui/button/button.component';

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
          <Button
            id={triggerId}
            variant={isSelected ? 'primary' : 'outline'}
            size="sm"
            aria-expanded={isSelected}
            aria-controls={isSelected ? detailsId : undefined}
            onClick={onSelect}
            rightIcon={
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
              >
                <path d={isSelected ? 'M6 12h12' : 'M4 12h16m-6-6 6 6-6 6'} />
              </svg>
            }
          >
            {isSelected ? 'Ver menos' : 'Ver mais'}
            <span className="sr-only">
              {' '}
              sobre {company}
              {context ? ` — ${context}` : ''}
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
};
