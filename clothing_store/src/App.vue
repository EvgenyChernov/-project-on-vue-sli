<template>
  <div id="app">
    <header class="header center">
      <div class="header__left">
        <router-link to="/" class="logo">
            <a href="#" class="logo__img"></a>
            <span class="logo__text">BRAN<span class="pink">D</span></span>
        </router-link>
        <div class="browse__box">
          <a href="#" class="browse__button"><span class="browse__button_text">Browse</span>
            <div
              class="browse__button__img"></div>
          </a>
          <div class="browse_drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">MEN</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Tees/Tank tops</a></li>
                <li><a href="#" class="drop__a">Shirts/Polos</a></li>
                <li><a href="#" class="drop__a">Sweaters</a></li>
                <li><a href="#" class="drop__a">Sweatshirts/Hoodies</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Jackets/vests</a></li>
              </ul>
            </div>
          </div>
        </div>
        <filterEl></filterEl>
      </div>
      <cart :cart_data="this.CART"></cart>
    </header>
    <nav class="nav">
      <ul class="menu center">
        <li class="menu__list">
          <router-link to="/catalog" class="menu__link menu__link_active">Catalog</router-link>
<!--          <a href="index.html" class="menu__link menu__link_active">Home</a>-->
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>

        </li>
        <li class="menu__list"><a href="#" class="menu__link">Man</a>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Women</a>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Kids</a>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Accoseriese</a>
          <div class="drop drop__last">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Featured</a>
          <div class="drop drop__last">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Hot</a>
          <div class="drop drop__last">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Deals</a>
          <div class="drop drop__last">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                <li><a href="#" class="drop__a">Blazers</a></li>
                <li><a href="#" class="drop__a">Denim</a></li>
                <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__a">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__a">Dresses</a></li>
                <li><a href="#" class="drop__a">Tops</a></li>
                <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__a">Jackets/Coats</a></li>
              </ul>
              <div class="drop__img"></div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <main class="main">
      <router-view/>
    </main>
    <section class="reviews center">
      <form action="#">
        <div class="reviews__content-left ">
          <a href="#" class="reviews__img"></a>
          <div class="reviews__text">
            <p class="reviews__p">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
              a pulvinar purus
              condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
            <h4 class="reviews__h4 pink">Bin Burhan</h4>
            <h5 class="reviews__h5">Dhaka, Bd</h5>
            <div class="pagination__box">
              <a href="#" class="pagination">
                <div class="pagination__block"></div>
              </a>
              <a href="#" class="pagination ">
                <div class="pagination__block bg__pink"></div>
              </a>
              <a href="#" class="pagination">
                <div class="pagination__block"></div>
              </a>
            </div>
          </div>
        </div>
      </form>
      <div class="reviews__content-right">
        <h2 class="reviews__h2">Subscribe</h2>
        <h3 class="reviews__h3">FOR OUR NEWLETTER AND PROMOTION</h3>
        <form class="reviews-box">
          <div class="form__field"></div>
          <label>
            <input type="email" name="name" placeholder="Enter Your Email" class="reviews__input"
                   maxlength="40">
          </label>
          <span class="form__error">This field should contain e-mail in
            the format someting@site.com</span>
          <a href="#" class="reviews_button">Subscribe</a>
        </form>
      </div>
    </section>

    <nav class="nav__box center">
      <section class="nav__content">
        <section class="nav__item">
          <a href="#" class="logo">
            <div class="logo__img"></div>
            <span class="logo__text">BRAN<span class="pink">D</span></span>
          </a>
          <p class="nav__box__p">Objectively transition extensive data rather
            than cross functional solutions.
            Monotonically syndicate multidisciplinary materials before go forward
            benefits. Intrinsicly
            syndicate an expanded array of processes and cross-unit partnerships.</p>
          <p class="nav__box__p">Efficiently plagiarize 24/365 action items and
            focused infomediaries.
            Distinctively seize superior initiatives for wireless technologies.
            Dynamically optimize.</p>
        </section>
        <section class="nav__list">
          <h3 class="nav__box__h3">INFORMATION</h3>
          <a href="#" class="nav__box__link">Tearms & Condition</a>
          <a href="#" class="nav__box__link">Privacy Policy</a>
          <a href="#" class="nav__box__link">How to Buy</a>
          <a href="#" class="nav__box__link">How to Sell</a>
          <a href="#" class="nav__box__link">Promotion</a>
        </section>
        <section class="nav__list">
          <h3 class="nav__box__h3">COMPANY</h3>
          <a href="#" class="nav__box__link">Home</a>
          <a href="#" class="nav__box__link">Shop</a>
          <a href="#" class="nav__box__link">About</a>
          <a href="#" class="nav__box__link">How It Works</a>
          <a href="#" class="nav__box__link">Contact</a>
        </section>
        <section class="nav__list">
          <h3 class="nav__box__h3">SHOP CATEGORY</h3>
          <a href="#" class="nav__box__link">Men</a>
          <a href="#" class="nav__box__link">Women</a>
          <a href="#" class="nav__box__link">Child</a>
          <a href="#" class="nav__box__link">Apparel</a>
          <a href="#" class="nav__box__link">Brows All</a>
        </section>
      </section>
    </nav>
    <footer class="footer center">
      <article class="footer__contetnt-left">
        <p class="footer__kopirayt">© 2017 Brand All Rights Reserved.</p>
      </article>
      <article class="footer__contetnt-right fa-stack-1x">
        <a href="#" class="social__link"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social__link"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social__link in-social-logo"></a>
        <a href="#" class="social__link"><i class="fab fa-pinterest-p"></i></a>
        <a href="#" class="social__link"><i class="fab fa-google-plus-g"></i></a>
      </article>
    </footer>
  </div>
