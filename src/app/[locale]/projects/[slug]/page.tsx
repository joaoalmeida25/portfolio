import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/constants/projects.constants';
import { Project } from '@/features/project/project.component';

const getProject = (slug: string) => {
  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) notFound();

  return project;
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: `${project.title} | João Almeida`,
    description: project.shortDescription,
  };
};

const ProjectPage = async ({ params }: PageProps<'/[locale]/projects/[slug]'>) => {
  const { slug } = await params;

  return <Project project={getProject(slug)} />;
};

export default ProjectPage;
