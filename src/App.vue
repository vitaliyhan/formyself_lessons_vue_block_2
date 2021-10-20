<template>
  <div>
    <h2>From input</h2>
    <textarea v-model="title"></textarea>
    <h2>{{ title }}</h2>
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
textarea {
  width: 1000px;
  height: 100px;
}

h2 {
  white-space: pre;
}
</style>