</template>

<script>
import filterEl from '@/components/FilterComp.vue';
import cart from '@/components/Cart.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    filterEl,
    cart,
  },
  computed: {
    ...mapGetters(['CART']),
  },
};
</script>

<style lang="sass">
////////////////// локальные переменные //////////////////

$t-color-black: #222222
$t-color-trolley-grey: #7a7a7a
$t-color-ash-grey: #b2b2b2
$t-color-taupe-gray: #898989
$t-color-dark-gray: #a4a4a4
$t-color-white-gray: #9f9f9f
$t-color-white: #ffffff
$t-color-pink: #f16d7f
$b-color-light-gray: #f5f5f5
$b-color-platinum: #e1e1e1
$b-color-grey: #f8f8f8
$bg-colog-grey: #e6e6e6
////////////////// глобальные переменные //////////////////

$palette-primary: $t-color-black
$palette-secondary: $t-color-pink
$palette-tertiary: $t-color-white
$palette-quaternary: $t-color-white-gray

$palette-background-primary: $t-color-pink
$palette-background-secondary: $b-color-grey
$palette-background-active: $t-color-trolley-grey

$palette-border-primary: $bg-colog-grey
$padding-l-r: 15px

@mixin font-family
  font-family: 'Lato', sans-serif

@mixin flex-a-center
  display: flex
  align-items: center

////////////////// обнуление стилей //////////////////
*
  margin: 0
  padding: 0
  border: 0

*, *:before, *:after
  box-sizing: border-box

a:focus, a:active
  outline: none

a:focus, a:active
  outline: none

nav, footer, header, aside
  display: block

html, body
  height: 100%
  width: 100%
  font-size: 100%
  line-height: 1
  font-size: 14px
  -ms-text-size-adjust: 100%
  -moz-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%

input, button, textarea
  font-family: inherit

input::-ms-clear
  display: none

button
  cursor: pointer

button::-moz-focus-inner
  padding: 0
  border: 0

a, a:visited, a:hover
  text-decoration: none

ul li
  list-style: none

img
  vertical-align: top

h1, h2, h3, h4, h5, h6
  font-size: inherit
  font-weight: 400

////////////////// общие стили //////////////////

.big_box-1
  background-image: url(assets/img/ofers/men-img.jpg)

.big_box-2
  background-image: url(assets/img/ofers/kids-img.jpg)

.narrow_box-1
  background-image: url(assets/img/ofers/accesories-img.jpg)

.narrow_box-2
  background-image: url(assets/img/ofers/women-img.jpg)

body
  @include font-family

.center
  padding: 0 calc(50% - 570px)

.pink
  color: $palette-secondary
  font-weight: 600

.black
  color: #2f2f2f

////////////////// header //////////////////
.logo
  @include flex-a-center

  &__img
    display: block
    height: 51px
    width: 59px
    background-image: url(assets/img/paraphernalia/logo.png)
    @include flex-a-center

  &__text
    font-size: 27px
    font-weight: 300
    letter-spacing: 0.68px
    color: $palette-primary
    padding-left: 13px

.header
  height: 100px
  justify-content: space-between
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17)
  border: solid 1px #ececec
  width: 100%

  @include flex-a-center

  &__left
    @include flex-a-center

  .browse__button
    padding: 14px 15px
    margin-left: 37px
    height: 39px
    font-size: 14px
    font-weight: 300
    line-height: 10px
    letter-spacing: 0.35px
    color: $palette-primary
    border: solid 1px $palette-border-primary
    border-radius: 3px 0 0 3px
    background: $palette-background-secondary
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s
    @include flex-a-center

    &__img
      width: 9px
      height: 6px
      display: block
      background-image: url(assets/img/paraphernalia/arrow-bottom.png)
      padding-left: 8px

  .header__left__search_box
    @include flex-a-center

    .header__left__input
      padding: 14px $padding-l-r
      border-top: solid 1px $palette-border-primary
      border-bottom: solid 1px $palette-border-primary
      width: 317px - ($padding-l-r * 2)
      height: 39px

    .header__left__button__search
      background-image: url(assets/img/paraphernalia/search.png)
      background-repeat: no-repeat
      background-position: center
      height: 39px
      width: 39px
      border-radius: 0 3px 3px 0
      border: solid 1px $palette-border-primary
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s
      @include flex-a-center

      &:hover
        background-color: #e44258

  &__right
    display: flex
    flex-direction: row-reverse
    @include flex-a-center

    .button__account
      white-space: nowrap
      background-color: $palette-background-primary
      height: 39px
      padding: 13px 16px 13px 19px
      color: $palette-tertiary
      letter-spacing: 0.38px
      font-size: 15px
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s
      @include flex-a-center

      &:hover
        background-color: #e44258

      &__arrow
        display: block
        width: 9px
        height: 6px
        background-image: url(assets/img/paraphernalia/arrow-bottom-white.png)
        padding-left: 8px

  .button__cart
    background-image: url(assets/img/paraphernalia/cart.png)
    background-repeat: no-repeat
    background-position: center
    margin-right: 26px
    width: 40px
    height: 29px
    position: relative
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

    &__number
      background-color: $palette-background-primary
      width: 15px
      height: 15px
      border-radius: 50%
      position: absolute
      top: -4px
      right: -8px
      color: $palette-tertiary
      font-weight: bold
      font-size: 10px
      letter-spacing: 0.3px
      justify-content: center
      @include flex-a-center

