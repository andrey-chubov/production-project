import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlePage';

describe('initArticlesPage.test', () => {
  test('success inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,

      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
  });
  test('not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,

      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
