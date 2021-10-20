<template>
  <div>
    <h2 v-colored:background="'red'" >{{ title }}</h2>
    <h2 v-colored:color.border.big="'blue'" >{{ title }}</h2>
  </div>
</template>

<script>
import ColorDirective from './color'
export default {
  data() {
    return {
      title: "Hi title!",
    }
  },
  directives: {
    colored: ColorDirective
  }
}
</script>

<style scoped>
</style>

