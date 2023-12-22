describe('Пользователь заходит на страницу  со списком статей', () => {
  describe(
    'Используем реальный апи',
    () => {
      beforeEach(() => {
        cy.login().then((data) => {
          cy.visit('/articles');
        });
      });
      it('и статьи успешно подгружаються', () => {
        cy.getByTestId('ArticleInfinityList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
      });
      it.skip('Пример пропуска теста', () => {
        cy.getByTestId('ArticleInfinityList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.get('xcvxcvxcvx').should('exist');
      });
    },
  );
  describe('Используем стабы', () => {
    it('На стабах (фикстурах)', () => {
      cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
      cy.getByTestId('ArticleInfinityList').should('exist');
      cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
  });
});
