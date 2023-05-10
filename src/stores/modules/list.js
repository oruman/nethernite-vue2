// ISSUE: https://github.com/jsdelivr/data.jsdelivr.com/issues/6

import algoliasearch from "algoliasearch";
const angolia = algoliasearch("OFCNCOG2CU", "f54e21fa3a2a0160595bb058179bfb1e");
const npmIndex = angolia.initIndex("npm-search");

const moduleList = {
  namespaced: true,
  state: {
    list: [],
    pages: 0,
  },
  mutations: {
    setList(state, payloads) {
      state.list = payloads;
    },
    setPages(state, payloads) {
      state.pages = payloads;
    },
  },
  actions: {
    async get({ commit, rootState }) {
      if (!rootState.query) {
        commit("setList", []);
        commit("setPages", 0);
        return;
      }
      const list = await npmIndex.search(rootState.query, {
        hitsPerPage: 10,
        page: rootState.page,
      });
      commit("setList", list.hits ?? []);
      commit("setPages", list.nbPages ?? 0);
    },
  },
};

export default moduleList;
