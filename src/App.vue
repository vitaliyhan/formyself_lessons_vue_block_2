<template>
  <div class="container">
    <form class="pt-4" @submit.prevent="onSubmit">
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
        <div class="invalid-feedback" v-if="!$v.email.uniqueEmail">This email already existed</div>
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
      <button class="btn btn-success mt-3" type="submit" :disabled="$v.$invalid">Submit</button>
      <pre>{{ $v.$invalid }}</pre>
    </form>

  </div>
</template>

<script>
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  methods: {
    onSubmit() {
      console.log('Email',this.email)
      console.log('password',this.password)
    }
  },
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
      email,
      uniqueEmail: function (newEmail) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@ya.ru'
            resolve(true)
          }, 500)
        })
      }
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

