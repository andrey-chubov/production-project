import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum ApRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<ApRoutes, string> = {
  [ApRoutes.MAIN]: '/',
  [ApRoutes.ABOUT]: '/about',
  [ApRoutes.NOT_FOUND]: '*',
};

export const routeConfig : Record<ApRoutes, RouteProps> = {
  [ApRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [ApRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [ApRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
