// Import commands
import './commands';

// Import cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';

// Prevenir falhas por exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Before each test
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
