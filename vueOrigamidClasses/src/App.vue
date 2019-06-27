<template>
  <div id="app">
    <button @click="addItens()">Add Item</button>
    <button @click="removeItens()">Remove Item</button>
    <p>Total: {{totalItens}}</p>
    <p>No Carrinho: {{itensNoCarrinho}}</p>
    <p v-if="totalItens < 1">Não se pode adicionar mais itens</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      totalItens: 7,
      itensNoCarrinho: 0
    }
  },
  funtion: {

  },
  methods: {
    addItens () {
      if (this.totalItens > 0) {
        this.totalItens--
        this.itensNoCarrinho++
        console.log(this.totalItens)
      }
    },
    removeItens () {
      if (this.itensNoCarrinho > 0) {
        this.totalItens++
        this.itensNoCarrinho--
        console.log(this.totalItens)
      }
    }
  }
}
</script>

<style>

</style>
