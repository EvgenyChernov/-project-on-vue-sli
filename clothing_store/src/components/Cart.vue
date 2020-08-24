<template>
  <div class="header__right">
    <div class="account__box">
      <button class="button__account"  @click="showCart = !showCart">My Account
        <img class="button__account__arrow"
             src="../assets/img/paraphernalia/arrow-bottom-white.png" alt="arrow"></button>
      <div class="drop" v-show="showCart">
        <div class="drop__flex">
          <div class="drop__ul">
            <ul>
<!--              <cartItem class="cart-item"-->
<!--                         v-for="item of cartItems"-->
<!--                         :key="item.id_product"-->
<!--                         :cart-item="item"-->
<!--                         :img="item.img"-->
<!--                         @remove="remove">-->
<!--              </cartItem>-->
              <li v-if="!cart_data.length">Cart is empty</li>
              <li class="drop__li drop__li__total">
                <p class="drop__li__total_p">TOTAL</p>
                <p class="drop__li__total_p">$ {{}} </p>
              </li>
            </ul>
            <a href="#" class="drop__li button__checkout">Checkout</a>
            <a href="#" class="drop__li button__go">Go to cart</a>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="button__cart">
<!--      <div class="button__cart__number" v-if= "cartItems.length">{{  }}</div>-->
    </a>
  </div>
</template>

<script>
// import cartItem from '@/components/CartItem.vue';

export default {
  name: 'cart',
  data() {
    return {
      showCart: false,
    };
  },
  components: {
    // cartItem,
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
