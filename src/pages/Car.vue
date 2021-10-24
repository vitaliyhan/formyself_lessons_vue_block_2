<template>
  <h1>Car {{ id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id']
    }
  },
  watch: {
    $route(toRoute, fromRoute){
      this.id = toRoute.params['id']
    }
  }
}
</script>

<style scoped>

</style>
