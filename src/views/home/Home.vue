<template>
  <div>
    <div class="home">
      <Card v-for="(product, index) in products" :key="index" :product="product"></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { http } from '@/http/http-common'

export default {
  name: 'Home',
  components: {
    Card,
  },
  data () {
    return {
      products: ''
    }
  },
  methods: {
    async getProducts() {
      try {
        const response = await http.get('challenges/products.json')
        this.products = Object.freeze(response.data.products)
      } catch (e) {
        this.errors.push(e)
      }
    }
  },
  created() {
    this.getProducts()
  },
}
</script>

<style scoped lang="scss">
  .home {
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
