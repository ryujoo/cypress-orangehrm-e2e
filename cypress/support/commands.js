//import LoginPage from '../pages/LoginPage'

Cypress.Commands.add('login', (username, password) => {

  cy.visit('https://opensource-demo.orangehrmlive.com/')

  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('button[type="submit"]').click() 
})


Cypress.Commands.add('addEmployee', (employee) => {

  // Navigate to add employee page
  cy.contains('PIM').click()
  cy.contains('Add Employee').click()

  // Fill employee form
  cy.get('input[name="firstName"]').type(employee.firstName)
  cy.get('input[name="lastName"]').type(employee.lastName)

  // Save
  cy.get('form').within(() => {
    cy.contains('button', 'Save').first().should('be.enabled').click()
  })

})
