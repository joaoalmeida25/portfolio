interface ExperienceNavigationProps {
  timelineId: string;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const ExperienceNavigation = ({
  timelineId,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
}: ExperienceNavigationProps) => {
  const buttonClassName =
    'inline-flex size-11 items-center justify-center rounded-full border border-border text-text-primary enabled:hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:cursor-not-allowed disabled:opacity-40';

  return (
    <div
      role="group"
      aria-label="Navegação da timeline profissional"
      className="flex shrink-0 gap-2"
    >
      <button
        type="button"
        aria-label="Rolar para experiências mais recentes"
        aria-controls={timelineId}
        disabled={!canGoPrevious}
        onClick={onPrevious}
        className={buttonClassName}
      >
        <svg
          width="20"
          height="20"
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
      </button>
      <button
        type="button"
        aria-label="Rolar para experiências mais antigas"
        aria-controls={timelineId}
        disabled={!canGoNext}
        onClick={onNext}
        className={buttonClassName}
      >
        <svg
          width="20"
          height="20"
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
      </button>
    </div>
  );
};
