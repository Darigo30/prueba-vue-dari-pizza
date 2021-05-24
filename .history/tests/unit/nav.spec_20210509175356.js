import { createLocalVue, shallowMount } from '@vue/test-utils'
import Nav from "@/components/Nav.vue";
import Vuex from "vuex";
import store from '@/store'
Vue.use(Vuex);



describe("Componente Nav", () => {
  test("Presencia de Icono de Carrito", () => {
    // Presencia de la clase "carrito-icono"
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const wrapper = shallowMount(Nav, { store,localVue });
      const icono = wrapper.find(".carrito-icono");
      expect(wrapper.find('.carrito-icono').exists()).toBe(true)
      console.log(icono);

  });
});



