class ProductsPage {
  elements = {
    allProductsHeading: () => cy.contains('h2', 'All Products'),
    searchInput: () => cy.get('#search_product'),
    searchButton: () => cy.get('#submit_search'),
    searchedProductsHeading: () => cy.contains('h2', 'Searched Products'),
    productsList: () => cy.get('.features_items .col-sm-4'),
    subscriptionHeading: () => cy.contains('h2', 'Subscription'),
    subscriptionEmail: () => cy.get('#susbscribe_email'),
    subscriptionButton: () => cy.get('#subscribe'),
    successAlert: () => cy.get('.alert-success')
  };

  verifyAllProductsVisible() {
    this.elements.allProductsHeading().should('be.visible');
  }

  verifyProductsListVisible() {
    this.elements.productsList().should('have.length.greaterThan', 0);
  }

  searchProduct(productName) {
    this.elements.searchInput().type(productName);
    this.elements.searchButton().click();
  }

  verifySearchedProductsVisible() {
    this.elements.searchedProductsHeading().should('be.visible');
  }

  verifySearchResults() {
    this.elements.productsList().should('be.visible');
  }

  scrollToSubscription() {
    this.elements.subscriptionHeading().scrollIntoView();
  }

  verifySubscriptionVisible() {
    this.elements.subscriptionHeading().should('be.visible');
  }

  enterSubscriptionEmail(email) {
    this.elements.subscriptionEmail().type(email);
  }

  clickSubscribe() {
    this.elements.subscriptionButton().click();
  }

  verifySubscriptionSuccess() {
    this.elements.successAlert()
      .should('be.visible')
      .and('contain', 'You have been successfully subscribed!');
  }
}

export default ProductsPage;
