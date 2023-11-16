import { User } from 'entities/User';
import { ArticleBlockType, ArticleType } from '../const/const';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleImageBlock
  | ArticleCodeBlock
  | ArticleTextBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
  user: User;
}
