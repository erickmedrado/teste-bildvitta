<template>
  <div>
    <div class="card" v-if="product.address.geo_location && product.address.geo_location.latitude && product.address.geo_location.longitude">
      <Carousel :images="product.photos"></Carousel>
      <div class="info">
        <h1 v-html="product.name"></h1>
        <h2 v-html="product.address.district"></h2>
        <h3 v-html="product.address.city"></h3>
        <div class="details">
          <p v-if="usable_areas">
            <img :src="require('@/assets/images/key.svg')" alt="Ícone chave">
            Apartamentos de {{ usable_areas }}m²
          </p>
          <p v-if="en_suites">
            <img :src="require('@/assets/images/bed.svg')" alt="Ícone cama">
            {{ en_suites }} suítes
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
  methods: {
    sortList(arr) {
      let list = arr.map(elem => elem.toFixed(0))
      list = list.filter(value => value > 0)
      list = list.sort((a, b) => a - b)
      return list
    },
    listToString(arr) {
      if (arr && arr.length) {
        let list = this.sortList(arr, 0)
        if (list.length > 1) {
          let str = list.pop()
          return list.join(', ') + ' e ' + str
        } else
          return list.toString()
      } else if (arr && arr > 0) {
        return arr.toFixed(0)
      } else
        return false
    }
  },
  computed: {
    en_suites() {
      return this.listToString(this.product.units.en_suites)
    },
    usable_areas() {
      const usable_areas = this.product.units.usable_areas
      if (usable_areas && usable_areas.length) {
        console.log('-------')
        console.log(usable_areas)
        for (var i = 0; i < usable_areas.length; i++)
          if (usable_areas[i] <= 10)
            return false
      } else if (usable_areas <= 10) {
        return false
      }
      return this.listToString(usable_areas)
    },
    checkLocal() {
      const geo = this.product.address.geo_location
      if(geo.latitude >= this.min_lat && geo.latitude <= this.max_lat &&
         geo.longitude >= this.min_lng && geo.longitude <= this.max_lng)
        return true
      else
        return false
    },
  },
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/components/card.scss'
</style>
