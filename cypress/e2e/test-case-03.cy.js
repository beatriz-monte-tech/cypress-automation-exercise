/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';

describe('Test Case 3: Login User with incorrect email and password', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  it('Should show error message with invalid credentials', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click on 'Signup / Login' button
    homePage.clickSignupLogin();
    
    // 4. Verify 'Login to your account' is visible
    loginPage.verifyLoginToAccountVisible();
    
    // 5. Enter incorrect email address and password
    loginPage.fillLoginForm('invalid@email.com', 'wrongpassword');
    
    // 6. Click 'login' button
    loginPage.clickLogin();
    
    // 7. Verify error 'Your email or password is incorrect!' is visible
    loginPage.verifyLoginError();
  });
});
