export default {
  state: {
    cart: [],
  },
  getters: {
    CART({ cart }) { return cart; },
  },
  mutations: {
    ADD_PRODUCT_IN_CART(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    ADDING_PRODUCT_IN_CART({ commit }, product) {
      commit('ADD_PRODUCT_IN_CART', product);
    },
  },
};
