import {combineReducers, createStore, applyMiddleware} from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import shapes from './shapes'
import contacts from './contacts'
import experience from './experience'
import portfolio from './portfolio'
import sections from './sections'
import youtube from './youtube'

export const history = createBrowserHistory();


const rootReducer = combineReducers({
  shapes,
  contacts,
  experience,
  portfolio,
  sections,
  youtube,
  router: connectRouter(history),
});

const initialState = {
  shapes: {
    types: ['sphere', 'hexagon', 'triangle'],
    active: 'triangle',
    count: 6
  },
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
    applyMiddleware(thunk, thunkMiddleware, routerMiddleware(history))
);

export default store;
