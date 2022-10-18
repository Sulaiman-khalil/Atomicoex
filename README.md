## Atomico Starter Skit

1. `npm install`
2. `npm start` : Initialize the development server
3. `npm build` : Optional, Generate a build of your project from the html file [index.html](index.html).

## Workspace

### Recommended structure

```bash
src
  |- my-component
  |  |- my-component.{js,jsx,ts,tsx}
  |  |- my-component.test.js
  |  |- README.md
  |- components.js # import all components
```

> The `npm run create:component` command, will create a webcomponent with the recommended structure.

## Scripts

### npm run create:component

Create a new webcomponent inside src, according to the recommended structure.

### npm run start

initialize Vite server

### npm run build

package the app using de Vite

### npm run create:component

Create a base component
