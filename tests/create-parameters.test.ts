import { createParameters } from '../src/util';

const singleParameter = { testKey: 'testValue' };
const doubleParameters = { testKey: 'testValue', testKey2: 'testValue2' };
const multipleParameters = {
  testKey: 'testValue',
  testKey2: 'testValue2',
  testKey3: 'testValue3',
};

test('Succesfully create query string with no parameters', () => {
  expect(createParameters({})).toBe('');
});

test('Succesfully create query string with 1 parameter', () => {
  expect(createParameters(singleParameter)).toBe('testKey=testValue');
});

test('Succesfully create query string with 2 parameters', () => {
  expect(createParameters(doubleParameters)).toBe(
    'testKey=testValue&testKey2=testValue2'
  );
});

test('Succesfully create query string with multiple parameters (3 or more)', () => {
  expect(createParameters(multipleParameters)).toBe(
    'testKey=testValue&testKey2=testValue2&testKey3=testValue3'
  );
});
