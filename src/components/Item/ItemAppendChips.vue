<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <v-chip-group column>
    <v-chip small>
      Version&nbsp;<b>{{ props.data.version }}</b>
    </v-chip>
    <v-chip small>
      License&nbsp;<b>{{ props.data.license }}</b>
    </v-chip>
  </v-chip-group>
</template>