////////////////// button My Account //////////////////
.account__box
  position: relative
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  & .drop__li:hover
    filter: drop-shadow(0 0 0.04rem rgb(173, 173, 173))

  & .drop
    display: flex
    top: 36px
    right: -62px

.drop__li
  display: flex
  padding: 17px

.s-product-img
  height: 85px
  width: 85px
  background-position: center
  display: flex
  background-repeat: no-repeat

.product-s-1
  background-image: url(assets/img/super-sale/shirt-3-s.png)

.product-s-2
  background-image: url(assets/img/super-sale/shirt-4-s.png)

.drop__li-center
  display: flex
  flex-direction: column

  &__h4
    font-size: 12px
    font-weight: bold
    color: #222222
    text-transform: uppercase
    padding: 5px

  &__stars
    background-image: url(assets/img/super-sale/stars.png)
    background-position: left
    display: flex
    background-repeat: no-repeat
    width: 56px
    height: 12px
    margin: 5px

  &__price
    font-size: 12px
    color: #f16d7f
    text-transform: uppercase
    padding: 5px

.drop__li-rght
  display: flex
  align-self: center

.button__dellete
  background-image: url(assets/img/super-sale/cross-img.png)
  background-position: center
  display: flex
  background-repeat: no-repeat
  width: 15px
  height: 15px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    filter: brightness(50%)

.drop__li__total
  justify-content: space-between
  padding-left: 0
  padding-right: 0

  &_p
    font-size: 16px
    font-weight: bold
    color: #222222
    text-transform: uppercase

.button__checkout
  margin-top: 11px
  font-size: 14px
  font-weight: bold
  color: #4a4a4a
  text-transform: uppercase
  height: 50px
  width: 225px
  border: 1px solid #eaeaea
  justify-content: center
  align-items: center
  padding: 0
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    color: #e44258
    border: 1px solid #f16d7f

.button__go
  margin-top: 11px
  font-size: 14px
  font-weight: bold
  color: #4a4a4a
  text-transform: uppercase
  height: 50px
  width: 225px
  border: 1px solid #eaeaea
  justify-content: center
  align-items: center
  padding: 0
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    color: #e44258
    border: 1px solid #f16d7f

////////////////// menu //////////////////

.menu
  list-style-type: none
  display: flex
  justify-content: center
  height: 51px

  @include flex-a-center

.menu__list
  position: relative
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover .drop
    display: flex

.browse__box:hover .browse_drop
  display: flex
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

.menu__link
  padding: 20px
  display: block
  font-size: 14px
  font-weight: bold
  color: #222222
  text-transform: uppercase
  line-height: 10px

  &_active
    border-bottom: 3px solid #ef5b70
    padding-bottom: 18px

.menu__list:hover
  box-shadow: 0px 0px 2px 0px rgb(0, 0, 0)
  text-shadow: 0px 0px 0.5px black, 0 0 1px white

.browse__box:hover .browse_drop
  display: flex
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

.browse_drop
  background-color: #fff
  border-radius: 5px
  position: absolute
  padding: 12px 20px
  display: none
  top: 69px
  flex-direction: column
  z-index: 4

.drop
  background-color: #fff
  border-radius: 5px
  position: absolute
  padding: 12px 20px
  display: none
  top: 46px

  & .drop__flex:not(:last-child)
    margin-right: 46px

  &__ul
    list-style-type: none

  &__h3
    font-size: 14px
    color: #232323
    letter-spacing: 0.03em
    text-transform: uppercase
    border-bottom: 1px solid #e8e8e8
    width: 234px
    padding: 8px 0
    margin-bottom: 8px

  &__a
    font-size: 14px
    color: #646464
    text-align: right
    letter-spacing: 0.03em
    line-height: 28px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

  &__a:hover
    color: #f16d7f

  &__img
    display: flex
    height: 118px
    width: 255px
    background-image: url(assets/img/super-sale/super-sale.png)
    background-position: center
    background-repeat: no-repeat
    padding-top: 35px

  &__last
    right: 0
