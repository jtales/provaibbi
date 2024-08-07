describe('3 - Automation', () => {
  it('Faz uma comparação', () => {
    cy.visit('/compare')
    cy.get('[href="/compare/9149.html"] > .item > .plus').click()
    cy.get('[href="/compare/8442.html"] > .item > .plus').click()
    cy.get('#comparabtn > a').click()
    cy.get('#controles_titles > .controles > .sizecompare').should('be.visible')
    cy.get('.row_titles > :nth-child(3) > :nth-child(1)').should('have.text', 'Custo-benefício')

  });
})