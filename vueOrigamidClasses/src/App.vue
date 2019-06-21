<template>
  <div id="app">
    <main id="commerce">
      <p>Shorts - R$ {{price}}</p>
      <button @click="total++">Add</button>
      <button @click="total--">Remove</button>
      <span>{{total}}</span>
      <p>Total: {{price * total}}</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      price: 49,
      total: 0
    }
  },
  funtion: {

  }
}
</script>

<style>

</style>
