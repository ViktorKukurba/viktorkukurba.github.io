import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import header from './header'
import shapes from './shapes'
import contacts from './contacts'
import experience from './experience'
import portfolio from './portfolio'
import sections from './sections'


const rootReducer = combineReducers({
  header,
  shapes,
  contacts,
  experience,
  portfolio,
  sections
});

const initialState = {
  shapes: {
    types: ['sphere', 'hexagon', 'triangle'],
    active: 'triangle',
    positions: [...Array(6)].map(() => {
      return {rotate: { x: 0, y: 0, z: 0, a: 0 }};
    }),
    count: 6
  },
  header: ['about', 'experience', 'portfolio', 'contacts'],
  contacts: {
    social: [{
      'name': 'upwork',
      'icon': 'images/icons/upwork.jpeg',
      'link': 'https://www.upwork.com/o/profiles/users/_~01ffdcc3a73ddc8d3c/'
    }, {
      'name': 'linkedin',
      'icon': 'images/icons/linkedin.png',
      'link': 'https://www.linkedin.com/in/viktor-kukurba-32496549'
    }, {
      'name': 'facebook',
      'icon': 'images/icons/facebook.png',
      'link': 'https://www.facebook.com/viktor.kukurba'
    }, {
      'name': 'github',
      'icon': 'images/icons/git_hub.png',
      'link': 'https://github.com/ViktorKukurba'
    }, {
      'name': 'stackoverflow',
      'icon': 'images/icons/stackoverflow.png',
      'link': 'http://stackoverflow.com/users/1940821/viktor-kukurba'
    }],
    form: {
      alert: {
        show: false,
        success: true,
        message: ''
      },
      sending: false
    }
  },
  experience: {
    technologies: [{
      fullName: "Javascript",
      name: "js",
      val: "88",
      details: "Jquery,YUI, Angular JS, D3, Knockout JS"
    }, {
      fullName: "HTML/CSS",
      name: "html",
      val: "85",
      details: "Bootstrap, less, SASS, HTML5, CSS3"
    }, {
      fullName: "ASP.NET/C#",
      name: "asp",
      val: "70",
      details: "ASP.NET MVC, LINQ, SQL"
    }]
  },
  portfolio: {
      projects: [{
        name: 'vkukurba',
        info: "my personal webapplication",
        technologies: "HTML/CSS, SASS, React JS, jQuery JS, Bootstrap 4.",
        images: ['images/opt_my_web_app.png', 'images/opt_my_web_app_2.png',
          'images/opt_my_web_app_3.png'],
        link: "/"
      }, {
        name: 'lidikart',
        info: "gallery site for artist studio LidikART",
        technologies: "Angular JS (1.x), jQuery JS, Bootstrap 3, LESS, PHP.",
        images: ['images/opt_lidik_art_app.png', 'images/opt_lidik_art_app_2.png',
          'images/opt_lidik_art_app_3.png'],
        link: "http://lidikart.com.ua/en"
      }, {
        name: 'fredra',
        info: "info site for social organization fredra.61",
        technologies: "Angular JS (1.x), jQuery JS, Bootstrap 3, LESS, PHP.",
        images: ['images/opt_fredra_61_app.png', 'images/opt_fredra_61_app_2.png',
          'images/opt_fredra_61_app_3.png'],
        link: "http://fredra.org/en"
      }]
  },

  sections: {
    active: []
  }
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;