import { fireEvent, screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  firstName: 'Андрей',
  lastName: 'Чубов',
  age: 1,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};
describe('features/EditableProfileCard', () => {
  test('readonly true', async () => {
    ComponentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(await screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });
  test('При отмене значения должны вернуться в исходное состояние', async () => {
    ComponentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(await screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(await screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(await screen.getByTestId('ProfileCard.lastname'));
    await userEvent.type(await screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(await screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Андрей');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Чубов');
  });

  test('Должна появиться ошибка', async () => {
    ComponentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(await screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(await screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(await screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(await screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('Если нет ошибок валидации то на сервер должен уйти put запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    ComponentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(await screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(await screen.getByTestId('ProfileCard.firstname'));
    await userEvent.type(await screen.getByTestId('ProfileCard.firstname'), 'user');

    await userEvent.click(await screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toBeCalled();
  });
});
