<template>
  <div class="product">
    <a href="#" class="product__img"><img :src=" require('../assets/'+ product.img)"
                                          alt="Some img"></a>
    <a href="#" class="product__name">{{product.product_name}}</a>
    <p class="product__price">$ {{product.price}}</p>
    <button href="#" class="product__add product__add_opacity"
            @click="cartAPI.addProduct(product)">
      <img class="product__add__cart-img"
           src="@/assets/img/paraphernalia/cart-white.png" alt="cart-white"> Add to
      Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: null,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
