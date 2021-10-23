<template>
  <div class="container">
    <form class="pt-4">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          @blur="$v.email.$touch()"
          class="form-control">
      </div>
      <pre>
        {{ $v.email }}
      </pre>
    </form>

  </div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style scoped>

</style>

