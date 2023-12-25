import { StateSchema } from '@/app/providers/StoreProvider';

import { getCanEditArticle } from './articleSelectors';

describe('articleSelectors.test', () => {
  test('should be return true', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: 'admin',
          id: '1',
        },
      },
      articleDetails: {
        isLoading: true,
        data: {
          id: '1',
          text: 'text',
          articleId: '1',
          userId: '1',
          user: {
            id: '1',
            username: 'admin',
            // @ts-ignore
            password: '123',
            avatar:
              'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
          },
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(true);
  });
  test('should be return false if id not equal', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: 'admin',
          id: '1',
        },
      },
      articleDetails: {
        isLoading: true,
        data: {
          id: '2',
          text: 'text',
          articleId: '1',
          userId: '2',
          user: {
            id: '2',
            username: 'admin',
            // @ts-ignore
            password: '123',
            avatar:
              'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
          },
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
  test('should be return false if article undefined', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: 'admin',
          id: '1',
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
  test('should be return false if user undefined', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
        data: {
          id: '2',
          text: 'text',
          articleId: '1',
          userId: '2',
          user: {
            id: '2',
            username: 'admin',
            // @ts-ignore
            password: '123',
            avatar:
              'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
          },
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
});
