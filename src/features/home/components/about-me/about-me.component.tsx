import { AboutMeView } from './about-me-view.component';
import type { AboutHighlightData } from './about-me.types';
import { useMemo } from 'react';

const paragraphs = [
  'Me chamo João Vitor e sou engenheiro de software. Sempre fui apaixonado por tecnologia e acredito no poder dela para simplificar e criar oportunidades.',
  'Gosto de resolver problemas reais, transformando-os em produtos que geram impacto positivo na vida das pessoas.',
  'Sou curioso, persistente e estou sempre em busca de novos aprendizados, desafios e pessoas que compartilham essa visão.',
];

export const AboutMe = () => {
  const highlights = useMemo(
    (): Array<AboutHighlightData> => [
      { title: '7+ anos', description: 'de experiência profissional', icon: 'experience' },
      {
        title: 'Problemas reais',
        description: 'transformados em soluções úteis',
        icon: 'solution',
      },
      {
        title: 'Evolução constante',
        description: 'curiosidade, aprendizado e novos desafios',
        icon: 'learning',
      },
    ],
    [],
  );

  return <AboutMeView title="Sobre mim" paragraphs={paragraphs} highlights={highlights} />;
};
