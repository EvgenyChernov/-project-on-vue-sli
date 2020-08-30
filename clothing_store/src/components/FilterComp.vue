<template>
  <div>
    <form action="#" class="header__left__search_box"
          @submit.prevent="filter(userSearch)">
      <input class="header__left__input" type="text"
             placeholder="Search for Item..."
             v-model="userSearch">
      <button class="header__left__button__search" type="submit"></button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'filter-el',
  data() {
    return {
      userSearch: '',
    };
  },
  computed: {
    ...mapGetters(['FILTERED', 'PRODUCTS']),
  },
  methods: {

    ...mapActions(['GET_PRODUCTS_FROM_API', 'FILTERED_TO_USER_SEARCH_RUN']),
    filter(userSearch) {
      const regexp = new RegExp(userSearch, 'i');
      this.FILTERED_TO_USER_SEARCH_RUN(this.PRODUCTS.filter((el) => regexp.test(el.product_name)));
    },
    addProduct() {
      this.PRODUCTS.forEach((el) => {
        this.products.push(el);
      });
    },
  },
};
</script>
