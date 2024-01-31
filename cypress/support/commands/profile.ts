export const updateProfile = (firstName: string, lastName: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstName);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastName);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (id: string) =>
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${id}`,
    headers: { authorization: 'dfsdfsd' },
    body: {
      id: '3',
      first: 'ulbi tv',
      lastname: 'asf',
      age: 465,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'testuser',
      avatar:
        'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
      firstName: 'Тимур',
      lastName: 'Ульби',
    },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string, lastName: string): Chainable<void>;
      resetProfile(id: string): Chainable<void>;
    }
  }
}
