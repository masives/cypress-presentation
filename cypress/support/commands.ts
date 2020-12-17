/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login: () => void;
    }
  }
}

Cypress.Commands.add('login', () => {
  return fetch('http://localhost:3010/login', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: Cypress.env('login'),
      password: Cypress.env('password'),
    }),
  })
    .then((res) => res.text())
    .then((authToken) => {
      if (typeof authToken === 'string') {
        window.localStorage.setItem('authToken', authToken);
      }
    });
});

// without any export or import ts will ignore global type declaration
export {};
