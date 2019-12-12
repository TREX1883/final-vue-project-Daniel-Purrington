<template>
    <div class="container">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="25"
        label="Username"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
        <v-text-field
        v-model="pass"
        :error-messages="passErrors"
        :counter="25"
        label="Password"
        required
        @input="$v.pass.$touch()"
        @blur="$v.pass.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="What's your favorite color in MTG cards?"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you like Magic the Gatherings?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>
  
      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
    </div>
</template>

<script>
// import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

    export default {
    validations: {
    name: { required, maxLength: maxLength(25) },
    pass: { required, maxLength: maxLength(25) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    pass: '',
    email: '',
    select: null,
    items: [
      'Red',
      'Blue',
      'Black',
      'Green',
      'White',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('This is against the law!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Pick one color is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Username must be at most 25 characters long')
      !this.$v.name.required && errors.push('Username is required.')
      return errors
    },
    passErrors () {
      const errors = []
      if (!this.$v.pass.$dirty) return errors
      !this.$v.pass.maxLength && errors.push('Password must be at most 25 characters long')
      !this.$v.pass.required && errors.push('Password is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.pass = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  }
}
</script>

<style scoped>
.container {
    max-width: 600px;
    padding: 50px 0px;
}
</style>
