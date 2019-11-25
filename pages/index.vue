<template>
  <div>
    <header id="profile-picture--container" ref="profilePictureContainer">
      <div>
        <h1 id="whoami" class="title is-1 display-fade">
          $ whoami
        </h1>
        <figure class="image display-fade">
          <img class="is-rounded" src="@/assets/images/me.jpg" alt="Photo of me at Brooklin Bridge">
        </figure>
        <article class="message display-fade">
          <div class="message-body">
            <blockquote>
              {{ selectedCitation.text }}
              <footer>
                <cite>
                  {{ selectedCitation.author }}
                </cite>
              </footer>
            </blockquote>
          </div>
        </article>
        <!-- <scroll-to target="#whoami" /> -->
      </div>
    </header>

    <section id="section-informations" class="section--block">
      <div class="section--block--container">
        <h3 class="subtitle is-3" :data-aos="randomAOSAnimation()">
          Informations
        </h3>
        <div class="box" :data-aos="randomAOSAnimation()">
          <p class="content">
            <ul>
              <li v-for="(information, i) in informations" :key="i">
                {{ information }}
              </li>
            </ul>
          </p>
        </div>
      </div>
      <!-- <scroll-to target="#section-skills" /> -->
    </section>

    <section id="section-skills" class="section--block">
      <div class="section--block--container">
        <h3 class="subtitle is-3" :data-aos="randomAOSAnimation()">
          Skills
        </h3>
        <div v-for="(skill, i) in skills" :key="i" class="skills-card--container" :data-aos="randomAOSAnimation()">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{ skill.name }}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <progress class="progress is-primary" :value="skill.value" max="100">
                  {{ skill.value }}%
                </progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-socials" class="section--block">
      <div class="section--block--container">
        <h3 class="subtitle is-3" :data-aos="randomAOSAnimation()">
          Social networks
        </h3>
        <div class="socials--container">
          <a v-for="(network, i) in socialNetworks" :key="i" :href="network.link" target="_blank" :data-aos="randomAOSAnimation()">
            <img :src="network.img" :alt="network.imgAlt" class="social-img" :title="network.name">
          </a>
        </div>
      </div>
    </section>

    <footer>
      Contact : <a href="mailto:contact@airthee.com">contact (at) airthee.com</a>
    </footer>
  </div>
</template>

<script>
import AOS from 'aos'
// import ScrollTo from '@/components/ScrollTo'
import 'aos/dist/aos.css'

export default {
  // components: {
  //   ScrollTo
  // },
  data () {
    // Add static data to component data
    return Object.assign({
      selectedCitation: null
    }, require('./index.data.json'))
  },
  created () {
    // Select a citation randomly
    this.selectedCitation = this.randomCitation()
  },
  mounted () {
    // Dynamic height for profil container
    // Needs to fit all the window
    const profilePictureContainer = this.$refs.profilePictureContainer
    profilePictureContainer.style.height = `calc(100vh - ${profilePictureContainer.offsetParent.offsetTop}px)` // window.innerHeight - profilePictureContainer.offsetTop
    profilePictureContainer.style.paddingBottom = `${profilePictureContainer.offsetParent.offsetTop}px` // window.innerHeight - profilePictureContainer.offsetTop

    // AOS initialisation
    AOS.init({
      duration: 1200
    })

    // Pick a citation randomly every 10 second
    setInterval(() => { this.selectedCitation = this.randomCitation() }, 10000)
  },
  methods: {
    /**
     * Method picking a citation randomly
     */
    randomCitation () {
      return this.citations[Math.floor(Math.random() * this.citations.length)]
    },

    /**
     * Method picking a random AOS class
     */
    randomAOSAnimation (type) {
      const animations = {
        fade: [
          'fade-up',
          'fade-down',
          'fade-right',
          'fade-left',
          'fade-up-right',
          'fade-up-left',
          'fade-down-right',
          'fade-down-left'
        ],
        flip: [
          'flip-left',
          'flip-right',
          'flip-up',
          'flip-down'
        ],
        zoom: [
          'zoom-in',
          'zoom-in-up',
          'zoom-in-down',
          'zoom-in-left',
          'zoom-in-right',
          'zoom-out',
          'zoom-out-up',
          'zoom-out-down',
          'zoom-out-left',
          'zoom-out-right'
        ]
      }

      // If a type is specified, select a class for this type
      // else, select a random type
      if (type === undefined) {
        type = Object.keys(animations)[Math.floor(Math.random() * Object.keys(animations).length)]
      }
      return animations[type][Math.floor(Math.random() * animations[type].length)]
    }
  }
}
</script>

<style lang="scss">
  #profile-picture--container {
    margin: auto;
    text-align: center;
    position: relative;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    figure.image {
      margin: auto;
      margin-bottom: 1rem;
      width: 45vw;
      height: auto;
    }
  }

  .skills-card--container {
    width: 25%;
    display: inline-block;
    padding: 10px;
  }

  .socials--container {
    display: inline-block;
    text-align: center;

    a {
      padding: 10px;
      .social-img {
        width: auto;
        height: 60px;
      }
    }
  }

  .section--block {
    height: 100vh;
    position: relative;

    .section--block--container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }

  .display-fade {
    animation-duration: 7s;
    animation-name: displayFade;
  }

  @keyframes displayFade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
