// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Välkommen till Vuetify 3 Beta");
  });

  it("compares snapshots", () => {
    cy.visit("/");
    cy.compareSnapshot("home");
  });
});
