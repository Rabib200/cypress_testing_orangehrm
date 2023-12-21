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
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/admin/saveWorkShifts"
    );
    cy.get(":nth-child(2) > .oxd-input").type("Night Shift");
    cy.get(".oxd-autocomplete-text-input > input").type("1322");
    cy.wait(1000);
    cy.get(".oxd-button--secondary").click();
  });
});
