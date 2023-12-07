import { StateSchema } from '@/app/providers/StoreProvider';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { RoutePath } from '@/shared/const/router';

import { getSidebarItmes } from './getSidebarItems';
import { SidebarItemType } from '../types/sidebarItem';

describe('getSidebarItems.test', () => {
  const data: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О нас',
    },
    {
      path: `${RoutePath.profile}1`,
      Icon: ProfileIcon,
      text: 'Профиль',
      authOnly: true,
    },
    {
      path: RoutePath.articles,
      Icon: ArticlesIcon,
      text: 'Статьи',
      authOnly: true,
    },
  ];
  const unReg: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О нас',
    },
  ];

  test('should be return all sidebarList', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
        },
      },
    };
    expect(getSidebarItmes(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSidebarItmes(state as StateSchema)).toEqual(unReg);
  });
});
