export default class Stats {
  constructor(postsCount = 0, votesCount = 0, commentsCount = 0, makersCount = 0) {
    this.postsCount = postsCount;
    this.votesCount = votesCount;
    this.commentsCount = commentsCount;
    this.makersCount = makersCount;
  }
}
