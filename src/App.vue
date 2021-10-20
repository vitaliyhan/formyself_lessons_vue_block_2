<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name of filterNames">{{ name }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hi title!",
      names: [
        'Max',
        'Igor',
        'Alena',
        'Max',
      ],
      search: ''
    }
  },
  computed: {
    filterNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      })
    },
  },
  filters: {
    upperCase(data) {
      return data.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>

