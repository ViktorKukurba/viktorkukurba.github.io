import React, { Component } from 'react';

import SectionComponent from './SectionComponent';
import YoutubePlayer from './YoutubePlayer';
import MediumFeed from './MediumFeed';
import GitHubInfo from './GitHubInfo';

import '../styles/KnowledgeSharing.sass';

const tabs = {'youtube': YoutubePlayer, 'medium': MediumFeed, 'gitHub': GitHubInfo}

class KnowledgeSharing extends Component {
    constructor() {
        super();
        this.state = {
            active: Object.keys(tabs)[0].toLowerCase()
        }
    }

    get tab() {
        return tabs[this.state.active]
    }

    render() {
        return <SectionComponent id="knowledge-sharing">
            <div className="knowledge-sharing h-100 h-auto-sm">
                <header><h4>Knowledge Sharing</h4></header>
                <ul className="nav nav-tabs">
                    {Object.keys(tabs).map(tab => {
                        return <li key={tab} className="nav-item">
                        <a onClick={() => this.setState({active: tab})} className={"nav-link " + (this.state.active === tab ? 'active': '')}>{tab}</a>
                    </li>
                    })}
                </ul>
                <div className="content h-100">
                    {<this.tab/>}
                </div>
            </div>
            </SectionComponent>
    }   
}

export default KnowledgeSharing;
