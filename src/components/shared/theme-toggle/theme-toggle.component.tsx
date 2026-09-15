'use client';

import { useTheme } from '@/hooks/use-theme/use-theme.hook';

export const ThemeToggle = () => {
  const { theme, toggleTheme, isHydrated } = useTheme();
  const label = !isHydrated
    ? 'Carregando tema'
    : theme === 'dark'
      ? 'Ativar tema claro'
      : 'Ativar tema escuro';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!isHydrated}
      aria-label={label}
      className="rounded-control border border-border bg-surface px-4 py-2 text-sm text-text-primary hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:cursor-wait disabled:opacity-50"
    >
      {label}
    </button>
  );
};
