import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList.test', () => {
  test('success fetch articles list', async () => {
    const data = {
      articlesPage: {
        isLoading: false,
        ids: ['1'],
        page: 1,
        limit: 5,
        hasMore: true,
        entities: {
          1: {
            id: '1',
            text: 'text',
            articleId: '1',
            userId: '1',
            user: {
              id: '1',
              username: 'admin',
              password: '123',
              avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
          },
        },
      },
    };
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {
        page: 1,
        ids: [],
        isLoading: false,
        entities: {},
        limit: 5,
        hasMore: true,

      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk({ replace: false });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch comments', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ replace: false });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
