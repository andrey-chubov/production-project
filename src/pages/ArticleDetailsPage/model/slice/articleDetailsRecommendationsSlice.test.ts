import { fetchArticleRecommendations } from '../service/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import { articleDetailsRecommendationReducer } from './articleDetailsRecomendationsSlice';

describe('articleDetailsRecommendationsSlice.test', () => {
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

  test('fetch recommendations pending ', () => {
    const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsRecommendationReducer(
        state as ArticleDetailsRecommendationsSchema,
        fetchArticleRecommendations.pending,
      ),
    ).toEqual({ isLoading: true, error: undefined });
  });
  test('fetch recommendations fullfiled ', () => {
    const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    };
    expect(
      articleDetailsRecommendationReducer(
        state as ArticleDetailsRecommendationsSchema,
        fetchArticleRecommendations.fulfilled(data, ''),
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
    });
  });
  test('fetch articles list rejected ', () => {
    const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      articleDetailsRecommendationReducer(
        state as ArticleDetailsRecommendationsSchema,
        fetchArticleRecommendations.rejected(new Error('error'), ''),
      ),
    ).toEqual({ isLoading: false, error: undefined });
  });
});
