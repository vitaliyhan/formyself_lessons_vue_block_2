<template>
  <div>
    <h2>From input</h2>
    <input type="text" v-model.lazy="title">
    <p>{{ title }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hi there'
    }
  }
}
</script>

<style scoped>

</style>

