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
