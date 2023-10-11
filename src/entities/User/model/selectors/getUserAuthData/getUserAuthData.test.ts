import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  test('should be return authData', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ id: '1' });
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
