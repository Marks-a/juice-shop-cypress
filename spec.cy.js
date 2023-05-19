import BasePage from "../pageObjects/Base.page";
import HomePage from "../pageObjects/Home.page";
import loginPage from "../pageObjects/Login.page";
import registrationPage from "../pageObjects/Registration.page";
import searchResult from "../pageObjects/SearchResults.page";
describe("Juice-Shop scenarios", () => {
  context.skip("With no login", () => {
    beforeEach(() => {
      cy.visit("/");

      HomePage.dismissButton.click();
      HomePage.meWantinButton.click();
    });
    it("Registration", () => {
      //
      HomePage.accountButton.click();
      HomePage.accountButtonClick.click();
      loginPage.newUser.click();

      registrationPage.emailField.type("test" + Math.floor(Math.random() * 100000) + "@test.com");
      registrationPage.passwordField.type("12345678");
      registrationPage.passwordFieldRepeat.type("12345678");
      registrationPage.firstNavigationBar.click();
      registrationPage.secondNavigationBar.click();
      registrationPage.securityAwnser.type("test");
      registrationPage.registrationConfirm.click();
       //   cy.get(".mat-simple-snack-bar-content").should("have.text","Registration completed successfully. You can now log in");;
    });
  });
  context("Login", () => {
    beforeEach(() => {
      cy.visit("/"); 
      HomePage.dismissButton.click();
      HomePage.meWantinButton.click();
      HomePage.accountButton.click();
      HomePage.accountButtonClick.click();
      loginPage.loginto("demo","demo");
    })
    it.skip("Registration", () => {
     HomePage.seachIcon.click()
     HomePage.searchField.type("500ml{enter}");
     searchResult.product.contains("Eggfruit Juice").click();
     searchResult.searchResultValid.should("have.text","Eggfruit Juice (500ml)");
      searchResult.closeProductButton.click();
    })
    it.skip("Validate Page count",() => {
      HomePage.comboBoxPageCount.click();
      HomePage.comboBoxPageNr.contains("12").click()
      HomePage.comboBoxPageCount.should("have.text","12");
      HomePage.comboBoxPageCount.click()
      HomePage.comboBoxPageNr.contains("24").click()
      HomePage.comboBoxPageCount.should("have.text","24");
    })
    it("Validate item review",() => {
      HomePage.seachIcon.click()
      HomePage.searchField.type("King{enter}");
      searchResult.product.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      searchResult.expandReview.click();
      searchResult.reviewValidation.should("contains.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
      //cy.get(".comment ng-star-inserted").click();
    })



  })




});