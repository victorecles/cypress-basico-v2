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

    Cypress._.times(5, function(){

      it('Clock e loadash', function(){

        cy.clock()
  
        const longtext = 'Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste' 
        cy.get('#firstName').type('Victor')
        cy.get('#lastName').type('Ecles')
        cy.get('#email').type('victorecles98@gmail.com')
        cy.get('#open-text-area').type(longtext)
        cy.get('button[type="submit"]').click()
  
        cy.get('.success').should('be.visible')
  
        cy.tick(3000)
        cy.get('.success').should('not.be.visible')
  
      })
    })

    it.only('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
      cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
        .invoke('hide')
        .should('not.be.visible')
      cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
    })

})
