import { countItems } from './modules/showitem.js';

// const seriesEntries = ['1', '2', '3'];

describe('add test functions', () => {
  test('counts the items', () => {
    expect(countItems(['1', '2', '3'])).toBe(3);
  });
  test('counts the items', () => {
    expect(countItems('Nick hataki nibembelezwe')).not.toBeDefined();
  });
  test('counts the items', () => {
    expect(countItems([8, 9, 0])).toBe(3);
  });
});
