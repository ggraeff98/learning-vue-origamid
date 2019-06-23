<template>
  <div>
     <div id="app">
      {{$data.$empresa}}
      {{produto}}
      <input type="number" v-model="lado">
      Perímetro: {{lado*4}}
      Área: {{lado*lado}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      $empresa: 'Apple',
      produto: 'iPhone',
      lado: 0
    }
  },

  funtion: {

  }
}
</script>

<style>

</style>
