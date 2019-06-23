<template>
  <div id="app">
    <button @click="pullData">Pull Data</button>
    <div :class="acoes.marketCap[0] > acoes.marketCap[1] ? 'highMarketCap' : 'lowerMarketCap'" ref="showCompany1"></div>
    <div :class="acoes.marketCap[0] > acoes.marketCap[1] ? 'highMarketCap' : 'lowerMarketCap'" ref="showMarketCap1"></div>
    <div :class="acoes.marketCap[0] < acoes.marketCap[1] ? 'highMarketCap' : 'lowerMarketCap'" ref="showCompany2"></div>
    <div :class="acoes.marketCap[0] < acoes.marketCap[1] ? 'highMarketCap' : 'lowerMarketCap'" ref="showMarketCap2"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      acoes: {
        companyName: ['Google', 'Apple'],
        marketCap: [1000, 2000]
      }
    }
  },

  methods: {
    pullData () {
      this.$refs.showCompany1.innerHTML = this.acoes.companyName[0]
      this.$refs.showMarketCap1.innerHTML = this.acoes.marketCap[0]
      this.$refs.showCompany2.innerHTML = this.acoes.companyName[1]
      this.$refs.showMarketCap2.innerHTML = this.acoes.marketCap[1]
    }
  },

  funtion: {

  }
}
</script>

<style>
.highMarketCap {
  color: green;
}

.lowerMarketCap {
  color: red;
}
</style>
