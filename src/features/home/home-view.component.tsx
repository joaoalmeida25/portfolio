import { ThemeToggle } from '@/components/theme-toggle/theme-toggle.component';
import { ProjectsSection } from '@/features/home/components/projects-section/projects-section.component';
import { AboutMe } from './components/about-me/about-me.component';
import { Experience } from './components/experience/experience.component';
import { Footer } from './components/footer/footer.component';
import { Hero } from './components/hero/hero.component';
import { Stack } from './components/stack/stack.component';

export const HomeView = () => {
  return (
    <>
      <ThemeToggle />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Stack />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
};
