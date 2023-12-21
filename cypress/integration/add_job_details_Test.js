/// <reference types="cypress" />
import "cypress-file-upload";

describe("OrangeHRM Login", () => {
  it("should log in successfully", () => {
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

    cy.visit(
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/pim/viewJobDetails/empNumber/13"
    );

    cy.get(".oxd-date-input > .oxd-input").type("2020-5-2");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).should("be.visible");
  });
});
