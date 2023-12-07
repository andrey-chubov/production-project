import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticleRecommendations } from './fetchArticleRecommendations';

describe('fetchArticleRecommendations.test', () => {
  test('success fetch articles recommendations', async () => {
    const data = {
      articleDetailsRecommendations: {
        isLoading: false,
        ids: ['1'],
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
    const thunk = new TestAsyncThunk(fetchArticleRecommendations, {
      articleDetailsRecommendations: {
        ids: [],
        isLoading: false,
        entities: {},
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch recommendations', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
