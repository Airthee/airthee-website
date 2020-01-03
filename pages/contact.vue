<template>
  <section class="section has-background-white">
    <div class="container">
      <h1 class="title">
        Contact
      </h1>

      <div class="content">
        <p>
          You have a suggestion, an idea ?
          <br>Or you just want to tell me something ? Just complete the following form.
          <br>
        </p>

        <div v-if="formGlobalNotification !== null" :class="formGlobalNotification.class" class="notification">
          <button @click="formGlobalNotification = null" class="delete" />
          {{ formGlobalNotification.message }}
        </div>

        <form ref="formContact" @submit.prevent="submitForm" name="contact" method="POST" data-netlify="true">
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input
                v-model="formData.name"
                name="name"
                required
                class="input"
                type="text"
                placeholder="John DOE"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-id-badge" />
              </span>
              <p
                v-if="formErrors.name !== null && formErrors.name.length > 0"
                class="help is-danger"
              >
                {{ formErrors.name }}
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input
                v-model="formData.email"
                name="email"
                required
                class="input"
                type="email"
                placeholder="you@example.com"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
              <p
                v-if="formErrors.email !== null && formErrors.email.length > 0"
                class="help is-danger"
              >
                {{ formErrors.email }}
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <input
                v-model="formData.subject"
                name="subject"
                required
                class="input"
                type="text"
                placeholder="Subject"
              >
              <p
                v-if="formErrors.subject !== null && formErrors.subject.length > 0"
                class="help is-danger"
              >
                {{ formErrors.subject }}
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                v-model="formData.message"
                name="message"
                required
                class="textarea"
                placeholder="Your message here"
              />
              <p
                v-if="formErrors.message !== null && formErrors.message.length > 0"
                class="help is-danger"
              >
                {{ formErrors.message }}
              </p>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button :disabled="hasError" type="submit" class="button is-link">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      formErrors: {
        name: null,
        email: null,
        subject: null,
        message: null
      },
      formGlobalNotification: null
    }
  },

  computed: {
    hasError () {
      return Object.values(this.formErrors)
        .map(e => e !== null && e.length === 0)
        .includes(false)
    }
  },

  watch: {
    'formData.name' (val) {
      // Length check
      this.formErrors.name = (val.length === 0) ? 'Name cannot be empty' : ''
    },
    'formData.email' (val) {
      // Length check
      this.formErrors.email = (val.length === 0) ? 'Email cannot be empty' : ''
    },
    'formData.subject' (val) {
      // Length check
      this.formErrors.subject = (val.length === 0) ? 'Subject cannot be empty' : ''
    },
    'formData.message' (val) {
      // Length check
      this.formErrors.message = (val.length === 0) ? 'Message cannot be empty' : ''
    }
  },

  methods: {
    submitForm () {
      // If no error, we can submit
      // Else, errors are already displayed
      if (!this.hasError) {
        // Retrive form action
        const formAction = this.$refs.formContact.action
        // console.log(this.formData) // Données du formulaire

        // Serialize form
        // Do post
        axios.post(formAction, this.formData)
          .then((response) => {
            this.formGlobalNotification = {
              message: 'Message successfully sent',
              class: 'is-success'
            }
          })
          .catch((error) => {
            this.formGlobalNotification = {
              message: error,
              class: 'is-danger'
            }
          })
      }
    }
  }
}
</script>

<style>
</style>
