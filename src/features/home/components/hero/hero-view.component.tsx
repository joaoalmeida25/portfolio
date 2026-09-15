import Image from 'next/image';
import { HeroContactLink } from './components/hero-contact-link/hero-contact-link.component';
import type { IHeroBackgrounds, IHeroContact } from './hero.types';

interface IHeroViewProps {
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  contacts: Array<IHeroContact>;
  backgrounds: IHeroBackgrounds;
}

export const HeroView = ({
  firstName,
  lastName,
  role,
  description,
  contacts,
  backgrounds,
}: IHeroViewProps) => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background md:bg-background-soft"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-128 sm:h-144 md:inset-0 md:h-auto"
      >
        <Image
          src={backgrounds.dark}
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={95}
          sizes="(max-width: 639px) 80rem, (max-width: 767px) 90rem, 100vw"
          className="object-cover object-[65%_top] md:object-[50%_center] lg:object-center [[data-theme=light]_&]:hidden"
        />
        {backgrounds.light && (
          <Image
            src={backgrounds.light}
            alt=""
            aria-hidden="true"
            fill
            priority
            quality={95}
            sizes="(max-width: 639px) 80rem, (max-width: 767px) 90rem, 100vw"
            className="hidden object-cover object-[65%_top] md:object-[50%_center] lg:object-center [[data-theme=light]_&]:block"
          />
        )}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-128 bg-linear-to-t from-background from-0% via-background/65 via-20% to-background/0 to-55% sm:h-144 md:inset-0 md:h-auto md:bg-linear-to-r md:from-background/80 md:from-0% md:via-background/30 md:via-45% md:to-background/0 md:to-65% lg:from-background/30 lg:via-background/0"
      />

      <div className="relative z-10 mx-auto flex max-w-[120rem] items-center px-6 pt-112 pb-16 sm:px-10 sm:pt-128 md:min-h-152 md:py-24 lg:min-h-[clamp(36rem,41vw,50rem)] lg:px-16 xl:px-24">
        <div className="min-w-0 max-w-xl md:w-1/2 md:max-w-2xl">
          <h1
            id="hero-title"
            className="text-5xl leading-[1.05] font-semibold tracking-tight text-text-primary sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {firstName} <span className="text-primary">{lastName}</span>
          </h1>
          <p className="mt-5 text-xl font-medium tracking-tight text-text-primary sm:text-2xl xl:text-3xl">
            {role}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg xl:mt-8 xl:max-w-lg xl:text-xl">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3 lg:w-max lg:max-w-[200%] xl:mt-10">
            {contacts.map((contact) => (
              <HeroContactLink
                key={contact.label}
                label={contact.label}
                href={contact.href}
                icon={contact.icon}
                variant={contact.variant}
                external={contact.external}
                download={contact.download}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
