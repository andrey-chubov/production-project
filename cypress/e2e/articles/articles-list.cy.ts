describe('Пользователь заходит на страницу  со списком статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('/articles');
    });
  });
  it('и статьи успешно подгружаються', () => {
    cy.getByTestId('ArticleInfinityList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
