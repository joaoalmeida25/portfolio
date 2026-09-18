import { AboutMeView } from './about-me-view.component';
import type { IAboutHighlightData } from './about-me.types';
import { useTranslations } from 'next-intl';

export const AboutMe = () => {
  const t = useTranslations('home.about');
  const paragraphs = ['introduction', 'impact', 'growth'].map((key) => t(`paragraphs.${key}`));
  const highlights: Array<IAboutHighlightData> = [
    {
      title: t('highlights.experience.title'),
      description: t('highlights.experience.description'),
      icon: 'experience',
    },
    {
      title: t('highlights.solution.title'),
      description: t('highlights.solution.description'),
      icon: 'solution',
    },
    {
      title: t('highlights.learning.title'),
      description: t('highlights.learning.description'),
      icon: 'learning',
    },
  ];

  return <AboutMeView title={t('title')} paragraphs={paragraphs} highlights={highlights} />;
};
