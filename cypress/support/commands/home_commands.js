import elements from "../page_elements/home_page"

export default{
    GoToHome() {


        cy.visit('/')
        cy.get('img[alt="alt text"]').should('be.visible');
        cy.get('a.pl-1.underline[href="/locator"]').click();
        cy.url().should('include', '/locator')
        cy.wait(5000)
    }
}