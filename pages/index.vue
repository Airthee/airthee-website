<template>
  <div>
    <section id="section-header" ref="headerSection" class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div ref="headerContainer" class="container">
          <figure ref="headerFigureImage" class="image display-fade">
            <img :alt="$t('mainPicture.alt')" src="~/assets/images/me.jpg" class="is-rounded">
          </figure>
          <RandomCitation
            :citations="$t('citations')"
            :interval="10000"
          />
        </div>
      </div>
    </section>

    <!-- General informations -->
    <section id="section-informations" class="main-section">
      <div class="container">
        <h3 :data-aos="randomAOSAnimation()" v-t="'home.sections.informations.title'" class="subtitle is-3" />
        <div :data-aos="randomAOSAnimation()" class="card">
          <div class="card-content">
            <div class="content">
              <div v-for="(information, i) in $t('informations')" :key="i" v-html="information" />
            </div>
          </div>
        </div>
      </div>
      <!-- <scroll-to target="#section-skills" /> -->
    </section>

    <!-- History -->
    <section id="section-history" class="main-section">
      <div class="container">
        <h3 :data-aos="randomAOSAnimation()" v-t="'home.sections.history.title'" class="subtitle is-3" />
        <Timeline
          :data-aos="randomAOSAnimation()"
          :timeline-items="$t('timeline')"
          :date-locale="$i18n.locale"
        />
      </div>
    </section>

    <!-- Skills -->
    <section id="section-skills" class="main-section">
      <div class="container">
        <h3 :data-aos="randomAOSAnimation()" v-t="'home.sections.skills.title'" class="subtitle is-3" />
        <div class="columns is-multiline">
          <div v-for="(skill, skillIndex) in displayedSkills" :key="skillIndex" class="column is-one-third">
            <div :data-aos="randomAOSAnimation()">
              <div class="card">
                <header class="card-header">
                  <p v-html="skill.name" class="card-header-title" />
                </header>
                <div class="card-content">
                  <div class="content">
                    <progress v-html="skill.value" :value="skill.value" class="progress is-primary" max="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="displayedSkills.length < skills.length"
            @click="displayMoreSkills(3)"
          >
            Voir plus
          </button>
        </div>
      </div>
    </section>

    <!-- Social networks -->
    <section id="section-socials" class="main-section">
      <div class="container">
        <h3 :data-aos="randomAOSAnimation()" v-t="'home.sections.socials.title'" class="subtitle is-3" />
        <div class="socials--container">
          <a v-for="(network, i) in $t('socialNetworks')" :key="i" :href="network.link" :data-aos="randomAOSAnimation()" target="_blank">
            <img :src="network.img" :alt="network.imgAlt" :title="network.name" class="social-img">
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos'
// import ScrollTo from '@/components/ScrollTo'
import Timeline from 'timeline-vuejs'
import RandomCitation from '@/components/RandomCitation'
import 'aos/dist/aos.css'

export default {
  components: {
    // ScrollTo
    RandomCitation,
    Timeline
  },

  data () {
    return {
      skills: []
    }
  },

  computed: {
    displayedSkills () {
      return this.skills.filter(s => s.display === true)
    }
  },

  created () {
    // Display 5 first skills
    this.skills = this.$t('skills').map((s, index) => {
      s.display = index < 6
      return s
    })
  },

  mounted () {
    // AOS initialisation
    AOS.init({
      duration: 1200
    })
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
    },

    /**
     * Display X more skills
     */
    displayMoreSkills (number) {
      let skillsAdded = 0
      this.skills.forEach((s) => {
        if (skillsAdded === number) { return false }
        if (s.display === false) {
          s.display = true
          skillsAdded++
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/variables';

  @mixin background-image-opacity {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 95% 50%;
  }

  .main-section {
    margin: 3em 0;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #section-header {
    figure.image {
      display: table;
      margin: auto;
      margin-bottom: 1rem;
      width: 80%;
      height: auto;

      img {
        display: table-cell;
      }
    }
  }

  #section-informations {
    @include background-image-opacity;
    background-image: url('/images/information.svg');
  }

  #section-history {
    @include background-image-opacity;
    background-image: url('/images/return-to-the-past.svg');

    .timeline {
      max-width: none;

      .dot {
        background-color: $primary !important;
      }
    }
  }

  #section-skills {
    @include  background-image-opacity;
    background-image: url('/images/boost.svg');
  }

  #section-socials {
    @include  background-image-opacity;
    background-image: url('/images/networking.svg');

    a {
      padding: 10px;
      .social-img {
        width: auto;
        height: 60px;
      }
    }
  }
</style>
