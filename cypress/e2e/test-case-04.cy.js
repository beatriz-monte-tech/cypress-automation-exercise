/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import SignupPage from '../support/pages/SignupPage';
import AccountPage from '../support/pages/AccountPage';

describe('Test Case 4: Logout User', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();
  const accountPage = new AccountPage();
  
  let testUser;

  before(() => {
    // Gerar dados de usuário
    cy.generateUserData().then((data) => {
      testUser = data;
      
      // Criar o usuário antes de tentar fazer login
      homePage.visit();
      homePage.clickSignupLogin();
      loginPage.fillSignupForm(testUser.name, testUser.email);
      loginPage.clickSignup();
      
      signupPage.verifyAccountInfoVisible();
      signupPage.fillAccountInformation(testUser);
      signupPage.fillAddressInformation(testUser);
      signupPage.clickCreateAccount();
      
      accountPage.verifyAccountCreated();
      accountPage.clickContinue();
      
      // Fazer logout para preparar o teste
      homePage.clickLogout();
    });
  });

  it('Should logout user successfully', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click on 'Signup / Login' button
    homePage.clickSignupLogin();
    
    // 4. Verify 'Login to your account' is visible
    loginPage.verifyLoginToAccountVisible();
    
    // 5. Enter correct email address and password
    loginPage.fillLoginForm(testUser.email, testUser.password);
    
    // 6. Click 'login' button
    loginPage.clickLogin();
    
    // 7. Verify that 'Logged in as username' is visible
    homePage.verifyLoggedIn(testUser.name);
    
    // 8. Click 'Logout' button
    homePage.clickLogout();
    
    // 9. Verify that user is navigated to login page
    cy.url().should('include', '/login');
    loginPage.verifyLoginToAccountVisible();
  });

  after(() => {
    // Limpar: deletar a conta criada
    homePage.visit();
    homePage.clickSignupLogin();
    loginPage.fillLoginForm(testUser.email, testUser.password);
    loginPage.clickLogin();
    homePage.clickDeleteAccount();
    accountPage.clickContinue();
  });
});
