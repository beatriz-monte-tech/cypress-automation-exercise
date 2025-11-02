class LoginPage {
  elements = {
    newUserSignupHeading: () => cy.contains('h2', 'New User Signup!'),
    loginToAccountHeading: () => cy.contains('h2', 'Login to your account'),
    signupName: () => cy.get('[data-qa="signup-name"]'),
    signupEmail: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
    loginEmail: () => cy.get('[data-qa="login-email"]'),
    loginPassword: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    loginError: () => cy.contains('Your email or password is incorrect!'),
    signupError: () => cy.contains('Email Address already exist!')
  };

  verifyNewUserSignupVisible() {
    this.elements.newUserSignupHeading().should('be.visible');
  }

  verifyLoginToAccountVisible() {
    this.elements.loginToAccountHeading().should('be.visible');
  }

  fillSignupForm(name, email) {
    this.elements.signupName().type(name);
    this.elements.signupEmail().type(email);
  }

  clickSignup() {
    this.elements.signupButton().click();
  }

  fillLoginForm(email, password) {
    this.elements.loginEmail().type(email);
    this.elements.loginPassword().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  verifyLoginError() {
    this.elements.loginError().should('be.visible');
  }

  verifySignupError() {
    this.elements.signupError().should('be.visible');
  }
}

export default LoginPage;
