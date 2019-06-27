<template>
  <div id="app">
    <p> {{total}} </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      preco: 59,
      desconto: 10
    }
  },
  funtion: {

  },
  methods: {

  },
  computed: {
    total () {
      return this.preco - this.desconto
    }
  }
}
</script>

<style>

</style>
