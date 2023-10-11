import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsShema';
import { articleDetailsCommentsReducer } from './articleDetailsComentsSlice';

describe('articleDetailsCommentsSlice.test', () => {
  test('fetch comments pending ', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending),
    ).toEqual({ isLoading: true, error: undefined });
  });
});
