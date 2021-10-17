<template>
  <div class="car">
    <h3> {{ carName }} </h3>
    <p> {{ carYear }} </p>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: [
    'carName',
    'carYear'
  ],
}
</script>

<style>
.car {
  border: 1px solid black;
}

.car h3 {
  padding: 3px;
}
</style>
