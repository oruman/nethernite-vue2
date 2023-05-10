<script setup>
import { computed } from "vue";

const props = defineProps({
  keywords: {
    type: Array,
    default: () => [],
  },
  showAll: Boolean,
});
const list = computed(() =>
  props.showAll ? props.keywords : props.keywords.slice(0, 4)
);
</script>

<template>
  <v-col cols="12" sm="6">
    Keywords
    <v-chip-group column>
      <v-chip v-for="keyword of list" :key="keyword" outlined x-small>
        {{ keyword }}
      </v-chip>
    </v-chip-group>
  </v-col>
</template>
