/// <reference types="cypress" />

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
    //   cy.wait(2000);
    //   cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").click();
    //   cy.wait(2000);
    //   cy.get(".orangehrm-header-container > .oxd-button").click();
    //   cy.get(
    //     ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    //   ).type("Wasi");
    //   cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").type("Hasan");
    //   cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("SH");
    //   cy.wait(2000);
    //   cy.get(
    //     ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    //   ).clear();
    //   cy.get(
    //     ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    //   ).type("2233");
    //   cy.wait(1000);
    //   cy.get(".oxd-button--secondary").click();
    //   cy.wait(6000);
    //   cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    //   cy.wait(2000);
    //   cy.get(
    //     ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    //   ).type("wasi");
    //   cy.wait(1000);
    //   cy.get(".oxd-form-actions > .oxd-button--secondary").click();
    //   // cy.wait("2000");
    //   // cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").click();
  });
});
