<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal class="bg-cyan-9">
      <q-toolbar>
        <q-btn
          flat
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>ISSUE BLOG</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-if="user.id" v-model="leftDrawerOpen" show-if-above content-class="bg-grey-2">
      <q-scroll-area
        style="height: calc(100% - 250px); margin-top: 250px; border-right: 1px solid #ddd"
      >
        <q-list class="q-pa-md q-mb-lg">
          <q-item-label header>Links</q-item-label>
          <q-item
            v-for="item in links"
            clickable
            v-ripple
            tag="a"
            target="_blank"
            :key="item.index"
            :href="item.url"
          >
            <q-item-section avatar class="text-grey-10">
              <q-icon size="30px" color="cyan-9" :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-cyan-9">{{ item.title }}</q-item-label>
              <q-item-label caption style="text-decoration: underline;">
                {{ item.subTile }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 250px">
        <div class="absolute-center bg-transparent text-center" style="width: 100%;">
          <q-avatar size="80px" class="">
            <img alt="ttop5-avatar" :src="user.avatar_url" />
          </q-avatar>
          <div class="q-pt-md text-h5">{{ user.name }}</div>
          <div class="text-h5">{{ user.login }}</div>
          <div class="q-pt-sm">{{ user.bio }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="q-mb-xl">
      <router-view />
      <br />
      <br />
      <div class="absolute-bottom text-center text-grey-6">
        © {{ year }} <a class="text-grey-6" href="https://ttop5.net/issue-blog">ttop5</a>
      </div>
    </q-page-container>


    <q-page-sticky elevated reveal position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-fab
        icon="unfold_more"
        color="cyan-9"
        direction="up"
      >
        <q-fab-action icon="home" color="cyan-9" @click="$router.push('/');" />
        <q-fab-action icon="keyboard_arrow_up" color="cyan-9" @click="backToTop" />
      </q-fab>
    </q-page-sticky>

  </q-layout>
</template>

<script>
import { date } from 'quasar';
import { axiosInstance } from '../boot/axios';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      user: {},
      links: [
        {
          title: 'RSS',
          subTile: 'rsshub.app/github/issue/ttop5/blog',
          icon: 'fas fa-rss-square',
          url: 'https://rsshub.app/github/issue/ttop5/blog',
        },
        {
          title: 'Email',
          subTile: 'ttop5@qq.com',
          icon: 'fas fa-envelope',
          url: 'mailto:ttop5@qq.com',
        },
        {
          title: 'Home',
          subTile: 'ttop5.net',
          icon: 'fas fa-home',
          url: 'https://ttop5.net',
        },
        {
          title: 'GitHub',
          subTile: 'github.com/ttop5',
          icon: 'fab fa-github',
          url: 'https://github.com/ttop5',
        },
        {
          title: 'Steam',
          subTile: 'steamcommunity.com/id/ttop5',
          icon: 'fab fa-steam',
          url: 'https://steamcommunity.com/id/ttop5',
        },
        {
          title: 'DouBan',
          subTile: 'douban.com/people/ttop5',
          icon: 'img:statics/douban.svg',
          url: 'https://www.douban.com/people/ttop5',
        },
      ],
      year: date.formatDate(new Date(), 'YYYY'),
    };
  },
  methods: {
    getUserInfo() {
      axiosInstance.get(`https://api.github.com/users/${this.$store.getters.username}`)
        .then((res) => {
          this.$set(this, 'user', res.data);
        });
    },
    backToTop() {
      let timer;
      const gotoTop = () => {
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= 100;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer);
          timer = null;
        }
      };
      timer = setInterval(gotoTop, 1);
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style lang="stylus" scoped>
  .q-item__label + .q-item__label
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
  .markdown-body a:hover
    text-decoration none
</style>
