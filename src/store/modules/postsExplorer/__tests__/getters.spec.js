import getters from '../getters';

describe('daysAgo', () => {
  const state = {
    daysAgo: 6,
  };

  it('should return correct daysAgo value', () => {
    expect(getters.daysAgo(state)).toBe(6);
  });
});
