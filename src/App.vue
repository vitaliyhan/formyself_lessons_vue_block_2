<template>
  <div class="container text-center pt-5">
    <app-counter :counter="counter"></app-counter>
    <app-actions @counterUpdated="counter+=$event"></app-actions>
  </div>
</template>

<script>
import Counter from './Counter'
import Actions from './Action'
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {},
  components: {
    appCounter: Counter,
    appActions: Actions
  }
}
</script>

<style scoped>

</style>

