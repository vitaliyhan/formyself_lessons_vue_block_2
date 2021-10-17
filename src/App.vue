<template>
  <div>
    <h1>{{ msg }}</h1>
    <app-car></app-car>
  </div>
</template>

<script>
import Car from "./Car";

export default {
  data() {
    return {
      msg: 'Hi'
    }
  },
  components: {
    appCar: Car
  }
}
</script>
