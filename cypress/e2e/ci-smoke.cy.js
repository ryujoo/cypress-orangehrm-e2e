describe('CI Smoke Test', () => {
  it('Logs in and logs out successfully', () => {
    // Login
    cy.login('Admin', 'admin123')

    // Assert Dashboard loaded
    cy.url({ timeout: 15000 }).should('include', '/dashboard')
    cy.contains('Dashboard', { timeout: 15000 }).should('be.visible')
    cy.get('.oxd-sidepanel', { timeout: 15000 }).should('be.visible')

    // Open user dropdown
    cy.get('.oxd-userdropdown-name', { timeout: 15000 }).click()

    // Click Logout
    cy.contains('Logout', { timeout: 15000}).click()

    // Assert redirected to login page
    cy.url({ timeout: 150000}).should('include', '/auth/login')
    cy.contains('Login', { timeout: 15000 }).should('be.visible')
  })
})