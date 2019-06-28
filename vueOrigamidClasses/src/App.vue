<template>
  <div id="app">
   <input type="text" v-model="cep" placeholder="cep here" maxlength="8" >
   <h1>{{cep}}</h1>
   <ul>
     <li v-for="(valor, key) in endereco" :key="key">
       {{key}}: {{valor}}
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      cep: '',
      endereco: {}
    }
  },
  funtion: {

  },
  methods: {

  },
  watch: {
    cep (cep) {
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(recive => recive.json())
          .then(recive => {
            this.endereco = recive
          })
      }
    }
  }
}
</script>

<style>

</style>
