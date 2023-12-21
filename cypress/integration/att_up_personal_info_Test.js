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
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/pim/viewPersonalDetails/empNumber/1"
    );

    cy.get(".orangehrm-action-header > .oxd-button").click();
    cy.get(".oxd-file-button").click();

    cy.fixture("misti.jpg", "base64").then((fileContent) => {
      cy.get(".oxd-file-button").attachFile({
        fileContent: fileContent,
        fileName: "misti.jpg",
        mimeType: "image/jpeg",
      });
    });
    cy.wait(3000);
    cy.get(
      ".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
    ).click();
  });
});
