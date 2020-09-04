describe('Base Testing Suite', () => {
    /**
     * This method is executed before every test
     */
    beforeEach('Basic configuration', () => {
        cy.muteXHR();
        cy.visit('/MakingSenseApps')
    })

    /**
     * Test to validate that the MakingSense's twitter page is correctly displayed
     * using the resolution of an iPhone Xr
     */
    it('iPhone Xr viewport - Visit the Making Sense\'s homepage', () => {
        cy.viewport('iphone-xr');

        cy.get('.r-1wtj0ep > .css-4rbku5 > .r-1twgtwe')
          .should('be.visible')

        cy.get('.r-1g94qm0 > :nth-child(1) > .r-1ny4l3l > .r-1awozwy > .r-jwli3a > :nth-child(1) > .css-901oao')
          .should('contain.text', 'Making Sense')

        cy.get('[data-testid=UserDescription] > .css-901oao')
          .should('be.visible')
          .and('contain.text', 'Innovative Apps and Software. We deliver custom software that our clients and their users rave about!')
    });

    /**
     * est to validate that the MakingSense's twitter page is correctly displayed
     * using the resolution of an iPhone Xr in landscape view
     */
    it('iPhone Xr viewport (landscape) - Visit the Making Sense\'s homepage', () => {
        cy.viewport('iphone-xr', 'landscape');

        cy.get('.r-1wtj0ep > .css-4rbku5 > .r-1twgtwe')
          .should('be.visible')

        cy.get('.r-1g94qm0 > :nth-child(1) > .r-1ny4l3l > .r-1awozwy > .r-jwli3a > :nth-child(1) > .css-901oao')
          .should('contain.text', 'Making Sense')

        cy.get('[data-testid=UserDescription] > .css-901oao')
          .should('be.visible')
          .and('contain.text', 'Innovative Apps and Software. We deliver custom software that our clients and their users rave about!')
    });
});