import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PAGE_ID } from '@/widgets/Page/Page';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/const/const';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtulized?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0)
  .map((item, index) => (<ArticleListItemSkeleton view={view} key={index} className={cls.card} />));

export const ArticleList = memo(
  ({
    className,
    articles,
    isLoading,
    target,
    virtulized = true,
    view = ArticleView.SMALL,
  }: ArticleListProps) => {
    const { t } = useTranslation('article');
    const isBig = view === ArticleView.BIG;

    if (!isLoading && !articles?.length) {
      return (
        <div className={classNames('', {}, [className, cls[view]])}>
          <Text title={t('Статьи не найдены')} size={TextSize.L} />
        </div>
      );
    }

    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
      index, key, style,
    }: ListRowProps) => {
      const items = [];
      const fromIndex = index * itemsPerRow;
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

      for (let i = fromIndex; i < toIndex; i += 1) {
        items.push(
          <ArticleListItem
            article={articles[i]}
            view={view}
            className={cls.card}
            target={target}
            key={`str${i}`}
          />,
        );
      }
      return (
        <div key={key} style={style} className={cls.row}>
          {items}
        </div>
      );
    };

    return (
      <WindowScroller
        scrollElement={document.getElementById(PAGE_ID) as Element}
      >
        {({
          width,
          height,
          registerChild,
          onChildScroll,
          isScrolling,
          scrollTop,
        }) => (
          // @ts-ignore
          <div className={classNames('', {}, [className, cls[view]])} ref={registerChild}>
            {virtulized
              ? (
                <List
                  autoHeight
                  height={height ?? 700}
                  rowCount={rowCount}
                  rowHeight={
                    isBig ? 700 : 330
                  }
                  rowRenderer={rowRender}
                  width={width ? width - 80 : 700}
                  onScroll={onChildScroll}
                  isScrolling={isScrolling}
                  scrollTop={scrollTop}
                />
              )
              : (articles.map((item) => (
                <ArticleListItem
                  article={item}
                  view={view}
                  key={item.id}
                  target={target}
                  className={cls.card}
                />
              )))}
            {isLoading && getSkeletons(view) }
          </div>
        )}
      </WindowScroller>
    );
  },
);
