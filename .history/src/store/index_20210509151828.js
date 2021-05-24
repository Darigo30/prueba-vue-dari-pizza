import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: [],
    ventas: [],
  },
  getters: {
    cantidadCarrito(state) {
      return state.carrito.length;
    },
    productosFiltrados(state) {
      const productos = state.productos.filter((pizza) => pizza.stock > 0);
      return !productos ? [] : productos;
    },
    totalCarrito(state) {
      const carrito = state.carrito;
      if (carrito.length === 0) return 0;
      const suma = carrito.reduce((acc, x) => acc + x.subtotal, 0);
      return suma;
    },
  },
  mutations: {
    cargarData(state, payload) {
      state.productos = payload;
    },
    agregarPizza(state, payload) {
      const agregar = payload.id;
      const cantidad = 1;
      const nombre = payload.nombre;
      const precio = payload.precio;
      const subtotal = precio * cantidad;

      const finder = state.carrito.find((obj) => obj.id === agregar);

      if (!finder) {
        const obj = {
          id: agregar,
          cantidad,
          nombre,
          precio,
          subtotal,
        };
        state.carrito.push(obj);
      } else {
        finder.cantidad = cantidad + finder.cantidad;
        finder.subtotal = finder.cantidad * precio;
      }
    },
    comprar(state) {
      const respuesta = confirm("¿Quieres comprar ahora?");
      if (respuesta) {
        const venta = state.carrito.map((obj) => {
          const obj2 = {
            id: obj.id,
            nombre: obj.nombre,
            precioSubtotal: obj.subtotal,
            cantidadVendida: obj.cantidad,
          };
           return obj2;
        });
        venta.forEach((producto) => {
          const ventarec = producto;
          const finder = state.ventas.find((obj) => obj.id === ventarec.id);

          if (!finder) {
            state.ventas.push(ventarec);
          } else {
            state.ventas = state.ventas.map((vend) => {
              const obj3 = {
                id: vend.id,
                nombre: vend.nombre,
                precioSubtotal: vend.id === ventarec.id ? vend.precioSubtotal + ventarec.precioSubtotal : vend.precioSubtotal,
                cantidadVendida: vend.id === ventarec.id ? vend.cantidadVendida + ventarec.cantidadVendida : vend.cantidadVendida,
              };
               return obj3;   
            });
          }

        });
        state.carrito.forEach((el) => {
        state.productos = state.productos.map((resta) => {
            const obj4 = {
              desc: resta.desc,
              id: resta.id,
              img: resta.img,
              ing: resta.ing,
              name: resta.name,
              price: resta.price,
              stock: el.id === resta.id ? resta.stock - el.cantidad : resta.stock ,
            };
            return obj4;
          })
        });
      state.carrito = [];
      }
    },
    
  },
  actions: {
    async getData({ commit }) {
      const url =
        "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
      try {
        const req = await axios(url);
        const pizzas = req.data;
        const pizzasStock = pizzas.map((obj) => {
          obj.stock = 10;
          return obj;
        });
        commit("cargarData", pizzasStock);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
