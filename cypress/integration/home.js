describe('First test', () => {
  it('should visit home page', () => {
    cy.visit("/");
    cy.contains('Probabilities of Urban Expansion 2030')
    cy.get('[data-cy=toolbar]').first()
    cy.get('[data-cy=collapse-btn]').first().click()
    cy.wait(2000)
    cy.contains('Urban')
    cy.get('[data-cy=info-btn]').eq(1).click()
    cy.wait(2000)
    cy.get('<p>Two faith deadshot al!')
    cy.get('[data-cy=close-modal-btn]').click()
    cy.wait(2000)
    cy.get('[data-cy=visibility-btn]').eq(2).click()
    cy.wait(4000)
    cy.get('[data-cy=collapse-btn]').eq(2).click()
    cy.wait(4000)
  });
});

