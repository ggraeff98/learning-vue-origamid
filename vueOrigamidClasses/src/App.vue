<template>
  <div id="app">
    <p>{{allName}}</p>
    <button @click="pullCountries">Pull Countries</button>
    <select name="paises" id="paises" v-model="selected">
      <option v-for="(country, index) in countries" :key="index" :value="country.name">{{country.name}}</option>
    </select>
    <p>{{countryToFindCapital.capital}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      name: 'Gustavo',
      lastName: 'Graeff',
      selected: '',
      countries: {},
      capital: '',
      countryToFindCapital: {}
    }
  },
  funtion: {

  },
  methods: {
    pullCountries () {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(recive => recive.json())
        .then(recive => {
          this.countries = recive
        })
    }
  },
  computed: {
    allName () {
      return this.name + ' ' + this.lastName
    }
  },
  watch: {
    selected (countrySelected) {
      this.countryToFindCapital = this.countries.find((country) => country.name === countrySelected)
    }
  }
}
</script>

<style>

</style>
