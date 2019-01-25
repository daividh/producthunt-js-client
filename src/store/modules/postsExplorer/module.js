import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  daysAgo: 0,
};

const postsExplorer = {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
};

export default postsExplorer;
