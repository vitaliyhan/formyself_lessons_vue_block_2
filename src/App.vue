<template>
  <div style="padding: 20px">
    <h2>{{ title }}</h2>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name of filterNames">{{ name }}</li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>
import mixinList from "./mixin";

export default {
  mixins: [mixinList],
  filters: {
    upperCase(data) {
      return data.toUpperCase()
    }
  },
  data(){
    return{
      title: 'Hi there'
    }
  }
}
</script>

<style scoped>

</style>

