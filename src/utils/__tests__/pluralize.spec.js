import pluralize from '../pluralize';

test('should not pluralize', () => {
  expect(pluralize('vote', 1)).toBe('vote');
});

test('should pluralize', () => {
  expect(pluralize('vote', 2)).toBe('votes');
});
