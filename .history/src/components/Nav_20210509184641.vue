<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
     
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/inventario"
              >Inventario</router-link
            >
          </li>
           <router-link class="navbar-brand" to="/"><img class="logo-lapizza" src="../assets/logo-pizza.png"></router-link>
          <li class="nav-item">
            <router-link class="nav-link" to="/carrito">Carrito</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ventas">Ventas</router-link>
          </li>
        </ul>
      </div>
      
      <div @click="$router.push('/carrito')" class="carrito-icono"></div>
      <p class="nav-item text-white me-3">{{ cantidadCarrito }}</p>

    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  computed: {
    ...mapGetters(["cantidadCarrito"]),
  },
};
</script>

<style lang="scss" scoped>
.carrito-icono {
  width: 24px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;

  &::before {
    content: "shopping_cart";
    font-family: "Material Icons";
    font-size: 1.5rem;
    color: white;
  }
}
nav {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.logo-lapizza{
  width: 100%;
  max-width: 110px;
}
.navbar-expand-lg .navbar-collapse{
justify-content: center;
margin: 20px 0;
}
</style>
