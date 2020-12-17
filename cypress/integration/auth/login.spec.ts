describe('Auth', () => {
  it('should display errors when no data is provided', () => {
    cy.visit('/');
    cy.get('button').click();

    cy.contains("'username' is required").should('be.visible');
    cy.contains("'password' is required").should('be.visible');
  });

  it('should display error when invalid credentials', () => {
    cy.visit('/');
    cy.get('#username').type('invalidData');
    cy.get('#password').type('invalidData');
    cy.get('button').click();

    cy.contains('invalid credentials').should('be.visible');
  });

  it('should redirect to dashboarda after login', () => {
    cy.visit('/');
    cy.get('#username').type(Cypress.env('login'));
    cy.get('#password').type(Cypress.env('password'));
    cy.get('button').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.contains('dashboard').should('be.visible');
  });

  it('should redirect already logged in users', () => {
    cy.visit('/');
    cy.intercept(
      {
        method: 'POST',
        url: 'http://localhost:3010/login',
      },
      {
        statusCode: 500,
        headers: { 'access-control-allow-origin': '*' },
        delayMs: 500,
      },
    );

    cy.get('#username').type(Cypress.env('login'));
    cy.get('#password').type(Cypress.env('password'));
    cy.get('button').click();

    cy.contains('Unexpected server error').should('be.visible');
  });
});
