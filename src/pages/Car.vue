<template>
  <div>
    <h1>Car {{ id }}</h1>
    <button class="btn bnt-small btn-info" @click="goBackToCars">Back</button>

    <!--    <router-link -->
    <!--      tag="button" -->
    <!--      :to="'/car/'+id+'/full'"-->
    <!--      class="btn btn-info"-->
    <!--    >Full info</router-link>-->

    <router-link
      tag="button"
      :to="{name: 'CarFull', params:{id: id}}"
      class="btn btn-info"
    >Full info
    </router-link>

    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id']
    }
  },
  methods: {
    goBackToCars() {
      this.$router.push('/cars')
    }
  },
  watch: {
    $route(toRoute, fromRoute) {
      this.id = toRoute.params['id']
    }
  }
}
</script>

<style scoped>

</style>
