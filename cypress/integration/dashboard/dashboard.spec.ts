describe('Dashboard', () => {
  it('should show money when clicked', () => {
    cy.login();
    cy.visit('/');
    cy.contains('Show me money').click();

    cy.contains("Here's my money");
  });
});
