<template>
  <div class="about">
    <h1>This is Products page</h1>
    <ProductItem></ProductItem>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'Products',
  components: {
    ProductItem,
  },
};
</script>
