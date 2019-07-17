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

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >

      <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 200px">
        <div class="bg-transparent text-center q-pt-sm" style="width: 100%; height: 200px;">
          <q-avatar size="80px" class="">
            <img alt="ttop5-avatar" :src="user.avatar_url" />
          </q-avatar>
          <div class="q-pt-md text-h5">{{ user.name }}</div>
          <div class="q-pt-sm">{{ user.bio }}</div>
        </div>
      </q-img>

<!--      <q-list>-->
<!--        <q-item-label header>Links</q-item-label>-->
<!--        <q-item-->
<!--          v-for="item in links"-->
<!--          clickable-->
<!--          v-ripple-->
<!--          tag="a"-->
<!--          target="_blank"-->
<!--          :key="item.index"-->
<!--          :href="item.url"-->
<!--        >-->
<!--          <q-item-section avatar class="text-grey-10">-->
<!--            <q-icon size="28px" :name="item.icon" />-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>{{ item.title }}</q-item-label>-->
<!--            <q-item-label caption>{{ item.subTile }}</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--      </q-list>-->

      <div class="absolute-bottom text-center q-pa-sm text-grey-6">© {{ year }} ttop5</div>
    </q-drawer>

    <q-page-container>
      <router-view />
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

<!--    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">-->
<!--      <q-btn fab icon="keyboard_arrow_up" color="cyan-9" />-->
<!--    </q-page-scroller>-->
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
      // links: [
      //   {
      //     title: 'Home',
      //     subTile: 'https://ttop5.net',
      //     icon: 'fas fa-home',
      //     url: 'https://ttop5.net',
      //   },
      //   {
      //     title: 'Github',
      //     subTile: 'github.com/ttop5',
      //     icon: 'fab fa-github',
      //     url: 'https://github.com/ttop5',
      //   },
      //   {
      //     title: 'Steam',
      //     subTile: 'steamcommunity.com/id/ttop5',
      //     icon: 'fab fa-steam',
      //     url: 'https://steamcommunity.com/id/ttop5',
      //   },
      //   {
      //     title: 'Douban',
      //     subTile: 'douban.com/people/ttop5',
      //     icon: 'img:statics/douban.svg',
      //     url: 'https://www.douban.com/people/ttop5',
      //   },
      // ],
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

<style>
</style>
