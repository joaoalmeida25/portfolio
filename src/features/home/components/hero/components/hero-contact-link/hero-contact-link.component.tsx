import type { ReactNode } from 'react';
import type { HeroContactIcon, HeroContactVariant } from '../../hero.types';

interface HeroContactLinkProps {
  label: string;
  href: string;
  icon: HeroContactIcon;
  variant?: HeroContactVariant;
  external?: boolean;
}

const icons: Record<HeroContactIcon, ReactNode> = {
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a4 4 0 0 1 2-2Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-7A5.4 5.4 0 0 0 18.8 5a5 5 0 0 0-.1-3.5S17.5 1.2 15 2.8a13.4 13.4 0 0 0-7 0C5.5 1.2 4.3 1.5 4.3 1.5A5 5 0 0 0 4.2 5a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.2 6.6 6.2 7a3.4 3.4 0 0 0-.9 2.6V22" />
  ),
};

export const HeroContactLink = ({
  label,
  href,
  icon,
  variant = 'secondary',
  external = false,
}: HeroContactLinkProps) => {
  const variantClassName =
    variant === 'primary'
      ? 'border-primary bg-primary text-primary-foreground shadow-primary hover:border-primary-hover hover:bg-primary-hover'
      : 'border-border bg-background/70 text-text-primary hover:bg-surface-hover';

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-control border px-5 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring ${variantClassName}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        {icons[icon]}
      </svg>
      {label}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
};
