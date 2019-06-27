<template>
  <div id="app">
    <button @click="puxarCep">Puxar Cep</button>
    <p v-for="(info, key, index) in local" :key="index">{{key}}: {{info}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      local: {}
    }
  },
  funtion: {

  },
  methods: {
    puxarCep () {
      fetch('https://viacep.com.br/ws/04538133/json/')
        .then(recive => recive.json())
        .then(recive => {
          this.local = recive
        })
    }
  },
  computed: {

  }
}
</script>

<style>

</style>
