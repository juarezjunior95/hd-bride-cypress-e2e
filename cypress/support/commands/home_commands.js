import elements from "../page_elements/home_page"

export default{
    GoToHome() {


        cy.visit('/')
        cy.get(elements.fields.inputById, { timeout: 10000 }).should('be.visible').type('90001')
        // Verificar se o valor foi digitado corretamente
        //cy.get('#\\:r2\\:').should('have.value', '90001')
        cy.get('button[type="submit"]').click({ force: true})
        cy.wait(5000)
    }
}