////////////////// promo //////////////////
.promo
  background-image: url(assets/img/background/promo.jpg)
  height: 614px
  background-color: #e8e8e8
  background-position: center -51px
  background-repeat: no-repeat
  padding-top: 224px

  &__content
    padding-left: 12px
    border-left: 12px solid $palette-background-primary

  &__h2
    font-size: 60px
    line-height: 40px
    font-weight: 900
    color: $palette-primary
    text-transform: uppercase

  &__h3
    padding-top: 15px
    line-height: 35px
    font-size: 40px
    font-weight: 900
    letter-spacing: 1px
    text-transform: uppercase

////////////////// offers //////////////////

.offers
  height: 1021px
  display: flex
  justify-content: space-around
  align-items: center

  &__left, &__right
    display: flex
    flex-direction: column

    &__big
      background-repeat: no-repeat
      background-position: center
      width: 560px
      height: 542px
      position: relative
      margin: 10px
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s

      &:hover
        filter: brightness(80%)

    &__narrow
      background-repeat: no-repeat
      background-position: center
      width: 560px
      height: 261px
      position: relative
      margin: 10px
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s

      &:hover
        filter: brightness(50%)

  .content
    position: absolute
    top: 26px
    padding: 16px 0 0 19px
    background-color: $palette-tertiary
    width: 175px
    height: 82px
    text-transform: uppercase

    &__h4
      color: $palette-primary
      font-size: 18px
      font-weight: 900
      letter-spacing: 0.45px

    &__h3
      color: $palette-secondary
      font-size: 30px
      letter-spacing: 0.75px
      font-weight: 900

////////////////// fetured-block //////////////////

.fetured
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

  &__h3
    font-size: 30px
    font-weight: bold
    line-height: 23px
    letter-spacing: 0.75px
    color: $palette-primary

  &__p
    padding-top: 16px
    color: $palette-quaternary
    font-size: 14px
    line-height: 12px
    letter-spacing: 0.35px

////////////////// catalog-product //////////////////
.catalog
  padding-top: 50px
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  max-width: 100%

  .product
    display: flex
    flex-direction: column
    width: 263px
    margin-bottom: 25px
    position: relative
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s
    animation: shadow-drop-2-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    &:hover
      box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16)
      transform: scale(1.03)

      .product__img
        transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
        transition: all 0.2s
        filter: brightness(50%)

      .product__add
        transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
        transition: all 0.2s
        display: flex
        &_opacity
          background: rgba(0, 0, 0, 0.3)

    &__img
      width: 100%
      position: relative

    &__name
      line-height: 11px
      padding: 19px 15px 0 15px
      color: $palette-primary
      font-size: 13px
      text-transform: uppercase

    &__price
      padding: 17px 14px 21px
      color: $palette-secondary
      font-size: 16px

    &__add
      display: none
      align-items: center
      justify-content: center
      position: absolute
      top: 97px
      left: 70px
      height: 39px
      width: 123px
      font-size: 13px
      font-weight: bold
      color: $palette-tertiary
      line-height: 40px
      border: 1px solid $palette-tertiary
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s

      &:hover
        box-shadow: 0px 0px 8px 0px $palette-tertiary

      &__cart-img
        margin-right: 8px

.product__img-cart
  display: block
  width: 80px

.button__all-product
  white-space: nowrap
  background-color: $palette-background-primary
  height: 39px
  padding: 13px 16px 13px 19px
  color: $palette-tertiary
  letter-spacing: 0.38px
  font-size: 15px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s
  @include flex-a-center

  &__img
    margin-left: 9px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

  &:hover
    background-color: #e44258

////////////////// sentence-block //////////////////

.sentence
  display: flex
  justify-content: center
  margin-top: 113px

  .sentence__offer__block
    display: flex
    width: 1140px
    height: 529px
    background: #222224

    &__link
      background-image: url(assets/img/background/offer-for-women-img.jpg)
      background-repeat: no-repeat
      height: 100%
      width: 767px
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s

      &:hover
        filter: brightness(90%)

    .offer__h4
      padding-top: 146px
      padding-left: 39px
      font-size: 53.5px
      font-weight: bold
      letter-spacing: 0.8px
      color: $palette-tertiary

    .offer__h3
      line-height: 43px
      font-size: 32px
      color: $palette-tertiary
      padding-left: 39px

  .offer__list
    display: flex
    flex-flow: column wrap

    .offer__link
      margin-top: 48px
      display: flex
      width: 373px
      align-items: flex-start
      margin-bottom: 20px
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s

      &:hover
        filter: brightness(50%)

      .offer__link__img
        margin-left: 36px
        margin-right: 30px
        flex-wrap: wrap
        transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
        transition: all 0.2s

    .offer__link__content
      display: flex
      flex-direction: column
      margin-right: 40px

      &__h5
        font-size: 20px
        font-weight: bold
        letter-spacing: 0.5px
        color: $palette-tertiary

      &__p
        margin-top: 10px
        font-size: 14px
        font-weight: 300
        line-height: 24px
        letter-spacing: 0.35px
        color: $palette-tertiary

