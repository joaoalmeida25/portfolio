export type ProjectStatus = 'development' | 'completed';

export interface IProjectLinks {
  github?: string;
  demo?: string;
  documentation?: string;
}

export interface IProjectImage {
  src: string;
  alt: string;
}

export interface IProjectDefinitionImage {
  src: string;
}

export type ProjectFeatureKey =
  | 'environmentDiagnostics'
  | 'rgbControl'
  | 'performanceProfiles'
  | 'batteryAndDeviceSettings'
  | 'privilegedExecution'
  | 'threeDimensionalRepresentation'
  | 'realTimeEventPropagation'
  | 'visualStatesAndActivities'
  | 'elementInspection'
  | 'visualTopologies';

export interface IProjectDefinition {
  slug: string;
  title: string;
  status: ProjectStatus;
  images: Array<IProjectDefinitionImage>;
  technologies: Array<string>;
  featureKeys: Array<ProjectFeatureKey>;
  links: IProjectLinks;
}

export interface IProject {
  slug: string;
  title: string;
  shortDescription: string;
  status: ProjectStatus;
  images: Array<IProjectImage>;
  technologies: Array<string>;
  overview: string;
  motivation: string;
  objective: string;
  features: Array<string>;
  links: IProjectLinks;
}

export interface IProjectCardData {
  slug: string;
  title: string;
  shortDescription: string;
  status: ProjectStatus;
  image?: IProjectImage;
  technologies: Array<string>;
  ariaLabel: string;
}
