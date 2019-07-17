<template>
  <q-page v-if="postList.length !== 0" padding>
    <q-list padding class="rounded-borders" style="margin-top: -24px;">
      <Item :postList="postList" />
    </q-list>
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
      postList: [],
    };
  },
  methods: {
    getIssueList() {
      axiosInstance.get(`/repos/${this.$store.getters.repository}/issues`)
        .then((res) => {
          this.$set(this, 'postList', res.data);
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

<style>
</style>
