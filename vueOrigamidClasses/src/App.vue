<template>
  <div id="app">
    <div v-html="list" v-once></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      list: '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>'
    }
  },
  funtion: {

  }
}
</script>

<style>

</style>
