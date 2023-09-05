# Cypress Demo Projects

#### This repo contains 2 projects as listed. Each project has own readme file with instructions.

### 1. [cypress-example-kitchensink](https://github.com/gaurav-js-dev/cypress-demo/tree/master/cypress-example-kitchensink)

### 2. [mf-arch-poc](https://github.com/gaurav-js-dev/cypress-demo/tree/master/mf-arch-poc)

## Local Setup Instructions

In order to run this project in local environment, you'll need to [clone](https://github.com/gaurav-js-dev/cypress-demo/tree/master/cypress-example-kitchensink) it first.

After cloning this repo in your local machine, you have to cd into directory of project you want to run and execute below commands.

- For cypress-example-kitchensink

```bash

## cd into the cloned repo's project
cd cypress-demo/cypress-example-kitchensink

## install the node_modules
npm install

## start the local webserver and open Cypress
npm run local:open
```

- For mf-arch-poc

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
