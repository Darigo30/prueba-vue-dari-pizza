import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";
import Vuex from 'vuex'



describe("Componente Nav", () => {
  test("Presencia de Icono de Carrito", () => {
    // Presencia de la clase "carrito-icono"
    const wrapper = shallowMount(Nav);
    const icono = wrapper.find(".carrito-icono");
    console.log(icono.exists())
  });
});
