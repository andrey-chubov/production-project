import { classNames } from 'shared/lib/classNames/classNames';
import { AddCommentForm } from 'entities/Comment/ui/addCommentForm/AddCommentForm';
import {
  CommentList, addCommentFormAction, addCommentFormReducer, getAddCommentFormError, getAddCommentFormText,
} from 'entities/Comment';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsComentsSlice';
import cls from './ArticleDetailsComment.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/articleDetailsCommentSelectors';

interface ArticleDetailsCommentProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
};

const ArticleDetailsComment = memo(({
  className,
  id,
}: ArticleDetailsCommentProps) => {
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
      <div className={classNames(cls.ArticleDetailsComment, {}, [className])}>
        <AddCommentForm
          onCommentTextChange={onCommentTextChange}
          onSendHandler={onSendHandler}
          value={text}
          error={error}
        />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsComment;
