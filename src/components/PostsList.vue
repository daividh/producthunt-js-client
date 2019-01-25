<template>
  <div class="posts_list">
    <div  v-for="post in posts" :key="post.id"
          class="posts_list__item">
      <a :href="post.discussion_url"
          target="_blank">
          <Post :post="post" />
      </a>
    </div>
  </div>
</template>

<script>

import Post from '@/components/Post.vue';

export default {
  name: 'post-list',
  components: {
    Post,
  },
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped>

.posts_list
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-content: space-between;

.posts_list > *
  margin-bottom: 27px;

.posts_list__item
  width: 300px
  box-shadow: 0px 0px 7px 3px #e1dfdf

</style>
