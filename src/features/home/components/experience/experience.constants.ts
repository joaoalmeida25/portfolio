import { IProfessionalExperience } from '@/features/home/components/experience/experience.types';

export const experiences: Array<IProfessionalExperience> = [
  {
    id: 'logshare',
    period: '02/2024 — Atual',
    company: 'LogShare',
    context: 'Logística',
    role: 'Software Engineer Senior',
    summary:
      'Produto SaaS de logística com React/Next.js, Node.js/TypeScript, microfrontends, integrações e cloud.',
    details: [
      'Desenvolvimento e evolução de soluções fullstack com Next.js/React, Node.js/TypeScript, APIs, banco relacional e organização por domínio.',
      'Construção e evolução de um Console com login centralizado, permissões e integração entre diferentes aplicações.',
      'Implementação e evolução de microfrontends integrando produtos como Copilot e Connect.',
      'Atuação em autenticação, autorização, contratos entre aplicações, integrações e funcionalidades em produção.',
      'Apoio à entrega em cloud com Docker, AWS, CI/CD, pipelines e padronização do fluxo de desenvolvimento.',
    ],
  },
  {
    id: 'ciandt-yduqs',
    period: '05/2021 — 02/2024',
    company: 'CI&T',
    context: 'YDUQS / Estácio',
    role: 'Software Engineer Senior',
    summary:
      'Produtos educacionais com React, Node.js, TypeScript, NestJS, AWS e testes automatizados.',
    details: [
      'Desenvolvimento e evolução de funcionalidades fullstack com React, Node.js, TypeScript, NestJS, Clean Architecture, AWS, DynamoDB e Terraform.',
      'Atuação em aplicação voltada aos fluxos de avaliação dos alunos.',
      'Evolução de ferramenta administrativa para cadastro e gerenciamento de disciplinas.',
      'Estruturação de padrões de testes com Jest, React Testing Library e Cypress.',
      'Atuação em features, refactors, investigação de bugs, autenticação, performance e melhoria contínua da qualidade.',
    ],
  },
  {
    id: 'ciandt-sulamerica',
    period: '10/2020 — 05/2021',
    company: 'CI&T',
    context: 'SulAmérica',
    role: 'Software Engineer Pleno',
    summary:
      'Aplicativo mobile e serviços backend com TypeScript/Ionic, Java/Spring e integrações.',
    details: [
      'Desenvolvimento e evolução de funcionalidades mobile utilizando TypeScript, Ionic e Cordova.',
      'Integração entre aplicativo e serviços backend em fluxos de atendimento.',
      'Atuação com microsserviços em Java 8, Spring Boot, Spring Cloud/Feign, Google Data Store e Resilience4j.',
      'Implementação e manutenção de testes com Jest, Cypress, Spock/Groovy e Cucumber.',
      'Investigação, correção e evolução incremental de sistema legado.',
    ],
  },
  {
    id: 'stefanini',
    period: '09/2019 — 10/2020',
    company: 'Stefanini',
    context: 'Polícia Federal',
    role: 'Web Developer',
    summary: 'Sistemas corporativos com Java 11, Angular, APIs, JPA/Hibernate e Oracle.',
    details: [
      'Desenvolvimento de funcionalidades e integrações em sistemas corporativos utilizados pela Polícia Federal.',
      'Atuação com Java 11, Angular 8, JPA/Hibernate, JAX-RS e JAX-WS.',
      'Trabalho com banco Oracle e integrações entre aplicações.',
      'Utilização de Git/GitLab, JUnit e Mockito.',
      'Manutenção evolutiva e sustentação de aplicações com regras de negócio sensíveis.',
    ],
  },
  {
    id: 'banco-do-brasil',
    period: '10/2018 — 09/2019',
    company: 'Banco do Brasil',
    context: 'DIRAO',
    role: 'Web Developer',
    summary: 'Sistemas internos com Java, JSF, PrimeFaces, JPA e MySQL.',
    details: [
      'Desenvolvimento de melhorias e correções em aplicações corporativas Java.',
      'Desenvolvimento de interfaces com JSF e PrimeFaces.',
      'Trabalho com JPA/EclipseLink e banco MySQL.',
      'Manutenção e evolução de sistemas internos.',
      'Contribuição para estabilidade e continuidade operacional das aplicações.',
    ],
  },
];