////////////////// reviews-block //////////////////
.reviews
  margin-top: 97px
  height: 438px
  background-image: url(assets/img/background/reviews-back.jpg)
  background-repeat: no-repeat
  background-position: center
  display: flex

  &__content-left
    padding-top: 111px
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    align-items: flex-start
    flex-direction: row
    width: 570px

  &__img
    background-image: url(assets/img/reviews/revews-img.png)
    height: 83px
    width: 83px

  &__text
    padding-left: 27px
    width: 426px

  &__p
    font-size: 16px
    font-style: italic
    color: #222224
    letter-spacing: 0.03em
    line-height: 22px

  &__h4
    padding-top: 20px
    font-size: 16px
    font-weight: bold
    letter-spacing: 0.03em
    line-height: 11px

  &__h5
    padding-top: 5px
    font-size: 12px
    font-weight: 300
    color: #222224
    letter-spacing: 0.03em
    line-height: 10px

.pagination__box
  padding-top: 50px

.pagination__block
  display: inline-block
  height: 4px
  width: 38px
  background-color: #d6d6d6
  margin: 5px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  .pagination:hover &
    background-color: #e44258

.reviews__content-right
  width: 50%
  text-align: center

.reviews__h2
  padding-top: 148px
  font-size: 24px
  color: #222224
  text-align: center
  letter-spacing: 0.03em
  line-height: 54px
  text-transform: uppercase

.reviews__h3
  font-size: 14px
  color: #222224
  text-align: center
  letter-spacing: 0.03em
  line-height: 24px
  padding-bottom: 35px

.reviews-box
  display: flex
  justify-content: center

.reviews__input
  height: 46px
  width: 276px
  background-color: #e1e1e1
  border-radius: 23px 0 0 23px
  padding-left: 28px
  padding-right: 28px
  outline: none
  border: 1px solid #ccc
  box-sizing: border-box

.reviews_button
  height: 46px
  width: 104px
  background-color: #f16d7f
  border-radius: 0px 23px 23px 0px
  font-size: 14px
  color: #ffffff
  text-align: center
  letter-spacing: 0.03em
  line-height: 46px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    background-color: #e44258

.reviews-box
  position: relative

.form__error
  color: red
  text-align: center
  font-size: 12px
  margin-top: 6px
  display: none
  position: absolute
  top: 42px

input:valid:not(:placeholder-shown)
  border-color: green

input:invalid:not(:placeholder-shown)
  border-color: red

input:invalid:not(:placeholder-shown)
  display: inline-block

.bg__pink
  background-color: #f16d7f

////////////////// nav-block //////////////////

.nav__box
  min-height: 458px

.nav__content
  padding-top: 109px
  padding-bottom: 64px
  display: flex
  justify-content: space-between

.nav__item
  max-width: 430px

.nav__box__p
  padding-top: 29px
  font-size: 14px
  font-weight: 300
  color: #898989
  letter-spacing: 0.03em
  line-height: 24px

.nav__list
  max-width: 180px
  display: flex
  flex-direction: column

.nav__box__h3
  padding-left: 10px
  font-size: 18px
  font-weight: bold
  color: #f16d7f
  letter-spacing: 0.03em
  line-height: 50px

.nav__box__link
  padding: 10px
  font-size: 16px
  color: #898989
  letter-spacing: 0.03em
  line-height: 30px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    color: #f16d7f
////////////////// footer-block //////////////////
.footer
  height: 79px
  background-color: #e6e6e6
  display: flex
  align-items: center
  justify-content: space-between

  &__kopirayt
    font-size: 16px
    color: #7a7a7a
    text-align: right
    letter-spacing: 0.03em
    line-height: 42px

  &__contetnt-right
    display: inline-flex
    text-align: right
    width: auto !important
    position: static !important

.social__link
  display: inline-flex
  height: 32px
  width: 32px
  color: #bcbcbc
  background-color: #ffffff
  justify-content: center
  align-items: center
  margin: 4px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    color: #f7f7f8
    background-color: #f16d7f

.in-social-logo
  background-image: url(assets/img/paraphernalia/in-social-img.png)
  background-repeat: no-repeat
  background-position: center

////////////////// index.html--end //////////////////

////////////////// catalog.html--start //////////////////
.arrivals
  height: 148px
  background-color: #f8f3f4
  display: flex
  justify-content: space-between
  align-items: center

.arrivals__h2
  font-size: 24px
  font-weight: 900
  color: #f16d7f
  text-align: center
  line-height: 20px
  text-transform: uppercase

.breadcrumbs
  display: flex
  list-style-type: none

  &__link,
  &__items
    font-size: 14px
    font-weight: 300
    color: #636363
    text-align: center
    line-height: 20px
    text-transform: uppercase

  &__items:hover .breadcrumbs__link
    color: #f16d7f

  &__link-active
    font-weight: bold
    color: #f16d7f

//////////////////////// catalog-box ////////////////////////
.catalog-s
  display: flex

  &__left
    display: flex
    flex-direction: column
    padding-top: 71px

