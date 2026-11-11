# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Preview search locally

The local search index is generated **only during `yarn build`**, not by the dev server.
Searching in `yarn start` shows:

```text
The search index is only available when you run docusaurus build!
```

To test search locally, build once and serve the static output:

```bash
yarn build
yarn serve
# or simply
yarn preview
```

### Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`: it installs dependencies,
runs `yarn build`, and publishes `build/` to the `pages` branch served by GitHub Pages.

To re-run a deployment manually:

```
$ gh workflow run deploy
```
