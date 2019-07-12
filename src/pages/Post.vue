<template>
  <q-page padding>
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
  </q-page>
</template>

<script>
import { date } from 'quasar';
import { axiosInstance } from 'boot/axios';

export default {
  name: 'Post',
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getIssue() {
      axiosInstance.get(`/repos/${this.$store.getters.repo}/issues/${this.$route.params.id}`)
        .then((res) => {
          console.log(res.data);
          res.data.body_html = `
            <div class="q-mb-lg">
              <h1 class="text-cyan-9">${res.data.title}</h1>
              <code class="text-italic">
                Updated at ${this.dateFormate(res.data.updated_at)} by ${this.$store.getters.username}
              </code>
            </div>
            ${res.data.body_html}
            `;
          this.$set(this, 'data', res.data);
          this.$q.loading.hide();
        });
    },
    dateFormate(d) {
      return date.formatDate(d, 'YYYY-MM-DD');
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
