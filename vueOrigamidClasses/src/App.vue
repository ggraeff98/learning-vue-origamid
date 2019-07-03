<template>
  <div id="app">
    <input type="text" v-model="buttonStyle.width"/>
    <br>
    <input type="text" v-model="buttonStyle.height"/>
    <br>
    <input type="text" v-model="buttonStyle.fontSize"/>
    <br>
    <input type="text" v-model="buttonStyle.fontFamily"/>
    <br>
    <input type="text" v-model="buttonStyle.textAlign"/>
    <br>
    Back Groung:
    <input type="color" v-model="buttonStyle.backgroundColor"/>
    <br>
    Text Color:
    <input type="color" v-model="buttonStyle.color"/>
    <br>
    <input type="text" v-model="buttonStyle.borderRadius"/>
    <br>
    <button :style="buttonStyle">Click</button>
    <br><br><br><br>
    <input type="text" v-model="person.name" placeholder="name"/>
    <br>
    <input type="text" v-model="person.email"/>
    <br>
    <input type="text" v-model="person.telefone"/>
    <br>
    <input type="text" v-model="person.mensage"/>
    <button @click.prevent="load">Load</button>
    <button @click="reset">Reset</button>
    <span v-if="showPersonInfos">
      {{person.name}}, {{person.email}}, {{person.telefone}}, {{person.mensage}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      buttonStyle: {
        width: '',
        height: '40px',
        fontSize: '10pt',
        fontFamily: '',
        textAlign: 'center',
        backgroundColor: '',
        color: '',
        borderRadius: '50%'
      },
      person: {
        name: '',
        email: '',
        temlefone: '996090393',
        mensage: ''
      },
      showPersonInfos: false
    }
  },
  funtion: {

  },
  methods: {
    load () {
      this.showPersonInfos = true
    },
    reset () {
      this.showPersonInfos = false
    }
  },
  computed: {
  },
  watch: {

  }
}
</script>

<style>

</style>
