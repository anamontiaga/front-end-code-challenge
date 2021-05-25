describe('Manage legends', () => {
  it('should manage all home screen features', () => {
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
    // cy.get('[data-cy=drag-container]').eq(3)
    //   .trigger('mousemove', 'top', { force: true })
    cy.get('[data-cy=collapse-btn]').last().click()
    cy.wait(2000)
    cy.get('[data-cy=slider-range]').first().click()
      .trigger("mousedown", { button: 0 }, { force: true })
      .trigger("mousemove", 200, -200, { force: true })
    cy.wait(4000)

  });
});

