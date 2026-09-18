import { FloatingControls } from '@/components/floating-controls/floating-controls.component';
import { ProjectsSection } from '@/features/home/components/projects-section/projects-section.component';
import { AboutMe } from './components/about-me/about-me.component';
import { Experience } from './components/experience/experience.component';
import { Footer } from './components/footer/footer.component';
import { Hero } from './components/hero/hero.component';
import { Stack } from './components/stack/stack.component';
import type {
  IExperienceLabels,
  IProfessionalExperience,
} from './components/experience/experience.types';
import type { IProjectCardData } from '@/types/projects.type';
import type { IProjectsSectionLabels } from './components/projects-section/projects-section.types';
import { Fragment } from 'react';

interface IHomeViewProps {
  experiences: Array<IProfessionalExperience>;
  experienceLabels: IExperienceLabels;
  projects: Array<IProjectCardData>;
  projectLabels: IProjectsSectionLabels;
}

export const HomeView = ({
  experiences,
  experienceLabels,
  projects,
  projectLabels,
}: IHomeViewProps) => {
  return (
    <Fragment>
      <FloatingControls />
      <main>
        <Hero />
        <AboutMe />
        <Experience experiences={experiences} labels={experienceLabels} />
        <Stack />
        <ProjectsSection projects={projects} labels={projectLabels} />
      </main>
      <Footer />
    </Fragment>
  );
};
