<script setup>
import { computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const listTypes = {
  popular: { text: "Popular", border: "green" },
  esm: { text: "ESM", border: "blue" },
  cjs: { text: "CJS", border: "black" },
  unknown: { text: "JS", border: "yellow", color: "black" },
  styles: { text: "Styles", border: "purple" },
};

const list = computed(() => {
  const list = [];
  const data = props.data;

  if (data.popular) {
    list.push(listTypes.popular);
  }

  const moduleTypes = data.moduleTypes ?? [];
  for (let type of ["esm", "cjs"]) {
    if (moduleTypes.includes(type)) {
      list.push(listTypes[type]);
    }
  }
  if (moduleTypes.includes("unknown")) {
    list.push(listTypes.unknown);
  }

  const styleTypes = data.styleTypes ?? [];
  if (styleTypes.filter((item) => item !== "none").length) {
    list.push(listTypes.styles);
  }

  return list;
});
</script>

<template>
  <v-chip-group column>
    <v-chip
      v-for="(chip, i) of list"
      :key="i"
      outlined
      :color="chip.border"
      :text-color="chip.color ?? chip.border"
      small
    >
      {{ chip.text }}
    </v-chip>
  </v-chip-group>
</template>
