<template>
  <div>
    <div class="card" v-if="product.address.geo_location && product.address.geo_location.latitude && product.address.geo_location.longitude">
      <Carousel :images="images"></Carousel>
      <div class="info">
        <h1 v-html="product.name"></h1>
        <h2 v-html="product.address.district"></h2>
        <h3 v-html="product.address.city"></h3>
        <div class="details">
          <p><img :src="require('@/assets/images/key.svg')" alt="Ícone chave"> Apartamentos de 97 e 126m²</p>
          <p><img :src="require('@/assets/images/bed.svg')" alt="Ícone cama"> 3 suítes</p>
          <p><img :src="require('@/assets/images/pin.svg')" alt="Ícone localização"> Localização privilegiada</p>
        </div>
        <button>Ver mais</button>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'Card',
  components: {
    Carousel,
  },
  props: {
    product: Object
  },
  data () {
    return {
      data: this.products,
      images: [
        'https://www.bild.com.br/uploads/photo/file/13133/PISCINA_01.jpg',
        'https://www.bild.com.br/uploads/photo/file/13134/PORTICO_DE_ENTRADA.jpg',
        'https://www.bild.com.br/uploads/photo/file/13135/VARANDA.jpg'
      ]
    }
  },
  created: function() {
    console.log(this.product.address.geo_location)
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/components/card.scss'
</style>
