<template>
  <div>
    <section id="section-header" ref="headerSection" class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div ref="headerContainer" class="container">
          <figure ref="headerFigureImage" class="image display-fade">
            <img class="is-rounded" src="@/assets/images/me.jpg" alt="Photo of me at Brooklin Bridge">
          </figure>
          <RandomCitation
            :citations="citations"
            :interval="10000"
          />
        </div>
      </div>
    </section>

    <section id="section-informations" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h3 :data-aos="randomAOSAnimation()" class="subtitle is-3">
            Informations
          </h3>
          <div :data-aos="randomAOSAnimation()" class="box">
            <p class="content">
              <ul>
                <li v-for="(information, i) in informations" :key="i">
                  {{ information }}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <!-- <scroll-to target="#section-skills" /> -->
    </section>

    <section id="section-history" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h3 :data-aos="randomAOSAnimation()" class="subtitle is-3">
            History
          </h3>
          <Timeline
            :data-aos="randomAOSAnimation()"
            :timeline-items="timeline"
            date-locale="fr-FR"
          />
        </div>
      </div>
    </section>

    <section id="section-skills" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h3 :data-aos="randomAOSAnimation()" class="subtitle is-3">
            Skills
          </h3>
          <div v-for="(skill, i) in skills" :key="i" :data-aos="randomAOSAnimation()" class="skills-card--container">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  {{ skill.name }}
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <progress :value="skill.value" class="progress is-primary" max="100">
                    {{ skill.value }}%
                  </progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-socials" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h3 :data-aos="randomAOSAnimation()" class="subtitle is-3">
            Social networks
          </h3>
          <div class="socials--container">
            <a v-for="(network, i) in socialNetworks" :key="i" :href="network.link" :data-aos="randomAOSAnimation()" target="_blank">
              <img :src="network.img" :alt="network.imgAlt" :title="network.name" class="social-img">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos'
// import ScrollTo from '@/components/ScrollTo'
import Timeline from 'timeline-vuejs'
import indexData from './index.data.js'
import RandomCitation from '@/components/RandomCitation'
import 'aos/dist/aos.css'

export default {
  components: {
    // ScrollTo
    RandomCitation,
    Timeline
  },
  data: () => Object.assign({}, indexData),
  mounted () {
    // AOS initialisation
    AOS.init({
      duration: 1200
    })

    // Resize image
    this.$refs.headerFigureImage.style.width = (this.$refs.headerSection.offsetHeight - this.$refs.headerContainer.offsetHeight).toString().concat('px')
  },
  methods: {
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
  #section-header {
    figure.image {
      margin: auto;
      margin-bottom: 1rem;
      width: 10%;
    }
  }

  #section-skills {
    .skills-card--container {
      width: 25%;
      display: inline-block;
      padding: 10px;
    }
  }

  #section-socials {
    a {
      padding: 10px;
      .social-img {
        width: auto;
        height: 60px;
      }
    }
  }
</style>
