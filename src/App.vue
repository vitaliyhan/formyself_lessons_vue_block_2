<template>
  <div>
    <h2>{{ title  }}</h2>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ title | lowCase | upperCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hi title!",
    }
  },
  filters: {
    upperCase(data){
      return data.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>

