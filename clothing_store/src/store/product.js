export default {
  state: {
    goodData: null,
    loaded: false,
  },
  getters: {
    goodData({ goodData }) { return goodData; },
    // goodData({ state }) { return state.goodData; },
    isLoaded({ loaded }) { return loaded; },
  },
  mutations: {
    SET_GOOD_DATA(state, goodData) {
      state.goodData = goodData;
    },
    SET_LOADED_STATUS(state, status) {
      state.loaded = status;
    },
  },
  actions: {
    fetchGoodData({ commit }) {
      commit('SET_LOADED_STATUS', false);
      setTimeout(() => {
        commit('SET_GOOD_DATA', { title: 'Мышь', price: 3000 });
        commit('SET_LOADED_STATUS', true);
      }, 1000);
    },
  },
};
