/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';

describe('Test Case 10: Verify Subscription in home page', () => {
  const homePage = new HomePage();
  
  let subscriptionEmail;

  before(() => {
    cy.generateUserData().then((data) => {
      subscriptionEmail = data.email;
    });
  });

  it('Should subscribe successfully from home page', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Scroll down to footer
    homePage.scrollToSubscription();
    
    // 4. Verify text 'SUBSCRIPTION'
    homePage.verifySubscriptionVisible();
    
    // 5. Enter email address in input and click arrow button
    homePage.enterSubscriptionEmail(subscriptionEmail);
    homePage.clickSubscribe();
    
    // 6. Verify success message 'You have been successfully subscribed!' is visible
    homePage.verifySubscriptionSuccess();
  });
});
