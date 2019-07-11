<template>
  <q-page padding>
    <q-list dense padding class="rounded-borders">
      <Item :data="data" />
    </q-list>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="cyan-9" />
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
  methods: {
    getIssueList() {
      axiosInstance.get(`/repos/${this.$store.getters.repo}/issues`)
        .then((res) => {
          console.log(res.data);
          this.$set(this, 'data', res.data);
          this.$q.loading.hide();
        });
    },
  },
  created() {
    this.$q.loading.show({ delay: 250 });
    this.getIssueList();
  },
};
</script>
