let profileId = '';
describe('Пользователь заходит на страничку профиля', () => {
  beforeEach(() => {
    cy.login().then((body) => {
      profileId = body.id;
      cy.visit(`profile/${body.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('профиль успешно загрузился', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Тимур');
  });
  it('и редактирует его', () => {
    const firstName = 'new';
    const lastName = 'lastname';
    cy.updateProfile(firstName, lastName);
    cy.getByTestId('ProfileCard.firstname').should('have.value', firstName);
    cy.getByTestId('ProfileCard.lastname').should('have.value', lastName);
  });
});
