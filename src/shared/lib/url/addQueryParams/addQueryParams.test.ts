import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  test('test with one param ', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
  test('test with two params ', () => {
    const params = getQueryParams({
      test: 'value',
      second: 'value1',
    });
    expect(params).toBe('?test=value&second=value1');
  });
  test('test with one param is undefined ', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(params).toBe('?test=value');
  });
});
