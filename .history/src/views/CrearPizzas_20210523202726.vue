<template>
  <div class="container pt-5">
    <div class="row pt-5">
      <div class="col-12">
        <h1 class="mb-5">Crear Pizzas</h1>
        
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
            <input type="text"  v-model="ingrediente" class="form-control" />
            <button @click="agregarIngrediente(ingrediente)" class="btn btn-primary">Agregar Ingrediente</button>
            <div v-if="pizza.ing.length > 0">
                <ul v-for="datos in pizza.ing" :key="datos.ing">
                    {{ datos.name }}
                </ul>
            </div>
            
          </div>
       
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
    ingrediente: null,
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
      pizza.id = ""
      pizza.name = ""
      pizza.desc = ""
      pizza.price = ""
      pizza.stock = ""
      pizza.img = "" 
      pizza.ing = ""
      this.crearNuevaPizza(pizza);
    },
    agregarIngrediente(ing){
        this.pizza.ing.push({
            name: ing,
        });
    }
  },
};
</script>