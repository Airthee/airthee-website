<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 v-t="'contact.title'" class="title" />
          <div v-for="(line, lineIndex) in $t('contact.mainText')" :key="lineIndex" v-html="line" class="container" />
        </div>
      </div>
    </section>

    <section class="section has-background-white">
      <div class="container">
        <div class="content">
          <div v-if="formGlobalNotification !== null" :class="formGlobalNotification.class" class="notification">
            <button @click="formGlobalNotification = null" class="delete" />
            {{ formGlobalNotification.message }}
          </div>

          <form
            ref="formContact"
            @submit.prevent="submitForm"
            method="post"
          >
            <div class="field">
              <label v-t="'contact.formLabels.name'" class="label" />
              <div class="control has-icons-left">
                <input
                  v-model="formData.name"
                  :placeholder="$t('contact.formPlaceholders.name')"
                  name="name"
                  required
                  class="input"
                  type="text"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-id-badge" />
                </span>
                <p
                  v-if="formErrors.name !== null && formErrors.name.length > 0"
                  v-html="formErrors.name"
                  class="help is-danger"
                />
              </div>
            </div>

            <div class="field">
              <label v-t="'contact.formLabels.email'" class="label" />
              <div class="control has-icons-left">
                <input
                  v-model="formData.email"
                  :placeholder="$t('contact.formPlaceholders.email')"
                  name="email"
                  required
                  class="input"
                  type="email"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope" />
                </span>
                <p
                  v-if="formErrors.email !== null && formErrors.email.length > 0"
                  v-html="formErrors.email"
                  class="help is-danger"
                />
              </div>
            </div>

            <div class="field">
              <label v-t="'contact.formLabels.subject'" class="label" />
              <div class="control">
                <input
                  v-model="formData.subject"
                  :placeholder="$t('contact.formPlaceholders.subject')"
                  name="subject"
                  required
                  class="input"
                  type="text"
                >
                <p
                  v-if="formErrors.subject !== null && formErrors.subject.length > 0"
                  v-html="formErrors.subject"
                  class="help is-danger"
                />
              </div>
            </div>

            <div class="field">
              <label v-t="'contact.formLabels.message'" class="label" />
              <div class="control">
                <textarea
                  v-model="formData.message"
                  :placeholder="$t('contact.formPlaceholders.message')"
                  name="message"
                  required
                  class="textarea"
                />
                <p
                  v-if="formErrors.message !== null && formErrors.message.length > 0"
                  v-html="formErrors.message"
                  class="help is-danger"
                />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button v-t="'contact.formLabels.submit'" :disabled="hasError" type="submit" class="button is-link" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
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
        const formAction = `//${window.location.host}/api/contact`
        // console.log(this.formData) // Données du formulaire

        // Serialize form
        // Do post
        const axiosConfig = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        axios.post(formAction, this.encodeFormValues(), axiosConfig)
          .then(() => {
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
    },

    // Encode form values to URI params
    encodeFormValues () {
      const urlParams = Object.keys(this.formData)
        .map(name => `${name}=${encodeURIComponent(this.formData[name])}`)
        .join('&')
      return urlParams
    }
  }
}
</script>
