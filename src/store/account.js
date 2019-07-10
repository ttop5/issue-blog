/* eslint-disable */
import { makeAction } from './util'

const SET_GITHUB_USER = 'SET_GITHUB_USER'
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
const SET_TOKEN_USER = 'SET_TOKEN_USER'
const LS_KEY_ACCESS_TOKEN = 'LS_KEY_ACCESS_TOKEN'

const state = {
  accessToken: localStorage.getItem(LS_KEY_ACCESS_TOKEN),
  auth: {
    proxy: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
    clientID: 'dec68244d95c04b9d7ec',   // https://github.com/settings/applications/new 中新建的 OAuth application 的 Client ID
    clientSecret: '86f37e86eaaa9f38f1462575fa1d2f950dfc3450'  // https://github.com/settings/applications/new 新建的 OAuth application 的 Client Secret
  },
  username: 'ttop5',  // GitHub 账号
  repo: 'ttop5/blog',  // 记录 Issue 的仓库的全名「用户名/仓库名」
}

const mutations = {
  [SET_GITHUB_USER] (state, gitHubUser) {
    state.gitHubUser = gitHubUser
  },
  [SET_ACCESS_TOKEN] (state, accessToken) {
    state.accessToken = accessToken
    localStorage.setItem(LS_KEY_ACCESS_TOKEN, accessToken)
  },
  [SET_TOKEN_USER] (state, tokenUser) {
    state.tokenUser = tokenUser
  }
}

const actions = {
  setGitHubUser: makeAction(SET_GITHUB_USER),
  setAccessToken: makeAction(SET_ACCESS_TOKEN)
}

const getters = {
  username (state) {
    return state.username
  },
  repo (state) {
    return state.repo
  },
  gitHubUser (state) {
    return state.gitHubUser
  },
  auth (state) {
    return state.auth
  },
  accessToken (state) {
    return state.accessToken
  },
  loginLink (state) {
    const query = {
      client_id: state.auth.clientID,
      redirect_uri: location.href,
      scope: 'public_repo'
    }

    const queryString = Object.keys(query)
      .map(key => `${key}=${encodeURIComponent(query[key] || '')}`)
      .join('&')

    return `http://github.com/login/oauth/authorize?${queryString}`
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
