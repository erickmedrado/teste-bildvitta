<template>
  <div>
    <div class="card" v-if="product.address.geo_location && product.address.geo_location.latitude && product.address.geo_location.longitude">
      <Carousel :images="product.photos"></Carousel>
      <div class="info">
        <h1 v-html="product.name"></h1>
        <h2 v-html="product.address.district"></h2>
        <h3 v-html="product.address.city"></h3>
        <div class="details">
          <p>
            <img :src="require('@/assets/images/key.svg')" alt="Ícone chave">
            Apartamentos de 97 e 126m²
          </p>
          <p v-if="listSuites">
            <img :src="require('@/assets/images/bed.svg')" alt="Ícone cama">
            {{ listSuites }} suítes
          </p>
          <p v-if="checkLocal">
            <img :src="require('@/assets/images/pin.svg')" alt="Ícone localização">
            Localização privilegiada
          </p>
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
      min_lat: -21.269,
      min_lng: -47.857,
      max_lat: -21.211,
      max_lng: -47.780
    }
  },
  computed: {
    checkLocal() {
      const geo = this.product.address.geo_location
      if(geo.latitude >= this.min_lat && geo.latitude <= this.max_lat &&
         geo.longitude >= this.min_lng && geo.longitude <= this.max_lng)
        return true
      else
        return false
    },
    sortSuites() {
      let en_suites = this.product.units.en_suites
      if (en_suites && en_suites.length) {
        en_suites = en_suites.filter(suites => suites !== 0)
        en_suites = en_suites.sort((a, b) => a - b)
        return en_suites
      } else
        return en_suites
    },
    listSuites() {
      let en_suites = this.sortSuites
      if (en_suites && en_suites.length) {
        if (en_suites.length > 1) {
          let str = en_suites.pop()
          return en_suites.join(', ') + ' e ' + str
        } else
          return en_suites.toString()
      } else if (en_suites && en_suites > 0) {
        return en_suites
      } else
        return false
    }
  },
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/components/card.scss'
</style>
