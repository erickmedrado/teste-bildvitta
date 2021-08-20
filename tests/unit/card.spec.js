import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
  const propsData = {
    product: {
      'name': 'Kairós',
      'photos': [
        'https://www.bild.com.br/uploads/photo/file/14068/B_OD_PISCINA_RAIA_EF-min.jpg',
        'https://www.bild.com.br/uploads/photo/file/14078/B_OD_PORTICO_FACHADA_EF-min.jpg',
        'https://www.bild.com.br/uploads/photo/file/14072/B_OD_SALA_ESTAR_EF-min.jpg',
        'https://www.bild.com.br/uploads/photo/file/14070/B_OD_VARANDA_GOURMET_EF-min.jpg'
      ],
      'address': {
        'city': 'Ribeirão Preto - SP',
        'district': 'Jardim Olhos D\'Agua',
        'geo_location': {
          'latitude': -21.2373,
          'longitude': -47.8082
        }
      },
      'units': {
        'en_suites': [1, 2, 3],
        'usable_areas': [151, 197]
      }
    },
  }

  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(Card, { propsData })
  })

  it('O componente Card é uma instância do Vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('As informações dos empreendimentos são preenchidas', () => {
    expect(wrapper.vm.product).toBeDefined()
  })

  it('O componente do carrocel de imagens foi renderizado', () => {
    expect(wrapper.findComponent({ name: 'Carousel' }).exists()).toBeTruthy()
  })

  it('A localização do empreendimento é valida e o card é exibido', () => {
    expect(wrapper.vm.product.address.geo_location).toBeDefined()
    expect(wrapper.vm.product.address.geo_location.latitude).toBeTruthy()
    expect(wrapper.vm.product.address.geo_location.longitude).toBeTruthy()
  })

  it('As dimensões do empreendimento são validas', () => {
    wrapper.vm.product.units.usable_areas.forEach(area => {
      expect(area).toBeGreaterThan(10)
    })
  })

  it('Exibe apenas número de suítes maior ou igual a 1', () => {
    wrapper.vm.product.units.en_suites.forEach(suite => {
      expect(suite).toBeGreaterThan(0)
    })
  })

  it('O empreendimento tem Localização privilegiada', () => {
    expect(wrapper.vm.product.address.geo_location.latitude).toBeGreaterThan(wrapper.vm.min_lat)
    expect(wrapper.vm.product.address.geo_location.latitude).toBeLessThan(wrapper.vm.max_lat)
    expect(wrapper.vm.product.address.geo_location.longitude).toBeGreaterThan(wrapper.vm.min_lng)
    expect(wrapper.vm.product.address.geo_location.longitude).toBeLessThan(wrapper.vm.max_lng)
  })
})

