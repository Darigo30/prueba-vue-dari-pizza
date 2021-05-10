import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

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
