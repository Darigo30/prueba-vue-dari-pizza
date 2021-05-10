import { createLocalVue, shallowMount } from '@vue/test-utils'
import Nav from "@/components/Nav.vue";
import Vuex from "vuex";

const localVue = createLocalVue()
Vue.use(Vuex);



describe("Componente Nav", () => {
  test("Presencia de Icono de Carrito", () => {
    // Presencia de la clase "carrito-icono"
    store = new Vuex.Store ({
      getters: {
        cantidadCarrito: () => {
          return 1;
        }
      }
    })
    const wrapper = shallowMount(Nav, { store,localVue });
      const icono = wrapper.find(".carrito-icono");
      expect(wrapper.find('.carrito-icono').exists()).toBe(true)
      console.log(icono);

  });
});



