import { StateSchema } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebarItem';
import { getSidebarItmes } from './getSidebarItems';

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
