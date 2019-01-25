import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';

import pluralize from '@/utils/pluralize';

// Global style
import '@/assets/stylus/main.styl';

Vue.config.productionTip = false;

Vue.filter('pluralize', pluralize);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
