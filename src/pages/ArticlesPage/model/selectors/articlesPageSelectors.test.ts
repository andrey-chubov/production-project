import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
  getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNumber, getArticlesPageView,
} from './articlesPageSelectors';

describe('getAriclesPageIsLoading.test', () => {
  test('should return true ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toBe(true);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toBe(false);
  });
});
describe('getArticlesPageError.test', () => {
  test('should return error ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'error',
      },
    };
    expect(getArticlesPageError(state as StateSchema)).toBe('error');
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
  });
});
describe('getArticlesPageView.test', () => {
  test('should return view ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.BIG,
      },
    };
    expect(getArticlesPageView(state as StateSchema)).toBe(ArticleView.BIG);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
  });
});
describe('getArticlesPageNumber.test', () => {
  test('should return number ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 8,
      },
    };
    expect(getArticlesPageNumber(state as StateSchema)).toBe(8);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageNumber(state as StateSchema)).toBe(1);
  });
});
describe('getArticlesPageLimit.test', () => {
  test('should return number ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 8,
      },
    };
    expect(getArticlesPageLimit(state as StateSchema)).toBe(8);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageLimit(state as StateSchema)).toBe(9);
  });
});
describe('getArticlesPageHasMore.test', () => {
  test('should return number ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: true,
      },
    };
    expect(getArticlesPageHasMore(state as StateSchema)).toBe(true);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
  });
});
