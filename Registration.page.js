import BasePage from "./Base.page";
class registrationPage{
    static get url() {
        return "/register"
    }
    static visit() {
        this.url();
    }
    static get emailField() {
        return cy.get("#emailControl");
    }
    static get passwordField() {
        return cy.get("#passwordControl");
    }
    static get passwordFieldRepeat() {
       return cy.get("#repeatPasswordControl")
    }
    static get firstNavigationBar() {
        return cy.get("#mat-select-2");
    }
    static get secondNavigationBar(){
        return  cy.get("#mat-option-3");
    }
    static get securityAwnser() {
        return cy.get("#securityAnswerControl");
    }
    static get registrationConfirm() {
        return cy.get("#registerButton");
    }
}
export default registrationPage;
