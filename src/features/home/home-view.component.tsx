import { AboutMe } from './components/about-me/about-me.component';
import { Hero } from './components/hero/hero.component';

export const HomeView = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
    </main>
  );
};
