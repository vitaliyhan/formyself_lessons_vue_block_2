<template>
  <div>
    <h1>List</h1>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name of filterNames">{{ name }}</li>
    </ul>
  </div>

</template>

<script>
import mixinList from "./mixin";

export default {
  mixins: [mixinList]
}
</script>

<style scoped>

</style>
