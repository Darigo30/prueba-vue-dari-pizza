import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex);

describe("Componente Nav", () => {
  test("Presencia de Icono de Carrito", () => {
    // Presencia de la clase "carrito-icono"
    const wrapper = shallowMount(Nav, {
      stub: ["getters"],
    });
    const icono = wrapper.find(".carrito-icono");
    console.log(icono.exists())
  });
});
