context("Fixtures Demo", () => {
  beforeEach(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
      cy.log("THIS", this.data);
    });
  });

  it("pulls data from a fixture", () => {
    cy.fixture("example").then((data) => {
      cy.log(data);
    });
  });

  it("update fixture data from test", () => {
    cy.fixture("example").then((data) => {
      data.email = "updated@email.com";
      cy.log("Updated Data", data);
    });
  });

  it("uses fixture data for mocking network request", function () {
    cy.visit("/commands/network-requests");
    cy.intercept("GET", "**/comments/*", this.data).as("getComment");
    cy.get(".network-btn").click();
    cy.wait("@getComment").then((res) => {
      cy.log("RES", res);
    });
  });
});
