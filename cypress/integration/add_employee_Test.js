/// <reference types="cypress" />

describe("OrangeHRM Login", () => {
  it("should add an employee", () => {
    cy.visit(
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("rabib20");
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Useyourbrain@200");
    cy.wait(2000);
    cy.get(".oxd-button").click();
    cy.wait(2000);

    cy.visit(
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/pim/addEmployee"
    );
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type("Siddik");
    cy.wait(1000);
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").type("Uddin");
    cy.wait(1000);
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("BH");
    cy.wait(2000);
    cy.get(
      ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).clear();
    cy.get(
      ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("1124");
    cy.get(".oxd-button--secondary").click();
  });
});
