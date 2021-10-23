<template>
  <div class="container">
    <form class="pt-4">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-control">
      </div>
    </form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      email: ''
    }
  },
}
</script>

<style scoped>

</style>