.accordion
  list-style-type: none

  &__li
    font-size: 14px
    font-weight: bold
    color: #ef5b70
    text-transform: uppercase
    border-left: 5px solid #ef5b70
    padding: 12px 11px
    border-bottom: 1px solid #ebebeb
    width: 221px
    position: relative
    display: flex
    flex-direction: column

  & li:not(:first-child)
    margin-top: 18px

  & .drop
    display: flex
    z-index: 2
    position: inherit

.siting__box
  display: flex
  padding-bottom: 35px
  justify-content: space-between

.siting__left .breadcrumbs,
.siting__center
  width: 330px

.siting__right
  width: 330px

.siting__h4
  font-size: 14px
  font-weight: bold
  color: #6f6e6e
  text-transform: uppercase
  padding-bottom: 20px

.siting__p
  font-size: 14px
  line-height: 26px
  text-align: left
  color: #6f6e6e

.catalog-s__right
  width: 100%
  padding-left: 49px
  padding-top: 71px

  & .breadcrumbs__items
    display: flex
    align-items: center

  & .breadcrumbs__link
    display: flex
    font-size: 14px
    color: #6f6e6e
    text-transform: none
    padding: 5px 11px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

.siting__center_line label
  font-size: 14px
  color: #6f6e6e
  line-height: 20px
  text-transform: uppercase
  padding-left: 8px

.siting__center_line
  display: flex
  margin-bottom: 10px

.checkbox_siting:not(:first-child)
  margin-left: 23px

.checkbox-label_siting
  display: flex
  justify-content: flex-start
  align-items: center
  width: 50px

  &:not(:first-child)
    margin-left: 17px

.checkbox_siting
  margin-right: 9px

.siting__box_small
  display: flex
  height: 50px
  background-color: #f3f3f3

.button_box
  padding: 10px 9px
  display: flex

.button__short_by
  background-color: #fff
  padding: 10px
  font-size: 14px
  color: #6f6e6e
  line-height: 11px
  outline: 1px solid #ebebeb
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

.button__short_by:hover,
.button__show:hover
  background-color: #e44258
  color: #fff

.button__number:hover,
.button__name:hover
  background-color: #f3f3f362

.button__name
  width: 86px
  background-color: #fff
  font-size: 14px
  color: #6f6e6e
  line-height: 11px
  padding: 10px 11px
  outline: 1px solid #ebebeb
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

.arrow-grey-bottom
  padding-left: 16px

.button__show
  background-color: #fff
  font-size: 14px
  color: #6f6e6e
  line-height: 11px
  padding: 10px
  outline: 1px solid #ebebeb
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

.button__number
  width: 67px
  display: flex
  align-items: center
  justify-content: center
  background-color: #fff
  font-size: 14px
  color: #6f6e6e
  line-height: 11px
  padding: 10px 12px
  outline: 1px solid #ebebeb
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

.catalog_product
  padding-top: 48px
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.product__nav_buttom
  display: flex
  justify-content: space-between
  padding-top: 20px
  padding-bottom: 110px

.button__box
  display: flex
  border: 1px solid #ebebeb
  border-radius: 3px
  align-items: center

.button_link
  padding: 10px 7px
  font-size: 16px
  font-weight: 300
  color: #c4c4c4
  line-height: 14px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    color: #ef5b70
    filter: none

  &-left
    display: flex
    background-image: url(assets/img/paraphernalia/arrow-grey-left.png)
    margin: 10px 7px 10px 15px
    background-position: center
    background-repeat: no-repeat

  &-right
    display: flex
    background-image: url(assets/img/paraphernalia/arrow-grey-right.png)
    margin: 10px 15px 10px 7px
    background-position: center
    background-repeat: no-repeat
    filter: contrast(0%)

.button_all
  font-size: 16px
  font-weight: 300
  color: #ef5b70
  line-height: 13px
  border: 1px solid #ef5b70
  border-radius: 2px
  padding: 16px 45px
  text-align: center
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    background-color: #f16d7f
    color: #fff

/*//////////////////////// offers__box //////////////////////// */

.offers__box
  display: flex
  height: 341px
  background: #222224
  justify-content: space-around
  align-items: center

.offers_link
  text-align: center
  width: 315px
  transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
  transition: all 0.2s

  &:hover
    filter: brightness(70%)

.offers__h4
  padding-top: 30px
  font-size: 20px
  font-weight: bold
  color: #fbfbfb
  text-align: center
  letter-spacing: 0.03em

.offers__p
  padding-top: 15px
  font-size: 14px
  font-weight: 300
  color: #fbfbfb
  text-align: center
  letter-spacing: 0.03em
  line-height: 20px

.offers_link:hover .offers__h4,
.offers_link:hover
  color: lightslategrey

////////////////// catalog.html--end //////////////////

////////////////// description.html--start //////////////////

////////////////// photo-big //////////////////
.main

