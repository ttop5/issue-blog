import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3.html',
  },
});

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};

export { axiosInstance };
