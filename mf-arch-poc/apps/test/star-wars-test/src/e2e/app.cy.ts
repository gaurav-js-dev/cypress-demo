import { getGreeting } from '../support/app.po';

describe('star-wars', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to SWAPI MFE!');
    cy.get('h2').should(
      'contain.text',
      'This app is created with module federation'
    );
  });

  it('should display container content correctly while navigating to sub mfe app', () => {
    cy.visit('/starships');
    getGreeting().contains('Welcome to SWAPI MFE!');
    cy.get('h2').should(
      'contain.text',
      'This app is created with module federation'
    );
  });

  it('navigates to the films page correctly upon click', () => {
    cy.findByText('Films').click();
    cy.url().should('include', '/films');
  });
});
