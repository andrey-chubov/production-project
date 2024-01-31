import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { initArticlesPage } from './initArticlePage';

describe('initArticlesPage.test', () => {
  test('success inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    const params: DeepPartial<URLSearchParams> = {
      sort: 'sad',
    };

    const result = await thunk.callThunk(params as URLSearchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
  test('not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    const result = await thunk.callThunk({} as URLSearchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
