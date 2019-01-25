import { SET_DAYS_AGO_MUTATION } from './mutations';

export const SET_DAYS_AGO_ACTION = 'setDaysAgoAction';

export default {
  [SET_DAYS_AGO_ACTION]: ({ commit }, daysAgo) => (new Promise((resolve) => {
    commit(SET_DAYS_AGO_MUTATION, daysAgo);
    resolve();
  })),
};
