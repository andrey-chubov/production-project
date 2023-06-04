import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum ApRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<ApRoutes, string> = {
  [ApRoutes.MAIN]: '/',
  [ApRoutes.ABOUT]: '/about',

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

};
