<template>
  <section class="section has-background-white">
    <div class="container">
      <h1 class="title">
        Contact
      </h1>

      <div class="content">
        <p>
          You have a suggestion, an idea ?<br>
          Or you just want to tell me something ? Just complete the following form.<br>
        </p>

        <form ref="formContact" name="contact" method="POST" data-netlify="true">
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input v-model="name" required class="input" type="text" placeholder="John DOE">
              <span class="icon is-small is-left">
                <i class="fas fa-id-badge" />
              </span>
              <p v-if="nameError.length > 0" class="help is-danger">
                {{ nameError }}
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input v-model="email" required class="input" type="email" placeholder="you@example.com">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
              <p v-if="emailError.length > 0" class="help is-danger">
                {{ emailError }}
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <input v-model="subject" required class="input" type="text" placeholder="Subject">
              <p v-if="subjectError.length > 0" class="help is-danger">
                {{ subjectError }}
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea v-model="message" required class="textarea" placeholder="Your message here" />
              <p v-if="messageError.length > 0" class="help is-danger">
                {{ messageError }}
              </p>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button @click="submitForm" type="button" class="button is-link">
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
export default {
  data () {
    return {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      subject: '',
      subjectError: '',
      message: '',
      messageError: ''
    }
  },

  watch: {
    name (val) {
      if (val.length === 0) {
        this.nameError = 'Name cannot be empty'
      } else {
        this.nameError = ''
      }
    }
  },

  methods: {
    submitForm () {
      if (this.name.length === 0) {
        this.nameError = 'Field'
      }
    },

    updateNameError () {

    }
  }
}
</script>

<style>

</style>
