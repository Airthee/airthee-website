import globalTranslations from './global.data'

export default {
  app: {
    meta: {
      description: 'Site personnel de Raphaël TISON (@Airthee). Découvrez mes réalisations, mes compétences, mes activités, bref, tout un tas de choses à mon sujet !'
    }
  },
  home: {
    sections: {
      informations: {
        title: 'Informations'
      },
      history: {
        title: 'Historique'
      },
      skills: {
        title: 'Compétences',
        showMore: 'Afficher plus'
      },
      socials: {
        title: 'Réseaux sociaux'
      }
    }
  },
  contact: {
    title: 'Contact',
    mainText: [
      'Une suggestion ? Une idée ?',
      'Vous souhaitez me contacter ? C\'est ici !',
      'Complétez simplement le formulaire suivant.',
      'Si votre message nécessite une réponse, je vous répondrai dès que possible.'
    ],
    formLabels: {
      name: 'Nom',
      email: 'Email',
      subject: 'Objet',
      message: 'Message',
      submit: 'Envoyer'
    },
    formPlaceholders: {
      name: 'Pierre MARTIN',
      email: 'adresse@exemple.fr',
      subject: 'L\'objet de votre message',
      message: 'Votre message'
    }
  },
  credits: {
    title: 'Crédits',
    mainText: [
      'Je dois vous l\'admettre, je suis pas un bon dessinateur... C\'est pouquoi j\'ai besoin de ressources extérieures pour vous offrir la meilleure expérience possible.',
      'Alors juste un grand "Merci" à tous ces artistes !'
    ]
  },
  footer: {
    changeLangText: 'Changer la langue',
    homeLabel: 'Accueil',
    contactLabel: 'Contact',
    creditsLabel: 'Crédits',
    githubText: 'Le code de ce projet est disponible sur '
  },
  mainPicture: {
    alt: 'Photo de moi sur le pont de Brooklyn à New York'
  },
  informations: `
    <p>
      Je m'appelle <b>Raphaël TISON (@Airthee)</b>, j'ai <b>23 ans</b> et je vis en Vendée, en France.<br/>
      Depuis très jeune, je suis <b>passioné par l'informatique</b>, plus particulièrement par le <b>développement</b>.
    <p>
      En dehors de mon parcours scolaire très spécialisé dans ce domaine, j'aime me former par moi-même
      sur les <b>nouvelles technologies</b> et les <b>nouveaux langages</b>. En plus d'être <b>passionné et autodicacte</b>, je suis
      aussi très <b>curieux</b>. En effet, je m'intéresse beaucoup aux nouveautés du milieu, sans hésiter à <b>approfondir</b> le sujet
      si celui-ci m'intéresse.
    <p>
    <p>
      Côté professionnel, je sais <b>m'intégrer</b> à une équipe existante et suis <b>force de proposition</b> si besoin.
    </p>
    <p>
      En dehors de l'informatique, j'ai aussi d'autres passions, telles que les sorties à <b>moto</b> avec mes amis.
      J'aime aussi me détendre devant des <b>séries</b>, parmi mes préférées nous pouvons retrouver <i>Breaking Bad</i>,
      <i>Mr Robot</i> ou encore <i>La Casa de Papel</i>. Enfin, je pratique aussi la <b>boxe Thaïlandaise (Muay Thaï)</b> depuis quelques années.
    </p>
  `,
  timeline: [
    {
      title: 'EPSI (Nantes, 44200, France)',
      description: 'RNCP 1 - Expert en informatique & système d’information',
      from: new Date(2018, 9 - 1) // september
    },
    {
      title: 'IUT (La Roche sur Yon, 85000, France)',
      description: 'Licence Professionnelle DIP',
      from: new Date(2017, 9 - 1) // september
    },
    {
      title: 'Lycée Jean de Lattre De Tassigny (La Roche sur Yon, 85000, France)',
      description: 'BTS Systèmes Numériques',
      from: new Date(2015, 9 - 1) // september
    },
    {
      title: 'Lycée Jean de Lattre De Tassigny (La Roche sur Yon, 85000, France)',
      description: 'BAC STI2D',
      from: new Date(2013, 9 - 1) // september
    }
  ],
  socialNetworks: [
    {
      name: 'Github',
      link: 'https://github.com/Airthee',
      img: '/images/socials/github.png',
      imgAlt: 'Logo Github'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Airthee',
      img: '/images/socials/twitter.png',
      imgAlt: 'Logo Twitter'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/raphael-tison',
      img: '/images/socials/linkedin.png',
      imgAlt: 'Logo LinkedIn'
    }
  ],
  citations: [
    {
      text: 'Un objectif n’est pas toujours censé être atteint, il sert surtout de direction, de moteur, et d’accélérateur.',
      author: 'Bruce Lee'
    },
    {
      text: 'La seule façon de faire du bon travail est d’aimer ce que vous faites. Si vous n’avez pas encore trouvé, continuez à chercher.',
      author: 'Steve Jobs'
    },
    {
      text: 'Croire en soi est la première étape pour atteindre un objectif. Si vous pensez que vous allez échouer, vous le ferez probablement.',
      author: 'Will Smith'
    },
    {
      text: 'Si vous voulez mener une vie heureuse, associez-la à un objectif, et non à des personnes ou à des objets.',
      author: 'Albert Einstein'
    },
    {
      text: "L'échec est le fondement de la réussite.",
      author: 'Lao Tseu'
    }
  ],
  ...globalTranslations
}
