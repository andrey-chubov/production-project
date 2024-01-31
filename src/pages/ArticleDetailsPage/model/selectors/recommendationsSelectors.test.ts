import { StateSchema } from '@/app/providers/StoreProvider';

import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from './recommendationsSelectors';

describe('recommendationsSelectors.test', () => {
  const state: DeepPartial<StateSchema> = {
    articleDetailsRecommendations: {
      isLoading: true,
      ids: ['1'],
      error: 'mistake',
      entities: {
        1: {
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
    },
  };

  test('should be return true', () => {
    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(true);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toEqual(
      undefined,
    );
  });
  test('should be return error ', () => {
    expect(getArticleRecommendationsError(state as StateSchema)).toBe(
      'mistake',
    );
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
      undefined,
    );
  });
});
