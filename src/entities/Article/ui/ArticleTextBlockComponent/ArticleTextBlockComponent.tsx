import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleTextBlockComponent.module.scss';

import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={block.title} className={cls.title} />}
          off={<TextDeprecated title={block.title} className={cls.title} />}
        />
      )}
      {block.paragraphs &&
        Object.values(block.paragraphs).map((text) => (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text text={text} className={cls.paragraph} key={text} />}
            off={
              <TextDeprecated
                text={text}
                className={cls.paragraph}
                key={text}
              />
            }
          />
        ))}
    </div>
  ),
);
