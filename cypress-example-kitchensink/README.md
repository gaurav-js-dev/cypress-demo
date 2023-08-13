# Kitchen Sink || Cypress Demo App

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing basics. The application uses most of the API commands in Cypress for demonstration purposes.

## Local Setup Instructions

### 1. Clone this repo

In order to run this project in local environment, you'll need to [clone](https://github.com/gaurav-js-dev/cypress-demo/tree/master/cypress-example-kitchensink) it first.

### 2. Bash into folder and run below commands

After cloning this repo in your local machine, run these commands:

```bash

## cd into the cloned repo's project
cd cypress-demo/cypress-example-kitchensink

## install the node_modules
npm install

## start the local webserver
npm run start
```

The `npm start` script will spawn a webserver on port `8080` which hosts the Kitchen Sink App.

You can verify this by opening your browser and navigating to: [`http://localhost:8080`](http://localhost:8080)

You should see the Kitchen Sink App up and running. We are now ready to run Cypress tests.

```bash
# launch the cypress test runner
npm run cy:open
```

**shortcut:** you can use command `npm run local:open` that uses [start-server-and-test](https://github.com/bahmutov/start-server-and-test) to start local server and open Cypress. When you close Cypress, the local server is stopped automatically. Similarly you can use `npm run local:run` to start the server, run Cypress tests headlessly in CLI and close the server.
