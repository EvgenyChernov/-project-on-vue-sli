<template>
  <div class="header__right">
    <div class="account__box">
      <button class="button__account"  @click="showCart = !showCart">My Account
        <img class="button__account__arrow"
             src="../assets/img/paraphernalia/arrow-bottom-white.png" alt="arrow"></button>
      <div class="drop" v-show="!showCart">
        <div class="drop__flex">
          <div class="drop__ul">
            <ul>
              <cartItem class="cart-item"
                         v-for="(item) in cart_data"
                         :key="item.id_product"
                         :cart_item_data="item">
              </cartItem>
              <li v-if="!cart_data.length">Cart is empty</li>
              <li class="drop__li drop__li__total">
                <p class="drop__li__total_p">TOTAL</p>
                <p class="drop__li__total_p">$ {{totalPrice}} </p>
              </li>
            </ul>
            <a href="#" class="drop__li button__checkout">Checkout</a>
            <a href="#" class="drop__li button__go">Go to cart</a>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="button__cart">
      <div class="button__cart__number" v-if= "this.cart_data.length">
        {{ this.cart_data.length }}</div>
    </a>
  </div>
</template>

<script>
import cartItem from '@/components/CartItem.vue';
import { mapActions } from 'vuex';

export default {
  name: 'cart',
  data() {
    return {
      showCart: true,
    };
  },
  components: {
    cartItem,
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart() {
      this.DELETE_FROM_CART();
    },
  },
  computed: {
    // eslint-disable-next-line consistent-return,vue/return-in-computed-property
    totalPrice() {
      if (this.cart_data.length) {
        // eslint-disable-next-line max-len
        return this.cart_data.reduce((totalPrice, { price, quantity }) => totalPrice + (price * quantity), 0);
      } return 0;
    },
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>

</style>
