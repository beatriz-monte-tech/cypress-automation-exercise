/// <reference types="cypress" />

import HomePage from '../support/pages/HomePage';
import ProductsPage from '../support/pages/ProductsPage';

describe('Test Case 9: Search Product', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  
  const searchTerm = 'Blue Top';

  it('Should search for a product successfully', () => {
    // 1. Launch browser and Navigate to url
    homePage.visit();
    
    // 2. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();
    
    // 3. Click on 'Products' button
    homePage.clickProducts();
    
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');
    productsPage.verifyAllProductsVisible();
    
    // 5. Enter product name in search input and click search button
    productsPage.searchProduct(searchTerm);
    
    // 6. Verify 'SEARCHED PRODUCTS' is visible
    productsPage.verifySearchedProductsVisible();
    
    // 7. Verify all the products related to search are visible
    productsPage.verifySearchResults();
    cy.get('.features_items .productinfo p').should('contain', searchTerm);
  });
});
