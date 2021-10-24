<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" active-class="active" exact aria-current="page" to="/">Home</router-link>
            <router-link class="nav-link" active-class="active" to="/cars">Cars</router-link>
            <router-link class="nav-link" active-class="active" to="/car/3">Cars</router-link>
            <router-link class="nav-link" active-class="active" to="/car/6">Car 6</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>

