<template>
  <div>
  <li class="cart-item">
    <form action="#" class="drop__li">
      <div class="drop__li-left">
        <a href="#" ><img class="product__img-cart"
          :src="require('../assets/'+ cart_item_data.img)"
          alt="Some img"></a>
      </div>
      <div class="drop__li-center">
        <a href="#" class="drop__li-center__h4">{{cart_item_data.product_name}}</a>
        <div class="drop__li-center__stars"></div>
        <p class="drop__li-center__price">
          {{cart_item_data.quantity}} x $ {{cart_item_data.price}}</p>
      </div>
      <div class="drop__li-rght"><button class="button__dellete"
                                         @click="deleteFromCart">
      </button></div>
    </form>
  </li>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1);
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart() {
      this.DELETE_FROM_CART(this.cart_item_data);
    },
  },
};
</script>

<style scoped>

</style>
