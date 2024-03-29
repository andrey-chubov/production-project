import { Suspense, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getUserInited, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/SideBar';

import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<PageLoader />}
        on={
          <div
            id="app"
            className={classNames(
              'app_redesigned',
              { hovered: true, selected: false },
              [theme],
            )}
          >
            <AppLoaderLayout />
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div
          id="app"
          className={classNames('app', { hovered: true, selected: false }, [
            theme,
          ])}
        >
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div
          id="app"
          className={classNames(
            'app_redesigned',
            { hovered: true, selected: false },
            [theme],
          )}
        >
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
            />
          </Suspense>
        </div>
      }
    />
  );
};
