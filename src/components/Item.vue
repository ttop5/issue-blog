<template>
  <div>
    <div v-for="item in data" :key="item.index">
      <q-item clickable v-ripple class="q-mt-md">

        <q-item-section @click="toPostDetail(item.number)">
          <q-item-label>
            <div class="text-h6 text-cyan-9">{{ item.title }}</div>
          </q-item-label>
          <q-item-label lines="4" class="text-body1 text-gray-light">
            {{ item.body_html | htmlToText }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-chip
            v-for="label in item.labels"
            dense
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
        </q-item-section>

        <q-item-section side top class="q-pt-sm created-at">
          <q-item-label caption>{{ item.created_at | dateFormate }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </div>
  </div>
</template>

<script>
import { date } from 'quasar';

export default {
  name: 'Item',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  filters: {
    dateFormate(d) {
      return date.formatDate(d, 'YYYY-MM-DD');
    },
    htmlToText(h) {
      return h.replace(/<\/?.+?>/g, '');
    },
  },
  methods: {
    toPostDetail(id) {
      this.$router.push(`/posts/${id}`);
    },
    chipClickHandler(labelName) {
      console.log(labelName);
    },
  },
};
</script>

<style scoped lang="stylus">
  .markdown-body hr
    height unset

  @media (max-width 767px)
    .label,
    .created-at
      display none
</style>
