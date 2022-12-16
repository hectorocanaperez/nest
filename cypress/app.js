/* global cy */

describe('api', function() {
    it('api can be opened', function () {
      cy.visit('http://localhost:3003/transactions/todos')
      cy.contains('705ad8ae-a245-4f58-a394-05c96282b03b')
    
    })
  })