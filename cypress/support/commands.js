import { faker } from '@faker-js/faker';

// Comando para gerar dados de usuário
Cypress.Commands.add('generateUserData', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  
  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    password: faker.internet.password({ length: 12 }),
    firstName: firstName,
    lastName: lastName,
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number('##########')
  };
});

// Comando para gerar dados de contato
Cypress.Commands.add('generateContactData', () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    subject: faker.lorem.sentence(5),
    message: faker.lorem.paragraph(3)
  };
});

// Comando para criar usuário completo (fixture)
Cypress.Commands.add('createUser', (userData) => {
  cy.visit('/login');
  cy.get('[data-qa="signup-name"]').type(userData.name);
  cy.get('[data-qa="signup-email"]').type(userData.email);
  cy.get('[data-qa="signup-button"]').click();
  
  // Preencher formulário
  cy.get('#id_gender1').check();
  cy.get('#password').type(userData.password);
  cy.get('#days').select('15');
  cy.get('#months').select('6');
  cy.get('#years').select('1990');
  cy.get('#newsletter').check();
  cy.get('#optin').check();
  cy.get('#first_name').type(userData.firstName);
  cy.get('#last_name').type(userData.lastName);
  cy.get('#company').type(userData.company);
  cy.get('#address1').type(userData.address1);
  cy.get('#address2').type(userData.address2);
  cy.get('#country').select(userData.country);
  cy.get('#state').type(userData.state);
  cy.get('#city').type(userData.city);
  cy.get('#zipcode').type(userData.zipcode);
  cy.get('#mobile_number').type(userData.mobileNumber);
  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="account-created"]').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});

// Comando para limpar e deletar usuário se estiver logado
Cypress.Commands.add('cleanupUser', () => {
  cy.visit('/');
  cy.get('body').then(($body) => {
    if ($body.text().includes('Delete Account')) {
      cy.contains('a', 'Delete Account').click();
      cy.get('[data-qa="account-deleted"]').should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
    }
  });
});

