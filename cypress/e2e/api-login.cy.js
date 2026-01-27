describe('API Login Test', () => {
	it('Logs in successfully via API', () => {
		cy.request({
			method: 'POST',
			url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
			form: true,
			body: {
				username: 'Admin',
				password: 'admin123'
			}
		}).then((response) => {
			expect(response.status).to.eq(200)
		})
	})
})