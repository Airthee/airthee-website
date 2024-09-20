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
        title: 'Skills',
        showMore: 'Show more'
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
    changeLangText: 'Change language',
    homeLabel: 'Home',
    contactLabel: 'Contact',
    creditsLabel: 'Credits',
    githubText: 'The sources of this project is on '
  },
  mainPicture: {
    alt: 'Picture of me at the New York Brooklyn Bridge'
  },
  informations: `
    <p>
      My name is <b>Raphaël TISON (@Airthee)</b>, I'm <b>26 years old</b> and I live in Loire Atlantique, France.<br/>
      Since very young, I'm <b>passionate about computers</b>, more specifically <b>software development</b>.
    <p>
      Apart from my very specialized academic background in this field, I like to train myself on <b>new technologies</b> 
      and <b>new languages</b>. In addition to being <b>passionate and self-taught</b>, I'm also very <b>curious</b>.
      Indeed, I'm very interested in new developments in the field, without hesitating to <b>go deeper</b> into the subject
      if it interests me.
    <p>
    <p>
      On the professional side, I know how to <b>integrate</b> into an existing team and I'm <b>able to make proposals</b>
      if necessary.
    </p>
    <p>
      Apart from computers, I also have other passions, such as <b>motorcycle rides</b> with my friends.
      I also like to relax in front of <b>series</b>, among my favorites we can find <i>Breaking Bad</i>,
      <i>Mr Robot</i>, <i>La Casa de Papel</i> and lastly <i>Better Call Saul</i>.
      Finally, I'm rather sporty and I like to practice different sports, according to my wishes : <b>Thai boxing (Muay Thai)</b>, <b>Krav Maga</b>, <b>fitness / strength training<b/>.
    </p>
`,
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
