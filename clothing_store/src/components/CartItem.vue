<template>
  <li class="cart-item">
    <form action="#" class="drop__li">
      <div class="drop__li-left">
        <a href="#" ><img  class="s-product-img" :src="cartItem.img" alt="something"></a>
      </div>
      <div class="drop__li-center">
        <a href="#" class="drop__li-center__h4">{{cartItem.product_name}}</a>
        <div class="drop__li-center__stars"></div>
        <p class="drop__li-center__price">{{cartItem.quantity}} x $ {{cartItem.price}}</p>
      </div>
      <div class="drop__li-rght"><button class="button__dellete"
                                         @click="$emit('remove', cartItem)">
      </button></div>
    </form>
  </li>
</template>

<script>

export default {
  name: 'cart-item',
};
</script>

<style scoped>

</style>
