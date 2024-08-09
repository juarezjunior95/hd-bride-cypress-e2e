const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qcpnyt',
  e2e: {
    baseUrl: "https://beta.hunterdouglas.com/",
    defaultCommandTimeout: 5000,
    viewportWidth: 1280,  // Largura do viewport em pixels
    viewportHeight: 720,  // Altura do viewport em pixels
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
