<template>
  <main class="main">
    <section class="arrivals center">
      <h2 class="arrivals__h2">New Arrivals</h2>
      <ul class="breadcrumbs">
        <li class="breadcrumbs__items"><a href="index.html" class="breadcrumbs__link">Home\
        </a> /
        </li>
        <li class="breadcrumbs__items"><a href="#" class="breadcrumbs__link">Men</a> /</li>
        <li class="breadcrumbs__items"><a href="#"
                                          class="breadcrumbs__link breadcrumbs__link-active">New
          Arrivals</a></li>
      </ul>
    </section>
    <section class="catalog-s center">
      <div class="catalog-s__left">
        <ul class="accordion">
          <li>
            <p class="accordion__li">Category</p>
            <div class="drop">
              <div class="drop__flex">
                <ul class="drop__ul">
                  <li><a href="#" class="drop__a">Accessories</a></li>
                  <li><a href="#" class="drop__a">Bags</a></li>
                  <li><a href="#" class="drop__a">Denim</a></li>
                  <li><a href="#" class="drop__a">Hoodies & Sweatshirts</a></li>
                  <li><a href="#" class="drop__a">Jackets & Coats</a></li>
                  <li><a href="#" class="drop__a">Pants</a></li>
                  <li><a href="#" class="drop__a">Polos</a></li>
                  <li><a href="#" class="drop__a">Shirts</a></li>
                  <li><a href="#" class="drop__a">Shoes</a></li>
                  <li><a href="#" class="drop__a">Shorts</a></li>
                  <li><a href="#" class="drop__a">Sweaters & Knits</a></li>
                  <li><a href="#" class="drop__a">T-Shirts</a></li>
                  <li><a href="#" class="drop__a">Tanks</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <p class="accordion__li">BRAND</p>
          </li>
          <li>
            <p class="accordion__li">dESIGNER</p>
          </li>
        </ul>
      </div>
      <div class="catalog-s__right">
        <div class="siting__box">
          <div class="siting__left">
            <h4 class="siting__h4">Trending now</h4>
            <ul class="breadcrumbs">
              <li class="breadcrumbs__items"><a href="#" class="breadcrumbs__link">Bohemian
              </a> |
              </li>
              <li class="breadcrumbs__items"><a href="#" class="breadcrumbs__link">Floral</a> |</li>
              <li class="breadcrumbs__items"><a href="#" class="breadcrumbs__link">Lace</a></li>
            </ul>
            <ul class="breadcrumbs">
              <li class="breadcrumbs__items"><a href="#" class="breadcrumbs__link">Floral</a> |</li>
              <li class="breadcrumbs__items"><a href="#" class="breadcrumbs__link">Lace </a> |</li>
              <li class="breadcrumbs__items"><a href="#" class="breadcrumbs__link">Bohemian</a></li>
            </ul>
          </div>
          <div class="siting__center">
            <h4 class="siting__h4">Size</h4>
            <div class="siting__center_line">

              <label class="checkbox-label_siting" for="XXS">
                <input type="checkbox" class="checkbox_siting" name="XSS" id="XXS">
                XXS
              </label>
              <label class="checkbox-label_siting" for="XS">
                <input type="checkbox" class="checkbox_siting" name="XS" id="XS">
                XS
              </label>
              <label class="checkbox-label_siting" for="S">
                <input type="checkbox" class="checkbox_siting" name="S" id="S">
                S
              </label>
              <label class="checkbox-label_siting" for="M">
                <input type="checkbox" class="checkbox_siting" name="M" id="M">
                M
              </label>
            </div>
            <div class="siting__center_line">
              <label class="checkbox-label_siting" for="L">
                <input type="checkbox" class="checkbox_siting" name="L" id="L">
                L
              </label>
              <label class="checkbox-label_siting" for="XL">
                <input type="checkbox" class="checkbox_siting" name="XL" id="XL">
                XL
              </label>
              <label class="checkbox-label_siting" for="XXL">
                <input type="checkbox" class="checkbox_siting" name="XXL" id="XXL">
                XXL
              </label>
            </div>

          </div>
          <div class="siting__right">
            <h4 class="siting__h4">pRICE</h4>
            <div class="slidecontainer">
              <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            </div>
            <p class="siting__p">$52</p>
          </div>
        </div>
        <div class="siting__box_small">
          <div class="button_box">
            <a href="#" class="button__short_by">Sort By</a>
            <input class="button__name" name="short" list="short" placeholder="Name"/>
            <datalist id="short">
              <option value="Name"></option>
              <option value="Date"></option>
              <option value="Someting"></option>
            </datalist>
          </div>
          <div class="button_box">
            <a href="#" class="button__show">Show</a>
            <input class="button__number" value="09" type="number">
          </div>
        </div>
        <Preloader v-if="!isLoaded"></Preloader>
        <Products v-else class="catalog"></Products>
        <div class="product__nav_buttom">
          <div class="button__box">
            <a href="#" class="button_link button_link-left"></a>
            <a href="#" class="button_link">1</a>
            <a href="#" class="button_link">2</a>
            <a href="#" class="button_link">3</a>
            <a href="#" class="button_link">4</a>
            <a href="#" class="button_link">5</a>
            <a href="#" class="button_link">6.....20</a>
            <a href="#" class="button_link button_link-right"></a>
          </div>
          <a href="#" class="button_all">View All</a>
        </div>
      </div>
    </section>
    <div class="offers__box center">
      <a href="#" class="offers_link">
        <img src="../assets/img/paraphernalia/truck-img.png" alt="truck">
        <h4 class="offers__h4">Free Delivery</h4>
        <p class="offers__p">Worldwide delivery on all. Authorit tively morph next-generation
          innov tion with
          extensive models.</p>
      </a>
      <a href="#" class="offers_link">
        <img src="../assets/img/paraphernalia/discount-img.png" alt="discount">
        <h4 class="offers__h4">Sales & discounts</h4>
        <p class="offers__p">Worldwide delivery on all. Authorit tively morph next-generation
          innov tion with
          extensive models.</p>
      </a>
      <a href="#" class="offers_link">
        <img src="../assets/img/paraphernalia/crown-img.png" alt="crown">
        <h4 class="offers__h4">Quality assurance</h4>
        <p class="offers__p">Worldwide delivery on all. Authorit tively morph next-generation
          innov tion with
          extensive models.</p>
      </a>
    </div>
  </main>
</template>

<script>
import Products from '@/components/Products.vue';
// import productItem from '@/components/ProductItem.vue';

import Preloader from '@/components/Preloader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    Products,
    Preloader,
    // productItem,
  },
  computed: {
    ...mapGetters(['goodData', 'isLoaded', 'PRODUCTS']),
  },
  methods: {
    ...mapActions(['fetchGoodData', 'GET_PRODUCTS_FROM_API']),
  },
  created() {
    this.fetchGoodData();
    this.GET_PRODUCTS_FROM_API();
    console.log(this.PRODUCTS);
  },
};
</script>
