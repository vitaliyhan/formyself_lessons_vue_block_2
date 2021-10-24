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
      <button class="btn btn-primary" @click.prevent="loadCars">Load cars</button>
    </form>
    <hr>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="car of cars"
        :key="car.id"
      >{{ car.id }} <strong>{{ car.name }}</strong> - {{ car.year }}
        <button type="button" class="btn btn-outline-danger" @click.prevent="deleteCar(car.id)">
          <i class="bi bi-trash"></i>
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      carName: 'Name',
      carYear: 123,
      cars: [],
      resource: null
    }
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear,
      }
      this.resource.save({}, car).then(() => this.loadCars())
    },
    loadCars() {
      this.resource.get().then(response => response.json()).then(data => this.cars = data)
    },
    deleteCar(id) {
      this.resource.delete({id: id})
        .then(
          () => this.loadCars()
        )
    },
  },
  created() {
    this.resource = this.$resource('cars{/id}')
  }
}
</script>

<style scoped>

</style>

