<template>
  <div>
    <h3> {{ carName }} </h3>
    <p> {{ carYear }} </p>
  </div>
</template>

<script>
export default {
  name: "Car",
  data() {
    return {
      carName:'Ford Model T',
      carYear:'1945',
    }
  }
}
</script>
