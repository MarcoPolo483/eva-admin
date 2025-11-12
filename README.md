# EVA Admin UI

This repository contains the admin interface for EVA, built with React, TypeScript, and Vite.

## Release Housekeeping Checklist

- [x] Scaffolded admin UI components: Dashboard, Login, User Management
- [x] Updated documentation and quick start guides
- [ ] Validate backend migration in `eva-foundation` and update imports to use shared packages
- [ ] Consolidate outstanding to-dos and document next steps
- [ ] Bump version and update changelog
- [ ] Push all repos to GitHub (or chosen platform)

## How to Publish
1. Review and finalize all code and documentation
2. Bump version in `package.json`
3. Commit and push changes to remote repository
4. Tag the release and publish

## Features
- Admin dashboard (scaffold)
- User management (scaffold)
- Login/authentication (scaffold)
- Reference to shared packages from `eva-foundation` (see below)

## Usage
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```

## Referencing Shared Packages from `eva-foundation`
To use shared packages (e.g., `@eva/data`, `@eva/security`) from `eva-foundation`, add them as dependencies in your `package.json` and configure your workspace to resolve them locally. See the EVA monorepo documentation for details.

## Deployment
- Uses Vite for build and development.
- Environment variables can be set in `.env` files.

## Best Practices & Guidance

- All UI components are designed for accessibility and WCAG compliance.
- Use shared packages from `eva-foundation` for data, security, and monitoring.
- Follow React and TypeScript best practices for maintainability and scalability.
- For database integration on Azure, prefer Azure Cosmos DB and follow:
  - Minimize cross-partition queries and joins.
  - Use hierarchical partition keys for scalability.
  - Choose high-cardinality keys (e.g., `userId`, `tenantId`).
  - Use the latest SDK, async APIs, and singleton clients.
  - Enable diagnostics logging and monitor performance.
  - Use the VS Code Cosmos DB extension for inspection.
  - Use the Cosmos DB Emulator for local development/testing.

## Outstanding To-Dos (Release Finalization)
- [x] Scaffolded admin UI components: Dashboard, Login, User Management
- [x] Updated documentation and quick start guides
- [ ] Validate backend migration in `eva-foundation` and update imports to use shared packages
- [ ] Add admin UI feature documentation and accessibility checklist
- [ ] Bump version and update changelog
- [ ] Push all repos to GitHub (or chosen platform)

## Next Steps
1. Validate backend migration and update imports in `eva-foundation`.
2. Add admin UI feature documentation and accessibility checklist.
3. Bump version and update changelog.
4. Push all repos to GitHub.

---

# Original Vite/React Template Docs

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
