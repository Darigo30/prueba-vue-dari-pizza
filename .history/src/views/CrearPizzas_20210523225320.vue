<template>
  <div class="container">
    <div class="row cont">
      <div class="col-12">
        <h1 class="padd-t">Crear Pizzas</h1>
        
          <div class="mb-3 text-start">
            <label class="form-label descrip">ID</label>
            <input type="text" class="form-control bord-fo" v-model="pizza.id" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label descrip">Nombre</label>
            <input type="text" class="form-control bord-fo" v-model="pizza.name" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label descrip">Descripción</label>
            <input type="text" class="form-control bord-fo" v-model="pizza.desc" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label descrip">Precio</label>
            <input type="text" class="form-control bord-fo" v-model="pizza.price" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label descrip">Stock</label>
            <input type="text" class="form-control bord-fo" v-model="pizza.stock" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label descrip">Imagen</label>
            <input type="text" class="form-control bord-fo" v-model="pizza.img" />
          </div>
          <div class="mb-3 text-start">
            <label class="form-label descrip">Ingredientes</label>
            <div class="row">
                <div class="col-sm-6">
                    <input type="text"  v-model="ingrediente" class="form-control bord-fo" />
                </div>
                <div class="col-sm-6">
                    <button @click="agregarIngrediente(ingrediente)" class="btn btn-primary w-100 btn-agre">Agregar Ingrediente</button>
                </div>
            </div>
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
      this.crearNuevaPizza(pizza);
    },
    agregarIngrediente(ing){
        this.pizza.ing.push({
            name: ing
        });
    }
  },
};
</script>
<style scoped>
h1{
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 500;
    color: #d2401e;
  }
    .padd-t{
        margin-top: 12rem ;
    }
    .cont{
        width: 600px;
        margin: 0 auto;
    }
    .bord-fo{
        border: 1px solid #db664b;
        border-radius: 0px;
    }
    .btn-agre{
        color: #fff;
        background-color: #d2401e;
        font-family: 'Oswald', sans-serif;
        font-size: 14px;
        border-radius: 0px;
        text-transform: uppercase;
        border: none;
        padding: 8px;
    }
    .descrip {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    font-weight: 300;
}
  
</style>