export interface WorkProp {
  id: number;
  name: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
}

export const Work: WorkProp[] = [
  {
    id: 1,
    name: 'Wordle',
    description:
      'You have six attempts to guess a five-letter word. Make sure each guess is a valid word and press enter to submit.',
    tags: ['Json', 'React'],
    demo: 'https://wordle-aksin.vercel.app/',
    github: 'https://github.com/AkshayIndraganti/wordle',
  },
  {
    id: 2,
    name: 'Jobify Website',
    description:
      'Jobify is a modern job tracking website that allows you to track the status of jobs and store data in MongoDB.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    demo: 'https://jobify-alhb.onrender.com/',
    github: 'https://github.com/AkshayIndraganti/jobify',
  },
  {
    id: 3,
    name: 'Bookstore Website',
    description:
      'Bookstore website is built on top of nodejs,expessjs,and ejs. To learn CRUD operations on mongodb.',
    tags: ['Nodejs', 'Expressjs', 'Ejs', 'Mongodb'],
    demo: 'https://bookstore-9rc0.onrender.com/',
    github: 'https://github.com/AkshayIndraganti/Bookstore',
  },
  {
    id: 4,
    name: 'Next-js list app',
    description:
      'Build a nextjs app that will fetch data from json placeholder and displays using ssr(server side rendering)',
    tags: ['Next-js'],
    demo: 'https://next-js-project-ashy-five.vercel.app/',
    github:
      'https://github.com/AkshayIndraganti/Next-js-Project',
  },
  {
    id: 5,
    name: 'Dice Game',
    description:
      'It is built on top of HTML, CSS, and Javascript. Simple and addictive. To win this game you should score 100 dice points.',
    tags: ['Html', 'Css', 'Javascript'],
    demo: 'https://akshayindraganti.github.io/Pig-Game/',
    github: 'https://github.com/AkshayIndraganti/Pig-Game',
  },
  {
    id: 6,
    name: 'Guess The Number',
    description:
      'Guessing the number and win the game. pick a number between 1 to 20 and attempt to guess it in 3 attempts. If you guess the number, you win the game.',
    tags: ['Html', 'Css', 'Javascript'],
    demo: 'https://akshayindraganti.github.io/Guess-The-Number/',
    github:
      'https://github.com/AkshayIndraganti/Guess-The-Number',
  },
  {
    id: 7,
    name: 'Login and Signup Page',
    description:
      'Built a reusable login and signup page.which can used in any project.',
    tags: ['Html', 'Css', 'Javascript'],
    demo: 'https://akshayindraganti.github.io/Login-and-SignPage/',
    github:
      'https://github.com/AkshayIndraganti/Login-and-SignPage',
  },
  {
    id: 8,
    name: 'Aksin Dark Theme',
    description:
      'Visual studio code theme. It is built to attract new developer with effective color and nice user experience in code editor.',
    tags: ['Json, Visualstudio code'],
    demo: 'https://marketplace.visualstudio.com/items?itemName=Akshayindraganti.Indraganti-Akshay',
    github:
      'https://github.com/AkshayIndraganti/Aksin-Theme',
  },
];
