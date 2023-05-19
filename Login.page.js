import BasePage from "./Base.page";

class loginPage{
    static get url() {
        return "/login"
    }
    
    static get newUser() {
        return cy.get("#newCustomerLink");
    }
    static get emailField() {
        return cy.get("#email");
    }
    static get passwordField() {
        return cy.get("#password");
    }
    static get loginButton(){
        return cy.get("#loginButton");
    }
    static loginto(email,passwordField) {
        this.emailField.type(email);
        this.passwordField.type(passwordField)
        this.loginButton.click();
    }



}

export default loginPage;