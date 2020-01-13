import globalTranslations from './global.data'

export default {
  app: {
    meta: {
      description: 'Personal website of Raphaël TISON (@Airthee). Discover my achievements, my skills, my activities, in short, a lot of things about me!'
    }
  },
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
  mainPicture: {
    alt: 'Picture of me at the New York Brooklyn Bridge'
  },
  informations: [
    'Raphaël TISON (@Airthee)',
    '23 years old',
    'Vendée, France'
  ],
  timeline: [
    {
      title: 'EPSI (Nantes, 44200, France)',
      description: 'RNCP 1 - Expert in computer science & information system',
      from: new Date(2018, 9 - 1) // september
    },
    {
      title: 'IUT (La Roche sur Yon, 85000, France)',
      description: 'Professional License DIP',
      from: new Date(2017, 9 - 1) // september
    },
    {
      title: 'Lycée Jean de Lattre De Tassigny (La Roche sur Yon, 85000, France)',
      description: 'BTS Digital Systems',
      from: new Date(2015, 9 - 1) // september
    },
    {
      title: 'Lycée Jean de Lattre De Tassigny (La Roche sur Yon, 85000, France)',
      description: 'Bachelor\'s degree',
      from: new Date(2013, 9 - 1) // september
    }
  ],
  socialNetworks: [
    {
      name: 'Github',
      link: 'https://github.com/Airthee',
      img: '/images/socials/github.png',
      imgAlt: 'Github logo'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Airthee',
      img: '/images/socials/twitter.png',
      imgAlt: 'Twitter logo'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/raphael-tison',
      img: '/images/socials/linkedin.png',
      imgAlt: 'LinkedIn logo'
    }
  ],
  citations: [
    {
      text: 'An objective is not always supposed to be achieved, it serves mainly as a steering, engine, and throttle.',
      author: 'Bruce Lee'
    },
    {
      text: 'The only way to do a good job is to love what you do. If you haven\'t figured it out yet, keep looking.',
      author: 'Steve Jobs'
    },
    {
      text: 'Believing in yourself is the first step to achieving a goal. If you think you\'re going to fail, you probably will.',
      author: 'Will Smith'
    },
    {
      text: 'If you want to lead a happy life, associate it with a goal, not with people or objects.',
      author: 'Albert Einstein'
    },
    {
      text: 'Failure is the foundation of success.',
      author: 'Lao Tseu'
    }
  ],
  ...globalTranslations
}
