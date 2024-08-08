import elements from "../page_elements/locator_page"
import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const zipCode = faker.address.zipCode();
const phone = faker.phone.number();

export default{
    GoToVisitShowRoom() {


        //cy.visit('locator')
        cy.xpath(elements.buttons.buttonFindaShowroom)
         .click();
        cy.contains('Select a dealer')
        .should('be.visible');

    },

    clickRequestNow() {
      //  cy.visit('locator');
        cy.xpath(elements.buttons.buttonRequestNow)
         .click();
        // Verifique se algo esperado após o clique está visível (opcional)
        cy.contains(elements.messages.titleRacForm)
        .should('be.visible');
    
    },

    fillInRacform(){
        const longText = 'A'.repeat(500); // Texto com 500 caracteres
        const expectedText = longText.substring(0, 450); // Primeiros 450 caracteres
        cy.xpath(elements.fields.inputFirstName)
         .type(firstName)
       // cy.xpath(elements.fields.inputLastName)
        cy.get(elements.fields.inputLastName)
        .should('be.visible')
        .type(lastName, { force: true });
        cy.get(elements.fields.inputZipCode).type(zipCode);
         //.should('be.visible').type('10001');
        cy.get(elements.fields.inputPhone)
         .type(phone)
        cy.get(elements.fields.emailField)
         .type(email) 
        cy.get(elements.fields.textArea) 
        .type(longText)
         .invoke('val')
         .then((val) => {
        // Verificar que o comprimento do valor não excede 450 caracteres
        expect(val.length).to.be.lte(450);
        // Verificar que o valor do campo é igual aos primeiros 450 caracteres do texto longo
        expect(val).to.equal(expectedText);
        cy.get(elements.checkbox.checkboxGetService)
         .click();
        cy.get(elements.buttons.buttonSubmited)
         .click({ force: true})
         //.click({force: true});
        cy.contains(elements.messages.racFormSubmited).should('be.visible')
    });

}
}