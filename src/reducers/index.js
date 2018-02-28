import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
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
    count: 6
  },
  header: ['about', 'experience', 'portfolio', 'contacts'],
  contacts: {
    social: []
  },
  experience: {
    technologies: []
  },
  portfolio: {
    projects: []
  },

  sections: {
    active: []
  }
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, thunkMiddleware)
);

export default store;