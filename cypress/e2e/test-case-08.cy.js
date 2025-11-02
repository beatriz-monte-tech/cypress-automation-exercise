/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import ProductsPage from '../support/pages/ProductsPage';

describe('Test Case 8: Verify All Products and product detail page', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  it('Should display all products and navigate to product detail', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click on 'Products' button
    homePage.clickProducts();
    
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');
    productsPage.verifyAllProductsVisible();
    
    // 5. The products list is visible
    productsPage.verifyProductsListVisible();
    
    // 6. Click on 'View Product' of first product
    cy.get('.choose a').first().click();
    
    // 7. User is landed to product detail page
    cy.url().should('include', '/product_details');
    
    // 8. Verify that detail is visible: product name, category, price, availability, condition, brand
    cy.get('.product-information h2').should('be.visible'); // Product name
    cy.get('.product-information p').contains('Category').should('be.visible');
    cy.get('.product-information span span').should('be.visible'); // Price
    cy.get('.product-information p').contains('Availability').should('be.visible');
    cy.get('.product-information p').contains('Condition').should('be.visible');
    cy.get('.product-information p').contains('Brand').should('be.visible');
  });
});
