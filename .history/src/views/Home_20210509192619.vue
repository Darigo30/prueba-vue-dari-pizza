<template>
  <div class="home">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

        <div class="overlay-bg">
         <img src="../assets/pizza.png" class="d-block w-100">
        </div>

    <div class="carousel-item active">
      <img src="../assets/h3-rev-bckgrnd-ing.jpg" class="d-block w-100">
    </div>
  </div>
</div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-3 pt-5">
          <h4>Elige tu sabor</h4>
          <h1>El mejor menú de pizza en Santiago</h1>
          <h3>Las pizzas más ricas, con sabor venezolano. Si es tu primera compra, el despacho es gratis!!!!</h3>
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
<style scoped>
  .overlay-bg{
    position: absolute;
    right: 0;
    width: 20%;
    z-index: 1;
    left: 0;
    margin: 140px auto;
  }
  h4{
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    color: #d2401e;
    font-weight: 600;
  }
  h1{
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    color: #303030;
    font-weight: 500;
  }
</style>