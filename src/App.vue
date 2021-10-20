<template>
  <div>
    <h2>From input</h2>
    <label for="">
      <input v-model="social" type="checkbox" value="instagram">Inst
    </label>
    <label for="">
      <input v-model="social" type="checkbox" value="vk">vk
    </label>
    <label for="">
      <input v-model="social" type="checkbox" value="facebook">facebook
    </label>
    <label for="">
      <input v-model="social" type="checkbox" value="OK">Одноклассники
    </label>
    <hr>
    <ul>
      <li v-for="social_item in social">{{ social_item }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      social: ['vk']

    }
  }
}
</script>

<style scoped>

</style>

