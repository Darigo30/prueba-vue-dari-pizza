import { createLocalVue, shallowMount } from '@vue/test-utils'
import Home from "@/views/Home.vue";
import Vuex from "vuex";
import store from '@/store'

describe("Vista Home", () => {
  test("Presencia de Título", () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const wrapper = shallowMount(Home, { store, localVue });
    const h1 = wrapper.find("h1");
    const titulo = "Pizzería Dónde El Profe";
    expect(h1.text()).toBe(titulo)
  })
})