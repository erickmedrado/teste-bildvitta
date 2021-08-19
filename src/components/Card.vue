<template>
  <div class="card">
    <Carousel :images="images"></Carousel>
    <div class="info">
      <h1>Liniee</h1>
      <h2>Jardim Olhos D'Água</h2>
      <h3>Ribeirão Preto - SP</h3>
      <div class="details">
        <p><img :src="require('@/assets/images/key.svg')" alt="Ícone chave"> Apartamentos de 97 e 126m²</p>
        <p><img :src="require('@/assets/images/bed.svg')" alt="Ícone cama"> 3 suítes</p>
        <p><img :src="require('@/assets/images/pin.svg')" alt="Ícone localização"> Localização privilegiada</p>
      </div>
      <button>Ver mais</button>
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
  data () {
    return {
      images: [
        'https://www.bild.com.br/uploads/photo/file/13133/PISCINA_01.jpg',
        'https://www.bild.com.br/uploads/photo/file/13134/PORTICO_DE_ENTRADA.jpg',
        'https://www.bild.com.br/uploads/photo/file/13135/VARANDA.jpg'
      ]
    }
  },
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/components/card.scss'
</style>
