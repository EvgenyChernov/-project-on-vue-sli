<template>
  <div class="product">
    <a href="#" class="product__img"><img alt="Some img"></a>
    <a href="#" class="product__name">{{}}</a>
    <p class="product__price">$ {{}}</p>
    <button href="#" class="product__add product__add_opacity"
            @click="cartAPI.addProduct(product)">
      <img class="product__add__cart-img"
           src="@/assets/img/paraphernalia/cart-white.png" alt="cart-white"> Add to
      Cart</button>
  </div>
<!--  <div class="product">-->
<!--    <a href="#" class="product__img">-->
<!--      <img alt="product" src="@/assets/img/product/jacket-7.jpg">-->
<!--    </a>-->
<!--    <a href="#" class="product__name">Mango People T-shirt</a>-->
<!--    <p class="product__price">$52.00</p>-->
<!--    <a href="#" class="product__add">-->
<!--      <img class="product__add__cart-img" src="@/assets/img/paraphernalia/cart-white.png"-->
<!--           alt="cart-white">-->
<!--      Add to-->
<!--      Cart</a>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'ProductItem',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
