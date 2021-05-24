<template>
  <div class="container">
    <div class="row">
      <div class="col-12 padd-t">
        <h1>Inventario de Productos</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">¿Desea Borrar?</th>
            </tr>
          </thead>

          <tbody v-if="productos && productos.length === 0">
            <tr>
              <td colspan="5">Sin productos en el inventario</td>
            </tr>
          </tbody>

          <tbody id= "tabla" v-else>
            <tr :class= "{'red' : producto.stock < 1}" v-for="(producto, i) in productos" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ producto.id }}</td>
              <td>{{ producto.name }}</td>
              <td>{{ producto.price }}</td>
              <td>{{ producto.stock }}</td>
              <td><button @click="borrarPizza(producto.id)" class="btn btn-danger btn-borr">Borrar Registro</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Inventario",
  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    ...mapActions(["borrarPizzas"]),
    borrarPizza(id) {
      this.borrarPizzas(id);
    },
  }
  
};
</script>
<style scoped>
 .red{
   background-color: red;
   color: #fff;
 }
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
  .btn-borr{
    color: #fff;
    background-color: #d2401e;
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    border-radius: 0px;
    text-transform: uppercase;
    border: none;
    padding: 8px;
  }
</style>