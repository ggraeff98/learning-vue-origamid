<template>
  <div id="app" :style="{background: colorSelected}">
    <h1>Seide: {{side}}</h1>
    <h1>Square Area: {{side * side}}</h1>
    <a v-bind:href="href">{{href}}</a>
    <p></p>
    <input v-model="text" type="text">
    <p></p>
    {{text}}
    <p></p>
    <input v-model="colorSelected" type="color">
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      side: 5,
      href: 'https://github.com/ggraeff98',
      text: '',
      colorSelected: '#333'
    }
  },
  funtion: {

  }
}
</script>

<style>

</style>
