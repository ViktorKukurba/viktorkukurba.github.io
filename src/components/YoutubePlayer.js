import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../reducers/index';
import YoutubeActions from '../actions/YoutubeActions'

import '../styles/YoutubePlayer.sass'

class YoutubePlayer extends Component {
    async componentWillMount() {
        await store.dispatch(YoutubeActions.fetchPlaylist());
    }
    render() {
        if (this.props.data.selected) {
            const url = `http://www.youtube.com/embed/${this.props.data.selected.snippet.resourceId.videoId}`;
            return <div className="youtube-player">
                <h6>{this.props.data.playlist.snippet.title}</h6>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="videoWrapper">
                            <iframe type="text/html" width="560" height="349" src={url} frameBorder="0" allowFullScreen/>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 youtube-items-wrapper">
                        {this.renderThumbnails()}
                    </div>
                </div>
            </div>
        }
        return <div>
            Loading...
        </div>
    }
    renderThumbnails() {
        return <div className="youtube-items-container">
            {this.props.data.items.map(item => {
                return <div key={item.id} className={"youtube-item " + (this.props.data.selected === item ? 'active': '')} onClick={() => store.dispatch(YoutubeActions.selectYoutubeItem(item))}>
                <img src={item.snippet.thumbnails.default.url}></img>   
                <span className="title">{item.snippet.title}</span>
                <br/>
                <span className="small">{this.subDescription(item)}</span>
                </div>})}
            </div>
    }
    
    subDescription(item) {
        const description = item.snippet.description;
        if (description.length > 150) {
            return `${description.substr(0, 150)}...`;
        }
        return description;
    }
}

export default connect(state => ({
    data: state.youtube
}))(YoutubePlayer)
