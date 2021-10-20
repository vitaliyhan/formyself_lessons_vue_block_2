<template>
  <div>
    <h2>From input</h2>
    <label for="">
      <input v-model="social" type="radio" value="instagram">Inst
    </label>
    <label for="">
      <input v-model="social" type="radio" value="vk">vk
    </label>
    <label for="">
      <input v-model="social" type="radio" value="facebook">facebook
    </label>
    <label for="">
      <input v-model="social" type="radio" value="Одноклассники">Одноклассники
    </label>
    <hr>
    <p>{{ social }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      social: 'facebook'
    }
  }
}
</script>

<style scoped>

</style>

