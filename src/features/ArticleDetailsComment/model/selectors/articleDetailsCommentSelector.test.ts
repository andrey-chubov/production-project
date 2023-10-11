import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './articleDetailsCommentSelectors';

describe('articleDetailsCommentSelector.test', () => {
  const state: DeepPartial<StateSchema> = {
    articleDetailsComments: {
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
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
          },
        },
      },
    },
  };

  test('should be return true', () => {
    expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(true);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  });
  test('should be return error ', () => {
    expect(getArticleCommentsError(state as StateSchema)).toBe('mistake');
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
