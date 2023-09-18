import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum ApRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  // last router
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<ApRoutes, string> = {
  [ApRoutes.MAIN]: '/',
  [ApRoutes.ABOUT]: '/about',
  [ApRoutes.PROFILE]: '/profile',
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
  [ApRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [ApRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
