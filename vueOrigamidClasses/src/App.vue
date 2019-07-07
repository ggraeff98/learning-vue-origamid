<template>
  <div id="app">
    {{cont}}
    <button @click="cont++">cont+</button>
    <ul>
      <li v-for="(value, key) in githubProfileInfos" :key="key">{{key}} : {{value}}</li>
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
      githubProfileInfos: {},
      cont: 0
    }
  },
  funtion: {

  },
  methods: {
    test () {
      fetch('https://api.github.com/users/ggraeff98')
        .then(recive => recive.json())
        .then(recive => {
          this.githubProfileInfos = recive
          console.log(this.githubProfileInfos)
        })
    }
  },
  computed: {

  },
  created () {
    this.test()
  },
  updated () {
    document.title = this.cont
  }

}
</script>

<style>

</style>