.photo-big
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 calc(50% - 800px)

  .button__photo-big__left
    display: flex
    background-image: url(assets/img/paraphernalia/arrow-left-white.png)
    background-color: #d8d8d8
    background-position: center
    background-repeat: no-repeat
    width: 47px
    height: 47px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

    &:hover
      background-color: #e44258

  .photo__img

  .button__photo-big__right
    display: flex
    background-image: url(assets/img/paraphernalia/arrow-right-white.png)
    background-color: #d8d8d8
    background-position: center
    background-repeat: no-repeat
    width: 47px
    height: 47px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

    &:hover
      background-color: #e44258
////////////////// descreption //////////////////

.description
  display: flex
  flex-direction: column
  align-items: center

  &__top
    padding-top: 73px
    display: flex
    flex-direction: column
    align-items: center
    border-bottom: solid 1px #eaeaea
    padding-bottom: 73px

  &__h5
    font-size: 14px
    font-weight: bold
    line-height: 10px
    text-align: center
    color: #f16d7f
    padding-bottom: 14px
    border-bottom: solid 1px #eaeaea

  &__h3
    padding-top: 18px
    font-size: 18px
    font-weight: 900
    line-height: 14px
    text-align: center
    color: #4d4d4d

  &__p
    padding-top: 67px
    font-size: 14px
    font-weight: 300
    line-height: 24px
    text-align: center
    color: #5e5e5e
    width: 620px

  &__parameters
    display: flex
    padding-top: 28px

    &__p
      font-size: 14px
      font-weight: bold
      line-height: 24px
      text-align: center
      color: #b9b9b9
      padding: 0 22px

  &__price
    padding-top: 37px
    font-size: 24px
    font-weight: bold
    line-height: 24px
    text-align: center
    color: #ef5b70

  .description__bottom__siting
    display: flex
    justify-content: center

  .siting__box
    display: flex
    flex-direction: column
    align-items: flex-start
    margin: 26px

  .siting__h4
    font-size: 14px
    font-weight: bold
    line-height: 24px
    text-align: center
    color: #2f2f2f

  .siting__box__input
    padding: 11px 14px
    width: 120px
    height: 35px
    border: solid 1px #eaeaea
    border-color: #eaeaea !important

  .button__add-cart
    display: flex
    align-items: center
    justify-content: center
    width: 537px
    height: 55px
    border: solid 1px #ef5b70
    font-size: 16px
    font-weight: bold
    text-align: left
    color: #ef5b70
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

    &:hover
      background: #e44258
      color: #fff

    &:hover .button__add-cart__img
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s
      filter: brightness(300%)

    &__img
      margin: 0 15px

.like__product
  padding-top: 119px

  .like__h3
    font-size: 24px
    font-weight: 900
    line-height: 20px
    text-align: center
    color: #4d4d4d
    text-transform: uppercase

  .catalog-small
    padding-top: 72px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    width: 100%

    .product__small
      display: flex
      flex-direction: column
      width: 261px
      transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
      transition: all 0.2s
      animation: shadow-drop-2-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

      &:hover
        transform: scale(1.03)
        box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16)

      &__img
        display: flex
        justify-content: center
        width: 100%
        background: #e9e9e9
        height: 280px

      &__h5
        padding-top: 18px
        padding-left: 15px
        font-size: 14px

        color: #6f6e6e

      &__price
        padding-top: 17px
        padding-bottom: 21px
        padding-left: 15px
        font-size: 16px
        font-weight: bold
        color: #f16d7f

////////////////// description.html--end //////////////////
////////////////// checkout.html--start //////////////////

////////////////// accordion-box //////////////////

.accordion
  padding-top: 56px
  display: flex
  flex-direction: column

  &__li
    padding: 0
    margin: 0
    border: 0
    width: 100%
    border-bottom: 1px solid #e8e8e8

  &__link
    width: 100%
    font-size: 16px
    font-weight: bold
    text-align: left
    color: #222222
    padding-top: 33px
    padding-bottom: 33px

  &__box
    width: 100%
    display: flex
    padding-left: 45px

    padding-bottom: 79px

  &__item

    display: flex
    flex-direction: column

    &_left
      width: 360px
      margin-right: 140px

    &_right
      width: 390px

  &__h4
    font-size: 13px
    color: #222222
    padding: 7px 0
    text-transform: uppercase
    font-weight: bold

  &__p
    font-size: 13px
    line-height: 20px
    color: #b3b2b2
    padding: 0 0

  &__radio-box
    padding: 14px 0

  &__paragraph-box
    padding: 30px 0

  &__paragraph-discreption
    font-size: 13px
    line-height: 20px
    text-align: left
    color: #b3b2b2

  &__button
    display: flex
    justify-content: center
    align-items: center
    width: 180px
    height: 50px
    border: solid 1px #eaeaea
    background-color: #ffffff
    font-size: 14px
    font-weight: bold
    text-align: left
    color: #4a4a4a
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.2s

    &:hover
      filter: brightness(90%)

.label-radio
  display: flex
  align-items: center
  font-size: 12px
  color: #222222
  text-transform: uppercase
  font-weight: bold
  margin: 10px 0

  &__input-radio
    margin-right: 14px

