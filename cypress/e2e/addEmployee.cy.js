describe('Add Employee E2E Test', () => {

	it('Adds a new employee succesfully', () => {

		// Login
		cy.fixture('admin').then((admin) => {
			cy.login(admin.username, admin.password)
		})

		// Add employee
		cy.fixture('employee').then((employee) => {
			cy.addEmployee(employee)

		})

		// Assertions 
		cy.url().should('include', '/pim')
		cy.contains('Personal Details', { timeout: 10000 }).should('be.visible')
	})
})