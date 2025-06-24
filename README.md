# vue-starter

This template should help get you started developing with Vue 3 in Vite.

## Integration

Extended the official Vue template with extra tools for better DX.

- [Unocss](https://unocss.dev/)

> UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.

- [Naive UI](https://www.naiveui.com/zh-CN/os-theme)

> A Vue 3 Component Library
>
> Fairly Complete, Theme Customizable, Uses TypeScript, Fast
>
> Kinda Interesting

- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)

> Auto import APIs on-demand for Vite, Webpack, Rspack, Rollup and esbuild. With TypeScript support. Powered by unplugin.

- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)

> On-demand components auto importing for Vue.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [Unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
