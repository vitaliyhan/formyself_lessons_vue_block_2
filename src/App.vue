<template>
  <div>
    <h1 >Parent: {{ carName }}</h1>
    <app-car :carName="carName" :carYear="carYear" @nameChanged="carName=$event"></app-car>
    <app-car :carName="carName" :carYear="carYear"></app-car>
    <app-car :carName="carName" :carYear="carYear"></app-car>
  </div>
</template>

<script>
import Car from "./Car";

export default {
  data() {
    return {
      carName: 'Ford new',
      carYear: 2000,
    }
  },
  components: {
    appCar: Car
  }
}
</script>
