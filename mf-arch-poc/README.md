# MfArchPoc

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
