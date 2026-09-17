import { locale as getLocale } from 'next/root-params';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export default getRequestConfig(async () => {
  const locale = await getLocale();

  if (!hasLocale(routing.locales, locale)) notFound();

  const [common, home, experiences, projects, metadata] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/experiences.json`),
    import(`../messages/${locale}/projects.json`),
    import(`../messages/${locale}/metadata.json`),
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      home: home.default,
      experiences: experiences.default,
      projects: projects.default,
      metadata: metadata.default,
    },
  };
});
