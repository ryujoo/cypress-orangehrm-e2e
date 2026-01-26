describe('CI Smoke Test', () => {
  it('Logs in successfully', () => {
    cy.login('Admin', 'admin123')

    cy.url({ timeout: 15000 }).should('include', '/dashboard')
    cy.contains('Dashboard', { timeout: 15000 }).should('be.visible')
  })
})