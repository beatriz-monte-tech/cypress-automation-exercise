class SignupPage {
  elements = {
    accountInfoHeading: () => cy.contains('Enter Account Information'),
    titleMr: () => cy.get('#id_gender1'),
    password: () => cy.get('#password'),
    dayDropdown: () => cy.get('#days'),
    monthDropdown: () => cy.get('#months'),
    yearDropdown: () => cy.get('#years'),
    newsletter: () => cy.get('#newsletter'),
    specialOffers: () => cy.get('#optin'),
    firstName: () => cy.get('#first_name'),
    lastName: () => cy.get('#last_name'),
    company: () => cy.get('#company'),
    address1: () => cy.get('#address1'),
    address2: () => cy.get('#address2'),
    country: () => cy.get('#country'),
    state: () => cy.get('#state'),
    city: () => cy.get('#city'),
    zipcode: () => cy.get('#zipcode'),
    mobileNumber: () => cy.get('#mobile_number'),
    createAccountButton: () => cy.get('[data-qa="create-account"]')
  };

  verifyAccountInfoVisible() {
    this.elements.accountInfoHeading().should('be.visible');
  }

  fillAccountInformation(userData) {
    this.elements.titleMr().check();
    this.elements.password().type(userData.password);
    this.elements.dayDropdown().select('15');
    this.elements.monthDropdown().select('6');
    this.elements.yearDropdown().select('1990');
    this.elements.newsletter().check();
    this.elements.specialOffers().check();
  }

  fillAddressInformation(userData) {
    this.elements.firstName().type(userData.firstName);
    this.elements.lastName().type(userData.lastName);
    this.elements.company().type(userData.company);
    this.elements.address1().type(userData.address1);
    this.elements.address2().type(userData.address2);
    this.elements.country().select(userData.country);
    this.elements.state().type(userData.state);
    this.elements.city().type(userData.city);
    this.elements.zipcode().type(userData.zipcode);
    this.elements.mobileNumber().type(userData.mobileNumber);
  }

  clickCreateAccount() {
    this.elements.createAccountButton().click();
  }

  completeSignup(userData) {
    this.fillAccountInformation(userData);
    this.fillAddressInformation(userData);
    this.clickCreateAccount();
  }
}

export default SignupPage;
