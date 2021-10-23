<template>
  <div>
    <button
      class="on"
      :class="{'active':value}"
      @click="toggle(true)"
    >On
    </button>
    <button
      class="off"
      :class="{'active':!value}"
      @click="toggle(false)"
    >Off
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggle(value) {
      this.$emit('input',value)
    }
  },
  props: [
    'value',
  ]
}
</script>

<style scoped>
button.on.active {
  background-color: greenyellow;
}

button.off.active {
  background-color: red;
}
</style>
