<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Nav,
  },
  methods: {
    ...mapActions(["getData", "setDataPizzasDb"]),
  },
  created() {
    this.getData();
    this.setDataPizzasDb();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
