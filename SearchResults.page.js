import BasePage from "./Base.page";

class searchResult extends BasePage{
    static get url() {
        return "/#/search"
    }
    static get product() {
        return cy.get(".product");
    }
    static get searchResultValid() {
        return cy.get("h1");
    }
    static get closeProductButton() {
        return cy.get(".close-dialog");
    }
    static get expandReview() {
        cy.wait(300);
      return cy.get('[aria-label="Expand for Reviews"]')
    }
    static get reviewValidation() {
        return cy.get(".review-text");
    }

}
export default searchResult