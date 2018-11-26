import React, { Component } from 'react';

import { getTextFromHtml, getShortText } from '../Utils';

import '../styles/MediumFeed.sass';

class MediumFeeed extends Component {
    state = {
        stories: [],
        feed: {}
    }
    constructor() {
        super();
        const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40viktor.kukurba'

        fetch(URL).then(res => res.json()).then(data => {
            this.setState({
                stories: data.items,
                feed: data.feed
            })
        })
    }

    render() {
        return <div>
            <h5>{this.state.feed.title}</h5>
            {this.renderStories()}
        </div>
    }

    renderStories() {
        return this.state.stories.map(story => {
            const desc = getShortText(getTextFromHtml(story.content), 1000);
            return <div className="py-4 medium-article" key={story.guid}>
            <h5>{story.title}<a className="pl-4" target="blank" href={story.link}>Full article.</a></h5>
            <article className="text-justify"><img className="thumbnail pl-2" src={story.thumbnail}/>{desc}</article>
            </div>
        })
    }
}

export default MediumFeeed;