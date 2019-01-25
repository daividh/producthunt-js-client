import Vue from 'vue';
import Vuex from 'vuex';

import postsExplorer from '@/store/modules/postsExplorer/module';

Vue.use(Vuex);

export const POST_EXPLORER_MODULE = 'postExplorer';

export default new Vuex.Store({
  modules: {
    [POST_EXPLORER_MODULE]: postsExplorer,
  },
});
