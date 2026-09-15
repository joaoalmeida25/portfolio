# AGENTS.md

## Project

Professional portfolio built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

The application uses the Next.js App Router and is intended to remain simple, maintainable, responsive and performant.

---

## General principles

- Prefer simple solutions over unnecessary abstractions.
- Do not overengineer the project.
- Do not add dependencies unless they provide clear value.
- Keep components small and focused.
- Preserve existing conventions when modifying code.
- Use TypeScript strictly and avoid `any` unless absolutely necessary.
- Code, identifiers and technical naming should be written in English.

---

## Folder organization

Use feature-based organization.

```text
src/
├── app/
├── features/
│   └── home/
│       ├── components/
│       ├── home.component.tsx
│       └── home-view.component.tsx
├── components/
│   └── shared/
├── constants/
├── hooks/
├── styles/
└── types/
```

### Responsibilities

`app/`

- Next.js routing and framework-specific files.
- Pages should mainly compose/import application features.

`features/`

- Business/UI features grouped by domain.
- Feature-specific components stay inside their feature.

`components/shared/`

- Components reused by multiple features.

`hooks/`

- Truly shared hooks.

`constants/`

- Shared application constants.

`styles/`

- Global styles, Tailwind setup and theme tokens.

`types/`

- Shared TypeScript types when they do not belong to a specific feature.

Do not create empty folders or abstractions without current usage.

Each component must have its own folder. An orchestrator and its View share
the same component folder; child components have their own folders.

---

## Naming conventions

Use **kebab-case** for files and folders.

Examples:

```text
hero.component.tsx
case-card.component.tsx
home.component.tsx
home-view.component.tsx
use-theme.hook.ts
```

### File suffixes

React components:

```text
*.component.tsx
```

Hooks:

```text
*.hook.ts
```

Use `.tsx` only when the file actually contains JSX.

Do not rename Next.js reserved files:

```text
page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx
```

---

## React conventions

Use arrow functions declared with `const`.

Preferred:

```tsx
export const Hero = () => {
  return <section />;
};
```

Do not use function declarations for application components.

Avoid:

```tsx
export function Hero() {
  return <section />;
}
```

---

## Exports

Use **named exports** for:

- components
- controllers
- views
- hooks
- utilities

Example:

```tsx
export const HomeView = () => {
  return <main />;
};
```

Do not use default exports in regular application modules.

### Next.js exception

Framework files may use `default export` when required by Next.js.

Preferred pattern:

```tsx
const HomePage = () => {
  return <Home />;
};

export default HomePage;
```

---

## Controller / View pattern

Use Controller/View when separation provides real value.

The controller/orchestrator uses `<name>.component.tsx` and exports the component
name (for example, `Home`, `Hero` or `AboutMe`). Do not use `controller` in the filename.
The View uses `<name>-view.component.tsx` and exports `<Name>View`.

Controller/orchestrator:

- state
- hooks
- handlers
- orchestration
- data preparation

View:

- presentation
- JSX
- receives prepared data through props

Example:

```text
home/
├── home.component.tsx
├── home-view.component.tsx
└── components/
```

Do not create controllers for simple presentational components without logic.

---

## TypeScript contracts

- Use `interface` for component props and structural object models.
- Each component owns its props interface; keep it in the component file when it is local.
- ControllerProps and ViewProps are different contracts. Do not reuse a View's
  props interface as the controller's props.
- Do not use child component props as the parent's data model.
- Shared section models belong in `<name>.types.ts` inside that section's folder
  (for example, `hero.types.ts`). Create this file only when sharing is needed.
- Views receive section models and pass the necessary fields to child components.
- Use `type` normally for unions and other cases where it is technically appropriate,
  such as `type HeroContactVariant = 'primary' | 'secondary'`.
- Components without props do not need empty props interfaces.

---

## Styling

Use Tailwind CSS as the primary styling solution.

Guidelines:

- Prefer Tailwind utilities over custom CSS.
- Keep `globals.css` limited to global styles, Tailwind setup and true application-wide rules.
- Avoid inline styles unless technically justified.
- Keep responsive behavior explicit.
- Support light/dark mode consistently when implemented.

---

## Theming and design tokens

- The default theme is dark.
- Light and dark themes are controlled by `data-theme` on the root HTML element.
- The user's theme preference is saved in `localStorage`.
- Components must use semantic tokens, never primitive tokens directly.
- Do not hardcode colors when an equivalent semantic token exists.
- Tailwind utilities must consume semantic tokens.

---

## Code quality

Before considering a task complete, run:

```bash
npm run lint
npm run build
```

If formatting scripts are available, also run the appropriate Prettier check.

Do not ignore lint or TypeScript errors merely to make the build pass.

---

## Git

Use Conventional Commits in English.

Examples:

```text
feat: add hero section
fix: adjust mobile navigation
refactor: reorganize home feature
chore: configure prettier
docs: update readme
```

Do not create commits unless explicitly requested.

---

## Scope discipline

When implementing a task:

1. Change only what is necessary for the requested scope.
2. Do not refactor unrelated code.
3. Do not introduce new architecture without justification.
4. Do not implement future features preemptively.
5. Report relevant technical decisions or deviations at the end.

For this portfolio, clarity and maintainability are more important than architectural complexity.
