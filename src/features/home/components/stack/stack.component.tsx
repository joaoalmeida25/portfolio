import { StackView } from './stack-view.component';
import type { IEngineeringPracticeData, ITechnology } from './stack.types';

export const Stack = () => {
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
    { label: 'Automated Testing' },
    { label: 'CI/CD' },
    { label: 'Cloud' },
    { label: 'AI-assisted development' },
  ];

  return (
    <StackView
      title="Stack"
      technologies={technologies}
      practicesLabel="Práticas de engenharia"
      practices={practices}
    />
  );
};
