import { getGreeting } from '../support/app.po';

describe('star-wars', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to SWAPI MFE!');
  });
});
