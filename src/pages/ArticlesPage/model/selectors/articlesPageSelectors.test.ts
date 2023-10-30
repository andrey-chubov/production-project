import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import {
  getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView,
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
  test('should return true ', () => {
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
describe('getArticlesPageInited.test', () => {
  test('should return true ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _inited: true,
      },
    };
    expect(getArticlesPageInited(state as StateSchema)).toBe(true);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageInited(state as StateSchema)).toEqual(undefined);
  });
});
describe('getArticlesPageOrder.test', () => {
  test('should return desc ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        order: 'desc',
      },
    };
    expect(getArticlesPageOrder(state as StateSchema)).toBe('desc');
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageOrder(state as StateSchema)).toBe('asc');
  });
});
describe('getArticlesPageSort.test', () => {
  test('should return sot fields ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        sort: ArticleSortField.TITLE,
      },
    };
    expect(getArticlesPageSort(state as StateSchema)).toBe(ArticleSortField.TITLE);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageSort(state as StateSchema)).toBe(ArticleSortField.CREATED);
  });
});
describe('getArticlesPageSearch.test', () => {
  test('should return search value ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        search: 'test',
      },
    };
    expect(getArticlesPageSearch(state as StateSchema)).toBe('test');
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageSearch(state as StateSchema)).toBe('');
  });
});
describe('getArticlesPageType.test', () => {
  test('should return true ', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        type: ArticleType.ECONOMY,
      },
    };
    expect(getArticlesPageType(state as StateSchema)).toBe(ArticleType.ECONOMY);
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageType(state as StateSchema)).toBe(ArticleType.ALL);
  });
});
