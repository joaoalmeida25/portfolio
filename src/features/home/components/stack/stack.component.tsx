import { StackView } from './stack-view.component';
import type { IEngineeringPracticeData, ITechnology } from './stack.types';
import { useTranslations } from 'next-intl';

export const Stack = () => {
  const t = useTranslations('home.stack');
  const technologies: Array<ITechnology> = [
    { name: 'React', iconPath: '/icons/brands/react.svg' },
    { name: 'Next.js', iconPath: '/icons/brands/nextjs.svg', monochrome: true },
    { name: 'TypeScript', iconPath: '/icons/brands/typescript.svg' },
    { name: 'Node.js', iconPath: '/icons/brands/nodejs.svg' },
    { name: 'NestJS', iconPath: '/icons/brands/nestjs.svg' },
    { name: 'Java', iconPath: '/icons/brands/java.svg' },
    { name: 'PostgreSQL', iconPath: '/icons/brands/postgresql.svg' },
    { name: 'AWS', iconPath: '/icons/brands/aws.svg' },
    { name: 'Docker', iconPath: '/icons/brands/docker.svg' },
    { name: 'Git', iconPath: '/icons/brands/git.svg' },
  ];

  const practices: Array<IEngineeringPracticeData> = [
    { label: 'Clean Architecture' },
    { label: t('practices.automatedTesting') },
    { label: 'CI/CD' },
    { label: 'Cloud' },
    { label: t('practices.aiAssistedDevelopment') },
  ];

  return (
    <StackView
      title={t('title')}
      technologies={technologies}
      practicesLabel={t('practicesLabel')}
      practices={practices}
    />
  );
};
