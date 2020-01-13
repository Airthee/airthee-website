import globalTranslations from './global.data'
import userTranslations from './en-US.data'

export default {
  home: {
    sections: {
      informations: {
        title: 'Informations'
      },
      history: {
        title: 'History'
      },
      skills: {
        title: 'Skills'
      },
      socials: {
        title: 'Social networks'
      }
    }
  },
  contact: {
    title: 'Contact',
    mainText: [
      'A suggestion ? An idea ?',
      'You just want to contact me ? It\'s here !',
      'Just complete the following form.',
      'If your message requires a reply, I will get back to you as soon as possible.'
    ],
    formLabels: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Submit'
    },
    formPlaceholders: {
      name: 'John DOE',
      email: 'you@example.com',
      subject: 'The subject of your message',
      message: 'Your message'
    }
  },
  credits: {
    title: 'Credits',
    mainText: [
      'I must confess to you, I\'m not a good drawer... This is why I need some external resources to give you the best possible experience.',
      'So just a big "Thanks" to all these artists !'
    ]
  },
  footer: {
    changeLangText: 'Changer la langue',
    homeLabel: 'Home',
    contactLabel: 'Contact',
    creditsLabel: 'Credits',
    githubText: 'The sources of this project is on '
  },
  ...userTranslations,
  ...globalTranslations
}
