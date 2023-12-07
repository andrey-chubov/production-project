import { addCommentFormAction, addCommentFormReducer } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/comment';

describe('addCommentFromSlice.test', () => {
  test('set readonly ', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: '',
    };
    expect(
      addCommentFormReducer(state as AddCommentFormSchema, addCommentFormAction.setText('text')),
    ).toEqual({ text: 'text' });
  });
});
