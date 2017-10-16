// data for portfolio
var examplesArr = [
  {
    img: 'Item_1.jpg',
    alt: 'scrumi.org',
    description: 'Web site for managing IT projects using Scrum (in progress). Build using React and Redux',
    demo: 'Demo',
    code: 'Code',
    demoLink: 'https://scrumi.org/',
    codeLink: '#',
    title: 'Scrumi.org',
    technology: 'Technologies:',
    technologies: ['HTML 5 |', 'CSS 3 |', 'React |', 'Redux |', 'Webpack 2 |', 'SCSS |', 'JS']
  },
  {
    img: 'Item_2.jpg',
    alt: 'Royal Food',
    description: 'Responsive restaurant site template. Build using flex box',
    demo: 'Demo',
    code: 'Code',
    demoLink: 'https://vovamelnyk.github.io/Royal-Food/',
    codeLink: 'https://github.com/VovaMelnyk/Royal-Food',
    title: 'Royal Food',
    technology: 'Technologies:',
    technologies: ['HTML 5 |', 'CSS 3 |', 'Gulp |', 'SCSS |', 'JQuery |', 'Google Maps Embed API']
  },
  { img: 'Item_4.jpg',
    alt: 'Breakout game',
    description: 'Breakout game using canvas with mouse and keyboard controls',
    demo: 'Demo',
    code: 'Code',
    demoLink: 'https://vovamelnyk.github.io/Breakout-game/',
    codeLink: 'https://github.com/VovaMelnyk/Breakout-game',
    title: 'Breakout game',
    technology: 'Technologies:',
    technologies: ['HTML 5 |', 'CSS 3 |', 'Canvas', '| Javascript OOP']
  },
  {
    img: 'Item_3.jpg',
    alt: 'This portfolio',
    description: 'Responsive portfolio site with using bootstrap 3 grid and lodash template',
    demo: 'Demo',
    code: 'Code',
    demoLink: 'https://vovamelnyk.github.io/Portfolio/',
    codeLink: 'https://github.com/VovaMelnyk/Portfolio',
    title: 'This portfolio',
    technology: 'Technologies:',
    technologies: ['HTML 5 |', 'CSS 3 |', 'Bootstrap 3', '| Lodash template']
  }
];

 // lodash template code

var container = document.querySelector('.works__body');
var source = document.getElementById('examples-lodash').textContent;
var tmpl = _.template(source);
container.innerHTML += tmpl({data:examplesArr});
