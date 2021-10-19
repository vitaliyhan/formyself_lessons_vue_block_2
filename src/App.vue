<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-counter></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName=$event"
    ></app-car>


  </div>
</template>

<script>
import Car from "./Car";
import Counter from "./Counter";

export default {
  data() {
    return {
      carName: 'Ford new',
      carYear: 2000
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>
