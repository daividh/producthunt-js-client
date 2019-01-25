<template>
  <div class="item">
    <figure>
      <img :src="post.screenshot_url['300px']"/>
    </figure>
    <div class="item__detail">
      <h1>{{ post.name }}</h1>
      <div class="votes">{{ post.votes_count}} {{ 'upvote' | pluralize(post.votes_count) }}</div>
      <h2>{{ post.tagline }}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>

@import '~@/assets/stylus/init-var.styl'

.item
  width: 100%
  height: 100%
  text-align: center
  background-color: white
  box-shadow: 0px 0px 7px 3px #e1dfdf

.item__detail
  padding: 10px 20px 20px 20px

.item h1
  font-size: 1.2rem;
  padding .7em;
  color: $primary

.item h2
  font-size: 1.2rem;
  padding .7em;
  color: $main

.item__detail .votes
  padding .7em;
  color : #555

figure
   width:300px
   overflow:hidden
   margin:0

figure img
   display:block
   width:100%
   margin:0px 0px -20% 0px

</style>
