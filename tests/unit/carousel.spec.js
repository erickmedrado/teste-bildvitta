import { mount, shallowMount } from '@vue/test-utils'
import Carousel from '@/components/Carousel.vue'

describe('Carousel.vue', () => {

  it('O componente Carousel é uma instância do Vue', () => {
    const wrapper = shallowMount(Carousel)
    expect(wrapper.vm).toBeTruthy()
  })

  it('O empreendimento não foi favoritado', () => {
    const wrapper = shallowMount(Carousel)
    expect(wrapper.vm.starred).toBeFalsy()
  })

  it('O empreendimento foi favoritado', () => {
    const wrapper = mount(Carousel)
    wrapper.find('.favorite').trigger('click')
    expect(wrapper.vm.starred).toBeTruthy()
  })
})