.form-login
  padding: 5px 0

  &__p-field-description
    font-size: 12px
    line-height: 11px
    color: #222222
    font-weight: bold
    padding: 13px 0 7px 0

  &__input-email
    width: 390px
    height: 45px
    border: solid 1px #eaeaea !important
    background-color: #ffffff
    padding: 0 15px

  &__input-password
    width: 390px
    height: 45px
    border: solid 1px #eaeaea !important
    background-color: #ffffff
    padding: 0 15px

  &__p-required
    padding-top: 22px
    font-size: 13px
    line-height: 20px
    text-align: left
    color: #ff0d0d

  &__button-box
    display: flex
    padding-top: 32px

  &__button-fergot-password
    font-size: 14px
    line-height: 20px
    text-align: left
    color: #222222
    padding-top: 24px
    padding-left: 32px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.1s

    &:hover
      color: $palette-secondary

////////////////// checkout.html--end //////////////////
////////////////// shopping-cart.html--start //////////////////

.shopping-cart-store
  display: flex
  flex-direction: column
  padding-top: 20px

  &__name-list, &__product
    display: flex
    width: 100%
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #eaeaea

  &__name
    width: 90px
    white-space: nowrap
    text-transform: uppercase
    margin: 20px 5px
    display: flex
    background: white
    justify-content: center

    &_style-bold
      font-size: 13px
      font-weight: bold
      line-height: 15px
      letter-spacing: -0.2px
      text-align: left
      color: #222222

    &:first-child
      margin-left: 0

    &:last-child
      margin-right: 0

  &__product-details
    width: 415px
    justify-content: flex-start

  &__unite-price
    width: 84px

  &__quantity
    width: 74px

  &__shipping
    width: 66px

  &__subtotal
    width: 72px

  &__action
    width: 52px

  &__input-number
    width: 54px
    height: 30px
    border: solid 1px #eaeaea !important
    text-align: center

  &__button-box
    display: flex
    justify-content: space-between
    padding-top: 44px

  &__button-clear, &__button-continue
    font-size: 14px
    font-weight: bold
    text-align: left
    color: #4a4a4a
    text-transform: uppercase
    border: solid 1px #eaeaea
    padding: 20px 39px 18px 39px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.1s

    &:hover
      background: #e44258
      color: $palette-tertiary

  &__feedback
    padding-top: 63px
    display: flex
    justify-content: space-between

  &__feedback-item
    display: flex
    flex-direction: column
    width: 335px

  &__feedback-h4
    font-size: 16px
    font-weight: bold
    color: #222222
    text-transform: uppercase

    &_right
      text-align: right

  &__feedback-input-sity
    width: 100%
    height: 45px
    border: solid 1px #eaeaea !important
    font-size: 13px
    font-weight: 300
    text-align: left
    color: #b1b1b1
    padding: 0 18px
    display: flex
    align-items: center
    margin-top: 22px

  &__feedback-input-text
    width: 100%
    height: 45px
    border: solid 1px #eaeaea !important
    font-size: 13px
    font-weight: 300
    text-align: left
    color: #b1b1b1
    padding: 0 18px
    display: flex
    align-items: center
    margin-top: 22px

  &__feedback-button-quote
    width: max-content
    font-size: 11px
    font-weight: bold
    text-align: left
    color: #4a4a4a
    text-transform: uppercase
    border: solid 1px #eaeaea
    padding: 12px 15px
    margin-top: 23px
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.1s

    &:hover
      background: #e44258
      color: $palette-tertiary

  &__feedback-checkout-form
    display: flex
    width: 360px
    background: #f5f3f3
    flex-direction: column
    align-items: center
    padding: 0 43px
    height: min-content

  &__feedback-checkout-form-text
    border-bottom: 1px solid #e2e2e2
    width: 100%
    display: flex
    flex-direction: column
    padding-bottom: 22px

  &__feedback-p
    font-size: 14px
    font-weight: 300
    text-align: left
    color: #000000
    padding: 28px 0 0 0

  &__feedback-p-total
    padding-top: 40px
    padding-bottom: 14px
    font-size: 11px
    text-align: right
    color: #4a4a4a

  &__feedback-button
    width: 100%
    padding: 18px 42px
    font-size: 16px
    font-weight: bold
    color: #492f2f
    margin-top: 36px
    margin-bottom: 60px
    background-color: #f16d7f
    display: flex
    justify-content: center
    text-transform: uppercase
    color: #ffffff
    transition-timing-function: cubic-bezier(.48, .46, 0, 1.08)
    transition: all 0.1s

    &:hover
      background-color: #e44258

.product-box-cart
  display: flex
  justify-content: flex-start

  &__img
    width: 100px

  &__content
    display: flex
    flex-direction: column
    padding: 13px 21px 22px 21px

  &__name
    font-size: 13px
    text-align: right
    color: #222222
    padding-bottom: 27px

    &_color-grey
      color: #656565

  &__siting
    font-size: 13px
    line-height: 20px
    text-align: left
    color: #575757
    text-transform: none

    &_color-grey
      color: #6f6e6e

    &_color-darck-grey
      font-weight: bold
      color: #575757
</style>
