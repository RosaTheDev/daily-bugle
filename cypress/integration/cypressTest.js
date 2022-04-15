describe('Feedback Loop login flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Should confirm that true is equal to true', () => {
    cy.get('h1').contains('The New York Times')
    cy.get('.newsContainer')
    cy.get(':nth-child(1) > .card > a > button').click()
    cy.get('div > img')
    cy.get('div > :nth-child(2)')
    cy.get('div > :nth-child(3)')
    cy.get('div > :nth-child(4)')
    cy.get('a').click()
  });
});