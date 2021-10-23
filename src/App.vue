<template>
  <div>

    <h2>From input</h2>
    <app-on-off v-model="switched"></app-on-off>


    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>

    <my-button v-model="switched"></my-button>
  </div>
</template>

<script>
import OnOff from "./OnOff";
import Button from "./button";

export default {
  data() {
    return {
      switched: false
    }
  },
  components: {
    appOnOff: OnOff,
    myButton: Button
  }
}
</script>

<style scoped>

</style>

