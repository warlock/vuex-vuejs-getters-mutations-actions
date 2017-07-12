<template>
  <div class="hello">
    holas
    <ul id="users">
      <li v-for="user in getUsers" v-bind:key="user.id">{{ user.name }}</li>
    </ul>
    <div @click="add({
        user: { id: 5, name: 'XXX', registered: false }
      })">afegeix</div>
    <div @click="funx()">proba</div>
    <div @click="identificat()">probaXXX</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  computed: {
    ...mapGetters([
      'getUsers'
    ])
  },
  /* methods: {
    ...mapMutations([
      'add'
    ])
  } */
  methods: {
    ...mapActions([
      'add',
      'identificat'
    ]),
    funx () {
      console.log('bu')
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
