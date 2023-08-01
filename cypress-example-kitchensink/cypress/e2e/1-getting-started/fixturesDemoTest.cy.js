context("Fixtures Demo", () => {
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
});
