<template>
  <div>
    <section id="section-header" class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
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
        </div>
      </div>
    </section>

    <section id="section-informations" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
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
      </div>
      <!-- <scroll-to target="#section-skills" /> -->
    </section>

    <section id="section-education" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h3 class="subtitle is-3" :data-aos="randomAOSAnimation()">
            Education
          </h3>
          <div v-for="(formation, i) in education" :key="i" :data-aos="randomAOSAnimation()">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  {{ formation.description }}
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <div>{{ formation.location }}</div>
                  <div>{{ formation.school }}</div>
                  <div>{{ formation.year }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <scroll-to target="#section-skills" /> -->
    </section>

    <section id="section-skills" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
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
      </div>
    </section>

    <section id="section-socials" class="hero is-default is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h3 class="subtitle is-3" :data-aos="randomAOSAnimation()">
            Social networks
          </h3>
          <div class="socials--container">
            <a v-for="(network, i) in socialNetworks" :key="i" :href="network.link" target="_blank" :data-aos="randomAOSAnimation()">
              <img :src="network.img" :alt="network.imgAlt" class="social-img" :title="network.name">
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
  #section-header {
    figure.image {
      margin: auto;
      margin-bottom: 1rem;
      width: 50%;
    }
  }

  #section-education {
    .card {
      margin-bottom: 10px;
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
