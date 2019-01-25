import actions, { SET_DAYS_AGO_ACTION } from '../actions';
import { SET_DAYS_AGO_MUTATION } from '../mutations';

describe('setDaysAgo', () => {
  // eslint-disable-next-line import/no-named-as-default-member
  const setDaysAgo = actions[SET_DAYS_AGO_ACTION];

  it('should commit setDaysAgo mutation', async () => {
    const commit = jest.fn();
    await setDaysAgo({ commit }, 4);
    expect(commit).toHaveBeenCalledWith(SET_DAYS_AGO_MUTATION, 4);
  });
});
