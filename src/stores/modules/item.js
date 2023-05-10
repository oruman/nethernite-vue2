const moduleItem = {
  namespaced: true,
  state: {
    item: null,
  },
  mutations: {
    setItem(state, payloads) {
      state.item = payloads;
    },
  },
  actions: {
    setItem({ commit }, payloads) {
      commit("setItem", payloads);
    },
    clearItem({ commit }) {
      commit("setItem", null);
    },
  },
};

export default moduleItem;
