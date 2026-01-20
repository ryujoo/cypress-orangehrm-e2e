describe('My first Cypress test', () => {
  it('Visits Google homepage', () => {
    cy.visit('https://www.google.com')
    cy.contains('Google')
  })
})