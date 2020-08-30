<template>
  <div>
    <ProductItem
      v-for="item of this.FILTERED"
      :key="item.id_product" :img="item.img"
      :product="item"
      @addToCart="addToCart">
    </ProductItem>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      imgCatalog: 'https://placehold.it/200x150',
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['FILTERED']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADDING_PRODUCT_IN_CART']),
    addProduct() {
      this.PRODUCTS.forEach((el) => {
        this.products.push(el);
      });
    },
    addToCart(data) {
      this.ADDING_PRODUCT_IN_CART(data);
    },
  },
  created() {
    this.GET_PRODUCTS_FROM_API();
    console.log(this.FILTERED);
  },
};
</script>
};
