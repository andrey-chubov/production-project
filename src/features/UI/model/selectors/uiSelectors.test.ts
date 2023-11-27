import { StateSchema } from '@/app/providers/StoreProvider';
import { ScrollSchema } from '../types/UISchema';
import { getUIScroll, getUIScrollByPath } from './uiSelectors';

const scroll: ScrollSchema = {
  '/articles': 400,
};

const path: string = '/articles';

describe('uiSelectors.test', () => {
  test(' should return scroll ', () => {
    const state: DeepPartial<StateSchema> = {
      ui: {
        scroll: {
          '/articles': 400,
        },
      },
    };
    expect(getUIScroll(state as StateSchema)).toEqual(scroll);
  });
  test(' should return position by path ', () => {
    const state: DeepPartial<StateSchema> = {
      ui: {
        scroll: {
          '/articles': 400,
        },
      },
    };
    expect(getUIScrollByPath(state as StateSchema, path)).toBe(400);
  });
});
