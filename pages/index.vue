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
        <vue-glide>
          <vue-glide-slide v-for="(category, categoryIndex) in $t('skills')" :key="categoryIndex">
            <div :data-aos="randomAOSAnimation()">
              <div class="card">
                <header class="card-header">
                  <p v-html="category.name" class="card-header-title" />
                </header>
                <div v-for="(item, itemIndex) in category.items" :key="itemIndex" class="card-content">
                  <div class="content">
                    {{ item.name }}
                    <progress v-html="item.value" :value="item.value" class="progress is-primary" max="100" />
                  </div>
                </div>
              </div>
            </div>
          </vue-glide-slide>
          <template slot="control">
            <a href="javascript:void(0)" class="button-prev" data-glide-dir="<">
              <i class="fas fa-angle-left fa-3x" />
            </a>
            <a href="javascript:void(0)" class="button-next" data-glide-dir=">">
              <i class="fas fa-angle-right fa-3x" />
            </a>
          </template>
        </vue-glide>
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
      hiddenSkills: [],
      displayedSkills: []
    }
  },

  mounted () {
    // AOS initialisation
    AOS.init({
      duration: 1200
    })
  },

  methods: {
    /**
     * Display X more skills
     */
    displayMoreSkills (number) {
      if (this.hiddenSkills.length > 0) {
        this.hiddenSkills
          .splice(0, number)
          .forEach((skill) => { this.displayedSkills.push(skill) })
      }
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

    @mixin button-nav {
      position: absolute;
      top: 50%;
      cursor: pointer;
    }

    .glide {
      position: relative;

      .button-prev {
        @include button-nav();
        transform: translate(-100%, 50%);
        left: -10px;
      }

      .button-next {
        @include button-nav();
        transform: translate(100%, 50%);
        right: -10px;
      }
    }
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
