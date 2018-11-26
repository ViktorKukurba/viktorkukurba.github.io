import React, { Component } from 'react';

export default class GitHubInfo extends Component {
    state = {
        userData: {},
        repos: []
    }
    constructor() {
        super();
        const reposUrl = 'https://api.github.com/users/ViktorKukurba/repos';
        const userUrl = 'https://api.github.com/users/ViktorKukurba';
        Promise.all([fetch(userUrl).then(res => res.json()).then(userData => {
            this.setState({userData})
        }), fetch(reposUrl).then(res => res.json()).then(repos => {
            this.setState({repos});
        })])
    }

    render() {
        return <div>
            <h5>GitHub Account: <a href={this.state.userData.html_url} target="blank">{this.state.userData.login}</a> Repos:</h5>
            {this.renderRepos()}
        </div>
    }

    renderRepos() {
        return this.state.repos.filter(r => !r.fork).map(rep => {
            return <div key={rep.id}>
            <h5 className="d-inline-block mr-2"><a href={rep.html_url} target="blank">{rep.name}</a></h5>
            <div className="d-inline-block">{rep.description} ({rep.language})</div>
            </div>
        })
    }
}