/// <reference types="Cypress" /> 

context('Keyboard user', () => {
  beforeEach(() => {
    cy.visit('http://192.168.1.139:8080');
  });

  describe('Move focus away from tabindex -1 element', () => {
    beforeEach(() => {
      cy.get('#title')
        .focus()
        .should('have.focus');
    });

    it('Should focus content link after tab', () => {
      cy.tab();

      cy.get('#contentLink')
        .should('have.focus');
    });

    it('Should focus skip link before tab', () => {
      cy.tab({ shift: true });

      cy.get('#skipLink')
        .should('have.focus');
    });
  });

  describe('Tab should skip -1 element', () => {
    it('Follows expected tab order', () => {
      cy.get('body')
        .tab();
  
      cy.get('#skipLink')
        .should('have.focus');
  
      cy.tab();
  
      cy.get('#contentLink')
        .should('have.focus');
    });
  });
})