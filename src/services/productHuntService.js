import { getHttp } from '@/services/httpService';

const getPosts = daysAgo => new Promise((resolve, reject) => {
  const url = `/v1/posts${daysAgo > 0 ? `?days_ago=${daysAgo}` : ''}`;

  getHttp(url)
    .then((response) => {
      resolve(response.data.posts);
    })
    .catch((error) => {
      reject(error);
    });
});

export {
  // eslint-disable-next-line import/prefer-default-export
  getPosts,
};
