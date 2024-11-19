Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {

    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Ecles')
    cy.get('#email').type('victorecles98@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

}) 

Cypress.Commands.add('fillMandatoryFieldsAndSubmitContain', function() {

    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Ecles')
    cy.get('#email').type('victorecles98@gmail.com')
    cy.get('#open-text-area').type('Teste')
    
}) 