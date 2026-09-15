import Image from 'next/image';
import type { HeroContactIcon, HeroContactVariant } from '../../hero.types';

interface HeroContactLinkProps {
  label: string;
  href: string;
  icon: HeroContactIcon;
  variant?: HeroContactVariant;
  external?: boolean;
}

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
      {icon === 'email' ? (
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
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ) : (
        <Image
          src={`/icons/brands/${icon}.svg`}
          alt=""
          aria-hidden="true"
          width={18}
          height={18}
          className={`size-4.5 shrink-0 object-contain ${icon === 'github' ? 'invert [[data-theme=light]_&]:invert-0' : ''}`}
        />
      )}
      {label}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
};
