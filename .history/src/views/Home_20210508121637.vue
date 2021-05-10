<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5 pt-5">
          <h1>Pizzería <em>Dónde El Profe</em></h1>
        </div>

        <div class="col-12 mt-5">
          <div class="cards-pizzas">
            <div class="row">
              <div
                class="col-4 mb-5"
                v-for="pizza in productosFiltrados"
                :key="pizza.name"
              >
                <div class="card">
                  <img :src="pizza.img" class="card-img-top" alt="pizza" />

                  <div class="card-body">
                    <h3 class="card-title text-capitalize">
                      <strong>Pizza {{ pizza.name }}</strong>
                    </h3>

                    <p class="card-text">
                      {{ pizza.desc }}
                    </p>

                    <ul class="list-group list-group-flush">
                      <li
                        class="list-group-item text-capitalize"
                        v-for="(ing, i) in pizza.ing"
                        :key="i"
                      >
                        {{ ing.name }}
                      </li>
                    </ul>

                    <hr />

                    <h4 class="text-center mb-3">Precio: ${{ pizza.price }}</h4>

                    <div class="row">
                      <div class="col-12">
                        <button
                          class="btn btn-primary ms-3"
                          @click="
                            agregarPizza({
                              id: pizza.id,
                              nombre: pizza.name,
                              precio: pizza.price,
                            })
                          "
                        >
                          Agregar a Carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["productosFiltrados"]),
  },
  methods: {
    ...mapMutations(["agregarPizza"]),
  },
};
</script>
