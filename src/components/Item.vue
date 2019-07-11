<template>
  <div>
    <div v-for="item in data" :key="item.index">
      <q-item
        clickable
        v-ripple
        tag="a"
        target="_blank"
        :href="item.html_url"
      >
        <q-item-section>
          <q-item-label class="flex justify-between">
            <div class="text-subtitle1 text-weight-medium">{{ item.title }}</div>
            <div>
              <q-chip
                v-for="label in item.labels"
                dense
                outline
                square
                class="label"
                :key="label.index"
                :style="`border-color: #${label.color}; color: #${label.color}; z-index: 1024;`"
              >
                {{ label.name }}
              </q-chip>
            </div>
          </q-item-label>
          <q-item-label caption lines="4">{{ item.body_html | htmlToText }}</q-item-label>
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
};
</script>

<style scoped lang="stylus">
  @media (max-width: 768px)
    .label,
    .created-at
      display none
</style>
