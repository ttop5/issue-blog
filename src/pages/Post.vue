<template>
  <q-page v-show="data.length !== 0" padding>
    <div class="q-mb-lg">
      <h1 class="text-cyan-9">{{ data.title }}</h1>
      <code class="text-italic">
        Updated by {{ $store.getters.username }} {{ data.updated_at | timeAgo }}
      </code>
    </div>

    <div v-html="data.body_html" class="q-mt-lg" />

    <div>
      <q-chip
        v-for="label in data.labels"
        outline
        square
        clickable
        class="label"
        :key="label.index"
        :style="`border-color: #${label.color}; color: #${label.color};`"
      >
        {{ label.name }}
      </q-chip>
    </div>

    <q-separator color="cyan-9" style="height: 1px;" />

    <Comment />
  </q-page>
</template>

<script>
import { format } from 'timeago.js';
import { axiosInstance } from 'boot/axios';
import Comment from '../components/Comment';

export default {
  name: 'Post',
  components: { Comment },
  data() {
    return {
      data: [],
    };
  },
  filters: {
    timeAgo(d) {
      return format(d);
    },
  },
  methods: {
    getIssue() {
      axiosInstance.get(`/repos/${this.$store.getters.repo}/issues/${this.$route.params.id}`)
        .then((res) => {
          console.log(res.data);
          this.$set(this, 'data', res.data);
          this.$q.loading.hide();
        });
    },
  },
  created() {
    this.$q.loading.show({ delay: 250 });
    this.getIssue();
  },
};
</script>

<style>
</style>
