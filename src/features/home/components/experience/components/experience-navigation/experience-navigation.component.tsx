import { Button } from '@/components/ui/button/button.component';

interface IExperienceNavigationProps {
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
}: IExperienceNavigationProps) => {
  return (
    <div
      role="group"
      aria-label="Navegação da timeline profissional"
      className="flex shrink-0 gap-2"
    >
      <Button
        variant="ghost"
        size="icon"
        aria-label="Rolar para experiências mais recentes"
        aria-controls={timelineId}
        disabled={!canGoPrevious}
        onClick={onPrevious}
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
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Rolar para experiências mais antigas"
        aria-controls={timelineId}
        disabled={!canGoNext}
        onClick={onNext}
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
      </Button>
    </div>
  );
};
