const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: 'Automation Exercise - Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    },
    
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
});
