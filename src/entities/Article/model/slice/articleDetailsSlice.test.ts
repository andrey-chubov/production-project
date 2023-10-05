import { ArticleDetailsShema } from '../types/articleDetailsShema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const data = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [],
  blocks: [],
};
describe('profileSlice.test', () => {
  test('fetch article by id pending ', () => {
    const state: DeepPartial<ArticleDetailsShema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsShema,
        fetchArticleById.pending,
      ),
    ).toEqual({ isLoading: true, error: undefined });
  });
  test('fetch article by id fullfiled ', () => {
    const state: DeepPartial<ArticleDetailsShema> = {
      isLoading: false,
      data,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsShema,
        fetchArticleById.fulfilled(data, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      data,
    });
  });
  test('fetch article by id rejected ', () => {
    const state: DeepPartial<ArticleDetailsShema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsShema,
        fetchArticleById.rejected,
      ),
    ).toEqual({ isLoading: false, error: undefined });
  });
});
