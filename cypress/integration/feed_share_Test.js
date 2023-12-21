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
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/buzz/viewBuzz"
    );

    cy.get(
      ":nth-child(1) > .oxd-sheet > .orangehrm-buzz-post-footer > .orangehrm-buzz-post-actions > :nth-child(3)"
    ).click();
    cy.get(
      ".orangehrm-buzz-post-modal-header-text > .oxd-buzz-post > .oxd-buzz-post-input"
    ).type("Resharing");
    cy.get(".oxd-form-actions > .oxd-button").click();
  });
});
