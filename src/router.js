import Vue from 'vue';
import Router from 'vue-router';

const PostsExplorer = () => import('@/views/PostsExplorer');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'postsExplorer',
      component: PostsExplorer,
    },
  ],
});
