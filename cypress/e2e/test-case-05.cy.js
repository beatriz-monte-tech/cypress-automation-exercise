/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import SignupPage from '../support/pages/SignupPage';
import AccountPage from '../support/pages/AccountPage';

describe('Test Case 5: Register User with existing email', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();
  const accountPage = new AccountPage();
  
  let existingUser;
  let newUserData;

  before(() => {
    // Criar um usuário que já existe
    cy.generateUserData().then((data) => {
      existingUser = data;
      
      // Criar o usuário
      homePage.visit();
      homePage.clickSignupLogin();
      loginPage.fillSignupForm(existingUser.name, existingUser.email);
      loginPage.clickSignup();
      
      signupPage.verifyAccountInfoVisible();
      signupPage.fillAccountInformation(existingUser);
      signupPage.fillAddressInformation(existingUser);
      signupPage.clickCreateAccount();
      
      accountPage.verifyAccountCreated();
      accountPage.clickContinue();
      
      // Fazer logout
      homePage.clickLogout();
    });

    // Gerar dados para novo usuário (mas com email existente)
    cy.generateUserData().then((data) => {
      newUserData = data;
      newUserData.email = existingUser.email; // Usar o email que já existe
    });
  });

  it('Should show error when registering with existing email', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click on 'Signup / Login' button
    homePage.clickSignupLogin();
    
    // 4. Verify 'New User Signup!' is visible
    loginPage.verifyNewUserSignupVisible();
    
    // 5. Enter name and already registered email address
    loginPage.fillSignupForm(newUserData.name, newUserData.email);
    
    // 6. Click 'Signup' button
    loginPage.clickSignup();
    
    // 7. Verify error 'Email Address already exist!' is visible
    loginPage.verifySignupError();
  });

  after(() => {
    // Limpar: deletar a conta criada
    homePage.visit();
    homePage.clickSignupLogin();
    loginPage.fillLoginForm(existingUser.email, existingUser.password);
    loginPage.clickLogin();
    homePage.clickDeleteAccount();
    accountPage.clickContinue();
  });
});
