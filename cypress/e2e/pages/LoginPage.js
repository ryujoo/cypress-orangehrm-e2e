class LoginPage {

	// Locators
	usernameField() {
		return cy.get('input[name="username"]')
	}

	passwordField() {
		return cy.get('input[name="password"]')
	}

	loginButton() {
		return cy.get('button[type="submit"]')
	}

	errorMessage() {
		return cy.contains('Invalid credentials')
	}

	requiredMessage() {
		return cy.contains('Required')
	}

	// Actions
	visit() {
		cy.visit('https://opensource-demo.orangehrmlive.com/')
	}

	typeUsername(username) {
		this.usernameField().type(username)
	}

	typePassword(password) {
		this.passwordField().type(password)
	}

	clickLogin() {
		this.loginButton().click()
	}

	login(username, password) {
		this.typeUsername(username)
		this.typePassword(password)
		this.clickLogin()
	}
}

export default new LoginPage()