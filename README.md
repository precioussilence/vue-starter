# vue-starter

An enhanced Vue 3 + TypeScript starter featuring:

- Pre-configured UnoCSS, Naive UI, and unplugin utilities

- Opinionated layout and routing examples

- Optimized developer experience through auto-importing and component resolution

This opinionated template accelerates project initialization while demonstrating modern Vue architecture patterns.

---

## Quick Start

```sh
pnpm install

pnpm dev

pnpm build

pnpm lint
```

---

## Core Features

### Integration

Integrating key development tools including:

- [Unocss](https://unocss.dev/)

  > The instant atomic CSS engine featuring:
  >
  > - On-demand CSS utilities generation
  > - Flexible preset system (Tailwind/Windi CSS compatible)
  > - Runtime-free CSS-in-JS performance

- [Naive UI](https://www.naiveui.com/)

  > A complete Vue 3 component library with:
  >
  > - TypeScript-first design
  > - Customizable themes
  > - High performance

- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)

  > API auto-importing for Vue ecosystem:
  >
  > - Automatic imports for Vue/Nuxt APIs
  > - Dependency-aware tree-shaking
  > - Full TypeScript support

- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)

  > Automatic Vue component resolver with:
  >
  > - Zero-import component usage
  > - Built-in Naive UI resolver support
  > - TypeScript declarations auto-generation

---

## Development

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [Unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss).

---

## Project Structure

```text
src/
├── components/
│   ├── home/
│   │   └── HomePage.vue          # Primary landing page with hero/content sections
│   ├── layout/
│   │   ├── HeaderLayout.vue      # Custom app header with navigation/actions
│   │   ├── ContentLayout.vue     # Main content container
│   │   ├── FooterLayout.vue      # Custom footer with copyright/links
│   │   └── SiderLayout.vue       # Collapsible sidebar with menu system
│   └── system/
│       ├── UserPage.vue          # User CRUD interface with permissions
│       ├── RolePage.vue          # Role management with privilege assignment
│       └── MenuPage.vue          # Dynamic menu configuration panel
├── router/
│   └── index.ts                  # Route definitions and guards
├── stores/
│   └── counter.ts                # State management
├── views/
│   └── HomeView.vue              # Default route view
│
├── App.vue                       # Root Vue component
├── auto-imports.d.ts             # Generated API imports (unplugin-auto-import)
├── components.d.ts               # Auto-component typings (unplugin-vue-components)
└── main.ts                       # Application entry point
```

---

## Requirements

- Node.js >= 18.x
- pnpm >= 10.7.1
- vue >= 3.5.13
- typescript >= 5.8.0
- vue-router >= 4.5.0
- pinia >= 3.0.1
- naive-ui >= 2.42.0
- unocss >= 66.2.3
- unplugin-auto-import >= 19.3.0
- unplugin-vue-components >= 28.7.0
