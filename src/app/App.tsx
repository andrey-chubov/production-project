import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProider/lib/useTheme';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { userAction } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userAction.initeAuthData());
  }, [dispatch]);

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
