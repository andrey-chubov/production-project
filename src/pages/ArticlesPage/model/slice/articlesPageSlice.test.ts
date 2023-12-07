import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/ArticlesPageShema';

describe('articlesPageslice.test', () => {
  const data = [
    {
      id: '1',
      title: 'Javascript news',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 1022,
      createdAt: '26.02.2022',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        avatar:
          'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      },
      type: [],
      blocks: [],
    },
  ];
  test('set view ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      view: ArticleView.SMALL,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setView(ArticleView.BIG),
      ),
    ).toEqual({ view: ArticleView.BIG });
  });
  test('set page ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      page: 7,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setPage(8),
      ),
    ).toEqual({ page: 8 });
  });
  test('set sort ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      sort: ArticleSortField.TITLE,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setSort(ArticleSortField.VIEWS),
      ),
    ).toEqual({ sort: ArticleSortField.VIEWS });
  });
  test('set search ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      search: '',
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setSearch('test'),
      ),
    ).toEqual({ search: 'test' });
  });
  test('set order ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      order: 'asc',
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setOrder('desc'),
      ),
    ).toEqual({ order: 'desc' });
  });
  test('set type ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      type: ArticleType.ALL,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setType(ArticleType.ECONOMY),
      ),
    ).toEqual({ type: ArticleType.ECONOMY });
  });
  test('init state ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      view: ArticleView.BIG,
      limit: 4,
      _inited: false,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.initState(),
      ),
    ).toEqual({
      view: ArticleView.BIG,
      limit: 4,
      _inited: true,
    });
  });

  test('fetch articles list pending ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.pending('', { replace: false }),
      ),
    ).toEqual({ isLoading: true });
  });
  test('fetch articles list fullfiled ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      ids: [],
      entities: {},
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.fulfilled(data, '', { replace: false }, ''),
      ),
    ).toEqual({
      isLoading: false,
      ids: ['1'],
      entities: {
        1: {
          id: '1',
          title: 'Javascript news',
          subtitle: 'Что нового в JS за 2022 год?',
          img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
          views: 1022,
          createdAt: '26.02.2022',
          user: {
            id: '1',
            username: 'admin',
            password: '123',
            avatar:
              'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
          },
          type: [],
          blocks: [],
        },
      },
      hasMore: false,
    });
  });
  test('fetch articles list rejected ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.rejected(new Error('error'), '', { replace: false }, ''),
      ),
    ).toEqual({ isLoading: false, error: '' });
  });
});
