/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import SignupPage from '../support/pages/SignupPage';
import AccountPage from '../support/pages/AccountPage';

describe('Test Case 15: Place Order: Register before Checkout', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();
  const accountPage = new AccountPage();
  
  let userData;

  before(() => {
    cy.generateUserData().then((data) => {
      userData = data;
    });
  });

  it('Should register user and place an order', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click 'Signup / Login' button
    homePage.clickSignupLogin();
    
    // 4. Fill all details in Signup and create account
    loginPage.verifyNewUserSignupVisible();
    loginPage.fillSignupForm(userData.name, userData.email);
    loginPage.clickSignup();
    
    signupPage.verifyAccountInfoVisible();
    signupPage.fillAccountInformation(userData);
    signupPage.fillAddressInformation(userData);
    signupPage.clickCreateAccount();
    
    // 5. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    accountPage.verifyAccountCreated();
    accountPage.clickContinue();
    
    // 6. Verify 'Logged in as username' at top
    homePage.verifyLoggedIn(userData.name);
    
    // 7. Add products to cart
    cy.visit('/products');
    cy.get('.single-products').first().within(() => {
      cy.contains('Add to cart').click();
    });
    
    // 8. Click 'Continue Shopping' button
    cy.contains('button', 'Continue Shopping').should('be.visible').click();
    
    // 9. Add another product
    cy.get('.single-products').eq(1).within(() => {
      cy.contains('Add to cart').click();
    });
    
    // 10. Click 'View Cart' button
    cy.contains('View Cart').click();
    
    // 11. Verify that cart page is displayed
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');
    
    // 12. Click Proceed To Checkout
    cy.contains('Proceed To Checkout').click();
    
    // 13. Verify Address Details and Review Your Order
    cy.get('.checkout-information').should('be.visible');
    
    // Verificar endereço de entrega
    cy.get('#address_delivery').should('contain', userData.firstName);
    cy.get('#address_delivery').should('contain', userData.address1);
    
    // Verificar endereço de cobrança
    cy.get('#address_invoice').should('contain', userData.firstName);
    
    // Verificar produtos no carrinho
    cy.get('.cart_description').should('be.visible');
    
    // 14. Enter description in comment text area and click 'Place Order'
    cy.get('textarea.form-control').type('Please deliver between 9 AM to 5 PM. Thank you!');
    cy.contains('Place Order').click();
    
    // 15. Enter payment details
    cy.get('[data-qa="name-on-card"]').type(userData.name);
    cy.get('[data-qa="card-number"]').type('4532015112830366');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2027');
    
    // 16. Click 'Pay and Confirm Order' button
    cy.get('[data-qa="pay-button"]').click();
    
    // 17. Verify success message
    cy.get('[data-qa="order-placed"]', { timeout: 15000 }).should('be.visible');
    
    // Verificar mensagem de sucesso
    cy.get('.col-sm-9 > p').should('contain', 'Congratulations');
    
    // 18. Click 'Delete Account' button
    homePage.clickDeleteAccount();
    
    // 19. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    accountPage.verifyAccountDeleted();
    accountPage.clickContinue();
  });
});
