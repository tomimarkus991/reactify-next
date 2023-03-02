![RedLotus-Logo-Dark](.github/base-logo-dark-mode.svg#gh-dark-mode-only)
![RedLotus-Logo-Light](.github/base-logo-light-mode.svg#gh-light-mode-only)

Get started with React and tailwind. **Get a super boost to your development** 🚀

Inspired by https://github.com/shadcn/next-template

## Features

- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Fonts with `@next/font`

## 📖 Documentation
This boilerplate has all the tooling configured (eslint, prettier, husky, lint-staged, typescript and testing)

Tailwind 3 is used for styling.
Its using [RedLotusUI](https://github.com/redlotus-io/ui) as the component library, which is built with React and Tailwind 3.  It's all configured out of the box.

Routing, folder structure and main page is setup

PWA is working out of the box

---

## Quickstart
Update names in `head.tsx`, `package.json` to your project name.

Update icons in `public` folder.

# Development
Ensure you have the latest LTS version of Node.js installed

### Install dependencies
`yarn`

### Start server with hot reload
`yarn dev`


# 📦 Converting project to reactify standards

- Copy everything from `tsconfig.json` to your project's `tsconfig.json`
  - Remove tsconfig.node.json
- Add .eslintrc.yaml file
```bash
extends:
  - eslint-config-redlotus-next/dist/main
```
- Remove old eslintrc and prettierrc files
- Copy .prettierignore and .eslintignore

- Add `npx lint-staged` to husky pre-commit
- Add this to your package.json
```bash
  "lint-staged": {
    "*.{js,jsx,ts,tsx,md,graphql}": "yarn lint:fix"
  }
```
- Add these scripts to package.json
  -  `"lint:fix": "eslint --fix --ext .js,.ts,.tsx ./src --ignore-path .gitignore",`
  -  `"clean": "rm -rf node_modules/ && rm -rf yarn.lock && yarn",`


- Copy next line from tailwind.config.js

    `content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],`

- Also there may be other things that you need to copy from tailwind.config.js

- Remove `prepare` and `prettier` script

- Remove following packages
  - These come from @redlotus/ui
    - @emotion/react
    - @emotion/styled
    - @headlessui/react
    - @react-hook/window-size
    - clsx
    - date-fns
    - formik
    - framer-motion
    - react-icons
  - These come from eslint-config-redlotus-react
    - @typescript-eslint/eslint-plugin
    - @typescript-eslint/parser
    - eslint
    - eslint-config-prettier
    - eslint-import-resolver-typescript
    - eslint-plugin-import
    - eslint-plugin-jest-dom
    - eslint-plugin-jsx-a11y
    - eslint-plugin-react
    - eslint-plugin-react-hooks
    - eslint-plugin-tailwindcss
    - eslint-plugin-testing-library
    - prettier

`yarn remove @emotion/react @emotion/styled @headlessui/react @react-hook/window-size clsx`

`yarn remove date-fns`

`yarn remove formik framer-motion react-icons`

`yarn remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-tailwindcss eslint-plugin-testing-library prettier`

`yarn add @redlotus/ui`
`yarn add -D @redlotus/typescript-config eslint-config-redlotus-react lint-staged`

run `yarn clean` to make sure there are no missing packages

Make sure the project runs

Fix eslint errors by running `yarn lint:fix`

!!Update packages

Add from src/types/pwa.d.ts to your project

### If everything works, then proceed with next steps

You can now start implementing @redlotus/ui

Add the following to your `main.tsx` file:

```bash
import "@redlotus/ui/dist/style.css";
```

Move routing to routes.tsx Find example [here](https://github.com/redlotus-io/ui/blob/main/src/routes/routes.tsx)

Remove moment and replace it with date-fns

Remove from src folder:
- useIsMobile hook
- SidebarContext
- Most of the components

## To add ThreeJS

`yarn add three @react-three/fiber @react-three/drei`
`yarn add -D r3f-perf @react-three/editor @types/three`

### Class Merging

The `cn` util handles conditional classes and class merging.

### Input

```ts
cn("px-2 bg-slate-100 py-2 bg-slate-200")
// Outputs `p-2 bg-slate-200`
```


---
























[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## License

[MIT](./LICENSE)

Copyright (c) 2022, tomimarkus991