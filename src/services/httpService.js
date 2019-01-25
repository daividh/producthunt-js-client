import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_PRODUCT_HUNT_API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common.Authorization = process.env.VUE_APP_API_TOKEN;

console.log(`API Server URL : ${axios.defaults.baseURL}`);

const getHttp = (URL, params/* , options */) => axios({
  method: 'get',
  url: URL,
  params,
});

const postHttp = (URL, data/* , options */) => axios({
  method: 'post',
  url: URL,
  data,
  headers: {
    Accept: 'application/json',
    Host: 'api.producthunt.com',
  },
});

const deleteHttp = (URL, data/* , options */) => axios({
  method: 'delete',
  url: URL,
  data,
});

export {
  getHttp, postHttp, deleteHttp,
};
