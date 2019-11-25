<template>
  <div>
    <header id="profile-picture--container" ref="profilePictureContainer">
      <div>
        <figure class="image is-256x256">
          <img class="is-rounded" src="@/assets/images/me.jpg" alt="Photo of me at Brooklin Bridge">
        </figure>
        <article class="message">
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
        <div class="scroll-down">
          <span class="icon">
            <i class="fas fa-home" />
          </span>
        </div>
      </div>
    </header>
    <h1 class="title is-1" data-aos="fade-down">
      $ whoami
    </h1>
    <h3 class="subtitle is-3" data-aos="fade-up">
      Informations
    </h3>
    <div class="box" data-aos="zoom-in-left">
      <p class="content">
        <ul>
          <li v-for="(information, i) in informations" :key="i">
            {{ information }}
          </li>
        </ul>
      </p>
    </div>

    <h3 class="subtitle is-3">
      Skills
    </h3>
    <div v-for="(skillCategory, i) in skills" :key="i" :data-aos="`fade-${i % 2 == 0 ? 'right': 'left'}`">
      <h4 class="subtitle is-4">
        {{ skillCategory.category }}
      </h4>
      <div v-for="(skill, j) in skillCategory.skills" :key="j" class="skills-card--container" data-aos="flip-up">
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
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data () {
    const now = new Date()
    const birthDay = new Date(1996, 7, 17)
    const diff = parseInt((now - birthDay) / (60 * 60 * 24 * 365 * 1000))

    return {
      informations: [
        'Raphaël TISON (@Airthee)',
        `${birthDay.getDate().toString().padStart(2, '0')}/${(birthDay.getMonth() + 1).toString().padStart(2, '0')}/${birthDay.getFullYear()} (${diff} years old)`,
        'Vendée, France'
      ],
      skills: [
        {
          category: 'Programming',
          skills: [
            {
              name: 'VueJS',
              value: 60
            },
            {
              name: 'PHP',
              value: 90
            },
            {
              name: 'NodeJS',
              value: 70
            },
            {
              name: 'SQL',
              value: 70
            },
            {
              name: 'Python',
              value: 30
            },
            {
              name: 'Java',
              value: 30
            },
            {
              name: 'C / C++',
              value: 30
            },
            {
              name: 'HTML / CSS',
              value: 80
            }
          ]
        }
      ],
      citations: [
        {
          text: 'Un objectif n’est pas toujours censé être atteint, il sert surtout de direction, de moteur, et d’accélérateur.',
          author: '- Bruce Lee'
        }
      ],
      selectedCitation: null
    }
  },
  created () {
    this.selectedCitation = this.citations[Math.floor(Math.random() * this.citations.length)]
  },
  mounted () {
    const profilePictureContainer = this.$refs.profilePictureContainer
    profilePictureContainer.style.height = `calc(100vh - ${profilePictureContainer.offsetTop}px` // window.innerHeight - profilePictureContainer.offsetTop
    AOS.init({
      duration: 1200
    })
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
    }
  }

  .skills-card--container {
    width: 25%;
    display: inline-block;
    padding: 10px;
  }
</style>
