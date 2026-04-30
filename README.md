# BoilerPlate Project

Project for better tracking and collaboration projects at Mediaweb

## How to setup the project on your Computer

**Make sure you have Node and NPM or PNPM installed on your pc.**
If you don't, please follow these links:

- https://nodejs.org/en/download/
- https://pnpm.io/installation
- https://www.npmjs.com/get-npm

You can check if it's installed with this commands:

    $> node --version
    $> pnpm --version
    $> npm --version

## How to use the Repository

**1st Step:** Make sure you have all needed modules installed with the following command:

    $> pnpm install
    or
    $> npm install

**2nd Step:** Use one of the following scripts to start developing or build your project:

| NPM Script | Purpose |
| ------------------- | ----------------------------------------------------------------------- |
| `pnpm dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `pnpm watch` | Build the styles and watch for changes to rebuild |
| `pnpm build` | Compiles and bundles your assets for production into the `1-dist` folder. |
| `pnpm preview` | Serves the production build locally to preview it. |
| `pnpm prepare` | Configure husky plugin to review and lint commit messages. |