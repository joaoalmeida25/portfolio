import { HeroView } from './hero-view.component';
import type { IHeroBackgrounds, IHeroContact } from './hero.types';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('home.hero');
  const contacts: Array<IHeroContact> = [
    {
      label: t('email'),
      href: 'mailto:jv.almeidaa25@gmail.com',
      icon: 'email',
      variant: 'primary',
    },
    {
      label: t('resume'),
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
  ];

  const backgrounds: IHeroBackgrounds = {
    dark: '/images/hero/hero-background-dark.png',
    light: '/images/hero/hero-background-light.png',
  };

  return (
    <HeroView
      firstName="João"
      lastName="Almeida"
      role="Software Engineer"
      description={t('description')}
      contacts={contacts}
      backgrounds={backgrounds}
    />
  );
};
