<template>
  <div class="container pt-2">
    <form>
      <div class="form-group mb-3">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model.trim="carName" id="name">
      </div>
      <div class="form-group mb-3">
        <label for="year">Year</label>
        <input type="text" class="form-control" v-model.number="carYear" id="year">
      </div>

      <button class="btn btn-success" @click.prevent="createCar">createCar</button>
    </form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      carName: 'Name',
      carYear: 123
    }
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear,
      }
      this.$http.post('http://localhost:3000/cars', car)
      .then(response=>{
       return response.json()
      })
      .then(newCar =>{
        console.log(newCar)
      } )
    }
  }
}
</script>

<style scoped>

</style>

