# João Almeida | Portfolio

Portfólio pessoal desenvolvido para apresentar minha trajetória como Software Engineer, minhas experiências profissionais, stack, práticas de engenharia e projetos pessoais.

O projeto também funciona como uma aplicação prática de organização arquitetural, componentização, responsividade, design system e boas práticas de desenvolvimento.

## Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vercel

## Arquitetura

O projeto utiliza o App Router do Next.js e uma organização baseada em features.

Principais decisões:

* Feature Folder
* Separação entre Controller e View quando existe lógica de apresentação
* Componentes visuais reutilizáveis
* Dados estáticos centralizados em arquivos `.constants.ts`
* Semantic tokens para suporte aos temas dark e light
* Server Components por padrão
* Client Components somente quando existe necessidade real de estado ou interação
* Componentes globais reutilizáveis em `src/components`
* Primitives visuais reutilizáveis em `src/components/ui`

### Estrutura

```text
public/
├── documents/
├── icons/
└── images/
    ├── hero/
    └── projects/

src/
├── app/
│   └── projects/
│       └── [slug]/
├── components/
│   ├── shared/
│   └── ui/
├── constants/
├── features/
│   ├── home/
│   └── projects/
├── hooks/
├── styles/
└── types/
```

## Padrões do projeto

Algumas convenções adotadas:

* Arquivos e pastas em `kebab-case`
* Componentes React com `.component.tsx`
* Arrow Functions e `const`
* Named exports
* Interfaces com prefixo `I`
* Coleções tipadas utilizando `Array<T>`
* `interface` para contratos de objetos
* `type` para unions
* Cada componente em sua própria pasta
* Componentes reutilizáveis em `src/components/ui`
* Cores consumidas através de semantic tokens
* Dados de projetos centralizados em `projects.constants.ts`
* Props de Controller e View mantidas como contratos distintos
* SVGs de marcas armazenados localmente no projeto
* Links e botões preservando a semântica correta de HTML

Exemplo de separação Controller e View:

```text
hero/
├── hero.component.tsx
└── hero-view.component.tsx
```

O Controller concentra preparação de dados e comportamento.

A View fica responsável pela apresentação.

## Principais funcionalidades

* Tema dark e light persistente
* Layout responsivo
* Experiência profissional interativa
* Apresentação de stack e práticas de engenharia
* Catálogo de projetos
* Páginas dinâmicas em `/projects/[slug]`
* Galeria de imagens por projeto
* Links para GitHub, demonstração e documentação
* Currículo disponível diretamente pelo portfólio
* Theme toggle acessível e disponível durante a navegação

## Executando localmente

### Requisitos

* Node.js
* npm

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Qualidade

Antes de enviar alterações:

```bash
npm run format
npm run format:check
npm run lint
npm run build
```

## Deploy

O projeto utiliza Vercel com integração ao GitHub.

* `main` publica em Production
* Branches e Pull Requests geram Preview Deployments

## Objetivo

Este portfólio foi construído para apresentar de forma simples e visual meu trabalho como Software Engineer, além de servir como espaço para evolução de projetos, experimentos técnicos e soluções digitais.