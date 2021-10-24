<template>
  <div class="container text-center pt-5">
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from './Counter'
import Actions from './Action'

export default {
  methods: {},
  components: {
    appCounter: Counter,
    appActions: Actions
  }
}
</script>

<style scoped>

</style>

