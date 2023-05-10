<script setup>
import { computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const links = computed(() => {
  const data = props.data;
  return {
    web: {
      link: data.homepage ?? "",
    },
    github: {
      link: data.repository.url ?? "",
    },
    npm: {
      link: `https://www.npmjs.com/package/${data.name}`,
    },
    download: {
      link: `https://registry.npmjs.org/${data.objectID}/-/${data.objectID}-${data.version}.tgz`,
    },
  };
});
</script>

<template>
  <v-col cols="12" sm="6">
    <v-btn
      v-for="(link, key) of links"
      :key="key"
      :href="link.link"
      :disabled="!link.link"
      link
      plain
      target="_blank"
    >
      <v-icon>{{ `mdi-${key}` }}</v-icon>
    </v-btn>
  </v-col>
</template>
