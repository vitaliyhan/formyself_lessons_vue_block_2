<template>
  <div>
    <h2 v-colored v-if="visible">{{ title }}</h2>
    <button @click="visible=!visible">visible</button>
    <button @click="title='new'">title</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "Hi title!",
      visible: true
    }
  }
}
</script>

<style scoped>
</style>

