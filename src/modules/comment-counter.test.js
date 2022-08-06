import commentCounter from './comment-counter.js';

describe('add test functions', () => {
  test('counts the items', () => {
    expect(typeof commentCounter).toBe('function');
  });
  test('counts the items', () => {
    expect(commentCounter([8, 9, 0])).toBe(3);
  });
});