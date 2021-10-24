<template>
  <div>
  <h4>Car name: {{ name }}</h4>
    <h5>Car Year: {{ year }}</h5>
  </div>
</template>

<script>
export default {
  name: "CarFull",
  computed: {
    year(){
      return this.$route.query.year
    },
    name(){
      return this.$route.query.name
    },
  }
}
</script>

<style scoped>

</style>
