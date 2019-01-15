import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Greeting from './Greeting'
import About from './About'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contacts from './Contacts'
import KnowledgeSharing from './KnowledgeSharing'

import '../styles/Router.sass'

const routes = [{
    path: '/',
    component: Greeting,
    title: 'home'
}, {
    path: '/about',
    component: About,
}, {
    path: '/experience',
    component: Experience
}, {
    path: '/portfolio',
    component: Portfolio
}, {
    path: '/knowledge-sharing',
    component: KnowledgeSharing
}, {
    path: '/contacts',
    component: Contacts
}];

const PAGE_MOVE_DIRECTIONS = {
    BACK: 'page-back-move',
    FORWARD: 'page-forward-move'
}

let prevLocation;

const paths = routes.map(({path}) => path);

function getPageDirection(location) {
    const {FORWARD, BACK} = PAGE_MOVE_DIRECTIONS;
    if (!prevLocation) {
        prevLocation = location;
        return FORWARD
    }
    const index = paths.indexOf(location.pathname);
    const prevIndex = paths.indexOf(prevLocation.pathname);
    prevLocation = location;
    return index > prevIndex ? BACK : FORWARD;
}

function Container({location}) {
    const moveDirectionClass = getPageDirection(location);
    return <TransitionGroup className="w-100 h-100 pages-container">
        <CSSTransition
          key={location.key}
          timeout={{enter: 500, exit: 500}}
          classNames={moveDirectionClass}>
            <Switch location={location}>
            {routes.map(({path, component}) => <Route key={path} exact={path === '/'} path={path} component={component}/>)}
            </Switch>
        </CSSTransition></TransitionGroup>
};

export const links = routes.map(({path, title}) => ({
    path, 
    title: title || path.replace('-', ' ').replace('/', '')
}));

export default withRouter(Container);

