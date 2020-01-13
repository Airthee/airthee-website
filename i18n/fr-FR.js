import globalTranslations from './global.data'
import userTranslations from './fr-FR.data'

export default {
  home: {
    sections: {
      informations: {
        title: 'Informations'
      },
      history: {
        title: 'Historique'
      },
      skills: {
        title: 'Compétences'
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
      'Je dois vous l\'adrettre, je suis pas un bon dessinateur... C\'est pouquoi j\'ai besoin de ressources extérieures pour vous offrir la meilleure expérience possible.',
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
  ...userTranslations,
  ...globalTranslations
}
