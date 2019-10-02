describe('My First Test', function() {
  it('is always true!', function() {
    expect(true).to.equal(true)
  })
})

describe('Navigation through Books module', function() {
  it('Visits the Books page', function() {
    cy.visit('http://localhost:4200/books')
  })

  it('Click on the first book', function() {
    cy.contains('Big book 1')
      .click()
    cy.url().should('include', '/books/1')
  })

  it('Go to the edit form', function() {
    cy.contains('Edit')
      .click()
    cy.url().should('include', '/books/1/edit')
  })

  it('Change the title', function() {
    cy.get('#edit-title')
      .type(' test')
      .should('have.value', 'Big book 1 test')
  })

  it('Saving', function() {
    cy.contains('Save')
      .click()

    cy.get('#edit-title')
      .should('have.value', 'Big book 1 test')
  })
})
