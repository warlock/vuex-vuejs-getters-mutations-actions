<template>
  <div class="admin">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'Admin'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
