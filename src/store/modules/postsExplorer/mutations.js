import { isNumber } from 'lodash';

export const SET_DAYS_AGO_MUTATION = 'setDaysAgo';

export default {
  [SET_DAYS_AGO_MUTATION](state, daysAgo) {
    const d = parseInt(daysAgo, 10);

    // Must be a number and between 0 and 30 inclusive
    // eslint-disable-next-line no-param-reassign
    state.daysAgo = isNumber(d) && d >= 0 && d <= 30 ? d : 0;
  },
};
