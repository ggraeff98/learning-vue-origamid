<template>
  <div id="app">
    <ul>
    <li @click.prevent="pullActions"><a href="http://localhost:3000/google">Google</a></li>
    <li @click.prevent="pullActions"><a href="http://localhost:3000/apple">Apple</a></li>
  </ul>
  <div>
    <p>Name: {{action.name}}</p>
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
      action: {}
    }
  },
  funtion: {

  },
  methods: {
    pullActions (event) {
      const link = (event.target.href)
      fetch(link)
        .then(answer => answer.json())
        .then(answer => {
          this.action = answer[0]
          console.log(answer[0])
        })
    }
  }
}
</script>

<style>

</style>
