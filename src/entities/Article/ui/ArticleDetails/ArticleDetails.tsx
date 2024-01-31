import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDepreceted } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './ArticleDetails.module.scss';

import { renderArticleBlock } from './renderBlock';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <HStack justify="center" max>
        <AvatarDeprecated
          size={200}
          src={article?.img}
          className={cls.avatar}
        />
      </HStack>
      <VStack gap="4" data-testid="ArticleDetails.Info">
        <TextDeprecated
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap="8">
          <IconDepreceted Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8">
          <IconDepreceted Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>

      {article?.blocks &&
        Object.values(article?.blocks).map((block) =>
          renderArticleBlock(block),
        )}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text text={article?.subtitle} size="l" />
      <AppImage
        fallback={<SkeletonRedesigned width="100%" height={420} border="16" />}
        src={article?.img}
        className={cls.img}
      />

      {article?.blocks &&
        Object.values(article?.blocks).map((block) =>
          renderArticleBlock(block),
        )}
    </>
  );
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  let content;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    content = (
      <>
        <HStack justify="center" max>
          <Skeleton
            width={200}
            height={200}
            border="50%"
            className={cls.avatar}
          />
        </HStack>
        <VStack gap="4" max>
          <Skeleton width={300} height={32} />
          <HStack gap="8" max>
            <Skeleton width={600} height={24} />
          </HStack>
          <HStack gap="8" max>
            <Skeleton width={200} height={200} />
          </HStack>
          <HStack gap="8" max>
            <Skeleton width="100%" height={200} />
          </HStack>
          <HStack gap="8" max>
            <Skeleton width="100%" height={200} />
          </HStack>
        </VStack>
      </>
    );
  } else if (error) {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Text
            variant="error"
            title={t('Произошла ошибка при загрузке статьи')}
            align={TextAlign.CENTER}
          />
        }
        off={
          <TextDeprecated
            theme={TextTheme.ERROR}
            title={t('Произошла ошибка при загрузке статьи')}
            align={TextAlign.CENTER}
          />
        }
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
    );
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchArticleById(id));
      }
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        gap="16"
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
