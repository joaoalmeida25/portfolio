import { cache } from 'react';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PROJECT_DEFINITIONS } from '@/constants/projects.constants';
import type { IProject, IProjectCardData } from '@/types/projects.type';

export const getLocalizedProjects = cache(async (locale: Locale): Promise<Array<IProject>> => {
  const t = await getTranslations({ locale, namespace: 'projects' });

  return PROJECT_DEFINITIONS.map((definition) => ({
    slug: definition.slug,
    title: definition.title,
    status: definition.status,
    technologies: definition.technologies,
    links: definition.links,
    shortDescription: t(`items.${definition.slug}.shortDescription`),
    overview: t(`items.${definition.slug}.overview`),
    motivation: t(`items.${definition.slug}.motivation`),
    objective: t(`items.${definition.slug}.objective`),
    features: definition.featureKeys.map((featureKey) =>
      t(`items.${definition.slug}.features.${featureKey}`),
    ),
    images: definition.images.map((image, index) => ({
      src: image.src,
      alt: t('imageAlt', {
        title: definition.title,
        index: index + 1,
        total: definition.images.length,
      }),
    })),
  }));
});

export const getLocalizedProject = async (slug: string, locale: Locale) => {
  const projects = await getLocalizedProjects(locale);
  return projects.find((project) => project.slug === slug);
};

export const getLocalizedProjectCards = async (
  locale: Locale,
): Promise<Array<Omit<IProjectCardData, 'ariaLabel'>>> => {
  const projects = await getLocalizedProjects(locale);

  return projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    shortDescription: project.shortDescription,
    status: project.status,
    image: project.images[0],
    technologies: project.technologies,
  }));
};
