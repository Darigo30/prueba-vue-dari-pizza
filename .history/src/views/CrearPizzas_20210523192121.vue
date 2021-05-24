<template>
  <div class="container pt-5">
    <div class="row pt-5">
      <div class="col-12">
        <h1 class="mb-5">Crear Pizzas</h1>
        <form>
          <div class="mb-3 text-start">
            <label class="form-label">ID</label>
            <input type="text" class="form-control" v-model="pizza.id" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="pizza.name" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Descripción</label>
            <input type="text" class="form-control" v-model="pizza.desc" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Precio</label>
            <input type="text" class="form-control" v-model="pizza.price" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Stock</label>
            <input type="text" class="form-control" v-model="pizza.stock" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="pizza.img" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Ingredientes</label>
            <input type="text" class="form-control" />
          </div>
        </form>
        <button @click="crearPizza" class="btn btn-primary">Crear Pizza</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Crear",
  data() {
    return {
      pizza: {
        id: "",
        name: "",
        desc: "",
        price: "",
        stock: "",
        img: "",
        ing: [],
      },
    };
  },
  methods: {
    ...mapActions(["crearNuevaPizza"]),
    crearPizza() {
      const pizza = this.pizza;
      if (!pizza.id || !pizza.name || !pizza.desc || !pizza.price || !pizza.stock || !pizza.img || !pizza.ing) return;
      this.crearNuevaPizza(pizza);
    },
  },
};
</script>