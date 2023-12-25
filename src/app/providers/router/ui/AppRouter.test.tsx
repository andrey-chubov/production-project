import { screen } from '@testing-library/react';

import { UserRole } from '@/entities/User';
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
} from '@/shared/const/router';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

import AppRouter from './AppRouter';

describe('app/router/AppRpoter', () => {
  test('Страница отрендерилась', async () => {
    ComponentRender(<AppRouter />, { route: getRouteAbout() });

    const page = await screen.findByTestId('AboutPage');

    expect(page).toBeInTheDocument();
  });
  test('При не верном адресcеб откроется заплатка ', async () => {
    ComponentRender(<AppRouter />, { route: '/asddsadasdas' });

    const page = await screen.findByTestId('NotFoundPage');

    expect(page).toBeInTheDocument();
  });
  test('При доступе  к закрытым роутерам не зарегестрированному пользователю перебросить на главную страницу ', async () => {
    ComponentRender(<AppRouter />, { route: getRouteAdmin() });

    const page = await screen.findByTestId('MainPage');

    expect(page).toBeInTheDocument();
  });
  test('При доступе  к профилю зарегестрированному пользователю , откроется страница профиля ', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {
            username: 'dfsd',
            id: '1',
          },
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');

    expect(page).toBeInTheDocument();
  });
  test('Доступ запрещён , отсуствует роль ', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            username: 'dfsd',
            id: '1',
            roles: [UserRole.USER],
          },
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');

    expect(page).toBeInTheDocument();
  });
  test('Доступ разрешён , присуствует роль ', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            username: 'dfsd',
            id: '1',
            roles: [UserRole.USER, UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');

    expect(page).toBeInTheDocument();
  });
});
