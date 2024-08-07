describe('template spec', () => {
  it('Faz uma pesquisa', () => {
    cy.visit('/')
    cy.get('#topsearch-text')
    .type('Xiaomi{enter}')
    cy.get('h2')
    .should('contain', 'Você está procurando: xiaomi')
    cy.get('#phone9542 > .item_movil > span')
    .should('contain', 'Xiaomi')
    cy.get('#phone9541 > .item_movil > span')
    .should('contain', 'Xiaomi')
    cy.get('#phone9421 > .item_movil > span')
    .should('contain', 'Xiaomi')
    cy.get('.big_notices > :nth-child(2) > .title_newlist_normal > .title_new')
    .should('contain', 'Xiaomi')
    cy.get('.big_notices > :nth-child(3) > .title_newlist_normal > .title_new')
    .should('contain', 'Xiaomi')
  });

  it('Faz uma pesquisa com apenas caracteres especiais', () => {
    cy.visit('/')
    cy.get('#topsearch-text')
    .type('@@##$$%%%{enter}')
    cy.get('h2')
    .should('be.visible')
    .should('contain', 'Você está procurando: @@##$$%%%')
  });
})