import { StateSchema } from '@/app/providers/StoreProvider';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

import { getSidebarItmes } from './getSidebarItems';
import { SidebarItemType } from '../types/sidebarItem';

describe('getSidebarItems.test', () => {
  const data: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'О нас',
    },
    {
      path: getRouteProfile('1'),
      Icon: ProfileIcon,
      text: 'Профиль',
      authOnly: true,
    },
    {
      path: getRouteArticles(),
      Icon: ArticlesIcon,
      text: 'Статьи',
      authOnly: true,
    },
  ];
  const unReg: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
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
