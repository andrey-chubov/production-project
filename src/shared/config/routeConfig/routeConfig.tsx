import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbidenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/ui/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
}
export enum ApRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articles_details',
  ARTICLE_CREATE = 'articles_create',
  ARTICLE_EDIT = 'articles_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

  // last router
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<ApRoutes, string> = {
  [ApRoutes.MAIN]: '/',
  [ApRoutes.ABOUT]: '/about',
  [ApRoutes.PROFILE]: '/profile/',
  [ApRoutes.ARTICLES]: '/articles',
  [ApRoutes.ARTICLE_DETAILS]: '/articles/',
  [ApRoutes.ARTICLE_CREATE]: '/articles/new',
  [ApRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [ApRoutes.ADMIN_PANEL]: '/admin',
  [ApRoutes.FORBIDDEN]: '/forbidden',
  [ApRoutes.NOT_FOUND]: '*',
};

export const routeConfig : Record<ApRoutes, AppRoutesProps> = {
  [ApRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [ApRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [ApRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [ApRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [ApRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [ApRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articles_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [ApRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.articles_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [ApRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.articles_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [ApRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [ApRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
};
