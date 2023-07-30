const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gcgprj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://tapsshop.pl/',
  }
});
