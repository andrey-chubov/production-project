import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProider/lib/useTheme';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div>
  );
};
