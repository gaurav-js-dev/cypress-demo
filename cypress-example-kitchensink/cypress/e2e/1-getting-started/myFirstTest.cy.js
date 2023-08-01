context("Actions", () => {
  beforeEach(() => {
    cy.visit("/commands/actions");
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

  it("show an active class for current pag menu", () => {
    cy.get(".dropdown-menu").find("li").eq(2).should("have.class", "active");
  });

  // Routing and navigation examples

  it("should not show an active class for inactive page menu", () => {
    cy.get(".dropdown-menu")
      .find("li")
      .first()
      .should("not.have.class", "active")
      .find("a")
      .should("have.attr", "href", "/commands/querying");
  });

  it("navigates to the actions page correctly upon click", () => {
    cy.visit("/");
    cy.findAllByText("Actions").last().click();
    cy.url().should("include", "/commands/actions");
  });

  // UI Actions Examples Below

  it("lets you type into an input field ", () => {
    cy.findAllByPlaceholderText("Email")
      .type("Test")
      .should("have.value", "Test");
  });

  it("lets you clear the input field", () => {
    cy.findAllByLabelText("Describe:")
      .type("Test Description")
      .should("have.value", "Test Description")
      .clear()
      .should("have.value", "");
  });

  it("lets you check a checkbox", () => {
    cy.get('.action-checkboxes [type ="checkbox"]')
      .eq(2)
      .check()
      .should("be.checked");
  });

  // Testing custom commands

  it("lets you set & get local storage through custom command", () => {
    cy.setLocalStorage("token", "abcd123");
    cy.getLocalStorage("token").should("eq", "abcd123");
  });
});
