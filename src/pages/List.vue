<template>
  <q-page padding>
    <q-list dense bordered padding class="rounded-borders">
      <Item :data="data" />
    </q-list>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<style>
</style>

<script>
import { axiosInstance } from 'boot/axios';
import Item from '../components/Item';

export default {
  name: 'List',
  components: { Item },
  data() {
    return {
      data: [],
    };
  },
  computed: {
  },
  methods: {
    getIssues() {
      axiosInstance.get(`/repos/${this.$store.getters.repo}/issues`)
        .then((res) => {
          this.$set(this, 'data', res.data);
        });
    },
  },
  created() {
    this.getIssues();
  },
};
</script>
