<template>
  <div>
    <div v-for="item in data" :key="item.index">
      <q-item clickable v-ripple>

        <q-item-section @click="toPostDetail(item.html_url)">
          <q-item-label>
            <div class="text-subtitle1 text-weight-medium">{{ item.title }}</div>
          </q-item-label>
          <q-item-label caption lines="4">{{ item.body_html | htmlToText }}</q-item-label>
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
import { openURL, date } from 'quasar';

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
    toPostDetail(url) {
      openURL(url);
    },
    chipClickHandler(labelName) {
      console.log(labelName);
    },
  },
};
</script>

<style scoped lang="stylus">
  @media (max-width: 768px)
    .label,
    .created-at
      display none
</style>
