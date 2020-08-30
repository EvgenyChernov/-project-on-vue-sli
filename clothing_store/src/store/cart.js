export default {
  state: {
    cart: [],
    totalSum: 0,
  },
  getters: {
    CART({ cart }) {
      return cart;
    },
  },
  mutations: {
    ADD_PRODUCT_IN_CART(state, product) {
      if (state.cart.length) {
        let isProductExists = false;
        // eslint-disable-next-line array-callback-return
        state.cart.map((item) => {
          if (item.id_product === product.id_product) {
            isProductExists = true;
            // eslint-disable-next-line no-plusplus,no-param-reassign
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART(state, product) {
      // eslint-disable-next-line array-callback-return
      state.cart.map((item) => {
        // eslint-disable-next-line no-undef
        if (item.id_product === product.id_product) {
          if (item.quantity > 1) {
            // eslint-disable-next-line no-param-reassign,no-plusplus
            item.quantity--;
          } else state.cart.splice(product, 1);
        }
      });
    },
  },
  actions: {
    ADDING_PRODUCT_IN_CART({ commit }, product) {
      commit('ADD_PRODUCT_IN_CART', product);
    },
    DELETE_FROM_CART({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    },
  },

};
