<template>
  <div>
    <h2 v-colored:background="'red'" >{{ title }}</h2>
    <h2 v-colored:color="'blue'" >{{ title }}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "Hi title!",
    }
  }
}
</script>

<style scoped>
</style>

