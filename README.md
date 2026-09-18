# João Almeida | Portfolio

Portfólio profissional de João Almeida, criado para apresentar sua trajetória como Software Engineer, experiência, stack, práticas de engenharia e projetos pessoais.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS 4
- next-intl
- Vercel

## Principais funcionalidades

- Hero, Sobre mim, Experiência profissional e Stack / Engineering
- Catálogo de projetos com páginas de Project Detail e galeria de imagens
- Controles flutuantes globais para troca de idioma (`LanguageToggle`) e tema
- Temas dark e light com persistência da preferência
- Internacionalização em português do Brasil, inglês e espanhol
- Layout responsivo e recursos de acessibilidade
- SEO básico com metadata localizada, URLs canônicas e alternates por idioma
- Domínio próprio e deploy contínuo na Vercel

## Internacionalização

A internacionalização utiliza `next-intl` e oferece português do Brasil (`pt-BR`), inglês (`en`) e espanhol (`es`). O idioma padrão é `pt-BR`, sem prefixo na URL; inglês utiliza `/en` e espanhol, `/es`. A troca de idioma preserva a página atual.

## Arquitetura

O projeto utiliza o Next.js App Router, Server Components por padrão e Client Components somente quando necessários. A aplicação é organizada por features, com conteúdo traduzível centralizado por locale e dados técnicos separados do conteúdo textual.

Componentes reutilizáveis e semantic tokens mantêm a consistência da interface e dos temas. A separação entre Controller e View é aplicada somente quando há lógica ou preparação de dados que justifique essa divisão.

### Estrutura

```text
src/
├── app/
│   └── [locale]/
├── components/
├── constants/
├── features/
├── i18n/
├── messages/
├── styles/
└── types/
```

## Projetos

- **Predator Ubuntu Sense:** control center open source para notebooks Acer Predator no Linux, centralizando recursos de hardware e sistema em uma experiência desktop.
- **Neural System UI:** biblioteca de interface neural 3D para representar sistemas processando, pensando e se comunicando em tempo real.

## Executando localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Qualidade

```bash
npm run format
npm run format:check
npm run lint
npm run build
```

## Deploy

Fluxo de publicação: GitHub → Vercel → Production.

- `main` publica em Production
- Branches e Pull Requests geram Preview Deployments

Produção: [joaoalmeidaa.dev](https://joaoalmeidaa.dev)
