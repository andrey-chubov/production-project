import { Suspense, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getUserInited, userAction } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/SideBar';

import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userAction.initeAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>

    </div>
  );
};
