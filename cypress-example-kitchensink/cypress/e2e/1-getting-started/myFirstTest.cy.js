context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/commands/actions");
  });

  it("has an h1 on page", () => {
    cy.get("h1").should("exist");
  });

  it("render correct h1 test", () => {
    cy.get("h1").should("contain.text", "Actions");
  });

  it("renders a paragraph under h1", () => {
    cy.get(".container").eq(1).find("p").should("exist");
  });

  it("renders a section with the correct elements", () => {
    cy.get(".container")
      .eq(2)
      .within(() => {
        cy.get("h4").should("exist");
      });
  });
});
