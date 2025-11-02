/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import SignupPage from '../support/pages/SignupPage';
import AccountPage from '../support/pages/AccountPage';

describe('Test Case 1: Register User', () => {
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

  it('Should register a new user successfully', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click on 'Signup / Login' button
    homePage.clickSignupLogin();
    
    // 4. Verify 'New User Signup!' is visible
    loginPage.verifyNewUserSignupVisible();
    
    // 5. Enter name and email address
    loginPage.fillSignupForm(userData.name, userData.email);
    
    // 6. Click 'Signup' button
    loginPage.clickSignup();
    
    // 7. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    signupPage.verifyAccountInfoVisible();
    
    // 8-11. Fill details
    signupPage.fillAccountInformation(userData);
    signupPage.fillAddressInformation(userData);
    
    // 12. Click 'Create Account button'
    signupPage.clickCreateAccount();
    
    // 13. Verify that 'ACCOUNT CREATED!' is visible
    accountPage.verifyAccountCreated();
    
    // 14. Click 'Continue' button
    accountPage.clickContinue();
    
    // 15. Verify that 'Logged in as username' is visible
    homePage.verifyLoggedIn(userData.name);
    
    // 16. Click 'Delete Account' button
    homePage.clickDeleteAccount();
    
    // 17. Verify is visible
    accountPage.verifyAccountDeleted();
    
    // 18. Click 'Continue' button
    accountPage.clickContinue();
  });
});
