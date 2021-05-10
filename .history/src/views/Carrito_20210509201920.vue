<template>
  <div class="container">
    <div class="row">
      <div class="col-12 padd-t">
        <h1>Carrito de Compras</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>

          <tbody v-if="carrito && carrito.length === 0">
            <tr>
              <td colspan="5">Sin productos en el carrito</td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr v-for="(compra, i) in carrito" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ compra.nombre }}</td>
              <td>{{ compra.precio }}</td>
              <td>{{ compra.cantidad }}</td>
              <td>{{ compra.subtotal }}</td>
            </tr>
            <tr>
              <td colspan="4" class="text-end bold">Total:</td>
              <td>${{ totalCarrito }}</td>
            </tr>
            <tr>
              <td colspan="5">
                <button @click="comprar" class="btn btn-primary btn-comp">
                  Comprar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Carrito",
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["totalCarrito"]),
  },
  methods: {
    ...mapMutations(["comprar"]),
  },
};
</script>
<style scoped>
  .padd-t{
   margin-top: 12rem ;
 }
 h1{
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 500;
    color: #d2401e;
  }
    .btn-comp{
    color: #fff;
    background-color: #d2401e;
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    border-radius: 0px;
    text-transform: uppercase;
    border: none;
    padding: 12px;
    width: 20%;
  }
 
 
</style>
