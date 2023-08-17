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

  // Data fetching example

  it("fetches real data from an external API", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000).then(() => {
      fetch("https://api.spacexdata.com/v3/missions")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  });

  // Testing custom commands

  it("lets you set & get local storage through custom command", () => {
    cy.setLocalStorage("token", "abcd123");
    cy.getLocalStorage("token").should("eq", "abcd123");
  });

  // Testing mouse commands

  it("should trigger a popover on click", () => {
    cy.get(".action-btn").click();
    cy.findAllByText("This popover shows up on click").should("exist");
  });

  it("should click on different section on canvas", () => {
    cy.get("#action-canvas").click("top");
    cy.get("#action-canvas").click("bottomRight");
    cy.get("#action-canvas").click(80, 100);
  });

  it("should double click to edit", () => {
    cy.get(".action-div").dblclick().should("not.be.visible");
    cy.get(".action-input-hidden").should("be.visible");
  });

  it("should right click to edit", () => {
    cy.get(".rightclick-action-div").rightclick().should("not.be.visible");
    cy.get(".rightclick-action-input-hidden").should("be.visible");
  });

  it("should show the nav links on hover", () => {
    cy.get(".dropdown-toggle").trigger("mouseover");
    cy.get(".dropdown-menu").should("be.visible");
  });
});
