<template>
  <div class="container text-center pt-5">
    <app-counter></app-counter>
    <hr>
    <app-actions></app-actions>
    <hr>
    <app-second-counter></app-second-counter>
  </div>
</template>

<script>
import Counter from './Counter'
import SecondCounter from './SecondCounter'
import Actions from './Action'

export default {
  methods: {},
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter,
  }
}
</script>

<style scoped>

</style>

