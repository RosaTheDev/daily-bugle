describe('Feedback Loop login flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Should confirm that true is equal to true', () => {
    cy.get('h1').contains('The Daily Bugle')
    cy.get('.dailyPaper')
    cy.get('.dailyPaper > :nth-child(1)')
    cy.get('.dailyPaper > :nth-child(1) > a > .ViewMore').click()
    cy.get('div > img')
    cy.get('div > :nth-child(2)')
    cy.get('div > :nth-child(3)')
    cy.get('div > :nth-child(4)')
    cy.get('div > a').click()
    cy.get('.logo-img').click()
  });
});