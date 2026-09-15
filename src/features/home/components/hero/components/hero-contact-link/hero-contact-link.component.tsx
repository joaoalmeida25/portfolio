import Image from 'next/image';
import { Button } from '@/components/ui/button/button.component';
import type { HeroContactIcon, HeroContactVariant } from '../../hero.types';

interface IHeroContactLinkProps {
  label: string;
  href?: string;
  icon: HeroContactIcon;
  variant?: HeroContactVariant;
  external?: boolean;
  download?: boolean;
}

export const HeroContactLink = ({
  label,
  href,
  icon,
  variant = 'secondary',
  external = false,
  download = false,
}: IHeroContactLinkProps) => {
  const actionProps = href
    ? { href, target: external ? '_blank' : undefined, download }
    : { disabled: true, title: 'Currículo indisponível no momento' };

  return (
    <Button
      {...actionProps}
      variant={variant}
      size={icon === 'email' || icon === 'document' ? 'lg' : 'md'}
      leftIcon={
        icon === 'email' || icon === 'document' ? (
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
          >
            {icon === 'email' ? (
              <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </>
            ) : (
              <>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6M12 11v7m-3-3 3 3 3-3" />
              </>
            )}
          </svg>
        ) : (
          <Image
            src={`/icons/brands/${icon}.svg`}
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            className={`object-contain ${icon === 'github' ? 'invert [[data-theme=light]_&]:invert-0' : ''}`}
          />
        )
      }
    >
      {label}
      {!href && <span className="sr-only"> (indisponível no momento)</span>}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </Button>
  );
};
