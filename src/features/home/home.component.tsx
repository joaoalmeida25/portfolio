import { HomeView } from './home-view.component';
import { getLocale, getTranslations } from 'next-intl/server';
import { getLocalizedExperiences } from './components/experience/experience-content';
import { getLocalizedProjectCards } from '@/features/project/project-content';

export const Home = async () => {
  const locale = await getLocale();
  const [experiences, projectCards, experienceTranslations, homeTranslations] = await Promise.all([
    getLocalizedExperiences(locale),
    getLocalizedProjectCards(locale),
    getTranslations({ locale, namespace: 'experiences.ui' }),
    getTranslations({ locale, namespace: 'home.projects' }),
  ]);

  const projects = projectCards.map((project) => ({
    ...project,
    ariaLabel: homeTranslations('openProject', { title: project.title }),
  }));

  return (
    <HomeView
      experiences={experiences}
      experienceLabels={{
        title: experienceTranslations('title'),
        timeline: experienceTranslations('timeline'),
        navigation: experienceTranslations('navigation'),
        previous: experienceTranslations('previous'),
        next: experienceTranslations('next'),
        showMore: experienceTranslations('showMore'),
        showLess: experienceTranslations('showLess'),
        contributions: experienceTranslations('contributions'),
      }}
      projects={projects}
      projectLabels={{
        title: homeTranslations('title'),
        navigation: homeTranslations('navigation'),
        previous: homeTranslations('previous'),
        next: homeTranslations('next'),
      }}
    />
  );
};
