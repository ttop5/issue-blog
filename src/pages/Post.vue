<template>
  <q-page v-show="post.id" padding>
    <div class="q-mb-lg">
      <h1 class="text-cyan-9">{{ post.title }}</h1>
      <code class="text-italic">
        Updated by {{ $store.getters.username }} {{ post.updated_at | timeAgo }}
      </code>
    </div>
    <div v-html="post.body_html" class="q-mt-lg" />
    <div>
      <q-chip
        v-for="label in post.labels"
        outline
        square
        clickable
        class="label"
        :key="label.index"
        :style="`border-color: #${label.color}; color: #${label.color};`"
        @click="chipClickHandler(label.name)"
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
      post: {},
    };
  },
  filters: {
    timeAgo(d) {
      return format(d);
    },
  },
  methods: {
    getIssue() {
      axiosInstance.get(`/repos/${this.$store.getters.repository}/issues/${this.$route.params.id}`)
        .then((res) => {
          this.$set(this, 'post', res.data);
          this.$q.loading.hide();
        });
    },
    chipClickHandler(labelName) {
      this.$router.push(`/?label=${labelName}`);
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
