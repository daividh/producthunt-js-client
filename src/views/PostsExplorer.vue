<template>
  <div id="page">
    <div id="page_container">
      <h1 class="is-centered is-primary title">
        ProductHunt
      </h1>
      <h2 class="is-centered is-secondary">
        The best new products, every days
      </h2>
      <div class="is-centered days-ago-selector">
          <DaysAgoSelector v-model="daysAgo" @change="onDaysAgoChange"/>
        </div>
      <div v-if="loading"
          class="loading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <div class="stats">
          <DayStats :stats="stats"/>
        </div>
        <PostsList :posts="posts"/>
      </div>
    </div>
  </div>
</template>

<script>

import DaysAgoSelector from '@/components/DaysAgoSelector.vue';
import DayStats from '@/components/DayStats.vue';
import PostsList from '@/components/PostsList.vue';
import Stats from '@/models/Stats';

import { getPosts } from '@/services/productHuntService';

import { POST_EXPLORER_MODULE } from '@/store/store';
import { SET_DAYS_AGO_ACTION } from '@/store/modules/postsExplorer/actions';
import { DAYS_AGO } from '@/store/modules/postsExplorer/getters';

export default {
  name: 'posts-exporer',
  components: {
    DaysAgoSelector,
    DayStats,
    PostsList,
  },
  data: () => ({
    loading: false,
    posts: [],
  }),
  beforeRouteEnter: async (to, from, next) => {
    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.daysAgo = to.query.days_ago;
    });
  },
  /*
   * Updating daysAgo variable from route
   * Note : This method must be in the component since
   * the router doesnt provide a beforeUpdate per-route gard
   */
  beforeRouteUpdate(to, from, next) {
    this.daysAgo = to.query.days_ago;
    next();
  },
  mounted() {
    // Setting posts from initial daysAgo
    this.setPosts(this.daysAgo);
  },
  computed: {
    daysAgo: {
      get() {
        return this.$store.getters[`${POST_EXPLORER_MODULE}/${DAYS_AGO}`];
      },
      set(daysAgo) {
        this.$store.dispatch(`${POST_EXPLORER_MODULE}/${SET_DAYS_AGO_ACTION}`, daysAgo);
      },
    },

    /* Return object for stats components */
    stats() {
      let votesCount = 0;
      let commentsCount = 0;
      let makersCount = 0;

      this.posts.forEach((post) => {
        votesCount += post.votes_count;
        commentsCount += post.comments_count;
        if (post.makers) {
          makersCount += post.makers.length;
        }
      });

      // TODO: nécéssité de retourner un nouvel objet à chaque modif ?
      return new Stats(this.posts.length, votesCount, commentsCount, makersCount);
    },
  },
  methods: {
    /* Setting posts list */
    async setPosts(daysAgo) {
      this.loading = true;

      try {
        this.posts = await getPosts(daysAgo);
      } catch (error) {
        // TODO trigger error fo user
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    onDaysAgoChange(daysAgo) {
      // Pushing the new route
      if (daysAgo !== 0) {
        this.$router.push({ name: 'postsExplorer', query: { days_ago: daysAgo } });
      } else {
        this.$router.push({ name: 'postsExplorer' });
      }

      this.setPosts(daysAgo);
    },
  },
};
</script>

<style lang="stylus" scoped>
h1
  margin-top: .5em;

h2
  font-size: 1em;

.days-ago-selector
  margin 1.7em 0

.stats
  margin 1.7em 0

.loading
  display: flex
  height: 60vh
  margin: auto
  text-align: center

.loading > p
  margin: auto
</style>
