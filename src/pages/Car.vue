<template>
  <div>
  <h1>Car {{ id }}</h1>
  <button class="btn bnt-small btn-info" @click="goBackToCars">Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id']
    }
  },
  methods:{
    goBackToCars (){
      this.$router.push('/cars')
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
