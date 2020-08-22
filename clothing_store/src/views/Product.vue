<template>
  <Preloader v-if="!isLoaded"></Preloader>
  <div v-else class="about">
    <h1> id: {{ id }}</h1>
    <h1> title: {{ goodData.title }}</h1>
    <h1> price: {{ goodData.price }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Preloader from '@/components/Preloader.vue';

export default {
  name: 'Product',
  components: {
    Preloader,
  },
  data() {
    return {
      id: 0,
    };
  },
  computed: {
    ...mapGetters(['goodData', 'isLoaded']),
  },
  methods: {
    ...mapActions(['fetchGoodData']),
  },
  created() {
    this.id = this.$route.params.id;
    this.fetchGoodData();
    console.log(this.goodData);
  },
};
</script>
