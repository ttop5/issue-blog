<template>
  <q-page v-if="postList.length !== 0" padding>
    <q-list padding class="rounded-borders" style="margin-top: -24px;">
      <Item :postList="postList" />
    </q-list>
  </q-page>
</template>

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
  watch: {
    '$route'() {
      this.getIssueList();
    },
  },
  methods: {
    getIssueList() {
      this.$q.loading.show({ delay: 250 });
      let url = `/search/issues?q=+repo:${this.$store.getters.repository}+state:open`;
      if (this.$route.query.label) {
        url += `+label:${this.$route.query.label}`;
      }
      axiosInstance.get(url)
        .then((res) => {
          this.$set(this, 'postList', res.data.items);
          this.$q.loading.hide();
        });
    },
  },
  created() {
    this.getIssueList();
  },
};
</script>

<style>
</style>
