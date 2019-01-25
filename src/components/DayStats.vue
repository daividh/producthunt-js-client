<template>
  <div class="stats_list">
    <div class="stats_list__item">
      <div class="is-primary count">{{ stats.postsCount }}</div>
      <div class="is-secondary label">{{ 'Post' | pluralize(stats.postsCount) }}</div>
    </div>
    <div class="stats_list__item">
      <div class="is-primary count">{{ stats.votesCount }}</div>
      <div class="is-secondary label">{{ 'Vote' | pluralize(stats.votesCount) }}</div>
    </div>
    <div class="stats_list__item">
      <div class="is-primary count">{{ stats.commentsCount }}</div>
      <div class="is-secondary label">{{ 'Comment' | pluralize(stats.commentsCount) }}</div>
    </div>
    <div class="stats_list__item">
      <div class="is-primary count">{{ stats.makersCount }}</div>
      <div class="is-secondary label">{{ 'Maker' | pluralize(stats.makersCount) }}</div>
    </div>
  </div>
</template>

<script>

import Stats from '@/models/Stats';

export default {
  name: 'products-stats',
  props: {
    stats: {
      type: Object,
      required: false,
      default: () => new Stats(),
      validator: newValue => newValue instanceof Stats,
    },
  },
};
</script>

<style lang="stylus" scoped>
.stats_list
  display: flex
  text-align: center
  justify-content: center

.stats_list__item
  width: 5em

.stats_list__item .count
  font-weight: bold

</style>
