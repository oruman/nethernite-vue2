<script setup>
import { computed } from "vue";
import { millify } from "millify";
import { decodeHTML } from "entities";
import ItemChips from "@/components/Item/ItemChips.vue";
import ItemKeywords from "@/components/Item/ItemKeywords.vue";
import ItemLinks from "@/components/Item/ItemLinks.vue";
import { useStore } from "@/stores";
import ItemAppendChips from "@/components/Item/ItemAppendChips.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const details = computed(() => props.data);

const store = useStore();
const setItem = () => {
  store.dispatch("item/setItem", details.value);
};
</script>

<template>
  <v-card class="mb-2">
    <v-card-text>
      <v-row>
        <v-col cols="6" class="py-1 order-first">
          <v-btn link plain left class="px-0" min-width="20" @click="setItem">
            {{ details.name }}
          </v-btn>
        </v-col>
        <v-col cols="6" class="py-1 text-right order-first">
          {{ millify(details.jsDelivrHits ?? 0) }} downloads
        </v-col>
        <v-col class="py-1 order-first">
          <v-avatar tile size="24">
            <img :src="details.owner.avatar" />
          </v-avatar>
          {{ details.owner.name }}
        </v-col>
        <item-chips class="order-sm-first" :data="details" />
        <v-col cols="12" class="py-1">
          {{ decodeHTML(details.description) }}
        </v-col>
        <item-append-chips class="order-sm-first" :data="details" />
        <item-keywords :keywords="details.keywords" />
        <item-links
          class="d-flex justify-space-between justify-sm-end"
          :data="details"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>
