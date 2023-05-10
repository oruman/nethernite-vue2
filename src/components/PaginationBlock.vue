<script setup>
import { useStore } from "@/stores";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router/composables";

const route = useRoute();
const router = useRouter();
const store = useStore();

const maxPages = computed(() => store.state.list.pages);
const currentPage = computed(() => store.state.page + 1);

const setPage = (value) => {
  router.push({
    query: {
      ...route.query,
      p: Math.max(0, value - 1),
    },
  });
};
</script>

<template>
  <v-pagination
    v-if="maxPages > 1"
    :value="currentPage"
    :length="maxPages"
    :total-visible="5"
    prev-icon="mdi-chevron-left"
    next-icon="mdi-chevron-right"
    @input="setPage"
  />
</template>
