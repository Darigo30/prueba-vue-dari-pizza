<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-5 pt-5">
        <h1>Ventas Realizadas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio Total</th>
              <th scope="col">Cantidad Vendida</th>
            </tr>
          </thead>

          <tbody v-if="ventas && ventas.length === 0">
            <tr>
              <td colspan="5">Sin ventas realizadas</td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr v-for="(venta, i) in ventas" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ venta.id }}</td>
              <td>{{ venta.nombre }}</td>
              <td>{{ venta.precioSubtotal }}</td>
              <td>{{ venta.cantidadVendida }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Ventas",
  computed: {
    ...mapState(["ventas"]),
  },
};
</script>
