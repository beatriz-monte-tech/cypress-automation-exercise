// Import commands.js
import './commands';

// Import cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';

// Configurações globais
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Before each test
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

// After each test
afterEach(function() {
  if (this.currentTest.state === 'failed') {
    cy.screenshot(`${this.currentTest.title} - FAILED`);
  }
});
