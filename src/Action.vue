<template>
  <div>
    <button class="btn btn-success m-1" @click="updateCounter(1)"><i class="bi bi-plus-circle"></i></button>
    <button class="btn btn-danger m-1" @click="updateCounter(-1)"><i class="bi bi-dash-circle"></i></button>
  </div>
</template>

<script>
export default {
  methods: {
    updateCounter(val) {
      this.$store.state.counter += val
    }
  }
}
</script>

<style scoped>

</style>
