import { IProject } from '@/types/projects.type';

export const PROJECTS: Array<IProject> = [
  {
    slug: 'predator-ubuntu-sense',
    title: 'Predator Ubuntu Sense',
    shortDescription:
      'Control center open source para notebooks Acer Predator no Linux, centralizando recursos de hardware e sistema em uma experiência desktop.',
    status: 'development',
    images: [
      {
        src: '/images/projects/predator-sense/predator-0.png',
        alt: 'Interface',
      },
    ],
    technologies: ['Rust', 'Tauri', 'React', 'TypeScript', 'Linux'],
    overview:
      'Aplicação desktop open source criada para centralizar recursos específicos de notebooks Acer Predator no Linux, começando pelo PHN16-73.',
    motivation:
      'Muitos recursos disponíveis no PredatorSense do Windows não possuem uma experiência equivalente oficial no Linux, exigindo ferramentas e configurações separadas.',
    objective:
      'Criar uma camada segura e amigável que orquestre recursos já disponíveis no Linux sem exigir que a interface rode como root ou reimplementar drivers de kernel.',
    features: [
      'Diagnóstico do ambiente e hardware',
      'Controle RGB',
      'Perfis de performance',
      'Battery limiter e configurações do dispositivo',
      'Execução privilegiada controlada por helper',
    ],
    links: {
      github: 'https://github.com/joaoalmeida25/predator-ubuntu-sense',
      demo: '',
      documentation: '',
    },
  },
  {
    slug: 'neural-system-ui',
    title: 'Neural System UI',
    shortDescription:
      'Biblioteca de interface neural 3D para representar sistemas processando, pensando e se comunicando em tempo real.',
    status: 'development',
    images: [
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-1.png',
        alt: 'Neural System UI - visualização neural 3D 1',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-2.png',
        alt: 'Neural System UI - visualização neural 3D 2',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-3.png',
        alt: 'Neural System UI - visualização neural 3D 3',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-4.png',
        alt: 'Neural System UI - visualização neural 3D 4',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-5.png',
        alt: 'Neural System UI - visualização neural 3D 5',
      },
    ],
    technologies: ['React', 'TypeScript', 'Three.js', '3D', 'Real-time'],
    overview:
      'Neural System UI é uma biblioteca de interface neural 3D criada para transformar processos invisíveis de um sistema em uma experiência visual interativa. Eventos, estados, conexões e comunicações passam a ser representados espacialmente e em tempo real.',
    motivation:
      'Sistemas complexos processam informações, tomam decisões e se comunicam continuamente, mas grande parte desse comportamento permanece invisível para quem os observa. O Neural System UI nasceu da ideia de tornar esse funcionamento visual, compreensível e vivo.',
    objective:
      'Criar uma biblioteca reutilizável capaz de receber o estado e os eventos de diferentes sistemas e representá-los através de modelos 3D interativos, sem acoplar a visualização a uma aplicação ou domínio específico.',
    features: [
      'Representação 3D de nós, conexões e estruturas',
      'Propagação visual de eventos em tempo real',
      'Estados e atividades representados visualmente',
      'Interação, seleção e inspeção de elementos',
      'Suporte a diferentes modelos e topologias visuais',
    ],
    links: {
      github: 'https://github.com/joaoalmeida25/neural-system-ui',
      demo: '',
      documentation: '',
    },
  },
];
