<template>
  <div id="app">
    <button @click="inverter">Inverter Lista</button>
    <ul @click="trocaCor" :class="{column : inverte}">
      <li :style="{background : color}">Sobre</li>
      <li :style="{background : color}">Produtos</li>
      <li :style="{background : color}">Serviços</li>
      <li :style="{background : color}">Contato</li>
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
      inverte: false,
      color: '#84e'
    }
  },
  funtion: {

  },
  methods: {
    inverter () {
      this.inverte = !this.inverte
    },
    trocaCor () {
      this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
    }

  },
  computed: {

  }
}
</script>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    font-family: monospace;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  .column {
    flex-direction: column;
  }
  li {
    padding: 20px;
    background: #84e;
    color: white;
    border-radius: 4px;
    margin: 10px;
    flex: 1;
    text-align: center;
  }
</style>
