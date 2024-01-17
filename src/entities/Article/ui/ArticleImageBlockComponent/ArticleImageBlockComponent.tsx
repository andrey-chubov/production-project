import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';

import cls from './ArticleImageBlockComponent.module.scss';

import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
  className,
  block,
}: ArticleImageBlockComponentProps) => (
  <div className={classNames('', {}, [className])}>
    <img src={block.src} className={cls.image} alt={block.title} />
    {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
  </div>
);
