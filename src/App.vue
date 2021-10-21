<template>
  <div>
    <h2>From input</h2>
    <select v-model="social">
      <option
        v-for="s of socialList"
        :selected="s==defaultSocial"
      >{{ s }}</option>
    </select>
    <hr>
    <p>{{ social }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      defaultSocial: 'ok',
      social: 'ok',
      socialList: ['facebook', 'ok', 'vk']
    }
  }
}
</script>

<style scoped>

</style>

