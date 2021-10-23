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
      <div class="form-group">
        <label for="password">password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          @blur="$v.password.$touch()"
          :class="{'is-invalid':$v.password.$error}"
          class="form-control">
        <div class="invalid-feedback" v-if="!$v.password.minLength">Required min {{ $v.password.$params.minLength.min }}
          chars
        </div>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm password</label>
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          @blur="$v.confirmPassword.$touch()"
          :class="{'is-invalid':$v.confirmPassword.$error}"
          class="form-control">
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Not the same
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(8),
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  }
}
</script>

<style scoped>

</style>

