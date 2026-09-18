import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { PROJECT_DEFINITIONS } from '@/constants/projects.constants';
import { Project } from '@/features/project/project.component';
import { getLocalizedProject } from '@/features/project/project-content';
import { getLocalizedAlternates } from '@/i18n/metadata';
import { routing } from '@/i18n/routing';

export const dynamicParams = false;

export const generateStaticParams = () => {
  return PROJECT_DEFINITIONS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> => {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const project = await getLocalizedProject(slug, locale);

  if (!project) notFound();

  return {
    title: `${project.title} | João Almeida`,
    description: project.shortDescription,
    alternates: getLocalizedAlternates(`/projects/${project.slug}`, locale),
  };
};

const ProjectPage = async ({ params }: PageProps<'/[locale]/projects/[slug]'>) => {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const project = await getLocalizedProject(slug, locale);

  if (!project) notFound();

  return <Project project={project} />;
};

export default ProjectPage;
