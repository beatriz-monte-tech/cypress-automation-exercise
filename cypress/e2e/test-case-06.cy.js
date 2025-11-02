/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import ContactUsPage from '../support/pages/ContactUsPage';

describe('Test Case 6: Contact Us Form', () => {
  const homePage = new HomePage();
  const contactPage = new ContactUsPage();
  
  let contactData;

  before(() => {
    cy.generateContactData().then((data) => {
      contactData = data;
    });
  });

  it('Should submit contact us form successfully', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click on 'Contact Us' button
    homePage.clickContactUs();
    
    // 4. Verify 'GET IN TOUCH' is visible
    contactPage.verifyGetInTouchVisible();
    
    // 5. Enter name, email, subject and message
    contactPage.fillContactForm(contactData);
    
    // 6. Upload file
    contactPage.uploadFile('testfile.txt');
    
    // 7. Click 'Submit' button
    contactPage.clickSubmit();
    
    // 8. Click OK button on alert
    cy.on('window:confirm', () => true);
    
    // 9. Verify success message is visible
    contactPage.verifySuccessMessage();
    
    // 10. Click 'Home' button and verify that landed to home page successfully
    contactPage.clickHome();
    homePage.verifyHomePageVisible();
  });
});
