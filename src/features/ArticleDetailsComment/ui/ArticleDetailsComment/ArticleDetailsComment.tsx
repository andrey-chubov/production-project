import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  AddCommentForm,
  CommentList,
  addCommentFormAction,
  addCommentFormReducer,
  getAddCommentFormError,
  getAddCommentFormText,
} from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { TextSize, Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';

import { getArticleCommentsIsLoading } from '../../model/selectors/articleDetailsCommentSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsComentsSlice';

export interface ArticleDetailsCommentProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
};

const ArticleDetailsComment = memo(
  ({ className, id }: ArticleDetailsCommentProps) => {
    const { t } = useTranslation('article-details');
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText) || '';
    const error = useSelector(getAddCommentFormError);

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch],
    );

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormAction.setText(value));
      },
      [dispatch],
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || '');
      onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <VStack gap="8" max className={classNames('', {}, [className])}>
          <Text size={TextSize.L} title={t('Комментарии')} />
          <AddCommentForm
            onCommentTextChange={onCommentTextChange}
            onSendHandler={onSendHandler}
            value={text}
            error={error}
          />
          <CommentList comments={comments} isLoading={isLoading} />
        </VStack>
      </DynamicModuleLoader>
    );
  },
);

export default ArticleDetailsComment;
