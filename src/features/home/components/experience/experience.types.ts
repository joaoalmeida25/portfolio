export type ExperienceDetailKey =
  | 'fullstackDevelopment'
  | 'centralizedConsole'
  | 'microfrontends'
  | 'authenticationAndIntegrations'
  | 'cloudDelivery'
  | 'studentAssessment'
  | 'administrativeTool'
  | 'testingStandards'
  | 'continuousImprovement'
  | 'mobileDevelopment'
  | 'backendIntegration'
  | 'microservices'
  | 'automatedTests'
  | 'legacyEvolution'
  | 'corporateSystems'
  | 'technicalStack'
  | 'databaseAndIntegrations'
  | 'developmentTools'
  | 'applicationMaintenance'
  | 'javaApplications'
  | 'interfaceDevelopment'
  | 'persistence'
  | 'internalSystems'
  | 'operationalContinuity';

export interface IProfessionalExperienceDefinition {
  id: string;
  company: string;
  detailKeys: Array<ExperienceDetailKey>;
}

export interface IProfessionalExperience {
  id: string;
  period: string;
  company: string;
  context?: string;
  role: string;
  summary: string;
  details: Array<string>;
  showMoreAriaLabel: string;
  showLessAriaLabel: string;
}

export interface IExperienceLabels {
  title: string;
  timeline: string;
  navigation: string;
  previous: string;
  next: string;
  showMore: string;
  showLess: string;
  contributions: string;
}
