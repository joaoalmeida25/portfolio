'use client';

import { useTheme } from '@/hooks/use-theme/use-theme.hook';
import { Button } from '@/components/ui/button/button.component';

export const ThemeToggle = () => {
  const { theme, toggleTheme, isHydrated } = useTheme();
  const label = !isHydrated
    ? 'Carregando tema'
    : theme === 'dark'
      ? 'Ativar tema claro'
      : 'Ativar tema escuro';

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
      disabled={!isHydrated}
      aria-label={label}
      className="fixed top-[calc(1rem_+_env(safe-area-inset-top,0px))] right-[calc(1rem_+_env(safe-area-inset-right,0px))] z-50 sm:top-[calc(1.5rem_+_env(safe-area-inset-top,0px))] sm:right-[calc(1.5rem_+_env(safe-area-inset-right,0px))]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : (
          <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
        )}
      </svg>
    </Button>
  );
};
