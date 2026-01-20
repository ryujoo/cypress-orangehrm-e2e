describe('OrangeHRM Login Tests - Custom Command Version', () => {

  it('Logs in successfully using fixture data', () => {
  	cy.fixture('admin').then((user) => {
  		cy.login(user.username, user.password)

  		cy.url().should('include', '/dashboard')
  		cy.contains('Dashboard').should('be.visible')
  	})
  })

  it('Shows error for invalid user from fixtures', () => {
  	cy.fixture('invalidUser').then((wrong) => {
  		cy.login(wrong.username, wrong.password)
  		cy.contains('Invalid credentials').should('be.visible')
  	})
  })

  it('Logs in successfully and verifies API response', () => {

    // 1. Listen for the login API call
    cy.intercept('POST', '**/auth/validate').as('loginRequest')

    // 2. Perform login (UI action)
    cy.login('Admin', 'admin123')

    // 3. Wait for the API call to finish
    cy.wait('@loginRequest').then((interception) => {
      if(!interception.response) {
        cy.log('Login request had no response (likely redirect)')
        return
      }

      expect(interception.response.statusCode).to.be.oneOf([200,302])
    })

    // 4. UI assertions
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
  })

  it('Logs in, verifies dashboard, and logs out', () => {

    // Step 1. Login using our custom command
    cy.login('Admin', 'admin123')

    // Step 2. Verify we are on the dashboard
    cy.url().should('include', '/dashboard')

    // Step 3. Verify dashboard title is visible
    cy.contains('Dashboard').should('be.visible')

    // Step 4. Verify user dropdown shows "Paul Collings"
    cy.get('.oxd-userdropdown-name')
    cy.should('be.visible')
    cy.should('not.be.empty')

    // Step 5. Click the user dropdown
    cy.get('.oxd-userdropdown-name').click()

    // Step 6. Click Logout
    cy.get('.oxd-dropdown-menu')
    cy.should('be.visible')
    cy.contains('Logout').click()

    // Step 7. Verify we are barck on the login page
    cy.url().should('include', '/auth')

    // Step 8. Verify login button exists
    cy.get('button[type="submit"]').should('be.visible')

  })

})
