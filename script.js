//your code here
it("should have required fields", () => {
  cy.get("input#name").should('have.attr', 'required');
  cy.get("input#dob").should('have.attr', 'required');
  cy.get("input#email").should('have.attr', 'required');
  cy.get("input#age").should('have.attr', 'required');
  cy.get("input#password").should('have.attr', 'required');
  cy.get("input[name='gender']").should('not.have.attr', 'required');
});

it("should have a submit button", () => {
  cy.get("input[type='submit']");
});

it("should have the correct form method", () => {
  cy.get("form").should('have.attr', 'method').and('oneOf', ['post', 'POST']);
});

it("should have the correct form elements", () => {
  cy.visit(baseUrl + "/main.html");
  cy.get('form').within(() => {
    cy.get("input#name");
    cy.get("label[for='name']");
    cy.get("input#dob");
    cy.get("label[for='dob']");
    cy.get("input#email");
    cy.get("label[for='email']");
    cy.get("input#age");
    cy.get("label[for='age']");
    cy.get("input#password");
    cy.get("label[for='password']");
    cy.get("select#laptop");
    cy.get("label[for='laptop']");
    cy.get("input[name='gender']").should('have.length', 2);
    cy.get("input[type='submit']");
    cy.get("input[type='url']#portfolio");
    cy.get("label[for='portfolio']");
  });
});

