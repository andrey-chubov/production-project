import { ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from '../types/ArticlesPageShema';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

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

  test('fetch articles list pending ', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.pending,
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
        fetchArticlesList.fulfilled(data, '', { page: 1 }, ''),
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
      hasMore: true,
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
        fetchArticlesList.rejected(new Error('error'), '', { page: 1 }, ''),
      ),
    ).toEqual({ isLoading: false, error: '' });
  });
});
