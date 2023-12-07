import { uiActions, uiReducer } from './UISlice';
import { UISchema } from '../types/UISchema';

describe('uiSlice.test', () => {
  test('set scroll position ', () => {
    const state: DeepPartial<UISchema> = {
      scroll: {
        '/articles': 400,
      },
    };
    expect(
      uiReducer(
        state as UISchema,
        uiActions.setScrollPosition({ path: '/articles', position: 500 }),
      ),
    ).toEqual({ scroll: { '/articles': 500 } });
  });
});
