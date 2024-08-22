// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands/home_page_commands'
//import './locator_page_commands'
require('cypress-plugin-xhr-toggle');
require('cypress-xpath');
import '@shelex/cypress-allure-plugin';
import './commands/home_commands'
import './commands/locator_commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que erros não capturados falhem o teste
    return false
  })
  
// Alternatively you can use CommonJS syntax:
// require('./commands')