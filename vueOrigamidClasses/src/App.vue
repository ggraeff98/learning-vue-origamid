<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in lista" :key="index">{{item}}</li>
    </ul>
    <button @click="removeItem">Romove Item</button>
    <button @click="change">Change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      lista: ["Item 1", "Item 2", "Item 3"],
    }
  },
  funtion: {
  },
  methods: {
    removeItem () {
      this.lista.pop();
    },
    change () {
      this.$set(this.lista, 0, "new Item")
    }
  }
}
</script>

<style>

</style>
