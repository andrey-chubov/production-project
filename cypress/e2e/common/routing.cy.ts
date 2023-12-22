describe('Роутинг', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Переход на не существующей url', () => {
      cy.visit('/asdasdasd');
      cy.getByTestId('NotFoundPage').should('exist');
    });
    it('При переходе на закрытый роут, вернет на гланую страницу', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });
  });
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });
    it('При переходе на профиль', () => {
      cy.visit('/profile/1');
      cy.getByTestId('ProfilePage').should('exist');
    });
    it('При переходе на страницу статей', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlesPage').should('exist');
    });
  });
});
