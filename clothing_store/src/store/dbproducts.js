export default {
  state: {
    products: [],
  },
  getters: {
    PRODUCTS({ products }) {
      return products;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
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
  },
};
