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
          :class="{'is-invalid':$v.email.$error}"
          class="form-control">
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">Email field needs to be email</div>
      </div>
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

