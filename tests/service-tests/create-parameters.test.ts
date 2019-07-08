import { createParameters } from '../../src/util/services/fetch-iex';

const SINGLE_PARAMETER = { testKey: 'testValue' };
const DOUBLE_PARAMETERS = { testKey: 'testValue', testKey2: 'testValue2' };
const MULTIPLE_PARAMETERS = {
  testKey: 'testValue',
  testKey2: 'testValue2',
  testKey3: 'testValue3',
};

test('create query string with no parameters', () => {
  expect(createParameters({})).toBe('');
});

test('create query string with 1 parameter', () => {
  expect(createParameters(SINGLE_PARAMETER)).toBe('testKey=testValue');
});

test('create query string with 2 parameters', () => {
  expect(createParameters(DOUBLE_PARAMETERS)).toBe(
    'testKey=testValue&testKey2=testValue2'
  );
});

test('create query string with multiple parameters (3 or more)', () => {
  expect(createParameters(MULTIPLE_PARAMETERS)).toBe(
    'testKey=testValue&testKey2=testValue2&testKey3=testValue3'
  );
});
