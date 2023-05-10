<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "@/stores";
import { useRouter } from "vue-router/composables";
import { watchDebounced } from "@vueuse/core";

const router = useRouter();
const store = useStore();

const internalQuery = ref(store.state.query);

onMounted(() => {
  watchDebounced(
    () => store.state.query,
    (value) => {
      internalQuery.value = value;
    },
    {
      debounce: 500,
    }
  );

  watchDebounced(
    () => internalQuery.value.trim(),
    (value) => {
      if (value === store.state.query) return;
      const query = value ? { q: value } : {};
      router.push({
        query,
      });
    },
    {
      debounce: 500,
    }
  );
});
</script>

<template>
  <v-app-bar app>
    <v-container class="px-0">
      <v-row justify="center">
        <v-col md="6" sm="8" class="px-sm-0">
          <v-text-field
            v-model="internalQuery"
            prepend-inner-icon="mdi-magnify"
            placeholder="search all of npm"
            hide-details
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
