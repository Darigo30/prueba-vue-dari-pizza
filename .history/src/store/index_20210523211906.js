import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";

import { db } from "../../firebase";

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
    //guardar pizzas de API inicial en colleccion de firebase
    guardarPizzasEnDB(state) {
      console.log(state);
      /*setTimeout(() => {
        try {
          const productos = state.productos;
          console.log(productos);
          productos.forEach(async (producto) => {
            await db.collection("pizzas").add(producto);
          });
        } catch (error) {
          console.log(error);
        }
      }, 2000);*/
    },
    agregarNuevaPizza(state, payload) {
      const existe = state.productos.find((pizza) => pizza.id === payload.id);
      // Si no existe ingresar a la base de datos.
      if (!existe) state.productos.push(payload);
    },
  },
  actions: {
    async getData({ commit }) {
      // const url =
      //   "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
      try {
        // const req = await axios(url);
        // const pizzas = req.data;
        // const pizzasStock = pizzas.map((obj) => {
        //   obj.stock = 10;
        //   return obj;
        // });
        const pizzasStock = [];
        const fire = await db.collection("pizzas");
        fire.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                pizzasStock.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            });
        })
    
        commit("cargarData", pizzasStock);
      } catch (error) {
        console.log(error);
      }
    },
    async setDataPizzasDb({ commit }){
      commit("guardarPizzasEnDB");
    },
    async crearNuevaPizza({ commit }, payload) {
      const pizza = payload;
      if (!pizza) return;

      // Actualizar el state
      commit("agregarNuevaPizza", pizza);
      // Actualizar Firebase
      // Preguntar si el ID existe en Firebase: (TAREA)
      // try {
      //   const req = await db.collection("pizza").get();
      //   req.docs.forEach(obj => {
      //     const pizzaFirebase = obj.data();
      //     const idFirebase = pizzaFirebase.id;

      //     // Tiene un problema: ¿Cuál es? (Tarea)
      //     if (idFirebase === pizza.id) return;
      //     await db.collection("pizzas").add(pizza);
      //   })
      // } catch (error) {
      //   console.log(error);
      // }
      await db.collection("pizzas").add(pizza);
    },
    async borrarPizzas({ commit, state }, payload) {
      commit("");
      let borradoFila = state.productos.filter(fila =>  fila.id != payload );
      console.log(borradoFila, payload, state.productos);
      // Delete en Firestore
      
      /* let collectionRef = db.collection("pizzas");
      collectionRef.where("id", "==", payload)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete().then(() => {
            console.log("el doc fue borrado");
          }).catch(function(error) {
            console.error("ha ocurrido un error al borrar: ", error);
          });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });*/
    }
  },
});
