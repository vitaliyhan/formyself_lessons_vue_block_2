<template>
  <div>
    <h2 v-colored="'red'" >{{ title }}</h2>
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

