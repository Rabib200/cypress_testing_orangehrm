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
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/pim/viewEmployeeList"
    );
    cy.get(":nth-child(2) > .oxd-input").type("1122");
    cy.wait(3000);
    cy.get(":nth-child(2) > .oxd-input").click();
    cy.wait(3000);
  });
});
