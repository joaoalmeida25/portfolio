import { cache } from 'react';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { EXPERIENCE_DEFINITIONS } from './experience.constants';
import type { IProfessionalExperience } from './experience.types';

export const getLocalizedExperiences = cache(
  async (locale: Locale): Promise<Array<IProfessionalExperience>> => {
    const t = await getTranslations({ locale, namespace: 'experiences' });

    return EXPERIENCE_DEFINITIONS.map((definition) => {
      const context = t(`items.${definition.id}.context`);

      return {
        id: definition.id,
        company: definition.company,
        context,
        period: t(`items.${definition.id}.period`),
        role: t(`items.${definition.id}.role`),
        summary: t(`items.${definition.id}.summary`),
        details: definition.detailKeys.map((detailKey) =>
          t(`items.${definition.id}.details.${detailKey}`),
        ),
        showMoreAriaLabel: t('ui.showMoreAbout', {
          company: definition.company,
          context,
        }),
        showLessAriaLabel: t('ui.showLessAbout', {
          company: definition.company,
          context,
        }),
      };
    });
  },
);
