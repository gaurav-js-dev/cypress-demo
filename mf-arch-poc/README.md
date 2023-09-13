# SWAPI | Microfrontend App

This repository is a NX monorepo which contains multiple apps under a single repo and demos a MicroFront End architecture implementation.

### This project shows E2E tests to test integration points between microfrontends and core functionality following principles of Testing everything together.

- Tests are written in below directory for Star-Wars shell apps which will render multiple sub remote apps.

```bash
mf-arch-poc/apps/test/star-wars-test/src/e2e
```

## Local Setup Instructions

```bash

## cd into the cloned repo's project

cd cypress-demo/mf-arch-poc

## install the node_modules

yarn

## start the local webserver

yarn nx serve star-wars --open --devRemotes=starships,planets,films

# launch the cypress test runner

yarn nx run test-star-wars-test:e2e --watch

```
