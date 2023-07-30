const navBarText = Cypress.env("navBarText");

context("Demo of react testing library and ENV", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("it correctly renders the cypress website link", () => {
    cy.findByText(navBarText).should("exist");
  });
});
