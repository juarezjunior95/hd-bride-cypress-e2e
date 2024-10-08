// cypress/e2e/locator.cy.js

import locatorCommands from '../support/commands/locator_commands';

describe('Locator Page Tests', () => {
    beforeEach(() => {
        cy.visit('locator');
    });

    it('should click the Find a Showroom button', () => {
        locatorCommands.GoToVisitShowRoom();
    });

    it('should click the Request Now button', () => {
        locatorCommands.clickRequestNow();
    });
    it.only('Fill in All fields Rac Form', () =>{
        locatorCommands.clickRequestNow();
        locatorCommands.fillInRacform();
    })
});
