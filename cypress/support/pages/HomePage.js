class HomePage {
  elements = {
    signupLoginLink: () => cy.contains('a', 'Signup / Login'),
    logoutLink: () => cy.contains('a', 'Logout'),
    deleteAccountLink: () => cy.contains('a', 'Delete Account'),
    loggedInAs: () => cy.contains('Logged in as'),
    contactUsLink: () => cy.contains('a', 'Contact us'),
    productsLink: () => cy.contains('a', 'Products'),
    subscriptionHeading: () => cy.contains('h2', 'Subscription'),
    subscriptionEmail: () => cy.get('#susbscribe_email'),
    subscriptionButton: () => cy.get('#subscribe'),
    successAlert: () => cy.get('.alert-success')
  };

  visit() {
    cy.visit('/');
  }

  clickSignupLogin() {
    this.elements.signupLoginLink().click();
  }

  clickLogout() {
    this.elements.logoutLink().click();
  }

  clickDeleteAccount() {
    this.elements.deleteAccountLink().click();
  }

  clickContactUs() {
    this.elements.contactUsLink().click();
  }

  clickProducts() {
    this.elements.productsLink().click();
  }

  verifyLoggedIn(username) {
    this.elements.loggedInAs().should('be.visible');
    cy.contains(`Logged in as ${username}`).should('be.visible');
  }

  verifyHomePageVisible() {
    cy.url().should('include', 'automationexercise.com');
    cy.get('body').should('be.visible');
  }

  scrollToSubscription() {
    this.elements.subscriptionHeading().scrollIntoView();
  }

  verifySubscriptionVisible() {
    this.elements.subscriptionHeading().should('be.visible');
  }

  enterSubscriptionEmail(email) {
    this.elements.subscriptionEmail().type(email);
  }

  clickSubscribe() {
    this.elements.subscriptionButton().click();
  }

  verifySubscriptionSuccess() {
    this.elements.successAlert()
      .should('be.visible')
      .and('contain', 'You have been successfully subscribed!');
  }
}

export default HomePage;
