describe('Base Testing Suite', () => {
    
    before('Basic configuration', () => {
      cy.muteXHR();
    });
    
    it('Visit the Making Sense\'s homepage', () => {
        cy.visit('/')
        
        // Verifying that the Making Sense logo is displayed
        cy.get('#main-header > .wrapper > #logo > a > #Layer_1')
          .should('be.visible')
        
        // Verifying that the main header is displayed
        cy.get('h1')
          .should('contain.text', "Software Development  for a great User Experience")

        cy.get('.menu--show-mobile')
          .click()

        cy.get('.modal--mobile-menu > .content--table-center > :nth-child(1) > :nth-child(1) > a')
          .should('be.visible')
          .click()
          
        cy.get('h1')
          .should('contain.text', 'Our passion motivates our work')

    });
});