const state = {
  username: 'ttop5', // GitHub 用户名
  repository: 'blog', // 记录 issue 的仓库名
  accessToken: '5c48834d8791f766841a2838cd2efd48634e492c', // GitHub Token https://github.com/settings/tokens/new
};

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
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
