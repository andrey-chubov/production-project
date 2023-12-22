let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((data) => {
      currentArticleId = data.id;
      cy.visit(`articles/${data.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it('и видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('и видит рекоммендации', () => {
    cy.getByTestId('ArticleRecommendationList').should('exist');
  });
  it('оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('Ставит оценку', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feddback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
