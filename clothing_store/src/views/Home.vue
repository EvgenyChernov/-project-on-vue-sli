<template>
  <main class="main">
    <section class="promo center">
      <div class="promo__content">
        <h2 class="promo__h2">THE BRAND</h2>
        <h3 class="promo__h3">OF LUXERIOUS <span class="pink">FASHION</span></h3>
      </div>
    </section>
    <section class="offers center">
      <div class="offers__left">
        <a href="#" class="offers__left__big big_box-1">
          <div class="content">
            <h4 class="content__h4">hOT dEAL</h4>
            <h3 class="content__h3">FOR MEN</h3>
          </div>
        </a>
        <a href="#" class="offers__left__narrow narrow_box-1">
          <div class="content">
            <h4 class="content__h4">hOT dEAL</h4>
            <h3 class="content__h3">FOR MEN</h3>
          </div>
        </a>
      </div>
      <div class="offers__right">
        <a href="#" class="offers__right__narrow narrow_box-2">
          <div class="content">
            <h4 class="content__h4">hOT dEAL</h4>
            <h3 class="content__h3">FOR MEN</h3>
          </div>
        </a>
        <a href="#" class="offers__right__big big_box-2">
          <div class="content">
            <h4 class="content__h4">hOT dEAL</h4>
            <h3 class="content__h3">FOR MEN</h3>
          </div>
        </a>
      </div>
    </section>
    <section class="fetured center">
      <h3 class="fetured__h3">Fetured Items</h3>
      <p class="fetured__p">Shop for items based on what we featured in this week</p>
      <Preloader v-if="!isLoaded"></Preloader>
      <productsForHome v-else class="catalog"></productsForHome>
      <a href="catalog.html" class="button__all-product">Browse All Product
        <img class="button__all-product__img"
             src="../assets/img/paraphernalia/arrow.png" alt="arrow"></a>
    </section>
    <section class="sentence">
      <div class="sentence__offer__block">
        <a href="#" class="sentence__offer__block__link">
          <h4 class="offer__h4">30% <span class="pink">OFFER</span></h4>
          <h3 class="offer__h3">FOR WOMEN</h3>
        </a>
        <div class="offer__list">
          <a href="#" class="offer__link">
            <img class="offer__link__img"
                 src="../assets/img/paraphernalia/truck-img.png" alt="truck">
            <div class="offer__link__content">
              <h5 class="offer__link__content__h5">Free Delivery</h5>
              <p class="offer__link__content__p">Worldwide delivery on all.
                Authorit tively morph
                next-generation
                innov tion with extensive models.</p>
            </div>
          </a>
          <a href="#" class="offer__link">
            <img class="offer__link__img" src="../assets/img/paraphernalia/discount-img.png"
                 alt="discount">
            <div class="offer__link__content">
              <h5 class="offer__link__content__h5">Sales & discounts</h5>
              <p class="offer__link__content__p">Worldwide delivery on all.
                Authorit tively morph
                next-generation
                innov tion with extensive models.</p>
            </div>
          </a>
          <a href="#" class="offer__link">
            <img class="offer__link__img" src="../assets/img/paraphernalia/crown-img.png"
                 alt="crown">
            <div class="offer__link__content">
              <h5 class="offer__link__content__h5">Quality assurance</h5>
              <p class="offer__link__content__p">Worldwide delivery on all.
                Authorit tively morph
                next-generation
                innov tion with extensive models.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import productsForHome from '@/components/ProductsForHome.vue';
import Preloader from '@/components/Preloader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    productsForHome,
    Preloader,
  },
  computed: {
    ...mapGetters(['goodData', 'isLoaded']),
  },
  methods: {
    ...mapActions(['fetchGoodData']),
  },
  created() {
    this.fetchGoodData();
  },
};
</script>

<style scoped>

</style>
