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
