class ContactUsPage {
  elements = {
    getInTouchHeading: () => cy.contains('h2', 'Get In Touch'),
    nameInput: () => cy.get('[data-qa="name"]'),
    emailInput: () => cy.get('[data-qa="email"]'),
    subjectInput: () => cy.get('[data-qa="subject"]'),
    messageTextarea: () => cy.get('[data-qa="message"]'),
    uploadFileInput: () => cy.get('input[name="upload_file"]'),
    submitButton: () => cy.get('[data-qa="submit-button"]'),
    successMessage: () => cy.get('.status.alert-success'),
    homeButton: () => cy.contains('span', 'Home').parent('a')
  };

  verifyGetInTouchVisible() {
    this.elements.getInTouchHeading().should('be.visible');
  }

  fillContactForm(contactData) {
    this.elements.nameInput().type(contactData.name);
    this.elements.emailInput().type(contactData.email);
    this.elements.subjectInput().type(contactData.subject);
    this.elements.messageTextarea().type(contactData.message);
  }

  uploadFile(fileName) {
    this.elements.uploadFileInput().selectFile(`cypress/fixtures/${fileName}`);
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }

  verifySuccessMessage() {
    this.elements.successMessage()
      .should('be.visible')
      .and('contain', 'Success! Your details have been submitted successfully.');
  }

  clickHome() {
    this.elements.homeButton().click();
  }
}

export default ContactUsPage;
