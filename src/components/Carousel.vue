<template>
  <carousel>
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Foto do apartamento">
    </slide>
    <template #addons>
      <pagination/>
      <div class="favorite" @click="starred = !starred">
        <img v-if="!starred" :src="require('@/assets/images/star-outline.svg')" alt="Ícone chave">
        <img v-if="starred" :src="require('@/assets/images/star-solid.svg')" alt="Ícone chave">
      </div>
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  props: {
    images: Array
  },
  data () {
    return {
      starred: false
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/components/carousel.scss';
</style>
