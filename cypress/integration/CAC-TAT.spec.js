/// <reference types="Cypress" /> 


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('Comando Customizado', function(){

        cy.fillMandatoryFieldsAndSubmitContain()
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')

    })

    it('Um botão', function(){

        cy.fillMandatoryFieldsAndSubmitContain()
        cy.contains('button', 'Enviar').click()
        cy.get('#product').select(4).should('have.value', 'youtube') //seleção suspensa
        cy.get('input[type="radio"][value="feedback"]').should('have.value', 'feedback') //seleção checkbox e radio button
        cy.get('.success').should('be.visible')

    })
  

    it('Selecionar botão', function(){

      cy.fillMandatoryFieldsAndSubmitContain()
      cy.contains('button', 'Enviar').click()
      cy.get('#product').select(4).should('have.value', 'youtube') //seleção suspensa
      cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        }) //seleção checkbox e radio button
      cy.get('.success').should('be.visible')

    })

    it('Upload de Arquivos', function(){

        cy.get('input[type="file"]')
          .selectFile('cypress/fixtures/example.json')
          .should(function($input){
            console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
          })

    })

  it('Upload Drag and Drop', function(){

    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json', {action: "drag-drop"})
      .should(function($input){
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })

    })

    it('Clicar outra aba', function(){

      cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('Abrir outra aba', function(){

      cy.get('#privacy a').invoke('removeAttr', 'target').click()
      cy.contains('Talking About Testing').should('be.visible')
    })
})
