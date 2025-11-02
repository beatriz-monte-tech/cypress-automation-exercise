class AccountPage {
  elements = {
    accountCreatedHeading: () => cy.get('[data-qa="account-created"]'),
    accountDeletedHeading: () => cy.get('[data-qa="account-deleted"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]')
  };

  verifyAccountCreated() {
    this.elements.accountCreatedHeading().should('be.visible');
    cy.contains('Account Created!').should('be.visible');
  }

  verifyAccountDeleted() {
    this.elements.accountDeletedHeading().should('be.visible');
    cy.contains('Account Deleted!').should('be.visible');
  }

  clickContinue() {
    this.elements.continueButton().click();
  }
}

export default AccountPage;
