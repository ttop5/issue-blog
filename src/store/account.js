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
  gitHubUser: null,
  gitHubUsername: 'ttop5',  // GitHub 账号
  copyright: '2019',
  recordNumber: '蜀ICP备17023604号',  // 备案编号
  repo: 'ttop5/blog',  // 记录 Issue 的仓库的全名「用户名/仓库名」
  pageSize: 10,  // 博客列表每页显示多少条博客
  showQQGroup: true,  // 如果要显示你自己的 QQ 群二维码图片的话这里配置成 true 并且替换「BGAIssueBlog-Web/static/img/qq-group.png」为你自己的 QQ 群二维码图片，否则配置成 false 即可
  thirdPartySite: [  // 配置你想在左上角展示的第三方站点信息
    {
      img: 'static/img/github.png',  // 第三方站点图标，存放在「BGAIssueBlog-Web/static/img」目录中
      url: 'https://github.com/bingoogolapple'  // 第三方站点的 url
    },
    {
      img: 'static/img/weibo.png',
      url: 'http://weibo.com/bingoogol'
    },
    {
      img: 'static/img/git.png',
      url: 'https://bingoogolapple.gitbooks.io/bgalearningnotes-git/content'
    }
    // 如果还有其他站点需要显示，继续在这里追加
  ]
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
  gitHubUsername (state) {
    return state.gitHubUsername
  },
  copyright (state) {
    return `${state.copyright} ${state.gitHubUsername}`
  },
  recordNumber (state) {
    return state.recordNumber
  },
  repo (state) {
    return state.repo
  },
  gitHubUser (state) {
    return state.gitHubUser
  },
  showQQGroup (state) {
    return state.showQQGroup
  },
  thirdPartySite (state) {
    return state.thirdPartySite
  },
  pageSize (state) {
    return state.pageSize
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
