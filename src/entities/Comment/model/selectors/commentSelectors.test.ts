import { StateSchema } from '@/app/providers/StoreProvider';

import {
  getAddCommentFormError,
  getAddCommentFormText,
} from './commentSelectors';

describe('commentSelectors.test', () => {
  const data = {
    text: 'test',
    error: 'error',
  };

  const state: DeepPartial<StateSchema> = {
    addCommentForm: data,
  };

  test('should be return text', () => {
    expect(getAddCommentFormText(state as StateSchema)).toBe('test');
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual('');
  });
  test('should be return error ', () => {
    expect(getAddCommentFormError(state as StateSchema)).toBe('error');
  });
  test('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
