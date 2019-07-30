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
      loaded: false,
      page: 1,
      number: 30,
      total_count: '',
    };
  },
  watch: {
    '$route'() {
      this.getIssueList();
    },
  },
  mounted() {
    this.handleScroll();
  },
  methods: {
    getIssueList() {
      this.$q.loading.show({ delay: 250 });
      let url = `/search/issues?q=+repo:${this.$store.getters.repository}+state:open&page=${this.page}&per_page=${this.number}`;
      if (this.$route.query.label) {
        url += `+label:${this.$route.query.label}`;
      }
      axiosInstance.get(url)
        .then((res) => {
          this.$set(this, 'postList', res.data.items);
          this.$set(this, 'total_count', res.data.total_count);
          this.$set(this, 'loaded', true);
          this.$q.loading.hide();
        });
    },
    handleScroll() {
      const that = this;
      window.onscroll = () => {
        // 距离底部200px时加载一次
        const bottomOfWindow =
          document.documentElement.offsetHeight -
            document.documentElement.scrollTop -
            window.innerHeight <=
          200;
        if (bottomOfWindow && that.loaded && that.total_count > that.postList.length) {
          that.loadMore(that.page + 1, that.number);
        }
      };
    },
    loadMore(page, num) {
      let url = `/search/issues?q=+repo:${this.$store.getters.repository}+state:open&page=${page}&per_page=${num}`;
      if (this.$route.query.label) {
        url += `+label:${this.$route.query.label}`;
      }
      this.$set(this, 'loaded', false);
      axiosInstance.get(url)
        .then((res) => {
          this.$set(this, 'postList', this.postList.concat(res.data.items));
          this.$set(this, 'total_count', res.data.total_count);
          this.$set(this, 'loaded', true);
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
