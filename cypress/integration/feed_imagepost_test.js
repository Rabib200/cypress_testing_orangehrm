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

    cy.wait(2000);

    cy.visit(
      "http://localhost/orangehrm-5.5/orangehrm-5.5/web/index.php/buzz/viewBuzz"
    );

    cy.get(".oxd-buzz-post-input").type("This is a test Buzz post");
    cy.get(".orangehrm-buzz-create-post-actions > :nth-child(1)").click();

    cy.fixture("misti.jpg", "base64").then((fileContent) => {
      cy.get("oxd-file-input").attachFile({
        fileContent: fileContent,
        fileName: "misti.jpg",
        mimeType: "image/jpeg",
      });
    });

    cy.get("oxd-button oxd-button--medium oxd-button--main")
      .scrollIntoView()
      .click();
  });
});
