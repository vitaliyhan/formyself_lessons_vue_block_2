<template>
  <div>
    <app-car>
      <h2 slot="title">Mazda+html</h2>
      <p slot="text">{{ carName }}</p>
    </app-car>
  </div>
</template>

<script>
import Car from "./Car";

export default {
  components: {
    appCar: Car,
  },
  data() {
    return {
      carName: "Ford"
    }
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>

