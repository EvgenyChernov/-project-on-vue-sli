export default {
  state: {
    products: [],
    filtered: [],
    userSearch: '',
  },
  getters: {
    PRODUCTS({ products }) {
      return products;
    },
    FILTERED({ filtered }) {
      return filtered;
    },
    USER_SEARCH({ userSearch }) {
      return userSearch;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
      state.filtered = products;
    },
    FILTERED_TO_SEARCH: (state, filtered) => {
      state.filtered = filtered;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return fetch('http://localhost:3000/api/products')
        .then((response) => response.json())
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    FILTERED_TO_USER_SEARCH_RUN({ commit }, filtered) {
      commit('FILTERED_TO_SEARCH', filtered);
    },
  },
};
