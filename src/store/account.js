import config from '../../config';

const state = config;

const getters = {
  username(s) {
    return s.username;
  },
  repository(s) {
    return `${s.username}/${s.repository}`;
  },
  accessToken(s) {
    return s.accessToken;
  },
  blogName(s) {
    return s.blogName;
  },
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
