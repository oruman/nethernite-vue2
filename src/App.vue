<script setup>
import TopBar from "@/components/TopBar.vue";
import { useRoute } from "vue-router/composables";
import { computed, onMounted, watch } from "vue";
import { useStore } from "@/stores";
import Pagination from "@/components/PaginationBlock.vue";
import Item from "@/components/Item/ItemBlock.vue";
import ItemDetails from "@/components/Item/ItemDetails.vue";
import FooterLicense from "~/components/FooterLicense.vue";

const route = useRoute();
const store = useStore();
const setData = () => {
  store.dispatch("setParams", route.query);
};

const list = computed(() => store.state.list.list);

onMounted(() => {
  setData();
  watch(() => route.query, setData);
});
</script>

<template>
  <v-app>
    <top-bar />
    <v-main>
      <v-container fluid>
        <v-row v-for="(item, i) of list" :key="i">
          <v-col cols="12">
            <item :data="item" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <pagination />
          </v-col>
        </v-row>
      </v-container>
      <item-details />
    </v-main>
    <footer-license />
  </v-app>
</template>
