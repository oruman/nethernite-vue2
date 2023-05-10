<script setup>
import { computed } from "vue";
import { useStore } from "@/stores";
import ItemChips from "@/components/Item/ItemChips.vue";
import { decodeHTML } from "entities";
import ItemLinks from "@/components/Item/ItemLinks.vue";
import ItemKeywords from "@/components/Item/ItemKeywords.vue";
import ItemAppendChips from "@/components/Item/ItemAppendChips.vue";

const store = useStore();

const details = computed(() => store.state.item.item);
const dialog = computed({
  get: () => details.value,
  set: (value) => {
    if (value) {
      return;
    }
    store.dispatch("item/clearItem");
  },
});
</script>

<template>
  <v-dialog v-if="details" v-model="dialog">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>{{ details.name }}</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pt-4">
        <v-row>
          <v-col class="order-first">
            <v-avatar tile size="24">
              <img :src="details.owner.avatar" />
            </v-avatar>
            {{ details.owner.name }}
          </v-col>
          <item-chips class="order-first ml-sm-auto" :data="details" />
          <v-col cols="12" class="py-1">
            {{ decodeHTML(details.description) }}
          </v-col>
          <v-col class="py-1 order-sm-first">
            <item-append-chips :data="details" />
          </v-col>
          <v-col cols="12" class="py-0 d-sm-none">
            <v-divider />
          </v-col>
          <item-links
            cols="12"
            sm="6"
            class="d-flex justify-space-between justify-sm-end order-sm-last"
            :data="details"
          />
          <v-col cols="12" class="py-0 d-sm-none">
            <v-divider />
          </v-col>
          <item-keywords
            cols="12"
            sm="6"
            class="py-1"
            :keywords="details.keywords"
            show-all
          />
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
