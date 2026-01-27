describe('CI Smoke Test', () => {
  it('Logs in successfully', () => {
    cy.login('Admin', 'admin123')

    // Dashboard loade
    cy.url({ timeout: 15000 }).should('include', '/dashboard')
    cy.contains('Dashboard', { timeout: 15000 }).should('be.visible')

    // Sidebar exists (critical app shell check)
    cy.get('.oxd-sidepanel', { timeout: 15000 }).should('be.visible')
  })
})