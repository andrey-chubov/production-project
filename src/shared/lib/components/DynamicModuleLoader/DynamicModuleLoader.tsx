import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();
  const { children, reducers, removeAfterUnmount } = props;
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name]) => {
            store.reducerManager.remove(name as StateSchemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          },
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};