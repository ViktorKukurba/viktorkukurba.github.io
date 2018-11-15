import React, { Component } from 'react';

import SectionComponent from './SectionComponent';
import YoutubePlayer from './YoutubePlayer';

import '../styles/KnowledgeSharing.sass';

const tabs = ['youtube', 'medium', 'gitHub']

class KnowledgeSharing extends Component {
    constructor() {
        super();
        this.state = {
            active: tabs[0].toLowerCase()
        }
    }

    render() {
        return <SectionComponent id="knowledge-sharing">
            <div className="knowledge-sharing component">
                <header><h4>Knowledge Sharing</h4></header>
                <ul className="nav nav-tabs">
                    {tabs.map(tab => {
                        return <li key={tab} className="nav-item">
                        <a onClick={() => this.setState({active: tab})} className={"nav-link " + (this.state.active === tab ? 'active': '')}>{tab}</a>
                    </li>
                    })}
                </ul>
                <div className="content">
                {this.state.active === 'youtube' ? (<YoutubePlayer/>) : (
                    <h3 className="text-center" style={{padding: '5em 0'}}>Section in development</h3>
                )}
                </div>
            </div>
            </SectionComponent>
    }   
}

export default KnowledgeSharing;
