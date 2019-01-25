import mutations, { SET_DAYS_AGO_MUTATION } from '../mutations';

describe('setDaysAgo', () => {
  const initialState = {
    daysAgo: 0,
  };

  let state = {};
  // eslint-disable-next-line import/no-named-as-default-member
  const setDaysAgo = mutations[SET_DAYS_AGO_MUTATION];

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should set value if daysAgo is between 0 and 30 (inclusive)', () => {
    Array.from(Array(31).keys()).forEach((i) => {
      setDaysAgo(state, i);
      expect(state.daysAgo).toBe(i);
    });
  });

  it('should set 0 if daysAgo is negative', () => {
    setDaysAgo(state, -1);
    expect(state.daysAgo).toBe(0);
  });

  it('should set 0 if daysAgo is > 30', () => {
    setDaysAgo(state, 31);
    expect(state.daysAgo).toBe(0);
  });

  it('should set 0 if daysAgo is not a potential number', () => {
    setDaysAgo(state, { a: 1 });
    expect(state.daysAgo).toBe(0);
    setDaysAgo(state, undefined);
    expect(state.daysAgo).toBe(0);
    setDaysAgo(state, null);
    expect(state.daysAgo).toBe(0);
  });
});
