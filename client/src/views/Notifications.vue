<template>
  <v-container fill-height>
    <v-layout justify-center align-center column>
      <h1 style="text-align: center">Notifications Form</h1>
      <p>Want to be updated with the latest changes?</p>
      <!--    <v-divider style="background-color: rgb(195, 195, 195)"></v-divider>-->
      <v-alert
        v-if="error || message"
        border="left"
        :color="error ? 'red' : 'green' "
        dismissible
        elevation="6"
        :type="error ? 'error' : 'success' "
      >{{ error || message }}</v-alert>
      <form style="width: 50%">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          :color="loading ? 'success' : undefined"
          :loading="!!loading"
          :disabled="!!loading"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          :color="loading ? 'success' : undefined"
          :loading="!!loading"
          :disabled="!!loading"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
        <div style="display: flex;">
          <vue-recaptcha
            size="invisible"
            @verify="submit"
            sitekey="6LeUPf8ZAAAAAB5xjN_eN668I8TljIoRGggJeTeK">
            <v-btn :disabled="!!loading"
                   class="mr-4"
            >
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="rgba(255, 255, 255, 0.3)"
                style="height: 12px; margin-right: 5px; margin-left: 0; width: 12px;"
              ></v-progress-circular> submit
            </v-btn>
          </vue-recaptcha>
          <v-btn :disabled="!!loading" @click="clear">
            clear
          </v-btn>
        </div>
      </form>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate';
import Backend from '@/utils/AxiosMethod';
import {
  required, maxLength, email, minLength,
} from 'vuelidate/lib/validators';
import VueRecaptcha from 'vue-recaptcha';

const api = new Backend();
/* eslint-disable */
export default {
  mixins: [validationMixin],

  components: { VueRecaptcha },

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    suggestion: { required, minLength: minLength(30), maxLength: maxLength(255) },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    checkbox: false,
    loading: false,
    message: '',
    error: '',
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
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
    async submit () {
      this.error = '';
      this.message = '';
      this.$v.$touch();
      if (this.emailErrors.length >= 1 || this.nameErrors.length >= 1 || this.checkboxErrors.length >= 1) return;
      this.loading = true;
      try {
        const data = await api.Post({ name: this.name, email: this.email },'forms/notifications');
        this.loading = false;
        this.message = data.message;
      } catch (e) {
        this.loading = false;
        this.error = e.response && e.response.error || 'Something happened, try again later.';
      }
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.suggestion = ''
      this.checkbox = false
    },
  },
}
</script>
