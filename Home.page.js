import BasePage from "./Base.page";

class HomePage{
    static get url() {
        return "/";
    }
    static get dismissButton() {
        return cy.get(".close-dialog");
    }
    static get meWantinButton() {
        return cy.get(".cc-dismiss");
    }
    static get accountButton() {
       return cy.get('[id="navbarAccount"]');
    }
    static get accountButtonClick() {
        return cy.get("#navbarLoginButton");
    }
    static get seachIcon() {
        return cy.get("#searchQuery");
    }
    static get searchField() {
        return cy.get(".mat-input-element");
    }
    static get comboBoxPageCount() {
        return cy.get("mat-select[aria-label='Items per page:']");
    }
    static get comboBoxPageNr() {
        return  cy.get(".mat-option-text");
    }
    
}

export default HomePage