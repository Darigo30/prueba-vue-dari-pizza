<template>
  <div class="home">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5 pt-5">
          <h1>Pizzería <em>La Pixa</em></h1>
        </div>

        <div class="col-12 mt-5">
          <div class="cards-pizzas">
            <div class="row">
              <div class="col-4 mb-5" v-for="pizza in productosFiltrados" :key="pizza.name">
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
