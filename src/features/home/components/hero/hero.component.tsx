import { HeroView } from './hero-view.component';
import type { IHeroBackgrounds, IHeroContact } from './hero.types';
import { useMemo } from 'react';

export const Hero = () => {
  const contacts = useMemo(
    (): Array<IHeroContact> => [
      {
        label: 'Enviar e-mail',
        href: 'mailto:jv.almeidaa25@gmail.com',
        icon: 'email',
        variant: 'primary',
      },
      {
        label: 'Currículo',
        icon: 'document',
        variant: 'secondary',
        download: true,
        href: '/documents/curriculo.pdf',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/joão-vitor-almeida-54439b19b',
        icon: 'linkedin',
        variant: 'secondary',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/joaoalmeida25',
        icon: 'github',
        variant: 'secondary',
        external: true,
      },
    ],
    [],
  );

  const backgrounds = useMemo(
    (): IHeroBackgrounds => ({
      dark: '/images/hero/hero-background-dark.png',
      light: '/images/hero/hero-background-light.png',
    }),
    [],
  );

  return (
    <HeroView
      firstName="João"
      lastName="Almeida"
      role="Software Engineer"
      description="Transformo ideias em produtos digitais escaláveis, com foco em impacto no mundo real."
      contacts={contacts}
      backgrounds={backgrounds}
    />
  );
};
