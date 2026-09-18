import type { IProjectDefinition } from '@/types/projects.type';

export const PROJECT_DEFINITIONS: Array<IProjectDefinition> = [
  {
    slug: 'predator-ubuntu-sense',
    title: 'Predator Ubuntu Sense',
    status: 'development',
    images: [
      {
        src: '/images/projects/predator-sense/predator-0.png',
      },
    ],
    technologies: ['Rust', 'Tauri', 'React', 'TypeScript', 'Linux'],
    featureKeys: [
      'environmentDiagnostics',
      'rgbControl',
      'performanceProfiles',
      'batteryAndDeviceSettings',
      'privilegedExecution',
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
    status: 'development',
    images: [
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-1.png',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-2.png',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-3.png',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-4.png',
      },
      {
        src: '/images/projects/neural-system-ui/neural-system-ui-5.png',
      },
    ],
    technologies: ['React', 'TypeScript', 'Three.js', '3D', 'Real-time'],
    featureKeys: [
      'threeDimensionalRepresentation',
      'realTimeEventPropagation',
      'visualStatesAndActivities',
      'elementInspection',
      'visualTopologies',
    ],
    links: {
      github: 'https://github.com/joaoalmeida25/neural-system-ui',
      demo: '',
      documentation: '',
    },
  },
];
