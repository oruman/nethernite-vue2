import Vue from "vue";
import Vuex from "vuex";

import moduleList from "./modules/list";
import moduleItem from "./modules/item";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    query: "",
    page: 0,
  },
  mutations: {
    setParams(state, payload) {
      state.query = payload.query;
      state.page = payload.page - 0;
    },
  },
  actions: {
    setParams({ state, commit, dispatch }, params) {
      const query = params.q ?? "";
      const page = params.p ?? 0;
      if (state.query !== query || state.page !== page) {
        commit("setParams", {
          query,
          page,
        });
        dispatch("list/get");
      }
    },
  },
  modules: {
    list: moduleList,
    item: moduleItem,
  },
});

export default store;
export const useStore = () => store;
