<template>
  <div>
    <h2>From input</h2>
    <select v-model="defaultSocial">
      <option v-for="s of socialList" >{{ s }}</option>
    </select>
    <hr>
    <p>{{ defaultSocial }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      defaultSocial: 'vk',
      socialList: ['facebook', 'ok', 'vk']
    }
  }
}
</script>

<style scoped>

</style>

