import Vue from 'vue';
import Vuex from 'vuex';
import product from '@/store/product';
import dbproducts from '@/store/dbproducts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
    dbproducts,
  },
});
